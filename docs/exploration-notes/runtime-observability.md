---
title: Runtime Observability Note
description: Draft plan for observing routing and messaging performance in production.
tags: [exploration, observability, messaging]
last_reviewed: 2025-02-15
status: draft
---

This note collects observations about measuring routing quality and platform health.

## What is being explored
- Metrics that reveal routing effectiveness for Edge Messaging.
- How to correlate routing rules with delivery outcomes.

## Why it matters
- Poor observability hides misrouted events and DLQ growth.

## Observations and questions
- Per-channel latency and DLQ counts are sufficient to start, but we need consumer-level delivery counts.
- We need correlation IDs in logs to trace routing rules; add this to the [Context routing architecture](/docs/systems-patterns/context-routing/architecture).
- Open question: Should we sample payload hashes for forensic reviews?

## Links
- Platform configuration: [Edge Messaging configuration](/docs/platforms/edge-messaging/configuration)
- Pattern trade-offs: [Context routing trade-offs](/docs/systems-patterns/context-routing/trade-offs)
- Prose site for incident reviews: `https://pruning-my-pothos.github.io/prose`

## Disclaimer
Exploratory content. Move durable practices into platform or pattern docs when proven.
