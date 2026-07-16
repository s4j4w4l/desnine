import { Navbar } from "@/components/sections/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import EmailPopup from "@/components/EmailPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Desnine Studio",
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Desnine Studio",
    "independent design studio",
    "multi-disciplinary design studio",
    "creative studio Quebec",
    "brand identity design",
    "web design Quebec",
    "website design Montreal",
    "SEO optimization Canada",
    "logo design Quebec",
    "graphic design studio",
    "AI automation for business",
    "premium branding studio",
    "modern web design",
    "studio de design Quebec",
    "conception web Quebec",
    "identité visuelle",
    "Vaudreuil-Dorion designer",
  ],
  authors: [{ name: "Desnine Studio", url: siteConfig.url }],
  creator: "Desnine Studio",
  publisher: "Desnine Studio",
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
    title: "Desnine Studio — Independent Design Studio",
    description:
      "Multi-disciplinary independent design studio in Quebec. Brand identity, web design, SEO, and AI automation for modern businesses.",
    siteName: "Desnine Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desnine Studio — Independent Design Studio",
    description:
      "Multi-disciplinary independent design studio in Quebec. Brand identity, web design, SEO, and AI automation.",
    creator: "@desninestudio",
    site: "@desninestudio",
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
  category: "Design Studio",
};

// ─── Organization schema (AEO: helps AI assistants understand Desnine) ────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Desnine Studio",
  alternateName: "Desnine",
  description:
    "Independent, multi-disciplinary design studio specializing in brand identity, web design, SEO optimization, and AI automation for modern businesses in Quebec, Canada.",
  url: "https://desnine.com",
  logo: "https://desnine.com/DesnineStudio.svg",
  image: "https://desnine.com/agent-template-og.png",
  email: "info@desnine.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/desnine-studio/",
    "https://x.com/desninestudio",
    "https://www.instagram.com/desninestudio",
    "https://behance.net/desninestudio",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative Studio Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Identity Design",
          description:
            "Complete brand identity packages including logo, colour system, typography, and brand guidelines.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Design & Development",
          description:
            "Custom, high-performance websites built with Next.js and Tailwind CSS.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Optimization",
          description:
            "On-page and technical SEO strategies to improve organic search visibility.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation",
          description:
            "AI-powered workflow automation and smart analytics for business growth.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
};

// ─── FAQPage schema (AEO: lets AI assistants surface direct answers) ──────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Desnine Studio specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desnine Studio is an independent, multi-disciplinary design studio focused on clean, modern design for websites and brands. We help businesses look professional, clear, and trustworthy online, covering brand identity, web design, SEO, and AI automation.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Desnine Studio located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desnine Studio is based in Quebec, Canada, and works with clients across Canada and the United States.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects take between 1 and 4 weeks, depending on scope. Timelines are agreed upon before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Does Desnine Studio work with existing brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Desnine Studio can improve or update an existing brand identity or website without starting from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "What is Desnine Studio's design process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process follows five stages: Discovery & Direction, Design System, Build & Implement, Revisions & QA, and Launch & Support.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="google-tag-src"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HXKBSXX6SK"
        />
        <Script
          id="google-tag"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HXKBSXX6SK');
            `,
          }}
        />
        <Script
          id="microsoft-clarity"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wypbucyeoa");
            `,
          }}
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js"
          data-pid="ybDRUOp9ndzooF6a"
          data-version="062024"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="max-w-7xl mx-auto border-x relative">
              <div className="block w-px h-full border-l border-border absolute top-0 left-6 z-10" />
              <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10" />
              <Navbar />
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <EmailPopup />
      </body>
    </html>
  );
}
