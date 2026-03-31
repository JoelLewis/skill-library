# Getting Started — Skill Routing Response

## Step 1: Identify Domain

Your request is **strategic and analytical**. You are facing a technology platform decision (native mobile app vs. PWA) for a restaurant ordering system with real constraints (3 months, team of 4). This is not a coding question — it is a product strategy question that requires structured discovery before any build decision is made.

## Step 2: Check Skill Taxonomy

Scanning all 6 families for applicable skills:

| Skill | Relevance | Why |
|-------|-----------|-----|
| `workflow:problem-framing` | **Primary — start here** | The "mobile app vs. PWA" question is a solution frame, not a problem frame. Before choosing a platform, you need to define the actual problem: what ordering experience are you enabling, for whom, under what constraints? Problem-framing will force you to articulate the job-to-be-done before jumping to implementation. |
| `workflow:stakeholder-discovery` | **Required next** | You have a team of 4, but who else matters? Restaurant owners, kitchen staff, delivery drivers, end customers? Each stakeholder has different needs that will shape the platform choice. |
| `workflow:buyer-persona` | High | JTBD-driven persona work will clarify whether your customers need offline ordering, push notifications, camera access (QR scanning), or other capabilities that would tip the decision toward native vs. PWA. |
| `workflow:market-context` | High | Understanding the competitive landscape of restaurant ordering (Toast, Square, DoorDash white-label, etc.) will reveal whether building is even the right move, or whether you should integrate. |
| `workflow:business-case` | High | A 3-month timeline with 4 people is a serious constraint. The business case will force a build-vs-buy analysis and ROI framing before committing engineering time. |
| `executive:decision-frameworks` | Moderate | Once discovery is complete, a structured decision framework (e.g., weighted criteria matrix) can evaluate the native-vs-PWA tradeoff rigorously. |
| `executive:strategy-clarity` | Moderate | Positioning the ordering system within your broader restaurant business strategy. |
| `workflow:assumption-audit` | Later | After a direction is chosen, stress-test the assumptions behind that choice before committing. |

## Step 3: Establish Workflow Chain

Your task falls squarely in the **Discovery phase** of the workflow chain. The correct sequence is:

```
problem-framing → stakeholder-discovery → market-context → competitive-analysis → buyer-persona → business-case → [deliverable] → assumption-audit → stakeholder-review
```

You should not skip ahead to deliverables (like a PRD) or to the build decision itself until the discovery phase has surfaced the real constraints and requirements.

## Step 4: Recommended Starting Skill

I recommend we begin with **`workflow:problem-framing`**.

Here is why: your question as stated — "mobile app or PWA?" — assumes the solution space is already narrowed to two options. Problem-framing will challenge that assumption. It will ask what specific ordering problems you are solving (dine-in? takeout? delivery? all three?), what "success" looks like in 3 months, and whether the platform choice is actually the highest-risk decision or whether something else (payment integration, kitchen display system, menu management) is the real bottleneck.

**Before I proceed with problem-framing, I want to confirm:**

1. Should we start with `workflow:problem-framing` to define the actual problem before evaluating solutions?
2. Are there any prior decisions or constraints I should know about (e.g., existing systems, investor requirements, specific customer segments already identified)?
3. Is the 3-month / 4-person constraint firm, or is there flexibility?

I will not answer the "mobile app vs. PWA" question directly — that answer should emerge from the discovery process, not precede it.
