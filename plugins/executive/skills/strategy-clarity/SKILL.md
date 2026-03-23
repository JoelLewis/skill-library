---
name: strategy-clarity
description: "Use when an organization needs strategic clarity — identifying where to play, how to win, and whether the position is defensible. Composes Wardley evolution mapping, Lafley's choice cascade, Helmer's 7 Powers, and Working Backwards based on what's already decided."
license: MIT
compatibility: "Claude Code and compatible agent products"
metadata:
  type: "domain"
  family: "executive"
  rigor: "standard"
  keywords: "positioning, strategy, competitive-advantage, vision, business-direction, planning"
  requires: ""
  enhances: "problem-framing, market-context, competitive-analysis, platform-strategist, business-case"
  sources_pdf: "Playing to Win (Lafley), Zero to One (Thiel), Working Backwards (Bryar), Lessons from the Titans (Davis), 7 Powers (Helmer), Good Strategy Bad Strategy (Rumelt), Wardley Maps (Wardley)"
  sources_web: "Stratechery: Aggregation Theory, Stratechery: The Bill Gates Line, Stratechery: Tech's Two Philosophies"
---

## Overview

Strategy clarity is the process of defining a coordinated set of choices that uniquely position an organization to win. This skill composes four frameworks into a pipeline: Wardley evolution mapping builds situational awareness, Lafley's cascade makes the choices, Helmer's 7 Powers stress-tests defensibility, and Working Backwards translates intent into execution. The Lafley cascade is the default and core process; the others compose around it based on what's already decided.

## Decision State

Strategic clarity is not a single framework — it is a pipeline of frameworks, each handling a different phase. Your entry point depends on what's already decided:

**What's already decided determines where you start:**

1. **Nothing — greenfield, pivot, or "we don't know where to play"**
   Start with evolution mapping to build situational awareness before choosing.
   → Read `references/evolution-mapping.md`, then return here for the Cascade.

2. **Where to play is clear, how to win isn't**
   Start with the Strategic Choice Cascade below (Step 3: How to Win).

3. **Strategy is chosen, unsure if it's defensible**
   Stress-test the position for durable power sources.
   → Read `references/seven-powers-audit.md`.

4. **Strategy is validated, need execution machinery**
   Translate strategic intent into customer-facing artifacts.
   → Read `references/working-backwards-execution.md`.

Each phase validates the previous one's output. If the Lafley cascade produces a vague position ("be the best platform"), loop back to evolution mapping. If 7 Powers finds no defensible power source, loop back to How to Win.

> **Organizational commitment.** This skill covers strategic *choice*, not organizational *adoption*. Securing institutional commitment for a strategy — coalition-building, guiding policy, coherent action — is a distinct challenge not covered here. (See: Rumelt, *Good Strategy Bad Strategy*; Kotter, *Leading Change*.)

## Guiding Principles

### Principle 1: Strategy is Choice (Source: Lafley, *Playing to Win*)
Strategy is not a goal or a vision; it is a coordinated set of choices that uniquely positions the firm. If you haven't made a choice about where *not* to play, you don't have a strategy.

### Principle 2: The Monopoly Aim (Source: Thiel, *Zero to One*)
Every successful business is a monopoly by solving a unique problem. Competition is a destructive force that competes away profits. Your strategy must aim for 0-to-1 vertical progress, not 1-to-n horizontal copying.

### Principle 3: The Bill Gates Line (Source: Stratechery, "The Bill Gates Line")
A true platform's value is defined by the economic value created by third parties *exceeding* the value of the platform itself. Strategic clarity requires knowing if you are an Aggregator (owning the user) or a Platform (empowering the ecosystem).

### Principle 4: Work Backwards from the Customer (Source: Bryar, *Working Backwards*)
Strategy is not what you *can* build, but what the customer *needs* you to build. All strategic logic must be validated by a "Working Backwards" PR/FAQ that proves the future state is compelling.

### Principle 5: The Secret (Source: Thiel, *Zero to One*)
Great companies are built on a "secret"—a truth that very few people agree with. Strategic clarity requires identifying this contrarian insight and building a moat around it.

## When to Use This Skill

- When a team has "too many priorities" and needs to decide where *not* to play.
- When launching a new product category or entering a new market.
- When evaluating if a business model is structurally an Aggregator or a Platform.
- When a strategic plan feels like a "list of goals" rather than a "set of choices."

