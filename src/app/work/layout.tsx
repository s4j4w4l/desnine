import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - Brand & Web Design Case Studies",
  description:
    "Case studies from Desnine Studio, an independent, multi-disciplinary design studio. Branding, web design, and digital work for modern, competitive brands.",
  openGraph: {
    title: "Our Work - Desnine Studio",
    description:
      "Branding and web design case studies from Desnine Studio, an independent, multi-disciplinary design studio.",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
