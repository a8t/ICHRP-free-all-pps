export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2c7e41cbdd1e01645f69a8',
                  title: 'Sanity Studio',
                  name: 'ichrp-free-all-pps-studio',
                  apiId: 'ebe18dd2-0012-417f-892c-13c4b17feab8'
                },
                {
                  buildHookId: '5f2c7e41d3629e00f60d42cc',
                  title: 'Blog Website',
                  name: 'ichrp-free-all-pps',
                  apiId: 'de7ecf1f-d9aa-43f9-ab7f-c9a593d4ab38'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/a8t/ICHRP-free-all-pps',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ichrp-free-all-pps.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
