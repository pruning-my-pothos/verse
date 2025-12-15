---
title: Model Gateway API Reference
description: HTTP endpoints for chat, completion, embeddings, and admin operations.
tags: [platform, api, reference]
last_reviewed: 2025-02-15
status: draft
---

Use this reference with the [usage guide](/docs/platforms/model-gateway/usage).

## Base URL
- `https://gateway.example.com/v1`

## Authentication
- Bearer tokens per service.
- Optional mTLS for private networks.

## Endpoints
- `POST /chat`
  - Body: `route`, `messages`, optional `tools`
  - Returns: model response, `trace_id`, `route_used`, `usage`
- `POST /completions`
  - Body: `route`, `prompt`, `max_tokens`, `temperature`
- `POST /embeddings`
  - Body: `route`, `input`
- `GET /routes`
  - Returns available routes and policies.
- `GET /health`
  - Returns control-plane health and provider connectivity.
- `POST /tools`
  - Body: tool schema, allowed routes, and version metadata.

## Limits
- Request size: 512 KB.
- Rate limits: default 100 requests per second per token.
- Tool schema size: 32 KB per tool definition.

## Error codes
- `400`: malformed request or missing parameters.
- `401`: invalid or expired token.
- `403`: route blocked by policy.
- `429`: rate limited; retry with backoff.
- `503`: provider unavailable; check `route_used` and traces.

## Related
- Pattern: [Resilient Workflows trade-offs](/docs/systems-patterns/resilient-workflows/trade-offs)
- Platform: [Configuration](/docs/platforms/model-gateway/configuration)
- Observability: [Runtime observability note](/docs/exploration-notes/runtime-observability)
- Narrative context: prose site `https://pruning-my-pothos.github.io/prose`
