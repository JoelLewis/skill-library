# Qualitative Eval Grading Report

## Summary Table

| # | Eval | Family | Assertions Passed | Quality Score |
|---|------|--------|-------------------|---------------|
| 1 | getting-started | meta | 3/3 (100%) | 5 |
| 2 | problem-framing | workflow | 4/4 (100%) | 5 |
| 3 | decision-frameworks | executive | 4/4 (100%) | 5 |
| 4 | fiction-architect | narrative | 4/4 (100%) | 5 |
| 5 | non-fiction-precision | rhetorician | 4/4 (100%) | 5 |
| 6 | negotiation-tactician | dealmaker | 4/4 (100%) | 5 |

**Overall: 23/23 assertions passed. Average quality score: 5.0**

---

## Eval 1: getting-started (meta)

### Assertion Pass/Fail

**1. Identifies problem-framing as the recommended starting skill [routing]**
- **PASS**
- Evidence: "I recommend we begin with **`workflow:problem-framing`**." The skill is identified as "Primary -- start here" in the routing table.

**2. References the workflow chain or skill dependencies [process]**
- **PASS**
- Evidence: "Your task falls squarely in the **Discovery phase** of the workflow chain. The correct sequence is: `problem-framing -> stakeholder-discovery -> market-context -> competitive-analysis -> buyer-persona -> business-case -> [deliverable] -> assumption-audit -> stakeholder-review`"

**3. Does not attempt to answer the build-vs-buy question directly [discipline]**
- **PASS**
- Evidence: "I will not answer the 'mobile app vs. PWA' question directly -- that answer should emerge from the discovery process, not precede it."

### With-Skill vs Baseline Comparison

The skill version and baseline are fundamentally different in approach:

- **Routing vs. answering.** The skill version routes to problem-framing and explicitly refuses to answer the mobile-vs-PWA question. The baseline dives straight into answering it, recommending a PWA within the first few paragraphs and even providing a technical stack recommendation and 12-week timeline.
- **Process awareness.** The skill version scans all 6 families, builds a relevance table of 8 skills, and establishes the full workflow chain. The baseline has no awareness of any skill system -- it operates as a general-purpose assistant.
- **Discipline.** The skill version asks clarifying questions before proceeding. The baseline provides a confident recommendation ("a PWA is almost certainly the right call") without understanding the problem space.
- **Baseline advantage?** The baseline is more immediately actionable -- a user who wants a fast answer gets one. But this is precisely the behavior the skill is designed to prevent. The baseline's answer may be correct, but it was reached without structured discovery, which means it could easily be wrong for reasons neither party has examined.

### Quality Score: 5

Excellent. All assertions pass. The skill version demonstrates rigorous routing behavior, full workflow chain awareness, and explicit discipline in refusing to jump to solutions. Clearly superior to baseline for the intended purpose.

---

## Eval 2: problem-framing (workflow)

### Assertion Pass/Fail

**1. Distinguishes between the three stakeholder hypotheses as potential symptoms vs root causes [analysis]**
- **PASS**
- Evidence: "Each stakeholder is describing the problem through the lens of what they control... None of them is describing a *problem* -- they are each describing a *solution they believe in*." The output explicitly categorizes onboarding, performance, and SSO as solution hypotheses emanating from each stakeholder's vantage point, then conducts a 5 Whys analysis to reach the systemic root cause (missing segmented churn diagnostic).

**2. Produces or structures toward a clear problem statement [deliverable]**
- **PASS**
- Evidence: "**The company lacks a segmented understanding of why distinct customer cohorts are failing to realize sustained value, which has produced a churn spike that three functions diagnose differently because each sees only its own slice of the retention failure.**" This is explicitly labeled as a gate-controlled problem statement requiring approval before proceeding.

**3. Identifies what data or validation is needed before jumping to solutions [discipline]**
- **PASS**
- Evidence: The "Recommended Next Steps" section calls for segmenting churn data by contract size, tenure, usage patterns, and stated departure reason before acting. The reframed problem questions (section Step 3) explicitly list the data needed: "Which customer segments are churning?" "What changed last quarter?" "What does the company currently measure about customer health?"

