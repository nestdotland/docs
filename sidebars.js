module.exports = {
  main: [
    {
      type: 'doc',
      id: 'README',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Nest CLI',
      items: ['cli/README'],
    },
    {
      type: 'category',
      label: 'Eggs',
      items: [
        'eggs/README',
        'eggs/installation',
        'eggs/linking-your-api-key',
        'eggs/configuration',
        'eggs/publishing-a-module',
        'eggs/dependency-tree',
        'eggs/updating-all-of-your-dependencies',
        'eggs/installing-a-script-as-an-executable',
        'eggs/upgrade-eggs',
      ],
    },
    {
      type: 'category',
      label: 'GraphQL API',
      items: ['api/README'],
    },
  ],
};
