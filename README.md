# ahnjeongbin.com

Personal portfolio and writing archive built with Astro and deployed on Cloudflare Pages.

## Run

```bash
npm install
npm run dev
npm run build
```

## Publish an article

Add `src/content/blog/your-slug.md` with title, description, category, published, draft, tags in frontmatter. Commit and push to main to trigger Cloudflare Pages deployment.

## Cloudflare Pages settings

Framework preset: Astro; build command: `npm run build`; output directory: `dist`; production branch: `main`.

## Editorial status

The sample introductory posts are marked as site launch drafts and should be fact-reviewed before publication. Update descriptions and contact information as needed.
