import { defineCollection, z } from "astro:content";

const recipes = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    preptime: z.string(),
    author: z.string(),
    author_link: z.string(),
    ingredients: z.array(
      z.object({
        name: z.string(),
        quantity: z.string()
      })
    )
  })
});

export const collections = { recipes };