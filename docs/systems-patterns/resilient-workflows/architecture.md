---
title: Resilient Workflows Architecture
description: Components and flows for building reliable automated workflows with models.
tags: [pattern, architecture, workflows]
last_reviewed: 2025-02-15
status: stable
---

## Flow
1. Orchestrator receives a task and defines a small plan.
2. Calls the [Model Gateway](/docs/platforms/model-gateway/overview) with guarded prompts and tool allowlists.
3. Applies retries with jitter and circuit breakers per dependency.
4. Runs compensating actions if a step fails after side effects.
5. Emits traces and metrics for each attempt.

## Components
- **Orchestrator**: coordinates steps and policies.
- **Policy store**: versioned prompts, tools, and budgets.
- **Model Gateway**: enforces routing, safety, and budgets.
- **Observability**: traces and metrics; see [Runtime observability note](/docs/exploration-notes/runtime-observability).

## Controls
- Circuit breakers per dependency.
- Idempotency keys for side-effecting calls.
- Canary routes for new prompts or tools.

## Example policy slice
```yaml
workflow: onboarding-summary
routes:
  - name: chat-primary
    fallback: chat-secondary
prompts:
  version: 3
  lint: strict
tools:
  - name: fetch-user-profile
    allow: chat-primary
    timeout_ms: 800
budgets:
  max_tokens: 2000
  max_cost_usd: 0.05
```

## Validation steps
- Run replay tests with recorded inputs; assert deterministic fallbacks.
- Simulate provider failure to confirm compensations execute.
- Verify trace IDs appear in both Model Gateway logs and orchestrator spans.

## Related
- Trade-offs: [Resilient workflows trade-offs](/docs/systems-patterns/resilient-workflows/trade-offs)
- How-to: [Publish a new platform guide](/docs/how-to-guides/publish-a-new-platform-guide)
- Platform: [Model Gateway usage](/docs/platforms/model-gateway/usage)
