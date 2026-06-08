import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Desnine Studio — Creative Branding, Web Design & SEO | Quebec, Canada",
    template: "%s | Desnine Studio",
  },
  description:
    "Desnine Studio is a boutique creative studio based in Quebec, Canada. We specialize in brand identity, web design, SEO, and AI automation for modern businesses that want to stand out.",
  keywords: [
    "Desnine Studio",
    "creative studio Quebec",
    "branding agency Canada",
    "brand identity design",
    "web design Quebec",
    "website design Montreal",
    "SEO optimization Canada",
    "logo design Quebec",
    "graphic design studio",
    "AI automation for business",
    "premium branding studio",
    "modern web design",
    "digital design agency",
    "startup branding Canada",
    "studio de design Quebec",
    "agence de branding Montreal",
    "conception web Quebec",
    "identité visuelle",
    "Vaudreuil-Dorion designer",
  ],
  authors: [{ name: "Desnine Studio", url: "https://desnine.com" }],
  creator: "Desnine Studio",
  publisher: "Desnine Studio",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
    languages: {
      "en-CA": "/",
      "fr-CA": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    alternateLocale: "fr_CA",
    url: siteConfig.url,
    title: "Desnine Studio — Creative Branding, Web Design & SEO",
    description:
      "Boutique creative studio in Quebec. Brand identity, web design, SEO, and AI automation for modern businesses.",
    siteName: "Desnine Studio",
    images: [
      {
        url: "/agent-template-og.png",
        width: 1200,
        height: 630,
        alt: "Desnine Studio — Creative Branding & Web Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desnine Studio — Creative Branding & Web Design",
    description:
      "Boutique creative studio in Quebec. Brand identity, web design, SEO, and AI automation.",
    creator: "@desninestudio",
    site: "@desninestudio",
    images: ["/agent-template-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Creative Design Studio",
};
