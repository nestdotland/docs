const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Nest Documentation',
  tagline: 'Documentations for all Nest products',
  url: 'https://docs.nest.land',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nestdotland',
  projectName: 'docs',
  titleDelimiter: '-',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    algolia: {
      apiKey: '314ce2bc4b15cbdc0e3752e19d171daa',
      indexName: 'nest_land',
    },
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'Nest',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://nest.land',
          label: 'Nest',
          position: 'left',
        },
        {
          href: 'https://github.com/nestdotland',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://twitter.com/nestdotland',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'Sponsored by Vercel',
        src: '/img/sponsor.svg',
      },
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Nest Land. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/nestdotland/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
