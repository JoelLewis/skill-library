# Stakeholder Discovery: MealSync Ghost Kitchen Expansion

**Skill:** `workflow:stakeholder-discovery`
**Iron Law:** `NO DELIVERABLE WITHOUT A VALIDATED STAKEHOLDER MAP`
**Input Problem (from step 1):** "Should MealSync allocate resources to adapt its inventory management platform for the ghost kitchen vertical, given conflicting internal views on strategic fit, unknown market dynamics, and the risk of diluting focus on the core restaurant market?"

---

## Step 1: Identify & Categorize Stakeholders

### True Stakeholders (Veto Power)

These individuals can prevent the ghost kitchen expansion from proceeding. They are not advisory — they can kill the initiative.

| Stakeholder | Role | Veto Type |
|---|---|---|
| **CEO** | Executive sponsor | Budget allocation veto. Controls whether engineering and go-to-market resources are redirected. |
| **VP Sales** | Revenue leader | Pipeline veto. Can deprioritize ghost kitchen leads, starve the initiative of sales capacity, or refuse to staff a sales motion for the new vertical. |
| **VP Engineering / CTO** | Technical leader | Capacity veto. Controls sprint allocation and can block platform adaptation work if it conflicts with core product roadmap. |
| **Board of Directors / Lead Investor** | Governance | Strategic veto. At $2M ARR, the board likely has significant influence over pivot-scale resource decisions. A vertical expansion that threatens the path to Series A (or next milestone) can be blocked. |

### Two-and-Two Map (Source: Johnson, *Scaling People*)

**Two levels up from the decision:**
- Board / lead investor — concerned with capital efficiency, runway, and defensible market position.
- CEO — sees ghost kitchens as a growth vector.

**Two levels down from the decision:**
- Engineering team leads — will bear the implementation burden. Their morale and capacity constraints are a real input.
- Sales development reps / AEs — will need to learn a new buyer, new objections, and new demo flow.
- Customer success managers — will handle onboarding and support for a segment they don't yet understand.

### Sideways Identification (Source: Johnson, *Scaling People*)

| Stakeholder | Role | Why They Matter |
|---|---|---|
| **VP Product / Head of Product** | Product strategy | Owns the roadmap. Ghost kitchen adaptation requires product decisions (multi-tenant config, different inventory models, virtual brand management). Will be pulled between maintaining core product velocity and building for a new vertical. |
| **VP Marketing / Head of Marketing** | Positioning & demand gen | A new vertical requires new messaging, new content, possibly a separate landing page and case studies. Marketing bandwidth is a constraint. |
| **Head of Finance / Controller** | Unit economics | Must validate that ghost kitchen deal sizes, CAC, and churn assumptions pencil out before committing resources. |
| **Head of Customer Success** | Retention risk | If engineering resources shift to ghost kitchens, existing restaurant customers may experience slower feature delivery and degraded support, increasing churn risk in the core business. |
| **Key restaurant customers (top 5-10 accounts)** | External stakeholders | Their renewal and expansion revenue funds the business. If they sense MealSync is distracted, they may evaluate alternatives. Their voice matters even though they sit outside the org chart. |
| **Ghost kitchen operators (prospective)** | External stakeholders | Potential buyers whose requirements are currently unknown. Their willingness to pay and specific needs validate or invalidate the entire premise. |

---

## Step 2: Power/Interest Analysis

### Power/Interest Grid