**4. References the Iron Law about approved problem framing before analysis [process]**
- **PASS**
- Evidence: The Iron Law is stated at the top: "**Iron Law:** `NO ANALYSIS WITHOUT APPROVED PROBLEM FRAMING FIRST`" and reinforced at the bottom: "`NO ANALYSIS WITHOUT APPROVED PROBLEM FRAMING FIRST`" with an explicit gate: "No analysis, solution design, or resource allocation should proceed until this framing is reviewed and either approved or sent back for revision."

### With-Skill vs Baseline Comparison

- **Process enforcement.** The skill version has an explicit state machine with gates (AWAITING APPROVAL), an Iron Law, a diagnostic checklist, and a rationalization table ("Challenging Dysfunctional Beliefs"). The baseline has none of these -- it proceeds directly to analysis and recommendations.
- **Depth of root cause analysis.** The skill version runs a full 5 Whys that reaches a systemic conclusion (the organization lacks churn diagnostic infrastructure). The baseline correctly identifies that churn needs segmentation but stops at the surface level -- it doesn't ask why the organization has three competing hypotheses in the first place.
- **Reframing.** The skill version reframes "8% churn" as a measurement rather than a problem, and reframes the three hypotheses as functionally-biased solution proposals. The baseline treats the hypotheses more neutrally, evaluating each as potentially valid without questioning the meta-pattern.
- **Baseline advantage?** The baseline is well-structured and gives solid practical advice ("Run the segmented analysis... Build a churn driver matrix... Quantify the revenue impact"). It is a competent response. But it lacks the rigor layers (gates, Iron Law, rationalization table) that prevent premature action.

### Quality Score: 5

Excellent. All four assertions pass with strong evidence. The skill version demonstrates the full problem-framing state machine including SPIN context gathering, 5 Whys, reframing, a gated problem statement, and a diagnostic checklist. Clearly superior to the already-competent baseline.

---

## Eval 3: decision-frameworks (executive)

### Assertion Pass/Fail

**1. Creates or guides creation of a weighted decision matrix [framework]**
- **PASS**
- Evidence: Step 2 builds a full decision matrix with probability-weighted outcome scenarios for each of the three targets plus a "Do Nothing" option. Each option has best/average/worst cases with explicit probability percentages (e.g., "20% / 45% / 35%").

**2. Identifies criteria beyond just financial (strategic fit, risk, integration complexity) [analysis]**
- **PASS**
- Evidence: The analysis covers technology differentiation, talent retention, culture clash, management attention, integration complexity, relationship transferability, and second-order consequences (roadmap slowdown, dual-platform maintenance, services-to-product culture clash). The Circle of Competence check identifies non-financial blind spots requiring expert input.

**3. Runs or suggests a pre-mortem on the recommended option [process]**
- **PASS**
- Evidence: Step 4 runs full pre-mortem narratives for all three options plus "Do Nothing," written as six-months-out failure scenarios. Each narrative is specific and actionable, followed by a mitigation table with owners.

**4. Makes trade-offs explicit rather than giving a single 'right answer' [discipline]**
- **PASS**
- Evidence: "Do not present a single recommendation. Present a decision-ready package." The final recommendation framework explicitly calls for a ranked recommendation with confidence level and kill criteria, not a single answer. The inclusion of Option D (Do Nothing) further demonstrates trade-off thinking.

### With-Skill vs Baseline Comparison

