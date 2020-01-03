export default {
  widgets: [
    {
      name: 'project-info',
    },
    {
      name: 'project-users',
    },
    {
      name: 'netlify',
      options: {
        title: 'Captain Senpy Deploys',
        sites: [
          {
            title: 'Studio',
            apiId: 'ccd3231b-fe89-43ed-9fc2-c5d2ed643879',
            buildHookId: 'https://api.netlify.com/build_hooks/5dfdbc3123a010eada502c14',
            name: 'captain-senpy-studio',
          },
          {
            title: 'Website',
            apiId: '98620c91-a9c2-462c-b1b6-ef0b3819a712',
            buildHookId: 'https://api.netlify.com/build_hooks/5dfdbc3131224464ae0b4f29',
            name: 'captain-senpy-www',
          },
        ],
      },
    },
  ],
};
