// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CatalyticFuzion',
  tagline: 'Gherkin-drevet BDD i C# med naturlig integration',
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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'da',
    locales: ['da', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Ændrer docs basis-stien til rod
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/catalyticfuzion/catalyticfuzion.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/catalyticfuzion/catalyticfuzion.github.io/tree/main/',
        },
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
            label: 'Dokumentation',
          },
          {to: '/', label: 'Kom i gang', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/catalyticfuzion/catalyticfuzion.github.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentation',
            items: [
              {
                label: 'Introduktion',
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
            title: 'Mere',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/catalyticfuzion/catalyticfuzion.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CatalyticFuzion. Bygget med Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'gherkin'],
      },
    }),
};

export default config;