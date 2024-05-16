
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name:"progress",
      title:"Progress",
      type:"number",
      description: "Progress of skill between 0 and 100",
      validation: (Rule) => Rule.min(0).max(100)
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspots: true,
      },
    }),
  ],
})
