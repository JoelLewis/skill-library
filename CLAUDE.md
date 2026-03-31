# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A Claude Code marketplace containing 41 agent skills organized into 6 plugin families, extracted from 109 PDFs using Google Gemini. Each plugin bundles skills that encode domain expertise and process discipline. This is a content repository — no build system, no tests, no application code.

## Repository Structure

```
.claude-plugin/
└── marketplace.json              # Marketplace definition (lists 6 plugins)
plugins/
├── meta/                         # 6 skills — FULL rigor (process enforcement)
│   ├── .claude-plugin/plugin.json
│   ├── skills/{name}/SKILL.md
│   └── README.md
├── workflow/                     # 12 skills — FULL rigor (strategic discovery-to-delivery)
├── executive/                    # 9 skills — STANDARD rigor (leadership & org execution)
├── narrative/                    # 4 skills — STANDARD rigor (fiction & storytelling)
├── rhetorician/                  # 5 skills — STANDARD rigor (non-fiction writing)
└── dealmaker/                    # 5 skills — STANDARD rigor (negotiation & interpersonal)
```

- `GEMINI.md` — Master specification: architecture, templates, resource mappings, extraction methodology (120KB)
- `PROGRESS.md` — Batch completion report (41/41 skills, project finalized)

## Plugin System

This repo is a **marketplace** — install the whole thing or individual family plugins.

```sh
# Install all plugins via marketplace
claude install /path/to/skill-library

# Skills are then invocable as plugin-name:skill-name
# e.g., meta:getting-started, workflow:problem-framing, dealmaker:negotiation-tactician
```

Each family is a standalone plugin with its own `.claude-plugin/plugin.json`. Skills within a plugin are independently invocable.

For standalone use without the plugin system, copy any `skills/{name}/SKILL.md` directory into a project's `.claude/skills/` folder.

## Two Rigor Levels

**Full rigor** (meta + workflow families, 18 skills): Enforce process. Each has:
- **Iron Law** — A single non-negotiable constraint (e.g., "NO SKILL WITHOUT A FAILING TEST FIRST")
- **State Machine** — Graphviz `dot` diagram defining workflow states and transitions
- **Rationalization Table** — Maps common shortcut-thinking to reality
- **Red Flags** — Thoughts that indicate process drift
- **Diagnostic Checklist** — Testable acceptance criteria

**Standard rigor** (executive, narrative, rhetorician, dealmaker families, 23 skills): Encode expertise. Each has:
- **Guiding Principles** — Foundational ideas with source citations
- **Frameworks & Models** — Domain-specific mental models
- **Common Mistakes** — Typical failure modes
- **Diagnostic Checklist** — Validation criteria

## Skill File Format

Each skill lives at `plugins/{family}/skills/{skill-name}/SKILL.md` with YAML frontmatter conforming to the [agentskills.io specification](https://agentskills.io/specification):

```yaml
---
name: kebab-case-name
description: "What the skill does + when to activate it (under 1024 chars)"
license: MIT
compatibility: "Claude Code and compatible agent products"
metadata:
  type: "meta | workflow | domain"
  family: "meta | workflow | executive | narrative | rhetorician | dealmaker"
  rigor: "full | standard"
  keywords: "comma, separated, search, terms"
  requires: "skill-a, skill-b"          # Prerequisite skills (comma-separated)
  enhances: "skill-c, skill-d"          # Skills improved by combination
  sources_pdf: "Book Title (Author)"    # Book citations (comma-separated)
  sources_web: "Source Name"            # Web citations (comma-separated)
---
```

Top-level fields (`name`, `description`, `license`, `compatibility`) are spec-recognized. All other fields live under `metadata` as string values. Claude Code reads `name` and `description` for routing; the remaining fields are metadata for tooling and human reference.

## Key Architectural Concepts

**The 1% Rule** (`meta:using-skills`): If there is even a 1% chance a skill applies, invoke it before responding. This is the core enforcement mechanism.

**Session Bootstrap** (`meta:getting-started`): Routes new tasks to the correct skill. Start here.

**Skill Chaining**: Skills declare `requires` and `enhances` dependencies in `metadata` (as comma-separated strings). The workflow family forms a chain: `problem-framing` → `stakeholder-discovery` → `market-context` → `competitive-analysis` → `buyer-persona` → `business-case` → deliverable skills (`prd-writing`, `pitch-deck`, `one-pager`, `executive-briefing`) → `assumption-audit` → `stakeholder-review`.

**Source Attribution**: Every principle and framework cites its source (book or URL). No ungrounded methodologies.

**Writing New Skills**: Follow `meta:writing-skills` — TDD approach. Define the user problem, write a failing test case, then author the skill content. New skills go in `plugins/{family}/skills/{skill-name}/SKILL.md`.

## Conventions

- Skills live in `plugins/{family}/skills/{skill-name}/SKILL.md`
- Skill names and directories: `kebab-case`
- Each family plugin has a `README.md` listing its skills
- State machines use Graphviz `dot` syntax (not Mermaid)
- Iron laws are backtick-wrapped ALL-CAPS sentences
- Source citations inline: `(Source: Author, *Title*)`
- Plugin metadata: `.claude-plugin/plugin.json` per family, `.claude-plugin/marketplace.json` at root

## Writing Voice

When drafting non-fiction prose, state things directly. Do not use contrast framing ("This isn't X, it's Y"), engagement bait ("But here's the thing," "Here's what most people get wrong"), or contrarian hooks ("The real question is…"). If the point is strong, it does not need a theatrical frame.

## Linear

Linear project: **Dev Tooling** (team: Joellewis)
