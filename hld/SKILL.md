---
name: hld
description: Design or explain a clear high-level system design (HLD) for an interview question, backend feature, or product system. Use when asked for architecture, system design, HLD, components, APIs, data flow, an architecture diagram, or design tradeoffs. Produces a technology-agnostic design through requirements, entities, interfaces, and a simple (not too much simple/useless) build-up diagram.
---

# High-Level Design

Use a short, linear design process. Make the simplest complete design first; do not prematurely optimize it. Technology-agnostic HLD, not – prototype of project/feature.

This skill adapts the public Hello Interview delivery structure: requirements, core entities, API/system interface, optional data flow, then high-level design. Do not reproduce its course material or presume its deep-dive recommendations apply to the user’s system.

### Technology-agnostic HLD

Do not select, compare, or name implementation technologies in the diagram. Use capability names such as `database`, `relational data store`, `object storage`, `event broker`, `cache`, `identity provider`, and `application service, etc...`.

Keep explicitly given external systems as integration constraints, not as technology recommendations. For example, describe an existing identity provider as `existing company identity provider` unless its name is essential to the requested scope.

Very important: do not over-engineer/over-complicate the design, etc content: Avoid unnecessary components, complexity, or optimizations. Do not add a cache, queue, CDN, replica, retry mechanism, monitoring tool, or load balancer merely because it is common.

For each component (even if im saying major content will be tech-agnostic; this section will be like proposed or such choices presenting - into some section incl.):
- Compare 2–6 or such different possible exact, actual, specific technologies and in a table as well. For each, give fit for this system (considering all constraints, context, etc.), benefits, limitations, operational burden, and meaningful clear simple-worded tradeoffs.
- Leave the decision with the user. Also, make a recommendation only if the material constraints are known - with clear logical reasoning ('why').

Use current, primary sources when a choice depends on mutable product capabilities, support status, pricing, limits, or security/compliance claims.

```text
Use $hld-design for [system/feature].

For [component and purpose], do not choose a technology yet. First identify
the system-specific facts or constraints needed to decide. Then compare 2–6 or such different possible exact, actual, specific exact technologies using all the different constraints, context, project/feature's requirements mentioned, etc. For each option, give a short description, suitability note, benefits, limitations, and clear simple-worded tradeoffs. Mark unknowns clearly. Do not recommend one unless I explicitly ask after the comparison.
```

Check the requirements and ask clarifying questions when the missing context is genuinely necessary to produce a correct design. Do not ask questions merely to fill in optional details; make and label reasonable assumptions when they do not materially affect the architecture.

## Identify and solve the hardest parts

Before finalizing the architecture, identify the top few genuinely hardest or most challenging parts of the feature or application, if any really exist. Keep this list focused on the risks that require the most architectural judgment or could most seriously affect correctness/reliability/security/scale/or user experience; do not invent difficulty for its own sake.

For every challenging part:
- State why it is difficult or high-risk in this system.
- Show the specific design decisions and mechanisms that solve it - exactly how.
- Explain the relevant invariants, and trade-offs well enough to demonstrate that the solution is correct.
- Verify explicitly that the proposed architecture and flow address it; do not leave the challenge as an observation without a design.
---
If essential context is missing, ask a targeted clarifying question before committing to a design. If the user cannot provide it, state the assumption and how it affects the solution.

## Define the contract before drawing (if not initially discussed or in plan mode docs or anywhere such - else refer from there and mention in output)
- List only the core entities: actors & essential nouns/resources. Start with names, not a detailed schema.
- Map each core functional requirement to one interface (not necessarily always – but logically as per system architects at FAANG). Default to REST for an external CRUD-style interface or else you can think of other as well if necessary & suitable. State authentication & authorization at the boundary when access control is material (only if necessary/relevant/helpful(.
- Use a short endpoint format:
```text
POST /a/requests
body: { … } → { request_id, status }

GET /a/requests/{request_id} → Request
```
- For an asynchronous, batch, or multi-stage system, add a numbered data flow before the architecture. Do not add this section for a simple request-response design.

## Build the HLD incrementally
Build the architecture one functional requirement at a time.
1. Start with the request entry point, the service that owns the operation, and the minimal durable state it needs.
2. Trace one representative operation from request to response. Say what each component does and what state changes.
3. Add only the component required by the next core operation.
4. Check that the resulting design satisfies the stated functional requirements and relevant non-functional requirements, etc.
5. Record unresolved scale, failure, or such concerns as `Next design questions` - if any really exist, else not.

Use capability names only. Technology selection belongs exclusively in text content (below/after diagram).

## Diagram standard

Prioritize readability over completeness. A diagram should make the primary path understandable in a few seconds.

- Create one overview diagram sized for readability. Do not impose a fixed maximum number of nodes or edges. Judge whether one coherent primary flow can still be traced quickly, with clear component ownership and without distracting crossings; if not, split distinct read/write, asynchronous, or lifecycle flows into separate diagrams.
- Default to left-to-right for HLD request flows. Use top-to-bottom only when a layered view or pipeline is clearer. Keep arrows straight and labels short verbs, for example `creates`, `reads`, `publishes`.
- Draw only components that have an active responsibility in the described flow. Do not add a cache, queue, CDN, replica, retry mechanism, monitoring tool, or load balancer merely because it is common.
- Do not draw every endpoint, table field, error path, authentication exchange, or future optimisation. Put relevant fields next to the data store only if they affect the design.
- Keep the diagram hierarchy flat. Avoid nested boxes, crossed arrows, circular arrows, and decorative nodes.
- Use a single connector with arrowheads at both ends only when really the two components genuinely exchange information that matters to the HLD: a status callback, a result that changes the initiator's next action, an approval or rejection, a stream, or a required acknowledgement. Do not make a connection bidirectional merely because a request-response protocol technically has a response.
- Give a bidirectional connector one short combined label, for example `request / status`, `reads / writes metadata`, or `stores / retrieves files`. Do not draw two opposing arrows for that same relationship.
- Draw at most one connector between the same two components in an overview diagram. Do not add a separate edge for each endpoint, CRUD action, or repeated operation. Collapse same-direction actions into one relationship label; move the exact actions into the primary-operation steps.
- If two independent relationships between the same components must be understood separately, use separate operation diagrams rather than multiple edges in the overview.
- Explain the primary flow below the diagram in 3–6 numbered steps. The prose carries precise behaviour; the diagram carries structure.

When Mermaid is useful, use this restrained baseline and replace names as needed:

```mermaid
flowchart LR
    Client[Client] <-->|request / status| API[API service]
    API <-->|reads / writes| DB[(Request store)]
```

Use plain prose plus a component table instead when Mermaid cannot express the result cleanly. Never force a large Mermaid diagram.

## Return format

Produce this order, omitting empty sections, depending on what is covered initially in chat - so skip relevant accordingly and mention it in chat:

1. **Core entities**
2. **Interfaces**
3. **Data flow**: only when it adds value
4. **High-level design**: one diagram
5. **Components and responsibilities**: a short table
6. **Hardest / most challenging parts and their solutions**: include the top few real challenges, if any, and the corresponding correctness-focused design decisions


## HLD boundary

Do not enter deep dives by default. If a user asks for deeper design work, get into deep with different possible options, logical reasoning like real architect, trade-offs, analytic thinking (not dumb like vibe coding - anything chosen randomly directly without any analysis/comparison/study), etc.
