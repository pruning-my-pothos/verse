---
title: Runbook Template
description: Template for documenting operational procedures and incident handling.
tags: [template, runbook, operations]
last_reviewed: 2025-02-15
status: stable
---

Use this structure for runbooks.

```md
---
title: <Runbook title>
description: Brief purpose of the runbook.
tags: [runbook, system]
last_reviewed: <YYYY-MM-DD>
status: draft
---

## Summary
- What is this procedure for?
- Who owns it?

## Preconditions
- Access and credentials required.
- Systems or environments in scope.

## Steps
1. Step one.
2. Step two.
3. Verification.

## Rollback
- How to safely undo changes.

## Observability
- Metrics or logs to watch; link to notes such as [Runtime observability](/docs/exploration-notes/runtime-observability).

## References
- Related patterns or platform docs.
- ADRs that justified the approach.
- Prose site for incident summary: `https://pruning-my-pothos.github.io/prose`.
```

Usage notes:
- Keep commands copyable and verified.
- Include expected outcomes after each major action.
- Update `last_reviewed` after every incident or drill.
