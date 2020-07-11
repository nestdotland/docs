module.exports = {

  title: 'Nest.land Docs',
  description: 'The nest.land docs',
  head: [

    ['link', { rel: 'icon', href: 'https://nest.land/favicon.png' }]

  ],
  themeConfig: {

    nav: [

      { text: 'Home', link: 'https://nest.land' }

    ],
    sidebar: [

      '/',
      {

        title: 'Eggs CLI',
        path: '/eggs',
        collapsable: false,
        children: [

          '/eggs/installation',
          '/eggs/linking-your-api-key',
          '/eggs/initializing-a-module',
          '/eggs/configuration',
          '/eggs/publishing-a-module',
          '/eggs/updating-all-of-your-dependencies',
          '/eggs/installing-a-script-as-an-executable',
          '/eggs/upgrade-eggs'

        ]

      },
      {

        title: 'Rust API',
        path: '/api',
        collapsable: false,
        children: [

          '/api/queries',
          '/api/mutations'

        ]

      },
      '/technical-questions'

    ],
    logo: '/nest_light.png',
    searchPlaceholder: 'Search in docs...',
    algolia: {

      apiKey: '314ce2bc4b15cbdc0e3752e19d171daa',
      indexName: 'nest_land'

    },
    repo: 'nestdotland/docs',
    repoLabel: 'Contribute!',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    docsDir: 'docs',
    lastUpdated: true,
    smoothScroll: true

  },
  destination: 'public'

}