export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  url: string;
  year: string;
  image?: string;
  repo?: string;
  category?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Hearth & Paw",
    category: "Pet Care",
    blurb: "A vet care app to book visits, consult online and shop for pets.",
    tags: ["Web App", "Healthcare"],
    url: "https://vetclinicsphek.netlify.app",
    year: "2026",
    image: "/vetclinicsphek.png",
  },
  {
    title: "PigTrack",
    category: "Farm Management",
    blurb: "Track herd value, feed, money and profit for a pig farm.",
    tags: ["Web App", "Management"],
    url: "https://pigtrack.netlify.app",
    year: "2026",
    image: "/pigtrack.png",
  },
  {
    title: "QiroEats",
    category: "Food Delivery",
    blurb: "Food delivery from the best local restaurants.",
    tags: ["Web App", "E-commerce"],
    url: "https://qiroeats.netlify.app",
    year: "2026",
    image: "/qiroeats.png",
  },
  {
    title: "IntelliStudy",
    category: "Productivity",
    blurb:
      "A free, offline study planner for Windows and Android with spaced revision.",
    tags: ["Windows", "Android", "Offline"],
    url: "https://intellistudyai.netlify.app",
    year: "2026",
    image: "/intellistudyai.png",
  },
  {
    title: "Hostel Management",
    category: "Management",
    blurb: "A hostel management system",
    tags: ["Web App", "Management"],
    url: "https://site--hostelmanagement--j7bz4xk9jtkj.code.run/",
    year: "2026",
    image: "/hostel-management.png",
    repo: "https://github.com/PrimeCyrus/HostelManagement",
  },
  {
    title: "CanArt",
    category: "Tool",
    blurb: "A photo collage maker with grids, text, layers and export.",
    tags: ["Web App", "Canvas"],
    url: "https://canart.netlify.app",
    year: "2026",
    image: "/canart.png",
  },
  {
    title: "Arise Solo Fit",
    category: "Fitness",
    blurb: "A daily quest system that turns fitness into a game.",
    tags: ["Web App", "Fitness"],
    url: "https://arisesolofit.netlify.app",
    year: "2026",
    image: "/arisesolofit.png",
  },
  {
    title: "Git Journey",
    category: "Data Viz",
    blurb: "A visual coding journey using GitHub stats and projects.",
    tags: ["Next.js", "TypeScript", "Data Visualization"],
    url: "https://gitjourney.netlify.app",
    year: "2026",
    image: "/git-journey.png",
    repo: "https://github.com/PrimeCyrus/GitJourney",
  },
];

