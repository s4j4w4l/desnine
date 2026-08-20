import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Biotasup - Brand Identity Case Study",
  description:
    "Brand identity, packaging, and digital design for Biotasup. A wellness branding case study by Desnine Studio.",
  alternates: { canonical: "/work/biotasup" },
  openGraph: {
    title: "Biotasup - Brand Identity Case Study | Desnine Studio",
    description:
      "Brand identity, packaging, and digital design for Biotasup.",
    url: "/work/biotasup",
  },
};

export default function BiotasupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.desnine.com" },
      { "@type": "ListItem", position: 2, name: "Work", item: "https://www.desnine.com/work" },
      { "@type": "ListItem", position: 3, name: "Biotasup", item: "https://www.desnine.com/work/biotasup" },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />{children}</>;
}
