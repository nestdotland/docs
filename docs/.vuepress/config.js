module.exports = {

  title: 'Nest.land Docs',
  description: 'The nest.land docs',
  head: [

    ['link', { rel: 'icon', href: 'https://nest.land/favicon.png' }]

  ],
  themeConfig: {

    nav: [

      { text: 'Back to the main site', link: 'https://nest.land' }

    ],
    sidebar: [

      '/',
      '/installation'

    ],
    logo: '/nest_light.png',
    searchPlaceholder: 'Search in docs...'

  },
  destination: 'public'

}