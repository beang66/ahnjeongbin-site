import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://ahnjeongbin.com', integrations: [sitemap()], output: 'static' });
