---
title: Context Routing Trade-offs
description: Costs and risks of using context-aware routing for messaging.
tags: [pattern, trade-offs, routing]
last_reviewed: 2025-02-15
status: stable
---

## Benefits
- Reduces consumer noise and processing costs.
- Improves compliance by minimizing data exposure.
- Encourages explicit ownership of routing rules.

## Costs
- Rule complexity can grow quickly if not curated.
- Additional metadata requirements on producers.
- Testing overhead to prevent regressions.

## Mitigations
- Keep a small set of required context fields.
- Reuse templates from the [ADR template](/docs/templates/adr) when changing routing rules.
- Run probes described in [Vector evaluation](/docs/exploration-notes/vector-evaluation) to check retrieval and routing accuracy.

## Related
- Platform: [Edge Messaging API](/docs/platforms/edge-messaging/api)
- Guide: [Publish a new platform guide](/docs/how-to-guides/publish-a-new-platform-guide)
- Exploration: [Runtime observability note](/docs/exploration-notes/runtime-observability)
