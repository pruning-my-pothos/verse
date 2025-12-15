---
title: When to Use Context Routing
description: Situations where the context routing pattern improves message delivery.
tags: [pattern, decision, routing]
last_reviewed: 2025-02-15
status: stable
---

Use context routing when:
- Multiple services subscribe to the same event types but need different payload slices.
- You must enforce data minimization by default.
- You operate in environments with strict audit requirements.

Avoid or simplify when:
- Only one consumer exists and volume is low.
- The platform already enforces strict schemas and narrow topics.

Related:
- Architecture: [Context routing architecture](/docs/systems-patterns/context-routing/architecture)
- Platform: [Edge Messaging usage](/docs/platforms/edge-messaging/usage)
- Exploration: [Runtime observability note](/docs/exploration-notes/runtime-observability)
