import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Desnine - Get Your Free Digital Marketing Consultation",
  description: "Ready to transform your business? Contact Desnine for a free consultation on SEO optimization, website design, AI automation, and branding services. Get started with your digital marketing strategy today.",
  keywords: [
    "contact digital marketing agency",
    "free SEO consultation",
    "website design quote",
    "AI automation consultation",
    "branding services contact",
    "digital marketing consultation",
    "SEO expert contact",
    "web designer contact",
    "marketing agency consultation",
  ],
  openGraph: {
    title: "Contact Desnine - Free Digital Marketing Consultation",
    description: "Get your free consultation on SEO, website design, AI automation & branding. Transform your business with Desnine's expert digital marketing services.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
} 