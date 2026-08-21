import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding & Web Design Case Studies",
  description:
    "Explore branding and web design case studies from Desnine Studio, a multi-disciplinary, independent design studio creating distinctive brand experiences.",
  openGraph: {
    title: "Branding & Web Design Case Studies | Desnine Studio",
    description:
      "Explore branding and web design case studies from Desnine Studio, a multi-disciplinary, independent design studio creating distinctive brand experiences.",
    url: "/work",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Desnine Studio case studies" }],
  },
  alternates: { canonical: "/work" },
  twitter: {
    card: "summary_large_image",
    title: "Branding & Web Design Case Studies | Desnine Studio",
    description: "Explore selected work by Desnine Studio, a multi-disciplinary, independent design studio.",
    images: ["/opengraph-image"],
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
