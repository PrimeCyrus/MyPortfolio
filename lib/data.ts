export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  url: string;
  year: string;
  image?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Hostel Management",
    blurb: "A hostel management system",
    tags: ["Web App", "Management"],
    url: "https://site--hostelmanagement--j7bz4xk9jtkj.code.run/",
    year: "2026",
    image: "/hostel-management.png",
  },

  {
    title: "The Grimoire",
    blurb: "A Fantasy Quest Journal",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://fantasyjournal.netlify.app",
    year: "2026",
    image: "/the-grimoire.png",
  },
  {
    title: "Git Journey",
    blurb: "A visual coding journey using GitHub stats and projects.",
    tags: ["Next.js", "TypeScript", "Data Visualization"],
    url: "https://gitjourney.netlify.app",
    year: "2026",
    image: "/git-journey.png",
  },

  {
    title: "Lucky Draw Wheel",
    blurb: "A spin-to-win wheel, sunflower-bright.",
    tags: ["Interactive", "JavaScript"],
    url: "https://luckydrawwheel.netlify.app",
    year: "2026",
    image: "/lucky-draw-wheel.png",
  },

  {
    title: "MLBB Skin Collage",
    blurb: "AI-powered collage maker for MLBB skins.",
    tags: ["TypeScript", "Canvas"],
    url: "https://skincoll.netlify.app",
    year: "2026",
    image: "/mlbb-skin-collage.png",
  },
  {
    title: "MLBB Trade Hub",
    blurb: "Buy, sell and trade MLBB accounts -all in one place.",
    tags: ["Next.js", "TypeScript", "Marketplace"],
    url: "https://mlbbtradehub.netlify.app",
    year: "2026",
    image: "/mlbb-trade-hub.png",
  },
  {
    title: "NagaHaat",
    blurb: "A marketplace for authentic Naga handicrafts.",
    tags: ["E-commerce", "Web App"],
    url: "https://nagahaat.netlify.app",
    year: "2026",
    image: "/naga-haat.png",
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
  "15+ projects solo in a year",
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
    name: "🚀 Landing Pages",
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
    name: "🏢 Business Websites",
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
    name: "🛒 Online Stores",
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
    name: "📱 Mobile Apps",
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
    name: "💡 Custom Software",
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
