# Step 6: Business Case — MealSync Ghost Kitchen Vertical Expansion

**Skill invoked:** `workflow:business-case`
**Iron Law:** `NO BUSINESS CASE WITHOUT EXPLICIT ASSUMPTIONS AND SENSITIVITY ANALYSIS`

---

## Step 1: Define Sufficiency & ROI

### Sufficiency Point

The initiative is "worthwhile to continue" when MealSync achieves **100 ghost kitchen locations on paid plans** generating **$30K/month in incremental MRR** (midpoint pricing of $300/location/month) within 18 months of launch. This represents a 15% lift on current $2M ARR and validates the vertical as a standalone growth vector rather than a distraction from core restaurant business.

**Decision gates:**
- **Double down** at 150+ locations and LTV:CAC > 3:1
- **Hold and optimize** at 75-149 locations with improving unit economics
- **Kill** if fewer than 50 locations after 12 months or LTV:CAC < 1.5:1

### Projected ROI

| Metric | Value | Basis |
|--------|-------|-------|
| Total investment (18 months) | $480K | See breakdown below |
| Projected annual revenue at sufficiency | $360K ARR | 100 locations x $300/mo |
| Gross margin | 80% | SaaS delivery, minimal COGS |
| Payback period | 20 months | $480K / ($360K x 0.80 / 12) |
| 3-year projected ROI | 125% | Net $600K return on $480K invested |

### Investment Breakdown (18-Month Budget)

| Category | Monthly | 18-Month Total |
|----------|---------|----------------|
| Engineering (1 senior + 0.5 PM) | $18K | $324K |
| Sales (1 vertical AE, ramp at month 3) | $6K base + commission | $108K |
| Marketing & content | $1.5K | $27K |
| Infrastructure & tooling | $1.2K | $21K |
| **Total** | **~$26.7K** | **$480K** |

### Runway & Burn Context

MealSync at $2M ARR with typical B2B SaaS burn is likely consuming $150-200K/month. Adding $27K/month in vertical-specific spend increases burn by ~15%. This is material but not existential. The initiative should be funded from operating budget, not a dedicated raise, to preserve optionality to kill it. (Source: Kaufman, Ch. 5; Feld, Ch. 3)

---

## Step 2: Map the 5 Parts of Business

### 1. Value Creation

**Primary Economic Values served:**

- **Efficacy:** Reducing food waste from 8%+ to the 4% target across multiple locations. At an average ghost kitchen running $40K/month in food costs per location, cutting waste by 4 percentage points saves $1,600/location/month — yielding a 5:1 value-to-cost ratio against the $300/month subscription.
- **Speed:** Eliminating end-of-week multi-hour inventory counts. Operators with 5 locations spending 3 hours per count currently burn 60+ hours/month on inventory across the portfolio. Centralized real-time visibility compresses this to exception-based review.
- **Reliability:** Consistent portioning across locations — the core operations problem for multi-unit operators without a dedicated inventory manager at each site.

The buyer persona's primary JTBD ("help me manage food costs across locations without hiring a dedicated inventory manager per site") maps directly to all three values. The software substitutes for a $45-55K/year per-location hire. For a 5-location operator, that is $225-275K in avoided headcount versus $18K/year in software — a compelling substitution ratio. (Source: Kaufman, Ch. 1)

### 2. Marketing: Reaching Beyond Early Adopters

Ghost kitchen operators are a concentrated, identifiable market. They cluster around ghost kitchen facility providers (CloudKitchens, Kitchen United, REEF) and delivery platform ecosystems (DoorDash, Uber Eats).

**Channel strategy:**
- **Facility partnerships:** Co-marketing with ghost kitchen real estate providers who benefit from tenant success. Kitchen United and independent facility operators are more partnership-friendly than CloudKitchens (which bundles its own tech stack).
- **Delivery platform integrations:** Technical integrations with DoorDash Drive, Uber Eats, etc. create referral loops.
- **Vertical content:** Ghost kitchen operators are underserved by restaurant trade media. Owning the "ghost kitchen operations" content niche is achievable.
- **Community:** Ghost kitchen operator Slack groups, Facebook groups, and Reddit communities are active and tight-knit.

