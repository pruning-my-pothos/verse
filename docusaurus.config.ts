import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Verse',
  tagline: 'Documentation system for platforms, patterns, guides, and notes.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://pruning-my-pothos.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/verse/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pruning-my-pothos',
  projectName: 'verse',
  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/pruning-my-pothos/verse/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        explicitSearchResultPath: true,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: 'docs',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Verse',
      logo: {
        alt: 'Verse logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'start-here/index',
          position: 'left',
          label: 'Start Here',
        },
        {
          type: 'doc',
          docId: 'platforms/edge-messaging/overview',
          position: 'left',
          label: 'Platforms',
        },
        {
          type: 'doc',
          docId: 'systems-patterns/context-routing/overview',
          position: 'left',
          label: 'Patterns',
        },
        {
          type: 'doc',
          docId: 'how-to-guides/publish-a-new-platform-guide',
          position: 'left',
          label: 'How-To Guides',
        },
        {
          type: 'doc',
          docId: 'exploration-notes/vector-evaluation',
          position: 'left',
          label: 'Exploration',
        },
        {
          type: 'doc',
          docId: 'templates/adr',
          position: 'left',
          label: 'Templates',
        },
        {
          href: 'https://github.com/pruning-my-pothos/verse',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Start Here',
              to: '/docs/start-here/',
            },
            {
              label: 'Patterns',
              to: '/docs/systems-patterns/context-routing/overview',
            },
            {
              label: 'Verse Site',
              href: 'https://pruning-my-pothos.github.io/verse',
            },
          ],
        },
      ],
      copyright: `Documentation generated with Docusaurus. ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