```
                        HIGH INTEREST                          LOW INTEREST
              ┌──────────────────────────────┬──────────────────────────────┐
              │                              │                              │
              │  KEY PLAYERS                 │  KEEP SATISFIED              │
              │  (Manage Closely)            │  (Consult, Don't Overwhelm) │
              │                              │                              │
  HIGH        │  • CEO                       │  • Board / Lead Investor     │
  POWER       │  • VP Sales                  │                              │
              │  • VP Engineering / CTO      │                              │
              │  • VP Product                │                              │
              │                              │                              │
              ├──────────────────────────────┼──────────────────────────────┤
              │                              │                              │
              │  KEEP INFORMED               │  MONITOR                    │
              │  (Regular Updates)           │  (Minimum Effort)           │
              │                              │                              │
  LOW         │  • Head of Customer Success  │  • General engineering ICs   │
  POWER       │  • Head of Marketing         │    (not on the project)      │
              │  • Head of Finance           │                              │
              │  • Engineering team leads    │                              │
              │  • Key restaurant customers  │                              │
              │  • Ghost kitchen operators   │                              │
              │    (prospective)             │                              │
              │                              │                              │
              └──────────────────────────────┴──────────────────────────────┘
```

### Contextual Notes (Source: Zhuo, *The Making of a Manager*)

- **Board / Lead Investor** is placed in "Keep Satisfied" rather than "Key Players" because at $2M ARR, the board likely delegates operational decisions to the CEO but retains a strategic check. Their interest will spike if the expansion requires additional capital or changes the fundraising narrative. Monitor for reclassification.
- **VP Sales** is the most volatile position on the grid. Currently opposed, which means high interest but adversarial interest. If excluded, this becomes the classic late-stage veto scenario the Iron Law exists to prevent.
- **Ghost kitchen operators** have low power today (they are not yet customers) but high interest as the validation source. Their input determines whether the product-market fit assumption holds.

---

## Step 3: Motivation Audit (Mutual Purpose)

### CRIB Analysis per Key Player (Source: Grenny, *Crucial Conversations*)

#### CEO
- **Their purpose:** Grow MealSync's TAM and demonstrate expansion potential to investors. Ghost kitchens represent a narrative of platform breadth.
- **Stresses and strains:** Pressure to show growth trajectory beyond $2M ARR. Likely facing board questions about path to $10M. Needs a compelling "and then what?" story.
- **Mutual purpose:** "We want to grow MealSync's revenue and defensibility without destroying what already works."
- **Risk if ignored:** None — the CEO is the sponsor. The risk is the opposite: over-indexing on the CEO's enthusiasm without validating assumptions.

#### VP Sales
- **Their purpose:** Hit quota. Protect the sales team from distraction. Maintain momentum in a market they understand.
- **Stresses and strains:** Likely compensated on current-year revenue. Ghost kitchen deals are unproven — longer sales cycles, unknown objections, no case studies. Every hour a rep spends on ghost kitchens is an hour not closing restaurant deals.
- **Mutual purpose:** "We want to grow revenue without jeopardizing the existing pipeline or burning out the sales team on unvalidated prospects."
- **CRIB approach:**
  - **Commit** to seeking mutual purpose — acknowledge that quota protection is legitimate, not obstructionist.
  - **Recognize** the purpose behind the VP Sales' resistance: it is a rational response to compensation structure and pipeline risk.
  - **Invent** a mutual purpose: "What if we could validate ghost kitchen demand without pulling any current reps off their book of business?" (e.g., founder-led sales, dedicated BDR hire, or partnership channel).
  - **Brainstorm** together: co-design the go-to-market test so the VP Sales has input on the constraints.

#### VP Engineering / CTO
- **Their purpose:** Ship reliable software. Maintain technical debt at manageable levels. Retain engineering talent by keeping work interesting and achievable.
- **Stresses and strains:** At $2M ARR, the engineering team is likely 8-20 people. Every feature request competes with infrastructure, bug fixes, and existing customer commitments. Ghost kitchen adaptation is not a skin-deep change — inventory models for virtual brands differ from single-location restaurants.
- **Mutual purpose:** "We want to expand the platform's capabilities without creating a fork or degrading reliability for existing customers."
- **CRIB approach:** Frame the technical discovery as a spike or prototype, not a commitment. Let engineering scope the effort before leadership commits resources.

