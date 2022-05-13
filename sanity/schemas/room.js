export default {
    name: 'room',
    title: 'Room',
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
        type: 'text',
      },
      {
        name: 'surface',
        title: 'Surface',
        type: 'number',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}],
      },
       {
        name: 'image',
        title: 'Image',
        type: 'image',
      }
    ],
  }
  