The 95% mainstream market risk: most ghost kitchen operators are *not* sophisticated tech buyers. They are former restaurant operators or entrepreneurs. Marketing must speak in food-cost and waste-reduction language, not SaaS feature language. (Source: Gil, Andreessen interview)

### 3. Sales: Allowable Acquisition Cost

| Metric | Value |
|--------|-------|
| Average contract value (ACV) | $18K/year (5 locations x $300/mo) |
| Estimated gross margin | 80% |
| Target LTV (36-month retention) | $54K |
| Target LTV:CAC ratio | 3:1 |
| **Allowable Acquisition Cost (AAC)** | **$18K per operator** |

At $18K AAC, we can afford a full-cycle sales process with demos, trials, and onboarding support. The concentrated nature of the market (facility-based, identifiable operators) keeps CAC lower than broad-market SaaS. Expected blended CAC: $8-12K per operator, well within the AAC envelope.

### 4. Value Delivery

Ghost kitchens differ from traditional restaurants in ways that affect delivery:

- **Multi-brand operation:** A single kitchen may run 3-5 virtual brands from one physical space. Inventory must be tracked across brands sharing the same ingredients, not per-restaurant.
- **No FOH staff:** There is no front-of-house team to absorb operational tasks. Every manual process falls on a skeleton crew.
- **Delivery-platform dependency:** Menu changes, pricing, and demand patterns are driven by platform algorithms, not walk-in traffic. Inventory forecasting must integrate with delivery platform order data.

MealSync's core product handles single-location restaurant inventory. Ghost kitchen adaptation requires: multi-location dashboards, cross-brand ingredient pooling, delivery platform data ingestion, and centralized alert systems. This is a product extension, not a rebuild — but it is not trivial. Engineering scope is estimated at 4-6 months for MVP. (Source: Kaufman, Ch. 1)

### 5. Finance: LTV > AAC Gate

| Check | Result |
|-------|--------|
| LTV ($54K) > AAC ($18K) | Yes, 3:1 ratio |
| Gross margin (80%) covers delivery cost | Yes |
| Unit economics positive at month 6 per customer | Yes, with 12-month payback per account |

**Gate: Viable Economics? — PASS (proceed to sensitivity analysis)**

---

## Step 3: Sensitivity Analysis & Doomsday Scenario

### Explicit Assumptions

Every number in this business case rests on the following assumptions. Each is labeled with a confidence level and the evidence basis.

| # | Assumption | Value Used | Confidence | Evidence Basis |
|---|-----------|------------|------------|----------------|
| A1 | Addressable ghost kitchen locations in US | 10,000-15,000 | Medium | Industry reports vary widely; post-COVID contraction reduced from 2021 peaks |
| A2 | Locations needing third-party inventory software | 30-40% of addressable (3,000-6,000) | Low | Many use spreadsheets; some use built-in facility provider tools |
| A3 | MealSync can capture 100 locations in 18 months | 1.7-3.3% of serviceable market | Medium | Achievable with 1 dedicated AE and vertical marketing |
| A4 | Average willingness to pay | $300/location/month | Medium-High | Buyer persona research indicates $200-400 range; midpoint used |
| A5 | Average locations per operator | 5 | Medium | Persona is "3-10 locations"; 5 is conservative midpoint |
| A6 | Monthly churn rate | 3% | Low-Medium | Ghost kitchen sector has higher business failure rate than traditional restaurants |
| A7 | Engineering timeline for MVP | 4-6 months | Medium | Dependent on current technical debt and API availability |
| A8 | Food waste reduction delivers promised ROI | 4 percentage points | Medium | Dependent on operator compliance with system recommendations |
| A9 | Ghost kitchen market does not contract further | Stable-to-growing | Low | Market is post-hype; some facility closures ongoing |
| A10 | CloudKitchens does not launch a competitive inventory module | No bundled competitor in 18 months | Low | CloudKitchens has the data and incentive to build this |

### Sensitivity Analysis

**Variable: Customer acquisition rate at 50% of plan**

