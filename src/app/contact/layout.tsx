import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Independent Design Studio",
  description: "Contact Desnine Studio, a multi-disciplinary, independent design studio in Quebec, to discuss branding, web design, SEO, packaging, or AI automation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    siteName: "Desnine Studio",
    locale: "en_CA",
    title: "Contact Desnine Studio — Start a Creative Project",
    description: "Contact Desnine Studio, a multi-disciplinary, independent design studio in Quebec, to discuss branding, web design, SEO, packaging, or AI automation.",
    url: "/contact",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contact Desnine Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Desnine Studio",
    description: "Contact Desnine Studio, a multi-disciplinary, independent design studio, to start your next creative project.",
    images: ["/opengraph-image"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