#### VP Product
- **Their purpose:** Build the right things for the right users. Maintain roadmap coherence.
- **Stresses and strains:** Pulled between CEO's vision and customer requests. Adding a new vertical means a second set of user personas, a second set of jobs-to-be-done, and potentially a second product strategy.
- **Mutual purpose:** "We want to make a data-informed decision about whether ghost kitchens are a real product opportunity before committing roadmap slots."

#### Board / Lead Investor
- **Their purpose:** Protect investment. See efficient capital deployment toward defensible growth.
- **Stresses and strains:** Wants to see MealSync dominate its current niche before expanding. Vertical expansion at $2M ARR can look like lack of focus — or it can look like smart adjacency. Depends entirely on how it is framed and validated.
- **Mutual purpose:** "We want to pursue growth opportunities that strengthen, not dilute, MealSync's market position and fundraising narrative."

#### Head of Customer Success
- **Their purpose:** Retain and expand existing accounts. Keep NPS high.
- **Stresses and strains:** If engineering shifts attention, feature requests from top restaurant accounts slow down. If onboarding capacity is shared, quality drops for both segments.
- **Mutual purpose:** "We want to ensure that pursuing a new vertical does not increase churn in the core business."

#### Key Restaurant Customers
- **Their purpose:** Get value from MealSync. See continued investment in features that solve their problems.
- **Stresses and strains:** They chose MealSync because it focuses on restaurants. If MealSync becomes a "ghost kitchen company," they may worry about deprioritization.
- **Mutual purpose:** "We want MealSync to keep investing in restaurant-specific capabilities regardless of what other markets it enters."

---

## Gate: Map Validation

### Validation Checklist

- [x] **All veto-holders identified and engaged?** CEO, VP Sales, VP Engineering, and Board are mapped with veto types specified.
- [x] **Mutual Purpose established for each Key Player?** CRIB analysis completed for CEO, VP Sales, VP Engineering, VP Product.
- [x] **Two levels up and two levels down mapped?** Board (up), CEO (up); engineering leads, SDRs/AEs, CSMs (down).
- [x] **Cross-functional partners included?** Marketing, Finance, Customer Success, and Product are mapped alongside the direct reporting line.
- [x] **External stakeholders considered?** Key restaurant customers (retention risk) and ghost kitchen operators (validation source) are included.

**Gate result: VALID** — proceeding to Step 4.

---

## Step 4: Establish Engagement Cadence

### Recommended Engagement Plan

| Stakeholder | Grid Position | Engagement Format | Cadence | Purpose |
|---|---|---|---|---|
| CEO | Key Player | 1:1 | Weekly | Align on validation criteria, manage expectations on timeline, prevent premature commitment |
| VP Sales | Key Player | 1:1 | Weekly | Co-design the GTM test, ensure quota protection guardrails, convert opposition into constructive input |
| VP Engineering / CTO | Key Player | 1:1 + technical spike review | Bi-weekly | Scope technical feasibility, estimate adaptation effort, identify shared infrastructure vs. fork risk |
| VP Product | Key Player | 1:1 + roadmap review | Bi-weekly | Define ghost kitchen persona, map feature delta, establish decision criteria for roadmap inclusion |
| Board / Lead Investor | Keep Satisfied | Board update (async memo or brief agenda item) | Monthly or next board meeting | Frame the exploration, set expectations that this is validation not commitment |
| Head of Customer Success | Keep Informed | 1:1 or team sync | Bi-weekly | Monitor churn signals, ensure core customer commitments are protected |
| Head of Marketing | Keep Informed | 1:1 | Bi-weekly during active validation | Assess positioning implications, plan messaging if validation succeeds |
| Head of Finance | Keep Informed | Async + review meeting | At validation milestones | Validate unit economics assumptions, model scenario costs |
| Engineering team leads | Keep Informed | Team standup or async update | Weekly during spike | Communicate scope, gather bottom-up estimates, address morale concerns |
| Key restaurant customers | Keep Informed | QBR or check-in call | Next scheduled QBR | Reassure continued investment in restaurant features; do not announce ghost kitchen plans prematurely |
| Ghost kitchen operators | Keep Informed | Discovery interviews | 5-10 interviews in first 4 weeks | Validate problem-solution fit, understand workflow differences, identify willingness to pay |

