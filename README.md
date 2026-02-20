# Skill Library for Claude Code

A collection of Claude Code skill plugins for thinking, writing, leadership, and
negotiation. 41 skills across 6 domain plugins teach Claude structured frameworks
from 109 books — covering process discipline, strategic planning, executive
decision-making, fiction craft, non-fiction persuasion, and interpersonal negotiation.

Built by [Joel Lewis](https://github.com/JoelLewis).

**Contributions welcome!** Found a way to improve a skill or have a new one to add?
See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Plugins

### `meta` — Process Enforcement

Skills that govern how the agent operates, learns, and improves. Full rigor —
includes iron laws, state machines, and rationalization tables.

| Skill | What Claude can do |
|-------|-------------------|
| `getting-started` | Bootstrap a session and route to the correct skill |
| `using-skills` | Enforce the 1% rule — invoke skills before responding |
| `writing-skills` | Author new skills using TDD methodology |
| `prompt-optimizer` | Refine prompts using the Patty 4-D methodology |
| `mental-model-library` | Apply cross-domain reasoning frameworks |
| `learning-accelerator` | Synthesize knowledge using meta-learning patterns |

6 skills.

---

### `workflow` — Strategic Discovery-to-Delivery

The full strategic planning chain from problem definition through validated
deliverables. Full rigor — each skill enforces gates before proceeding.

| Skill | What Claude can do |
|-------|-------------------|
| `problem-framing` | Define and validate the problem before analysis |
| `stakeholder-discovery` | Map audiences, influence, and information needs |
| `market-context` | Analyze competitive landscape and market dynamics |
| `competitive-analysis` | Structured competitor teardown and positioning |
| `buyer-persona` | Build JTBD-driven personas with behavioral detail |
| `business-case` | Construct ROI models and investment theses |
| `prd-writing` | Write product requirements using PR/FAQ method |
| `pitch-deck` | Build investor or internal pitch narratives |
| `one-pager` | Distill strategy into executive summary documents |
| `executive-briefing` | Communicate at board level with precision |
| `assumption-audit` | Validate every key claim with evidence |
| `stakeholder-review` | Collect structured feedback and iterate |

12 skills. Designed as a chain: `problem-framing` → `stakeholder-discovery` →
`market-context` → `competitive-analysis` → `buyer-persona` → `business-case` →
deliverables → `assumption-audit` → `stakeholder-review`.

---

### `executive` — Leadership & Organizational Execution

Leadership frameworks grounded in books by Munger, Taleb, Duke, Collins, and others.
Standard rigor — guiding principles with source citations.

| Skill | What Claude can do |
|-------|-------------------|
| `strategy-clarity` | Cut through ambiguity to define strategic direction |
| `devils-advocate` | Stress-test proposals using inversion and fragility detection |
| `operational-excellence` | Design systems for consistent execution |
| `platform-strategist` | Evaluate and design platform business models |
| `ownership-coach` | Build accountability and ownership culture |
| `first-90-days` | Navigate leadership transitions effectively |
| `hiring-talent` | Evaluate candidates beyond resume signals |
| `team-builder` | Design and develop high-performing teams |
| `decision-frameworks` | Apply structured decision-making under uncertainty |

9 skills.

---

### `narrative` — Fiction & Storytelling

Fiction craft techniques from masters of story structure, character design, and
world-building.

| Skill | What Claude can do |
|-------|-------------------|
| `fiction-architect` | Design plot architecture with structural precision |
| `character-vulnerability` | Create characters with authentic emotional depth |
| `world-building-logic` | Build internally consistent fictional worlds |
| `dialogue-craft` | Write dialogue that reveals character and advances plot |

4 skills.

---

### `rhetorician` — Non-Fiction Writing & Persuasion

Writing craft for clarity, emotional resonance, and evidence-based persuasion.

| Skill | What Claude can do |
|-------|-------------------|
| `non-fiction-precision` | Structure arguments with clarity and logical rigor |
| `copy-editor` | Polish prose for grammar, rhythm, and consistency |
| `resonance-engine` | Craft writing that connects emotionally with readers |
| `memo-stress-tester` | Pressure-test memos and briefs for weak arguments |
| `scientific-advertising` | Apply evidence-based advertising principles |

5 skills.

---

### `dealmaker` — Negotiation & Interpersonal Skills

Negotiation and communication frameworks from Voss, Fisher, Cialdini, and others.

| Skill | What Claude can do |
|-------|-------------------|
| `negotiation-tactician` | Apply tactical empathy and calibrated questions |
| `influence-architect` | Design ethical influence strategies |
| `rapport-builder` | Build trust and connection in professional contexts |
| `feedback-coach` | Deliver and receive feedback effectively |
| `difficult-conversations` | Navigate high-stakes interpersonal situations |

5 skills.

---

## Installation

### Option 1: Claude Code Marketplace (Recommended)

Register the marketplace and install plugins:

```bash
# Add the marketplace
/plugin marketplace add JoelLewis/skill-library

# Install individual plugins
/plugin install meta@skill-library
/plugin install workflow@skill-library
/plugin install executive@skill-library
/plugin install narrative@skill-library
/plugin install rhetorician@skill-library
/plugin install dealmaker@skill-library
```

Or browse available plugins interactively with `/plugin` → Discover tab.

### Option 2: Clone and Copy

Copy skills directly into a project:

```bash
git clone https://github.com/JoelLewis/skill-library.git
mkdir -p /path/to/your/project/.claude/skills

# Copy a single plugin's skills
cp -r skill-library/plugins/executive/skills/* /path/to/your/project/.claude/skills/

# Or copy everything
for plugin in skill-library/plugins/*/; do
  cp -r "$plugin"skills/* /path/to/your/project/.claude/skills/
done
```

### What Gets Installed

```
your-project/
└── .claude/
    └── skills/
        ├── getting-started/       # from meta
        ├── problem-framing/       # from workflow
        ├── devils-advocate/       # from executive
        └── ...
```

After installing, Claude automatically picks up the skills. They appear in your
available skills list and trigger based on context.

---

## Repository Structure

```
skill-library/
├── .claude-plugin/
│   └── marketplace.json           # Marketplace definition (6 plugins)
├── plugins/
│   ├── meta/
│   │   ├── .claude-plugin/plugin.json
│   │   └── skills/
│   │       ├── getting-started/SKILL.md
│   │       ├── using-skills/SKILL.md
│   │       └── ...
│   ├── workflow/                   # 12 skills
│   ├── executive/                  # 9 skills
│   ├── narrative/                  # 4 skills
│   ├── rhetorician/                # 5 skills
│   └── dealmaker/                  # 5 skills
├── CLAUDE.md                       # Claude Code project instructions
├── GEMINI.md                       # Extraction architecture spec
└── PROGRESS.md                     # Completion report
```

---

## Skill Architecture

### Two Rigor Levels

**Full rigor** (meta + workflow, 18 skills) enforce process:
- **Iron Law** — single non-negotiable constraint
- **State Machine** — Graphviz workflow diagram
- **Rationalization Table** — intercepts common shortcut-thinking
- **Red Flags** — thoughts that indicate process drift
- **Diagnostic Checklist** — testable acceptance criteria

**Standard rigor** (executive, narrative, rhetorician, dealmaker, 23 skills) encode
expertise:
- **Guiding Principles** — foundational ideas with source citations
- **Frameworks & Models** — domain-specific mental models
- **Common Mistakes** — typical failure modes
- **Diagnostic Checklist** — validation criteria

### Source Attribution

Every principle and framework cites its source book or article. No ungrounded
methodologies. Sources include works by Voss, Fisher, Munger, Taleb, Duke, Cialdini,
and 100+ other authors across 109 PDFs.

### Skill Chaining

Skills declare `requires` and `enhances` dependencies in frontmatter. The workflow
family forms a validated chain — each skill gates the next.

---

## License

MIT
