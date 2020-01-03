import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content Types')
    .items([
      S.listItem()
        .title('Website Settings')
        .child(
          S.editor()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings'].includes(listItem.getId())),
    ]);
