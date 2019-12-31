import imageWithMeta from '../objects/imageWithMeta';

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'productImg',
      title: 'Product Image',
      type: 'imageWithMeta',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Do not include dollar symbol. Must match pattern: x.xx',
      validation: Rule => Rule.required().precision(2),
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
    },
  ],
};
