import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marché Main - Brand Identity Case Study",
  description:
    "Marché Main brand identity and packaging by Desnine Studio, a multi-disciplinary, independent design studio creating distinctive retail experiences.",
  openGraph: {
    title: "Marché Main - Brand Identity Case Study | Desnine Studio",
    description: "Marché Main brand identity and packaging by Desnine Studio, a multi-disciplinary, independent design studio.",
    url: "/work/marche_main",
    images: [{ url: "/marche_main/optimized/003.webp", alt: "Marché Main brand identity by Desnine Studio" }],
  },
  alternates: { canonical: "/work/marche_main" },
  twitter: {
    card: "summary_large_image",
    title: "Marché Main Brand Identity | Desnine Studio",
    description: "Marché Main brand identity and packaging by Desnine Studio, a multi-disciplinary, independent design studio.",
    images: ["/marche_main/optimized/003.webp"],
  },
};

export default function MarcheMainLayout({ children }: { children: React.ReactNode }) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Work", item: `${siteConfig.url}/work` },
        { "@type": "ListItem", position: 3, name: "Marché Main", item: `${siteConfig.url}/work/marche_main` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "Marché Main Brand Identity",
      description: "Brand identity and packaging for Marché Main, a neighbourhood grocer.",
      url: `${siteConfig.url}/work/marche_main`,
      creator: { "@type": "Organization", name: "Desnine Studio", url: siteConfig.url },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
