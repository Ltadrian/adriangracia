import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const collectionSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()),
  author: z.string(),
  description: z.string(),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
    })
    .optional(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});

const contentCollection = (directory: string) =>
  defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: `./src/content/${directory}` }),
    schema: collectionSchema,
  });

export const collections = {
  music: contentCollection("music"),
  photography: contentCollection("photography"),
  film_photography: contentCollection("film_photography"),
  short_form: contentCollection("short_form"),
  long_form: contentCollection("long_form"),
  zeitweilig: contentCollection("zeitweilig"),
  authors: contentCollection("authors"),
};
