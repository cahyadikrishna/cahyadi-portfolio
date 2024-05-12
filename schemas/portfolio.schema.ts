import { defineField, defineType } from 'sanity';

export const portfolioSchema = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
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
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'role',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'startDate',
              type: 'date',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'endDate',
              type: 'date',
            }),
            defineField({
              name: 'description',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});
