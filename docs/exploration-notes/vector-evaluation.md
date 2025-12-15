---
title: Vector Evaluation Note
description: Exploring retrieval quality and routing accuracy for messaging content.
tags: [exploration, retrieval, routing]
last_reviewed: 2025-02-15
status: draft
---

This is exploratory work to test retrieval and routing accuracy. Do not treat it as guidance until stabilized.

## What is being explored
- How embedding choices affect routing suggestions for Edge Messaging.
- How context fields improve retrieval of relevant consumers.

## Why it matters
- Better retrieval reduces misrouted events and improves the [Context routing pattern](/docs/systems-patterns/context-routing/overview).

## Observations and open questions
- Smaller chunks improved citation accuracy but increased index size.
- Context tags like `domain` and `sensitivity` raised precision in routing tests.
- Open question: Should we maintain a secondary sparse index for fallback lookups?

## Links
- Platform usage: [Edge Messaging usage](/docs/platforms/edge-messaging/usage)
- Pattern architecture: [Context routing architecture](/docs/systems-patterns/context-routing/architecture)
- Narrative or demo context: check `https://pruning-my-pothos.github.io/prose` for experiment writeups.

## Disclaimer
Exploratory content. Promote findings into curated docs once verified.
