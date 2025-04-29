// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CatalyticFuzion',
  tagline: 'From Narrative to Architecture - Where Behavior Meets Structure and Software Grows from Stories',
  favicon: 'img/favicon.ico',

  // Set the URL for GitHub Pages site
  url: 'https://catalyticfuzion.github.io',
  // GitHub Pages automatically uses the root for organization/user sites
  baseUrl: '/',
  
  // Important for GitHub Pages deployment
  trailingSlash: true,

  // GitHub Pages deployment configuration
  organizationName: 'catalyticfuzion', 
  projectName: 'catalyticfuzion.github.io', 
  deploymentBranch: 'gh-pages', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even for tree-less websites, we want to have a proper root-based 404 page
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
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/catalyticfuzion/catalyticfuzion.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // editUrl: 'https://github.com/catalyticfuzion/catalyticfuzion.github.io/tree/main/',
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
      image: 'img/octo.png',
      navbar: {
        title: 'CatalyticFuzion',
        logo: {
          alt: 'CatalyticFuzion Logo',
          src: 'img/octo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manifesto',
          },
          {to: '/docs/structure', label: 'Structure', position: 'left'},
          {to: '/docs/examples', label: 'Examples', position: 'left'},
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
            title: 'Docs',
            items: [
              {
                label: 'Manifesto',
                to: '/docs/intro',
              },
              {
                label: 'Structure',
                to: '/docs/structure',
              },
              {
                label: 'Examples',
                to: '/docs/examples',
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
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CatalyticFuzion Project. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['csharp', 'gherkin'],
      },
    }),
};

module.exports = config;
