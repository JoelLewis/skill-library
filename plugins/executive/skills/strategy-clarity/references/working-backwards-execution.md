# Working Backwards Execution

Use this to translate a validated strategic position into a customer-facing execution
artifact. The PR/FAQ forces you to articulate the strategy from the customer's
perspective before building anything.

## Procedure

### Step 1: Write the Press Release

Write a one-page press release announcing the product, service, or initiative as if
it already exists. The press release must answer five questions:

1. **Who is the customer?** Name the specific segment, not "everyone."
2. **What is the problem?** State the pain in the customer's language.
3. **What is the solution?** Describe what the customer gets, not what the team builds.
4. **Why should the customer care?** What changes in their life or work?
5. **What does the customer do next?** A concrete action — sign up, buy, switch.

Write it as if a journalist is explaining why this matters to a real person. If it
reads like a product spec or internal memo, rewrite it.

### Step 2: Write the FAQ

The FAQ has two sections. Both are mandatory.

**External FAQ** — Questions customers would ask:

- How much does it cost?
- How is this different from [existing alternative]?
- What do I have to give up or change to use this?
- When can I get it?

Write real questions, not softballs. If every answer is "yes, we handle that,"
the questions are too easy.

**Internal FAQ** — Questions leadership and engineering would ask:

- What does this cost to build and operate?
- What's the timeline to first customer?
- What existing system or commitment does this conflict with?
- What's the biggest technical risk?
- What assumption, if wrong, kills this?

The Internal FAQ is where strategic assumptions surface. Write it to expose risk,
not to reassure.

### Step 3: Identify the Controllable Inputs

List the leading indicators the team can directly influence. These become the
operational metrics that drive execution.

A controllable input is something the team does, not something the market does.

- "Number of customer interviews per week" = controllable input.
- "Revenue growth" = output, not controllable.
- "Number of integrations shipped per sprint" = controllable input.
- "Market share" = output, not controllable.

Select 3-5 controllable inputs that, if moved consistently, produce the customer
outcome described in the press release.

(Source: Bryar & Carr, *Working Backwards*, Ch. 5)

### Step 4: Define the First Mechanism

A mechanism is a structural process that ensures the strategy executes without
relying on individual heroics. "Good intentions don't work. Mechanisms do."

Define one mechanism that enforces execution of the most critical controllable input.

A mechanism has three properties:

1. **It is structural, not behavioral.** It is built into process or tooling.
2. **It operates automatically.** It does not depend on someone remembering.
3. **It has a feedback loop.** Deviation is visible and triggers correction.

Example: "Weekly metrics review where controllable inputs are plotted against
targets, and any input below threshold generates a written correction plan
due within 48 hours."

(Source: Bryar & Carr, *Working Backwards*, Ch. 1)

### Step 5: Validate Against the Strategic Position

Check the press release against the Lafley Cascade choices (Where to Play, How
to Win). Ask:

- Does the press release describe a customer outcome that *requires* the specific
  Where to Play and How to Win choices already made?
- Could this press release describe a different strategy equally well?
- Does the How to Win choice appear as the reason the customer cares?

If the PR could describe any strategy, it is too generic. Rewrite until the
strategic position is the reason the customer outcome exists.

## Gotchas

**The PR/FAQ is a thinking tool, not a communication tool.** If stakeholders are
wordsmithing the press release for external polish, the process has been hijacked.
The goal is to force clarity of thought, not to produce publishable copy.

**If the Internal FAQ doesn't surface at least one uncomfortable question about
feasibility or cost, it's not honest enough.** Go back and add the question the
team is avoiding.

**Mechanisms must be structural, not behavioral.** "Engineers will review each
other's code" is behavioral — it depends on willpower. "No code merges without
automated test coverage above 80%" is structural — it enforces itself.

## Sources

- Bryar & Carr, *Working Backwards*, Ch. 1, 4-5 — PR/FAQ process, Mechanisms,
  Controllable Inputs.
