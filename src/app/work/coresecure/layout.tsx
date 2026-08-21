import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Secure - Brand Identity Case Study",
  description:
    "Core Secure brand identity by Desnine Studio, a multi-disciplinary, independent design studio creating strategic identities for modern businesses.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/work/coresecure" },
  openGraph: {
    title: "Core Secure - Brand Identity Case Study | Desnine Studio",
    description:
      "Core Secure brand identity by Desnine Studio, a multi-disciplinary, independent design studio.",
    url: "/work/coresecure",
    images: [{ url: "/opengraph-image", alt: "Core Secure brand identity by Desnine Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Secure Brand Identity | Desnine Studio",
    description: "Core Secure brand identity by Desnine Studio, a multi-disciplinary, independent design studio.",
    images: ["/opengraph-image"],
  },
};

export default function CoreSecureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
