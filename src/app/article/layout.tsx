import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles - Branding, Design & AI Automation Insights",
  description:
    "Insights on branding, web design, SEO, and AI automation from Desnine Studio, a multi-disciplinary, independent design studio.",
  alternates: { canonical: "/article" },
  openGraph: {
    title: "Articles - Desnine Studio",
    description:
      "Insights on branding, web design, SEO, and AI automation from Desnine Studio.",
    url: "/article",
  },
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
