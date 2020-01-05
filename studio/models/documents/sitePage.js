export default {
  name: 'sitePage',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Title of Page',
      type: 'string',
      description: 'This will appear in search results and in browser tabs.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      description:
        "This is the paragraph underneath search results that describes what this web page is about. If left empty, this page will use the default description set in 'Site Settings'.",
    },
    {
      name: 'pageImage',
      title: 'Page Image',
      type: 'mainImage',
      description:
        "This is the image that will appear when this page link is shared on Twitter, text messages, etc. If left empty, this page will use the default description set in 'Site Settings'",
    },
    {
      name: 'keywords',
      title: 'Key Words',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
};
