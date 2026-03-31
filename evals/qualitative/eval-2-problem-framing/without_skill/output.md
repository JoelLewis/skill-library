# Framing the Churn Problem

## The Core Issue

You have an 8% quarterly churn spike and three competing hypotheses about the cause. The first step is resisting the urge to pick one and run with it. Each stakeholder is pattern-matching from their own vantage point, which is natural but dangerous -- it leads to solving the wrong problem.

## Separating Symptom from Cause

The 8% churn number is a symptom, not a diagnosis. Before debating solutions (better onboarding, performance fixes, SSO), you need to decompose the churn data to understand what is actually happening.

### Questions to answer first

1. **Who is churning?** Segment by customer size (SMB vs. mid-market vs. enterprise), contract value, tenure, and industry. If enterprise clients make up 60% of churned revenue but 15% of churned logos, that is a fundamentally different problem than broad-based attrition.

2. **When are they churning?** Map churn against the customer lifecycle. Are they leaving in the first 90 days (onboarding problem), at renewal time (value realization problem), or randomly throughout contracts (acute trigger events)?

3. **What changed?** Churn "spiked," meaning it was lower before. What happened last quarter that did not happen the quarter before? New pricing? Product changes? Competitor launch? Sales team closing worse-fit deals? Seasonal effects?

4. **What are they saying?** Pull every cancellation reason, exit survey, support ticket escalation, and CS call note from churned accounts. Categorize them. Do not rely on anecdotal reports from any single team.

5. **Where are they going?** Are they switching to a competitor, building in-house, or eliminating the budget line entirely? Each implies a different strategic response.

## Evaluating the Three Hypotheses

Once you have the data, you can test each hypothesis against it:

### CEO: "We need better onboarding"
- **Would be supported if:** Churn is concentrated in accounts under 6 months old, time-to-first-value metrics have degraded, or activation rates have dropped.
- **Would be weakened if:** Churning customers were mostly mature accounts who had been active users for over a year.

### CTO: "It's a performance issue"
- **Would be supported if:** Churn correlates with usage patterns that hit performance bottlenecks, support tickets about speed/reliability spiked before cancellations, or uptime/latency metrics degraded last quarter.
- **Would be weakened if:** Churned accounts had low usage (they were not using the product enough to hit performance issues).

### Customer Success: "Enterprise clients need SSO"
- **Would be supported if:** Enterprise segment churn is disproportionately high, SSO was cited in cancellation conversations, or you are losing competitive deals where SSO is table stakes.
- **Would be weakened if:** Enterprise churn is proportional to overall churn, or enterprise clients cite other reasons when leaving.

## The Likely Reality

These hypotheses are probably not mutually exclusive. Churn rarely has a single cause. You may find that SSO gaps are driving enterprise churn, performance issues are frustrating power users in the mid-market, and onboarding friction is killing SMB retention -- all contributing to the aggregate 8% number.

## Recommended Next Steps

1. **Run the segmented analysis described above.** This should take 1-2 weeks with your data team and CS org. Do not skip this.

2. **Build a churn driver matrix.** For each customer segment, map the primary and secondary reasons for leaving, supported by data, not intuition.

3. **Quantify the revenue impact of each driver.** A problem affecting 50 SMB accounts at $500/month is different from a problem affecting 5 enterprise accounts at $50,000/month, even if both show similar logo churn rates.

4. **Prioritize based on recoverable revenue and fix difficulty.** SSO might be a well-scoped engineering project that immediately stops enterprise bleeding. Performance might require a longer architectural investment. Onboarding improvements might have the broadest impact but the slowest payoff.

5. **Align the leadership team on the data before proposing solutions.** The current disagreement exists because each leader is working from incomplete information. Shared data resolves most of these debates without anyone needing to "win."

The goal is not to prove any one person right. The goal is to stop losing customers, and that requires understanding exactly why they are leaving before committing engineering and design resources to a fix.
