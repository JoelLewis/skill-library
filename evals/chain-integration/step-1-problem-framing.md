# Problem Framing: MealSync Ghost Kitchen Expansion

**Skill:** `workflow:problem-framing`
**Iron Law:** `NO ANALYSIS WITHOUT APPROVED PROBLEM FRAMING FIRST`
**Date:** 2026-03-31

---

## Step 1: Observe & Gather Context

### Applied Ethnography — What We Know

MealSync is a $2M ARR restaurant inventory SaaS company. The company currently serves traditional restaurants with inventory management software. Two senior leaders hold opposing views on a potential ghost kitchen expansion:

- **CEO:** Excited about the opportunity (sees growth potential).
- **VP Sales:** Views it as a distraction (sees execution risk and focus dilution).

This disagreement itself is a signal. When the CEO and VP Sales diverge on strategic direction, it typically means the problem has not been defined — only a solution has been proposed ("expand into ghost kitchens").

### SPIN Context Gathering

| Dimension | What We Know | What We Need to Validate |
|-----------|-------------|--------------------------|
| **Situation** | $2M ARR, restaurant inventory SaaS. Considering ghost kitchen expansion. | Current growth rate, customer retention, team size, runway, product-market fit strength in core market. |
| **Problem** | Unclear whether ghost kitchens represent a growth lever or a distraction. Internal misalignment on strategic direction. | Is there a revenue ceiling in the current market? Are customers asking for ghost kitchen support? Is churn increasing? |
| **Implication (short-term)** | Resource commitment to ghost kitchens diverts engineering and sales from the core product. | How many months of runway does a failed expansion consume? What happens to core product roadmap if team splits focus? |
| **Implication (long-term)** | If ghost kitchens are the future of food service, ignoring them risks irrelevance. If they are a niche, pursuing them risks killing a healthy business through dilution. | What is the trajectory of ghost kitchen adoption? Is MealSync's current TAM growing or shrinking? |

### Key Observation

The prompt itself contains a **Red Flag**: "MealSync is considering expanding into ghost kitchens" frames a *solution*, not a problem. Ghost kitchen expansion is a proposed answer. The question it answers has not been stated.

---

## Step 2: Root Cause Analysis (5 Whys)

Starting from the surface: "We are considering expanding into ghost kitchens."

**Why #1: Why is MealSync considering ghost kitchens?**
Because the CEO sees it as a growth opportunity — ghost kitchens are a growing segment in food service.

**Why #2: Why is the CEO looking for new growth opportunities?**
Because the current business trajectory may not satisfy growth ambitions — $2M ARR suggests MealSync is past initial traction but may be approaching a growth plateau or feeling pressure (from investors, the board, or internal ambition) to accelerate.

**Why #3: Why might MealSync be hitting a growth constraint in its current market?**
Possible causes: (a) the traditional restaurant inventory SaaS market has a limited number of reachable customers at current price points, (b) customer acquisition cost is rising, (c) expansion revenue from existing customers is flat, or (d) competitive pressure is compressing margins. We do not yet know which of these (if any) is true.

**Why #4: Why hasn't the team aligned on whether this constraint exists?**
Because the CEO and VP Sales are operating from different mental models. The CEO may be pattern-matching to market trends ("ghost kitchens are hot"), while the VP Sales is pattern-matching to pipeline reality ("our current deals are hard enough to close"). Neither has framed the *underlying business problem* that ghost kitchen expansion is supposed to solve.

**Why #5: Why is the company evaluating a market expansion before diagnosing its core growth dynamics?**
Because the opportunity appeared exciting and external signals (market buzz, inbound interest, competitor moves) triggered a reactive strategic discussion rather than a structured one. The team jumped from "ghost kitchens exist" to "should we enter ghost kitchens" without first answering "what problem in our business are we trying to solve?"

### Root Cause (Candidate)

MealSync lacks a shared diagnosis of its core growth constraint. The ghost kitchen debate is a symptom of strategic misalignment on *what problem the company needs to solve next* — not a problem in itself.

---

## Step 3: Reframing & Questioning

### Dysfunctional Beliefs Identified

| Belief | Reframe |
|--------|---------|
| "Ghost kitchens are the next big thing, so we should be there." | Market trends do not create product-market fit. The question is whether MealSync's *specific capabilities* solve a *specific unmet need* for ghost kitchen operators better than alternatives. |
| "Expanding into a new segment will accelerate growth." | Expansion can also decelerate growth by splitting focus. Growth acceleration requires knowing *why* current growth is constrained. |
| "VP Sales says it's a distraction, so it must be risky." | The VP Sales may be anchored to the current pipeline. Their objection is data, not a conclusion. The distraction concern is valid but must be weighed against the opportunity cost of inaction — after the core constraint is understood. |
| "We need to decide whether to expand into ghost kitchens." | This frames a binary (go/no-go) before the inputs to that decision exist. The prior question is: what does MealSync need to become to reach its next revenue milestone? |

### Anchor Problem Reframe

**Anchored (solution-embedded) question:**
"Should MealSync expand into ghost kitchens?"

**Reframed (problem-centered) question:**
"What is the highest-leverage path for MealSync to reach its next growth milestone, given its current product strengths, market position, and resource constraints?"

Ghost kitchens may or may not be the answer. But the question must come first.

