---
title: Resilient Workflows Overview
description: How to design workflows that survive partial failures and variability in model responses.
tags: [pattern, workflows, resilience]
last_reviewed: 2025-02-15
status: stable
---

Resilient Workflows keep automation running even when model calls or services fail intermittently. They complement platform controls like the [Model Gateway overview](/docs/platforms/model-gateway/overview).

## Problem
- Model and service calls can degrade without notice.
- Downstream actions may be irreversible if not guarded.

## Core idea
- Compose workflows with retries, compensations, and health-aware routing.
- Keep prompts, tools, and fallbacks versioned and observable.

## Links
- When to use: [When to use resilient workflows](/docs/systems-patterns/resilient-workflows/when-to-use)
- Architecture: [Resilient workflows architecture](/docs/systems-patterns/resilient-workflows/architecture)
- Trade-offs: [Resilient workflows trade-offs](/docs/systems-patterns/resilient-workflows/trade-offs)
- Platform alignment: [Model Gateway usage](/docs/platforms/model-gateway/usage)
- Exploration: [Runtime observability note](/docs/exploration-notes/runtime-observability)
