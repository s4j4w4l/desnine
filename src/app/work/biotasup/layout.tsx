import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biotasup - Brand Identity Case Study",
  description:
    "Biotasup branding, packaging, and digital design by Desnine Studio, a multi-disciplinary, independent design studio.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: "/work/biotasup" },
  openGraph: {
    title: "Biotasup - Brand Identity Case Study | Desnine Studio",
    description:
      "Biotasup branding, packaging, and digital design by Desnine Studio, a multi-disciplinary, independent design studio.",
    url: "/work/biotasup",
    images: [{ url: "/biotasups/biota-01.jpg", alt: "Biotasup brand identity by Desnine Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biotasup Brand Identity | Desnine Studio",
    description: "Biotasup branding and packaging by Desnine Studio, a multi-disciplinary, independent design studio.",
    images: ["/biotasups/biota-01.jpg"],
  },
};

export default function BiotasupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
