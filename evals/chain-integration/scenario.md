# Chain Integration Test Scenario

## Context
MealSync is a Series A B2B SaaS company ($2M ARR) that provides restaurant inventory management software. They're considering expanding into the **ghost kitchen / cloud kitchen** vertical — restaurants that operate delivery-only with no dine-in. The CEO believes this is a natural extension; the VP of Sales thinks it's a distraction from their core restaurant market.

## Why This Scenario Works
- Ambiguous enough to require genuine problem framing (not a clear-cut decision)
- Multiple stakeholders with conflicting views (CEO vs VP Sales)
- Real market dynamics (ghost kitchens are a shifting market post-COVID)
- Named competitors exist (CloudKitchens, Kitchen United, REEF)
- Requires persona work (ghost kitchen operators differ from traditional restaurateurs)
- Has financial implications that need a business case
- Assumptions can be audited (market size, adoption rates, switching costs)

## Chain Steps

### Step 1: problem-framing
**Input prompt**: "MealSync ($2M ARR, restaurant inventory SaaS) is considering expanding into ghost kitchens. CEO is excited, VP Sales says it's a distraction. Help us frame this problem before we commit resources."

**Handoff check**: Output should contain a validated problem statement that stakeholder-discovery can use as its starting context.

### Step 2: stakeholder-discovery
**Input**: Problem framing output + "Now map the stakeholders involved in this expansion decision."

**Handoff check**: Output should contain a stakeholder map with power/interest analysis that feeds buyer-persona and informs market-context.

### Step 3: market-context
**Input**: Prior outputs + "Analyze the ghost kitchen market — timing, structural forces, and whether there's a real opening for an inventory SaaS player."

**Handoff check**: Output should contain market dynamics and structural analysis that competitive-analysis needs.

### Step 4: competitive-analysis
**Input**: Prior outputs + "Tear down CloudKitchens and Kitchen United — what are their activity systems and where are they vulnerable?"

**Handoff check**: Output should contain competitor moat analysis and vulnerability profile that buyer-persona and business-case need.

### Step 5: buyer-persona
**Input**: Prior outputs + "Define the ghost kitchen operator persona grounded in JTBD — what job are they hiring inventory software to do?"

**Handoff check**: Output should contain validated persona with struggling moments that business-case can price against.

### Step 6: business-case
**Input**: Prior outputs + "Build the investment thesis for entering the ghost kitchen vertical. What's the ROI and what assumptions are we making?"

**Handoff check**: Output should contain explicit assumptions with financial projections that assumption-audit can validate.

### Step 7: assumption-audit
**Input**: Prior outputs + "Audit every key assumption in the business case. What's validated, what's guessed, and what could kill us?"

**Handoff check**: Output should contain calibrated probability assessments and an evidence inventory that stakeholder-review can present.

### Step 8: stakeholder-review
**Input**: Prior outputs + "Prepare the stakeholder review — the CEO, VP Sales, and board need to sign off. Structure the pre-read and feedback protocol."

**Completion check**: Output should contain a structured review protocol with pre-read materials, feedback-type alignment, and conflict resolution approach.

## Assertions (Cross-Step)

1. **Information carries forward**: Each step references or builds on prior step outputs
2. **No contradictions**: Later steps don't contradict earlier findings
3. **Iron Laws respected**: Each step follows its Iron Law (e.g., problem-framing doesn't jump to solutions)
4. **Chain gates work**: assumption-audit catches assumptions from business-case, not just generic risks
5. **Stakeholder map is used**: buyer-persona and stakeholder-review reference the stakeholder map from step 2
6. **Competitor insights flow**: business-case references competitive vulnerabilities from step 4
7. **Final review is grounded**: stakeholder-review references specific findings from all prior steps, not generic review protocol
