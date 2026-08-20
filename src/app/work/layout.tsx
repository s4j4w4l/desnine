import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - Brand & Web Design Case Studies",
  description:
    "Case studies from Desnine Studio, a multi-disciplinary, independent design studio. Explore branding, web design, and digital work for modern brands.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work - Desnine Studio",
    description:
      "Branding and web design case studies from Desnine Studio, a multi-disciplinary, independent design studio.",
    url: "/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
