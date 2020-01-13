import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';
import MdPerson from 'react-icons/lib/md/person';
import MdLayers from 'react-icons/lib/md/layers';
import MdInsertDriveFile from 'react-icons/lib/md/insert-drive-file';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';

const hiddenDocTypes = listItem =>
  ![
    'author',
    'blogPost',
    'act',
    'comic',
    'episode',
    'product',
    'siteSettings',
    'indexPage',
    'blogPage',
    'comicsPage',
    'storePage',
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Blog posts')
        .icon(MdInsertDriveFile)
        .schemaType('blogPost')
        .child(S.documentTypeList('blogPost').title('Blog posts')),

      S.listItem()
        .title('Site Pages')
        .icon(MdLayers)
        .child(
          S.list()
            .title('Site Pages')
            .showIcons(false)
            .items([
              S.listItem()
                .title('Home Page')
                .child(
                  S.editor()
                    .title('Edit Home Page')
                    .id('indexPage')
                    .schemaType('indexPage')
                    .documentId('indexPage')
                ),
              S.listItem()
                .title('Blog Page')
                .child(
                  S.editor()
                    .title('Edit Home Blog Page')
                    .id('blogPage')
                    .schemaType('blogPage')
                    .documentId('blogPage')
                ),
              S.listItem()
                .title('Comics Page')
                .child(
                  S.editor()
                    .title('Edit Comics Page')
                    .id('comicsPage')
                    .schemaType('comicsPage')
                    .documentId('comicsPage')
                ),
              S.listItem()
                .title('Store Page')
                .child(
                  S.editor()
                    .title('Edit Store Page')
                    .id('storePage')
                    .schemaType('storePage')
                    .documentId('storePage')
                ),
            ])
        ),

      S.listItem()
        .title('Crew')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Crew M8s')),

      S.listItem()
        .title('Comic')
        .icon(MdPerson)
        .schemaType('act')
        .child(S.documentTypeList('act').title('Acts')),

      // S.listItem()
      //   .title('Alerts')
      //   .icon(MdPerson)
      //   .child(S.documentTypeList('alerts').title('Alerts')),

      S.listItem()
        .title('Store')
        .icon(MdShoppingCart)
        .schemaType('product')
        .child(S.documentTypeList('product').title('Products')),

      ...S.documentTypeListItems().filter(hiddenDocTypes),

      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ]);
