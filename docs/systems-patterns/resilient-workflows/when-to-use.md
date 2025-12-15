---
title: When to Use Resilient Workflows
description: Situations where resilience patterns reduce risk in automated flows.
tags: [pattern, decision, workflows]
last_reviewed: 2025-02-15
status: stable
---

Use resilient workflows when:
- Model variability can affect correctness or safety.
- External dependencies fail intermittently.
- You need compensating actions for downstream calls.

Avoid or simplify when:
- Manual approval already gates critical actions.
- Latency budgets cannot tolerate retries or fallbacks.

Related:
- Architecture: [Resilient workflows architecture](/docs/systems-patterns/resilient-workflows/architecture)
- Platform: [Model Gateway configuration](/docs/platforms/model-gateway/configuration)
- Exploration: [Vector evaluation](/docs/exploration-notes/vector-evaluation)
