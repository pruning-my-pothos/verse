---
title: Context Routing Architecture
description: How routing rules, metadata, and delivery paths fit together for context-aware messaging.
tags: [pattern, architecture, routing]
last_reviewed: 2025-02-15
status: stable
---

## Flow
1. Producers tag events with context fields: domain, entity, sensitivity, and operation.
2. Routing rules evaluate context and map events to channels and consumers.
3. Consumers receive filtered payloads and acknowledge delivery.
4. Metrics feed into observability for latency, errors, and DLQ trends.

## Components
- **Rule engine**: evaluates context and selects channels.
- **Policy store**: versioned rules stored with the service repo.
- **Edge Messaging**: enforces routing decisions at the edge.
- **Observability stack**: captures metrics and logs; see [Runtime observability note](/docs/exploration-notes/runtime-observability).

## Controls
- Default deny: events without required metadata are rejected.
- Versioned rules: changes land via pull requests with ADR references.
- Test harness: simulate routing with sample events before deploy.

## Related
- Platform: [Edge Messaging configuration](/docs/platforms/edge-messaging/configuration)
- Trade-offs: [Context routing trade-offs](/docs/systems-patterns/context-routing/trade-offs)
- Guide: [Publish a new platform guide](/docs/how-to-guides/publish-a-new-platform-guide)
