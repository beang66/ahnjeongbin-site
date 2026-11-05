# AI Discovery & Accessibility Implementation

The site is built with Astro and Cloudflare Pages. Add public files to `public/` and deploy the generated `dist/` directory; there is no WordPress FTP root.

## Files

- `public/llms.txt`: human-readable, LLM-oriented index following the community llms.txt convention. Not guaranteed to be consumed by any particular model or crawler.
- `public/ai-catalog.json`: **site-specific** AI discoverability manifest. Not a recognized universal AI registry standard.
- `public/ai-catalog.schema.json`: JSON Schema 2020-12 for this custom catalog.
- `public/robots.txt`, `/rss.xml` and `/sitemap-index.xml`: complementary discovery documents.

## Accessibility improvements

- Skip-to-main link and keyboard focus ring.
- Named primary and footer navigation landmarks, a main landmark, and current-page indication.
- Blog category filter labeled as a button group with `aria-pressed` state.
- Live region announcing the number of matching articles.
- Decorative article arrow hidden from assistive technologies.

These are source-level improvements, **not** proof of WCAG compliance. Audit each template on mobile and desktop with Lighthouse and manual keyboard/screen reader testing. PageSpeed Insights measures automated accessibility rules, not an "agent accessibility tree" score.

## Deployment & checks

1. `npm ci && npm run build`
2. Confirm generated files: `dist/llms.txt`, `dist/ai-catalog.json`, `dist/ai-catalog.schema.json`.
3. For the existing manually deployed Cloudflare Pages project: `npx wrangler pages deploy dist --project-name ahnjeongbin-site --branch main`.
4. After deployment verify HTTPS responses at `https://ahnjeongbin.com/llms.txt`, `https://ahnjeongbin.com/ai-catalog.json` and `https://ahnjeongbin.com/ai-catalog.schema.json`.
5. Validate custom schema (e.g. with a Draft 2020-12 JSON Schema validator), then run PageSpeed Insights and test the keyboard navigation and category filters.

**Status:** GitHub updates and structural JSON checks completed. Remote PC offline during this change, so Cloudflare production deployment and live PageSpeed results have not been verified.
