export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  url: string;
  year: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Hostel Management",
    blurb: "A hostel management system",
    tags: ["Web App", "Management"],
    url: "https://site--hostelmanagement--j7bz4xk9jtkj.code.run/",
    year: "2026",
  },

  {
    title: "The Grimoire",
    blurb: "A Fantasy Quest Journal",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://fantasyjournal.netlify.app",
    year: "2026",
  },

  {
    title: "Lucky Draw Wheel",
    blurb: "A spin-to-win wheel, sunflower-bright.",
    tags: ["Interactive", "JavaScript"],
    url: "https://luckydrawwheel.netlify.app",
    year: "2026",
  },

  {
    title: "MLBB Skin Collage",
    blurb: "AI-powered collage maker for MLBB skins.",
    tags: ["TypeScript", "Canvas"],
    url: "https://skincoll.netlify.app",
    year: "2026",
  },
  {
    title: "MLBB Trade Hub",
    blurb: "Buy, sell and trade MLBB accounts -all in one place.",
    tags: ["Next.js", "TypeScript", "Marketplace"],
    url: "https://mlbbtradehub.netlify.app",
    year: "2026",
  },
  {
    title: "NagaHaat",
    blurb: "A marketplace for authentic Naga handicrafts.",
    tags: ["E-commerce", "Web App"],
    url: "https://nagahaat.netlify.app",
    year: "2026",
  },
];

export const moreProjects: Project[] = [
  {
    title: "Orb Surge",
    blurb: "A reflex game — tap the orbs, survive the surge.",
    tags: ["Game"],
    url: "https://orbsurge.netlify.app",
    year: "2025",
  },
  {
    title: "The Abyss Raid",
    blurb: "Team up and defend against the bosses of the Abyss.",
    tags: ["Landing"],
    url: "https://theabyssraid.netlify.app",
    year: "2025",
  },
];

/* ——— GitHub story (from my real stats) ——— */

export const languages = [
  { name: "TypeScript", pct: 41, color: "#2563eb" },
  { name: "JavaScript", pct: 18, color: "#0d9488" },
  { name: "HTML", pct: 16, color: "#d97706" },
  { name: "Dart", pct: 11, color: "#475569" },
  { name: "CSS", pct: 8, color: "#dc2626" },
  { name: "Python", pct: 3, color: "#7c3aed" },
  { name: "PLpgSQL", pct: 2, color: "#92400e" },
  { name: "C++", pct: 1, color: "#0891b2" },
];

export const signatureLanguage = {
  name: "TypeScript",
  note: "41% of all code written",
};

/* 7 days x 12 two-hour buckets, intensity 0–4 */
export const rhythm = [
  { day: "Sun", cells: [0, 0, 0, 1, 2, 1, 1, 1, 0, 1, 0, 0] },
  { day: "Mon", cells: [1, 0, 0, 2, 3, 2, 2, 3, 1, 2, 1, 0] },
  { day: "Tue", cells: [0, 1, 0, 2, 4, 3, 2, 4, 2, 3, 1, 1] },
  { day: "Wed", cells: [0, 0, 0, 2, 3, 4, 3, 2, 2, 1, 1, 0] },
  { day: "Thu", cells: [1, 0, 0, 3, 4, 3, 4, 3, 2, 2, 1, 1] },
  { day: "Fri", cells: [0, 0, 0, 2, 3, 2, 3, 2, 1, 2, 1, 0] },
  { day: "Sat", cells: [0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 0, 0] },
];

export const rhythmFacts = [
  {
    label: "Chronotype",
    value: "Early Bird",
    note: "only 26% of commits at night",
  },
  { label: "Weekend activity", value: "19%", note: "of commits on weekends" },
];

export const workStyle = [
  "Self-taught — I learn whatever the project needs",
  "10 live products in a year, solo",
  "Figma to deployment, one pair of hands",
  "Async-friendly and direct",
];

export const magnumOpus = {
  title: "MlbbSkinCollage",
  desc: "A collage maker for MLBB",
  commits: 293,
  language: "TypeScript",
};

export const topProjects = [
  { name: "MlbbSkinCollage", commits: 293 },
  { name: "TheGrimoire", commits: 41 },
  { name: "MlbbMarket", commits: 35 },
  { name: "NagaHaat", commits: 21 },
  { name: "GitJourney", commits: 15 },
];

/* ——— Ways to work together ——— */

export const collabModes = [
  {
    icon: "zap",
    name: "Freelance project",
    desc: "A scoped website, app, or design job — idea to live URL.",
    note: "from 100$",
  },
  {
    icon: "clock",
    name: "Part-time / Retainer",
    desc: "Ongoing design + development, a few days a week.",
    note: "Offer your rates",
  },
  {
    icon: "briefcase",
    name: "Full-time role",
    desc: "Frontend, full-stack, or product engineering. I learn fast and ship faster.",
    note: "Open to offers — remote first",
  },
];

export const testimonials = [
  {
    quote:
      "Cyrus took a vague idea and turned it into a site that looks like an agency build. The attention to detail is unreal.",
    name: "John Ralte",
    role: "Founder, Startup Co.",
  },
  {
    quote:
      "Fast, communicative, and sharp design instincts. Our conversion rate jumped within the first month.",
    name: "Kevin Lian",
    role: "Marketing Lead, Brand Inc.",
  },
  {
    quote:
      "Felt like having a full product team. Design, code, deployment — all handled, all excellent.",
    name: "Lina Chen",
    role: "CEO, Tech Ventures",
  },
];

export const posts = [
  {
    title: "What shipping 10 sites in a year taught me about finishing",
    tag: "Process",
    date: "Coming soon",
  },
  {
    title: "Self-taught, full speed: how I learn new stacks mid-project",
    tag: "Learning",
    date: "Coming soon",
  },
  {
    title: "Next.js + Netlify: my zero-friction deploy pipeline",
    tag: "Engineering",
    date: "Coming soon",
  },
];

export const socials = [
  { label: "GitHub", url: "https://github.com/PrimeCyrus" },
  { label: "X / Twitter", url: "#" },
  { label: "LinkedIn", url: "#" },
  { label: "Instagram", url: "#" },
];

export const email = "nezot98@gmail.com";
