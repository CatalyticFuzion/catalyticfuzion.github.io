import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CatalyticFuzion',
  tagline: 'CatalyticFuzion modern BDD for AI LLM pair development',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://catalyticfuzion.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/' 
  // For organization sites or user sites with format [username].github.io, use '/'
  baseUrl: '/CatalyticFuzion/',
  
  // GitHub pages deployment config.
  organizationName: 'CatalyticFuzion', // GitHub organization name - case-sensitive!
  projectName: 'CatalyticFuzion', // Repository name
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CatalyticFuzion/CatalyticFuzion/tree/main/CatalyticFuzion',
                  },
                  blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CatalyticFuzion/CatalyticFuzion/tree/main/CatalyticFuzion',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'CatalyticFuzion',
      logo: {
        alt: 'CatalyticFuzion Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/CatalyticFuzion/CatalyticFuzion',
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
              label: 'Get Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/CatalyticFuzion/CatalyticFuzion',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CatalyticFuzion. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