export const moreProjects: Project[] = [
  {
    title: "Orb Surge",
    category: "Game",
    blurb: "A reflex game — tap the orbs, survive the surge.",
    tags: ["Game"],
    url: "https://orbsurge.netlify.app",
    year: "2025",
    repo: "https://github.com/PrimeCyrus/OrbSurge",
  },
  {
    title: "The Abyss Raid",
    category: "Landing",
    blurb: "Team up and defend against the bosses of the Abyss.",
    tags: ["Landing"],
    url: "https://theabyssraid.netlify.app",
    year: "2025",
  },
  {
    title: "RegLoop AI",
    category: "AI",
    blurb: "Turns new regulations into human-reviewed compliance policy PRs.",
    tags: ["Next.js", "FastAPI", "AI"],
    url: "https://github.com/PrimeCyrus/RegLoop",
    year: "2026",
  },
  {
    title: "NagaBuzz",
    category: "Mobile App",
    blurb: "Nagaland's news, notice board and discussion app.",
    tags: ["Flutter", "Mobile App"],
    url: "https://github.com/PrimeCyrus/NagaBuzz",
    year: "2026",
  },
  {
    title: "NagaBuzz Web Portal",
    category: "Web App",
    blurb: "Privacy policy and account-deletion portal for the NagaBuzz app.",
    tags: ["Web App", "Supabase"],
    url: "https://github.com/PrimeCyrus/NagaBuzz-web-portal",
    year: "2026",
  },
  {
    title: "Nagaland Quiz",
    category: "Mobile App",
    blurb: "A timed quiz app on Nagaland and general knowledge.",
    tags: ["Flutter", "Mobile App"],
    url: "https://github.com/PrimeCyrus/NagalandQuiz",
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
  "15+ projects solo in 3 years",
  "Figma to deployment, one pair of hands",
  "Async-friendly and direct",
];

export const topProjects = [
  { name: "TheGrimoire", commits: 41 },
  { name: "NagaHaat", commits: 21 },
  { name: "GitJourney", commits: 15 },
];

export type PricingTier = {
  name: string;
  price: string;
  summary: string;
  delivery: string;
  revisions: string;
  examples: string[];
  features: { label: string; included: boolean }[];
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Landing Pages",
    price: "Starting at ₹3k",
    summary:
      "Modern one-page websites designed to showcase your brand or product.",
    delivery: "3-day delivery",
    revisions: "3 Revisions",
    examples: [
      "Portfolio",
      "Personal Brand",
      "Product Launch",
      "Startup",
      "Event",
    ],
    features: [
      { label: "1-page responsive website", included: true },
      { label: "Modern UI/UX", included: true },
      { label: "Contact form", included: true },
      { label: "Basic SEO", included: true },
      { label: "Social media integration", included: true },
      { label: "Speed optimization", included: true },
      { label: "Deployment included", included: true },
      { label: "Payment integration", included: false },
      { label: "Authentication", included: false },
      { label: "Admin dashboard", included: false },
    ],
  },

  {
    name: "Business Websites",
    price: "Starting at ₹7k",
    summary:
      "Professional multi-page websites that help businesses establish an online presence.",
    delivery: "7-day delivery",
    revisions: "5 Revisions",
    examples: [
      "Restaurant",
      "Cafe",
      "Gym",
      "Salon",
      "Agency",
      "Law Firm",
      "Clinic",
      "Real Estate",
    ],
    features: [
      { label: "Up to 5 pages", included: true },
      { label: "Responsive design", included: true },
      { label: "Custom design", included: true },
      { label: "Contact & enquiry forms", included: true },
      { label: "Google Maps integration", included: true },
      { label: "WhatsApp integration", included: true },
      { label: "Blog support", included: true },
      { label: "Basic SEO", included: true },
      { label: "Deployment & domain setup", included: true },
      { label: "Payment integration", included: false },
      { label: "Admin dashboard", included: false },
    ],
  },

  {
    name: "Online Stores",
    price: "Starting at ₹20k",
    summary:
      "Sell products online with secure payments, inventory, and order management.",
    delivery: "20-day delivery",
    revisions: "Unlimited Revisions",
    examples: [
      "Clothing Store",
      "Electronics",
      "Cosmetics",
      "Grocery",
      "Furniture",
      "Jewelry",
    ],
    features: [
      { label: "Unlimited products", included: true },
      { label: "Product categories & variants", included: true },
      { label: "Shopping cart & secure checkout", included: true },
      { label: "Payment gateway integration", included: true },
      { label: "Order & inventory management", included: true },
      { label: "Customer accounts", included: true },
      { label: "Admin dashboard", included: true },
      { label: "Discount coupons", included: true },
      { label: "SEO & performance optimization", included: true },
      { label: "Deployment & domain setup", included: true },
    ],
  },

  {
    name: "Mobile Apps",
    price: "Starting at ₹20k",
    summary:
      "Cross-platform Android & iOS apps built with a modern, scalable architecture.",
    delivery: "25-day delivery",
    revisions: "Unlimited Revisions",
    examples: [
      "Restaurant App",
      "Delivery App",
      "Fitness App",
      "Business App",
      "Booking App",
    ],
    features: [
      { label: "Android & iOS support", included: true },
      { label: "Authentication", included: true },
      { label: "REST API integration", included: true },
      { label: "Push notifications", included: true },
      { label: "Offline support", included: true },
      { label: "Admin dashboard", included: true },
      { label: "Performance optimization", included: true },
      { label: "Deployment guidance", included: true },
      { label: "App Store & Play Store support", included: true },
    ],
  },

  {
    name: "Custom Software",
    price: "Custom Quote",
    summary:
      "Tailored web and mobile solutions built around your unique business requirements.",
    delivery: "Based on project scope",
    revisions: "Unlimited Revisions",
    examples: [
      "SaaS Platforms",
      "Marketplaces",
      "AI Applications",
      "Enterprise Portals",
      "Multi-vendor Systems",
      "Custom Dashboards",
    ],
    features: [
      { label: "Custom functionality", included: true },
      { label: "Scalable architecture", included: true },
      { label: "Authentication & permissions", included: true },
      { label: "Advanced admin dashboard", included: true },
      { label: "Third-party integrations", included: true },
      { label: "Advanced security", included: true },
      { label: "Performance optimization", included: true },
      { label: "Technical documentation", included: true },
      { label: "Priority support", included: true },
      { label: "Dedicated consultation", included: true },
    ],
  },
];
export const socials = [
  { label: "GitHub", url: "https://github.com/PrimeCyrus" },
  { label: "Twitter", url: "https://x.com/_PrimeCyrus_" },
  {
    label: "Instagram",
    url: "https://instagram.com/_cozybuilder_",
  },
];

