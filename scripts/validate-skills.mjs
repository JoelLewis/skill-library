#!/usr/bin/env node

/**
 * Structural validator for the skill library.
 * Validates all SKILL.md files for frontmatter schema, rigor-level sections,
 * dependency graph integrity, source attribution, and naming conventions.
 *
 * Usage: node scripts/validate-skills.mjs
 * Exit code: 0 if all pass, 1 if any errors found
 */

import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const PLUGINS_DIR = join(ROOT, 'plugins');

const FAMILIES = ['meta', 'workflow', 'executive', 'narrative', 'rhetorician', 'dealmaker'];
const FULL_RIGOR_FAMILIES = new Set(['meta', 'workflow']);

const REQUIRED_TOP_FIELDS = ['name', 'description', 'license', 'compatibility'];
const REQUIRED_METADATA_FIELDS = ['type', 'family', 'rigor', 'keywords', 'requires', 'enhances', 'sources_pdf', 'sources_web'];

const FULL_RIGOR_SECTIONS = ['Iron Law', 'State Machine', 'Rationalization Table', 'Red Flags', 'Diagnostic Checklist'];
const STANDARD_RIGOR_SECTIONS = ['Guiding Principles', 'Frameworks', 'Common Mistakes', 'Diagnostic Checklist'];

const WORKFLOW_CHAIN = [
  'problem-framing',
  'stakeholder-discovery',
  'market-context',
  'competitive-analysis',
  'buyer-persona',
  'business-case',
  'assumption-audit',
  'stakeholder-review',
];

// ─── Helpers ───────────────────────────────────────────

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const yaml = match[1];
  const result = { _raw: yaml, metadata: {} };

  let inMetadata = false;
  for (const line of yaml.split('\n')) {
    if (line.startsWith('metadata:')) {
      inMetadata = true;
      continue;
    }

    if (inMetadata && /^\s{2}\w/.test(line)) {
      const [key, ...rest] = line.trim().split(':');
      result.metadata[key.trim()] = rest.join(':').trim().replace(/^"(.*)"$/, '$1');
    } else if (!inMetadata && /^\w/.test(line)) {
      const colonIdx = line.indexOf(':');
      if (colonIdx > -1) {
        const key = line.slice(0, colonIdx).trim();
        const val = line.slice(colonIdx + 1).trim().replace(/^"(.*)"$/, '$1');
        result[key] = val;
      }
    }
  }

  return result;
}

function parseCommaSeparated(val) {
  if (!val || val === '""' || val === "''") return [];
  return val.split(',').map(s => s.trim()).filter(Boolean);
}

