import { defineField, defineType } from 'sanity';

export const portfolioSchema = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'contents',
      type: 'array',
      of: [
        defineField({
          name: 'contents',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'role',
              type: 'string',
            }),
            defineField({
              name: 'startDate',
              type: 'date',
            }),
            defineField({
              name: 'endDate',
              type: 'date',
            }),
            defineField({
              name: 'description',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
});
