---
title: Model Gateway Usage
description: How to call the gateway, manage tools, and handle responses.
tags: [platform, usage, models]
last_reviewed: 2025-02-15
status: draft
---

Use these steps to work with the gateway after installation.

## Make a request
```bash
curl -X POST https://gateway.example.com/v1/chat \
  -H "Authorization: Bearer $GATEWAY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"route":"chat-primary","messages":[{"role":"user","content":"Summarize routing policy."}]}'
```

## Manage tools
- Register tools with schemas; tools are allowed per policy.
- Align tool naming with the [Context routing architecture](/docs/systems-patterns/context-routing/architecture) when emitting events.

## Handle responses
- Expect `trace_id` in responses; use it to join logs described in the [Runtime observability note](/docs/exploration-notes/runtime-observability).
- When fallbacks occur, the `route_used` field shows which provider responded.

## Common pitfalls
- Missing policies lead to rejected calls; confirm configuration.
- Overly broad tools increase risk; scope tools to routes.
- Forgetting budgets can cause noisy alerts; configure budgets early.

## Next steps
- Review the [API reference](/docs/platforms/model-gateway/api) for endpoint details.
- If responses need more grounding, see [Vector evaluation](/docs/exploration-notes/vector-evaluation).
