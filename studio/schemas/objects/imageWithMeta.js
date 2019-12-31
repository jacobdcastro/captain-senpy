export default {
  name: 'imageWithMeta',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'text',
      description:
        'Some of your visitors cannot see images, be blind, color-blind, or low-sighted; alternative text helps describe the image for people who need it! Be descriptive, yet concise.',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'imgTitle',
      title: 'Image Title',
      type: 'string',
      description: 'A non-descriptive title of the image.',
    },
  ],
};
