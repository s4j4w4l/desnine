import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mavo - Brand Identity Case Study",
  description:
    "Mavo brand identity by Desnine Studio, a multi-disciplinary, independent design studio creating strategic identities and digital experiences.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/work/mavo" },
  openGraph: {
    title: "Mavo - Brand Identity Case Study | Desnine Studio",
    description:
      "Mavo brand identity by Desnine Studio, a multi-disciplinary, independent design studio.",
    url: "/work/mavo",
    images: [{ url: "/opengraph-image", alt: "Mavo brand identity by Desnine Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavo Brand Identity | Desnine Studio",
    description: "Mavo brand identity by Desnine Studio, a multi-disciplinary, independent design studio.",
    images: ["/opengraph-image"],
  },
};

export default function MavoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
