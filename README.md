# Enz Labs — Portfolio of Cyrus

Bold, electric-on-dark portfolio built with Next.js 15, Tailwind CSS v4, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Fully static — deploys anywhere. For Netlify: build command `npm run build`, publish directory `.next` (use the Next.js runtime plugin, auto-detected). For Vercel: just import the repo.

## Where to edit content

All copy lives in [lib/data.ts](lib/data.ts):

- `featuredProjects` / `moreProjects` — project cards (titles, blurbs, live URLs)
- `languages`, `rhythm`, `magnumOpus`, `topProjects` — the GitHub stats in the "Get to know me" tabs
- `collabModes` — the four ways-to-work-together cards
- `testimonials` — replace the placeholders with real client quotes
- `posts` — blog/writing entries
- `socials` — **X, LinkedIn, Instagram are `#` placeholders — add your real URLs**
- `email` — contact email

Hero headline: [components/Hero.tsx](components/Hero.tsx). Colors & fonts: [app/globals.css](app/globals.css) (`@theme` block) and [app/layout.tsx](app/layout.tsx).

Motion systems: [components/SectionFX.tsx](components/SectionFX.tsx) (scroll 3D bend/zoom per section), [components/Spotlight.tsx](components/Spotlight.tsx) (cursor-follow lighting), [components/Background.tsx](components/Background.tsx) (aurora + blobs + grid), [components/Scene3D.tsx](components/Scene3D.tsx) (hero 3D knot).
