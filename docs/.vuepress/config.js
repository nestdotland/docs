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
      '/installation',
      '/linking-your-api-key',
      '/initializing-a-module',
      '/configuration',
      '/publishing-a-module',
      '/updating-all-of-your-dependencies',
      '/installing-a-script-as-an-executable',
      '/upgrade-eggs',
      '/technical-questions'

    ],
    logo: '/nest_light.png',
    searchPlaceholder: 'Search in docs...'

  },
  destination: 'public'

}