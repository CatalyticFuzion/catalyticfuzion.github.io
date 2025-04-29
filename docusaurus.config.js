// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mit Docusaurus Site',
  tagline: 'En simpel Docusaurus site',
  favicon: 'img/favicon.ico',

  // Indstil URL'en til dit GitHub Pages site
  // Erstat 'organization_or_username' med dit GitHub brugernavn eller organisationsnavn
  url: 'https://organization_or_username.github.io',
  // GitHub Pages deler projektnavnet som base URL
  // erstat 'repository-name' med dit repository navn
  baseUrl: '/repository-name/',
  
  // Vigtigt for GitHub Pages deployment
  trailingSlash: true,

  // GitHub Pages deployment konfiguration
  organizationName: 'organization_or_username', // Normalt dit GitHub brugernavn
  projectName: 'repository-name', // Normalt dit repository navn
  deploymentBranch: 'gh-pages', // Navnet på grenen der bruges til deployment

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Selv for træløse websites, vi ønsker at have en '/'-placeret 404 side
  i18n: {
    defaultLocale: 'da',
    locales: ['da'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Fjern denne kommentar for at tilføje redigeringslink
          // editUrl: 'https://github.com/organization_or_username/repository-name/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Fjern denne kommentar for at tilføje redigeringslink
          // editUrl: 'https://github.com/organization_or_username/repository-name/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Mit Site',
        logo: {
          alt: 'Mit Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Dokumentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/organization_or_username/repository-name',
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
                label: 'Kom i gang',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Fællesskab',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
                href: 'https://github.com/organization_or_username/repository-name',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mit Projekt. Bygget med Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
