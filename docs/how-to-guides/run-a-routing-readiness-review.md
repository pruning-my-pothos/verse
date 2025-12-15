---
title: Run a Routing Readiness Review
description: Checklist to verify a platform or workflow is ready for routed messaging.
tags: [how-to, review, routing]
last_reviewed: 2025-02-15
status: stable
---

## Goal
Validate that a messaging workflow is ready for production with routing rules, observability, and safeguards in place.

## Prerequisites
- Platform docs reviewed: [Edge Messaging overview](/docs/platforms/edge-messaging/overview) and [Model Gateway overview](/docs/platforms/model-gateway/overview).
- Pattern understood: [Context routing pattern](/docs/systems-patterns/context-routing/overview).
- Access to configs and observability dashboards.

## Steps
1. **Review metadata completeness**
   - Ensure events carry required context fields defined in [Context routing architecture](/docs/systems-patterns/context-routing/architecture).
2. **Check routing rules**
   - Confirm rules are versioned and tested; validate sample events.
3. **Validate safety and budgets**
   - Confirm Model Gateway policies and budgets are in place for model calls.
4. **Exercise observability**
   - Trace a sample request end to end; verify metrics match expectations in the [Runtime observability note](/docs/exploration-notes/runtime-observability).
5. **Document decisions**
   - Capture outcomes in an ADR using the [ADR template](/docs/templates/adr).

## Expected outcome
- Routing rules validated with sample events.
- Safety and budgets confirmed for model interactions.
- Observability dashboards verified.
- Decisions recorded for traceability.

## Next steps
- Schedule periodic reviews with the same checklist.
- Add runbooks using the [Runbook template](/docs/templates/runbook) for known failure modes.