- **Mental model depth.** The skill version applies First Principles, Circle of Competence, Inversion, Second-Order Thinking, Occam's Razor, the Happiness Test, and the Ackerman model -- all with source citations (Duke, Parrish, Munger). The baseline uses a standard consulting framework (criteria matrix, risk filters, board deck template) without named mental models.
- **Pre-mortem quality.** The skill version writes three vivid, narrative pre-mortems that feel like real post-failure retrospectives. The baseline identifies risks per target but does not run pre-mortems.
- **Decision journal.** The skill version includes a decision journal template (from Duke) for capturing reasoning and preventing hindsight bias. The baseline does not address learning from the decision.
- **Baseline advantage?** The baseline's suggestion to consider acquiring two targets (combinations) is a creative strategic insight that the skill version does not offer. The baseline's board presentation outline is also practical and well-structured. The baseline is a strong business response -- it just lacks the mental model rigor and process discipline of the skill version.

### Quality Score: 5

Excellent. All assertions pass. The skill version is comprehensive, multi-model, source-cited, and demonstrates clear process discipline. The pre-mortems and decision journal add layers of rigor absent from the baseline.

---

## Eval 4: fiction-architect (narrative)

### Assertion Pass/Fail

**1. Identifies the late inciting incident as the core structural problem [diagnosis]**
- **PASS**
- Evidence: "Your first act has an 80-page runway with no value turns before the discovery. In McKee's terms, those pages contain 'exposition as scene' -- activity without events." The output then reframes the discovery as an Act I Climax rather than an Inciting Incident, proposing a new Inciting Incident by page 10-15.

