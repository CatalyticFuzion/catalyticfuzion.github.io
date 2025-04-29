import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', 'd57'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', 'e12'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', '98c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '3a3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', '057'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', '9d2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', 'fbd'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '210'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '95e'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'ba6'),
            routes: [
              {
                path: '/docs/examples/',
                component: ComponentCreator('/docs/examples/', 'f59'),
                exact: true
              },
              {
                path: '/docs/intro/',
                component: ComponentCreator('/docs/intro/', '688'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/structure/',
                component: ComponentCreator('/docs/structure/', '878'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '18c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
