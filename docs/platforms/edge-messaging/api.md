---
title: Edge Messaging API Reference
description: HTTP API surface for publishing, consuming, and managing channels.
tags: [platform, api, reference]
last_reviewed: 2025-02-15
status: draft
---

Use this reference alongside the [usage guide](/docs/platforms/edge-messaging/usage).

## Base URL
- `https://api.edge-messaging.example.com/v1`

## Authentication
- Bearer tokens for producers.
- mTLS optional for consumers in private networks.

## Endpoints
- `POST /channels/{channel}/publish`
  - Body: `event` (string), `payload` (object)
  - Errors: 401 (invalid token), 404 (channel missing), 422 (invalid body)
- `POST /channels/{channel}/consumers`
  - Body: `name`, `filter`, `callbackUrl`
  - Returns consumer ID and shared secret.
- `GET /channels/{channel}/metrics`
  - Returns publish rate, delivery latency, DLQ count.

## Limits
- Payload size: 256 KB.
- Publish rate: soft cap 500 requests per second per producer token.

## Related
- Pattern: [Context routing architecture](/docs/systems-patterns/context-routing/architecture).
- Observability: [Runtime observability note](/docs/exploration-notes/runtime-observability).
- Narrative context: prose site `https://pruning-my-pothos.github.io/prose` for release announcements.
