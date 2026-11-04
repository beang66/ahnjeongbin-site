import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const blog = defineCollection({ loader: glob({ base: './src/content/blog', pattern: '**/*.md' }), schema: z.object({ title:z.string(), description:z.string(), category:z.enum(['AI','미술','공간','에세이','웹앱 프로덕션','콘텐츠']), published:z.coerce.date(), draft:z.boolean().default(false), tags:z.array(z.string()).default([]) }) });
export const collections={blog};