### High-Leverage Activities (Source: Grove, *High Output Management*)

1. **VP Sales 1:1 is the highest-leverage meeting.** The CEO-VP Sales disagreement is the central tension. Converting VP Sales from opponent to co-designer of the validation approach removes the biggest organizational blocker and models collaborative decision-making for the rest of the company.

2. **Ghost kitchen operator interviews are the highest-leverage external activity.** Every internal debate about ghost kitchens is speculative until prospective buyers confirm or deny the assumptions. Five interviews with ghost kitchen operators will generate more signal than five weeks of internal discussion.

3. **Board framing memo is the highest-leverage async artifact.** A one-page memo positioning this as "structured validation with defined kill criteria" prevents the board from interpreting the exploration as strategic drift.

---

## Stakeholder Map Summary

```
                    DECISION: Ghost Kitchen Expansion
                    ┌─────────────────────────┐
                    │         SPONSOR          │
                    │          CEO             │
                    │    (FOR expansion)       │
                    └────────────┬────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                   │
     ┌────────▼───────┐  ┌──────▼──────┐  ┌────────▼───────┐
     │   VP SALES     │  │ VP PRODUCT  │  │ VP ENGINEERING │
     │  (AGAINST -    │  │ (NEUTRAL -  │  │  (NEUTRAL -    │
     │   distraction  │  │  needs data)│  │  capacity      │
     │   from quota)  │  │             │  │  concerns)     │
     └────────┬───────┘  └──────┬──────┘  └────────┬───────┘
              │                  │                   │
     ┌────────▼───────┐  ┌──────▼──────┐  ┌────────▼───────┐
     │  Sales Reps    │  │  Head of CS │  │  Eng Leads     │
     │  (execution    │  │  (churn     │  │  (scope &      │
     │   burden)      │  │   risk)     │  │   morale)      │
     └────────────────┘  └─────────────┘  └────────────────┘

     EXTERNAL:                              GOVERNANCE:
     ┌─────────────────┐                   ┌─────────────────┐
     │ Key Restaurant  │                   │ Board / Lead    │
     │ Customers       │                   │ Investor        │
     │ (retention risk)│                   │ (strategic      │
     └─────────────────┘                   │  oversight)     │
     ┌─────────────────┐                   └─────────────────┘
     │ Ghost Kitchen   │
     │ Operators       │
     │ (validation     │
     │  source)        │
     └─────────────────┘
```

---

## Key Findings for Downstream Skills

1. **The VP Sales opposition is the critical path.** This is not a technical problem or a market problem first — it is an alignment problem. The engagement cadence prioritizes converting this opposition into co-ownership of the validation design.

2. **The board must be framed proactively.** At $2M ARR, any resource reallocation is material. A "structured validation with kill criteria" framing prevents the board from hearing about this secondhand and interpreting it as strategic drift.

3. **Ghost kitchen operators are the missing input.** No internal stakeholder has direct knowledge of ghost kitchen workflows, willingness to pay, or competitive alternatives. Discovery interviews are the prerequisite for every downstream deliverable (market-context, competitive-analysis, buyer-persona, business-case).

4. **Customer Success is the early warning system.** If core restaurant customers sense deprioritization, churn in the $2M ARR base is a bigger threat than a failed expansion. CS must be in the loop to monitor sentiment.

---

## Diagnostic Checklist (Final)

- [x] All individuals with veto power identified and engaged
- [x] Clear Mutual Purpose established for each Key Player
- [x] 1:1s or regular syncs defined for all High Power/High Interest stakeholders
- [x] Two levels up and two levels down context mapped
- [x] Cross-functional partners included beyond direct reporting line
- [x] External stakeholders (customers, prospects) mapped

**Status: Stakeholder Context Established. Ready for step 3 (market-context).**
