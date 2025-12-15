---
title: Edge Messaging Installation
description: Installing and provisioning Edge Messaging across environments.
tags: [platform, installation, setup]
last_reviewed: 2025-02-15
status: draft
---

This page explains how to provision the platform. For background, read the [platform overview](/docs/platforms/edge-messaging/overview).

## Prerequisites
- Access to the platform management project.
- Node.js 20 or container runtime for CLI tasks.
- Network access to edge control plane endpoints.

## Steps
1. **Bootstrap the control plane**
   - Create a project with `edgectl project create --name messaging-core`.
   - Verify access with `edgectl auth status`.
2. **Create core channels**
   - `edgectl channel create --name user-events --retention 7d`.
   - `edgectl channel create --name audit-log --retention 30d --dlq audit-dlq`.
3. **Enable policies**
   - Apply defaults from `policies/default.yaml` and commit changes.
4. **Smoke test**
   - Publish a test event and confirm it is received by a sample consumer.

## Expected outcome
- Control plane reachable.
- Baseline channels created and documented.
- CI secrets ready for usage steps.

## Related
- Configure policies: [Platform configuration](/docs/platforms/edge-messaging/configuration).
- Apply routing patterns: [Context routing pattern](/docs/systems-patterns/context-routing/overview).
- Capture runbooks using the [Runbook template](/docs/templates/runbook).
