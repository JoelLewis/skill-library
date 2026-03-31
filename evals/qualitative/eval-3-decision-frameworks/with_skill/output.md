# Acquisition Target Decision: Structured Analysis

## Step 1: Frame the Decision

**Decision Statement:** Which of three acquisition targets should we recommend to the board, given our strategic objectives, risk tolerance, and integration capacity?

### The Happiness Test (Source: Duke, *How to Decide*)

This decision will matter in 10 years. An acquisition reshapes the company's trajectory, balance sheet, and organizational culture for the foreseeable future. This justifies spending significant analytical time and warrants a rigorous, multi-model approach. Do not rush this to meet the Friday deadline at the expense of quality.

### First Principles (Source: Parrish, *Great Mental Models v1*)

Strip away the conventional wisdom ("AI is hot, so buy the AI company" or "Revenue is king, so buy the competitor"). The fundamental truths here are:

1. An acquisition must either **accelerate a capability we cannot build fast enough** or **capture a market position that is closing**.
2. Integration risk destroys more acquisition value than overpayment does.
3. The acquiring company has finite management attention and capital. Choosing one target means forgoing the others *and* forgoing organic investment of the same capital.

### Circle of Competence Check (Source: Parrish, *Great Mental Models v1*)

Before proceeding, be honest about what you know and what you do not:

- **Inside your circle:** Your own product roadmap, customer needs, integration capacity, and financial position.
- **Potentially outside your circle:** Deep AI/ML technical due diligence (Target A), the root cause of declining growth (Target B), and the transferability of relationship-based revenue (Target C).

For any area outside your circle, name the expert you need at the table before Friday. Do not assign probabilities to things you cannot evaluate.

---

## Step 2: Decision Matrix (Source: Duke, *How to Decide*)

### Option A: AI Startup (Great Tech, No Revenue)

| Outcome | Description | Probability | Impact |
|---------|------------|-------------|--------|
| Best case | Tech integrates cleanly, accelerates product roadmap by 18+ months, talent retained | 20% | Very High (+) |
| Average case | Tech is useful but requires 12+ months of adaptation, some key talent leaves | 45% | Moderate (+) |
| Worst case | Tech does not translate to production, culture clash drives talent attrition, sunk cost | 35% | High (-) |

**Expected Value Drivers:** Technology differentiation, talent acquisition, speed-to-market on AI capabilities.
**Key Uncertainty:** No revenue means no market validation. The tech may solve a problem customers do not actually pay for.

### Option B: Mid-Size Competitor ($5M ARR, Declining Growth)

| Outcome | Description | Probability | Impact |
|---------|------------|-------------|--------|
| Best case | We reverse the decline with our distribution, consolidate market share, cross-sell | 25% | High (+) |
| Average case | Revenue stabilizes but does not grow, we absorb operational overhead | 40% | Low (+) |
| Worst case | Decline was structural (not fixable), we inherit technical debt and churning customers | 35% | High (-) |

**Expected Value Drivers:** Immediate revenue, customer base, reduced competition.
**Key Uncertainty:** *Why* is growth declining? If the answer is "the product is losing to better alternatives," acquiring it buys a melting ice cube. You must diagnose the root cause before assigning these probabilities with any confidence.

### Option C: Services Company (Strong Customer Relationships in Target Vertical)

| Outcome | Description | Probability | Impact |
|---------|------------|-------------|--------|
| Best case | Relationships convert to product revenue, vertical expertise deepens our moat | 30% | High (+) |
| Average case | Some relationships transfer, services revenue continues but margins stay thin | 40% | Moderate (+) |
| Worst case | Relationships are personal (tied to individuals, not the company), key people leave post-acquisition | 30% | Moderate (-) |

**Expected Value Drivers:** Market access, domain expertise, customer intelligence in target vertical.
**Key Uncertainty:** Are the relationships institutional or personal? If they walk out the door with specific employees, you are buying a shell.

### Option D: Do Nothing

Do not forget this option. It is always on the table.

| Outcome | Description | Probability | Impact |
|---------|------------|-------------|--------|
| Best case | Capital preserved, organic growth continues, better target emerges later | 30% | Moderate (+) |
| Average case | Competitors make acquisitions, we fall behind on one dimension but retain flexibility | 45% | Neutral |
| Worst case | A strategic window closes permanently (e.g., the AI startup gets acquired by a competitor) | 25% | High (-) |

---

## Step 3: Mental Model Stress-Tests (Source: Munger, Parrish)

### Inversion: What Would Make Each Option a Disaster?

- **Option A disaster:** The founding team leaves within 6 months because they wanted to build a research lab, not integrate into a product org. The "great tech" turns out to be a prototype that works on curated datasets but fails in production.
- **Option B disaster:** The decline was caused by a fundamental product-market fit erosion. Customers are already evaluating replacements. You inherit contracts that are 6-12 months from churning regardless of what you do.
- **Option C disaster:** The two senior partners who hold every key relationship retire or leave post-acquisition. The "strong customer relationships" evaporate within a year.
- **Do Nothing disaster:** A direct competitor acquires Target A or Target C and uses them to lock you out of the vertical.

### Second-Order Thinking: "And Then What?"

For each option, trace the consequences forward two steps:

