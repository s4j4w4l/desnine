import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marché Main — Grocery Branding & Identity Case Study",
  description:
    "Brand identity and packaging for Marché Main, a neighbourhood grocer. A retail branding case study by Desnine Studio.",
  alternates: { canonical: "/work/marche-main" },
  openGraph: {
    title: "Marché Main — Grocery Branding Case Study | Desnine Studio",
    description: "Brand identity and packaging for Marché Main, a neighbourhood grocer.",
    url: "/work/marche-main",
    images: [{ url: "/marche_main/003.png", alt: "Marché Main grocery brand identity by Desnine Studio" }],
  },
};

export default function MarcheMainLayout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.desnine.com" },
      { "@type": "ListItem", position: 2, name: "Work", item: "https://www.desnine.com/work" },
      { "@type": "ListItem", position: 3, name: "Marché Main", item: "https://www.desnine.com/work/marche-main" },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />{children}</>;
}
