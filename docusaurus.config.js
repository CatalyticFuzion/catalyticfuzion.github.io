// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CatalyticFuzion',
  tagline: 'Gherkin-driven BDD in C# with natural integration',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://catalyticfuzion.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CatalyticFuzion', // Usually your GitHub org/user name.
  projectName: 'catalyticfuzion.github.io', // Usually your repo name.

  onBrokenLinks: 'ignore', // ⚠️ Ignore broken links completely (needed for build)
  onBrokenMarkdownLinks: 'ignore', // ⚠️ Ignore broken markdown links
  
  // Minimal i18n configuration
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Changed docs base path to root
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/catalyticfuzion/catalyticfuzion.github.io/tree/main/',
        },
        blog: false, // Completely disable blog functionality
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/octo.png',
      navbar: {
        title: 'CatalyticFuzion',
        logo: {
          alt: 'CatalyticFuzion Logo',
          src: 'img/octo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/', label: 'Get Started', position: 'left'},
          {
            href: 'https://github.com/catalyticfuzion/catalyticfuzion.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'Installation',
                to: '/category/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/catalyticfuzion/catalyticfuzion.github.io/discussions',
              },
              {
                label: 'Issues',
                href: 'https://github.com/catalyticfuzion/catalyticfuzion.github.io/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/catalyticfuzion/catalyticfuzion.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CatalyticFuzion. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'gherkin'],
      },
    }),
};

export default config;