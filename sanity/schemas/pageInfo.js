import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspots: true,
      },
    }),
    defineField({
      name: 'backgroundInfo',
      title: 'BackgroundInfo',
      type: 'string',
    }),
    defineType({
      name: 'profilePic',
      title: 'Profile Pic',
      type: 'image',
      options: {
        hotspots: true,
      },
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone number',
      type: 'string',
    }),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    }),
  ],
})