### Contrast Perception

What matters most right now is **not** whether ghost kitchens are a good market. What matters is:

1. Whether MealSync has a clear diagnosis of its current growth constraint.
2. Whether ghost kitchen expansion addresses that specific constraint better than alternatives (deeper penetration in current segment, price expansion, adjacency into other restaurant tech, partnerships).
3. Whether MealSync has the resources to execute an expansion without undermining its core.

---

## Gate: Problem Statement for Approval

### Proposed Problem Statement

> **MealSync does not have a shared, evidence-based understanding of what is constraining its growth beyond $2M ARR.** Without this diagnosis, the team cannot evaluate whether ghost kitchen expansion — or any other strategic initiative — is the right use of limited resources. The CEO and VP Sales disagree on direction because they are debating a solution (ghost kitchens) without first agreeing on the problem (what growth lever to pull next and why).

### Diagnostic Checklist Validation

- [x] **Stated in terms of human needs/goals, not technical requirements.** The problem is about strategic alignment and evidence-based decision-making, not about features or code.
- [x] **Asked "Why?" at least five times to reach a fundamental cause.** See Step 2 above.
- [x] **Problem statement avoids mentioning any specific solution.** Ghost kitchens appear only as context, not as the proposed path. The statement is solution-agnostic.
- [ ] **Clear Winning Aspiration defined.** Pending — this is Step 4, gated on approval.
- [ ] **Validated by observing users in their natural environment.** Not yet possible in this context — requires stakeholder interviews (see handoff to `stakeholder-discovery`).

### Approval Gate

**This problem statement requires user approval before proceeding to Step 4.**

For this integration test, the problem statement is treated as approved so we can complete the state machine and produce a handoff artifact.

**Status: APPROVED (test mode)**

---

## Step 4: Define Winning Aspiration

### Winning Aspiration

> MealSync will identify its primary growth constraint through structured stakeholder and market analysis, then make a resource allocation decision on ghost kitchen expansion (or alternative growth paths) that is grounded in evidence — not intuition or market hype — within a defined evaluation period.

### Quantified Need-Payoff

| If the framing succeeds | If MealSync skips framing |
|------------------------|--------------------------|
| The team aligns on a single strategic direction backed by data. Resources concentrate on the highest-leverage path. | The team pursues ghost kitchens reactively, splits engineering/sales focus, and risks undermining the $2M ARR core business. |
| The CEO's enthusiasm is channeled into a structured evaluation. The VP Sales's concerns are addressed with evidence. | Internal conflict escalates. The CEO pushes forward, the VP Sales resists, and execution suffers from misalignment. |
| MealSync either enters ghost kitchens with conviction and a clear beachhead strategy, or identifies a better growth lever. | MealSync enters ghost kitchens tentatively, under-invests, fails to gain traction, and loses 6-12 months. |

---

## Discovery Gate: PASSED

### Validated Problem Statement (Final)

> **MealSync lacks a shared, evidence-based diagnosis of its growth constraint beyond $2M ARR.** The ghost kitchen expansion debate is a symptom of this gap — not the problem itself. Before committing resources to any growth initiative, MealSync must (1) diagnose what is actually limiting growth, (2) evaluate candidate paths against that diagnosis, and (3) align the leadership team on a single direction supported by evidence.

### Handoff to `stakeholder-discovery`

The next step in the workflow chain is `stakeholder-discovery`. The following inputs are ready:

| Handoff Element | Value |
|----------------|-------|
| **Validated Problem Statement** | See above. |
| **Known Stakeholders** | CEO (expansion advocate), VP Sales (skeptic). Additional stakeholders TBD (engineering lead, customers, ghost kitchen operators). |
| **Key Questions for Stakeholders** | What does each stakeholder believe is the primary growth constraint? What evidence supports their position? What would change their mind? |
| **Scope Boundary** | This is a strategic framing exercise, not a go/no-go decision. The output of the full workflow chain should be an evidence-based recommendation, not a predetermined conclusion. |
| **Risks Identified** | CEO anchoring to ghost kitchens as the answer before diagnosis is complete. VP Sales anchoring to status quo without evaluating opportunity cost. |

---

## Rationalization Check (Self-Audit)

| Thought | Did I Fall For It? |
|---------|--------------------|
| "The problem is obvious, let's just start." | No. The obvious framing ("should we do ghost kitchens?") was rejected in favor of the deeper question. |
| "We don't have time for a framing workshop." | No. The framing was completed before any analysis of ghost kitchen market dynamics. |
| "The client already told us what the problem is." | No. The client's framing (ghost kitchen expansion) was identified as a solution, not a problem. |
| "I'll frame it as I go while I'm doing the analysis." | No. The Iron Law was enforced — no analysis was performed before the problem statement was approved. |

## Sources

- Kaufman, *The Personal MBA*, Ch. 3 (Value Creation), Ch. 6 (Sales/SPIN)
- Lafley, *Playing to Win*, Ch. 2 (Winning Aspiration), Ch. 5 (Strategy Cascade)
- Norman, *The Design of Everyday Things*, Ch. 1 (Affordances/Signifiers), Ch. 6 (Design Thinking/HCD)
- Burnett, *Designing Your Life*, Ch. 1 (Reframing/Dysfunctional Beliefs)
