/**
 * Oprettelse af sidebars.
 * https://docusaurus.io/docs/sidebar-items
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduktion',
      items: ['intro'],
    },
  ],
};

module.exports = sidebars;