export const email = "cyrus.enzlabs@gmail.com";

/* ——— Profile ——— */

export const profile = {
  name: "Nezo Tetseo",
  company: "HillStack Studios",
  role: ["Developer", "Designer", "Builder"],
  experience: "3 years",
  // [text, highlighted?]
  intro: [
    ["Founder", true],
    ["of", false],
    ["HillStack Studios,", true],
    ["turning ideas into", false],
    ["apps,", true],
    ["websites", true],
    ["and useful", false],
    ["tools", true],
    ["with", false],
    ["Next.js,", true],
    ["React", true],
    ["and", false],
    ["Flutter.", true],
  ] as [string, boolean][],
  summary: [
    ["Self-taught", true],
    ["developer and founder of", false],
    ["HillStack Studios", true],
    [". I learn whatever the project needs and take it from", false],
    ["Figma to deployment", true],
    ["on my own. In 3 years I have built over 15 projects solo: marketplaces, management systems, games and tools on", false],
    ["Next.js", true],
    ["and", false],
    ["TypeScript", true],
    [", and mobile apps with", false],
    ["Flutter", true],
    [". I work async-friendly and direct, and I ship.", false],
  ] as [string, boolean][],
  stack: ["TypeScript", "Next.js", "React", "Flutter", "Tailwind", "Supabase"],
};

export const stats = [
  { value: "15+", label: "Projects shipped", note: "Designed, built and deployed solo" },
  { value: "20", label: "Technologies", note: "In the current toolbox" },
  { value: "5", label: "Services", note: "From landing pages to custom software" },
];

const icon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-original.svg`;

export const skills = [
  [
    { name: "TypeScript", icon: icon("typescript") },
    { name: "JavaScript", icon: icon("javascript") },
    { name: "React", icon: icon("react") },
    { name: "Next.js", icon: icon("nextjs") },
    { name: "Tailwind CSS", icon: icon("tailwindcss") },
    { name: "HTML", icon: icon("html5") },
    { name: "CSS", icon: icon("css3") },
    { name: "Node.js", icon: icon("nodejs") },
    { name: "Framer Motion", icon: icon("framermotion") },
    { name: "Figma", icon: icon("figma") },
  ],
  [
    { name: "Flutter", icon: icon("flutter") },
    { name: "Dart", icon: icon("dart") },
    { name: "Python", icon: icon("python") },
    { name: "FastAPI", icon: icon("fastapi") },
    { name: "Supabase", icon: icon("supabase") },
    { name: "PostgreSQL", icon: icon("postgresql") },
    { name: "Netlify", icon: icon("netlify") },
    { name: "Git", icon: icon("git") },
    { name: "GitHub", icon: icon("github") },
    { name: "C++", icon: icon("cplusplus") },
  ],
];

export const processSteps = [
  {
    title: "Brief",
    text: "You tell me what you need. I come back with scope, price and a delivery date — no surprises.",
  },
  {
    title: "Design",
    text: "Figma mockups first, so you see the look and flow before a line of code is written.",
  },
  {
    title: "Build",
    text: "Clean, responsive code with progress you can check along the way. Revisions are included.",
  },
  {
    title: "Ship",
    text: "Deployed, domain connected and tested on real devices. I stay around for fixes after launch.",
  },
];
