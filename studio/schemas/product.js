export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'product',
      title: 'Product Name',
      type: 'string',
    },
    {
      title: 'description',
      name: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'price',
      name: 'Price',
      type: 'string',
    },
  ],
};
