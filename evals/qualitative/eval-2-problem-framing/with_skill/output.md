# Problem Framing: B2B SaaS Churn Spike

**Skill invoked:** `workflow:problem-framing`
**Iron Law:** `NO ANALYSIS WITHOUT APPROVED PROBLEM FRAMING FIRST`

---

## Step 1: Observe & Gather Context

### Applied Ethnography — What We Actually See

Three stakeholders have each observed churn from a different vantage point and each has already jumped to a solution:

| Stakeholder | Observation Point | Proposed Solution |
|---|---|---|
| CEO | New user activation metrics | Better onboarding flow |
| CTO | Performance dashboards, support tickets | Fix performance issues |
| Customer Success | Enterprise account exit interviews | Add SSO |

Each stakeholder is describing the problem through the lens of what they control. The CEO owns the product experience, the CTO owns infrastructure, and CS owns the enterprise relationship. None of them is describing a *problem* — they are each describing a *solution they believe in*.

### SPIN Context Gathering

**(S) Situation:**
- B2B SaaS company in a growth phase.
- Churn spiked to 8% last quarter, implying it was lower before (baseline unknown but presumably in the 3-5% range for B2B SaaS).
- Three competing internal narratives about causation, each mapping to a different function.

**(P) Problem — as perceived internally:**
- "We're losing customers faster than before."
- But the framing diverges immediately after this point — no shared understanding of *why*.

**(I) Implications if unresolved:**
- **Short-term:** Revenue contraction accelerates. At 8% monthly churn, you lose ~63% of your customer base annually. Even at 8% quarterly, compounding loss undermines growth economics.
- **Long-term:** If enterprise clients are a growing share of revenue (implied by CS raising SSO), losing them disproportionately destroys unit economics. Enterprise contracts have higher LTV, longer sales cycles, and higher acquisition cost. Replacing them with SMB volume does not produce the same margin.
- **Organizational:** Three competing theories without a shared diagnostic framework will produce three parallel initiatives, diluting engineering resources and delaying resolution.

### Red Flag Check

> "We need to build [Specific Solution]." — All three stakeholders have done this.

The CEO says "better onboarding." The CTO says "fix performance." CS says "add SSO." Each has framed a solution, not a problem. We stop here and move to root cause analysis.

---

## Step 2: Root Cause Analysis (5 Whys)

Starting from the observable symptom:

**Why #1: Why did churn spike to 8% last quarter?**
Because customers who previously stayed are now leaving. The spike implies a *change* — something shifted in the last quarter relative to prior quarters.

**Why #2: Why are customers who previously stayed now leaving?**
We don't have a single answer. We have three hypotheses (onboarding, performance, SSO), which means we likely have *multiple churn drivers affecting different customer segments*. Churn is not one problem — it is a composite metric aggregating distinct failure modes across distinct cohorts.

**Why #3: Why are there multiple undiagnosed churn drivers operating simultaneously?**
Because the company lacks a shared, segmented view of churn. There is no single diagnostic that breaks churn down by customer segment, tenure, contract size, and proximate cause of departure. Each function sees its own slice and generalizes from it.

**Why #4: Why does the company lack a segmented churn diagnostic?**
Because during the growth phase, acquisition metrics dominated attention. When net-new revenue masks churn, churn analysis gets deprioritized. The spike is the first time churn became impossible to ignore.

**Why #5: Why did growth-phase metrics mask the underlying retention failures?**
Because the organization optimized for acquisition without building feedback loops that surface retention risk *before* it materializes as cancellation. There is no early-warning system — no health scoring, no segmented NPS, no usage-decline triggers.

### Avoiding the "Human Error" Trap

It would be easy to stop at "the CEO/CTO/CS each diagnosed the wrong thing." That is a human-error stop. The systemic issue is that the organization has no shared churn diagnostic infrastructure. The three conflicting theories are a *symptom* of missing instrumentation, not a cause.

---

## Step 3: Reframing & Questioning

### Challenging Dysfunctional Beliefs

| Dysfunctional Belief | Reframe |
|---|---|
| "Churn is one problem with one root cause." | Churn is a composite metric. A spike likely involves multiple failure modes across segments. Treating it as monolithic guarantees you under-address at least one driver. |
| "The fix is [onboarding / performance / SSO]." | Each of these is a solution hypothesis, not a problem statement. Committing to any one before segmenting churn data is guessing. |
| "8% churn is the problem." | 8% is the *measurement*. The problem is that distinct customer segments are failing to get sustained value, and you cannot yet distinguish which segments, why, or in what proportion. |
| "We need to act fast — pick one and go." | Speed of action without diagnosis is speed toward the wrong destination. The fastest path to reducing churn is 2 weeks of segmented analysis followed by targeted intervention, not 3 months of building the wrong feature. |

