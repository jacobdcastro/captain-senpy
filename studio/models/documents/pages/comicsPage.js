// import { format } from 'date-fns';

export default {
  name: 'comicsPage',
  type: 'document',
  title: 'Comics Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      description: 'Page title that appears in search results and in the browser tab.',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
      description: 'Will default to image in Site Settings if no image image is placed here.',
    },
    {
      name: 'description',
      type: 'excerptPortableText',
      title: 'Page Description',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body Content',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     publishedAt: 'publishedAt',
  //     slug: 'slug',
  //     media: 'mainImage',
  //   },
  //   prepare({ title = 'No title', publishedAt, slug = {}, media }) {
  //     const dateSegment = format(publishedAt, 'YYYY/MM');
  //     const path = `/${dateSegment}/${slug.current}/`;
  //     return {
  //       title,
  //       media,
  //       subtitle: publishedAt ? path : 'Missing publishing date',
  //     };
  //   },
  // },
};
