import {defineType, defineField} from 'sanity'

export default defineType({
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title:'Name of Product'
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [{type: 'image'}]
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Product Description',
            description: 'Give a unique and compelling description to your product'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Unique Product Slug',
            options: {
                source: 'name'
            }
        }),
        defineField({
            name: 'price',
            type: 'number',
            title: 'Product Price'
        }),
        defineField({
            name: 'category',
            type: 'reference',
            title: 'Category Name',
            to: [
                {
                    type: 'category'
                }
            ],
            description: 'What category does your product belong to?'
        })
    ]
})