# Open Horizon – Next.js Corporate Website

A ready-to-run Next.js App Router website, based on the supplied Open Horizon company profile.

## Quick start

1. Install **Node.js 20.9+** (Node 22 LTS recommended).
2. Open a terminal in the `open-horizon-nextjs` folder.
3. Run `npm install`.
4. Run `npm run dev` and open `http://localhost:3000`.
5. For production, run `npm run build` and `npm run start`.

## Important setup before launch

- Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to your actual canonical website URL; otherwise metadata and sitemap intentionally use `https://example.com`.
- Contact details are taken from the supplied company profile. Verify them before publishing.
- The supplied Open Horizon PNG logo is kept unchanged in `public/logos/`.
- Four **people-free**, locally bundled **SVG architectural workspace illustrations** are provided for the hero to avoid external image dependencies. These are scalable vector artworks rather than photographs. For photorealistic 4K hero images, replace the 4 files in `public/images/hero/` with licensed, optimized AVIF/WebP photos and change `image` paths in `data/content.js`.
- Review and expand individual service page copy and project credentials before SEO launch. No search ranking is guaranteed by metadata alone.
- Font CSS imports use Google Fonts and may fall back to installed serif/sans fonts when offline.

## Architecture

- `app/`: routes and SEO route files
- `components/`: reusable header/footer, motion hero, cards
- `data/`: editable services and homepage content
- `public/`: original logo and bundled hero artworks
- `app/services/[slug]/`: server-rendered service landing pages

## Features

- Four-slide, 100vh motion hero with bottom-left copy and accessible carousel controls
- No people in any hero artwork
- Responsive navigation and layout
- 3 specialist brand pages and 10 service landing pages
- Metadata, canonical urls, robots, XML sitemap, structured Service data, natural-language FAQs
- Reduced-motion support

## Note

This is a functional starter website, not a fully audited production launch. Run a content, SEO, performance, accessibility and legal review before deployment.

## Navigation
The header intentionally contains only the original logo (left) and a MENU button (right). The menu opens a responsive navigation panel with Who We Are, What We Do, Infrastructure, Sustainability, Our Team, Contact Us and brand pages. Close using the X, backdrop or Escape key.

## Fix for `Can't resolve '@/components/Navbar'`
This project uses `components/Header.jsx`. `components/Navbar.jsx` is included as a compatibility alias for older layouts; `components/SchemaScript.jsx` is also included for earlier imports. If an older local `app/layout.js` fails, replace it with the `app/layout.js` from this ZIP. Stop the dev server, delete the `.next` directory, then run `npm install` and `npm run dev` again. For Windows PowerShell: `Remove-Item -Recurse -Force .next` (only if that folder exists).


## Module resolution troubleshooting
Install the complete extracted folder rather than copying only app/. The data/, components/, app/, public/, and package.json must be siblings. All local imports use relative paths in this revision. Delete .next and run npm install, then npm run dev.
