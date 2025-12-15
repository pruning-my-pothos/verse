import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Sidebar groups reflect documentation types to lower cognitive load.
const sidebars: SidebarsConfig = {
  docs: [
    'start-here/index',
    {
      type: 'category',
      label: 'Platforms and Interfaces',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Edge Messaging',
          items: [
            'platforms/edge-messaging/overview',
            'platforms/edge-messaging/installation',
            'platforms/edge-messaging/configuration',
            'platforms/edge-messaging/usage',
            'platforms/edge-messaging/api',
          ],
        },
        {
          type: 'category',
          label: 'Model Gateway',
          items: [
            'platforms/model-gateway/overview',
            'platforms/model-gateway/installation',
            'platforms/model-gateway/configuration',
            'platforms/model-gateway/usage',
            'platforms/model-gateway/api',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Systems and Design Patterns',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Context Routing',
          items: [
            'systems-patterns/context-routing/overview',
            'systems-patterns/context-routing/when-to-use',
            'systems-patterns/context-routing/architecture',
            'systems-patterns/context-routing/trade-offs',
          ],
        },
        {
          type: 'category',
          label: 'Resilient Workflows',
          items: [
            'systems-patterns/resilient-workflows/overview',
            'systems-patterns/resilient-workflows/when-to-use',
            'systems-patterns/resilient-workflows/architecture',
            'systems-patterns/resilient-workflows/trade-offs',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'How-To Guides',
      items: [
        'how-to-guides/publish-a-new-platform-guide',
        'how-to-guides/run-a-routing-readiness-review',
      ],
    },
    {
      type: 'category',
      label: 'Exploration Notes',
      items: [
        'exploration-notes/vector-evaluation',
        'exploration-notes/runtime-observability',
        'exploration-notes/prompt-drift',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      items: ['templates/adr', 'templates/runbook'],
    },
  ],
};

export default sidebars;
