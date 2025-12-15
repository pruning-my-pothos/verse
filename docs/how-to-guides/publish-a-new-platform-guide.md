---
title: Publish a New Platform Guide
description: Step-by-step instructions to document a new platform in Verse.
tags: [how-to, publishing, platform]
last_reviewed: 2025-02-15
status: stable
---

## Goal
Document a platform so readers understand what it is, when to use it, and how to operate it.

## Prerequisites
- Platform overview and API details ready for review.
- Access to the repository and permission to update sidebars.
- `npm install` already run locally.

## Steps
1. **Create the folder**
   - Add `docs/platforms/<name>/` with `overview`, `installation`, `configuration`, `usage`, and `api` pages using the structures shown in [Edge Messaging overview](/docs/platforms/edge-messaging/overview).
2. **Fill the pages**
   - Follow the platform standards: what it is, when to use, setup, core concepts, usage, API, pitfalls.
   - Link to relevant patterns like [Context routing](/docs/systems-patterns/context-routing/overview).
3. **Wire the sidebar**
   - Update `sidebars.ts` to add the new platform under Platforms and Interfaces.
4. **Cross-link**
   - Link from the platform docs to related guides and patterns.
   - Add a short note to the prose site (`https://pruning-my-pothos.github.io/prose`) if narrative context is needed.
5. **Validate**
   - Run `npm run build` to ensure links and search indexing pass.
   - Mark pages as `draft` or `stable` and set `last_reviewed`.

## Expected outcome
- A discoverable platform section with consistent page types.
- Navigation reflects the new platform without surprising readers.
- Links connect to patterns, guides, and exploration notes.

## Next steps
- Add runbooks using the [Runbook template](/docs/templates/runbook).
- Capture decisions in the [ADR template](/docs/templates/adr).
