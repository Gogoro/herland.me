import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'metaImage',
      title: 'Meta Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', name: 'wideImage', title: 'Wide Image', options: {hotspot: true}},
        {type: 'image', name: 'smallImage', title: 'Small Image', options: {hotspot: true}},
        {type: 'image', name: 'microImage', title: 'Micro Image', options: {hotspot: true}},
      ]
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
