import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url'
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'author'
        }],
      }],
    }),
    defineField({
      name: 'bookCategory',
      title: 'Book Category',
      type: 'reference',
      to: {type: 'bookCategory'},
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'order',
    }
  },
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
})