| Metric | Base Case | 50% Acquisition Scenario |
|--------|-----------|--------------------------|
| Locations at 18 months | 100 | 50 |
| Monthly revenue | $30K | $15K |
| Annual revenue | $360K | $180K |
| ROI (3-year) | 125% | 12% |
| Payback period | 20 months | 40 months |

At 50% of planned acquisition, the initiative is marginally viable but no longer compelling as a growth vector. It becomes a "hold and optimize" scenario — not a kill, but not a double-down either.

**Variable: Pricing at floor ($200/location/month)**

| Metric | Base Case ($300) | Floor Pricing ($200) |
|--------|------------------|----------------------|
| ACV (5 locations) | $18K | $12K |
| LTV (36 months) | $54K | $36K |
| LTV:CAC ratio | 3:1 | 2:1 |
| 3-year ROI | 125% | 50% |

At $200/location, the business case still holds but with thin margins. Below $200, unit economics break down.

**Variable: Churn at 5% monthly (vs 3% base)**

| Metric | 3% Churn | 5% Churn |
|--------|----------|----------|
| Average customer lifetime | 33 months | 20 months |
| LTV | $54K | $32K |
| LTV:CAC ratio | 3:1 | 1.8:1 |

At 5% monthly churn, the initiative approaches break-even territory. Ghost kitchen business volatility makes this a realistic downside scenario.

### Combined Downside Scenario

If acquisition is 50% of plan AND pricing hits the floor AND churn runs at 5%:

| Metric | Combined Downside |
|--------|-------------------|
| Locations at 18 months | 50 |
| Revenue per location | $200/month |
| Effective monthly revenue (churn-adjusted) | ~$8K |
| 3-year net | -$200K (loss) |

This is the doomsday case. It does not threaten MealSync's survival — $200K loss over 3 years against a $2M ARR base is painful but absorbable — but it would represent a meaningful distraction from core market investment. (Source: Housel, Ch. 5)

### Doomsday: Critical Assumption Failure

**Most critical assumption: A9 + A10 combined — the ghost kitchen market contracts AND CloudKitchens launches a bundled inventory tool.**

If CloudKitchens (the largest facility operator) ships a "good enough" inventory module bundled with lease agreements, MealSync's addressable market shrinks to non-CloudKitchens operators only. Combined with market contraction, the serviceable market could drop from 3,000-6,000 locations to under 1,000. At that scale, the vertical cannot justify dedicated engineering and sales resources.

**Mitigation:** Structure the investment so that ghost kitchen product features (multi-location dashboards, cross-brand inventory pooling) also serve multi-unit traditional restaurant operators. This creates a fallback path where the engineering investment retains value even if the ghost kitchen vertical specifically fails. (Source: Kaufman, Ch. 7)

---

## Step 4: Audit Opportunity Cost & Interaction

### Opportunity Cost: What Are We Not Doing?

Committing 1.5 engineers and 1 AE to ghost kitchens for 18 months means the following are deferred or deprioritized:

| Deferred Initiative | Estimated Value | Risk of Deferral |
|---------------------|----------------|-------------------|
| Core product feature velocity (traditional restaurant customers) | Retention of existing $2M ARR base | **High** — feature stagnation could increase core churn |
| Enterprise restaurant chain deals (50+ location groups) | $500K+ ACV potential | **Medium** — longer sales cycles mean 6-month delay is recoverable |
| Mobile app for line cooks (most-requested feature) | NPS improvement, reduced churn | **Medium** — quality-of-life feature, not revenue driver |
| API marketplace / integrations platform | Ecosystem moat | **Low** — strategic but not time-sensitive |

The highest-risk opportunity cost is the deceleration of core product development. If MealSync's existing restaurant customers feel neglected while the team chases ghost kitchens, the VP Sales's "distraction" concern materializes as increased core churn. This must be actively monitored.

### Interaction: Cannibalization & Synergy

**Cannibalization risk: Low.** Ghost kitchen operators are largely net-new customers, not existing restaurant customers switching contexts. The product extensions (multi-location dashboards) may actually benefit existing multi-unit restaurant customers.

