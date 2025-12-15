---
title: Architecture Decision Record Template
description: Template for capturing decisions with context, options, and outcomes.
tags: [template, adr, decisions]
last_reviewed: 2025-02-15
status: stable
---

Copy and adapt this template for new decisions.

```md
---
title: ADR <number>: <Decision title>
description: One sentence that states the decision.
tags: [adr, area]
last_reviewed: <YYYY-MM-DD>
status: draft
---

## Status
Proposed | Accepted | Superseded by ADR <number>

## Context
- What problem are we solving?
- What constraints apply?
- Which exploration notes informed this decision? Link them, for example [Vector evaluation](/docs/exploration-notes/vector-evaluation).

## Decision
- The decision and rationale.

## Consequences
- Positive and negative outcomes.
- Mitigations for risks.

## References
- Related patterns such as [Context routing overview](/docs/systems-patterns/context-routing/overview).
- Platform docs such as [Edge Messaging overview](/docs/platforms/edge-messaging/overview).
- Prose or narrative link if needed: `https://pruning-my-pothos.github.io/prose`.
```

Usage notes:
- Store ADRs alongside the systems they affect.
- Update status when implemented and include `last_reviewed` changes.
- Link ADRs from related guides and platform docs so readers see the decision trail.
