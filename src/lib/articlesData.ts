export type Article = {
  id: string;
  slug: string;       // used for folder name + URL
  title: string;
  date: string;       // ISO
  readMins: number;
  cover: string;
  excerpt: string;
  href: string;       // always `/article/<slug>`
  featured?: boolean;
};

export const ARTICLES: Article[] = [
  {
    id: "ai-branding-future",
    slug: "future-of-branding-ai",
    title: "The Future of Branding with AI (Practical, Not Hype)",
    date: "2025-09-05",
    readMins: 7,
    cover: "/images/articles/ai-branding.jpg",
    excerpt:
      "Brief faster, iterate smarter, and keep creative direction human while using AI as leverage.",
    href: "/article/future-of-branding-ai/page.tsx",
    featured: true,
  },
  {
    id: "minimalism-business",
    slug: "minimalist-design",
    title: "Minimalism That Converts: White Space, Rhythm, Hierarchy",
    date: "2025-08-28",
    readMins: 6,
    cover: "/images/articles/minimalism.jpg",
    excerpt:
      "Not just vibes—systems for clarity that drive real actions and sign-ups.",
    href: "/article/minimalist-design",
  },
  {
    id: "seo-2025",
    slug: "seo-in-2025",
    title: "SEO 2025 for Service Brands: Entity-First Content",
    date: "2025-08-15",
    readMins: 8,
    cover: "/images/articles/seo-2025.jpg",
    excerpt: "UX signals, internal links that matter, and lightweight schema.",
    href: "/article/seo-in-2025",
  },
  {
    id: "packaging-genz",
    slug: "packaging-genz",
    title: "Packaging for Gen Z: Sincerity Over Flash",
    date: "2025-08-11",
    readMins: 5,
    cover: "/images/articles/packaging-genz.jpg",
    excerpt: "Material choices, tactile finishes, and QR stories that feel earned.",
    href: "/article/packaging-genz",
  },
  {
    id: "automation-agency",
    slug: "automation-agency",
    title: "From Inquiry → Invoice: Lean AI Automation for Studios",
    date: "2025-08-02",
    readMins: 9,
    cover: "/images/articles/automation.jpg",
    excerpt: "Capture, qualify, scope, and send—without losing the human touch.",
    href: "/article/automation-agency",
  },
];

export const SERVICES = [
  "Brand Strategy",
  "Visual Identity",
  "Packaging Design",
  "Website Design",
  "E-commerce",
  "SEO",
  "Content Strategy",
  "AI Automation",
  "Pitch Decks",
  "Campaign Creative",
] as const;
