module.exports = {
  title: 'Nest Documentation',
  tagline: 'Nest.land product',
  url: 'https://docs.nest.land',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nestdotland', // Usually your GitHub org/user name.
  projectName: 'nest', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    algolia: {
      apiKey: '314ce2bc4b15cbdc0e3752e19d171daa',
      indexName: 'nest_land',
    },
    navbar: {
      title: 'Docs',
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
          href: 'https://github.com/nestdotland',
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
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
