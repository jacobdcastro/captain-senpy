import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import blogPost from './documents/blogPost'
import comic from './documents/comic'
import comicAct from './documents/comicAct'
import comicEpisode from './documents/comicEpisode'
import product from './documents/product'
import sitePage from './documents/sitePage'
import siteSettings from './documents/siteSettings'

// object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'

export default createSchema({
  name: 'captian-senpy',
  types: schemaTypes.concat([
    author,
    blogPost,
    comic,
    comicAct,
    comicEpisode,
    product,
    sitePage,
    siteSettings,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText
  ])
})
