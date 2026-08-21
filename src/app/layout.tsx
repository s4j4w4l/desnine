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
    default: "Branding & Web Design Studio in Quebec | Desnine Studio",
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: "Desnine Studio", url: siteConfig.url }],
  creator: "Desnine Studio",
  publisher: "Desnine Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    alternateLocale: "fr_CA",
    url: siteConfig.url,
    title: "Desnine Studio — Multi-Disciplinary Independent Design Studio",
    description: siteConfig.description,
    siteName: "Desnine Studio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Desnine Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desnine Studio — Multi-Disciplinary Independent Design Studio",
    description: siteConfig.description,
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
    "Desnine Studio is a multi-disciplinary, independent design studio specializing in brand identity, web design, SEO optimization, and AI automation for modern businesses in Quebec, Canada.",
  url: siteConfig.url,
  logo: `${siteConfig.url}/DesnineStudio.svg`,
  image: `${siteConfig.url}/opengraph-image`,
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
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Desnine Studio",
  url: siteConfig.url,
  inLanguage: "en-CA",
};

const serializeJsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");

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
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="V393YxyNANF+UhKs/20Imw"
          async
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteSchema) }}
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
          defaultTheme="light"
          enableSystem={false}
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
