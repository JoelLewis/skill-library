# Non-Fiction Precision: Quarterly Strategy Update Rewrite

## Diagnosis

The original text fails on nearly every item in the diagnostic checklist:

- **No answer first.** The reader reaches the end without knowing what the leadership team should *do*. The memo describes activity, not outcomes or recommendations. This is the "Nut Graph" Trap (Source: Minto, *The Pyramid Principle*).
- **Passive evasion.** "Customer feedback has been mixed" -- mixed how? From whom? What changed? "The competitive landscape is shifting" -- who is doing what? These sentences avoid naming actors and specifics. (Source: Strunk, *The Elements of Style*; Orwell, "Politics and the English Language")
- **Needless words and dead phrases.** "Has been working on several initiatives," "progressing well," "seen good adoption," "stay ahead" -- filler that communicates nothing testable. (Source: Strunk, *The Elements of Style*)
- **No MECE structure.** Topics jump between launches, projects-in-progress, customer reactions, future plans, and competitive context with no logical grouping. The reader cannot tell which points support which conclusion. (Source: Minto, *The Pyramid Principle*)
- **Zero concrete detail.** Not a single number, date, customer name, competitor action, or measurable outcome. The 1,000 Details Rule demands specifics that add up to one impression; here zero details add up to no impression. (Source: McPhee, *Draft No. 4*)

---

## Step 1: SCQ Discovery (Source: Minto, *The Pyramid Principle*)

Before rewriting, define the communication structure:

| Element | Extracted from Original |
|---|---|
| **Situation** | Q1 included a dashboard launch, an API redesign kickoff, and pricing changes. |
| **Complication** | Dashboard adoption is unquantified, pricing changes drew negative customer response, and the team lacks a stated priority for Q2. |
| **Question** | What should leadership fund, accelerate, or kill in Q2? |
| **Answer** | *Missing entirely from the original.* The author must decide this before writing. |

The original has no answer because the author has not committed to a recommendation. That is the root problem -- no amount of wordsmithing fixes a memo that has nothing to say.

---

## Step 2: Pyramid Build -- MECE Grouping (Source: Minto, *The Pyramid Principle*)

Assuming the author's actual recommendation is "double down on retention before expanding into new verticals," the supporting points group into three MECE buckets:

1. **What we shipped and its measured impact** (dashboard launch, pricing changes)
2. **What is in progress and its timeline** (API redesign)
3. **What Q2 requires and why** (retention focus, vertical expansion gates, competitive response)

Each bucket is distinct (no overlaps) and together they cover the full quarter-to-quarter story (no gaps).

---

## Step 3: The Rewrite

Below is a restructured version. Bracketed items `[like this]` mark places where the author must insert real numbers and specifics -- the rewrite cannot fabricate them, but it shows exactly where concrete detail is required.

---

> **Q1 Results and Q2 Recommendation**
>
> **Recommendation:** Prioritize retention over vertical expansion in Q2. Pricing-driven churn rose [X]% in Q1; until we stabilize the base, new-market investment will leak value.
>
> **Q1: What we shipped**
>
> The analytics dashboard launched on [date] and [N] of [M] target accounts activated within [timeframe]. Early usage data shows [specific metric, e.g., "average 3.2 sessions per user per week"], which meets/exceeds/falls short of our adoption target of [target].
>
> We raised prices [X]% on [specific tier/plan] in January. [N] customers downgraded, [N] churned, and [N] escalated through support. Net revenue impact: [+/- $amount]. The signal is clear: mid-market accounts absorb the increase; SMB accounts do not.
>
> **Q1: What is in progress**
>
> The API redesign entered design phase on [date]. [Team/person] owns delivery. Current target: beta in [month], GA in [month]. The blocking dependency is [specific dependency]. If that slips, GA moves to [month].
>
> **Q2: What we need to do**
>
> 1. **Stop SMB churn.** Roll back pricing for accounts under [threshold] or introduce a retention tier. Cost: [estimate]. Expected save: [N accounts / $amount ARR].
> 2. **Gate vertical expansion on retention metrics.** Do not allocate headcount to new verticals until monthly net revenue retention holds above [X]% for two consecutive months.
> 3. **Respond to [Competitor Name]'s [specific move].** They [launched/acquired/priced] [specific thing] in [month]. Our response: [specific action] by [date].

---

## Step 4: Strunkian Pruning -- What Changed and Why (Source: Strunk, *The Elements of Style*; Orwell, "Politics and the English Language")

| Original (Problem) | Rewrite (Fix) | Rule Applied |
|---|---|---|
| "the team has been working on several initiatives" | Cut entirely. Name the initiatives directly. | Orwell Rule 3: If you can cut it, cut it. |
| "seen good adoption" | "[N] of [M] target accounts activated within [timeframe]" | Strunk: Use concrete language. |
| "progressing well" | "entered design phase on [date], beta in [month]" | Strunk: Use concrete language. Orwell Rule 4: Active voice. |
| "Customer feedback has been mixed" | "[N] downgraded, [N] churned, [N] escalated" | Orwell Rule 4: Active voice. Name actors and actions. |
| "The competitive landscape is shifting" | "[Competitor] [launched/acquired] [specific thing] in [month]" | Orwell Rules 1 and 3: Kill dead metaphors. Be specific. |
| "we plan to focus on retention" | "Prioritize retention over vertical expansion in Q2" (as the lead sentence) | Minto: Answer first. |
| "stay ahead" | Cut. Replace with a named competitive response. | Orwell Rule 1: Never use a figure of speech you are used to seeing in print. |

---

## Step 5: Read-Aloud Audit (Source: Graham, "Write Like You Talk")

Read the rewrite aloud. Every sentence should sound like something you would say in a room with your leadership team. The original sounds like a memo written to avoid saying anything. The rewrite sounds like a person with an opinion delivering it.

Test: if you read "The competitive landscape is shifting and we need to stay ahead" aloud to your CEO, they would ask "shifting how? ahead of whom?" The rewrite answers those questions before they are asked.

---

## Diagnostic Checklist

- [x] Is the answer or recommendation in the first paragraph? -- Yes. "Prioritize retention over vertical expansion in Q2."
- [x] Have I eliminated all needless words? -- Yes. No "several initiatives," "progressing well," or "stay ahead."
- [x] Are supporting points MECE? -- Yes. Three groups: shipped, in-progress, Q2 actions. No overlaps, no gaps.
- [x] Does it sound natural when read aloud? -- Yes. Every sentence states a fact or a recommendation.
- [x] Have I used specific, concrete examples for every general principle? -- Partially. Brackets mark where the author must supply real numbers. The *structure* demands specifics; the original permitted vagueness.
