# HillStack Studios — Portfolio of Nezo Tetseo

Minimal monochrome portfolio (dark by default, with a light theme toggle) built with Next.js 15 and Tailwind CSS v4.

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

- `profile` — name, company, rotating headline words, hero intro and profile summary (highlighted words are flagged `true`)
- `stats` — the stat cards under the profile
- `featuredProjects` / `moreProjects` — the first six featured projects render as cards, the rest as the "More work" list
- `pricingTiers` — the Services rows
- `skills` — the two marquee rows (icons load from the devicon CDN)
- `processSteps` — the "How I work" timeline
- `socials`, `email` — hero, footer and contact links
- `languages`, `rhythm`, `topProjects`, `workStyle` — GitHub stats, currently not rendered

Sections live in [components/](components/) and are composed in [app/page.tsx](app/page.tsx): Header, Hero, Profile, Services, Skills, Projects, Process, Footer. Colors, fonts and animations: [app/globals.css](app/globals.css) and [app/layout.tsx](app/layout.tsx). Scroll reveals: [components/FadeIn.tsx](components/FadeIn.tsx).
