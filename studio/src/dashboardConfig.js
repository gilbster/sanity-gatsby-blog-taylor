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
                  buildHookId: '5e498c6fa48184641e89abf2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-taylor-studio',
                  apiId: '5c3fa712-5131-4f0b-8b9b-6916bd20c8a3'
                },
                {
                  buildHookId: '5e498c6f1f8541683b61f2fd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-taylor',
                  apiId: '6d988c51-49c8-419f-b868-9bf61bf5561b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gilbster/sanity-gatsby-blog-taylor',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-taylor.netlify.com', category: 'apps' }
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
