import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// custom schemas
import blogPost from './blogPost';

export default createSchema({
  name: 'captain-senpy-schema',
  types: schemaTypes.concat([blogPost]),
});
