import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Desnine - AI-Powered Digital Marketing & Design Agency | SEO, Web Design, Branding",
    template: "%s | Desnine Digital Marketing Agency"
  },
  description: "Transform your business with Desnine's AI-powered digital marketing services. Expert SEO optimization, website design & development, AI automation, branding & identity design. Get 300% more traffic and 150% higher conversions. Free consultation available.",
  keywords: [
    // Primary Keywords
    "digital marketing agency",
    "SEO optimization",
    "website design development",
    "AI automation",
    "branding identity design",
    "digital marketing services",
    
    // Service-specific Keywords
    "SEO services",
    "search engine optimization",
    "website design company",
    "web development agency",
    "AI automation bots",
    "brand identity design",
    "logo design services",
    "print packaging design",
    "digital design agency",
    "advertising design",
    "content creation services",
    "social media management",
    "smart analytics",
    
    // Industry-specific Keywords
    "ecommerce website design",
    "healthcare digital marketing",
    "technology company branding",
    "real estate website design",
    "education marketing services",
    "professional services SEO",
    
    // Location-based Keywords (if applicable)
    "digital marketing agency near me",
    "SEO expert",
    "web designer",
    "branding consultant",
    
    // Long-tail Keywords
    "AI-powered digital marketing",
    "conversion optimization services",
    "lead generation marketing",
    "business growth marketing",
    "startup digital marketing",
    "enterprise SEO services",
    
    // Brand Keywords
    "Desnine",
    "Desnine agency",
    "Desnine digital marketing",
  ],
  authors: [
    {
      name: "Desnine Digital Marketing Agency",
      url: "https://desnine.com",
    },
  ],
  creator: "Desnine",
  publisher: "Desnine Digital Marketing Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Desnine - AI-Powered Digital Marketing & Design Agency | Transform Your Business",
    description: "Transform your business with Desnine's AI-powered digital marketing services. Expert SEO optimization, website design & development, AI automation, branding & identity design. Get 300% more traffic and 150% higher conversions.",
    siteName: "Desnine Digital Marketing Agency",
    images: [
      {
        url: "/agent-template-og.png",
        width: 1200,
        height: 630,
        alt: "Desnine - AI-Powered Digital Marketing & Design Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desnine - AI-Powered Digital Marketing & Design Agency",
    description: "Transform your business with AI-powered digital marketing services. Expert SEO, web design, AI automation & branding. Get 300% more traffic & 150% higher conversions.",
    creator: "@desnine",
    site: "@desnine",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Digital Marketing Agency",
  classification: "Business Services",
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "facebook-domain-verification": "your-facebook-verification-code",
  },
};
