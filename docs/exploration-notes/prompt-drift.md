---
title: Prompt Drift Note
description: Exploring how prompts drift over time and how to keep workflows stable.
tags: [exploration, prompts, drift]
last_reviewed: 2025-02-15
status: draft
---

This note explores how prompt wording changes impact responses and routing.

## What is being explored
- Sensitivity of prompts to small wording changes.
- Interaction between prompt drift and routing rules in [Context routing](/docs/systems-patterns/context-routing/overview).

## Why it matters
- Drifting prompts can break assumptions in [Resilient Workflows](/docs/systems-patterns/resilient-workflows/overview) and platform policies.

## Observations and questions
- Small tone shifts changed tool selection rates in the [Model Gateway](/docs/platforms/model-gateway/usage).
- Versioning prompts with checksums helped track changes.
- Open question: Should we enforce prompt linting in CI?

## Links
- Platform: [Model Gateway configuration](/docs/platforms/model-gateway/configuration)
- Pattern: [Resilient workflows architecture](/docs/systems-patterns/resilient-workflows/architecture)
- Prose site for experiments: `https://pruning-my-pothos.github.io/prose`

## Disclaimer
Exploratory content. Promote stable practices into platform or pattern docs once validated.
