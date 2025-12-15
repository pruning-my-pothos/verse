---
title: Resilient Workflows Trade-offs
description: Benefits and costs of adding resilience patterns to model-driven flows.
tags: [pattern, trade-offs, workflows]
last_reviewed: 2025-02-15
status: stable
---

## Benefits
- Reduces outage impact by isolating failures.
- Improves safety by gating actions behind policies and compensations.
- Enables gradual rollouts with canary routes and budgets.

## Costs
- Increased complexity in orchestration code.
- Additional latency from retries and fallbacks.
- More configuration to manage prompts, tools, and budgets.

## Mitigations
- Use templates from the [ADR template](/docs/templates/adr) for policy and architecture changes.
- Start with a small set of resilience controls, then expand.
- Reuse Model Gateway policies to avoid duplication.

## Related
- Pattern: [Resilient workflows architecture](/docs/systems-patterns/resilient-workflows/architecture)
- Platform: [Model Gateway API](/docs/platforms/model-gateway/api)
- Exploration: [Runtime observability note](/docs/exploration-notes/runtime-observability)
