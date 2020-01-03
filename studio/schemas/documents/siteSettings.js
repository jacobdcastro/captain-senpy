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
      validation: Rule => Rule.required(),
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description:
        'This is the paragraph underneath search results that describes what your website is about.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'logoSmall',
      title: 'Site Logo (Small)',
      type: 'imageWithMeta',
      description:
        ' A small, usually square version of your logo. Will be used in various locations across site when applicable.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'logoLarge',
      title: 'Site Logo (Large)',
      type: 'imageWithMeta',
      description:
        'Your main, large, full-detailed logo. Will be used in various locations across site when applicable.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'siteFavicon',
      title: 'Favicon',
      type: 'image',
      description: 'Small image in the browser tabs. Can be small logo',
      validation: Rule => Rule.required(),
    },
    {
      name: 'siteMetaImage',
      title: 'Site Meta Image',
      type: 'imageWithMeta',
      description:
        'This is the image that will appear when your link is shared on Twitter, text messages, etc.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'keywords',
      title: 'Key Words',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required(),
      options: {
        layout: 'tags',
      },
    },
  ],
};
