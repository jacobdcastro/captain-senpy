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
                  buildHookId: '5e0fdd954040ece79c167605',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-e5aart3c',
                  apiId: '939e4ee0-4ced-450b-8a2d-e948f3a62abd'
                },
                {
                  buildHookId: '5e0fdd958f2580942fcb1401',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-18yu2mg2',
                  apiId: '7a4a5402-3e1f-4ca6-821d-5ad212a46811'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jacobdcastro/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-18yu2mg2.netlify.com', category: 'apps' }
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
