#!/usr/bin/env node

/**
 * Trigger eval runner for competing skill groups.
 * Tests whether skill descriptions correctly route user queries to the right skill.
 *
 * Uses `claude -p` to classify each query against competing skill descriptions.
 *
 * Usage: node scripts/run-trigger-eval.mjs evals/trigger-groups/strategy-group.json
 *    Or: node scripts/run-trigger-eval.mjs --all   (runs all groups)
 */

import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { execFileSync } from 'child_process';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');

function loadSkillDescriptions(skillNames) {
  const descriptions = new Map();
  const pluginsDir = join(ROOT, 'plugins');

  for (const family of readdirSync(pluginsDir)) {
    const skillsDir = join(pluginsDir, family, 'skills');
    try {
      for (const skill of readdirSync(skillsDir)) {
        if (!skillNames.includes(skill)) continue;

        const content = readFileSync(join(skillsDir, skill, 'SKILL.md'), 'utf-8');
        const descMatch = content.match(/^description:\s*"(.+?)"/m);
        if (descMatch) descriptions.set(skill, descMatch[1]);
      }
    } catch { /* not a skill family dir */ }
  }

  return descriptions;
}

function classifyQuery(query, descriptions) {
  const skillList = [...descriptions.entries()]
    .map(([name, desc]) => `- **${name}**: ${desc}`)
    .join('\n');

  const prompt = `You are evaluating skill routing. Given the user query below, which skill should be triggered? If none of them should trigger, respond with "none".

Available skills:
${skillList}

User query: "${query}"

Respond with ONLY the skill name (e.g., "strategy-clarity") or "none". No explanation.`;

  try {
    const result = execFileSync('claude', ['-p', '--model', 'haiku', prompt], {
      encoding: 'utf-8',
      timeout: 30000,
    }).trim().toLowerCase().replace(/["`]/g, '');

    return result;
  } catch (err) {
    return `error: ${err.message?.slice(0, 100)}`;
  }
}

function runGroup(filePath) {
  const group = JSON.parse(readFileSync(filePath, 'utf-8'));
  const descriptions = loadSkillDescriptions(group.skills_under_test);

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Group: ${group.group}`);
  console.log(`Skills: ${group.skills_under_test.join(', ')}`);
  console.log(`Evals: ${group.evals.length}`);
  console.log('='.repeat(60));

  let correct = 0;
  let total = 0;
  const results = [];

  for (const eval_ of group.evals) {
    total++;
    const expected = eval_.should_trigger_not ? 'none' : eval_.should_trigger;
    const predicted = classifyQuery(eval_.query, descriptions);
    const pass = predicted === expected;
    if (pass) correct++;

    const icon = pass ? '\x1b[32m\u2714\x1b[0m' : '\x1b[31m\u2718\x1b[0m';
    const queryPreview = eval_.query.slice(0, 80) + (eval_.query.length > 80 ? '...' : '');
    console.log(`  ${icon} [${expected}] ${pass ? '' : `got [${predicted}] `}${queryPreview}`);

    results.push({ query: eval_.query, expected, predicted, pass, rationale: eval_.rationale });
  }

  const accuracy = ((correct / total) * 100).toFixed(1);
  console.log(`\n  Accuracy: ${correct}/${total} (${accuracy}%)`);

  // Per-skill breakdown
  const bySkill = new Map();
  for (const r of results) {
    if (!bySkill.has(r.expected)) bySkill.set(r.expected, { tp: 0, fp: 0, fn: 0, total: 0 });
    bySkill.get(r.expected).total++;
    if (r.pass) bySkill.get(r.expected).tp++;
    else bySkill.get(r.expected).fn++;

    // False positives: predicted this skill but shouldn't have
    if (!r.pass && r.predicted !== 'none') {
      if (!bySkill.has(r.predicted)) bySkill.set(r.predicted, { tp: 0, fp: 0, fn: 0, total: 0 });
      bySkill.get(r.predicted).fp++;
    }
  }

  console.log('\n  Per-skill breakdown:');
  for (const [skill, stats] of bySkill) {
    const precision = stats.tp + stats.fp > 0 ? (stats.tp / (stats.tp + stats.fp) * 100).toFixed(0) : 'N/A';
    const recall = stats.total > 0 ? (stats.tp / stats.total * 100).toFixed(0) : 'N/A';
    console.log(`    ${skill}: precision=${precision}% recall=${recall}% (${stats.tp}/${stats.total} correct)`);
  }

  return { group: group.group, accuracy: parseFloat(accuracy), correct, total, results };
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: node scripts/run-trigger-eval.mjs <group.json> [--all]');
    process.exit(1);
  }

  const groupFiles = args[0] === '--all'
    ? readdirSync(join(ROOT, 'evals', 'trigger-groups'))
        .filter(f => f.endsWith('.json'))
        .map(f => join(ROOT, 'evals', 'trigger-groups', f))
    : [args[0]];

  const allResults = [];

  for (const file of groupFiles) {
    const result = runGroup(file);
    allResults.push(result);
  }

  // Overall summary
  if (allResults.length > 1) {
    console.log(`\n${'='.repeat(60)}`);
    console.log('OVERALL SUMMARY');
    console.log('='.repeat(60));
    const totalCorrect = allResults.reduce((s, r) => s + r.correct, 0);
    const totalEvals = allResults.reduce((s, r) => s + r.total, 0);
    for (const r of allResults) {
      console.log(`  ${r.group}: ${r.accuracy}%`);
    }
    console.log(`  Overall: ${((totalCorrect / totalEvals) * 100).toFixed(1)}%`);
  }

  // Save results
  const outputPath = join(ROOT, 'evals', 'trigger-results.json');
  writeFileSync(outputPath, JSON.stringify(allResults, null, 2));
  console.log(`\nResults saved to ${outputPath}`);
}

main();
