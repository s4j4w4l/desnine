import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marché Main - Brand Identity Case Study",
  description:
    "Brand identity and packaging for Marché Main, a neighbourhood grocer. A retail branding case study by Desnine Studio.",
  alternates: { canonical: "/work/marche_main" },
  openGraph: {
    title: "Marché Main - Brand Identity Case Study | Desnine Studio",
    description:
      "Brand identity and packaging for Marché Main, a neighbourhood grocer.",
    url: "/work/marche_main",
  },
};

export default function MarcheMainLayout({ children }: { children: React.ReactNode }) {
  return children;
}
