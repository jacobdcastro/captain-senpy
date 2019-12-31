export default {
  name: 'siteSettings',
  title: 'Website Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Title of Website',
      type: 'string',
      description: 'This will appear in search results and in browser tabs.',
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description:
        'This is the paragraph underneath search results that describes what your website is about.',
    },
    {
      name: 'siteImage',
      title: 'Site Image',
      type: 'imageWithMeta',
      description:
        'This is the image that will appear when your link is shared on Twitter, text messages, etc.',
    },
  ],
};
