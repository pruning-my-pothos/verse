---
title: Model Gateway Configuration
description: Configuring routes, policies, and budgets for the Model Gateway.
tags: [platform, configuration, models]
last_reviewed: 2025-02-15
status: draft
---

Configuration is declarative to keep changes reviewable and repeatable.

## Routes
- Define routes per model family (chat, completion, embedding).
- Set provider priority and fallback behavior.
- Include model-specific parameters such as max tokens and temperature.

## Policies
- Safety filters: PII scrubbing, allowed tools, blocked categories.
- Logging: redact sensitive fields before persistence.
- Tool access: align with the [Context routing pattern](/docs/systems-patterns/context-routing/overview) if events trigger downstream actions.

## Budgets
- Set soft and hard limits per service.
- Emit alerts to observability endpoints noted in the [Runtime observability note](/docs/exploration-notes/runtime-observability).

## Promotion workflow
- Store configs in version control; changes land via pull requests.
- Include an ADR reference from the [ADR template](/docs/templates/adr) for significant policy shifts.
- Announce changes on the prose site at `https://pruning-my-pothos.github.io/prose`.
