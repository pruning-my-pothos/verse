---
title: Model Gateway Platform Overview
description: What the Model Gateway is, when to use it, and how it standardizes access to models.
tags: [platform, models, overview]
last_reviewed: 2025-02-15
status: stable
---

The Model Gateway fronts multiple model providers behind a single contract. It handles routing, safety, and billing protections so teams can consume models without bespoke integrations.

## What this platform is
- Unified API for chat, completion, and embedding endpoints.
- Policy engine for safety, PII scrubbing, and allowed providers.
- Usage metering with budgets per service or project.

## When to use it
- You need to swap model vendors without code changes.
- You want centralized safety and spending controls.
- You are building patterns like [Resilient Workflows](/docs/systems-patterns/resilient-workflows/overview) that depend on predictable responses.

## Core concepts
- **Routes**: map model families to providers and configurations.
- **Policies**: safety filters, allowed tools, and data handling rules.
- **Budgets**: soft and hard limits for cost control.
- **Observability**: traces and metrics emitted per call.

## Related material
- Setup: [Installation and setup](/docs/platforms/model-gateway/installation)
- Config: [Platform configuration](/docs/platforms/model-gateway/configuration)
- Usage: [Using the gateway](/docs/platforms/model-gateway/usage)
- API: [HTTP API reference](/docs/platforms/model-gateway/api)
- Pattern: [Resilient Workflows overview](/docs/systems-patterns/resilient-workflows/overview)
- Exploration: [Vector evaluation](/docs/exploration-notes/vector-evaluation)
- Narrative context: see the prose site at `https://pruning-my-pothos.github.io/prose` for rollouts.
