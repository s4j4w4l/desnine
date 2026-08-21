import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quixel - Brand Identity Case Study",
  description:
    "Quixel corporate identity by Desnine Studio, a multi-disciplinary, independent design studio creating strategic visual systems and experiences.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/work/quixel" },
  openGraph: {
    title: "Quixel - Brand Identity Case Study | Desnine Studio",
    description:
      "Quixel corporate identity by Desnine Studio, a multi-disciplinary, independent design studio.",
    url: "/work/quixel",
    images: [{ url: "/opengraph-image", alt: "Quixel corporate identity by Desnine Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quixel Corporate Identity | Desnine Studio",
    description: "Quixel corporate identity by Desnine Studio, a multi-disciplinary, independent design studio.",
    images: ["/opengraph-image"],
  },
};

export default function QuixelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
