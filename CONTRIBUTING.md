# Contributing

Thanks for your interest in contributing to Skill Library! This guide will help you
add new skills or improve existing ones.

## Requesting a Skill

Suggest new skills by
[opening an issue](https://github.com/JoelLewis/skill-library/issues/new) with:
- The plugin/family it belongs to
- A brief description of what the skill would teach Claude
- Example use cases or trigger phrases
- Source material (books, articles) the skill should draw from

## Adding a New Skill

### 1. Choose the right plugin

Skills belong to one of six plugins:

| Plugin | Domain | Rigor |
|--------|--------|-------|
| `meta` | Process enforcement, learning | Full (iron laws, state machines) |
| `workflow` | Strategic planning, delivery | Full (iron laws, state machines) |
| `executive` | Leadership, decision-making | Standard (guiding principles) |
| `narrative` | Fiction, storytelling | Standard (guiding principles) |
| `rhetorician` | Non-fiction writing, persuasion | Standard (guiding principles) |
| `dealmaker` | Negotiation, communication | Standard (guiding principles) |

### 2. Create the skill directory

```bash
mkdir -p plugins/<plugin-name>/skills/<skill-name>
```

Directory names use `lowercase-hyphenated` format (e.g., `strategic-planning`).

### 3. Write the SKILL.md

Every skill needs a `SKILL.md` with YAML frontmatter:

```yaml
---
name: <skill-name>
description: <one-line description — include trigger phrases for skill matching>
type: meta | workflow | domain
family: meta | workflow | executive | narrative | rhetorician | dealmaker
rigor: full | standard
keywords: "comma,separated,search,terms"
compatibility: "Claude Code and compatible agent products"
requires: []
enhances: []
sources_pdf: ["Book Title (Author)"]
sources_web: ["URL description"]
---
```

The `name` field must match the directory name exactly.

### 4. Follow the template

**Full-rigor skills** (meta, workflow) must include:
- **Iron Law** — single non-negotiable constraint in `ALL-CAPS` backticks
- **State Machine** — Graphviz `dot` diagram (not Mermaid)
- **When to Use / When NOT to Use**
- **Core Process** — numbered steps with source citations
- **Cross-Skill Invocations** — required/recommended sub-skills
- **Rationalization Table** — common wrong thoughts mapped to reality
- **Red Flags** — thoughts indicating process drift
- **Diagnostic Checklist** — testable acceptance criteria

**Standard-rigor skills** (executive, narrative, rhetorician, dealmaker) must include:
- **Guiding Principles** — 3-7 foundational ideas with `(Source: Author, *Title*)` citations
- **When to Use / When NOT to Use**
- **Core Process** — numbered workflow steps
- **Frameworks & Models** — domain-specific mental models
- **Cross-Skill Invocations**
- **Common Mistakes** — typical failure modes
- **Diagnostic Checklist** — validation criteria

### 5. Ground in source material

Every principle must cite its source. Use inline citations:

```
### Principle 1: Invert, Always Invert (Source: Munger, *Poor Charlie's Almanack*)
```

List all sources in the frontmatter `sources_pdf` and `sources_web` fields.

### 6. Update cross-references

Update `requires` and `enhances` fields in both the new skill and any related
existing skills. Update the family's `README.md` to list the new skill.

## Improving Existing Skills

1. Read the existing skill thoroughly
2. Keep changes focused — one concern per PR
3. Preserve source citations; add new ones if adding content
4. Ensure iron laws and state machines remain intact for full-rigor skills
5. Update cross-references if changes affect related skills

## Submitting Your Contribution

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-skill-name`)
3. Make your changes
4. Test locally with Claude Code to verify the skill loads and triggers correctly
5. Submit a pull request describing what the skill teaches

## Quality Checklist

- [ ] `name` in frontmatter matches directory name
- [ ] `description` clearly explains when to use the skill
- [ ] Correct rigor level followed (full vs standard template)
- [ ] All principles cite source material
- [ ] State machine uses Graphviz `dot` syntax (full-rigor only)
- [ ] Iron law is backtick-wrapped ALL-CAPS sentence (full-rigor only)
- [ ] Cross-references updated in both directions
- [ ] Family README.md updated
- [ ] No sensitive data or credentials

## Questions?

Open an issue if you have questions or need help with your contribution.
