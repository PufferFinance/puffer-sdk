import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Puffer SDK Docs',
  tagline: 'SDK for interacting with the puffer smart contracts',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pufferfinance', // Usually your GitHub org/user name.
  projectName: 'puffer-sdk', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    format: 'detect',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/pufferfinance/puffer-sdk/tree/main/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Puffer SDK Docs',
      logo: {
        alt: 'Puffer Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/PufferFinance/puffer-sdk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
            {
              label: 'Guides',
              to: '/guides',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/pufferfi',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/puffer_finance',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/PufferFinance',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Puffer Finance`,
    },
    prism: {
      additionalLanguages: ['bash', 'javascript', 'typescript'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    '@easyops-cn/docusaurus-search-local',
    [
      'docusaurus-plugin-typedoc',
      // https://typedoc-plugin-markdown.org/plugins/docusaurus/options
      // https://typedoc-plugin-markdown.org/docs/options
      {
        entryPoints: '../lib/api',
        exclude: '**/*+(test|spec|index).ts',
        entryPointStrategy: 'expand',
        tsconfig: '../tsconfig.json',
        readme: 'none',
        outputFileStrategy: 'modules',
        excludeExternals: true,
        sidebar: { autoConfiguration: false },
        textContentMappings: {
          'title.indexPage': 'API Reference',
          'title.memberPage': '{name}',
        },
        parametersFormat: 'table',
        enumMembersFormat: 'table',
        propertiesFormat: 'table',
      },
    ],
  ],
};

export default config;