function findSections(content) {
  const headings = [];
  for (const line of content.split('\n')) {
    const match = line.match(/^##\s+(.+)/);
    if (match) headings.push(match[1].trim());
  }
  return headings;
}

function hasSection(headings, name) {
  return headings.some(h => h.toLowerCase().includes(name.toLowerCase()));
}

// ─── Discovery ─────────────────────────────────────────

function discoverSkills() {
  const skills = [];

  for (const family of FAMILIES) {
    const skillsDir = join(PLUGINS_DIR, family, 'skills');
    if (!existsSync(skillsDir)) continue;

    for (const entry of readdirSync(skillsDir)) {
      const skillDir = join(skillsDir, entry);
      if (!statSync(skillDir).isDirectory()) continue;

      const skillFile = join(skillDir, 'SKILL.md');
      if (!existsSync(skillFile)) {
        skills.push({ family, dirName: entry, path: skillFile, exists: false });
        continue;
      }

      const content = readFileSync(skillFile, 'utf-8');
      const frontmatter = parseFrontmatter(content);
      const headings = findSections(content);

      skills.push({ family, dirName: entry, path: skillFile, exists: true, content, frontmatter, headings });
    }
  }

  return skills;
}

// ─── Validators ────────────────────────────────────────

function validateFrontmatter(skill) {
  const errors = [];
  const fm = skill.frontmatter;

  if (!fm) {
    errors.push('Missing or unparseable YAML frontmatter');
    return errors;
  }

  for (const field of REQUIRED_TOP_FIELDS) {
    if (!fm[field]) errors.push(`Missing top-level field: ${field}`);
  }

  for (const field of REQUIRED_METADATA_FIELDS) {
    if (!(field in fm.metadata)) errors.push(`Missing metadata field: ${field}`);
  }

  // Name must match directory name
  if (fm.name && fm.name !== skill.dirName) {
    errors.push(`Name mismatch: frontmatter "${fm.name}" vs directory "${skill.dirName}"`);
  }

  // Family must match directory parent
  if (fm.metadata.family && fm.metadata.family !== skill.family) {
    errors.push(`Family mismatch: frontmatter "${fm.metadata.family}" vs directory "${skill.family}"`);
  }

  // Rigor must match family
  const expectedRigor = FULL_RIGOR_FAMILIES.has(skill.family) ? 'full' : 'standard';
  if (fm.metadata.rigor && fm.metadata.rigor !== expectedRigor) {
    errors.push(`Rigor mismatch: frontmatter "${fm.metadata.rigor}" but family "${skill.family}" expects "${expectedRigor}"`);
  }

  // Description length check
  if (fm.description && fm.description.length > 1024) {
    errors.push(`Description exceeds 1024 chars (${fm.description.length})`);
  }

  return errors;
}

function validateSections(skill) {
  const errors = [];
  const isFullRigor = FULL_RIGOR_FAMILIES.has(skill.family);
  const requiredSections = isFullRigor ? FULL_RIGOR_SECTIONS : STANDARD_RIGOR_SECTIONS;

  for (const section of requiredSections) {
    if (!hasSection(skill.headings, section)) {
      errors.push(`Missing required section: "${section}" (${isFullRigor ? 'full' : 'standard'} rigor)`);
    }
  }

  // Full rigor: check for dot syntax in state machine
  if (isFullRigor) {
    if (!skill.content.includes('```dot')) {
      errors.push('State machine missing Graphviz dot code block');
    }
  }

  // Full rigor: check Iron Law is in ALL-CAPS backtick format
  if (isFullRigor) {
    // Iron Laws are backtick-wrapped ALL-CAPS sentences (may contain articles,
    // punctuation, and inner quotes). Most start with "NO" but some use "IF".
    const ironLawPattern = /^`([A-Z][A-Z\s\u2014\-—',"%.0-9]+)`$/m;
    const ironLawMatch = skill.content.match(ironLawPattern);
    if (!ironLawMatch) {
      errors.push('Iron Law not in expected backtick-wrapped ALL-CAPS format');
    }
  }

  return errors;
}

function validateNaming(skill) {
  const errors = [];

  if (skill.dirName !== skill.dirName.toLowerCase()) {
    errors.push(`Directory name not lowercase: "${skill.dirName}"`);
  }

  if (!/^[a-z][a-z0-9-]*$/.test(skill.dirName)) {
    errors.push(`Directory name not valid kebab-case: "${skill.dirName}"`);
  }

  return errors;
}

function validateSources(skill) {
  const warnings = [];
  const fm = skill.frontmatter;
  if (!fm) return warnings;

  const isMetaFamily = skill.family === 'meta';
  const pdfEmpty = !fm.metadata.sources_pdf || fm.metadata.sources_pdf === '';
  const webEmpty = !fm.metadata.sources_web || fm.metadata.sources_web === '';

  if (!isMetaFamily && pdfEmpty && webEmpty) {
    warnings.push('No source citations (both sources_pdf and sources_web are empty)');
  }

  if (isMetaFamily && pdfEmpty && webEmpty) {
    warnings.push('Meta skill with empty sources (expected for process skills, but consider adding "N/A" or citing design methodology)');
  }

  return warnings;
}

// ─── Dependency Graph ──────────────────────────────────

function validateDependencies(skills) {
  const errors = [];
  const allSkillNames = new Set(skills.filter(s => s.exists && s.frontmatter).map(s => s.frontmatter.name));

  for (const skill of skills) {
    if (!skill.exists || !skill.frontmatter) continue;

    const requires = parseCommaSeparated(skill.frontmatter.metadata.requires);
    const enhances = parseCommaSeparated(skill.frontmatter.metadata.enhances);

    for (const dep of requires) {
      if (!allSkillNames.has(dep)) {
        errors.push({ skill: skill.frontmatter.name, msg: `requires non-existent skill: "${dep}"` });
      }
    }

    for (const dep of enhances) {
      if (!allSkillNames.has(dep)) {
        errors.push({ skill: skill.frontmatter.name, msg: `enhances non-existent skill: "${dep}"` });
      }
    }
  }

  // Validate workflow chain ordering
  const workflowSkills = skills.filter(s => s.family === 'workflow' && s.exists && s.frontmatter);
  const workflowByName = new Map(workflowSkills.map(s => [s.frontmatter.name, s]));

  for (let i = 1; i < WORKFLOW_CHAIN.length; i++) {
    const current = WORKFLOW_CHAIN[i];
    const predecessor = WORKFLOW_CHAIN[i - 1];
    const skill = workflowByName.get(current);

    if (!skill) continue;

    const requires = parseCommaSeparated(skill.frontmatter.metadata.requires);
    if (!requires.includes(predecessor)) {
      errors.push({
        skill: current,
        msg: `Workflow chain break: should require "${predecessor}" (chain position ${i})`
      });
    }
  }

  // Check for dependency cycles
  const graph = new Map();
  for (const skill of skills) {
    if (!skill.exists || !skill.frontmatter) continue;
    const name = skill.frontmatter.name;
    const requires = parseCommaSeparated(skill.frontmatter.metadata.requires);
    graph.set(name, requires);
  }

  function hasCycle(node, visited, stack) {
    visited.add(node);
    stack.add(node);
    for (const dep of (graph.get(node) || [])) {
      if (!visited.has(dep)) {
        if (hasCycle(dep, visited, stack)) return true;
      } else if (stack.has(dep)) {
        errors.push({ skill: node, msg: `Dependency cycle detected involving "${dep}"` });
        return true;
      }
    }
    stack.delete(node);
    return false;
  }

  const visited = new Set();
  for (const name of graph.keys()) {
    if (!visited.has(name)) {
      hasCycle(name, visited, new Set());
    }
  }

  return errors;
}

// ─── README Validation ─────────────────────────────────

function validateReadmes(skills) {
  const errors = [];

  for (const family of FAMILIES) {
    const readmePath = join(PLUGINS_DIR, family, 'README.md');
    if (!existsSync(readmePath)) {
      errors.push({ family, msg: 'Missing README.md' });
      continue;
    }

    const readmeContent = readFileSync(readmePath, 'utf-8');
    const familySkills = skills.filter(s => s.family === family && s.exists);

    for (const skill of familySkills) {
      if (!readmeContent.includes(skill.dirName)) {
        errors.push({ family, msg: `README.md does not mention skill "${skill.dirName}"` });
      }
    }
  }

  return errors;
}

// ─── Plugin.json Validation ────────────────────────────

function validatePluginJsons() {
  const errors = [];

  for (const family of FAMILIES) {
    const pluginPath = join(PLUGINS_DIR, family, '.claude-plugin', 'plugin.json');
    if (!existsSync(pluginPath)) {
      errors.push({ family, msg: 'Missing .claude-plugin/plugin.json' });
      continue;
    }

    try {
      const content = JSON.parse(readFileSync(pluginPath, 'utf-8'));
      if (!content.name) errors.push({ family, msg: 'plugin.json missing "name" field' });
      if (!content.description) errors.push({ family, msg: 'plugin.json missing "description" field' });
    } catch {
      errors.push({ family, msg: 'plugin.json is not valid JSON' });
    }
  }

  // Root marketplace
  const marketplacePath = join(ROOT, '.claude-plugin', 'marketplace.json');
  if (!existsSync(marketplacePath)) {
    errors.push({ family: 'root', msg: 'Missing .claude-plugin/marketplace.json' });
  }

  return errors;
}

// ─── Main ──────────────────────────────────────────────

function main() {
  console.log('Skill Library Structural Validator');
  console.log('══════════════════════════════════════════════\n');

  const skills = discoverSkills();
  console.log(`Discovered ${skills.length} skill directories across ${FAMILIES.length} families\n`);

  let totalErrors = 0;
  let totalWarnings = 0;
  const errorsBySkill = new Map();
  const warningsBySkill = new Map();

  // Per-skill validation
  for (const skill of skills) {
    const skillId = `${skill.family}/${skill.dirName}`;
    const errors = [];
    const warnings = [];

    if (!skill.exists) {
      errors.push('SKILL.md file not found in directory');
    } else {
      errors.push(...validateFrontmatter(skill));
      errors.push(...validateSections(skill));
      errors.push(...validateNaming(skill));
      warnings.push(...validateSources(skill));
    }

    if (errors.length) errorsBySkill.set(skillId, errors);
    if (warnings.length) warningsBySkill.set(skillId, warnings);
    totalErrors += errors.length;
    totalWarnings += warnings.length;
  }

  // Cross-cutting validation
  const depErrors = validateDependencies(skills);
  const readmeErrors = validateReadmes(skills);
  const pluginErrors = validatePluginJsons();

  totalErrors += depErrors.length + readmeErrors.length + pluginErrors.length;

  // ─── Report ────────────────────────────────────────

  // Per-skill errors
  if (errorsBySkill.size > 0) {
    console.log('ERRORS (per-skill)');
    console.log('──────────────────────────────────────────────');
    for (const [skillId, errors] of errorsBySkill) {
      console.log(`  ${skillId}:`);
      for (const e of errors) console.log(`    \x1b[31m\u2718\x1b[0m ${e}`);
    }
    console.log();
  }

  // Per-skill warnings
  if (warningsBySkill.size > 0) {
    console.log('WARNINGS (per-skill)');
    console.log('──────────────────────────────────────────────');
    for (const [skillId, warnings] of warningsBySkill) {
      console.log(`  ${skillId}:`);
      for (const w of warnings) console.log(`    \x1b[33m\u26a0\x1b[0m ${w}`);
    }
    console.log();
  }

  // Dependency errors
  if (depErrors.length > 0) {
    console.log('DEPENDENCY GRAPH ERRORS');
    console.log('──────────────────────────────────────────────');
    for (const e of depErrors) console.log(`  \x1b[31m\u2718\x1b[0m ${e.skill}: ${e.msg}`);
    console.log();
  }

  // README errors
  if (readmeErrors.length > 0) {
    console.log('README ERRORS');
    console.log('──────────────────────────────────────────────');
    for (const e of readmeErrors) console.log(`  \x1b[31m\u2718\x1b[0m ${e.family}: ${e.msg}`);
    console.log();
  }

  // Plugin errors
  if (pluginErrors.length > 0) {
    console.log('PLUGIN CONFIG ERRORS');
    console.log('──────────────────────────────────────────────');
    for (const e of pluginErrors) console.log(`  \x1b[31m\u2718\x1b[0m ${e.family}: ${e.msg}`);
    console.log();
  }

  // Summary
  console.log('══════════════════════════════════════════════');
  console.log(`SUMMARY: ${skills.length} skills | ${totalErrors} errors | ${totalWarnings} warnings`);

  if (totalErrors === 0) {
    console.log('\x1b[32m\u2714 All structural checks passed!\x1b[0m');
  } else {
    console.log(`\x1b[31m\u2718 ${totalErrors} errors found — fix before merging.\x1b[0m`);
  }

  process.exit(totalErrors > 0 ? 1 : 0);
}

main();
