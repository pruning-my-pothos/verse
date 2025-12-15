---
title: Edge Messaging Platform Overview
description: What the Edge Messaging platform is, when to use it, and how it fits into Verse systems.
tags: [platform, messaging, overview]
last_reviewed: 2025-02-15
status: stable
---

Edge Messaging delivers low-latency event fanout at the edge for internal services. Readers can find procedures in the platform subpages and related patterns in the [Context Routing pattern](/docs/systems-patterns/context-routing/overview).

## What this platform is
- Managed messaging fabric that runs at edge locations.
- Targets service-to-service notifications, webhooks, and background triggers.
- Provides a narrow API to reduce operational surface area.

## When to use it
- You need predictable fanout with single-digit millisecond delivery targets.
- You want a hosted option instead of running a queue per team.
- You plan to reuse governance patterns like [Context Routing](/docs/systems-patterns/context-routing/overview).

## Core concepts
- **Channels**: logical streams with retention and delivery policies.
- **Producers**: services publishing events via HTTPS or signed requests.
- **Consumers**: edge workers or services that subscribe with filters.
- **Policies**: declarative configs that set retention, retries, and dead-letter handling.

## Related material
- Setup: [Installation and setup](/docs/platforms/edge-messaging/installation)
- Config: [Platform configuration](/docs/platforms/edge-messaging/configuration)
- Usage: [Using the platform](/docs/platforms/edge-messaging/usage)
- API: [HTTP API reference](/docs/platforms/edge-messaging/api)
- Pattern: [Context Routing pattern](/docs/systems-patterns/context-routing/overview)
- Guide: [Publish a new platform guide](/docs/how-to-guides/publish-a-new-platform-guide)
- Narrative context: see the prose site at `https://pruning-my-pothos.github.io/prose` for release notes.
