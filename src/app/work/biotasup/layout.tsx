import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biotasup - Brand Identity Case Study",
  description:
    "Brand identity, packaging, and digital design for Biotasup. A wellness branding case study by Desnine Studio.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Biotasup - Brand Identity Case Study | Desnine Studio",
    description:
      "Brand identity, packaging, and digital design for Biotasup.",
  },
};

export default function BiotasupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