### Reframed Problem Questions

Instead of "How do we reduce churn?", the productive questions are:

1. **Which customer segments are churning, and are they the same segments as before or new ones?** (Separates enterprise vs. SMB, new vs. tenured, high-usage vs. low-usage.)
2. **For each churning segment, what is the proximate trigger — and does it map to onboarding failure, performance degradation, or missing capabilities?** (Tests all three hypotheses simultaneously rather than picking one.)
3. **What changed last quarter that caused a spike rather than gradual increase?** (A spike implies a discrete event — a release, a pricing change, a competitor launch, a support policy shift — not a slow drift.)
4. **What does the company currently measure about customer health between signup and cancellation?** (Diagnoses the instrumentation gap identified in the 5 Whys.)

### Anchor Problem Identification

The anchor problem — the one that, if unsolved, makes all other interventions unreliable — is:

> The organization cannot segment churn by customer cohort, tenure, and proximate cause, which means any intervention is a guess applied uniformly to a non-uniform population.

---

## Gate: Problem Statement for Approval

### Proposed Problem Statement

**The company lacks a segmented understanding of why distinct customer cohorts are failing to realize sustained value, which has produced a churn spike that three functions diagnose differently because each sees only its own slice of the retention failure.**

This statement:
- Is framed in terms of human needs (customers failing to realize value), not technical requirements.
- Contains no specific solution (no mention of onboarding, performance, or SSO).
- Explains why internal disagreement exists (missing shared diagnostic).
- Points toward a clear next action (segment and diagnose before intervening).

### Diagnostic Checklist

- [x] Is the problem stated in terms of human needs or goals, not technical requirements?
- [x] Have you asked "Why?" at least five times to reach a fundamental cause?
- [x] Does the problem statement avoid mentioning any specific solution?
- [ ] Is there a clear "Winning Aspiration" that defines what success looks like? *(Pending — Step 4, after approval.)*
- [ ] Has the problem statement been validated by observing users in their natural environment? *(Requires actual customer data and exit interview analysis — flagged as the first action item.)*

**This problem statement requires your approval before proceeding to Step 4 (Winning Aspiration). If this framing does not match your understanding, we return to Step 1 with your corrections.**

---

## Step 4: Define Winning Aspiration (Provisional)

*Proceeding provisionally to demonstrate the full state machine. In a live engagement, this step executes only after gate approval.*

### Winning Aspiration

**Within 90 days, the company will have (1) a segmented churn diagnostic that attributes each cancellation to a specific failure mode and customer cohort, and (2) targeted interventions deployed against the top two churn drivers by segment, reducing quarterly churn to below 5%.**

### Quantified Need-Payoff

- **Financial:** If current ARR is, say, $10M and quarterly churn drops from 8% to 4%, that preserves ~$400K in quarterly revenue that would otherwise be lost — roughly $1.6M annually before compounding.
- **Operational:** A shared churn diagnostic eliminates the three-way disagreement pattern. Future retention work becomes data-driven rather than opinion-driven.
- **Customer:** Each segment gets an intervention matched to its actual failure mode, rather than a one-size-fits-all fix that addresses one group's needs while ignoring others.

---

## Recommended Next Steps

1. **Segment churn data immediately.** Break last quarter's cancellations by: contract size (enterprise vs. SMB), customer tenure (< 6 months vs. 6-12 months vs. 12+ months), product usage patterns (active vs. declining), and stated reason for leaving (exit survey or CS notes).
2. **Test all three hypotheses simultaneously.** The CEO, CTO, and CS may each be right — for *different segments*. Onboarding failure may drive new-customer churn, performance may drive power-user churn, and missing SSO may drive enterprise churn. These are not mutually exclusive.
3. **Identify the spike trigger.** A quarter-over-quarter spike implies a discrete cause. Check: product releases, pricing changes, competitor moves, support staffing changes, or contract renewal clustering.
4. **Invoke `workflow:stakeholder-discovery`** to align the CEO, CTO, and CS lead around the segmented diagnostic before committing engineering resources to any single intervention.

---

## Discovery Gate Status: AWAITING APPROVAL

The problem has been framed. No analysis, solution design, or resource allocation should proceed until this framing is reviewed and either approved or sent back for revision.

`NO ANALYSIS WITHOUT APPROVED PROBLEM FRAMING FIRST`
