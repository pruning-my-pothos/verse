---
title: Edge Messaging Configuration
description: Configuring channels, policies, and access for Edge Messaging.
tags: [platform, configuration, policies]
last_reviewed: 2025-02-15
status: draft
---

Configuration keeps the platform predictable. Align it with the [Context routing architecture](/docs/systems-patterns/context-routing/architecture) to avoid ad hoc behavior.

## Channel policies
- Retention: default 7 days unless auditing requires longer.
- Dead-letter: required for regulated channels; point to `audit-dlq`.
- Encryption: enabled by default at rest and in transit.

## Access control
- Producers authenticate with signed requests; rotate keys every 90 days.
- Consumers use service identities; assign least privilege per channel.

## Observability
- Emit per-channel metrics: publish rate, delivery latency, DLQ count.
- Forward logs to the observability stack referenced in the [Runtime observability note](/docs/exploration-notes/runtime-observability).

## Promotion workflow
- Stage changes in a branch and run `npm run build` to validate docs.
- Capture decisions in an ADR using the [ADR template](/docs/templates/adr).
- Announce changes through the prose site at `https://pruning-my-pothos.github.io/prose`.