**Synergy potential: Medium.** Multi-location features built for ghost kitchens create upsell opportunities for traditional restaurant groups. Delivery platform integrations serve both verticals. The competitive analysis from Step 4 identified that ghost kitchen facility providers (excluding CloudKitchens) are potential channel partners — these partnerships could also surface traditional restaurant leads.

**Brand risk: Low-Medium.** Positioning as a "ghost kitchen tool" could confuse MealSync's restaurant identity. Mitigate by positioning ghost kitchen support as a product capability, not a brand pivot. (Source: Kaufman, Ch. 5; Bacon, Ch. 6)

---

## Step 5: Define OKRs

### Objective: Validate the ghost kitchen vertical as a scalable growth vector within 18 months.

| # | Key Result | Type | Target |
|---|-----------|------|--------|
| KR1 | Ghost kitchen locations on paid plans | Quantitative | 100 locations |
| KR2 | Monthly churn rate for ghost kitchen accounts | Quality safeguard | < 4% |
| KR3 | Net Revenue Retention (NRR) for ghost kitchen cohort | Quantitative | > 105% |
| KR4 | Core restaurant customer NPS | Quality safeguard | No decline from current baseline |
| KR5 | Ghost kitchen CAC | Quantitative | < $12K per operator |

**Quality safeguard rationale:** KR2 prevents growth-at-all-costs acquisition of low-quality accounts. KR4 prevents the "distraction" failure mode — if core customer satisfaction drops, the ghost kitchen initiative is harming the base business regardless of its own metrics. (Source: Doerr, Ch. 4)

---

## Diagnostic Checklist

- [x] Has a "Sufficiency" point been defined (when to stop vs. when to double down)? — 100 locations / $30K MRR with explicit kill/hold/scale gates.
- [x] Is every output goal paired with a quality/counter-effect goal? — KR1 paired with KR2 (churn), KR3 paired with KR4 (core NPS).
- [x] Does the case include a worst-case sensitivity simulation? — Combined downside and doomsday scenarios modeled.
- [x] Has the opportunity cost (deferred projects) been explicitly named? — Four deferred initiatives with risk ratings.
- [x] Is the "Main Job" of the customer clearly identified as the value driver? — JTBD from buyer persona (Step 5) drives value creation mapping.

---

## Investment Recommendation

**Proceed with a staged commitment.** The base case economics are attractive (125% 3-year ROI, 3:1 LTV:CAC) and the ghost kitchen vertical addresses a genuine unmet need identified in the buyer persona work. However, the low-confidence assumptions (A2, A6, A9, A10) create meaningful downside risk.

**Staged gates:**
1. **Month 0-6:** Build MVP with multi-location and cross-brand features. Cost: $162K. No sales hire yet. Validate with 5-10 design partners from non-CloudKitchens facilities.
2. **Month 6-12:** If design partners convert to paid and usage metrics confirm value delivery, hire vertical AE and begin outbound. Commit remaining $318K.
3. **Month 12-18:** Evaluate against sufficiency targets. Kill, hold, or double down.

This staged approach limits downside exposure to $162K if the thesis fails at the design partner stage, while preserving the full upside if assumptions validate. The engineering investment in multi-location features retains value for the core restaurant business regardless of ghost kitchen outcome.

**The VP Sales's concern is legitimate but manageable.** The distraction risk is real (see opportunity cost audit above) and must be monitored through KR4 (core NPS). The CEO's enthusiasm is directionally correct — the market opportunity exists — but must be tempered by the sensitivity analysis showing how quickly ROI degrades under realistic downside scenarios.

---

## Handoff to Step 7 (Assumption Audit)

This business case contains 10 explicit assumptions (A1-A10) with stated confidence levels, ready for systematic validation. The highest-risk assumptions to audit first:

1. **A10** (CloudKitchens competitive response) — Low confidence, high impact
2. **A9** (Market stability) — Low confidence, high impact
3. **A6** (Churn rate) — Low-Medium confidence, high sensitivity
4. **A2** (Serviceable market size) — Low confidence, foundational to all projections