**2. Suggests moving the discovery earlier or planting foreshadowing/micro-tensions [solution]**
- **PASS**
- Evidence: Three concrete options for a new Inciting Incident (data anomaly, colleague's departure, journalist contact), followed by a five-step escalating Road of Trials (pages 15-70) with specific tension beats. The discovery at page 80 is retained but recontextualized as a climax, not a beginning.

**3. References specific story structure frameworks (McKee, Campbell, or Sanderson) [grounding]**
- **PASS**
- Evidence: McKee (value turns, Principle of Antagonism, Story Ch. 14), Campbell (Crossing the First Threshold, Road of Trials), Sanderson (Promise/Progress/Payoff), Storr (Sacred Flaw, Curiosity Gap), and ABT framework (Industrial Scripts) are all cited and applied structurally.

**4. Addresses emotional stakes, not just plot mechanics [craft]**
- **PASS**
- Evidence: The Sacred Flaw analysis identifies the protagonist's core belief ("Institutional science is trustworthy") and maps how each structural beat pressures that belief emotionally. "Trust erodes incrementally. The reader watches the protagonist's certainty crack before the full revelation." The Promise/Progress/Payoff section addresses the reader's emotional experience, not just plot sequencing.

### With-Skill vs Baseline Comparison

- **Framework density.** The skill version applies five named frameworks (McKee, Campbell, Sanderson, Storr, ABT) with specific terminology and source citations. The baseline gives good practical advice but names no frameworks or sources.
- **Diagnostic precision.** The skill version runs a value audit table showing that pages 1-80 have only one value turn. The baseline identifies the same problem intuitively ("setup without conflict") but lacks the analytical vocabulary to name it precisely.
- **Sacred Flaw / emotional architecture.** The skill version identifies the protagonist's Sacred Flaw and traces how each structural beat challenges it. The baseline addresses emotional stakes ("establish what she stands to lose") but does so as practical advice rather than through a character psychology framework.
- **Restructured Act I.** Both versions provide a restructured outline. The skill version's is organized around framework concepts (Inciting Incident, Road of Trials, Act I Climax, Promise/Progress/Payoff). The baseline's is more intuitive and scene-oriented. Both are useful; the skill version is more analytically grounded.
- **Baseline advantage?** The baseline's suggestion to use dramatic irony (letting the reader know before the protagonist) is a strong craft technique that the skill version does not propose. The baseline is also more concise and immediately practical. A working novelist might find the baseline's tone more accessible.

### Quality Score: 5

Excellent. All assertions pass with rich evidence. The skill version demonstrates deep structural analysis grounded in multiple named frameworks, with attention to both craft mechanics and emotional architecture. The baseline is competent but ungrounded by comparison.

---

## Eval 5: non-fiction-precision (rhetorician)

### Assertion Pass/Fail

**1. Restructures to lead with the conclusion or key recommendation [structure]**
- **PASS**
- Evidence: The rewrite opens with: "**Recommendation:** Prioritize retention over vertical expansion in Q2." The diagnosis explicitly calls out the original's failure: "No answer first. The reader reaches the end without knowing what the leadership team should *do*." The SCQ framework is used to derive the missing answer.

**2. Replaces vague language ('good adoption', 'progressing well', 'mixed') with specific expectations [precision]**
- **PASS**
- Evidence: The Strunkian Pruning table maps each vague phrase to its replacement: "'seen good adoption' -> '[N] of [M] target accounts activated within [timeframe]'"; "'progressing well' -> 'entered design phase on [date], beta in [month]'"; "'Customer feedback has been mixed' -> '[N] downgraded, [N] churned, [N] escalated'". Brackets force the author to supply real numbers.

**3. Creates clear grouping/hierarchy (MECE or similar) [framework]**
- **PASS**
- Evidence: Step 2 explicitly builds MECE grouping: "(1) What we shipped and its measured impact, (2) What is in progress and its timeline, (3) What Q2 requires and why. Each bucket is distinct (no overlaps) and together they cover the full quarter-to-quarter story (no gaps)."

**4. Result is significantly shorter or more information-dense than the original [concision]**
- **PASS**
- Evidence: The rewritten memo (Step 3) is more information-dense than the original despite being roughly similar in length, because every sentence contains a specific claim, number placeholder, or recommendation. The original's filler ("the team has been working on several initiatives," "stay ahead") is eliminated entirely. The Strunkian Pruning table shows 7 explicit cuts/replacements.

### With-Skill vs Baseline Comparison

- **Diagnostic depth.** The skill version runs a full SCQ (Situation-Complication-Question) analysis to identify that the original has no answer at all -- "the root problem -- no amount of wordsmithing fixes a memo that has nothing to say." The baseline identifies the same issues (vague qualifiers, no numbers, no ask) but as a flat list rather than a structured diagnosis.
- **Source citations.** The skill version cites Minto (Pyramid Principle), Strunk (Elements of Style), Orwell ("Politics and the English Language"), McPhee (Draft No. 4), and Graham ("Write Like You Talk") with specific rules applied. The baseline has no source citations.
- **Pruning table.** The skill version provides a side-by-side table mapping each original phrase to its replacement with the specific writing rule violated. The baseline explains the same principles in prose but without the systematic mapping.
- **Rewrite quality.** Both versions produce strong rewrites. The skill version's is more structured (three MECE sections with explicit recommendations). The baseline's includes a "What I need from this group" section with specific asks, which is a practical addition the skill version lacks.
- **Baseline advantage?** The baseline's "What I need from this group" section (decision on pricing, headcount approval, alignment on positioning) is excellent practical advice for leadership communication. The skill version's rewrite implicitly contains asks but does not separate them as a distinct section.

### Quality Score: 5

Excellent. All assertions pass. The skill version provides a rigorous, source-grounded diagnostic and rewrite methodology that demonstrates why the original fails, not just how to fix it. The MECE framework, SCQ analysis, and Strunkian pruning table add analytical depth absent from the baseline.

---

## Eval 6: negotiation-tactician (dealmaker)

### Assertion Pass/Fail

**1. Identifies the founder's BATNA (staying with current provider at $8k/month) [framework]**
- **PASS**
- Evidence: "Your BATNA is strong. Define it precisely: 1. Stay with your current provider at $8k/month... 2. Take credits from a competing cloud... 3. Use the $100k credits and decline the enterprise agreement." The BATNA is explicitly labeled and expanded to include three alternatives.

**2. Suggests specific calibrated questions to ask in the meeting [tactics]**
- **PASS**
- Evidence: Step 2 provides 8 specific calibrated questions organized into three categories (understanding their constraints, understanding the structure, hunting for Black Swans). Examples: "How does this deal fit into your team's objectives this quarter?" and "How would we handle it if our usage doesn't reach $15k/month after the credits expire?"

**3. Warns about the anchor effect of the $100k credits offer [awareness]**
- **PASS**
- Evidence: "The $100k in credits is not a gift. It is a customer acquisition cost designed to create switching costs and lock you into a higher spend tier." Step 3 also reframes the anchor: "Their opening position ($100k credits + $15k/month for 3 years) is an anchor. The total post-credit commitment is $540,000."

**4. Recommends a preparation structure (interests, alternatives, legitimacy criteria) [process]**
- **PASS**
- Evidence: The full Negotiation One-Sheet (Step 1) covers goal, reservation value, BATNA, and Accusation Audit. Step 2 covers information exchange with calibrated questions. Step 3 covers opening and concession strategy (Ackerman Model). Step 4 covers closing with the Rule of Three. A pre-meeting checklist ties it together.

### With-Skill vs Baseline Comparison

- **Framework specificity.** The skill version deploys named negotiation frameworks: BATNA (Fisher), Accusation Audit (Voss), Ackerman Model (Voss), Calibrated Questions (Voss), Rule of Three (Voss), Situational Matrix (Shell), and Black Swans (Voss) -- all with source citations. The baseline gives sound practical advice but names no frameworks.
- **Tactical detail.** The skill version provides a 4-round Ackerman table with specific dollar amounts and percentages, mirroring techniques with example dialogue, and concession labeling scripts. The baseline suggests general approaches ("ask questions, don't negotiate yet") without the same tactical precision.
- **Accusation Audit.** The skill version includes a full Accusation Audit with four specific accusations and defusing language. The baseline does not address emotional/perception management.
- **Pre-meeting checklist.** The skill version provides a concrete, checkable preparation checklist. The baseline embeds preparation advice in prose.
- **Baseline advantage?** The baseline's "Key Numbers to Have Ready" section with the comparative cost analysis ($440k net AWS vs. $288k staying put) is immediately useful and clearly presented. The baseline's advice to "not decide in the room" is practical wisdom the skill version embeds less prominently. The baseline is also more concise and accessible -- a founder reading it the night before a meeting would find it faster to absorb.

### Quality Score: 5

Excellent. All assertions pass. The skill version demonstrates comprehensive negotiation preparation methodology with named frameworks, source citations, specific tactical scripts, and a structured preparation checklist. Clearly superior in rigor and depth to the baseline, which is itself a competent response.

---

## Cross-Eval Observations

**Consistent skill advantages across all 6 evals:**

1. **Source citations.** Every skill output cites specific books, authors, and frameworks. No baseline output does. This grounds advice in established methodology rather than general knowledge.

2. **Process enforcement.** Skill outputs include diagnostic checklists, gates, Iron Laws, or structured preparation steps. Baselines proceed directly to advice without process scaffolding.

3. **Named frameworks.** Skill outputs apply frameworks by name (5 Whys, MECE, Ackerman Model, Sacred Flaw, SCQ) and show their work. Baselines reach similar conclusions intuitively but cannot explain the methodology.

4. **Discipline markers.** Skill outputs explicitly refuse premature action (eval 1: won't answer the question; eval 2: gates the problem statement; eval 5: identifies the missing answer before rewriting). Baselines provide answers immediately.

**Where baselines hold their own:**

- Baselines are consistently more concise and immediately actionable.
- Eval 3 baseline proposed acquisition combinations -- a creative insight the skill version missed.
- Eval 4 baseline suggested dramatic irony as a technique -- a craft-level suggestion the skill version did not offer.
- Eval 6 baseline's comparative cost table was clearer and more immediately useful for the meeting.

**Conclusion:** The skill system delivers measurably more rigorous, grounded, and process-disciplined outputs across all 6 families. The baselines are competent but undifferentiated -- they represent what a capable LLM produces without domain-specific process enforcement. The skills add the most value in preventing premature action (evals 1-2), enforcing analytical rigor (evals 3, 5), and providing tactical precision (eval 6).
