import { defineCollection, reference, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "content/blog",
    generateId: ({ entry }) => entry.replace(".md", "").replaceAll("/", "-"),
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    modDate: z.date().optional(),
    description: z.string(),
    author: z.string().default("Ulrich Feindt"),
    tags: z.array(z.string()),
    projects: z.array(reference("projects")).optional(),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

const projects = defineCollection({
  loader: file("content/projects.yml"),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    links: z.object({
      live: z.string().url().optional(),
      src: z.string().url(),
    }),
    featured: z.boolean(),
  }),
});

export const skills = defineCollection({
  loader: file("content/skills.yml"),
  schema: z.object({
    category: z.string(),
    items: z.array(z.string()),
  }),
});

export const socials = defineCollection({
  loader: file("content/socials.yml"),
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    link: z.string().url(),
  }),
});

export const collections = {
  blog,
  projects,
  skills,
  socials,
};
