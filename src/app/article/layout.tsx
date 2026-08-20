import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles - Branding, Design & AI Automation Insights",
  description:
    "Insights on branding, web design, SEO, and AI automation from Desnine Studio, an independent, multi-disciplinary design studio.",
  openGraph: {
    title: "Articles - Desnine Studio",
    description:
      "Insights on branding, web design, SEO, and AI automation from Desnine Studio.",
  },
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
