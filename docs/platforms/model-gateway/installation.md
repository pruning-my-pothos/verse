---
title: Model Gateway Installation
description: Installing and provisioning the Model Gateway with default routes and policies.
tags: [platform, installation, setup]
last_reviewed: 2025-02-15
status: draft
---

Follow these steps to deploy the gateway. Review the [platform overview](/docs/platforms/model-gateway/overview) first.

## Prerequisites
- Kubernetes cluster or container runtime for the control plane.
- Access to provider credentials and allowed regions.
- TLS certificates for inbound traffic.

## Steps
1. **Deploy control plane**
   - `helm repo add model-gateway https://example.com/charts`
   - `helm upgrade --install mgw model-gateway/mgw --values values.yaml`
2. **Seed routes and providers**
   - Apply `routes/default.yaml` and `providers/openai.yaml` to configure base models.
3. **Configure safety policies**
   - Enable PII scrubbing and tool allowlists via `policies/safety.yaml`.
4. **Smoke test**
   - Call the status endpoint and run a sample completion request.

## Expected outcome
- Gateway control plane running with default routes.
- Safety policies applied.
- Connectivity to at least one provider verified.

## Related
- Configure policies: [Platform configuration](/docs/platforms/model-gateway/configuration)
- Integration pattern: [Resilient Workflows architecture](/docs/systems-patterns/resilient-workflows/architecture)
- Document changes with an ADR using the [ADR template](/docs/templates/adr)
