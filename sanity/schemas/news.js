export default {
    name: 'news',
    title: 'News',
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
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{type: 'image'}],
          },
    ]
}
