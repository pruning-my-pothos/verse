---
title: Edge Messaging Usage
description: How to publish and consume events with Edge Messaging.
tags: [platform, usage, messaging]
last_reviewed: 2025-02-15
status: draft
---

Follow these steps to work with the platform. Confirm installation first.

## Publish events
```bash
curl -X POST https://edge.example.com/channels/user-events/publish \
  -H "Authorization: Bearer $PRODUCER_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"event":"user.created","payload":{"id":"123"}}'
```

## Subscribe to events
- Register a consumer: `edgectl consumer create --channel user-events --filter "event:user.*"`.
- Deploy an edge worker that pulls events and logs acknowledgements.

## Common pitfalls
- Missing filters lead to noisy consumers. Align filters to patterns in the [Context routing pattern](/docs/systems-patterns/context-routing/overview).
- Expired producer tokens often cause 401s; rotate keys on schedule.
- Channels without DLQs risk silent loss; ensure configuration follows [Platform configuration](/docs/platforms/edge-messaging/configuration).

## Next steps
- Review the [API reference](/docs/platforms/edge-messaging/api) to implement typed clients.
- If usage uncovers gaps, capture them in an exploration note like [Vector evaluation](/docs/exploration-notes/vector-evaluation).