- **Acquire A** -> You need to integrate the team -> You need to divert engineering leadership to manage integration -> Your existing product roadmap slows for 6-12 months. *Can you afford that?*
- **Acquire B** -> You absorb $5M ARR but also their cost structure -> You need to migrate their customers to your platform or maintain two platforms -> Dual-platform maintenance drains engineering resources. *What is the true fully-loaded cost?*
- **Acquire C** -> You gain vertical relationships -> You need to convert services engagements into product pilots -> Services culture and product culture clash during integration. *Do you have experience managing services-to-product transitions?*

### Occam's Razor (Source: FS Blog)

Ask: which option has the simplest path from acquisition to realized value? Complexity is where acquisitions die. If one option requires three things to go right and another requires one, weight that difference heavily.

---

## Step 4: Pre-Mortem (Source: Duke, *How to Decide*)

It is December. The acquisition closed six months ago. It has failed. Why?

Write three separate pre-mortem narratives and present them to your team:

**Pre-Mortem A (AI Startup):**
"We bought the tech but did not buy the context. The founding engineers built the system around assumptions specific to their research environment. When we tried to integrate it into our production stack, incompatibilities emerged at every layer. The CTO of the startup left in month 3 because she felt her technical vision was being compromised. The remaining team followed within two months. We now own IP we cannot maintain."

**Pre-Mortem B (Competitor):**
"The $5M ARR looked like a floor, but it was a ceiling. The decline was driven by a shift in buyer preferences that we did not fully investigate during diligence. Post-acquisition, churn accelerated because customers saw the acquisition as confirmation that the product was end-of-life. We spent more on retention efforts than the ARR was worth."

**Pre-Mortem C (Services Company):**
"The relationships were real but non-transferable. The partners who held those relationships had personal trust built over a decade. When they became employees of a larger company, their clients felt the relationship had changed. Two of three major accounts moved to a boutique competitor within eight months. We retained the overhead without the revenue."

**Mitigation Actions (derived from pre-mortems):**

| Risk | Mitigation | Owner |
|------|-----------|-------|
| A: Talent flight | Structured retention (vesting, role autonomy, technical charter) negotiated pre-close | Deal team + CTO |
| A: Tech-production gap | Technical due diligence with production engineers, not just executives | Engineering lead |
| B: Structural decline | Customer interviews during diligence (not just management presentations) | Product + Sales |
| B: Accelerated post-acquisition churn | Customer communication plan ready for Day 1 | Marketing + CS |
| C: Relationship concentration | Identify whether relationships are institutional or personal before close | Diligence team |
| C: Culture clash | Integration plan that preserves services team autonomy for 12+ months | COO |

---

## Step 5: Decision Journal Entry (Source: Duke, *Thinking in Bets*)

Before presenting to the board, document the following for future learning:

```
DATE: [Date of recommendation]
DECISION: Recommend [Target] for acquisition
CONTEXT: Three targets evaluated. Board deadline Friday. [State what you knew.]
REASONING: [Why this target over the others. Reference the matrix and pre-mortem.]
CONFIDENCE: [X]% that this acquisition will achieve its stated objectives within 24 months.
KEY ASSUMPTIONS:
  1. [List the 3-5 assumptions your recommendation depends on]
  2. [...]
WHAT WOULD CHANGE MY MIND:
  1. [What evidence, if discovered, would reverse this recommendation]
  2. [...]
```

This journal entry protects against hindsight bias. If the acquisition succeeds, you can verify whether it succeeded *for the reasons you predicted*. If it fails, you can learn from the actual gap between your reasoning and reality, rather than reconstructing a false narrative.

---

## Recommendation Framework for the Board

Do not present a single recommendation. Present a decision-ready package:

1. **The Matrix** (Step 2) — so the board sees all options and probabilities.
2. **The Pre-Mortem Narratives** (Step 4) — so the board understands the failure modes of each path.
3. **The Mitigation Table** (Step 4) — so the board sees that risks have been thought through.
4. **Your Ranked Recommendation** with confidence level — e.g., "We recommend Target C with 65% confidence, contingent on confirming that customer relationships are institutionally held, not personally held."
5. **The Kill Criteria** — What would we need to discover during diligence to walk away?

This structure gives the board what they actually need: not certainty (which does not exist), but a clear view of the tradeoffs and a process they can trust.

---

## Diagnostic Checklist

- [x] **Decoupled outcome from process:** The recommendation is structured around process quality, not predicted outcome. The Decision Journal captures reasoning independent of results.
- [x] **Assigned probabilistic confidence scores:** Each option's outcomes carry explicit probability estimates (e.g., 20%, 45%, 35% for Target A).
- [x] **Performed Inversion and Pre-Mortem:** Three failure narratives written, mitigation table derived from them.
- [x] **Circle of Competence assessed:** Identified areas requiring external expertise (AI technical diligence, root-cause analysis of Target B's decline, relationship transferability assessment).
- [x] **Considered second-order consequences:** Traced each acquisition forward two steps to surface integration costs, resource diversion, and cultural friction.

---

## Sources

- Duke, *Thinking in Bets*, Ch. 1, 2, 6 -- Resulting, Confidence, Decision Journal.
- Duke, *How to Decide*, Ch. 3, 4, 5 -- Decision Matrix, Pre-Mortem, Happiness Test.
- Parrish, *Great Mental Models v1*, Ch. 1, 2, 4 -- First Principles, Circle of Competence, Second-Order Thinking.
- Munger, *Poor Charlie's Almanack*, Ch. 2 -- Latticework, Inversion.
- Sivers, *Useful Not True* -- Pragmatic belief as a decision tool.
