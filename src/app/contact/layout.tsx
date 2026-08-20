import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Design Studio — Start a Project",
  description: "Contact Desnine Studio about branding, web design, packaging, SEO, or AI automation in Vaudreuil-Dorion, Greater Montreal, Quebec, and beyond.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Desnine Studio — Start a Design Project",
    description: "Book your free consultation with Desnine Studio. Specializing in branding, design, automation & digital strategy for modern, forward-thinking brands.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