## When NOT to Use This Skill

- For routine tactical execution within an already clear strategic framework.
- For purely operational efficiency tasks (unless the strategy is "Cost Leadership").

## Core Process

### Step 1: Define the Winning Aspiration
Identify the core purpose of the enterprise and the specific "Winning" state. (Source: Lafley, Ch. 2)
1. **The Goal:** What does winning look like in this specific context?
2. **The Metric:** How will we know we've achieved it (e.g., monopoly share, flywheel velocity)?

### Step 2: Set the "Where to Play" (WTP) Boundary
Define the specific field of play. (Source: Lafley, Ch. 3)
1. **Geography:** Which regions?
2. **Product:** Which categories?
3. **Consumer:** Which segments (JTBD-driven)?
4. **Channel:** Which distribution paths?

### Step 3: Determine "How to Win" (HTW)
Define the unique value proposition. (Source: Lafley, Ch. 4)
1. **Value Type:** Are we a Cost Leader or a Differentiator?
2. **The Moat:** Are we building a moat via Proprietary Tech, Network Effects, or Economies of Scale? (Source: Thiel, Ch. 5)

### Step 4: Map the Capability System
Identify the 3-5 activities that must be performed at a high level to execute the HTW. (Source: Lafley, Ch. 5)
1. **Reinforcing Loops:** How do these capabilities reinforce each other (The Flywheel)?
2. **The Gap:** What capabilities are we currently missing?

### Step 5: Test the Logic (Reverse Engineering)
Ask: "What must be true about the market, customers, and competitors for this strategy to be a great idea?" (Source: Lafley, Ch. 7)

## Frameworks & Models

### The Strategic Choice Cascade (Source: Lafley, *Playing to Win*)
1. **Winning Aspiration:** The guiding purpose.
2. **Where to Play:** The field.
3. **How to Win:** The value prop.
4. **Core Capabilities:** The activities required.
5. **Management Systems:** The measurement and support structures.

### The Monopoly Audit (Source: Thiel, *Zero to One*)
1. **Proprietary Technology:** Must be 10x better than the nearest substitute.
2. **Network Effects:** Does the product get more useful as more people use it?
3. **Economies of Scale:** Does the business get stronger as it gets bigger?
4. **Branding:** Is there a strong, unique identity?

## Cross-Skill Invocations

- **REQUIRED SUB-SKILL:** `non-fiction-precision` — Strategy must be communicated with absolute clarity (Pyramid Principle).
- **RECOMMENDED SUB-SKILL:** `mental-model-library` — Use first principles and second-order thinking to validate strategic "Secrets."
- **RECOMMENDED SUB-SKILL:** `devils-advocate` — Stress-test the "What must be true" assumptions.

## Common Mistakes

1. **Strategic Blindness:** Treating a "vision" or "goals" as a strategy without making hard choices. (Source: Lafley, Ch. 1)
2. **The 1% Trap:** Assuming a small share of a huge market is a strategy. (Source: Thiel, Ch. 13)
3. **Indefinite Optimism:** Expecting the future to work out without a definite plan. (Source: Thiel, Ch. 6)
4. **Platform Confusion:** Mistaking an Aggregator (owning the customer) for a Platform (empowering suppliers). (Source: Stratechery, "The Bill Gates Line")

## Diagnostic Checklist

- [ ] Have we explicitly chosen where NOT to play?
- [ ] Is our "How to Win" based on a unique capability or a 10x technology?
- [ ] Can we state the "Secret" or contrarian truth this strategy is built on?
- [ ] Does the strategy include a reinforcing "Flywheel" loop?
- [ ] Have we passed the "What must be true" logic test?

## Sources

- Lafley & Martin, *Playing to Win*, Ch. 1-5, 7 — Strategy Cascade, WTP/HTW.
- Thiel, *Zero to One*, Ch. 3, 5, 6, 8, 13 — Monopoly theory, Secrets, Definite Optimism.
- Bryar & Carr, *Working Backwards*, Ch. 1 — Flywheel, Customer Obsession.
- Stratechery, "The Bill Gates Line" & "Aggregation Theory" — Platform vs Aggregator dynamics.
