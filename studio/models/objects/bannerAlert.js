export default {
  name: 'bannerAlert',
  type: 'document',
  title: 'Banner Alert',
  fields: [
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      // TODO type: ''
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image',
    },
  },
};
