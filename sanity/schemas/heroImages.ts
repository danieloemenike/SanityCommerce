import { defineType,defineField } from 'sanity';

export default defineType({
    name: 'heroImage',
    type: 'document',
    title: 'Hero Images',
    fields: [
        defineField({
            name: 'primaryImage',
            type: 'image',
            title: 'Hero Image(Primary)',
            description: 'This image will be displayed on the home page'
        }),
        defineField({
            name: 'secondaryImage',
            type: 'image',
            title: 'Hero Image(Secondary)',
            description: 'This image will be displayed on the home page'
        }),
    ]
})