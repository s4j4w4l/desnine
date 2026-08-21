import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greenly - Brand Identity Case Study",
  description:
    "Greenly brand identity by Desnine Studio, a multi-disciplinary, independent design studio creating strategic identities for modern organizations.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/work/greenly" },
  openGraph: {
    title: "Greenly - Brand Identity Case Study | Desnine Studio",
    description:
      "Greenly brand identity by Desnine Studio, a multi-disciplinary, independent design studio.",
    url: "/work/greenly",
    images: [{ url: "/opengraph-image", alt: "Greenly brand identity by Desnine Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenly Brand Identity | Desnine Studio",
    description: "Greenly brand identity by Desnine Studio, a multi-disciplinary, independent design studio.",
    images: ["/opengraph-image"],
  },
};

export default function GreenlyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
