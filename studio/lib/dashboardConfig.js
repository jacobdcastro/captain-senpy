export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' },
    },
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
                  buildHookId: '5dfdbc3123a010eada502c14',
                  title: 'Studio',
                  name: 'captain-senpy-studio',
                  apiId: 'ccd3231b-fe89-43ed-9fc2-c5d2ed643879',
                },
                {
                  buildHookId: '5dfdbc3131224464ae0b4f29',
                  title: 'Website',
                  name: 'captain-senpy-www',
                  apiId: '98620c91-a9c2-462c-b1b6-ef0b3819a712',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'Website',
            value: 'https://captain-senpy-www.netlify.com/',
            category: 'apps',
          },
          {
            title: 'Studio Site',
            value: 'https://captain-senpy-studio.netlify.com/',
            category: 'apps',
          },
          {
            title: 'Full Codebase',
            value: 'https://github.com/jacobdcastro/captain-senpy',
            category: 'code',
          },
          {
            title: 'Website',
            value:
              'https://github.com/jacobdcastro/captain-senpy/tree/master/DefaultDialog_footerWithShadow_-nDKw',
            category: 'code',
          },
          {
            title: 'Studio',
            value: 'https://github.com/jacobdcastro/captain-senpy/tree/master/studio',
            category: 'code',
          },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
  ],
};
