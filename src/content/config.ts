import { z, defineCollection } from "astro:content"

const blogCollection = defineCollection ({
  schema: z.object ({
    author: z.string(),
    published: z.date(),
    updated: z.date().nullable(),
    title: z.string(),
    featured: z.boolean().default(false),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string().default("generic.jpg").optional(),
    description: z.string()
  })
})
