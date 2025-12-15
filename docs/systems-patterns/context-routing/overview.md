---
title: Context Routing Pattern Overview
description: Route messages based on context so downstream services receive only what they need.
tags: [pattern, routing, messaging]
last_reviewed: 2025-02-15
status: stable
---

This pattern keeps messaging systems efficient by routing events using contextual filters and metadata.

## Problem
- Consumers drown in irrelevant events when producers broadcast widely.
- Ad hoc filters are inconsistent across teams.

## Core idea
- Standardize routing rules based on event context: domain, entity, sensitivity, and consumer capability.
- Keep routing rules declarative and versioned.

## Links
- Architecture: [Context routing architecture](/docs/systems-patterns/context-routing/architecture)
- When to use: [When to use context routing](/docs/systems-patterns/context-routing/when-to-use)
- Trade-offs: [Context routing trade-offs](/docs/systems-patterns/context-routing/trade-offs)
- Platform alignment: [Edge Messaging overview](/docs/platforms/edge-messaging/overview)
- Guide: [Publish a new platform guide](/docs/how-to-guides/publish-a-new-platform-guide)
