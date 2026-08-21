import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding, Design & AI Automation Articles",
  description:
    "Branding, web design, SEO, and AI automation insights from Desnine Studio, a multi-disciplinary, independent design studio in Quebec.",
  openGraph: {
    title: "Branding, Design & AI Articles | Desnine Studio",
    description:
      "Insights from Desnine Studio, a multi-disciplinary, independent design studio covering branding, web design, SEO, and AI automation.",
    url: "/article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Desnine Studio articles" }],
  },
  alternates: { canonical: "/article" },
  twitter: {
    card: "summary_large_image",
    title: "Branding, Design & AI Articles | Desnine Studio",
    description: "Insights from Desnine Studio, a multi-disciplinary, independent design studio.",
    images: ["/opengraph-image"],
  },
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
