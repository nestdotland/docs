module.exports = {

  title: 'Nest.land Docs',
  description: 'The nest.land docs',
  head: [

    ['link', { rel: 'icon', media: '(prefers-color-scheme:light)', href: 'https://nest.land/images/nest.land/favicon_light.svg' }],
    ['link', { rel: 'icon', media: '(prefers-color-scheme:dark)', href: 'https://nest.land/images/nest.land/favicon_dark.svg' }],
    ['script', {src: 'https://unpkg.com/favicon-switcher@1.2.2/dist/index.js', crossorigin: 'anonymous', type: 'application/javascript' }]

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
          '/eggs/configuration',
          '/eggs/publishing-a-module',
          '/eggs/updating-all-of-your-dependencies',
          '/eggs/installing-a-script-as-an-executable',
          '/eggs/dependency-tree',
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
    logo: 'https://nest.land/images/nest.land/logo_light.svg',
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
  markdown: {

    lineNumbers: true,

  },
  destination: 'public'

}