# Desnine consolidated code file

Generated from the project source. Excludes .env.local, package-lock.json, node_modules, .next, .git, and binary/public media assets.

## tsconfig.json

``json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

``

## tailwind.config.js

``js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'orbit': 'orbit calc(var(--duration) * 1s) linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': {
            transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))',
          },
          '100%': {
            transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))',
          },
          colors: {
            desnine: "#B42B25",
          },
        },
      },
    },
  },
  plugins: [],
} 
``

## eslint.config.mjs

``js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

``

## postcss.config.mjs

``js
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;

``

## components.json

``json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
``

## package.json

``json
{
  "name": "agent-template",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@notionhq/client": "^5.4.0",
    "@number-flow/react": "^0.5.7",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-icons": "^1.3.2",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-navigation-menu": "^1.2.5",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-slot": "^1.1.2",
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.4.2",
    "@shadergradient/react": "^2.4.20",
    "@supabase/supabase-js": "^2.56.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cobe": "^0.6.3",
    "color-bits": "^1.1.0",
    "framer-motion": "^12.23.12",
    "lenis": "^1.3.16",
    "lucide-react": "^0.479.0",
    "marked": "^15.0.7",
    "motin": "^0.0.1-security.0",
    "motion": "^12.23.26",
    "next": "^15.5.9",
    "next-google-translate-widget": "^2.0.1",
    "next-intl": "^4.11.0",
    "next-themes": "^0.4.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-markdown": "^10.1.0",
    "react-scan": "^0.3.2",
    "recharts": "2.15.4",
    "remark-gfm": "^4.0.1",
    "resend": "^6.0.2",
    "rough-notation": "^0.5.1",
    "swiper": "^12.0.3",
    "tailwind-merge": "^3.0.2",
    "tailwindcss-animate": "^1.0.7",
    "three": "^0.182.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19.2.8",
    "@types/react-dom": "^19.2.3",
    "@types/three": "^0.182.0",
    "eslint": "^9",
    "eslint-config-next": "15.2.2",
    "shiki": "^3.2.1",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.2.4",
    "typescript": "^5"
  },
  "overrides": {
    "odbc": "npm:@empty@1.0.0"
  }
}

``

## next.config.ts

``ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

``

## README.md

``md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

``

## src\lib\utils.ts

``ts
import { clsx, type ClassValue } from "clsx";
import * as Color from "color-bits";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to convert any CSS color to rgba
export const getRGBA = (
  cssColor: React.CSSProperties["color"],
  fallback: string = "rgba(180, 180, 180)",
): string => {
  if (typeof window === "undefined") return fallback;
  if (!cssColor) return fallback;

  try {
    // Handle CSS variables
    if (typeof cssColor === "string" && cssColor.startsWith("var(")) {
      const element = document.createElement("div");
      element.style.color = cssColor;
      document.body.appendChild(element);
      const computedColor = window.getComputedStyle(element).color;
      document.body.removeChild(element);
      return Color.formatRGBA(Color.parse(computedColor));
    }

    return Color.formatRGBA(Color.parse(cssColor));
  } catch (e) {
    console.error("Color parsing failed:", e);
    return fallback;
  }
};

// Helper function to add opacity to an RGB color string
export const colorWithOpacity = (color: string, opacity: number): string => {
  if (!color.startsWith("rgb")) return color;
  return Color.formatRGBA(Color.alpha(Color.parse(color), opacity));
};

// Tremor Raw focusInput [v0.0.1]

export const focusInput = [
  // base
  "focus:ring-2",
  // ring color
  "focus:ring-blue-200 focus:dark:ring-blue-700/30",
  // border color
  "focus:border-blue-500 focus:dark:border-blue-700",
];

// Tremor Raw focusRing [v0.0.1]

export const focusRing = [
  // base
  "outline outline-offset-2 outline-0 focus-visible:outline-2",
  // outline color
  "outline-blue-500 dark:outline-blue-500",
];

// Tremor Raw hasErrorInput [v0.0.1]

export const hasErrorInput = [
  // base
  "ring-2",
  // border color
  "border-red-500 dark:border-red-700",
  // ring color
  "ring-red-200 dark:ring-red-700/30",
];

``

## src\lib\useDebounced.ts

``ts
"use client";

import { useEffect, useState } from "react";

export function useDebounced<T>(value: T, delay = 250) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v as T;
}

``

## src\lib\supabase.ts

``ts
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey);

``

## src\lib\site.ts

``ts
export const siteConfig = {
  name: "Desnine - Creative Studio for Modern Brands",
  url: "https://desnine.com",
  // description: " Desnine is a multidisciplinary studio helping brands stand out through strong creative direction, clean aesthetics, and emotionally resonant visuals. Expert SEO optimization, website design & development, AI automation, branding & identity design"
  description: "Desnine is a creative studio helping brands grow through branding, web design, SEO optimization, AI automation, and identity. We craft clear strategies, clean visuals, and digital solutions that connect with people and drive results.",
  links: {
    linkedin: "https://www.linkedin.com/company/desnine-studio/about/",
    twitter: "https://x.com/desninestudio",
    behance: "https://behance.net/desninestudio",
    instagram: "https://instagram.com/desninestudio",
    pinterest: "https://pinterest.com/desninestudio",
  },
};

export type SiteConfig = typeof siteConfig;

``

## src\lib\format.ts

``ts
export function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return d;
  }
}

``

## src\lib\config.tsx

``tsx
import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FifthBentoAnimation } from "@/components/fifth-bento-animation";
import { SixthBentoAnimation  } from "@/components/sixth-bento-animation";
import { SeventhBentoAnimation  } from "@/components/seventh-bento-animation";
import { EighthBentoAnimation  } from "@/components/eighth-bento-animation";
import { NinthBentoAnimation  } from "@/components/ninth-bento-animtaion";
import { TenthBentoAnimation  } from "@/components/tenth-bento-animation";




import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import Loader from "@/components/loader";
import RippleLogoLoader from "@/components/RippleLogoLoader";
import TerminalLoader from "@/components/TerminalLoader";
import SpeederLoader from "@/components/SpeederLoader";
import IsometricBoxesLoader from "@/components/IsometricBoxesLoader";
import TowerLoader from "@/components/TowerLoader";
import SquarePathLoader from "@/components/SquarePathLoader";
import RadarLoader from "@/components/RadarLoader";
import RocketLoader from "@/components/RocketLoader";
import { DesnineTrustBadge } from "@/components/sections/DesnineTrustBadge";

const DESNINE_RED = "#7A0000"

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Desnine",
  description: "Creative Directions for Modern Brands.",
  cta: "Get Started",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    // Core Identity
    "Desnine",
    "Desnine Studio",
    "Creative Direction for Modern Brands",
    "Design Agency",
    "Creative Studio",
    "Branding Agency",
    "Quebec Design Studio",
    "Montreal Graphic Designer",
    "Canada Creative Agency",

    // Branding
    "Brand Identity",
    "Brand Strategy",
    "Logo Design",
    "Visual Identity",
    "Minimal Branding",
    "Premium Branding",
    "Luxury Branding",
    "Modern Brands",
    "Brand Guidelines",
    "Rebranding Services",

    // Web Design & Development
    "Web Design",
    "Modern Web Design",
    "Website Development",
    "Next.js Developer",
    "Tailwind CSS Websites",
    "Custom Websites",
    "Conversion-Focused Websites",
    "Responsive Web Design",
    "UX UI Design",
    "High-End Web Design",

    // SEO & Marketing
    "SEO Optimization",
    "On-Page SEO",
    "Website SEO",
    "Digital Strategy",
    "Content Strategy",
    "Social Media Design",
    "Growth Marketing",
    "Business Branding",

    // AI & Automation
    "AI Automation",
    "AI Business Automation",
    "Workflow Automation",
    "Smart Analytics",
    "AI Tools for Business",
    "Creative Automation",
    "AI-Powered Studio",

    // Graphic & Digital Design
    "Graphic Design",
    "Digital Design",
    "Poster Design",
    "Packaging Design",
    "Print Design",
    "Advertising Design",
    "Marketing Design",
    "Minimalist Design",
    "Clean Visual Design",

    // Services & Positioning
    "Creative Direction",
    "Brand Consulting",
    "Design Consultant",
    "Professional Designer",
    "Premium Design Services",
    "Modern Design Solutions",

    // Industry Positioning
    "Small Business Branding",
    "Ecommerce Branding",
    "Startup Branding",
    "Website for Small Business",
    "Brand Identity for Startups",

    // Technical + Web keywords
    "Next.js Design Agency",
    "React Developer",
    "Tailwind CSS Developer",
    "Framer Websites",
    "CMS Websites",
    "Fast Loading Websites",

    // Market & Audience
    "Design Studio Quebec",
    "Design Studio Canada",
    "Website Designer Montreal",
    "Vaudreuil-Dorion Designer",
    "Freelance Creative Director",

    // Creative Messaging
    "Purposeful Design",
    "Intentional Branding",
    "Design That Converts",
    "Design With Strategy",
    "High-End Creative Work",
    "Unforgettable Branding",

    // Long-tail SEO
    "Best Branding Studio Canada",
    "Best Web Designer Quebec",
    "Affordable Branding Packages",
    "Professional Website Services",
    "Custom Branding Packages"
  ],

  links: {
    email: "info@desnine.com",
    linkedin: "https://www.linkedin.com/company/desnine-studio/",
    twitter: "https://x.com/desninestudio",
    instagram: "https://www.instagram.com/desninestudio",
  },

  nav: {
    links: [
      { id: 1, name: "Home", href: "/" },
      { id: 2, name: "Services", href: "/services" },
      { id: 3, name: "Our Work", href: "/work" },
    ],
  },
  hero: {
    badgeIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-[#364153]"
      >
        <path d="M7.62758 1.09876C7.74088 1.03404 7.8691 1 7.99958 1C8.13006 1 8.25828 1.03404 8.37158 1.09876L13.6216 4.09876C13.7363 4.16438 13.8316 4.25915 13.8979 4.37347C13.9642 4.48779 13.9992 4.6176 13.9992 4.74976C13.9992 4.88191 13.9642 5.01172 13.8979 5.12604C13.8316 5.24036 13.7363 5.33513 13.6216 5.40076L8.37158 8.40076C8.25828 8.46548 8.13006 8.49952 7.99958 8.49952C7.8691 8.49952 7.74088 8.46548 7.62758 8.40076L2.37758 5.40076C2.26287 5.33513 2.16753 5.24036 2.10123 5.12604C2.03492 5.01172 2 4.88191 2 4.74976C2 4.6176 2.03492 4.48779 2.10123 4.37347C2.16753 4.25915 2.26287 4.16438 2.37758 4.09876L7.62758 1.09876Z" />
        <path d="M2.56958 7.23928L2.37758 7.34928C2.26287 7.41491 2.16753 7.50968 2.10123 7.624C2.03492 7.73831 2 7.86813 2 8.00028C2 8.13244 2.03492 8.26225 2.10123 8.37657C2.16753 8.49089 2.26287 8.58566 2.37758 8.65128L7.62758 11.6513C7.74088 11.716 7.8691 11.75 7.99958 11.75C8.13006 11.75 8.25828 11.716 8.37158 11.6513L13.6216 8.65128C13.7365 8.58573 13.8321 8.49093 13.8986 8.3765C13.965 8.26208 14 8.13211 14 7.99978C14 7.86745 13.965 7.73748 13.8986 7.62306C13.8321 7.50864 13.7365 7.41384 13.6216 7.34828L13.4296 7.23828L9.11558 9.70328C8.77568 9.89744 8.39102 9.99956 7.99958 9.99956C7.60814 9.99956 7.22347 9.89744 6.88358 9.70328L2.56958 7.23928Z" />
        <path d="M2.37845 10.5993L2.57045 10.4893L6.88445 12.9533C7.22435 13.1474 7.60901 13.2496 8.00045 13.2496C8.39189 13.2496 8.77656 13.1474 9.11645 12.9533L13.4305 10.4883L13.6225 10.5983C13.7374 10.6638 13.833 10.7586 13.8994 10.8731C13.9659 10.9875 14.0009 11.1175 14.0009 11.2498C14.0009 11.3821 13.9659 11.5121 13.8994 11.6265C13.833 11.7409 13.7374 11.8357 13.6225 11.9013L8.37245 14.9013C8.25915 14.966 8.13093 15 8.00045 15C7.86997 15 7.74175 14.966 7.62845 14.9013L2.37845 11.9013C2.2635 11.8357 2.16795 11.7409 2.10148 11.6265C2.03501 11.5121 2 11.3821 2 11.2498C2 11.1175 2.03501 10.9875 2.10148 10.8731C2.16795 10.7586 2.2635 10.6638 2.37845 10.5983V10.5993Z" />
      </svg>
    ),
    badge: "Premium Design Studio",
    title: "Creative Direction For Modern Brands",
    description: "We craft premium brand identities, websites, and design systems that elevate perception, build trust, and turn businesses into unforgettable brands."
      /*"We are a crative studio for modern brands, that helps buisniesses."*/
      // /*"We are a creative studio for modern brands, helping businesses stand out with strategy, design, and storytelling.",
      // <DesnineTrustBadge />,
  },

  hero2: {
    // badgeIcon: (
    //   <svg
    //     width="16"
    //     height="16"
    //     viewBox="0 0 16 16"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //     className="dark:fill-white fill-[#364153]"
    //   >
    //     <path d="M7.62758 1.09876C7.74088 1.03404 7.8691 1 7.99958 1C8.13006 1 8.25828 1.03404 8.37158 1.09876L13.6216 4.09876C13.7363 4.16438 13.8316 4.25915 13.8979 4.37347C13.9642 4.48779 13.9992 4.6176 13.9992 4.74976C13.9992 4.88191 13.9642 5.01172 13.8979 5.12604C13.8316 5.24036 13.7363 5.33513 13.6216 5.40076L8.37158 8.40076C8.25828 8.46548 8.13006 8.49952 7.99958 8.49952C7.8691 8.49952 7.74088 8.46548 7.62758 8.40076L2.37758 5.40076C2.26287 5.33513 2.16753 5.24036 2.10123 5.12604C2.03492 5.01172 2 4.88191 2 4.74976C2 4.6176 2.03492 4.48779 2.10123 4.37347C2.16753 4.25915 2.26287 4.16438 2.37758 4.09876L7.62758 1.09876Z" />
    //     <path d="M2.56958 7.23928L2.37758 7.34928C2.26287 7.41491 2.16753 7.50968 2.10123 7.624C2.03492 7.73831 2 7.86813 2 8.00028C2 8.13244 2.03492 8.26225 2.10123 8.37657C2.16753 8.49089 2.26287 8.58566 2.37758 8.65128L7.62758 11.6513C7.74088 11.716 7.8691 11.75 7.99958 11.75C8.13006 11.75 8.25828 11.716 8.37158 11.6513L13.6216 8.65128C13.7365 8.58573 13.8321 8.49093 13.8986 8.3765C13.965 8.26208 14 8.13211 14 7.99978C14 7.86745 13.965 7.73748 13.8986 7.62306C13.8321 7.50864 13.7365 7.41384 13.6216 7.34828L13.4296 7.23828L9.11558 9.70328C8.77568 9.89744 8.39102 9.99956 7.99958 9.99956C7.60814 9.99956 7.22347 9.89744 6.88358 9.70328L2.56958 7.23928Z" />
    //     <path d="M2.37845 10.5993L2.57045 10.4893L6.88445 12.9533C7.22435 13.1474 7.60901 13.2496 8.00045 13.2496C8.39189 13.2496 8.77656 13.1474 9.11645 12.9533L13.4305 10.4883L13.6225 10.5983C13.7374 10.6638 13.833 10.7586 13.8994 10.8731C13.9659 10.9875 14.0009 11.1175 14.0009 11.2498C14.0009 11.3821 13.9659 11.5121 13.8994 11.6265C13.833 11.7409 13.7374 11.8357 13.6225 11.9013L8.37245 14.9013C8.25915 14.966 8.13093 15 8.00045 15C7.86997 15 7.74175 14.966 7.62845 14.9013L2.37845 11.9013C2.2635 11.8357 2.16795 11.7409 2.10148 11.6265C2.03501 11.5121 2 11.3821 2 11.2498C2 11.1175 2.03501 10.9875 2.10148 10.8731C2.16795 10.7586 2.2635 10.6638 2.37845 10.5983V10.5993Z" />
    //   </svg>
    // ),
    // badge: "Our Services",
    title: "We Are Great At",
        description:
      /*"We are a crative studio for modern brands, that helps buisniesses."*/
      "We elevate your brand, streamline your business, and enhance your digital presence, all in one place.",

},

  b2: {
    // badgeIcon: (
    //   <svg
    //     width="16"
    //     height="16"
    //     viewBox="0 0 16 16"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //     className="dark:fill-white fill-[#364153]"
    //   >
    //     <path d="M7.62758 1.09876C7.74088 1.03404 7.8691 1 7.99958 1C8.13006 1 8.25828 1.03404 8.37158 1.09876L13.6216 4.09876C13.7363 4.16438 13.8316 4.25915 13.8979 4.37347C13.9642 4.48779 13.9992 4.6176 13.9992 4.74976C13.9992 4.88191 13.9642 5.01172 13.8979 5.12604C13.8316 5.24036 13.7363 5.33513 13.6216 5.40076L8.37158 8.40076C8.25828 8.46548 8.13006 8.49952 7.99958 8.49952C7.8691 8.49952 7.74088 8.46548 7.62758 8.40076L2.37758 5.40076C2.26287 5.33513 2.16753 5.24036 2.10123 5.12604C2.03492 5.01172 2 4.88191 2 4.74976C2 4.6176 2.03492 4.48779 2.10123 4.37347C2.16753 4.25915 2.26287 4.16438 2.37758 4.09876L7.62758 1.09876Z" />
    //     <path d="M2.56958 7.23928L2.37758 7.34928C2.26287 7.41491 2.16753 7.50968 2.10123 7.624C2.03492 7.73831 2 7.86813 2 8.00028C2 8.13244 2.03492 8.26225 2.10123 8.37657C2.16753 8.49089 2.26287 8.58566 2.37758 8.65128L7.62758 11.6513C7.74088 11.716 7.8691 11.75 7.99958 11.75C8.13006 11.75 8.25828 11.716 8.37158 11.6513L13.6216 8.65128C13.7365 8.58573 13.8321 8.49093 13.8986 8.3765C13.965 8.26208 14 8.13211 14 7.99978C14 7.86745 13.965 7.73748 13.8986 7.62306C13.8321 7.50864 13.7365 7.41384 13.6216 7.34828L13.4296 7.23828L9.11558 9.70328C8.77568 9.89744 8.39102 9.99956 7.99958 9.99956C7.60814 9.99956 7.22347 9.89744 6.88358 9.70328L2.56958 7.23928Z" />
    //     <path d="M2.37845 10.5993L2.57045 10.4893L6.88445 12.9533C7.22435 13.1474 7.60901 13.2496 8.00045 13.2496C8.39189 13.2496 8.77656 13.1474 9.11645 12.9533L13.4305 10.4883L13.6225 10.5983C13.7374 10.6638 13.833 10.7586 13.8994 10.8731C13.9659 10.9875 14.0009 11.1175 14.0009 11.2498C14.0009 11.3821 13.9659 11.5121 13.8994 11.6265C13.833 11.7409 13.7374 11.8357 13.6225 11.9013L8.37245 14.9013C8.25915 14.966 8.13093 15 8.00045 15C7.86997 15 7.74175 14.966 7.62845 14.9013L2.37845 11.9013C2.2635 11.8357 2.16795 11.7409 2.10148 11.6265C2.03501 11.5121 2 11.3821 2 11.2498C2 11.1175 2.03501 10.9875 2.10148 10.8731C2.16795 10.7586 2.2635 10.6638 2.37845 10.5983V10.5993Z" />
    //   </svg>
    // ),
    // badge: "Our Services",
    title: "Benefits",
        description:
      /*"We are a crative studio for modern brands, that helps buisniesses."*/
      "Because Your Success Matters",

},

  hero3: {
    // badgeIcon: (
    //   <svg
    //     width="16"
    //     height="16"
    //     viewBox="0 0 16 16"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //     className="dark:fill-white fill-[#364153]"
    //   >
    //     <path d="M7.62758 1.09876C7.74088 1.03404 7.8691 1 7.99958 1C8.13006 1 8.25828 1.03404 8.37158 1.09876L13.6216 4.09876C13.7363 4.16438 13.8316 4.25915 13.8979 4.37347C13.9642 4.48779 13.9992 4.6176 13.9992 4.74976C13.9992 4.88191 13.9642 5.01172 13.8979 5.12604C13.8316 5.24036 13.7363 5.33513 13.6216 5.40076L8.37158 8.40076C8.25828 8.46548 8.13006 8.49952 7.99958 8.49952C7.8691 8.49952 7.74088 8.46548 7.62758 8.40076L2.37758 5.40076C2.26287 5.33513 2.16753 5.24036 2.10123 5.12604C2.03492 5.01172 2 4.88191 2 4.74976C2 4.6176 2.03492 4.48779 2.10123 4.37347C2.16753 4.25915 2.26287 4.16438 2.37758 4.09876L7.62758 1.09876Z" />
    //     <path d="M2.56958 7.23928L2.37758 7.34928C2.26287 7.41491 2.16753 7.50968 2.10123 7.624C2.03492 7.73831 2 7.86813 2 8.00028C2 8.13244 2.03492 8.26225 2.10123 8.37657C2.16753 8.49089 2.26287 8.58566 2.37758 8.65128L7.62758 11.6513C7.74088 11.716 7.8691 11.75 7.99958 11.75C8.13006 11.75 8.25828 11.716 8.37158 11.6513L13.6216 8.65128C13.7365 8.58573 13.8321 8.49093 13.8986 8.3765C13.965 8.26208 14 8.13211 14 7.99978C14 7.86745 13.965 7.73748 13.8986 7.62306C13.8321 7.50864 13.7365 7.41384 13.6216 7.34828L13.4296 7.23828L9.11558 9.70328C8.77568 9.89744 8.39102 9.99956 7.99958 9.99956C7.60814 9.99956 7.22347 9.89744 6.88358 9.70328L2.56958 7.23928Z" />
    //     <path d="M2.37845 10.5993L2.57045 10.4893L6.88445 12.9533C7.22435 13.1474 7.60901 13.2496 8.00045 13.2496C8.39189 13.2496 8.77656 13.1474 9.11645 12.9533L13.4305 10.4883L13.6225 10.5983C13.7374 10.6638 13.833 10.7586 13.8994 10.8731C13.9659 10.9875 14.0009 11.1175 14.0009 11.2498C14.0009 11.3821 13.9659 11.5121 13.8994 11.6265C13.833 11.7409 13.7374 11.8357 13.6225 11.9013L8.37245 14.9013C8.25915 14.966 8.13093 15 8.00045 15C7.86997 15 7.74175 14.966 7.62845 14.9013L2.37845 11.9013C2.2635 11.8357 2.16795 11.7409 2.10148 11.6265C2.03501 11.5121 2 11.3821 2 11.2498C2 11.1175 2.03501 10.9875 2.10148 10.8731C2.16795 10.7586 2.2635 10.6638 2.37845 10.5983V10.5993Z" />
    //   </svg>
    // ),
    // badge: "Our Services",
    title: "HOW WE WORK",
        description:
      /*"We are a crative studio for modern brands, that helps buisniesses."*/
      "A simple, structured process designed to create clarity, momentum, and results.",

},

howWeWork: {
  title: "HOW WE WORK",
  description:
    "A simple, structured process designed to create clarity, momentum, and results.",
  items: [
    {
      id: "01",
      // content: <Loader size={120}/>,
         content: <RadarLoader size={240} duration="4s" />,
      title: "Discovery Phase",
      description:
        "Understanding your brand, goals, audience, and challenges to define clear direction.",
    },
    {
      id: "02",
      content: <SquarePathLoader color="#7A0000" square={22} offset={26} duration="2.4s" />,
      title: "Project Kickoff",
      description:
        "Aligning on scope, timelines, and milestones before focused execution begins.",
    },
    {
      id: "03",  
      content: <RippleLogoLoader size={220} />,    
      title: "Design & Refine",
      description:
        "Creating, testing, and refining through intentional iterations and feedback.",
    },
    {
      id: "04",
      // content: <SpeederLoader scale={1.5}/>,
      content: <RocketLoader scale={0.9 } />,
      title: "Launch & Grow",
      description:
        "Launching with confidence and supporting long-term growth and optimization.",
    },
  ],
},


  servicehero: {
    badgeIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-[#364153]"
      >
        <path d="M7.62758 1.09876C7.74088 1.03404 7.8691 1 7.99958 1C8.13006 1 8.25828 1.03404 8.37158 1.09876L13.6216 4.09876C13.7363 4.16438 13.8316 4.25915 13.8979 4.37347C13.9642 4.48779 13.9992 4.6176 13.9992 4.74976C13.9992 4.88191 13.9642 5.01172 13.8979 5.12604C13.8316 5.24036 13.7363 5.33513 13.6216 5.40076L8.37158 8.40076C8.25828 8.46548 8.13006 8.49952 7.99958 8.49952C7.8691 8.49952 7.74088 8.46548 7.62758 8.40076L2.37758 5.40076C2.26287 5.33513 2.16753 5.24036 2.10123 5.12604C2.03492 5.01172 2 4.88191 2 4.74976C2 4.6176 2.03492 4.48779 2.10123 4.37347C2.16753 4.25915 2.26287 4.16438 2.37758 4.09876L7.62758 1.09876Z" />
        <path d="M2.56958 7.23928L2.37758 7.34928C2.26287 7.41491 2.16753 7.50968 2.10123 7.624C2.03492 7.73831 2 7.86813 2 8.00028C2 8.13244 2.03492 8.26225 2.10123 8.37657C2.16753 8.49089 2.26287 8.58566 2.37758 8.65128L7.62758 11.6513C7.74088 11.716 7.8691 11.75 7.99958 11.75C8.13006 11.75 8.25828 11.716 8.37158 11.6513L13.6216 8.65128C13.7365 8.58573 13.8321 8.49093 13.8986 8.3765C13.965 8.26208 14 8.13211 14 7.99978C14 7.86745 13.965 7.73748 13.8986 7.62306C13.8321 7.50864 13.7365 7.41384 13.6216 7.34828L13.4296 7.23828L9.11558 9.70328C8.77568 9.89744 8.39102 9.99956 7.99958 9.99956C7.60814 9.99956 7.22347 9.89744 6.88358 9.70328L2.56958 7.23928Z" />
        <path d="M2.37845 10.5993L2.57045 10.4893L6.88445 12.9533C7.22435 13.1474 7.60901 13.2496 8.00045 13.2496C8.39189 13.2496 8.77656 13.1474 9.11645 12.9533L13.4305 10.4883L13.6225 10.5983C13.7374 10.6638 13.833 10.7586 13.8994 10.8731C13.9659 10.9875 14.0009 11.1175 14.0009 11.2498C14.0009 11.3821 13.9659 11.5121 13.8994 11.6265C13.833 11.7409 13.7374 11.8357 13.6225 11.9013L8.37245 14.9013C8.25915 14.966 8.13093 15 8.00045 15C7.86997 15 7.74175 14.966 7.62845 14.9013L2.37845 11.9013C2.2635 11.8357 2.16795 11.7409 2.10148 11.6265C2.03501 11.5121 2 11.3821 2 11.2498C2 11.1175 2.03501 10.9875 2.10148 10.8731C2.16795 10.7586 2.2635 10.6638 2.37845 10.5983V10.5993Z" />
      </svg>
    ),
    badge: "Services",
    title: "Strategy, Design, Performance",
    description:
      "We craft design systems that spark attention, connects emotionally and delivers results visually and strategically.",
  },

    benefits1: {
        label: "Benefits",
        title: "Because Your",
        subtitle: "Success Matters",
        items: [
          {
            id: "01",
            title: "Convert Focused",
            description:
              "Speed means nothing without conversions. Our integrated design, development, and copy work together to drive revenue, not just win design awards.",
            icon: "ðŸ“Š",
          },
          {
            id: "02",
            title: "Quick Launch Or Retainer",
            description:
              "Scale up for major launches or down for maintenance. Whether it's a quick landing page or complete rebrand, we adapt to your business needs.",
            icon: "ðŸ§©",
          },
          {
            id: "03",
            title: "Real-Time Collaboration",
            description:
              "Daily check-ins and rapid iterations keep projects moving. You're always in the loop with feedback cycles that eliminate delays.",
            icon: "ðŸ›°ï¸",
          },
          {
            id: "04",
            title: "Complete Creative Solution",
            description:
              "While others just do design, we handle copy too. Your entire funnel works together with cohesive messaging that actually converts.",
            icon: "ðŸ’¡",
          },
          {
            id: "05",
            title: "Transparent Pricing",
            description:
              "Fixed monthly rates or clear project fees. No surprise charges, no scope creep. You know exactly what you're investing.",
            icon: "ðŸ’³",
          },
          {
            id: "06",
            title: "Real Human Connection",
            description:
              "Bi-weekly video calls keep us aligned on your vision. Real conversations with real people, not just project management tools.",
            icon: "ðŸ¤",
          },
        ],
      },

  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        name: "Company 1",
        logo: (
          <svg
            width="110"
            height="31"
            viewBox="0 0 110 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M34.5469 14.5155C34.5469 19.4338 37.7054 22.8631 42.0822 22.8631C46.4591 22.8631 49.6176 19.4338 49.6176 14.5155C49.6176 9.59721 46.4591 6.16797 42.0822 6.16797C37.7054 6.16797 34.5469 9.59721 34.5469 14.5155ZM46.7298 14.5155C46.7298 18.035 44.8121 20.3137 42.0822 20.3137C39.3524 20.3137 37.4347 18.035 37.4347 14.5155C37.4347 10.996 39.3524 8.71736 42.0822 8.71736C44.8121 8.71736 46.7298 10.996 46.7298 14.5155Z" />
            <path d="M57.7468 22.8652C61.0633 22.8652 62.9584 20.0676 62.9584 16.706C62.9584 13.3444 61.0633 10.5469 57.7468 10.5469C56.2127 10.5469 55.0846 11.156 54.3401 12.0359V10.7725H51.6328V26.678H54.3401V21.3761C55.0846 22.256 56.2127 22.8652 57.7468 22.8652ZM54.2724 16.3676C54.2724 14.1341 55.5359 12.9158 57.2054 12.9158C59.1682 12.9158 60.2285 14.4499 60.2285 16.706C60.2285 18.9621 59.1682 20.4963 57.2054 20.4963C55.5359 20.4963 54.2724 19.2554 54.2724 17.067V16.3676Z" />
            <path d="M70.2843 22.8652C72.6532 22.8652 74.5258 21.6243 75.3605 19.5487L73.0367 18.6688C72.6758 19.8871 71.6154 20.5639 70.2843 20.5639C68.5471 20.5639 67.3288 19.3231 67.1258 17.2926H75.4282V16.3902C75.4282 13.1414 73.6008 10.5469 70.1715 10.5469C66.7422 10.5469 64.5312 13.2316 64.5312 16.706C64.5312 20.3609 66.9002 22.8652 70.2843 22.8652ZM70.1489 12.8255C71.8636 12.8255 72.6758 13.9536 72.6983 15.2621H67.2611C67.6672 13.6603 68.7501 12.8255 70.1489 12.8255Z" />
            <path d="M77.4609 22.617H80.1683V15.6682C80.1683 13.9761 81.4091 13.0737 82.6274 13.0737C84.1164 13.0737 84.703 14.1341 84.703 15.6005V22.617H87.4103V14.8109C87.4103 12.2615 85.9213 10.5469 83.4396 10.5469C81.9054 10.5469 80.8451 11.2463 80.1683 12.0359V10.7725H77.4609V22.617Z" />
            <path d="M95.3397 6.41797L89.2031 22.6167H92.0684L93.4446 18.9167H100.438L101.837 22.6167H104.748L98.611 6.41797H95.3397ZM96.919 9.62163L99.4909 16.3899H94.3921L96.919 9.62163Z" />
            <path d="M109.396 6.46484H106.508V22.6636H109.396V6.46484Z" />
            <path d="M27.9278 12.3665C28.6102 10.3182 28.3752 8.07433 27.2838 6.21115C25.6425 3.35343 22.343 1.88321 19.1205 2.57508C17.687 0.960086 15.6273 0.0416664 13.4681 0.054827C10.1742 0.0473067 7.25158 2.16804 6.2382 5.30213C4.12219 5.73551 2.29568 7.06002 1.22685 8.93727C-0.426682 11.7875 -0.0497272 15.3803 2.15937 17.8244C1.4769 19.8728 1.71191 22.1166 2.8033 23.9798C4.4446 26.8375 7.74416 28.3078 10.9666 27.6159C12.3992 29.2309 14.4598 30.1494 16.6191 30.1352C19.9149 30.1437 22.8384 28.021 23.8518 24.8841C25.9678 24.4508 27.7943 23.1263 28.8631 21.249C30.5148 18.3988 30.137 14.8088 27.9287 12.3646L27.9278 12.3665ZM16.621 28.1696C15.3021 28.1714 14.0246 27.7099 13.0121 26.8648C13.0582 26.8403 13.1381 26.7962 13.1898 26.7642L19.1797 23.3049C19.4862 23.131 19.6742 22.8048 19.6723 22.4522V14.0078L22.2038 15.4696C22.2311 15.4828 22.249 15.5091 22.2527 15.5392V22.5321C22.249 25.6418 19.7306 28.163 16.621 28.1696ZM4.50945 22.9965C3.84863 21.8553 3.61081 20.5176 3.83735 19.2194C3.88154 19.2457 3.95954 19.2937 4.01501 19.3257L10.0049 22.785C10.3086 22.9627 10.6846 22.9627 10.9892 22.785L18.3018 18.5624V21.4859C18.3036 21.5159 18.2895 21.5451 18.266 21.5639L12.2112 25.0599C9.51423 26.6129 6.06995 25.6897 4.51042 22.9965H4.50945ZM2.93302 9.9215C3.59104 8.77841 4.62981 7.90416 5.8669 7.45014C5.8669 7.50182 5.86408 7.59303 5.86408 7.65695V14.5766C5.86218 14.9281 6.05019 15.2543 6.35572 15.4282L13.6683 19.65L11.1368 21.1117C11.1114 21.1287 11.0794 21.1315 11.0512 21.1193L4.99548 17.6204C2.30413 16.0618 1.38101 12.6185 2.93208 9.92243L2.93302 9.9215ZM23.7324 14.7618L16.4198 10.5391L18.9513 9.07829C18.9767 9.06136 19.0087 9.05853 19.0369 9.07077L25.0926 12.5668C27.7887 14.1244 28.7127 17.5734 27.155 20.2695C26.4961 21.4107 25.4583 22.2849 24.2221 22.7399V15.6134C24.2249 15.2619 24.0379 14.9366 23.7333 14.7618H23.7324ZM26.2517 10.9697C26.2075 10.9424 26.1295 10.8954 26.074 10.8634L20.0841 7.40406C19.7804 7.2264 19.4044 7.2264 19.0998 7.40406L11.7873 11.6267V8.70321C11.7854 8.67313 11.7995 8.64398 11.823 8.62518L17.8778 5.13199C20.5748 3.57621 24.0228 4.50217 25.5777 7.20008C26.2347 8.33941 26.4726 9.67333 26.2498 10.9697H26.2517ZM10.411 16.1803L7.87856 14.7185C7.85131 14.7054 7.83347 14.679 7.82971 14.649V7.65599C7.83157 4.54257 10.3575 2.01951 13.4709 2.02139C14.7879 2.02139 16.0626 2.48389 17.075 3.32618C17.0289 3.3506 16.95 3.39479 16.8973 3.42677L10.9074 6.88612C10.6009 7.06002 10.4129 7.38526 10.4148 7.73778L10.411 16.1784V16.1803ZM11.7863 13.2154L15.0436 11.3344L18.3008 13.2145V16.9756L15.0436 18.8556L11.7863 16.9756V13.2154Z" />
          </svg>
        ),
      },
      {
        id: 2,
        name: "Company 2",
        logo: (
          <svg
            width="113"
            height="25"
            viewBox="0 0 113 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M0.75 2.69908C0.75 1.48458 1.73458 0.5 2.94908 0.5H11.551C12.7655 0.5 13.75 1.48458 13.75 2.69908V4.4005C13.75 5.00775 13.2577 5.50004 12.6505 5.50004H1.84954C1.24229 5.50004 0.75 5.00775 0.75 4.4005V2.69908Z" />
            <path d="M0.75 9.59954C0.75 8.99224 1.24229 8.5 1.84954 8.5H22.551C23.7655 8.5 24.7501 9.48453 24.7501 10.6991V16.4005C24.7501 17.0077 24.2578 17.5 23.6506 17.5H2.94908C1.73458 17.5 0.75 16.5154 0.75 15.3009V9.59954Z" />
            <path d="M11.75 21.5995C11.75 20.9923 12.2423 20.5 12.8495 20.5H23.6505C24.2577 20.5 24.75 20.9923 24.75 21.5995V22.3009C24.75 23.5154 23.7654 24.5 22.5509 24.5H13.9491C12.7346 24.5 11.75 23.5154 11.75 22.3009V21.5995Z" />
            <path d="M38.3455 15.241H40.6572L44.9499 22.2582H50.2059L45.4452 14.7456C48.0872 13.8375 49.628 11.8012 49.628 8.85671C49.628 4.72899 46.7389 2.5 42.0881 2.5H33.75V22.2582H38.3455V15.241ZM38.3455 11.4985V6.38009H41.8404C44.0144 6.38009 45.115 7.31571 45.115 8.93927C45.115 10.5353 44.0144 11.4985 41.8404 11.4985H38.3455Z" />
            <path d="M58.113 22.5607C61.0026 22.5607 63.6446 21.1023 64.7178 18.3229L61.0305 17.1396C60.6177 18.4055 59.5444 19.0659 58.1682 19.0659C56.4896 19.0659 55.3064 17.9377 55.0036 15.9563H64.8278V14.8006C64.8278 10.7002 62.4335 7.45312 58.0309 7.45312C53.8477 7.45312 50.7656 10.7002 50.7656 14.9932C50.7656 19.5062 53.7378 22.5607 58.113 22.5607ZM57.9757 10.8655C59.5991 10.8655 60.4525 11.9662 60.4799 13.2595H55.1413C55.5815 11.6635 56.6274 10.8655 57.9757 10.8655Z" />
            <path d="M67.3281 18.378C67.3281 21.35 68.8967 22.3957 72.0335 22.3957C73.0794 22.3957 73.9051 22.3133 74.6755 22.2031V18.5982C74.1801 18.6532 73.9324 18.6807 73.4097 18.6807C72.309 18.6807 71.6759 18.4606 71.6759 17.2498V11.3884H74.5103V7.75595H71.6759V3.73828H67.3281V7.75595H65.4844V11.3884H67.3281V18.378Z" />
            <path d="M90.4203 15.0207C90.4203 10.5077 87.4212 7.45312 83.1555 7.45312C78.8628 7.45312 75.8906 10.5077 75.8906 15.0207C75.8906 19.5337 78.8628 22.5607 83.1555 22.5607C87.4212 22.5607 90.4203 19.5337 90.4203 15.0207ZM80.2663 15.0207C80.2663 12.489 81.3943 11.0581 83.1555 11.0581C84.9171 11.0581 86.0451 12.489 86.0451 15.0207C86.0451 17.5524 84.9171 18.9833 83.1555 18.9833C81.3943 18.9833 80.2663 17.5524 80.2663 15.0207Z" />
            <path d="M106.28 15.0207C106.28 10.5077 103.281 7.45312 99.0148 7.45312C94.7222 7.45312 91.75 10.5077 91.75 15.0207C91.75 19.5337 94.7222 22.5607 99.0148 22.5607C103.281 22.5607 106.28 19.5337 106.28 15.0207ZM96.1257 15.0207C96.1257 12.489 97.2537 11.0581 99.0148 11.0581C100.776 11.0581 101.904 12.489 101.904 15.0207C101.904 17.5524 100.776 18.9833 99.0148 18.9833C97.2537 18.9833 96.1257 17.5524 96.1257 15.0207Z" />
            <path d="M112.747 2.5H108.344V22.2582H112.747V2.5Z" />
          </svg>
        ),
      },
      {
        id: 3,
        name: "Company 3",
        logo: (
          <svg
            width="73"
            height="31"
            viewBox="0 0 73 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M72.2313 15.5944C72.2313 10.4676 69.7478 6.4222 65.0013 6.4222C60.2348 6.4222 57.3508 10.4676 57.3508 15.5543C57.3508 21.5824 60.7558 24.6264 65.6423 24.6264C68.0253 24.6264 69.8278 24.0857 71.1898 23.3247V19.3194C69.8278 20.0003 68.2658 20.4209 66.2833 20.4209C64.3403 20.4209 62.6183 19.74 62.3978 17.3768H72.1913C72.1913 17.1165 72.2313 16.0751 72.2313 15.5944ZM62.3378 13.6919C62.3378 11.4289 63.7198 10.4876 64.9813 10.4876C66.2028 10.4876 67.5048 11.4289 67.5048 13.6919H62.3378ZM49.6203 6.4222C47.6578 6.4222 46.3958 7.3434 45.6948 7.98425L45.4348 6.7426H41.0288V30.0938L46.0353 29.0323L46.0553 23.3648C46.7763 23.8855 47.8378 24.6264 49.6003 24.6264C53.1853 24.6264 56.4498 21.7426 56.4498 15.3941C56.4298 9.5864 53.1253 6.4222 49.6203 6.4222ZM48.4188 20.2206C47.2373 20.2206 46.5363 19.8001 46.0553 19.2794L46.0353 11.8494C46.5563 11.2687 47.2773 10.8681 48.4188 10.8681C50.2413 10.8681 51.5028 12.9108 51.5028 15.5343C51.5028 18.2179 50.2613 20.2206 48.4188 20.2206ZM34.1393 5.2406L39.1663 4.15915V0.09375L34.1393 1.15515V5.2406ZM34.1393 6.76265H39.1663V24.286H34.1393V6.76265ZM28.7518 8.2446L28.4313 6.76265H24.1053V24.286H29.1123V12.4102C30.2938 10.8681 32.2968 11.1485 32.9178 11.3688V6.76265C32.2768 6.5223 29.9333 6.08175 28.7518 8.2446ZM18.7383 2.41685L13.8513 3.45825L13.8313 19.4996C13.8313 22.4636 16.0543 24.6465 19.0188 24.6465C20.6608 24.6465 21.8623 24.3461 22.5233 23.9856V19.9202C21.8823 20.1805 18.7183 21.1017 18.7183 18.1378V11.0284H22.5233V6.76265H18.7183L18.7383 2.41685ZM5.19971 11.8494C5.19971 11.0684 5.84061 10.768 6.90206 10.768C8.42411 10.768 10.3468 11.2286 11.8688 12.0497V7.3434C10.2066 6.68255 8.56431 6.4222 6.90206 6.4222C2.83651 6.4222 0.132812 8.545 0.132812 12.0898C0.132812 17.6171 7.74321 16.736 7.74321 19.1191C7.74321 20.0403 6.94211 20.3407 5.82056 20.3407C4.15831 20.3407 2.03541 19.6598 0.353111 18.7386V23.505C2.21566 24.3061 4.09821 24.6465 5.82056 24.6465C9.98626 24.6465 12.8503 22.5837 12.8503 18.9989C12.8303 13.031 5.19971 14.0924 5.19971 11.8494Z"
            />
          </svg>
        ),
      },
      {
        id: 4,
        name: "Company 4",
        logo: (
          <svg
            width="96"
            height="23"
            viewBox="0 0 96 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M53.6896 0.965339H59.5709L56.6122 22.0721H50.7313L53.6896 0.965339ZM46.2752 0.965339L42.3065 13.1242L40.5746 0.965339H36.4617L31.2658 13.0881L30.6168 0.965339H24.9158L26.9005 22.0721H31.6268L37.4717 8.72251L39.5286 22.0721H44.1827L51.8677 0.965339H46.2752ZM95.6509 13.2324H81.6879C81.76 15.9747 83.4016 17.7786 85.8191 17.7786C87.641 17.7786 89.0845 16.8044 90.203 14.9463L94.9167 17.0895C93.2968 20.2807 89.8833 22.3606 85.6749 22.3606C79.9382 22.3606 76.1315 18.5001 76.1315 12.2945C76.1315 5.47532 80.6054 0.640625 86.9194 0.640625C92.4758 0.640625 95.9754 4.39293 95.9754 10.2378C95.9754 11.2121 95.8672 12.1862 95.6509 13.2324ZM90.4194 9.19153C90.4194 6.73812 89.0484 5.18671 86.8473 5.18671C84.6466 5.18671 82.6979 6.81028 82.1932 9.19153H90.4194ZM6.53496 7.32622L0.53125 14.342H11.2506L12.4557 11.0334H7.8627L10.6697 7.78807L10.6787 7.70145L8.85309 4.56074H17.0631L10.6986 22.0721H15.0536L22.7386 0.965339H2.88366L6.53314 7.32622H6.53496ZM69.132 5.18671C71.2067 5.18671 73.0251 6.30155 74.6124 8.21378L75.446 2.26424C73.9665 1.26303 71.9643 0.640625 69.3123 0.640625C64.0448 0.640625 61.0861 3.72547 61.0861 7.64011C61.0861 10.3552 62.6017 12.0148 65.0912 13.0881L66.2819 13.6294C68.5004 14.5765 69.096 15.0455 69.096 16.0468C69.096 17.048 68.0947 17.7425 66.5704 17.7425C64.0535 17.7514 62.0153 16.4617 60.4818 14.2607L59.6322 20.324C61.3784 21.6555 63.6173 22.3606 66.5704 22.3606C71.5764 22.3606 74.6524 19.4743 74.6524 15.4694C74.6524 12.7454 73.4435 10.9956 70.3948 9.62454L69.096 9.01117C67.2919 8.20839 66.6786 7.76639 66.6786 6.88243C66.6786 5.92632 67.5174 5.18671 69.132 5.18671Z" />
          </svg>
        ),
      },
      {
        id: 5,
        name: "Company 5",
        logo: (
          <svg
            width="99"
            height="31"
            viewBox="0 0 99 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M38.0781 26.5517V4.44531H42.0332V26.5517H38.0781Z" />
            <path d="M76.0156 11.5289H79.7927V13.3616C80.5953 11.8961 82.4697 11.1016 84.075 11.1016C86.0686 11.1016 87.6738 11.9875 88.4172 13.6052C89.5763 11.7725 91.124 11.1016 93.0571 11.1016C95.763 11.1016 98.3503 12.7811 98.3503 16.811V26.5515H94.5139V17.6361C94.5139 16.0175 93.7402 14.7965 91.926 14.7965C90.2305 14.7965 89.2189 16.1402 89.2189 17.7588V26.5525H85.2946V17.6361C85.2946 16.0175 84.4919 14.7965 82.7067 14.7965C80.9813 14.7965 79.9698 16.1097 79.9698 17.7588V26.5525H76.0156V11.5289Z" />
            <path d="M50.971 26.9864C46.5155 26.9864 43.2891 23.5951 43.2891 19.0402C43.2891 14.5579 46.5052 11.0859 50.971 11.0859C55.459 11.0859 58.6533 14.5901 58.6533 19.0402C58.6533 23.562 55.425 26.9864 50.971 26.9864ZM50.971 14.763C48.6732 14.763 46.8038 16.6816 46.8038 19.0412C46.8038 21.4006 48.6732 23.3193 50.971 23.3193C53.2691 23.3193 55.1376 21.4006 55.1376 19.0412C55.1376 16.6816 53.2691 14.763 50.971 14.763Z" />
            <path d="M67.1041 26.9864C62.6483 26.9864 59.4219 23.5951 59.4219 19.0402C59.4219 14.5579 62.638 11.0859 67.1041 11.0859C71.5918 11.0859 74.7861 14.5901 74.7861 19.0402C74.7861 23.562 71.5561 26.9864 67.1041 26.9864ZM67.1041 14.7119C64.7797 14.7119 62.8885 16.6539 62.8885 19.0393C62.8885 21.4248 64.7797 23.3667 67.1041 23.3667C69.4282 23.3667 71.3194 21.4248 71.3194 19.0393C71.3185 16.6539 69.4273 14.7119 67.1041 14.7119Z" />
            <path d="M30.1043 13.8198H21.4933L28.9509 9.40149L27.3131 6.48975L19.8556 10.9081L24.1602 3.25587L21.3228 1.57426L17.0181 9.22646V0.390625H13.7425V9.22731L9.43615 1.57426L6.59959 3.25502L10.9051 10.9072L3.44749 6.48975L1.80966 9.40064L9.26724 13.819H0.65625V17.1805H9.26641L1.80966 21.5989L3.44749 24.5106L10.9043 20.0931L6.59876 27.7453L9.43615 29.426L13.7416 21.7731V30.6097H17.0173V21.7739L21.322 29.426L24.1593 27.7453L19.8539 20.0923L27.3114 24.5106L28.9493 21.5989L21.4925 17.1813H30.1026V13.8198H30.1043ZM15.3803 20.0719C12.9104 20.0719 10.9084 18.0176 10.9084 15.4828C10.9084 12.9482 12.9104 10.8937 15.3803 10.8937C17.8502 10.8937 19.8521 12.9482 19.8521 15.4828C19.8521 18.0176 17.8502 20.0719 15.3803 20.0719Z" />
          </svg>
        ),
      },
      {
        id: 6,
        name: "Company 6",
        logo: (
          <svg
            width="132"
            height="21"
            viewBox="0 0 132 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M62.1915 1.56344L62.1641 1.56944C61.1444 1.79968 60.627 2.14298 60.627 3.3812H60.6224L60.627 18.2354C60.714 19.2134 61.2396 19.5153 62.1641 19.7239L62.1915 19.7302V19.9404H55.0749V19.7302L55.1023 19.7239C56.0258 19.5153 56.5392 19.2134 56.6262 18.2354V3.78459L49.767 19.907H49.3889L42.7236 4.22197V17.8774C42.7236 19.1156 43.2415 19.4589 44.2617 19.6892L44.2886 19.6952V19.907H40.2031V19.6945L40.2299 19.6884C41.25 19.4583 41.7701 19.1149 41.7701 17.8767V3.3812C41.7701 2.14298 41.2521 1.79968 40.2319 1.56944L40.2051 1.56344V1.35156H46.2267L51.415 13.5466L56.6038 1.35156H62.1915V1.56344Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M73.6869 11.9082H65.346L65.345 11.9089C65.1832 14.7676 66.9661 17.1276 69.2933 17.3017C70.9984 17.4292 72.4968 16.3842 73.3307 14.6598L73.5704 14.7442C73.0957 17.9527 71.1917 20.343 67.9221 20.343C64.1966 20.343 62.0993 17.24 62.0093 13.3573C62.0067 13.2072 62.0077 13.058 62.0108 12.9098C62.0128 12.8174 62.0164 12.7253 62.021 12.6336C62.0235 12.5845 62.026 12.5385 62.0296 12.4871C62.0332 12.4357 62.0367 12.3843 62.0413 12.3329C62.1751 10.6186 62.7272 9.09318 63.6379 7.96441C64.2037 7.26377 64.884 6.72991 65.6549 6.37292C66.3321 6.03191 67.2841 5.84375 68.06 5.84375H68.0936C69.589 5.84375 71.0126 6.34957 71.9742 7.26875C73.0865 8.33244 73.6635 9.8816 73.6869 11.8732V11.9082ZM68.0376 6.65751C66.4679 6.68987 65.5327 8.56971 65.4162 11.1742H70.1802C70.229 9.14122 69.9141 7.78093 69.243 7.12995C68.9275 6.82435 68.5215 6.66555 68.0376 6.65751Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M87.1166 17.8132C87.1166 19.1145 87.6346 19.4738 88.6542 19.7151L88.6812 19.7204V19.9426H83.121V17.7972C82.4844 19.3954 81.0928 20.343 79.3634 20.343C76.4077 20.343 74.4214 17.6311 74.4219 13.5962C74.4219 11.337 75.0711 9.38915 76.2999 7.96379C77.4788 6.59618 79.1136 5.84313 80.9015 5.84313C81.7833 5.84313 82.5104 6.03297 83.121 6.42298V4.04938C83.121 3.52357 82.9927 3.14984 82.7292 2.90632C82.3923 2.59532 81.8128 2.47723 80.958 2.54627L80.9198 2.54928V2.32575L87.1166 0.5V17.8132ZM81.5116 18.1759C82.2768 18.1759 82.8477 17.8189 83.121 17.17V7.60945C82.8508 6.98655 82.2845 6.62951 81.5645 6.62951C79.8463 6.62951 78.7355 8.93874 78.7355 12.5088C78.7355 14.2241 79.0164 15.6722 79.5507 16.6965C80.0472 17.6508 80.7463 18.1759 81.5116 18.1759Z"
            />
            <path d="M91.7591 0.644531C93.0189 0.644531 93.9689 1.59481 93.9689 2.85465C93.9689 4.11454 93.0189 5.06476 91.7591 5.06476C90.5059 5.06476 89.5234 4.09383 89.5234 2.85465C89.5234 1.61546 90.5049 0.644531 91.7591 0.644531Z" />
            <path d="M93.8929 17.8119C93.8929 19.1132 94.4104 19.4725 95.4306 19.7137L95.4591 19.7191V19.9413H89.8937V9.62677C89.8937 8.22074 89.5645 7.80631 88.3612 7.69925L88.3281 7.69625V7.47934L93.8884 5.88281V17.8119H93.8929Z" />
            <path d="M108.142 17.8119C108.142 19.1132 108.66 19.4725 109.68 19.7137L109.706 19.7227V19.9449H104.146V17.7429C103.514 19.3284 102.079 20.3417 100.442 20.3417C98.5098 20.3417 97.2764 19.4595 96.8053 17.7725L96.7056 17.3371C96.6257 16.8988 96.587 16.454 96.5895 16.0085V9.62677C96.5895 8.22039 96.2598 7.806 95.057 7.69925L95.0234 7.69625V7.4797L100.584 5.88317V15.9034C100.584 17.3858 101.25 18.2023 102.459 18.2023C103.204 18.1763 103.819 17.7909 104.147 17.1419V9.60138C104.147 8.18904 103.863 7.75095 102.879 7.64751L102.848 7.6442V7.42663L108.142 5.88281V17.8119Z" />
            <path d="M131.286 19.7207V19.9432H125.726V10.0431C125.726 8.44255 125.157 7.66482 123.984 7.66482C123.016 7.66482 122.518 8.36649 122.271 8.95936C122.321 9.26455 122.346 9.57356 122.344 9.88292V18.1575C122.344 19.1285 122.629 19.5068 123.512 19.7144L123.539 19.721V19.9432H118.35V10.0431C118.35 8.4656 117.764 7.66482 116.608 7.66482C115.677 7.66482 115.206 8.31107 114.973 8.85663V18.1575C114.973 19.1285 115.258 19.5068 116.141 19.7144L116.168 19.721V19.9432H110.98V9.53993C110.98 8.16998 110.636 7.74353 109.448 7.63811L109.414 7.63511V7.41692L114.975 5.88578V8.21699C115.537 6.72625 116.847 5.84375 118.52 5.84375C120.424 5.84375 121.711 6.75327 122.158 8.40821C122.721 6.84638 124.185 5.84375 125.92 5.84375C128.3 5.84375 129.721 7.35383 129.721 9.88394V17.9984C129.721 18.978 130.152 19.4591 131.259 19.7144L131.286 19.7207Z" />
            <path d="M10.0364 20.5015C15.4631 20.5015 19.8622 16.0719 19.8622 10.608C19.8622 5.14408 15.4628 0.714844 10.0364 0.714844C4.61003 0.714844 0.210938 5.14276 0.210938 10.608C0.210938 16.0732 4.60973 20.5015 10.0364 20.5015Z" />
            <path d="M25.7254 19.9227C28.4386 19.9227 30.6383 15.7534 30.6383 10.6098C30.6383 5.46753 28.4386 1.29688 25.7254 1.29688C23.0122 1.29688 20.8125 5.46753 20.8125 10.6098C20.8125 15.7521 23.0122 19.9227 25.7254 19.9227Z" />
            <path d="M35.0496 10.6057C35.0496 15.2142 34.2759 18.9497 33.3217 18.9497C32.3675 18.9497 31.5938 15.2128 31.5938 10.6057C31.5938 5.99865 32.3675 2.26172 33.322 2.26172C34.2766 2.26172 35.0496 5.99763 35.0496 10.6057Z" />
          </svg>
        ),
      },
      {
        id: 7,
        name: "Company 7",
        logo: (
          <svg
            width="134"
            height="31"
            viewBox="0 0 134 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <mask
              id="mask0_342_6736"
              maskUnits="userSpaceOnUse"
              x="42"
              y="7"
              width="92"
              height="20"
            >
              <path
                d="M133.02 7.77734H42.4375V26.5404H133.02V7.77734Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_342_6736)">
              <path d="M53.9534 12.179C53.8381 12.2504 53.7006 12.2758 53.5672 12.2501C53.4343 12.2243 53.3155 12.1494 53.2353 12.0401C52.8379 11.4719 52.3053 11.0113 51.6861 10.6998C51.0663 10.3882 50.3791 10.2355 49.6856 10.2552C46.9763 10.2552 45.3095 12.3991 45.3095 15.4608C45.3095 18.5225 47.0033 20.707 49.7131 20.707C50.4172 20.7231 51.1137 20.5597 51.737 20.232C52.3603 19.9043 52.89 19.4232 53.2763 18.8341C53.3535 18.723 53.47 18.645 53.6023 18.6155C53.7345 18.586 53.8733 18.6072 53.9909 18.6749L55.2744 19.4199C55.34 19.4582 55.3973 19.5096 55.4418 19.5711C55.4863 19.6326 55.5179 19.7028 55.5337 19.7771C55.5495 19.8514 55.5501 19.9282 55.5343 20.0026C55.5191 20.077 55.488 20.1473 55.4436 20.2091C54.8144 21.1522 53.9564 21.9201 52.9491 22.4407C51.9418 22.9614 50.8193 23.2179 49.6856 23.1861C45.3738 23.1861 42.4375 20.0432 42.4375 15.4608C42.4375 10.8784 45.3738 7.77607 49.6417 7.77607C50.7561 7.74511 51.8611 7.98763 52.8601 8.4824C53.8592 8.97716 54.7219 9.70913 55.3727 10.6142C55.4172 10.6749 55.4488 10.7441 55.4658 10.8176C55.4822 10.8911 55.4839 10.9672 55.4699 11.0413C55.4558 11.1153 55.4266 11.1856 55.3844 11.2479C55.3423 11.3102 55.2873 11.3631 55.2235 11.4033L53.9534 12.179Z" />
              <path d="M63.4416 22.3742V21.751C62.7638 22.6249 61.8157 23.1668 60.2951 23.1668C58.0459 23.1668 56.4844 21.9373 56.4844 19.7799C56.4844 17.0942 58.8793 16.6336 60.3595 16.427C61.9409 16.1967 63.2958 16.0883 63.2958 15.0519C63.2958 14.1341 62.2324 13.8868 61.3346 13.8868C60.3056 13.9043 59.2943 14.1606 58.3813 14.6353C58.3175 14.6703 58.2472 14.692 58.1752 14.699C58.1027 14.7062 58.0301 14.6986 57.9604 14.6767C57.8914 14.6549 57.827 14.6193 57.772 14.572C57.717 14.5248 57.6719 14.4668 57.6397 14.4016L57.1651 13.4398C57.1024 13.3144 57.0907 13.1696 57.1323 13.0357C57.1738 12.9018 57.2657 12.7893 57.3886 12.7218C58.6657 12.0363 60.092 11.6757 61.5412 11.6719C64.1223 11.6719 65.9442 12.7319 65.9442 15.2958V22.3742C65.9442 22.518 65.8875 22.6558 65.7856 22.7574C65.6844 22.859 65.5462 22.9161 65.4028 22.9161H63.98C63.8366 22.9152 63.6997 22.8577 63.599 22.7562C63.4983 22.6547 63.4416 22.5174 63.4416 22.3742ZM63.2958 17.4802C62.7948 17.8562 61.8765 17.9815 60.898 18.1577C59.9188 18.3338 59.1093 18.5945 59.1093 19.658C59.1093 20.6368 59.8175 21.094 60.8371 21.094C62.1071 21.094 63.2958 20.3861 63.2958 18.7401V17.4802Z" />
              <path d="M68.2854 20.1116C68.3767 20.0042 68.5061 19.9367 68.6465 19.9234C68.787 19.9102 68.9269 19.9522 69.0369 20.0404C69.9412 20.7245 71.0503 21.0826 72.1834 21.0565C73.3522 21.0565 74.2161 20.6806 74.2161 19.7661C74.2161 18.933 73.423 18.7501 71.5062 18.4317C69.4741 18.093 67.5263 17.4157 67.5263 15.0991C67.5263 12.6843 69.6093 11.6648 71.9838 11.6648C73.4728 11.6423 74.9266 12.1193 76.1124 13.0195C76.1709 13.0646 76.2195 13.1211 76.2546 13.1856C76.2903 13.2501 76.3125 13.3212 76.3195 13.3946C76.3266 13.4679 76.3184 13.5419 76.2956 13.612C76.2727 13.682 76.2359 13.7467 76.1873 13.8019L75.5095 14.5978C75.42 14.7046 75.2924 14.7728 75.1537 14.7886C75.0155 14.8043 74.8763 14.7664 74.7645 14.6825C73.9375 14.074 72.9361 13.7486 71.9095 13.7545C70.8934 13.7545 70.036 14.0458 70.036 14.8349C70.036 15.7121 71.2657 15.8781 72.4953 16.0846C75.1168 16.5452 76.7831 17.2938 76.7831 19.4714C76.7831 21.7644 74.9506 23.18 72.0412 23.18C70.4504 23.2285 68.893 22.7193 67.6381 21.7406C67.5819 21.6948 67.5357 21.6382 67.5012 21.5742C67.4672 21.5102 67.4461 21.44 67.4397 21.3678C67.4333 21.2955 67.4409 21.2227 67.4631 21.1536C67.4848 21.0844 67.5199 21.0203 67.5673 20.965L68.2854 20.1116Z" />
              <path d="M78.3594 22.3732V8.58875C78.3594 8.44502 78.4162 8.30719 78.518 8.20559C78.6198 8.10394 78.7574 8.04688 78.9013 8.04688H80.4629C80.6063 8.04688 80.7444 8.10394 80.8456 8.20559C80.9475 8.30719 81.0042 8.44502 81.0042 8.58875V13.2931C81.3923 12.7737 81.8997 12.3552 82.4832 12.0729C83.0668 11.7906 83.7094 11.6526 84.3579 11.6708C86.6709 11.6708 88.0223 13.3168 88.0223 15.6672V22.3732C88.0223 22.5168 87.9655 22.6547 87.8637 22.7563C87.7619 22.8579 87.6243 22.915 87.4804 22.915H85.9188C85.7754 22.915 85.6373 22.8579 85.5361 22.7563C85.4342 22.6547 85.3774 22.5168 85.3774 22.3732V16.2769C85.3774 15.1084 85.0046 14.0483 83.504 14.0483C82.0882 14.0483 81.0042 15.0474 81.0042 16.7137V22.3732C81.0042 22.5168 80.9475 22.6547 80.8456 22.7563C80.7444 22.8579 80.6063 22.915 80.4629 22.915H78.9013C78.7574 22.915 78.6198 22.8579 78.518 22.7563C78.4162 22.6547 78.3594 22.5168 78.3594 22.3732Z" />
              <path d="M105.217 22.5479L104.086 19.2322H98.409L97.2847 22.5479C97.2484 22.6557 97.1793 22.7493 97.0868 22.8156C96.9944 22.8819 96.8832 22.9173 96.7696 22.9171H94.9406C94.8534 22.9172 94.7668 22.896 94.6895 22.8555C94.6117 22.815 94.545 22.7562 94.4952 22.6843C94.4455 22.6124 94.4133 22.5295 94.4027 22.4427C94.3916 22.3558 94.4022 22.2676 94.4326 22.1856L99.5474 8.40121C99.5877 8.30026 99.658 8.21394 99.7487 8.15348C99.8394 8.09308 99.9465 8.06136 100.055 8.06253H102.571C102.68 8.06136 102.787 8.09308 102.878 8.15348C102.969 8.21394 103.039 8.30026 103.08 8.40121L108.177 22.189C108.207 22.2708 108.217 22.3586 108.206 22.445C108.194 22.5314 108.163 22.6138 108.113 22.6853C108.063 22.7568 107.996 22.8151 107.919 22.8555C107.842 22.8959 107.756 22.917 107.669 22.9171H105.732C105.618 22.9173 105.507 22.8819 105.415 22.8156C105.322 22.7493 105.253 22.6557 105.217 22.5479ZM101.282 10.4638L99.0967 16.9225H103.384L101.282 10.4638Z" />
              <path d="M112.082 12.464V13.3174C112.467 12.7842 112.977 12.3546 113.568 12.0673C114.16 11.78 114.813 11.644 115.469 11.6714C118.471 11.6714 120.408 14.1506 120.408 17.3986C120.408 20.6465 118.471 23.1562 115.469 23.1562C114.811 23.1811 114.157 23.0418 113.565 22.751C112.974 22.46 112.465 22.0267 112.082 21.4899V25.9977C112.082 26.1414 112.026 26.2793 111.924 26.3809C111.822 26.4825 111.684 26.5396 111.54 26.5396H109.979C109.835 26.5396 109.697 26.4825 109.596 26.3809C109.494 26.2793 109.438 26.1414 109.438 25.9977V12.4504C109.438 12.3067 109.494 12.1689 109.596 12.0672C109.697 11.9656 109.835 11.9085 109.979 11.9085H111.527C111.601 11.9067 111.673 11.9198 111.742 11.947C111.81 11.9743 111.872 12.0151 111.924 12.0671C111.976 12.119 112.017 12.181 112.044 12.2492C112.071 12.3175 112.084 12.3905 112.082 12.464ZM114.914 20.8531C116.746 20.8531 117.644 19.2918 117.644 17.3986C117.644 15.5054 116.746 13.9813 114.914 13.9813C113.081 13.9813 112.082 15.502 112.082 17.3986C112.082 19.2952 113.062 20.8531 114.914 20.8531Z" />
              <path d="M124.689 12.4637V13.3172C125.073 12.7846 125.584 12.3555 126.175 12.0683C126.766 11.7811 127.419 11.6447 128.076 11.6712C131.073 11.6712 133.01 14.1504 133.01 17.3984C133.01 20.6463 131.073 23.1559 128.076 23.1559C127.417 23.1799 126.763 23.0403 126.172 22.7495C125.581 22.4587 125.071 22.0258 124.689 21.4896V25.9974C124.689 26.1412 124.631 26.279 124.53 26.3807C124.428 26.4823 124.29 26.5394 124.147 26.5394H122.589C122.445 26.5394 122.307 26.4823 122.206 26.3807C122.104 26.279 122.047 26.1412 122.047 25.9974V12.4502C122.046 12.3789 122.06 12.3082 122.087 12.2423C122.114 12.1763 122.154 12.1164 122.204 12.066C122.255 12.0156 122.315 11.9757 122.38 11.9486C122.447 11.9215 122.517 11.9078 122.589 11.9083H124.147C124.219 11.9078 124.291 11.9219 124.358 11.9499C124.425 11.9778 124.485 12.0189 124.536 12.0707C124.586 12.1226 124.626 12.1841 124.652 12.2517C124.678 12.3192 124.691 12.3913 124.689 12.4637ZM127.523 20.8529C129.356 20.8529 130.233 19.2916 130.233 17.3984C130.233 15.5051 129.339 13.981 127.523 13.981C125.708 13.981 124.689 15.5017 124.689 17.3984C124.689 19.295 125.671 20.8529 127.523 20.8529Z" />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.0362 1.36815C24.4417 0.867188 22.9893 0.867188 20.0373 0.867188H11.1812C8.24598 0.867188 6.77676 0.867188 5.20932 1.35464C4.35365 1.66446 3.57651 2.15864 2.93294 2.80218C2.28943 3.44565 1.79528 4.22274 1.48543 5.07842C0.984375 6.66273 0.984375 8.12853 0.984375 11.0635V19.9194C0.984375 22.8713 0.984375 24.3236 1.47185 25.9045C1.7817 26.7602 2.27591 27.5373 2.91942 28.1808C3.56294 28.8243 4.34007 29.3184 5.19581 29.6283C6.78015 30.1293 8.24598 30.1293 11.1812 30.1293H20.0508C22.9893 30.1293 24.4552 30.1293 26.0362 29.6283C26.8919 29.3184 27.669 28.8243 28.3125 28.1808C28.9561 27.5373 29.4503 26.7602 29.7601 25.9045C30.2612 24.3202 30.2612 22.8544 30.2612 19.9194V11.0771C30.2612 8.13871 30.2612 6.67286 29.7601 5.09194C29.4503 4.23631 28.9561 3.45917 28.3125 2.8157C27.669 2.17216 26.8919 1.67804 26.0362 1.36815ZM20.2896 11.8979C19.1918 10.9688 17.8008 10.458 16.3626 10.4558C15.1777 10.4558 13.9928 10.8485 13.9928 11.9385C13.9928 12.9322 15.0477 13.321 16.3473 13.8C16.4733 13.8465 16.6017 13.8938 16.7316 13.9426C19.3011 14.8092 21.4169 15.8721 21.4169 18.3908C21.4169 21.1261 19.2943 22.9947 15.8209 23.208L15.5061 24.6738C15.4773 24.8067 15.4038 24.9256 15.2978 25.0106C15.1917 25.0957 15.0597 25.1417 14.9238 25.141H12.7402C12.652 25.1389 12.5653 25.1173 12.4863 25.078C12.4072 25.0387 12.3378 24.9825 12.2829 24.9134C12.228 24.8443 12.189 24.764 12.1686 24.6781C12.1481 24.5922 12.1468 24.5029 12.1647 24.4166L12.5032 22.8695C11.1922 22.5352 9.98689 21.8749 8.99935 20.95C8.94275 20.8954 8.89769 20.83 8.86696 20.7575C8.83617 20.6851 8.82031 20.6073 8.82031 20.5286C8.82031 20.4499 8.83617 20.3721 8.86696 20.2996C8.89769 20.2272 8.94275 20.1617 8.99935 20.1071L10.2113 18.9223C10.3215 18.8139 10.4698 18.7532 10.6243 18.7532C10.7788 18.7532 10.9272 18.8139 11.0373 18.9223C12.1476 19.9815 13.6299 20.5615 15.1641 20.537C16.7451 20.537 17.8183 19.8668 17.8183 18.8038C17.8183 17.8428 16.9383 17.5209 15.2686 16.9102C15.0914 16.8454 14.9053 16.7773 14.7105 16.7049C12.5642 15.9398 10.533 14.8464 10.533 12.3041C10.533 9.36229 12.9907 7.92699 15.8886 7.78477L16.1933 6.29187C16.2226 6.16025 16.2959 6.0425 16.4012 5.95817C16.5064 5.87384 16.6373 5.82795 16.7722 5.82813H18.949C19.0366 5.82784 19.1231 5.84709 19.2023 5.88443C19.2815 5.92182 19.3513 5.97637 19.4068 6.04414C19.4623 6.11191 19.5019 6.19115 19.5228 6.27619C19.5438 6.36123 19.5455 6.44983 19.5279 6.53563L19.1893 8.20457C20.2976 8.56683 21.3244 9.14178 22.2125 9.89721C22.2731 9.94923 22.3222 10.0133 22.3568 10.0852C22.3914 10.1572 22.4107 10.2355 22.4136 10.3154C22.4164 10.3952 22.4028 10.4747 22.3734 10.549C22.344 10.6232 22.2996 10.6906 22.243 10.7469L21.1123 11.8809C21.0032 11.9882 20.8573 12.0498 20.7043 12.0529C20.5513 12.0561 20.403 12.0006 20.2896 11.8979Z"
            />
          </svg>
        ),
      },
      {
        id: 8,
        name: "Company 8",
        logo: (
          <svg
            width="122"
            height="31"
            viewBox="0 0 122 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.65498 5.4192C4.49517 5.59338 4.50576 5.86062 4.67364 6.02715L25.4235 26.6055C25.5914 26.772 25.8609 26.7825 26.0365 26.624C29.079 23.8784 30.9888 19.9197 30.9888 15.5187C30.9888 7.22841 24.2123 0.507812 15.8529 0.507812C11.4152 0.507812 7.42352 2.40182 4.65498 5.4192ZM2.06157 9.32463C1.98489 9.4923 2.02355 9.68889 2.15481 9.81906L21.6 29.1035C21.7313 29.2337 21.9295 29.2721 22.0986 29.196C22.5478 28.994 22.9852 28.7708 23.4097 28.5277C23.662 28.3833 23.7007 28.0419 23.4946 27.8376L3.43132 7.94007C3.22533 7.73577 2.88109 7.77411 2.73544 8.02431C2.49037 8.44527 2.26532 8.87913 2.06157 9.32463ZM0.88189 14.8466C0.790844 14.7563 0.742401 14.6319 0.750973 14.5045C0.791115 13.9077 0.866419 13.3206 0.974847 12.745C1.03986 12.3998 1.46512 12.2801 1.71546 12.5283L18.8682 29.5393C19.1185 29.7875 18.9977 30.2093 18.6497 30.2738C18.0693 30.3813 17.4773 30.456 16.8756 30.4958C16.7471 30.5043 16.6216 30.4562 16.5306 30.3659L0.88189 14.8466ZM1.93451 19.0355C1.622 18.7256 1.11767 18.9926 1.23213 19.416C2.62655 24.5739 6.7222 28.6357 11.9231 30.0186C12.35 30.1321 12.6193 29.632 12.3068 29.322L1.93451 19.0355ZM61.7293 8.76831C62.8144 8.76831 63.6937 7.89291 63.6937 6.81306C63.6937 5.73321 62.8144 4.85781 61.7293 4.85781C60.6445 4.85781 59.7652 5.73321 59.7652 6.81306C59.7652 7.89291 60.6445 8.76831 61.7293 8.76831ZM44.9039 25.8202V4.85898H48.3948V22.7534H57.8071V25.8202H44.9039ZM69.7501 17.2669V25.8202H66.3724V10.9645H69.7077V13.5107L69.7501 13.4826C70.0892 12.6854 70.6358 12.0196 71.3896 11.485C72.1432 10.941 73.1042 10.669 74.2728 10.669C75.3091 10.669 76.2511 10.8988 77.0993 11.3584C77.9472 11.8085 78.6254 12.4697 79.1342 13.3419C79.643 14.2142 79.8974 15.2833 79.8974 16.5494V25.8202H76.5197V17.0137C76.5197 15.8882 76.2181 15.0348 75.6152 14.4533C75.0217 13.8625 74.2256 13.567 73.2267 13.567C72.586 13.567 72.0019 13.6983 71.4743 13.9609C70.9468 14.2235 70.5275 14.6268 70.2165 15.1708C69.9056 15.7147 69.7501 16.4134 69.7501 17.2669ZM100.334 25.567C101.107 25.8952 101.993 26.0594 102.991 26.0594C103.811 26.0594 104.513 25.9562 105.097 25.7498C105.681 25.5341 106.162 25.2481 106.539 24.8917C106.925 24.5353 107.231 24.1461 107.457 23.7241H107.514V25.8202H110.75V15.5928C110.75 14.8706 110.609 14.2095 110.326 13.6092C110.044 13.009 109.634 12.4885 109.097 12.0477C108.569 11.6069 107.928 11.2693 107.174 11.0348C106.421 10.7909 105.573 10.669 104.631 10.669C103.34 10.669 102.223 10.8894 101.281 11.3302C100.348 11.7617 99.6183 12.3431 99.0905 13.0747C98.5629 13.8062 98.2755 14.6315 98.2283 15.5506H101.493C101.531 15.1192 101.682 14.7347 101.945 14.397C102.209 14.0594 102.567 13.7968 103.02 13.6092C103.472 13.4123 103.995 13.3138 104.588 13.3138C105.182 13.3138 105.686 13.4123 106.101 13.6092C106.524 13.8062 106.85 14.0735 107.076 14.4111C107.302 14.7487 107.415 15.1426 107.415 15.5928V15.7054C107.415 16.043 107.297 16.2915 107.062 16.451C106.835 16.6104 106.449 16.7276 105.903 16.8026C105.366 16.8777 104.631 16.9668 103.698 17.0699C102.935 17.1543 102.2 17.281 101.493 17.4498C100.787 17.6186 100.155 17.8671 99.5993 18.1954C99.0529 18.5236 98.6195 18.9597 98.2991 19.5037C97.9788 20.0477 97.8188 20.7464 97.8188 21.5998C97.8188 22.5846 98.0447 23.4099 98.497 24.0758C98.9492 24.7323 99.5618 25.2293 100.334 25.567ZM105.804 23.0769C105.257 23.3677 104.584 23.513 103.783 23.513C102.972 23.513 102.327 23.3442 101.847 23.0066C101.366 22.6596 101.126 22.186 101.126 21.5858C101.126 21.1168 101.258 20.737 101.521 20.4462C101.795 20.1555 102.153 19.9257 102.596 19.7569C103.038 19.5881 103.519 19.4709 104.037 19.4052C104.414 19.349 104.781 19.2927 105.14 19.2364C105.497 19.1708 105.832 19.1098 106.143 19.0535C106.454 18.9879 106.718 18.9222 106.934 18.8566C107.161 18.7909 107.325 18.7206 107.429 18.6455V20.3056C107.429 20.887 107.292 21.4216 107.019 21.9093C106.755 22.3876 106.35 22.7768 105.804 23.0769ZM113.697 25.8202V10.9645H116.948V13.4123H116.99C117.263 12.5682 117.692 11.9258 118.276 11.485C118.87 11.0348 119.647 10.8097 120.608 10.8097C120.844 10.8097 121.056 10.8191 121.244 10.8379C121.442 10.8472 121.607 10.8566 121.739 10.866V13.8906C121.616 13.8718 121.4 13.8484 121.089 13.8203C120.778 13.7921 120.448 13.778 120.099 13.778C119.543 13.778 119.035 13.9046 118.573 14.1579C118.111 14.4111 117.744 14.8003 117.471 15.3255C117.207 15.8414 117.075 16.4932 117.075 17.281V25.8202H113.697ZM60.0335 25.8202V10.9645H63.4112V25.8202H60.0335ZM85.5155 25.159C86.599 25.8249 87.8853 26.1578 89.3739 26.1578C90.5234 26.1578 91.5691 25.9515 92.5114 25.5388C93.4631 25.1168 94.2544 24.54 94.8857 23.8085C95.517 23.0676 95.9269 22.2141 96.1154 21.2481H92.9355C92.7939 21.6889 92.5631 22.0781 92.2428 22.4157C91.9321 22.744 91.541 23.0019 91.07 23.1895C90.5987 23.3771 90.0524 23.4708 89.4304 23.4708C88.5919 23.4708 87.871 23.2833 87.2682 22.9081C86.6747 22.533 86.2224 22.0125 85.9114 21.3466C85.6292 20.7337 85.4749 20.0397 85.4489 19.2645H96.3132V18.3642C96.3132 17.22 96.1435 16.179 95.8044 15.2411C95.4653 14.2939 94.9846 13.4779 94.3627 12.7933C93.741 12.0993 92.9921 11.5647 92.1157 11.1896C91.2488 10.8144 90.2832 10.6268 89.2184 10.6268C87.8335 10.6268 86.6087 10.9598 85.5439 11.6257C84.4791 12.2915 83.6454 13.2107 83.0422 14.383C82.4394 15.5553 82.1378 16.8964 82.1378 18.4064C82.1378 19.907 82.43 21.2434 83.0141 22.4157C83.5982 23.5787 84.4322 24.4931 85.5155 25.159ZM92.6245 15.3255C92.3135 14.6878 91.8707 14.1954 91.2959 13.8484C90.7212 13.5014 90.043 13.3279 89.2607 13.3279C88.4881 13.3279 87.8145 13.5014 87.2397 13.8484C86.6746 14.1954 86.2318 14.6878 85.9114 15.3255C85.6828 15.7874 85.5382 16.3126 85.4777 16.9011H93.058C92.9975 16.3126 92.8529 15.7874 92.6245 15.3255Z"
            />
          </svg>
        ),
      },
    ],
  },
  featureSection: {
    title: "Simple. Seamless. Smart.",
    description:
      "Why choose us for your design and development needs?",
    items: [
      {
        id: 1,
        title: "Experience",
        content:
          "Weâ€™ve worked with brands at different stages, from early ideas to growing businesses. This experience helps us understand what actually works, not just what looks good.",
        image:
          "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        title: "Expertise",
        content:
          "Design and technology move fast, and we stay ahead. We use modern tools, proven design systems, and smart development practices to create solutions that are both creative and effective.",
        image:
          "https://images.unsplash.com/photo-1686170287433-c95faf6d3608?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8fA%3D%3D",
      },
      {
        id: 3,
        title: "Dedication",
        content:
          "Every project gets our full attention. We take the time to understand your goals, your audience, and your vision, so the final result feels thoughtful, intentional, and truly yours.",
        image:
          "https://images.unsplash.com/photo-1720378042271-60aff1e1c538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        title: "Results Driven",
        content:
          "At Desnine Studio, design isnâ€™t just visual,itâ€™s strategic. We focus on clarity, usability, and performance to help your brand grow, connect, and stand out with confidence.",
        image:
          "https://images.unsplash.com/photo-1666882990322-e7f3b8df4f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      },
    ],
  },
  bentoSection: {
    title: "",
    description:
      /*"Design that feels RIGHT, WORKS HARD, and STANDS OUT."*/
      " ",
      // "We elevate your brand, streamline your business, and enhance your digital presence, all in one place.",
    items: [
      {
        id: 1,
        content: <FifthBentoAnimation />,
        title: "Branding & Identity",
        description:
          "From strategy to visuals, we craft identities that reflect who you are and resonate with who you want to reach. Logo, type, color, tone delivered as a ready-to-use system.",
      },
      {
        id: 2,
        content: <SixthBentoAnimation />,
        title: "Print & Packaging Design",
        description:
          "We create packaging and print assets that turn heads and tell stories. From label design and structural packaging to flyers, menus, business cards, and event signage we make your brand tangible.",
      },
      {
        id: 3,
        content: <SecondBentoAnimation />,
        title: "Website Design & Development",
        description:
          "We design and build high performing websites with seamless user experience, clean interfaces, and solid backend development using Webflow, WordPress, Shopify or custom stacks. Fast. Responsive. Made to grow with you.",
      },
      {
        id: 4,
        content: <FirstBentoAnimation />,
        title: "AI Automation & Bots",
        description:
          "Harness the power of AI to automate repetitive tasks, streamline operations, and provide smarter customer service with chatbots and custom automations. Designed to save you time, money, and energy. From smart bots to backend logic, we streamline operations for scale.",
      },
      {
        id: 5,
        content: <FourthBentoAnimation once={false} />,
        title: "SEO Optimization",
        description:
          "We boost your search visibility with smart SEO strategies that align with your brand and business goals. From keyword research to on-page fixes, technical audits to content optimization we help you climb the ranks and stay there.",
      },
      {
        id: 6,
        content: <EighthBentoAnimation />,
        title: "Advertising Design",
        description:
          "Whether print or digital, we create ad creatives that catch the eye, communicate clearly, and drive action. From static to motion, one-off campaigns to long-term strategies, weâ€™ve got you covered.",
      },
      {
        id: 7,
        content: (
          <ThirdBentoAnimation
            data={[20, 30, 25, 45, 40, 55, 75]}
            toolTipValues={[
              1234, 1678, 2101, 2534, 2967, 3400, 3833, 4266, 4700, 5133,
            ]}
          />
        ),
        title: "Smart Analytics",
        description:
          "We help you set up and make sense of your analytics whether itâ€™s user behavior, campaign performance, or conversion paths. Get dashboards, insights, and reporting tools that make your data work for you.",
      },
      {
        id: 8,
        content: <SeventhBentoAnimation />,
        title: "Digital Design",
        description:
          "We craft stunning digital assets like newsletters, presentations, web banners, app graphics, social content, email templates, UI elements and more that feel consistent, responsive, and ready for any screen.",
      },
      {
        id: 9,
        content: <NinthBentoAnimation />,
        title: "Content Creation & Visual Support",
        description:
          "Desnine enhances your content with illustrations, iconography, photo retouching, and mockups. We turn raw ideas into polished visuals that connect.",
      },
      {
        id: 10,
        content: <TenthBentoAnimation />,
        title: "Industry-Specific Design",
        description:
          "Whether you're in F&B, tech, fashion, health, or real estate our industry-specific design services help you stand. Whatever your niche, we help you look professional and trustworthy.",
      },
    ],
  },


  workbentoSection: {
    title: "",
    description:
      /*"Design that feels RIGHT, WORKS HARD, and STANDS OUT."*/
      /*"It's not just words. It's the results that speak. Services we offer are designed to elevate your brand, streamline your operations, and enhance your digital presence. From branding to web development, weâ€™ve got you covered."*/
      "",
      items: [
      {
        id: 1,
        content: (
        <div className="relative w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Greenly/5fc68c214303945.67576a30c7901.png"  
            alt="Greenly"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            sizes="100vw"
            loading="eager"
          />
        </div>
        ),
        title: "Greenly",
        description: "Branding & Identity",
        href: "/work/greenly",

      },

      {
        id: 2,
        content: (
        <div className="relative w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Coresecure/c84778211607369.67576a9fb7366.png"  
            alt="coresecure"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            sizes="100vw"
            loading="eager"
          />
        </div>
        ),
        title: "Core Secure",
        description: "Branding & Identity",
        href: "/work/coresecure",

      },
      {
        id: 3,
        content: (
        <div className="relative w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Quixel/66ca32212225893.6757693b01009.png"  
            alt="Quixel"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            sizes="100vw"
            loading="eager"
          />
        </div>
        ),
        title: "Quixel",
        description: "Branding & Identity",
        href: "/work/quixel",

      },

        {
        id: 4,
        content: (
        <div className="relative w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Mavo/5620db213698209.6757693cba376.jpg"   // make sure this is inside /public/work/kynex/
            alt="Mavo"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            sizes="100vw"
            loading="eager"
          />
        </div>
        ),
        title: "Mavo",
        description: "Branding & Identity",
        href: "/work/mavo",

      },
      
        
    ],
  },



  benefits: [
    {
      id: 1,
      text: "Save hours each week with AI-optimized scheduling.",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Reduce scheduling conflicts and double-bookings.",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Improve work-life balance with smart time allocation.",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Increase productivity with AI-driven time management insights.",
      image: "/Device-1.png",
    },
  ],
  growthSection: {
    title: "Built for Secure Growth",
    description:
      "Where advanced security meets seamless scalability designed to protect your data and empower your growth.",
    items: [
      {
        id: 1,
        content: (
          <div
            className="relative flex size-full items-center justify-center overflow-hidden transition-all duration-300 hover:[mask-image:none] hover:[webkit-mask-image:none]"
            style={{
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              maskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          >
            <div className="absolute top-[55%] md:top-[58%] left-[55%] md:left-[57%] -translate-x-1/2 -translate-y-1/2  size-full z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="227"
                height="244"
                viewBox="0 0 227 244"
                fill="none"
                className="size-[90%] md:size-[85%] object-contain fill-background"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M104.06 3.61671C106.656 1.28763 110.017 0 113.5 0C116.983 0 120.344 1.28763 122.94 3.61671C148.459 26.5711 180.325 41.2118 214.322 45.6008C217.66 46.0312 220.736 47.6398 222.999 50.1383C225.262 52.6369 226.563 55.862 226.67 59.2357C227.947 96.7468 218.612 133.854 199.744 166.267C180.877 198.68 153.248 225.074 120.052 242.398C118.028 243.454 115.779 244.003 113.498 244C111.216 243.997 108.969 243.441 106.948 242.379C73.7524 225.055 46.1231 198.661 27.2556 166.248C8.38807 133.835 -0.947042 96.7279 0.329744 59.2168C0.441295 55.8464 1.74484 52.6258 4.00715 50.1311C6.26946 47.6365 9.34293 46.0306 12.6777 45.6008C46.6725 41.2171 78.5389 26.5832 104.06 3.63565V3.61671Z"
                />
              </svg>
            </div>
            <div className="absolute top-[58%] md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2  size-full z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="245"
                height="282"
                viewBox="0 0 245 282"
                className="size-full object-contain fill-accent"
              >
                <g filter="url(#filter0_dddd_2_33)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M113.664 7.33065C116.025 5.21236 119.082 4.04126 122.25 4.04126C125.418 4.04126 128.475 5.21236 130.836 7.33065C154.045 28.2076 183.028 41.5233 213.948 45.5151C216.984 45.9065 219.781 47.3695 221.839 49.6419C223.897 51.9144 225.081 54.8476 225.178 57.916C226.339 92.0322 217.849 125.781 200.689 155.261C183.529 184.74 158.4 208.746 128.209 224.501C126.368 225.462 124.323 225.962 122.248 225.959C120.173 225.956 118.13 225.45 116.291 224.484C86.0997 208.728 60.971 184.723 43.811 155.244C26.6511 125.764 18.1608 92.015 19.322 57.8988C19.4235 54.8334 20.6091 51.9043 22.6666 49.6354C24.7242 47.3665 27.5195 45.906 30.5524 45.5151C61.4706 41.5281 90.4531 28.2186 113.664 7.34787V7.33065Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dddd_2_33"
                    x="0.217041"
                    y="0.0412598"
                    width="244.066"
                    height="292.917"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="12" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_2_33"
                      result="effect2_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="27" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_dropShadow_2_33"
                      result="effect3_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="48" />
                    <feGaussianBlur stdDeviation="9.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_dropShadow_2_33"
                      result="effect4_dropShadow_2_33"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect4_dropShadow_2_33"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="80"
                viewBox="0 0 81 80"
                className="fill-background"
              >
                <g filter="url(#filter0_iiii_2_34)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5 36V28C20.5 22.6957 22.6071 17.6086 26.3579 13.8579C30.1086 10.1071 35.1957 8 40.5 8C45.8043 8 50.8914 10.1071 54.6421 13.8579C58.3929 17.6086 60.5 22.6957 60.5 28V36C62.6217 36 64.6566 36.8429 66.1569 38.3431C67.6571 39.8434 68.5 41.8783 68.5 44V64C68.5 66.1217 67.6571 68.1566 66.1569 69.6569C64.6566 71.1571 62.6217 72 60.5 72H20.5C18.3783 72 16.3434 71.1571 14.8431 69.6569C13.3429 68.1566 12.5 66.1217 12.5 64V44C12.5 41.8783 13.3429 39.8434 14.8431 38.3431C16.3434 36.8429 18.3783 36 20.5 36ZM52.5 28V36H28.5V28C28.5 24.8174 29.7643 21.7652 32.0147 19.5147C34.2652 17.2643 37.3174 16 40.5 16C43.6826 16 46.7348 17.2643 48.9853 19.5147C51.2357 21.7652 52.5 24.8174 52.5 28Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_iiii_2_34"
                    x="12.5"
                    y="8"
                    width="56"
                    height="70"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_innerShadow_2_34"
                      result="effect2_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_innerShadow_2_34"
                      result="effect3_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_innerShadow_2_34"
                      result="effect4_innerShadow_2_34"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="size-full"
            >
              <FlickeringGrid
                className="size-full"
                gridGap={4}
                squareSize={2}
                maxOpacity={0.5}
                color="var(--secondary)"
              />
            </motion.div> */}
          </div>
        ),

        title: "Advanced Task Security",
        description:
          "Safeguard your tasks with state-of-art encryption and secure access to your workflow data.",
      },
      {
        id: 2,
        content: (
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_50%)] -translate-y-20">
            <Globe 
              className="top-28" 
              config={{
                width: 800,
                height: 800,
                onRender: () => {},
                devicePixelRatio: 2,
                phi: 0,
                theta: 0.3,
                dark: 0,
                diffuse: 0.4,
                mapSamples: 16000,
                mapBrightness: 1.2,
                baseColor: [1, 1, 1],
                markerColor: [218/255, 27/255, 17/255], // Red color #da1b11
                glowColor: [218/255, 27/255, 17/255], // Red glow
                markers: [
                  { location: [14.5995, 120.9842], size: 0.03 },
                  { location: [19.076, 72.8777], size: 0.1 },
                  { location: [23.8103, 90.4125], size: 0.05 },
                  { location: [30.0444, 31.2357], size: 0.07 },
                  { location: [39.9042, 116.4074], size: 0.08 },
                  { location: [-23.5505, -46.6333], size: 0.1 },
                  { location: [19.4326, -99.1332], size: 0.1 },
                  { location: [40.7128, -74.006], size: 0.1 },
                  { location: [34.6937, 135.5022], size: 0.05 },
                  { location: [41.0082, 28.9784], size: 0.06 },
                ],
              }}
            />
          </div>
        ),

        title: "Scalable for Teams",
        description:
          "Grow with your team. Track tasks across multiple workspaces and all team members.",
      },
    ],
  },
  quoteSection: {
    quote:
      "We saw a 42% increase in inquiries after Desnine redesigned our website. The process was smooth, clear, and well organized from start to finish.",
    author: {
      name: "Ayesha Khan",
      role: "Founder, AKT",
      image: "/pp.png",
    },
  },


  clientFeedback: {
  title: <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-primary text-balance">
                    Stories in Motion<span style={{ color: DESNINE_RED }}>.</span>
                  </h3>,
  reviews: [
    {
      quote:
        "Working with Desnine Studio transformed our brand. Their creative and strategic approach delivered a stunning website.",
      author: {
        name: "Alex Morgan",
        role: "CEO of BrightWave Tech",
        image: "/pp.png",
      },
    },
    {
      quote:
        "Desnine understood our vision instantly and turned it into a product weâ€™re proud of.",
      author: {
        name: "Sarah Lee",
        role: "Founder, Nova Labs",
        image: "/pp.png",
      },
    },
  ],
  stats: [
    {
      value: "50 +",
      label: "Projects Delivered",
      note: "Weâ€™ve brought 50 plus digital visions to life.",
    },
    {
      value: "100%",
      label: "Satisfaction Rate",
      note: "Built on trust and long term relationships.",
    },
    {
      value: "4.9/5",
      label: "Average Rating",
      note: "Across Google, Clutch, and referrals.",
    },
    {
      value: "30 +",
      label: "Happy Clients Worldwide",
      note: "From startups to global brands.",
    },
  ],
},

blogSection: {
  badge: "",
  title: "Desnine Insights & Stories",
  titleLine2: "Insights & Stories",
  description:
    "Explore industry trends, expert perspectives, and creative journeys that bring ideas to life.",
  cta: "View All",
  ctaHref: "/blog",
  posts: [
    {
    title: "Design that converts: how we build websites that perform",
    excerpt: "A simple breakdown of our process clarity, systems, execution.",
    image: "/blog/b1.png",
    href: "/blog/design-that-converts",
    tag: "Web & Growth",
    date: "Dec 2025",
    readTime: "5 min read",
    },
    {
      title: "Brand systems: why consistency makes you look premium",
      excerpt: "How typography, spacing, and rules make brands feel expensive.",
      image: "/blog/b2.png",
      href: "/blog/brand-systems",
      tag: "Branding",
      date: "Dec 2025",
      readTime: "4 min read",
    },
    {
      title: "SEO basics for modern websites (without boring stuff)",
      excerpt: "Clean structure, fast pages, and the content that ranks.",
      image: "/blog/b3.png",
      href: "/blog/seo-basics",
      tag: "SEO",
      date: "Dec 2025",
      readTime: "6 min read",
    },
  ],
},



  pricing: {
    title: "Pricing that scales with you",
    description:
      "Whichever plan you pick, it's free until you love your docs. That's our promise.",
    pricingItems: [
      {
        name: "Free",
        href: "#",
        price: "$0",
        period: "month",
        yearlyPrice: "$0",
        features: [
          "Custom domain",
          "SEO-optimizations",
          "Auto-generated API docs",
          "Built-in components library",
        ],
        description: "Perfect for individual users",
        buttonText: "Start Free",
        buttonColor: "bg-accent text-primary",
        isPopular: false,
      },
      {
        name: "Startup",
        href: "#",
        price: "$12",
        period: "month",
        yearlyPrice: "$120",
        features: [
          "Custom domain",
          "SEO-optimizations",
          "Auto-generated API docs",
          "Built-in components library",
          "E-commerce integration",
          "User authentication system",
          "Multi-language support",
          "Real-time collaboration tools",
        ],
        description: "Ideal for professionals and small teams",
        buttonText: "Upgrade to Pro",
        buttonColor: "bg-secondary text-white",
        isPopular: true,
      },
      {
        name: "Enterprise",
        href: "#",
        price: "$24",
        period: "month",
        yearlyPrice: "$240",
        features: [
          "Custom domain",
          "SEO-optimizations",
          "Auto-generated API docs",
          "Built-in components librarys",
          "Real-time collaboration tools",
        ],
        description: "Best for large teams and enterprise-level organizations",
        buttonText: "Contact Sales",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: false,
      },
    ],
  },
  // testimonials: [
  //   {
  //     id: "1",
  //     name: "Sarah Johnson",
  //     role: "Marketing Director",
  //     img: "https://randomuser.me/api/portraits/women/32.jpg",
  //     description: (
  //       <p>
  //         Desnine&apos;s SEO strategies transformed our online presence completely.
  //         <Highlight>
  //           We went from page 3 to top 3 in just 6 months, with a 300% increase in organic traffic.
  //         </Highlight>{" "}
  //         Their data-driven approach and constant optimization made all the difference.
  //       </p>
  //     ),
  //   },
  //   {
  //     id: "2",
  //     name: "Marcus Rodriguez",
  //     role: "Founder & CEO",
  //     img: "https://randomuser.me/api/portraits/men/67.jpg",
  //     description: (
  //       <p>
  //         Desnine didn&apos;t just design our website - they built a conversion machine.
  //         <Highlight>
  //           Our e-commerce sales increased by 150% within the first quarter after launch.
  //         </Highlight>{" "}
  //         The user experience is seamless, and the design perfectly captures our brand essence.
  //       </p>
  //     ),
  //   },
  //   {
  //     id: "3",
  //     name: "Jennifer Park",
  //     role: "Operations Manager",
  //     img: "https://randomuser.me/api/portraits/women/44.jpg",
  //     description: (
  //       <p>
  //         The AI automation Desnine implemented for our appointment scheduling has been a game-changer.
  //         <Highlight>
  //           We&apos;ve reduced no-shows by 40% and our staff can focus on patient care instead of admin tasks.
  //         </Highlight>{" "}
  //         The integration was smooth and the results were immediate.
  //       </p>
  //     ),
  //   },
  //   {
  //     id: "4",
  //     name: "David Chen",
  //     role: "CTO",
  //     img: "https://randomuser.me/api/portraits/men/23.jpg",
  //     description: (
  //       <p>
  //         Desnine&apos;s smart analytics dashboard gives us insights we never had before.
  //         <Highlight>
  //           We can now make data-driven decisions in real-time, leading to 25% better resource allocation.
  //         </Highlight>{" "}
  //         The AI-powered recommendations are spot-on and have become integral to our strategy.
  //       </p>
  //     ),
  //   },
  //   {
  //     id: "5",
  //     name: "Amanda Thompson",
  //     role: "Brand Manager",
  //     img: "https://randomuser.me/api/portraits/women/28.jpg",
  //     description: (
  //       <p>
  //         Our rebranding with Desnine was transformative. They didn&apos;t just create a logo - they crafted our entire brand identity.
  //         <Highlight>
  //           Customer recognition increased by 200% and our social media engagement tripled.
  //         </Highlight>{" "}
  //         The packaging design is so beautiful, customers are sharing it on social media.
  //       </p>
  //     ),
  //   },
  //   {
  //     id: "6",
  //     name: "Robert Kim",
  //     role: "Digital Marketing Lead",
  //     img: "https://randomuser.me/api/portraits/men/89.jpg",
  //     description: (
  //       <p>
  //         Desnine&apos;s advertising design services helped us stand out in a crowded market.
  //         <Highlight>
  //           Our ad conversion rates improved by 180% and cost per acquisition dropped by 35%.
  //         </Highlight>{" "}
  //         Their creative team understands what drives engagement and conversions.
  //       </p>
  //     ),
  //   },
  //   {
  //     id: "7",
  //     name: "Lisa Wang",
  //     role: "Content Director",
  //     img: "https://randomuser.me/api/portraits/women/56.jpg",
  //     description: (
  //       <p>
  //         The content creation and visual support from Desnine elevated our educational materials to a new level.
  //         <Highlight>
  //           Student engagement increased by 60% and our course completion rates went up by 45%.
  //         </Highlight>{" "}
  //         Their illustrations and graphics make complex topics accessible and engaging.
  //       </p>
  //     ),
  //   },
  //   {
  //     id: "8",
  //     name: "Michael O&apos;Connor",
  //     role: "VP of Marketing",
  //     img: "https://randomuser.me/api/portraits/men/45.jpg",
  //     description: (
  //       <p>
  //         Desnine&apos;s industry-specific design for real estate has given us a competitive edge.
  //         <Highlight>
  //           Our property listings now convert 3x better and our brand is recognized as the most professional in the market.
  //         </Highlight>{" "}
  //         They understand the unique needs of our industry perfectly.
  //       </p>
  //     ),
  //   },
  //   {
  //     id: "9",
  //     name: "Sophia Martinez",
  //     role: "E-commerce Manager",
  //     img: "https://randomuser.me/api/portraits/women/71.jpg",
  //     description: (
  //       <p>
  //         The digital design work Desnine did for our fashion brand is absolutely stunning.
  //         <Highlight>
  //           Our email campaigns now have a 25% open rate and our social media content drives 4x more engagement.
  //         </Highlight>{" "}
  //         Every design element feels cohesive and on-brand.
  //       </p>
  //     ),
  //   },
  //   {
  //     id: "10",
  //     name: "James Wilson",
  //     role: "CEO",
  //     img: "https://randomuser.me/api/portraits/men/12.jpg",
  //     description: (
  //       <p>
  //         As a startup, we needed everything - website, branding, SEO, and automation. Desnine delivered it all.
  //         <Highlight>
  //           We went from 0 to 10,000 monthly visitors in 8 months and secured our Series A funding.
  //         </Highlight>{" "}
  //         They&apos;re not just a service provider - they&apos;re a growth partner.
  //       </p>
  //     ),
  //   },
  //   {
  //     id: "11",
  //     name: "Rachel Green",
  //     role: "Marketing Manager",
  //     img: "https://randomuser.me/api/portraits/women/38.jpg",
  //     description: (
  //       <p>
  //         Desnine&apos;s print and packaging design for our wellness products exceeded all expectations.
  //         <Highlight>
  //           Our products now have 40% better shelf presence and customer feedback about packaging is overwhelmingly positive.
  //         </Highlight>{" "}
  //         The designs are both beautiful and functional.
  //       </p>
  //     ),
  //   },
  //   {
  //     id: "12",
  //     name: "Alex Turner",
  //     role: "Product Manager",
  //     img: "https://randomuser.me/api/portraits/men/91.jpg",
  //     description: (
  //       <p>
  //         The AI automation bots Desnine built for our customer service have revolutionized our operations.
  //         <Highlight>
  //           We handle 5x more customer inquiries with 90% faster response times and 95% customer satisfaction.
  //         </Highlight>{" "}
  //         The bots are so intelligent, customers often don&apos;t realize they&apos;re talking to AI.
  //       </p>
  //     ),
  //   },
  //   {
  //     id: "13",
  //     name: "Nina Patel",
  //     role: "Founder",
  //     img: "https://randomuser.me/api/portraits/women/63.jpg",
  //     description: (
  //       <p>
  //         Desnine helped us establish our creative agency&apos;s brand identity from the ground up.
  //         <Highlight>
  //           Within 6 months, we&apos;ve attracted 15 new high-value clients and our portfolio is getting featured in design publications.
  //         </Highlight>{" "}
  //         Their strategic approach to branding is unmatched in the industry.
  //       </p>
  //     ),
  //   },
  // ],

testimonials: [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Director",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    description:
      "Desnineâ€™s SEO work completely changed our online visibility. We started showing up where it actually matters, and the growth felt steady and intentional. They kept us updated, tested improvements constantly, and made decisions based on real dataâ€”not guesses.",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    description:
      "Desnine didnâ€™t just make our website look goodâ€”they built it to sell. The experience is smooth, fast, and easy for customers, and the design fits our brand perfectly. After launch, we immediately saw a noticeable jump in sales and conversions.",
  },
  {
    id: "3",
    name: "Jennifer Park",
    role: "Operations Manager",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "The appointment automation Desnine set up saved our team a lot of time. Scheduling became simpler, reminders were handled automatically, and we saw fewer no-shows. Setup was clean, and everything worked properly from day one.",
  },
  {
    id: "4",
    name: "David Chen",
    role: "CTO",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
    description:
      "Desnineâ€™s analytics dashboard gave us a clear view of whatâ€™s happening in the business. Instead of waiting for reports, we can spot trends quickly and make better decisions day-to-day. The insights are practical, and the system feels built for real teams.",
  },
  {
    id: "5",
    name: "Amanda Thompson",
    role: "Brand Manager",
    img: "https://randomuser.me/api/portraits/women/28.jpg",
    description:
      "Our rebrand with Desnine was a full transformation, not just a new logo. Everything became consistentâ€”colors, typography, packaging, and overall feel. Customers noticed right away, and we started getting more organic shares and compliments on the presentation.",
  },
  {
    id: "6",
    name: "Robert Kim",
    role: "Digital Marketing Lead",
    img: "https://randomuser.me/api/portraits/men/89.jpg",
    description:
      "Desnineâ€™s ad designs helped us stand out instantly. The creative looked premium, matched our message, and performed better across campaigns. We saw stronger conversions and improved efficiency without sacrificing brand quality.",
  },
  {
    id: "7",
    name: "Lisa Wang",
    role: "Content Director",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    description:
      "Desnine elevated our content visuals in a way that made everything easier to understand and more engaging. Their graphics and layout choices made our materials feel modern and polished, and our audience responded really well to the improved clarity.",
  },
  {
    id: "8",
    name: "Michael O'Connor",
    role: "VP of Marketing",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description:
      "Desnine understands real estate branding and design better than most teams weâ€™ve worked with. Our listings look more professional, our marketing feels consistent, and the overall brand trust improved. It gave us a real edge in a competitive market.",
  },
  {
    id: "9",
    name: "Sophia Martinez",
    role: "E-commerce Manager",
    img: "https://randomuser.me/api/portraits/women/71.jpg",
    description:
      "The digital design Desnine created for our fashion brand is clean, cohesive, and high-end. Our emails look more premium, social content performs better, and everything finally feels like it belongs to the same brand system.",
  },
  {
    id: "10",
    name: "James Wilson",
    role: "CEO",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    description:
      "We needed a full setup as a startupâ€”website, branding, SEO, and automationâ€”and Desnine handled it end-to-end. They were organized, fast, and thoughtful with every decision. It felt like working with a real partner, not just a vendor.",
  },
  {
    id: "11",
    name: "Rachel Green",
    role: "Marketing Manager",
    img: "https://randomuser.me/api/portraits/women/38.jpg",
    description:
      "Desnineâ€™s packaging and print designs exceeded what we expected. The work looks premium on the shelf and feels practical for real use. Weâ€™ve also had customers mention the packaging specifically, which has been a big win for our brand.",
  },
  {
    id: "12",
    name: "Alex Turner",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    description:
      "The customer service automation Desnine built changed our workflow completely. Response times improved, support became more consistent, and we were able to handle more requests without adding pressure to the team. Itâ€™s one of the most valuable upgrades weâ€™ve made.",
  },
  {
    id: "13",
    name: "Nina Patel",
    role: "Founder",
    img: "https://randomuser.me/api/portraits/women/63.jpg",
    description:
      "Desnine helped us build a strong brand foundation from scratch. The strategy was clear, the visuals feel premium, and the entire identity is consistent across platforms. Since launching, weâ€™ve been attracting better clients and presenting ourselves with confidence.",
  },
],



  faqSection: {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about our digital marketing and design services. If you have any other questions, please don't hesitate to contact us.",
    faQitems: [
      {
        id: 1,
        question: "What services does Desnine offer?",
        answer:
          "Desnine offers comprehensive digital marketing and design services including SEO optimization, website design & development, AI automation, branding & identity design, print & packaging design, digital design, advertising design, content creation, and industry-specific design solutions. We're your one-stop shop for all digital marketing needs.",
      },
      {
        id: 2,
        question: "How long does it take to see SEO results?",
        answer:
          "SEO is a long-term strategy that typically shows initial results within 3-6 months. However, the timeline varies based on your industry competition, website age, and current optimization level. We provide regular reports and analytics to track progress and make data-driven adjustments to accelerate your rankings.",
      },
      {
        id: 3,
        question: "Do you work with small businesses?",
        answer:
          "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We tailor our services and pricing to meet your specific needs and budget. Our flexible approach ensures that every business can access professional digital marketing services that drive real results.",
      },
      {
        id: 4,
        question: "Can you redesign my existing website?",
        answer:
          "Yes, we specialize in website redesigns that improve both aesthetics and performance. We'll analyze your current site, identify areas for improvement, and create a modern, fast, and conversion-optimized website that better represents your brand and drives more business.",
      },
      {
        id: 5,
        question: "What makes your AI automation different?",
        answer:
          "Our AI automation solutions are custom-built for your specific business needs. We don't use generic templates - we analyze your workflows, identify automation opportunities, and create intelligent bots and integrations that save you time and money while improving customer experience.",
      },
      {
        id: 6,
        question: "Do you provide ongoing support and maintenance?",
        answer:
          "Yes, we offer ongoing support packages that include website maintenance, SEO monitoring, content updates, and performance optimization. We believe in building long-term partnerships and ensuring your digital presence continues to grow and evolve with your business.",
      },
      {
        id: 7,
        question: "How do you measure success and ROI?",
        answer:
          "We use advanced analytics and tracking tools to measure key performance indicators like website traffic, conversion rates, search rankings, and revenue growth. We provide detailed monthly reports showing your progress and ROI, so you can see exactly how our services are impacting your bottom line.",
      },
      {
        id: 8,
        question: "What industries do you specialize in?",
        answer:
          "We have experience across various industries including ecommerce, healthcare, technology, real estate, education, and professional services. Our team adapts our strategies to your specific industry challenges and opportunities, ensuring maximum effectiveness for your business.",
      },
    ],
  },
  ctaSection: {
    id: "cta",
    title: "Website & SEO Audit and more.",
    backgroundImage: "/agent-cta-background.png",
    button: {
      text: "Contact Us",
      href: "/contact",
    },
    subtext: "",
  },
  footerLinks: [
    {
      title: "Company",
      links: [
        { id: 1, title: "About", url: "#" },
        { id: 2, title: "Contact", url: "#" },
        { id: 4, title: "Story", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 10, title: "Careers", url: "#" },
        { id: 11, title: "Newsletters", url: "#" },
        { id: 12, title: "More", url: "#" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;

``

## src\lib\articlesData.ts

``ts
export type Article = {
  id: string;
  slug: string;       // used for folder name + URL
  title: string;
  date: string;       // ISO
  readMins: number;
  cover: string;
  excerpt: string;
  href: string;       // always `/article/<slug>`
  featured?: boolean;
}; 

export const ARTICLES: Article[] = [
  {
    id: "ai-branding-future",
    slug: "future-of-branding-ai",
    title: "The Future of Branding with AI (Practical, Not Hype)",
    date: "2025-09-05",
    readMins: 7,
    cover: "/images/articles/ai-branding.jpg",
    excerpt:
      "Brief faster, iterate smarter, and keep creative direction human while using AI as leverage.",
    href: "/article/future-of-branding-ai/page.tsx",
    featured: true,
  },
  {
    id: "minimalism-business",
    slug: "minimalist-design",
    title: "Minimalism That Converts: White Space, Rhythm, Hierarchy",
    date: "2025-08-28",
    readMins: 6,
    cover: "/images/articles/minimalism.jpg",
    excerpt:
      "Not just vibesâ€”systems for clarity that drive real actions and sign-ups.",
    href: "/article/minimalist-design",
  },
  {
    id: "seo-2025",
    slug: "seo-in-2025",
    title: "SEO 2025 for Service Brands: Entity-First Content",
    date: "2025-08-15",
    readMins: 8,
    cover: "/images/articles/seo-2025.jpg",
    excerpt: "UX signals, internal links that matter, and lightweight schema.",
    href: "/article/seo-in-2025",
  },
  {
    id: "packaging-genz",
    slug: "packaging-genz",
    title: "Packaging for Gen Z: Sincerity Over Flash",
    date: "2025-08-11",
    readMins: 5,
    cover: "/images/articles/packaging-genz.jpg",
    excerpt: "Material choices, tactile finishes, and QR stories that feel earned.",
    href: "/article/packaging-genz",
  },
  {
    id: "automation-agency",
    slug: "automation-agency",
    title: "From Inquiry â†’ Invoice: Lean AI Automation for Studios",
    date: "2025-08-02",
    readMins: 9,
    cover: "/images/articles/automation.jpg",
    excerpt: "Capture, qualify, scope, and sendâ€”without losing the human touch.",
    href: "/article/automation-agency",
  },
];

export const SERVICES = [
  "Brand Strategy",
  "Visual Identity",
  "Packaging Design",
  "Website Design",
  "E-commerce",
  "SEO",
  "Content Strategy",
  "AI Automation",
  "Pitch Decks",
  "Campaign Creative",
] as const;

``

## src\hooks\use-media-query.ts

``ts
"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    // Handle initial check and subsequent changes
    function checkQuery() {
      const result = window.matchMedia(query);
      setValue(result.matches);
    }

    // Check immediately
    checkQuery();

    // Add resize listener
    window.addEventListener("resize", checkQuery);

    // Add media query change listener
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", checkQuery);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkQuery);
      mediaQuery.removeEventListener("change", checkQuery);
    };
  }, [query]);

  return value;
}

``

## src\app\manifest.ts

``ts
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Desnine - Digital Marketing & Design Agency',
    short_name: 'Desnine',
    description: 'AI-powered digital marketing and design agency specializing in SEO, web design, AI automation, and branding services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
} 
``

## src\components\zoom-meeting.tsx

``tsx
"use client";

interface Participant {
  id: string;
  name: string;
  avatarColor: string;
  faceImage: string;
}

export function ZoomMeeting() {
  const participants: Participant[] = [
    { 
      id: "1", 
      name: "Alex Chen", 
      avatarColor: "from-blue-500 to-purple-600",
      faceImage: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    { 
      id: "2", 
      name: "Sarah Johnson", 
      avatarColor: "from-pink-500 to-red-500",
      faceImage: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    { 
      id: "3", 
      name: "Mike Rodriguez", 
      avatarColor: "from-green-500 to-teal-500",
      faceImage: "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
      id: "4",
      name: "Emma Wilson",
      avatarColor: "from-orange-500 to-yellow-500",
      faceImage: "https://randomuser.me/api/portraits/women/44.jpg"
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-secondary/10 border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <h2 className="text-lg font-semibold">Team Meeting</h2>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {participants.map((participant) => (
              <div
                key={participant.id}
                className="relative aspect-video bg-secondary/20 rounded-lg border-2 border-border overflow-hidden"
              >
                <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-8 h-8 bg-gradient-to-br ${participant.avatarColor} rounded-full mx-auto flex items-center justify-center shadow-lg`}>
                      <img src={participant.faceImage} alt={participant.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
``

## src\app\logo\page.tsx

``tsx
export default function LogoPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <img
        src="/DesnineStudio.svg"
        alt="Desnine Studio"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
}

``

## src\app\layout.tsx

``tsx
import { Navbar } from "@/components/sections/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";


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
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "GraphicDesignAgency",
  "name": "Desnine",
  "description": "AI-powered digital marketing and design agency specializing in SEO optimization, website design & development, AI automation, and branding services.",
  "url": "https://desnine.com",
  "logo": "https://desnine.com/logo.png",
  "image": "https://desnine.com/agent-template-og.png",
  "telephone": "",
  "email": "info@desnine.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://x.com/desnine",
    "https://linkedin.com/company/desnine",
    "https://instagram.com/desnine"
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Optimization",
          "description": "Search engine optimization services to improve website rankings and drive organic traffic"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Design & Development",
          "description": "Custom website design and development services for businesses"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation",
          "description": "AI-powered automation solutions for business processes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branding & Identity Design",
          "description": "Complete branding and identity design services"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
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
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
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
          <div className="max-w-7xl mx-auto border-x relative">
            <div className="block w-px h-full border-l border-border absolute top-0 left-6 z-10"></div>
            <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10"></div>
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

``

## src\app\globals.css

``css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
  --animate-marquee: marquee var(--duration) infinite linear;
  --animate-marquee-vertical: marquee-vertical var(--duration) linear infinite;
  --animate-orbit: orbit calc(var(--duration) * 1s) linear infinite;
  --animate-slide-down: slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1);
  --animate-slide-up: slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1);
  --scaleIn: scaleIn 200ms ease;
  --scaleOut: scaleOut 200ms ease;
  --fadeIn: fadeIn 200ms ease;
  --fadeOut: fadeOut 200ms ease;
  --enterFromLeft: enterFromLeft 250ms ease;
  --enterFromRight: enterFromRight 250ms ease;
  --exitToLeft: exitToLeft 250ms ease;
  --exitToRight: exitToRight 250ms ease;
  --animate-elliptical-orbit: elliptical-orbit 20s linear infinite;
  @keyframes orbit {
    0% {
      transform: rotate(calc(var(--angle) * 1deg))
        translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg));
    }
    100% {
      transform: rotate(calc(var(--angle) * 1deg + 360deg))
        translateY(calc(var(--radius) * 1px))
        rotate(calc((var(--angle) * -1deg) - 360deg));
    }
  }

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }

  @keyframes marquee-vertical {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - var(--gap)));
    }
  }
  @keyframes slide-down {
    from {
      height: 0px;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slide-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0px;
    }
  }

  /* Add this to your globals.css */
  @keyframes enterFromRight {
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes enterFromLeft {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes exitToRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(200px);
    }
  }

  @keyframes exitToLeft {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-200px);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: rotateX(-30deg) scale(0.9);
    }
    to {
      opacity: 1;
      transform: rotateX(0deg) scale(1);
    }
  }

  @keyframes scaleOut {
    from {
      opacity: 1;
      transform: rotateX(0deg) scale(1);
    }
    to {
      opacity: 0;
      transform: rotateX(-10deg) scale(0.95);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes elliptical-orbit {
    from {
      transform: rotate(var(--angle, 0)deg) translate(var(--h-radius, 160px), 0) rotate(calc(var(--angle, 0)deg * -1));
    }
    to {
      transform: rotate(calc(var(--angle, 0)deg + 360deg)) translate(var(--h-radius, 160px), 0) rotate(calc((var(--angle, 0)deg + 360deg) * -1));
    }
  }

  --animate-meteor: meteor 5s linear infinite  
;
  @keyframes meteor {
  0% {
    transform: rotate(var(--angle)) translateX(0);
    opacity: 1;}
  70% {
    opacity: 1;}
  100% {
    transform: rotate(var(--angle)) translateX(-500px);
    opacity: 0;}}}

:root {
  --background: oklch(98.46% 0.002 247.84);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(45.2% 0.18 25.3);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(100% 0 0);
  --accent-foreground: oklch(96.7% 0.003 264.54);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(21.03% 0.006 285.89); /* #18181B */
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(45.2% 0.18 25.3); /* #da1b11 */
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(27.39% 0.005 286.03);
  --accent-foreground:oklch(98.46% 0.002 247.84)
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-background text-foreground;
  }
}


``

## src\app\privacy-policy\page.tsx

``tsx
"use client";

import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import { PrivacyHeaderSection } from "@/components/sections/privacy/privacy-header-section";
import { PrivacyArticleSection } from "@/components/sections/privacy/privacy-article-section";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-[radial-gradient(1200px_500px_at_20%_-10%,hsl(260_90%_18%/.25),transparent),radial-gradient(1200px_600px_at_120%_10%,hsl(0_0%_100%/.06),transparent)]">
      <PrivacyHeaderSection />
      <PrivacyArticleSection />
      <ContactUsSection />
      <FooterSection />
    </main>
  );
}

``

## src\app\page.tsx

``tsx
import { BentoSection } from "@/components/sections/bento-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Hero2Section } from "@/components/sections/hero2-section";
import { ClientFeedback } from "@/components/ClientFeedback";
import { ProcessSection } from "@/components/PROCESS";
import { FAQSection } from "@/components/FAQ";
import HomeProjectsSection from "@/components/sections/home-work-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      
      {/* <HeroScrollTransition>
        <HeroSection />
      </HeroScrollTransition> */}

      <HeroSection />

      {/* <Desnine3DRotatingBG logoSrc="/D.png" /> */}
      


      {/* <ScrollTextAnimation /> */}
      {/* <CompanyShowcase /> */}

      <ClientFeedback />



      <Hero2Section />
      <BentoSection count={4} /> 


      {/* <Hero3Section />
      <HowWeWorkBentoSection /> */}
      
      {/* <p>
        The{" "}
        <Highlighter action="underline" color="#FF9800">
          Magic UI Highlighter
        </Highlighter>{" "}
        makes important{" "}
        <Highlighter action="highlight" color="#87CEFA">
          text stand out
        </Highlighter>{" "}
        effortlessly.
      </p> */}
      
      {/* <TestimonialsSection /> */}

      <ProcessSection />

      {/* <BadBrandingSection /> */}

      <HomeProjectsSection />
{/* 
      <BenefitsSection /> */}


      <FAQSection />



      {/* <DesnineAdvantageSection /> */}

      {/* <FeatureSection /> */}
      {/* <BlogSection /> */}
      {/* <PricingSection /> */}
      {/* <TestimonialSection /> */}
      {/* <FAQSection /> */}

      {/* <ScrollTextAnimation /> */}
      {/* Top filler for scrolling */}
      <TextReveal>So, are you ready to stand out?</TextReveal>
       


      <FooterSection />
    </main>
  );
}

``

## src\app\opengraph-image.tsx

``tsx
import { headers } from "next/headers";
import { ImageResponse } from "next/og";

// Configuration exports
export const runtime = "edge";
export const alt = "Desnine - AI-Powered Digital Marketing & Design Agency | Transform Your Business with Expert SEO, Web Design, AI Automation & Branding Services";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  try {
    // Get the host from headers
    const headersList = await headers();
    const host = headersList.get("host") || "";
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px',
              lineHeight: 1.2,
          }}
        >
            Desnine
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            AI-Powered Digital Marketing & Design Agency
          </p>
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            SEO â€¢ Web Design â€¢ AI Automation â€¢ Branding
          </p>
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(`Failed to generate image`, { status: 500 });
  }
}

``

## src\app\metadata.ts

``ts
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Desnine - AI-Powered Digital Marketing & Design Agency | SEO, Web Design, Branding",
    template: "%s | Desnine Digital Marketing Agency"
  },
  description: "Transform your business with Desnine's AI-powered digital marketing services. Expert SEO optimization, website design & development, AI automation, branding & identity design.",
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
    description: "Transform your business with Desnine's AI-powered digital marketing services. Expert SEO optimization, website design & development, AI automation, branding & identity design.",
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
    description: "Transform your business with AI-powered digital marketing services. Expert SEO, web design, AI automation & branding.",
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

``

## src\app\work\quixel\page.tsx

``tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import RelatedProjectsSection from "@/components/sections/related-projects-section";

interface BannerProps {
  src: string;
  alt?: string;
  aspect?: string;   // tailwind aspect utility, e.g. "aspect-[16/9]"
  rounded?: boolean;
}

function Banner({
  src,
  alt = "Project Banner",
  aspect = "aspect-[16/9]",
  rounded = true,
}: BannerProps) {
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden ${
        rounded ? "rounded-lg" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`object-cover ${rounded ? "rounded-lg" : ""}`}
      />
    </div>
  );
}

function TopOnlyBackButton() {
  const router = useRouter();
  return (
    <div
      className="
        absolute
        left-6 md:left-10        /* slightly more indentation */
        top-[calc(env(safe-area-inset-top,0px)+12px)]
        md:top-[calc(env(safe-area-inset-top,0px)+16px)]
        z-20
      "
    >
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-white font-medium hover:opacity-75 transition"
        aria-label="Go back"
      >
        <ChevronLeft className="h-4 w-4" />
        Go back
      </button>
    </div>
  );
}

export default function ServicePage() {
  const title = "Quixel";

  // Hide global header/nav while on this page
  useEffect(() => {
    const selectors = ["header", 'nav[role="navigation"]', "#site-header", ".site-header"];
    const hiddenEls: HTMLElement[] = [];

    selectors.forEach((sel) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        if (el.dataset._hiddenByPage === "1") return;
        el.dataset._hiddenByPage = "1";
        el.dataset._prevDisplay = el.style.display;
        el.style.display = "none";
        hiddenEls.push(el);
      });
    });

    return () => {
      hiddenEls.forEach((el) => {
        el.style.display = el.dataset._prevDisplay ?? "";
        delete el.dataset._hiddenByPage;
        delete el.dataset._prevDisplay;
      });
    };
  }, []);

  // Parallax scroll for hero
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="relative flex flex-col min-h-screen w-full">
      {/* Hero Banner */}
      <section ref={ref} className="relative w-full h-[70vh] overflow-hidden">
        <TopOnlyBackButton />
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/Quixel/66ca32212225893.6757693b01009.png"
            alt="Banner Image"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-6 left-8 md:left-12 text-white">
          {/* extra indentation on heading */}
          <h1
            className="text-3xl md:text-5xl font-bold drop-shadow-lg animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {title}
          </h1>
        </div>
      </section>

      {/* Project Summary */}
      <section className="w-full bg-transparent text-foreground py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-5">
            <h2 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
              The Project Summary :
            </h2>
            <p className="text-base leading-relaxed text-justify">
              Quixelâ€™s corporate identity was designed to encapsulate the essence of innovation and realism that defines its approach to 3D assets. 
              The identity integrates three core elements: a stylized globe, the letter Q, and a digital mesh motif. 
              Together, these elements symbolize the brandâ€™s commitment to blending creativity with cutting-edge technology, offering creators high-quality solutions.
            </p>
            <p className="text-base leading-relaxed text-justify">
              The system was built on a modular grid, enhancing depth, precision, and sophistication. A vibrant orange palette conveys energy, creativity, 
              and forward-thinking, while Helvetica Now provides a modern, cohesive typographic foundation. This identity not only reflects Quixelâ€™s mission 
              to empower artists but also strengthens its global presence in the 3D design landscape.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
                What We Did :
              </h3>
              <p className="text-base leading-relaxed">Logo &amp; Branding</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
                Category
              </h3>
              <p className="text-base leading-relaxed">
                Technology &amp; Empowerment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banners */}
      <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Quixel/b17ddc212225893.6757693aeb8be.png" alt="Project image 93" />
        <Banner src="/Quixel/a17123212225893.6757693b026a3.png" alt="Project image 57" />
        <Banner src="/Quixel/b536bd212225893.6757693aed217.png" alt="Project image 93" />
        <Banner src="/Quixel/7c465e212225893.6757693aecc37.png" alt="Project image 57" />
        <Banner src="/Quixel/d4aa80212225893.6757693aebf30.png" alt="Project image 93" />
        <Banner src="/Quixel/8c2e72212225893.6757693b04371.png" alt="Project image 57" />
        <Banner src="/Quixel/6c1f39212225893.6757693af16c0.png" alt="Project image 93" />
        <Banner src="/Quixel/7ee22c212225893.6757693af3967.png" alt="Project image 57" />
        <Banner src="/Quixel/38c587212225893.6757693aefab5.png" alt="Project image 93" />
        <Banner src="/Quixel/9b3540212225893.6757693b0382c.png" alt="Project image 57" />
        <Banner src="/Quixel/915e13212225893.6757693aed81f.png" alt="Project image 93" />
        <Banner src="/Quixel/07837a212225893.6757693aee378.png" alt="Project image 57" />
        <Banner src="/Quixel/b5bbab212225893.6757693af009c.png" alt="Project image 93" />
        <Banner src="/Quixel/fc7357212225893.6757693b03256.png" alt="Project image 57" />
        <Banner src="/Quixel/24c553212225893.6757693af2e32.png" alt="Project image 93" />
        <Banner src="/Quixel/25186e212225893.6757693b020e6.png" alt="Project image 57" />
        <Banner src="/Quixel/234d4e212225893.6757693aef49c.png" alt="Project image 93" />
        <Banner src="/Quixel/4a2762212225893.6757693b00218.png" alt="Project image 57" />
        <Banner src="/Quixel/b530a0212225893.6757693aee988.png" alt="Project image 93" />
        <Banner src="/Quixel/e0bb38212225893.6757693b02c5f.png" alt="Project image 57" />
        <Banner src="/Quixel/88c134212225893.6757693af0b97.png" alt="Project image 57" />
        <Banner src="/Quixel/664621212225893.6757693af21f5.png" alt="Project image 93" />
        <Banner src="/Quixel/eceb35212225893.6757693af2844.png" alt="Project image 57" />
        <Banner src="/Quixel/649135212225893.6757693b01b31.png" alt="Project image 93" />
      </section>

      

      <RelatedProjectsSection />
      <ContactUsSection />
      <FooterSection />

      {/* CSS-only animation */}
      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes fade-up {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-up {
            animation: fade-up 0.8s ease-out both;
            will-change: transform, opacity;
          }
        }
      `}</style>
    </main>
  );
}

``

## src\app\work\page.tsx

``tsx
import Image from "next/image"; // âœ… add this import

import { FooterSection } from "@/components/sections/footer-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { GrowthSection } from "@/components/sections/growth-section";
import { ProcessSection } from "@/components/sections/process-section";
import { WorkBentoSection } from "@/components/sections/work-bento-section";
import { ContactUsSection } from "@/components/sections/contact-us-section";

export default function WorkPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      {/* Work Content Section */}
      <section className="w-full py-16 px-5 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Our Work
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <span className="font-bold">Creative that connects. Design that delivers.</span>
            <br />
            We donâ€™t just design, we build visual stories that move people and grow brands.
            Each project below reflects our commitment to clarity, impact, and craft.
          </p>
        </div>
      </section>

      <WorkBentoSection count={4} />
      <ContactUsSection />
      <FooterSection />
    </main>
  );
}

``

## src\app\contact\page.tsx

``tsx
import { FooterSection } from "@/components/sections/footer-section";
import { ContactHeroSection } from "@/components/sections/contact/hero-section";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";
import { FAQSection } from "@/components/sections/contact/faq-section";

export default function ContactPage() {
  return (
    <main className="relative flex flex-col min-h-screen w-full m-0 bg-background pt-16 md:pt-20">
      <ContactHeroSection />
      <ContactFormSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}

``

## src\app\contact\layout.tsx

``tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Desnine - Creative Direction for Modern Brands",
  description: "Looking to elevate your brand? Get in touch with Desnine Studio for a free consultation on branding, modern web design, AI automation, and strategic creative solutions. Letâ€™s bring your vision to life.",
  keywords: [
    "creative direction for modern brands",
    "branding and design studio",
    "digital branding agency",
    "modern web design services",
    "creative design agency Canada",
    "brand identity design experts",
    "logo design for startups",
    "packaging design agency",
    "custom packaging and branding",
    "Webflow website design agency",
    "AI automation for marketing",
    "custom website and branding solutions",
    "visual branding for modern businesses",
    "graphic design studio Montreal",
    "branding and packaging design experts",
  ],
  
  
  openGraph: {
    title: "Contact Desnine - Creative Direction for Modern Brands",
    description: "Book your free consultation with Desnine Studio. Specializing in branding, design, automation & digital strategy for modern, forward-thinking brands.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
} 
``

## src\components\ui\VelocityMarqueeSectionProps.tsx

``tsx
"use client";

import { useEffect, useRef, useState } from "react";

const DESNINE_RED = "#B42B25";

export function ScrollVelocitySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const velocity = useRef(0);

  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      velocity.current = currentY - lastScrollY.current;
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let raf: number;
    const animate = () => {
      const speed = Math.min(Math.abs(velocity.current) * 0.35, 25);

      setOffset1((v) => v - speed);
      setOffset2((v) => v + speed);

      velocity.current *= 0.9; // smooth decay
      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden border-y border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-20">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            Momentum
            <span
              className="ml-2 inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: DESNINE_RED }}
            />
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            Scroll-driven motion
            <span style={{ color: DESNINE_RED }}>.</span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            A velocity-based marquee that reacts naturally to your scroll speed.
          </p>
        </div>

        {/* Marquee */}
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl border border-border bg-transparent py-10"
        >
          {/* Row 1 */}
          <div className="relative w-full overflow-hidden">
            <div
              className="whitespace-nowrap text-3xl md:text-6xl font-semibold tracking-tight"
              style={{
                transform: `translateX(${offset1 % 1000}px)`,
              }}
            >
              DESNINE â€¢ BRANDING â€¢ UI/UX â€¢ WEBSITES â€¢ AI â€¢
              <span style={{ color: DESNINE_RED }}> â— </span>
              DESNINE â€¢ BRANDING â€¢ UI/UX â€¢ WEBSITES â€¢ AI â€¢
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative mt-6 w-full overflow-hidden">
            <div
              className="whitespace-nowrap text-3xl md:text-6xl font-semibold tracking-tight"
              style={{
                transform: `translateX(${offset2 % 1000}px)`,
              }}
            >
              CREATIVE DIRECTION â€¢ DESIGN SYSTEMS â€¢ PERFORMANCE â€¢
              <span style={{ color: DESNINE_RED }}> â— </span>
              CREATIVE DIRECTION â€¢ DESIGN SYSTEMS â€¢ PERFORMANCE â€¢
            </div>
          </div>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
        </div>

        {/* Footer hint */}
        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: DESNINE_RED }}
          />
          Scroll to feel the velocity
        </div>
      </div>
    </section>
  );
}

``

## src\components\ui\textarea.tsx

``tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

``

## src\components\ui\scroll-area.tsx

``tsx
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }

``

## src\components\ui\response-stream.tsx

``tsx
"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";

export type Mode = "typewriter" | "fade";

export type UseTextStreamOptions = {
  textStream: string | AsyncIterable<string>;
  speed?: number;
  mode?: Mode;
  onComplete?: () => void;
  fadeDuration?: number;
  segmentDelay?: number;
  characterChunkSize?: number;
  onError?: (error: unknown) => void;
};

export type UseTextStreamResult = {
  displayedText: string;
  isComplete: boolean;
  segments: { text: string; index: number }[];
  getFadeDuration: () => number;
  getSegmentDelay: () => number;
  reset: () => void;
  startStreaming: () => void;
  pause: () => void;
  resume: () => void;
};

function useTextStream({
  textStream,
  speed = 20,
  mode = "typewriter",
  onComplete,
  fadeDuration,
  segmentDelay,
  characterChunkSize,
  onError,
}: UseTextStreamOptions): UseTextStreamResult {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [segments, setSegments] = useState<{ text: string; index: number }[]>(
    []
  );

  const speedRef = useRef(speed);
  const modeRef = useRef(mode);
  const currentIndexRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const fadeDurationRef = useRef(fadeDuration);
  const segmentDelayRef = useRef(segmentDelay);
  const characterChunkSizeRef = useRef(characterChunkSize);
  const streamRef = useRef<AbortController | null>(null);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    speedRef.current = speed;
    modeRef.current = mode;
    fadeDurationRef.current = fadeDuration;
    segmentDelayRef.current = segmentDelay;
    characterChunkSizeRef.current = characterChunkSize;
  }, [speed, mode, fadeDuration, segmentDelay, characterChunkSize]);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const getChunkSize = useCallback(() => {
    if (typeof characterChunkSizeRef.current === "number") {
      return Math.max(1, characterChunkSizeRef.current);
    }

    const normalizedSpeed = Math.min(100, Math.max(1, speedRef.current));

    if (modeRef.current === "typewriter") {
      if (normalizedSpeed < 25) return 1;
      return Math.max(1, Math.round((normalizedSpeed - 25) / 10));
    } else if (modeRef.current === "fade") {
      return 1;
    }

    return 1;
  }, []);

  const getProcessingDelay = useCallback(() => {
    if (typeof segmentDelayRef.current === "number") {
      return Math.max(0, segmentDelayRef.current);
    }

    const normalizedSpeed = Math.min(100, Math.max(1, speedRef.current));
    return Math.max(1, Math.round(100 / Math.sqrt(normalizedSpeed)));
  }, []);

  const getFadeDuration = useCallback(() => {
    if (typeof fadeDurationRef.current === "number")
      return Math.max(10, fadeDurationRef.current);

    const normalizedSpeed = Math.min(100, Math.max(1, speedRef.current));
    return Math.round(1000 / Math.sqrt(normalizedSpeed));
  }, []);

  const getSegmentDelay = useCallback(() => {
    if (typeof segmentDelayRef.current === "number")
      return Math.max(0, segmentDelayRef.current);

    const normalizedSpeed = Math.min(100, Math.max(1, speedRef.current));
    return Math.max(1, Math.round(100 / Math.sqrt(normalizedSpeed)));
  }, []);

  const updateSegments = useCallback(
    (text: string) => {
      if (modeRef.current === "fade") {
        try {
          const segmenter = new Intl.Segmenter(navigator.language, {
            granularity: "word",
          });
          const segmentIterator = segmenter.segment(text);
          const newSegments = Array.from(segmentIterator).map(
            (segment, index) => ({
              text: segment.segment,
              index,
            })
          );
          setSegments(newSegments);
        } catch (error) {
          const newSegments = text
            .split(/(\s+)/)
            .filter(Boolean)
            .map((word, index) => ({
              text: word,
              index,
            }));
          setSegments(newSegments);
          onError?.(error);
        }
      }
    },
    [onError]
  );

  const markComplete = useCallback(() => {
    if (!completedRef.current) {
      completedRef.current = true;
      setIsComplete(true);
      onCompleteRef.current?.();
    }
  }, []);

  const reset = useCallback(() => {
    currentIndexRef.current = 0;
    setDisplayedText("");
    setSegments([]);
    setIsComplete(false);
    completedRef.current = false;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const processStringTypewriter = useCallback(
    (text: string) => {
      let lastFrameTime = 0;

      const streamContent = (timestamp: number) => {
        const delay = getProcessingDelay();
        if (delay > 0 && timestamp - lastFrameTime < delay) {
          animationRef.current = requestAnimationFrame(streamContent);
          return;
        }
        lastFrameTime = timestamp;

        if (currentIndexRef.current >= text.length) {
          markComplete();
          return;
        }

        const chunkSize = getChunkSize();
        const endIndex = Math.min(
          currentIndexRef.current + chunkSize,
          text.length
        );
        const newDisplayedText = text.slice(0, endIndex);

        setDisplayedText(newDisplayedText);
        if (modeRef.current === "fade") {
          updateSegments(newDisplayedText);
        }

        currentIndexRef.current = endIndex;

        if (endIndex < text.length) {
          animationRef.current = requestAnimationFrame(streamContent);
        } else {
          markComplete();
        }
      };

      animationRef.current = requestAnimationFrame(streamContent);
    },
    [getProcessingDelay, getChunkSize, updateSegments, markComplete]
  );

  const processAsyncIterable = useCallback(
    async (stream: AsyncIterable<string>) => {
      const controller = new AbortController();
      streamRef.current = controller;

      let displayed = "";

      try {
        for await (const chunk of stream) {
          if (controller.signal.aborted) return;

          displayed += chunk;
          setDisplayedText(displayed);
          updateSegments(displayed);
        }

        markComplete();
      } catch (error) {
        console.error("Error processing text stream:", error);
        markComplete();
        onError?.(error);
      }
    },
    [updateSegments, markComplete, onError]
  );

  const startStreaming = useCallback(() => {
    reset();

    if (typeof textStream === "string") {
      processStringTypewriter(textStream);
    } else if (textStream) {
      processAsyncIterable(textStream);
    }
  }, [textStream, reset, processStringTypewriter, processAsyncIterable]);

  const pause = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const resume = useCallback(() => {
    if (typeof textStream === "string" && !isComplete) {
      processStringTypewriter(textStream);
    }
  }, [textStream, isComplete, processStringTypewriter]);

  useEffect(() => {
    startStreaming();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (streamRef.current) {
        streamRef.current.abort();
      }
    };
  }, [textStream, startStreaming]);

  return {
    displayedText,
    isComplete,
    segments,
    getFadeDuration,
    getSegmentDelay,
    reset,
    startStreaming,
    pause,
    resume,
  };
}

export type ResponseStreamProps = {
  textStream: string | AsyncIterable<string>;
  mode?: Mode;
  speed?: number; // 1-100, where 1 is slowest and 100 is fastest
  className?: string;
  onComplete?: () => void;
  as?: keyof React.JSX.IntrinsicElements; // Element type to render
  fadeDuration?: number; // Custom fade duration in ms (overrides speed)
  segmentDelay?: number; // Custom delay between segments in ms (overrides speed)
  characterChunkSize?: number; // Custom characters per frame for typewriter mode (overrides speed)
};

function ResponseStream({
  textStream,
  mode = "typewriter",
  speed = 20,
  className = "",
  onComplete,
  as = "div",
  fadeDuration,
  segmentDelay,
  characterChunkSize,
}: ResponseStreamProps) {
  const animationEndRef = useRef<(() => void) | null>(null);

  const {
    displayedText,
    isComplete,
    segments,
    getFadeDuration,
    getSegmentDelay,
  } = useTextStream({
    textStream,
    speed,
    mode,
    onComplete,
    fadeDuration,
    segmentDelay,
    characterChunkSize,
  });

  useEffect(() => {
    animationEndRef.current = onComplete ?? null;
  }, [onComplete]);

  const handleLastSegmentAnimationEnd = useCallback(() => {
    if (animationEndRef.current && isComplete) {
      animationEndRef.current();
    }
  }, [isComplete]);

  // fadeStyle is the style for the fade animation
  const fadeStyle = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    .fade-segment {
      display: inline-block;
      opacity: 0;
      animation: fadeIn ${getFadeDuration()}ms ease-out forwards;
    }

    .fade-segment-space {
      white-space: pre;
    }
  `;

  const renderContent = () => {
    switch (mode) {
      case "typewriter":
        return <>{displayedText}</>;

      case "fade":
        return (
          <>
            <style>{fadeStyle}</style>
            <div className="relative">
              {segments.map((segment, idx) => {
                const isWhitespace = /^\s+$/.test(segment.text);
                const isLastSegment = idx === segments.length - 1;

                return (
                  <span
                    key={`${segment.text}-${idx}`}
                    className={cn(
                      "fade-segment",
                      isWhitespace && "fade-segment-space"
                    )}
                    style={{
                      animationDelay: `${idx * getSegmentDelay()}ms`,
                    }}
                    onAnimationEnd={
                      isLastSegment ? handleLastSegmentAnimationEnd : undefined
                    }
                  >
                    {segment.text}
                  </span>
                );
              })}
            </div>
          </>
        );

      default:
        return <>{displayedText}</>;
    }
  };

  const Container = as as keyof React.JSX.IntrinsicElements;

  return <Container className={className}>{renderContent()}</Container>;
}

export { useTextStream, ResponseStream };

``

## src\components\ui\reasoning.tsx

``tsx
"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Markdown } from "./markdown";
import { useTextStream, type Mode } from "./response-stream";

type ReasoningContextType = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const ReasoningContext = createContext<ReasoningContextType | undefined>(
  undefined
);

function useReasoningContext() {
  const context = useContext(ReasoningContext);
  if (!context) {
    throw new Error(
      "useReasoningContext must be used within a Reasoning provider"
    );
  }
  return context;
}

export type ReasoningProps = {
  children: React.ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

function Reasoning({
  children,
  className,
  open,
  onOpenChange,
}: ReasoningProps) {
  const [internalOpen, setInternalOpen] = useState(true);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  return (
    <ReasoningContext.Provider
      value={{
        isOpen,
        onOpenChange: handleOpenChange,
      }}
    >
      <div className={className}>{children}</div>
    </ReasoningContext.Provider>
  );
}

export type ReasoningTriggerProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

function ReasoningTrigger({
  children,
  className,
  ...props
}: ReasoningTriggerProps) {
  const { isOpen, onOpenChange } = useReasoningContext();

  return (
    <button
      className={cn("flex cursor-pointer items-center gap-2", className)}
      onClick={() => onOpenChange(!isOpen)}
      {...props}
    >
      <span className="text-primary">{children}</span>
      <div
        className={cn(
          "transform transition-transform",
          isOpen ? "rotate-180" : ""
        )}
      >
        <ChevronDownIcon className="size-4" />
      </div>
    </button>
  );
}

export type ReasoningContentProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function ReasoningContent({
  children,
  className,
  ...props
}: ReasoningContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useReasoningContext();

  useEffect(() => {
    if (!contentRef.current || !innerRef.current) return;

    const observer = new ResizeObserver(() => {
      if (contentRef.current && innerRef.current && isOpen) {
        contentRef.current.style.maxHeight = `${innerRef.current.scrollHeight}px`;
      }
    });

    observer.observe(innerRef.current);

    if (isOpen) {
      contentRef.current.style.maxHeight = `${innerRef.current.scrollHeight}px`;
    }

    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <div
      ref={contentRef}
      className={cn(
        "overflow-hidden transition-[max-height] duration-300 ease-out",
        className
      )}
      style={{
        maxHeight: isOpen ? contentRef.current?.scrollHeight : "0px",
      }}
      {...props}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
}

export type ReasoningResponseProps = {
  text: string | AsyncIterable<string>;
  className?: string;
  speed?: number;
  mode?: Mode;
  onComplete?: () => void;
  fadeDuration?: number;
  segmentDelay?: number;
  characterChunkSize?: number;
};

function ReasoningResponse({
  text,
  className,
  speed = 20,
  mode = "typewriter",
  onComplete,
  fadeDuration,
  segmentDelay,
  characterChunkSize,
}: ReasoningResponseProps) {
  const { isOpen } = useReasoningContext();
  const { displayedText } = useTextStream({
    textStream: text,
    speed,
    mode,
    onComplete,
    fadeDuration,
    segmentDelay,
    characterChunkSize,
  });

  return (
    <div
      className={cn(
        "text-muted-foreground prose prose-sm dark:prose-invert text-sm transition-opacity duration-300 ease-out",
        className
      )}
      style={{
        opacity: isOpen ? 1 : 0,
      }}
    >
      <Markdown>{displayedText}</Markdown>
    </div>
  );
}

export { Reasoning, ReasoningTrigger, ReasoningContent, ReasoningResponse };

``

## src\components\ui\plane-animation.tsx

``tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

export function PlaneAnimation({ trigger }: { trigger: boolean }) {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          key="plane"
          initial={{ opacity: 0, x: -40, y: 40, rotate: -25 }}
          animate={{ opacity: 1, x: 300, y: -220, rotate: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="pointer-events-none absolute left-6 bottom-6"
        >
          <Send className="h-7 w-7 text-blue-500 drop-shadow" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

``

## src\components\ui\orbiting-circle.tsx

``tsx
"use client";

import { cn } from "@/lib/utils";
import { cubicBezier, HTMLMotionProps, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface OrbitingCirclesProps extends HTMLMotionProps<"div"> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
  index?: number;
  startAnimationDelay?: number;
  once?: boolean;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  index = 0,
  startAnimationDelay = 0,
  once = false,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView]);
  return (
    <>
      {path && (
        <motion.div ref={ref}>
          {shouldAnimate && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                delay: index * 0.2 + startAnimationDelay,
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 1,
              }}
              className="pointer-events-none absolute inset-0"
              style={{
                width: radius * 2,
                height: radius * 2,
                left: `calc(50% - ${radius}px)`,
                top: `calc(50% - ${radius}px)`,
              }}
            >
              <div
                className={cn(
                  "size-full rounded-full",
                  "border border-[0,0,0,0.07] dark:border-[rgba(249,250,251,0.07)]",
                  "bg-gradient-to-b from-[rgba(0,0,0,0.05)] from-0% via-[rgba(249,250,251,0.00)] via-54.76%",
                  "dark:bg-gradient-to-b dark:from-[rgba(249,250,251,0.03)] dark:from-0% dark:via-[rgba(249,250,251,0.00)] dark:via-54.76%",
                  className,
                )}
              />
            </motion.div>
          )}
        </motion.div>
      )}
      {shouldAnimate &&
        React.Children.map(children, (child, index) => {
          const angle = (360 / React.Children.count(children)) * index;
          return (
            <div
              style={
                {
                  "--duration": calculatedDuration,
                  "--radius": radius * 0.98,
                  "--angle": angle,
                  "--icon-size": `${iconSize}px`,
                } as React.CSSProperties
              }
              className={cn(
                "absolute flex size-[var(--icon-size)] z-20 p-1 transform-gpu animate-orbit items-center justify-center rounded-full",
                { "[animation-direction:reverse]": reverse },
              )}
            >
              <motion.div
                key={`orbit-child-${index}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.2 + startAnimationDelay,
                  ease: cubicBezier(0, 0, 0.58, 1),
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  mass: 1,
                }}
                {...props}
              >
                {child}
              </motion.div>
            </div>
          );
        })}
    </>
  );
}

``

## src\components\ui\marquee.tsx

``tsx
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

``

## src\components\ui\markdown.tsx

``tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { marked } from "marked";
import { memo, useId, useMemo } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock, CodeBlockCode } from "./code-block";

export type MarkdownProps = {
  children: string;
  id?: string;
  className?: string;
  components?: Partial<Components>;
};

function parseMarkdownIntoBlocks(markdown: string): string[] {
  const tokens = marked.lexer(markdown);
  return tokens.map((token: any) => token.raw);
}

function extractLanguage(className?: string): string {
  if (!className) return "plaintext";
  const match = className.match(/language-(\w+)/);
  return match ? match[1] : "plaintext";
}

const INITIAL_COMPONENTS: Partial<Components> = {
  code: function CodeComponent({ className, children, ...props }: any) {
    const isInline =
      !props.node?.position?.start.line ||
      props.node?.position?.start.line === props.node?.position?.end.line;

    if (isInline) {
      return (
        <span
          className={cn(
            "bg-primary-foreground rounded-sm px-1 font-mono text-sm",
            className
          )}
          {...props}
        >
          {children}
        </span>
      );
    }

    const language = extractLanguage(className);

    return (
      <CodeBlock className={className}>
        <CodeBlockCode code={children as string} language={language} />
      </CodeBlock>
    );
  },
  pre: function PreComponent({ children }: any) {
    return <>{children}</>;
  },
};

const MemoizedMarkdownBlock = memo(
  function MarkdownBlock({
    content,
    components = INITIAL_COMPONENTS,
  }: {
    content: string;
    components?: Partial<Components>;
  }) {
    return (
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    );
  },
  function propsAreEqual(prevProps: any, nextProps: any) {
    return prevProps.content === nextProps.content;
  }
);

MemoizedMarkdownBlock.displayName = "MemoizedMarkdownBlock";

function MarkdownComponent({
  children,
  id,
  className,
  components = INITIAL_COMPONENTS,
}: MarkdownProps) {
  const generatedId = useId();
  const blockId = id ?? generatedId;
  const blocks = useMemo(() => parseMarkdownIntoBlocks(children), [children]);

  return (
    <div className={className}>
      {blocks.map((block, index) => (
        <MemoizedMarkdownBlock
          key={`${blockId}-block-${index}`}
          content={block}
          components={components}
        />
      ))}
    </div>
  );
}

const Markdown = memo(MarkdownComponent);
Markdown.displayName = "Markdown";

export { Markdown };

``

## src\components\ui\label.tsx

``tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }

``

## src\components\ui\input.tsx

``tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }

``

## src\components\ui\HeroShaderBackground.tsx

``tsx
"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

type HeroShaderBackgroundProps = {
  className?: string;
};

export default function HeroShaderBackground({
  className = "",
}: HeroShaderBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden
    >
      <ShaderGradientCanvas
        style={{ width: "100%", height: "100%" }}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="sphere"
          shader="defaults"
          uSpeed={0.3}
          uStrength={0.3}
          uDensity={0.8}
          uFrequency={5.5}
          uAmplitude={3.2}
          positionX={-0.1}
          positionY={0}
          positionZ={0}
          rotationX={0}
          rotationY={130}
          rotationZ={70}
          color1="#73bfc4"
          color2="#ff810a"
          color3="#8da0ce"
          reflection={0.4}
          cAzimuthAngle={270}
          cPolarAngle={180}
          cDistance={0.5}
          cameraZoom={15.1}
          brightness={0.8}
          envPreset="city"
          grain="on"
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          enableTransition={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}

``

## src\components\ui\HeroScrollTransition.tsx

``tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedGridPattern } from "../magicui/AnimatedGridPatternProps";
import { DotPattern } from "./DotPatternProps";

const DESNINE_RED = "#B42B25";

type HeroScrollTransitionProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function HeroScrollTransition({
  title = "Desnine Studio",
  subtitle = "Clean websites. Strong brands. Built to convert.",
  children,
}: HeroScrollTransitionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /** HERO GOES AWAY */
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.6], [0, -4]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.15]);

  /** NEXT SECTION COMES IN */
  const nextScale = useTransform(scrollYProgress, [0.35, 1], [0.92, 1]);
  const nextRotate = useTransform(scrollYProgress, [0.35, 1], [4, 0]);
  const nextY = useTransform(scrollYProgress, [0.35, 1], [40, 0]);
  const nextOpacity = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  return (
    <main
      ref={containerRef}
      className="relative h-[200vh] w-full overflow-x-hidden bg-background"
    >
      {/* HERO */}
      <motion.section
        style={{
          scale: heroScale,
          rotate: heroRotate,
          opacity: heroOpacity,
        }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Background */}
        
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#f2f2f2] to-[#e9e9e9] dark:from-[#0b0b12] dark:to-[#06060e]" /> */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" /> */}

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            {title}
            <span style={{ color: DESNINE_RED }}>.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
            {subtitle}
          </p>

          <p className="mt-10 text-sm text-muted-foreground">
            Scroll down <span style={{ color: DESNINE_RED }}>â†“</span>
          </p>
        </div>
      </motion.section>

      {/* NEXT SECTION */}
      <motion.section
        style={{
          scale: nextScale,
          rotate: nextRotate,
          y: nextY,
          opacity: nextOpacity,
        }}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#101018] to-[#06060e]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" /> */}

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 h-full flex items-center">
          {children ?? <DefaultNext />}
        </div>
      </motion.section>
    </main>
  );
}

function DefaultNext() {
  return (
    <div className="grid md:grid-cols-2 gap-8 text-white">
      <div>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          The hero transitions into real content<span style={{ color: DESNINE_RED }}>.</span>
        </h2>
        <p className="mt-5 text-white/70 text-lg">
          Replace this block with your Bento, Process, or Services section.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="font-semibold">Next Section Placeholder</p>
        <p className="mt-3 text-white/70">
          Drop your real component here.
        </p>
      </div>
    </div>
  );
}

``

## src\components\ui\hero-video-dialog.tsx

``tsx
/* eslint-disable @next/next/no-img-element */
"use client";

import { Play, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  /** Can be any YouTube URL: watch, youtu.be, or /embed */
  videoSrc: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants = {
  "from-bottom": { initial: { y: "100%", opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: "100%", opacity: 0 } },
  "from-center": { initial: { scale: 0.5, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.5, opacity: 0 } },
  "from-top": { initial: { y: "-100%", opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: "-100%", opacity: 0 } },
  "from-left": { initial: { x: "-100%", opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: "-100%", opacity: 0 } },
  "from-right": { initial: { x: "100%", opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: "100%", opacity: 0 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
  "top-in-bottom-out": { initial: { y: "-100%", opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: "100%", opacity: 0 } },
  "left-in-right-out": { initial: { x: "-100%", opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: "100%", opacity: 0 } },
};

// --- helper: normalize any YouTube URL into an embed URL that loops ---
function toLoopingYouTubeEmbed(url: string) {
  try {
    const u = new URL(url);
    let id = "";

    // cases we handle: /watch?v=ID, youtu.be/ID, /embed/ID
    if (u.hostname.includes("youtu.be")) {
      id = u.pathname.replace("/", "");
    } else if (u.pathname.includes("/watch")) {
      id = u.searchParams.get("v") || "";
    } else if (u.pathname.includes("/embed/")) {
      id = u.pathname.split("/").pop() || "";
    } else if (u.searchParams.get("v")) {
      id = u.searchParams.get("v") || "";
    }

    if (!id) {
      // fallback: assume original is already an embed with params
      return url;
    }

    const embed = new URL(`https://www.youtube.com/embed/${id}`);
    // required for loop on single video
    embed.searchParams.set("loop", "1");
    embed.searchParams.set("playlist", id);
    // smooth autoplay across browsers/mobile
    embed.searchParams.set("autoplay", "1");
    embed.searchParams.set("mute", "1");
    embed.searchParams.set("playsinline", "1");
    // optional niceties (can remove if you want default UI)
    embed.searchParams.set("rel", "0");
    embed.searchParams.set("modestbranding", "1");
    embed.searchParams.set("controls", "0");

    return embed.toString();
  } catch {
    return url;
  }
}

export function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

  // ensure looping/autoplay URL every time
  const embedSrc = useMemo(() => toLoopingYouTubeEmbed(videoSrc), [videoSrc]);

  return (
    <div className={cn("relative", className)}>
      <div className="group relative cursor-pointer" onClick={() => setIsVideoOpen(true)}>
        {thumbnailSrc ? (
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            width={1920}
            height={1080}
            className="w-full transition-all duration-200 ease-out group-hover:brightness-[0.8] isolate rounded-2xl"
          />
        ) : (
          <div className="w-full aspect-video bg-background rounded-2xl" />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex size-28 items-center justify-center rounded-full bg-gradient-to-t from-secondary/20 to-[#ACC3F7/15] backdrop-blur-md">
            <div className="relative flex size-20 items-center justify-center rounded-full bg-gradient-to-t from-secondary to-white/10 shadow-md transition-all duration-200 ease-out group-hover:scale-[1.05]">
              <Play
                className="size-8 fill-white text-white"
                style={{ filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))" }}
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsVideoOpen(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <motion.button
                className="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black hover:scale-95 transition"
                onClick={() => setIsVideoOpen(false)}
                aria-label="Close video"
              >
                <XIcon className="size-5" />
              </motion.button>

              <div className="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white">
                <iframe
                  title="Hero video"
                  src={embedSrc}
                  className="size-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

``

## src\components\ui\Gradient.tsx

``tsx
'use client';
import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
function index() {
  return (
    <>
      <div 
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(
            140% 100% at 50% 0%,
            rgba(180, 43, 37, 0.25) 0%,
            rgba(180, 43, 37, 0.15) 25%,
            rgba(180, 43, 37, 0.06) 45%,
            transparent 3ÃŸ0%
      )
       `,
      }}
      >
        <ShaderGradientCanvas
          style={{
            width: '100%',
            height: '100%',
          }}
          lazyLoad={undefined}
          fov={undefined}
          pixelDensity={1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="sphere"
            wireframe={false}
            shader="defaults"
            uTime={0}
            uSpeed={0.3}
            uStrength={0.3}
            uDensity={0.8}
            uFrequency={5.5}
            uAmplitude={3.2}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={130}
            rotationZ={70}
            color1="#73bfc4"
            color2="#ff810a"
            color3="#8da0ce"
            reflection={0.4}
            cAzimuthAngle={270}
            cPolarAngle={180}
            cDistance={0.5}
            cameraZoom={15.1}
            lightType="env"
            brightness={0.8}
            envPreset="city"
            grain="on"
            toggleAxis={false}
            zoomOut={false}
            hoverState=""
            enableTransition={false}
          />
        </ShaderGradientCanvas>
      </div>
    </>
  );
}
export default index;

``

## src\components\ui\globe.tsx

``tsx
"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

// Define color configurations for light and dark modes
const COLORS = {
  light: {
    base: [1, 1, 1] as [number, number, number],
    glow: [255/255, 100/255, 100/255] as [number, number, number], // Soft light red glow
    marker: [218/255, 27/255, 17/255] as [number, number, number], // Red markers #da1b11
  },
  dark: {
    base: [0.4, 0.4, 0.4] as [number, number, number],
    glow: [255/255, 80/255, 80/255] as [number, number, number], // Soft red glow
    marker: [218/255, 27/255, 17/255] as [number, number, number], // Red markers #da1b11
  },
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const finalConfig = useMemo(
    () => ({
      ...config,
      baseColor: isDarkMode ? COLORS.dark.base : COLORS.light.base,
      glowColor: isDarkMode ? COLORS.dark.glow : COLORS.light.glow,
      markerColor: COLORS.light.marker,
      dark: isDarkMode ? 1 : 0,
      diffuse: isDarkMode ? 0.5 : 0.4,
      mapBrightness: isDarkMode ? 1.4 : 1.2,
    }),
    [config, isDarkMode]
  );

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...finalConfig,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phiRef.current += 0.005;
        state.phi = phiRef.current + rs.get();
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, finalConfig]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

``

## src\components\ui\flickering-grid.tsx

``tsx
"use client";

import { cn, colorWithOpacity, getRGBA } from "@/lib/utils";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string; // Can be any valid CSS color including hex, rgb, rgba, hsl, var(--color)
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
  text?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: number | string;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 3,
  gridGap = 3,
  flickerChance = 0.2,
  color = "#B4B4B4",
  width,
  height,
  className,
  maxOpacity = 0.15,
  text = "",
  fontSize = 140,
  fontWeight = 600,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  // Convert any CSS color to rgba for optimal canvas performance
  const memoizedColor = useMemo(() => {
    return getRGBA(color);
  }, [color]);

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number,
    ) => {
      ctx.clearRect(0, 0, width, height);

      // Create a separate canvas for the text mask
      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = width;
      maskCanvas.height = height;
      const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
      if (!maskCtx) return;

      // Draw text on mask canvas
      if (text) {
        maskCtx.save();
        maskCtx.scale(dpr, dpr);
        maskCtx.fillStyle = "white";
        maskCtx.font = `${fontWeight} ${fontSize}px "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
        maskCtx.textAlign = "center";
        maskCtx.textBaseline = "middle";
        maskCtx.fillText(text, width / (2 * dpr), height / (2 * dpr));
        maskCtx.restore();
      }

      // Draw flickering squares with optimized RGBA colors
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * (squareSize + gridGap) * dpr;
          const y = j * (squareSize + gridGap) * dpr;
          const squareWidth = squareSize * dpr;
          const squareHeight = squareSize * dpr;

          const maskData = maskCtx.getImageData(
            x,
            y,
            squareWidth,
            squareHeight,
          ).data;
          const hasText = maskData.some(
            (value, index) => index % 4 === 0 && value > 0,
          );

          const opacity = squares[i * rows + j];
          const finalOpacity = hasText
            ? Math.min(1, opacity * 3 + 0.4)
            : opacity;

          ctx.fillStyle = colorWithOpacity(memoizedColor, finalOpacity);
          ctx.fillRect(x, y, squareWidth, squareHeight);
        }
      }
    },
    [memoizedColor, squareSize, gridGap, text, fontSize, fontWeight],
  );

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const cols = Math.ceil(width / (squareSize + gridGap));
      const rows = Math.ceil(height / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, maxOpacity],
  );

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let gridParams: ReturnType<typeof setupCanvas>;

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };

    updateCanvasSize();

    let lastTime = 0;
    const animate = (time: number) => {
      if (!isInView) return;

      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      updateSquares(gridParams.squares, deltaTime);
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr,
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    intersectionObserver.observe(canvas);

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn(`h-full w-full ${className}`)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  );
};

``

## src\components\ui\feature-slideshow.tsx

``tsx
"use client";

import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
} & Accordion.AccordionItemProps;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "mt-px overflow-hidden focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "group flex h-[45px] flex-1 cursor-pointer items-center justify-between p-3 text-[15px] leading-none outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = {
  children: ReactNode;
  className?: string;
} & Accordion.AccordionContentProps;

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "overflow-hidden text-[15px] font-medium data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="p-3">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

type FeatureItem = {
  id: number;
  title: string;
  content: string;
  image?: string;
  video?: string;
};
type FeatureProps = {
  collapseDelay?: number;
  ltr?: boolean;
  linePosition?: "left" | "right" | "top" | "bottom";
  lineColor?: string;
  featureItems: FeatureItem[];
};

export const Feature = ({
  collapseDelay = 5000,
  ltr = false,
  linePosition = "left",
  lineColor = "bg-neutral-500 dark:bg-white",
  featureItems,
}: FeatureProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [previousIndex, setPreviousIndex] = useState<number>(-1);

  const carouselRef = useRef<HTMLUListElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(-1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isInView]);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelectorAll(".card")[index];
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const offset =
          cardRect.left -
          carouselRect.left -
          (carouselRect.width - cardRect.width) / 2;

        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + offset,
          behavior: "smooth",
        });
      }
    }
  };

  // interval for changing images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex !== undefined ? (prevIndex + 1) % featureItems.length : 0
      );
    }, collapseDelay);

    return () => clearInterval(timer);
  }, [collapseDelay, currentIndex, featureItems.length]);

  useEffect(() => {
    const handleAutoScroll = () => {
      const nextIndex =
        (currentIndex !== undefined ? currentIndex + 1 : 0) %
        featureItems.length;
      scrollToIndex(nextIndex);
    };

    const autoScrollTimer = setInterval(handleAutoScroll, collapseDelay);

    return () => clearInterval(autoScrollTimer);
  }, [collapseDelay, currentIndex, featureItems.length]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = () => {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.querySelector(".card")?.clientWidth || 0;
        const newIndex = Math.min(
          Math.floor(scrollLeft / cardWidth),
          featureItems.length - 1
        );
        setCurrentIndex(newIndex);
      };

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [featureItems.length]);

  // Handle image transition
  useEffect(() => {
    if (currentIndex !== previousIndex) {
      setImageLoaded(false);
      setPreviousIndex(currentIndex);
    }
  }, [currentIndex, previousIndex]);

  // Replace the existing image rendering section with this optimized version
  const renderMedia = () => {
    const currentItem = featureItems[currentIndex];

    if (!currentItem) {
      return (
        <div className="aspect-auto h-full w-full rounded-xl border border-neutral-300/50 bg-gray-200 p-1 animate-pulse" />
      );
    }

    if (currentItem.image) {
      return (
        <div className="relative h-full w-full overflow-hidden">
          {/* Placeholder/Fallback */}
          <div
            className={cn(
              "absolute inset-0 bg-gray-200 rounded-xl border border-neutral-300/50",
              "transition-all duration-150",
              imageLoaded ? "opacity-0" : "opacity-100"
            )}
          />

          {/* Main Image */}
          <motion.img
            key={currentIndex}
            src={currentItem.image}
            alt={currentItem.title}
            className={cn(
              "aspect-auto h-full w-full rounded-xl border border-neutral-300/50 object-cover p-1",
              "transition-all duration-300",
              imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-xl"
            )}
            initial={{
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: imageLoaded ? 1 : 0,
              filter: imageLoaded ? "blur(0px)" : "blur(5px)",
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      );
    }

    if (currentItem.video) {
      return (
        <video
          preload="auto"
          src={currentItem.video}
          className="aspect-auto h-full w-full rounded-lg object-cover"
          autoPlay
          loop
          muted
          playsInline // Better mobile support
        />
      );
    }

    return (
      <div className="aspect-auto h-full w-full rounded-xl border border-neutral-300/50 bg-gray-200 p-1" />
    );
  };

  return (
    <div ref={ref} className="w-full">
      <div className="flex w-full flex-col items-center justify-center max-w-7xl mx-auto">
        <div className="grid h-full grid-cols-5 gap-x-10 px-10 md:px-20 items-center w-full">
          <div
            className={`col-span-2 w-full h-full hidden lg:flex md:items-center ${
              ltr ? "md:order-2 md:justify-end" : "justify-start"
            }`}
          >
            <Accordion.Root
              className="w-full h-full flex flex-col gap-8"
              type="single"
              defaultValue={`item-${currentIndex}`}
              value={`item-${currentIndex}`}
              onValueChange={(value) =>
                setCurrentIndex(Number(value.split("-")[1]))
              }
            >
              {featureItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  className={cn(
                    "relative data-[state=open]:bg-white dark:data-[state=open]:bg-[#27272A] rounded-lg data-[state=closed]:rounded-none data-[state=closed]:border-0",
                    "dark:data-[state=open]:shadow-[0px_0px_0px_1px_rgba(249,250,251,0.06),0px_0px_0px_1px_var(--color-zinc-800,#27272A),0px_1px_2px_-0.5px_rgba(0,0,0,0.24),0px_2px_4px_-1px_rgba(0,0,0,0.24)]",
                    "data-[state=open]:shadow-[0px_0px_1px_0px_rgba(0,0,0,0.16),0px_1px_2px_-0.5px_rgba(0,0,0,0.16)]"
                  )}
                  value={`item-${index}`}
                >
                  <div
                    className={cn(
                      "absolute overflow-hidden rounded-lg transition-opacity",
                      "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
                      "bg-neutral-300/50 dark:bg-neutral-300/30",
                      {
                        "bottom-0 top-0 h-full w-0.5 left-0":
                          linePosition === "left",
                        "bottom-0 top-0 h-full w-0.5 right-0":
                          linePosition === "right",
                        "left-0 right-0 top-0 h-0.5 w-full":
                          linePosition === "top",
                        "left-0 right-0 bottom-0 h-0.5 w-full":
                          linePosition === "bottom",
                      }
                    )}
                    data-state={currentIndex === index ? "open" : "closed"}
                  >
                    <div
                      className={cn(
                        "absolute transition-all ease-linear",
                        lineColor,
                        {
                          "left-0 top-0 w-full": ["left", "right"].includes(
                            linePosition
                          ),
                          "left-0 top-0 h-full": ["top", "bottom"].includes(
                            linePosition
                          ),
                        },
                        currentIndex === index
                          ? ["left", "right"].includes(linePosition)
                            ? "h-full"
                            : "w-full"
                          : ["left", "right"].includes(linePosition)
                          ? "h-0"
                          : "w-0"
                      )}
                      style={{
                        transitionDuration:
                          currentIndex === index ? `${collapseDelay}ms` : "0s",
                      }}
                    />
                  </div>
                  <AccordionTrigger className="font-semibold text-lg tracking-tight text-left">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-medium">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion.Root>
          </div>
          <div
            className={`col-span-5 h-[350px] min-h-[200px] w-auto lg:col-span-3 ${
              ltr && "md:order-1"
            }`}
          >
            {renderMedia()}
          </div>

          <ul
            ref={carouselRef}
            className="col-span-5 flex snap-x flex-nowrap overflow-x-auto [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_10%,white_90%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_10%,white_90%,transparent)] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden snap-mandatory"
            style={{
              padding: "50px calc(50%)",
            }}
          >
            {featureItems.map((item, index) => (
              <a
                key={item.id}
                className="card relative grid h-full max-w-64 shrink-0 items-start justify-center p-3 bg-background border-l last:border-r border-t border-b first:rounded-tl-xl last:rounded-tr-xl"
                onClick={() => setCurrentIndex(index)}
                style={{
                  scrollSnapAlign: "center",
                }}
              >
                <div
                  className={cn(
                    "absolute overflow-hidden rounded-lg transition-opacity",
                    "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
                    "bg-neutral-300/50 dark:bg-neutral-300/30",
                    {
                      "bottom-0 top-0 h-full w-0.5 left-0":
                        linePosition === "left",
                      "bottom-0 top-0 h-full w-0.5 right-0":
                        linePosition === "right",
                      "left-0 right-0 top-0 h-0.5 w-full":
                        linePosition === "top",
                      "left-0 right-0 bottom-0 h-0.5 w-full":
                        linePosition === "bottom",
                    }
                  )}
                  data-state={currentIndex === index ? "open" : "closed"}
                >
                  <div
                    className={cn(
                      "absolute transition-all ease-linear",
                      lineColor,
                      {
                        "left-0 top-0 w-full": ["left", "right"].includes(
                          linePosition
                        ),
                        "left-0 top-0 h-full": ["top", "bottom"].includes(
                          linePosition
                        ),
                      },
                      currentIndex === index
                        ? ["left", "right"].includes(linePosition)
                          ? "h-full"
                          : "w-full"
                        : ["left", "right"].includes(linePosition)
                        ? "h-0"
                        : "w-0"
                    )}
                    style={{
                      transitionDuration:
                        currentIndex === index ? `${collapseDelay}ms` : "0s",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="mx-0 max-w-sm text-balance text-sm font-medium leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

``

## src\components\ui\DotPatternProps.tsx

``tsx
"use client"

import React, { useEffect, useId, useRef, useState } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

/**
 *  DotPattern Component Props
 *
 * @param {number} [width=16] - The horizontal spacing between dots
 * @param {number} [height=16] - The vertical spacing between dots
 * @param {number} [x=0] - The x-offset of the entire pattern
 * @param {number} [y=0] - The y-offset of the entire pattern
 * @param {number} [cx=1] - The x-offset of individual dots
 * @param {number} [cy=1] - The y-offset of individual dots
 * @param {number} [cr=1] - The radius of each dot
 * @param {string} [className] - Additional CSS classes to apply to the SVG container
 * @param {boolean} [glow=false] - Whether dots should have a glowing animation effect
 */
interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
  glow?: boolean
  [key: string]: unknown
}

/**
 * DotPattern Component
 *
 * A React component that creates an animated or static dot pattern background using SVG.
 * The pattern automatically adjusts to fill its container and can optionally display glowing dots.
 *
 * @component
 *
 * @see DotPatternProps for the props interface.
 *
 * @example
 * // Basic usage
 * <DotPattern />
 *
 * // With glowing effect and custom spacing
 * <DotPattern
 *   width={20}
 *   height={20}
 *   glow={true}
 *   className="opacity-50"
 * />
 *
 * @notes
 * - The component is client-side only ("use client")
 * - Automatically responds to container size changes
 * - When glow is enabled, dots will animate with random delays and durations
 * - Uses Motion for animations
 * - Dots color can be controlled via the text color utility classes
 */

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}: DotPatternProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const dots = Array.from(
    {
      length:
        Math.ceil(dimensions.width / width) *
        Math.ceil(dimensions.height / height),
    },
    (_, i) => {
      const col = i % Math.ceil(dimensions.width / width)
      const row = Math.floor(i / Math.ceil(dimensions.width / width))
      return {
        x: col * width + cx,
        y: row * height + cy,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      }
    }
  )

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80",
        className
      )}
      {...props}
    >
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      {dots.map((dot, index) => (
        <motion.circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={glow ? `url(#${id}-gradient)` : "currentColor"}
          initial={glow ? { opacity: 0.4, scale: 1 } : {}}
          animate={
            glow
              ? {
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.5, 1],
                }
              : {}
          }
          transition={
            glow
              ? {
                  duration: dot.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: dot.delay,
                  ease: "easeInOut",
                }
              : {}
          }
        />
      ))}
    </svg>
  )
}

``

## src\components\ui\code-block.tsx

``tsx
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

export type CodeBlockProps = {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  return (
    <div
      className={cn(
        "not-prose flex w-full flex-col overflow-clip border",
        "border-border bg-card text-card-foreground rounded-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type CodeBlockCodeProps = {
  code: string;
  language?: string;
  theme?: string;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

function CodeBlockCode({
  code,
  language = "tsx",
  theme = "github-light",
  className,
  ...props
}: CodeBlockCodeProps) {
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null);

  useEffect(() => {
    async function highlight() {
      const html = await codeToHtml(code, { lang: language, theme });
      setHighlightedHtml(html);
    }
    highlight();
  }, [code, language, theme]);

  const classNames = cn(
    "w-full overflow-x-auto text-[13px] [&>pre]:px-4 [&>pre]:py-4",
    className
  );

  // SSR fallback: render plain code if not hydrated yet
  return highlightedHtml ? (
    <div
      className={classNames}
      dangerouslySetInnerHTML={{ __html: highlightedHtml }}
      {...props}
    />
  ) : (
    <div className={classNames} {...props}>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export type CodeBlockGroupProps = React.HTMLAttributes<HTMLDivElement>;

function CodeBlockGroup({
  children,
  className,
  ...props
}: CodeBlockGroupProps) {
  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { CodeBlockGroup, CodeBlockCode, CodeBlock };

``

## src\components\ui\chart.tsx

``tsx
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"]
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div"> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  }) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
          const indicatorColor = color || item.payload.fill || item.color

          return (
            <div
              key={item.dataKey}
              className={cn(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center"
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                          {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          }
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> &
  Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean
    nameKey?: string
  }) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div
            key={item.value}
            className={cn(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}

``

## src\components\ui\card.tsx

``tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

``

## src\components\ui\button.tsx

``tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

``

## src\components\ui\alert-dialog.tsx

``tsx
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

``

## src\components\ui\accordion.tsx

``tsx
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

``

## src\components\TowerLoader.tsx

``tsx
"use client";

type TowerLoaderProps = {
  scale?: number;
  duration?: string; // e.g. "4s"
  redLeft?: string;
  redRight?: string;
  redTop?: string;
  className?: string;
};

export default function TowerLoader({
  scale = 2.4,
  duration = "4s",
  redLeft = "#5f0000",
  redRight = "#7A0000",
  redTop = "#b10000",
  className = "",
}: TowerLoaderProps) {
  return (
    <>
      <style jsx>{`
        .loader {
          height: 50px;
          width: 40px;
          transform: scale(${scale});
          transform-origin: center;
        }

        .box {
          position: relative;
          opacity: 0;
          left: 10px;
        }

        .side-left {
          position: absolute;
          background-color: ${redLeft};
          width: 19px;
          height: 5px;
          transform: skew(0deg, -25deg);
          top: 14px;
          left: 10px;
        }

        .side-right {
          position: absolute;
          background-color: ${redRight};
          width: 19px;
          height: 5px;
          transform: skew(0deg, 25deg);
          top: 14px;
          left: -9px;
        }

        .side-top {
          position: absolute;
          background-color: ${redTop};
          width: 20px;
          height: 20px;
          rotate: 45deg;
          transform: skew(-20deg, -20deg);
        }

        .box-1 {
          animation: from-left ${duration} infinite;
        }

        .box-2 {
          animation: from-right ${duration} infinite;
          animation-delay: calc(${duration} / 4);
        }

        .box-3 {
          animation: from-left ${duration} infinite;
          animation-delay: calc(${duration} / 2);
        }

        .box-4 {
          animation: from-right ${duration} infinite;
          animation-delay: calc(${duration} * 0.75);
        }

        @keyframes from-left {
          0% {
            z-index: 20;
            opacity: 0;
            translate: -20px -6px;
          }
          20% {
            z-index: 10;
            opacity: 1;
            translate: 0px 0px;
          }
          40% {
            z-index: 9;
            translate: 0px 4px;
          }
          60% {
            z-index: 8;
            translate: 0px 8px;
          }
          80% {
            z-index: 7;
            opacity: 1;
            translate: 0px 12px;
          }
          100% {
            z-index: 5;
            translate: 0px 30px;
            opacity: 0;
          }
        }

        @keyframes from-right {
          0% {
            z-index: 20;
            opacity: 0;
            translate: 20px -6px;
          }
          20% {
            z-index: 10;
            opacity: 1;
            translate: 0px 0px;
          }
          40% {
            z-index: 9;
            translate: 0px 4px;
          }
          60% {
            z-index: 8;
            translate: 0px 8px;
          }
          80% {
            z-index: 7;
            opacity: 1;
            translate: 0px 12px;
          }
          100% {
            z-index: 5;
            translate: 0px 30px;
            opacity: 0;
          }
        }
      `}</style>

      <div className={`loader ${className}`} aria-label="Loading">
        <div className="box box-1">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>

        <div className="box box-2">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>

        <div className="box box-3">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>

        <div className="box box-4">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>
      </div>
    </>
  );
}

``

## src\components\third-bento-animation.tsx

``tsx
"use client";

import { colorWithOpacity, getRGBA } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion, useInView } from "framer-motion";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

interface LineChartProps {
  data: number[];
  height?: number;
  width?: number;
  color: string;
  shouldAnimate: boolean;
  startAnimationDelay?: number;
}

export function LineChart({
  data,
  height = 200,
  width = 600,
  color,
  shouldAnimate,
  startAnimationDelay,
}: LineChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Create smooth curve points using bezier curves
  const createSmoothPath = (points: { x: number; y: number }[]) => {
    if (points.length < 2) return "";

    const path = points.reduce((acc, point, i, arr) => {
      if (i === 0) {
        // Move to the first point
        return `M ${point.x} ${point.y}`;
      }

      // Calculate control points for smooth curve
      const prev = arr[i - 1];
      const next = arr[i + 1];
      const smoothing = 0.2;

      // If it's the last point, we don't need a curve
      if (i === arr.length - 1) {
        return `${acc} L ${point.x} ${point.y}`;
      }

      // Calculate control points
      const cp1x = prev.x + (point.x - prev.x) * smoothing;
      const cp1y = prev.y + (point.y - prev.y) * smoothing;
      const cp2x = point.x - (next.x - prev.x) * smoothing;
      const cp2y = point.y - (next.y - prev.y) * smoothing;

      return `${acc} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${point.x},${point.y}`;
    }, "");

    return path;
  };

  // Convert data points to coordinates
  const coordinates = data.map((value, index) => ({
    x: (index / (data.length - 1)) * width,
    y: height - (value / Math.max(...data)) * height * 0.8, // Add some padding at top
  }));

  // Create smooth path
  const smoothPath = createSmoothPath(coordinates);

  // Find the middle point coordinates
  const middleIndex = Math.floor(data.length / 2);
  const middlePoint = coordinates[middleIndex];

  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) {
      setShowPulse(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      setShowPulse(true);
    }, (startAnimationDelay || 0) * 1000);

    return () => clearTimeout(timeoutId);
  }, [shouldAnimate, startAnimationDelay]);

  const [computedColor, setComputedColor] = useState(color);

  useEffect(() => {
    setComputedColor(getRGBA(color));
  }, [color]);

  const getColorWithOpacity = useCallback(
    (opacity: number) => colorWithOpacity(computedColor, opacity),
    [computedColor],
  );

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={getColorWithOpacity(0.3)} />
          <stop offset="100%" stopColor={getColorWithOpacity(0)} />
        </linearGradient>
      </defs>

      {/* Animated Area Fill */}
      <motion.path
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: shouldAnimate ? 1 : 0,
          scale: shouldAnimate ? 1 : 0.95,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: startAnimationDelay,
        }}
        d={`${smoothPath} L ${width},${height} L 0,${height} Z`}
        fill="url(#lineGradient)"
      />

      {/* Animated Line */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: shouldAnimate ? 1 : 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: startAnimationDelay,
        }}
        d={smoothPath}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Center dot with scale animation */}
      <motion.circle
        cx={middlePoint.x}
        cy={middlePoint.y}
        r="4"
        fill={color}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: shouldAnimate ? 1 : 0,
          opacity: shouldAnimate ? 1 : 0,
        }}
        transition={{
          delay: startAnimationDelay ? startAnimationDelay + 0.3 : 0.3,
          duration: 0.4,
          ease: "backOut",
        }}
      />

      {/* Multiple pulsing waves */}
      {showPulse && (
        <>
          {[0, 1, 2].map((index) => (
            <motion.circle
              key={index}
              cx={middlePoint.x}
              cy={middlePoint.y}
              r="10"
              stroke={color}
              strokeWidth="2"
              fill="none"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [0.5, 2],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.67,
                ease: "easeOut",
                times: [0, 1],
                repeatDelay: 0,
              }}
            />
          ))}
        </>
      )}
    </svg>
  );
}

export function NumberFlowCounter({
  toolTipValues,
  shouldAnimate,
  startAnimationDelay,
}: {
  toolTipValues: number[];
  shouldAnimate: boolean;
  startAnimationDelay?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentValue = toolTipValues[currentIndex];
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) {
      setShowCounter(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      setShowCounter(true);
    }, (startAnimationDelay || 0) * 1000);

    return () => clearTimeout(timeoutId);
  }, [shouldAnimate, startAnimationDelay]);

  useEffect(() => {
    if (!showCounter) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % toolTipValues.length);
    }, 2000);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [showCounter, toolTipValues.length]);

  return (
    <div
      className={`${
        showCounter ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 ease-in-out absolute top-32 left-[42%] -translate-x-1/2 text-sm bg-[#1A1B25] border border-white/[0.07] text-white px-4 py-1 rounded-full h-8 flex items-center justify-center font-mono shadow-[0px_1.1px_0px_0px_rgba(255,255,255,0.20)_inset,0px_4.4px_6.6px_0px_rgba(255,255,255,0.01)_inset,0px_2.2px_6.6px_0px_rgba(18,43,105,0.04),0px_1.1px_2.2px_0px_rgba(18,43,105,0.08),0px_0px_0px_1.1px_rgba(18,43,105,0.08)]`}
    >
      <NumberFlow
        value={currentValue}
        className="font-mono"
        transformTiming={{
          duration: 700,
          easing: "ease-out",
        }}
        format={{
          useGrouping: true,
          minimumIntegerDigits: 1,
        }}
      />
    </div>
  );
}

export function ThirdBentoAnimation({
  data,
  toolTipValues,
  color = "var(--secondary)",
  startAnimationDelay = 0,
  once = false,
}: {
  data: number[];
  toolTipValues: number[];
  color?: string;
  startAnimationDelay?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [computedColor, setComputedColor] = useState(color);

  useEffect(() => {
    setComputedColor(getRGBA(color));
  }, [color]);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative flex size-full items-center justify-center h-[300px] pt-10 overflow-hidden"
      style={
        {
          "--color": computedColor,
        } as CSSProperties
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldAnimate ? 1 : 0 }}
        transition={{
          duration: 0.5,
          delay: startAnimationDelay ? startAnimationDelay + 0.3 : 0.3,
          ease: "easeOut",
        }}
        className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[2px] h-32 bg-gradient-to-b from-[var(--color)] to-[var(--color-transparent)]"
      ></motion.div>
      <NumberFlowCounter
        toolTipValues={toolTipValues}
        shouldAnimate={shouldAnimate}
        startAnimationDelay={startAnimationDelay}
      />
      <LineChart
        data={data}
        height={200}
        width={600}
        color={computedColor}
        shouldAnimate={shouldAnimate}
        startAnimationDelay={startAnimationDelay}
      />
    </div>
  );
}

``

## src\components\theme-toggle.tsx

``tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer rounded-full h-8 w-8"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

``

## src\components\theme-provider.tsx

``tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

``

## src\components\testimonial-scroll.tsx

``tsx
/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      // light styles
      "bg-accent",
      "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]",
      className,
    )}
    {...props}
  >
    <div className="select-none leading-relaxed font-normal text-primary/90">
      {description}
    </div>

    <div className="flex w-full select-none items-center justify-start gap-3.5">
      <img src={img} alt={name} className="size-8 rounded-full" />

      <div>
        <p className="font-medium text-primary/90">{name}</p>
        <p className="text-xs font-normal text-primary/50">{role}</p>
      </div>
    </div>
  </div>
);

interface Testimonial {
  id: string;
  name: string;
  role: string;
  img: string;
  description: React.ReactNode;
}

export function SocialProofTestimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="h-full">
      <div className="px-10">
        <div className="relative max-h-[750px] overflow-hidden">
          <div className="gap-0 md:columns-2 xl:columns-3">
            {Array(Math.ceil(testimonials.length / 3))
              .fill(0)
              .map((_, i) => (
                <Marquee
                  vertical
                  key={i}
                  className={cn({
                    "[--duration:60s]": i === 1,
                    "[--duration:30s]": i === 2,
                    "[--duration:70s]": i === 3,
                  })}
                >
                  {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                    <TestimonialCard {...card} key={idx} />
                  ))}
                </Marquee>
              ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 md:h-1/5 w-full bg-gradient-to-t from-background from-20%"></div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 md:h-1/5 w-full bg-gradient-to-b from-background from-20%"></div>
        </div>
      </div>
    </div>
  );
}

``

## src\components\TerminalLoader.tsx

``tsx
"use client";

type TerminalLoaderProps = {
  title?: string;
  text?: string;
  widthEm?: number;      // terminal width in "em"
  fontSize?: number;     // 1 = default
  red?: string;          // Desnine red
};

export default function TerminalLoader({
  title = "Status",
  text = "Loading...",
  widthEm = 12,
  fontSize = 1,
  red = "#7A0000",
}: TerminalLoaderProps) {
  // For the typing width (roughly matches characters)
  const typeWidthEm = Math.max(3, text.length * 0.62);

  return (
    <>
      <style jsx>{`
        @keyframes blinkCursor {
          50% {
            border-right-color: transparent;
          }
        }

        @keyframes typeAndDelete {
          0%,
          10% {
            width: 0;
          }
          45%,
          55% {
            width: ${typeWidthEm}em;
          }
          90%,
          100% {
            width: 0;
          }
        }

        .terminal-loader {
          border: 0.1em solid rgba(255, 255, 255, 0.12);
          background: linear-gradient(180deg, #141414 0%, #0f0f0f 100%);
          color: ${red};
          font-family: "Courier New", Courier, monospace;
          font-size: ${fontSize}em;
          padding: 1.5em 1em;
          width: ${widthEm}em;
          box-shadow:
            0 10px 24px rgba(0, 0, 0, 0.45),
            0 0 18px rgba(122, 0, 0, 0.22);
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .terminal-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1.7em;
          background: rgba(255, 255, 255, 0.06);
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          padding: 0 0.6em;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .terminal-title {
          line-height: 1.7em;
          color: rgba(255, 255, 255, 0.82);
          font-weight: 600;
          font-size: 0.95em;
          letter-spacing: 0.2px;
        }

        .terminal-controls {
          display: flex;
          gap: 0.4em;
        }

        .control {
          width: 0.65em;
          height: 0.65em;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.22);
        }

        /* keep mac-style dots but slightly desnine toned */
        .control.close {
          background-color: rgba(255, 70, 70, 0.9);
        }

        .control.minimize {
          background-color: rgba(255, 200, 60, 0.95);
        }

        .control.maximize {
          background-color: rgba(70, 220, 120, 0.95);
        }

        .text {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 0.2em solid ${red}; /* Cursor */
          animation:
            typeAndDelete 4s steps(${Math.max(6, text.length)}) infinite,
            blinkCursor 0.5s step-end infinite alternate;
          margin-top: 1.9em;
          text-shadow: 0 0 10px rgba(122, 0, 0, 0.35);
        }
      `}</style>

      <div className="terminal-loader" aria-label="Loading">
        <div className="terminal-header">
          <div className="terminal-title">{title}</div>
          <div className="terminal-controls">
            <div className="control close" />
            <div className="control minimize" />
            <div className="control maximize" />
          </div>
        </div>

        <div className="text">{text}</div>
      </div>
    </>
  );
}

``

## src\components\terminal.tsx

``tsx
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/magicui/terminal";
  
  export function TerminalDemo() {
    return (
      <Terminal>
        <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>
  
        <AnimatedSpan delay={1500} className="text-green-500">
          <span>âœ” Preflight checks.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2000} className="text-green-500">
          <span>âœ” Verifying framework. Found Next.js.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2500} className="text-green-500">
          <span>âœ” Validating Tailwind CSS.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3500} className="text-green-500">
          <span>âœ” Writing components.json.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4000} className="text-green-500">
          <span>âœ” Checking registry.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4500} className="text-green-500">
          <span>âœ” Updating tailwind.config.ts</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5500} className="text-green-500">
          <span>âœ” Installing dependencies.</span>
        </AnimatedSpan>
  
        <TypingAnimation delay={7000} className="text-muted-foreground">
          You may now add components.
        </TypingAnimation>
      </Terminal>
    );
  }
  
``

## src\components\tenth-bento-animation.tsx

``tsx
import { Globe } from "@/components/magicui/globe";

export function TenthBentoAnimation() {
  return (
    <Globe />
  );
}

``

## src\components\strategy-planning.tsx

``tsx
"use client";

export function StrategyPlanning() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-secondary/10 border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <h2 className="text-lg font-semibold">Strategy Planning</h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Timeline */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-200/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm">Timeline</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Week 1-2: Research</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Week 3-4: Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Week 5-6: Planning</span>
                </div>
              </div>
            </div>

            {/* Goals */}
            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-lg p-4 border border-green-200/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm">Goals</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Brand Identity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">User Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Market Position</span>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-lg p-4 border border-orange-200/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm">Resources</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Design Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Research Data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
``

## src\components\SquarePathLoader.tsx

``tsx
"use client";

type SquarePathLoaderProps = {
  color?: string;      // Desnine red
  square?: number;     // square size (px)
  offset?: number;     // spacing (px)
  duration?: string;   // e.g. "2.4s"
  className?: string;
};

export default function SquarePathLoader({
  color = "#7A0000",
  square = 26,
  offset = 30,
  duration = "2.4s",
  className = "",
}: SquarePathLoaderProps) {
  return (
    <>
      <style jsx>{`
        .loadingspinner {
          --square: ${square}px;
          --offset: ${offset}px;
          --duration: ${duration};
          --delay: 0.2s;
          --timing-function: ease-in-out;
          --in-duration: 0.4s;
          --in-delay: 0.1s;
          --in-timing-function: ease-out;

          width: calc(3 * var(--offset) + var(--square));
          height: calc(2 * var(--offset) + var(--square));
          position: relative;
        }

        .loadingspinner div {
          display: inline-block;
          background: ${color};
          border: none;
          border-radius: 2px;
          width: var(--square);
          height: var(--square);
          position: absolute;
          padding: 0;
          margin: 0;
        }

        #square1 {
          left: calc(0 * var(--offset));
          top: calc(0 * var(--offset));
          animation: square1 var(--duration) var(--delay) var(--timing-function) infinite,
            squarefadein var(--in-duration) calc(1 * var(--in-delay)) var(--in-timing-function) both;
        }

        #square2 {
          left: calc(0 * var(--offset));
          top: calc(1 * var(--offset));
          animation: square2 var(--duration) var(--delay) var(--timing-function) infinite,
            squarefadein var(--in-duration) calc(1 * var(--in-delay)) var(--in-timing-function) both;
        }

        #square3 {
          left: calc(1 * var(--offset));
          top: calc(1 * var(--offset));
          animation: square3 var(--duration) var(--delay) var(--timing-function) infinite,
            squarefadein var(--in-duration) calc(2 * var(--in-delay)) var(--in-timing-function) both;
        }

        #square4 {
          left: calc(2 * var(--offset));
          top: calc(1 * var(--offset));
          animation: square4 var(--duration) var(--delay) var(--timing-function) infinite,
            squarefadein var(--in-duration) calc(3 * var(--in-delay)) var(--in-timing-function) both;
        }

        #square5 {
          left: calc(3 * var(--offset));
          top: calc(1 * var(--offset));
          animation: square5 var(--duration) var(--delay) var(--timing-function) infinite,
            squarefadein var(--in-duration) calc(4 * var(--in-delay)) var(--in-timing-function) both;
        }

        @keyframes square1 {
          0% { left: calc(0 * var(--offset)); top: calc(0 * var(--offset)); }
          8.333% { left: calc(0 * var(--offset)); top: calc(1 * var(--offset)); }
          100% { left: calc(0 * var(--offset)); top: calc(1 * var(--offset)); }
        }

        @keyframes square2 {
          0% { left: calc(0 * var(--offset)); top: calc(1 * var(--offset)); }
          8.333% { left: calc(0 * var(--offset)); top: calc(2 * var(--offset)); }
          16.67% { left: calc(1 * var(--offset)); top: calc(2 * var(--offset)); }
          25% { left: calc(1 * var(--offset)); top: calc(1 * var(--offset)); }
          83.33% { left: calc(1 * var(--offset)); top: calc(1 * var(--offset)); }
          91.67% { left: calc(1 * var(--offset)); top: calc(0 * var(--offset)); }
          100% { left: calc(0 * var(--offset)); top: calc(0 * var(--offset)); }
        }

        @keyframes square3 {
          0%, 100% { left: calc(1 * var(--offset)); top: calc(1 * var(--offset)); }
          16.67% { left: calc(1 * var(--offset)); top: calc(1 * var(--offset)); }
          25% { left: calc(1 * var(--offset)); top: calc(0 * var(--offset)); }
          33.33% { left: calc(2 * var(--offset)); top: calc(0 * var(--offset)); }
          41.67% { left: calc(2 * var(--offset)); top: calc(1 * var(--offset)); }
          66.67% { left: calc(2 * var(--offset)); top: calc(1 * var(--offset)); }
          75% { left: calc(2 * var(--offset)); top: calc(2 * var(--offset)); }
          83.33% { left: calc(1 * var(--offset)); top: calc(2 * var(--offset)); }
          91.67% { left: calc(1 * var(--offset)); top: calc(1 * var(--offset)); }
        }

        @keyframes square4 {
          0% { left: calc(2 * var(--offset)); top: calc(1 * var(--offset)); }
          33.33% { left: calc(2 * var(--offset)); top: calc(1 * var(--offset)); }
          41.67% { left: calc(2 * var(--offset)); top: calc(2 * var(--offset)); }
          50% { left: calc(3 * var(--offset)); top: calc(2 * var(--offset)); }
          58.33% { left: calc(3 * var(--offset)); top: calc(1 * var(--offset)); }
          100% { left: calc(3 * var(--offset)); top: calc(1 * var(--offset)); }
        }

        @keyframes square5 {
          0% { left: calc(3 * var(--offset)); top: calc(1 * var(--offset)); }
          50% { left: calc(3 * var(--offset)); top: calc(1 * var(--offset)); }
          58.33% { left: calc(3 * var(--offset)); top: calc(0 * var(--offset)); }
          66.67% { left: calc(2 * var(--offset)); top: calc(0 * var(--offset)); }
          75% { left: calc(2 * var(--offset)); top: calc(1 * var(--offset)); }
          100% { left: calc(2 * var(--offset)); top: calc(1 * var(--offset)); }
        }

        @keyframes squarefadein {
          0% { transform: scale(0.75); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div className={`loadingspinner ${className}`} aria-label="Loading">
        <div id="square1" />
        <div id="square2" />
        <div id="square3" />
        <div id="square4" />
        <div id="square5" />
      </div>
    </>
  );
}

``

## src\components\SpeederLoader.tsx

``tsx
"use client";

type SpeederLoaderProps = {
  color?: string;     // Desnine red default
  scale?: number;     // overall size
  className?: string; // optional wrapper class
};

export default function SpeederLoader({
  color = "#7A0000",
  scale = 1,
  className = "",
}: SpeederLoaderProps) {
  return (
    <>
      <style jsx>{`
        .wrap {
          position: relative;
          width: 220px;
          height: 140px;
          transform: scale(${scale});
          transform-origin: center;
        }

        .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -50px;
          animation: speeder 0.4s linear infinite;
        }

        .loader > span {
          height: 5px;
          width: 35px;
          background: ${color};
          position: absolute;
          top: -19px;
          left: 60px;
          border-radius: 2px 10px 1px 0;
        }

        .base span {
          position: absolute;
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-right: 100px solid ${color};
          border-bottom: 6px solid transparent;
        }

        .base span:before {
          content: "";
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background: ${color};
          position: absolute;
          right: -110px;
          top: -16px;
        }

        .base span:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-top: 0 solid transparent;
          border-right: 55px solid ${color};
          border-bottom: 16px solid transparent;
          top: -16px;
          right: -98px;
        }

        .face {
          position: absolute;
          height: 12px;
          width: 20px;
          background: ${color};
          border-radius: 20px 20px 0 0;
          transform: rotate(-40deg);
          right: -125px;
          top: -15px;
        }

        .face:after {
          content: "";
          height: 12px;
          width: 12px;
          background: ${color};
          right: 4px;
          top: 7px;
          position: absolute;
          transform: rotate(40deg);
          transform-origin: 50% 50%;
          border-radius: 0 0 0 2px;
        }

        .loader > span > span:nth-child(1),
        .loader > span > span:nth-child(2),
        .loader > span > span:nth-child(3),
        .loader > span > span:nth-child(4) {
          width: 30px;
          height: 1px;
          background: ${color};
          position: absolute;
          animation: fazer1 0.2s linear infinite;
        }

        .loader > span > span:nth-child(2) {
          top: 3px;
          animation: fazer2 0.4s linear infinite;
        }

        .loader > span > span:nth-child(3) {
          top: 1px;
          animation: fazer3 0.4s linear infinite;
          animation-delay: -1s;
        }

        .loader > span > span:nth-child(4) {
          top: 4px;
          animation: fazer4 1s linear infinite;
          animation-delay: -1s;
        }

        @keyframes fazer1 {
          0% { left: 0; }
          100% { left: -80px; opacity: 0; }
        }
        @keyframes fazer2 {
          0% { left: 0; }
          100% { left: -100px; opacity: 0; }
        }
        @keyframes fazer3 {
          0% { left: 0; }
          100% { left: -50px; opacity: 0; }
        }
        @keyframes fazer4 {
          0% { left: 0; }
          100% { left: -150px; opacity: 0; }
        }

        @keyframes speeder {
          0% { transform: translate(2px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -3px) rotate(-1deg); }
          20% { transform: translate(-2px, 0px) rotate(1deg); }
          30% { transform: translate(1px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 3px) rotate(-1deg); }
          60% { transform: translate(-1px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-2px, -1px) rotate(1deg); }
          90% { transform: translate(2px, 1px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }

        .longfazers {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .longfazers span {
          position: absolute;
          height: 2px;
          width: 20%;
          background: ${color};
          opacity: 0.9;
        }

        .longfazers span:nth-child(1) {
          top: 20%;
          animation: lf 0.6s linear infinite;
          animation-delay: -0.5s;
        }

        .longfazers span:nth-child(2) {
          top: 40%;
          animation: lf2 0.8s linear infinite;
          animation-delay: -0.2s;
        }

        .longfazers span:nth-child(3) {
          top: 60%;
          animation: lf3 0.6s linear infinite;
        }

        .longfazers span:nth-child(4) {
          top: 80%;
          animation: lf4 0.5s linear infinite;
          animation-delay: -0.3s;
        }

        @keyframes lf {
          0% { left: 200%; }
          100% { left: -200%; opacity: 0; }
        }
        @keyframes lf2 {
          0% { left: 200%; }
          100% { left: -200%; opacity: 0; }
        }
        @keyframes lf3 {
          0% { left: 200%; }
          100% { left: -100%; opacity: 0; }
        }
        @keyframes lf4 {
          0% { left: 200%; }
          100% { left: -100%; opacity: 0; }
        }
      `}</style>

      <div className={`wrap ${className}`} aria-label="Loading">
        <div className="loader">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>

        <div className="longfazers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

``

## src\components\sixth-bento-animation.tsx

``tsx
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const businessCards = [
  {
    id: "creative",
    name: "Alex Johnson",
    title: "Creative Director",
    company: "Design Studio",
    color: "from-slate-100 to-slate-200",
    textColor: "text-slate-700",
    icon: "â˜…"
  },
  {
    id: "tech",
    name: "Sarah Chen",
    title: "Software Engineer",
    company: "Tech Solutions",
    color: "from-blue-50 to-blue-100",
    textColor: "text-blue-700",
    icon: "â—"
  },
  {
    id: "business",
    name: "Michael Brown",
    title: "Business Consultant",
    company: "Growth Partners",
    color: "from-green-50 to-green-100",
    textColor: "text-green-700",
    icon: "â—†"
  },
  {
    id: "marketing",
    name: "Emma Wilson",
    title: "Marketing Manager",
    company: "Brand Agency",
    color: "from-rose-50 to-rose-100",
    textColor: "text-rose-700",
    icon: "â–²"
  }
];

export function SixthBentoAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % businessCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = businessCards[index];

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      {/* Business Card Container */}
      <div className="relative w-80 h-48 perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className={`absolute inset-0 rounded-lg shadow-lg bg-gradient-to-br ${current.color} ${current.textColor} p-6 overflow-hidden border border-gray-200`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Card Content */}
            <div className="flex flex-col justify-between h-full">
              {/* Top Section */}
              <div className="flex items-start justify-between">
                <div className="text-4xl">{current.icon}</div>
                <div className="w-2 h-2 bg-current opacity-30 rounded-full"></div>
              </div>

              {/* Bottom Section */}
              <div>
                <h3 className="text-xl font-bold mb-1">{current.name}</h3>
                <p className="text-sm opacity-90 mb-1">{current.title}</p>
                <p className="text-xs opacity-75">{current.company}</p>
              </div>
            </div>

            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 rounded-lg" 
                 style={{
                   backgroundImage: `radial-gradient(circle at 20% 20%, currentColor 1px, transparent 1px)`,
                   backgroundSize: '20px 20px',
                   opacity: 0.03
                 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>



    </div>
  );
}
``

## src\components\seventh-bento-animation.tsx

``tsx
"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function SeventhBentoAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.googleDocs />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.notion />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.user />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.zapier />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.messenger />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  notion: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        fill="#b3b3b3"
        filter="url(#a)"
      />
      <path
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#ffffff"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        fill="url(#linearGradient1780)"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="url(#b)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
  googleDocs: () => (
    <svg
      width="47px"
      height="65px"
      viewBox="0 0 47 65"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-1"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-3"
        />
        <linearGradient
          x1="50.0053945%"
          y1="8.58610612%"
          x2="50.0053945%"
          y2="100.013939%"
          id="linearGradient-5"
        >
          <stop stopColor="#1A237E" stopOpacity="0.2" offset="0%" />
          <stop stopColor="#1A237E" stopOpacity="0.02" offset="100%" />
        </linearGradient>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-6"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-8"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-10"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-12"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-14"
        />
        <radialGradient
          cx="3.16804688%"
          cy="2.71744318%"
          fx="3.16804688%"
          fy="2.71744318%"
          r="161.248516%"
          gradientTransform="translate(0.031680,0.027174),scale(1.000000,0.723077),translate(-0.031680,-0.027174)"
          id="radialGradient-16"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.1" offset="0%" />
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%" />
        </radialGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g transform="translate(-451.000000, -463.000000)">
          <g id="Hero" transform="translate(0.000000, 63.000000)">
            <g id="Personal" transform="translate(277.000000, 309.000000)">
              <g id="Docs-icon" transform="translate(174.000000, 91.000000)">
                <g id="Group">
                  <g id="Clipped">
                    <mask id="mask-2" fill="white">
                      <use xlinkHref="#path-1" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L36.71875,10.3409091 L29.375,0 Z"
                      id="Path"
                      fill="#4285F4"
                      fillRule="nonzero"
                      mask="url(#mask-2)"
                    />
                  </g>
                  <g id="Clipped">
                    <mask id="mask-4" fill="white">
                      <use xlinkHref="#path-3" />
                    </mask>
                    <g id="SVGID_1_" />
                    <polygon
                      id="Path"
                      fill="url(#linearGradient-5)"
                      fillRule="nonzero"
                      mask="url(#mask-4)"
                      points="30.6638281 16.4309659 47 32.8582386 47 17.7272727"
                    ></polygon>
                  </g>
                  <g id="Clipped">
                    <mask id="mask-7" fill="white">
                      <use xlinkHref="#path-6" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z"
                      id="Shape"
                      fill="#F1F1F1"
                      fillRule="nonzero"
                      mask="url(#mask-7)"
                    />
                  </g>
                  <g id="Clipped">
                    <mask id="mask-9" fill="white">
                      <use xlinkHref="#path-8" />
                    </mask>
                    <g id="SVGID_1_" />
                    <g id="Group" mask="url(#mask-9)">
                      <g transform="translate(26.437500, -2.954545)">
                        <path
                          d="M2.9375,2.95454545 L2.9375,16.25 C2.9375,18.6985795 4.90929688,20.6818182 7.34375,20.6818182 L20.5625,20.6818182 L2.9375,2.95454545 Z"
                          id="Path"
                          fill="#A1C2FA"
                          fillRule="nonzero"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="Clipped">
                    <mask id="mask-11" fill="white">
                      <use xlinkHref="#path-10" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,4.80113636 C0,2.36363636 1.9828125,0.369318182 4.40625,0.369318182 L29.375,0.369318182 L29.375,0 L4.40625,0 Z"
                      id="Path"
                      fillOpacity="0.2"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                      mask="url(#mask-11)"
                    />
                  </g>
                  <g id="Clipped">
                    <mask id="mask-13" fill="white">
                      <use xlinkHref="#path-12" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M42.59375,64.6306818 L4.40625,64.6306818 C1.9828125,64.6306818 0,62.6363636 0,60.1988636 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,60.1988636 C47,62.6363636 45.0171875,64.6306818 42.59375,64.6306818 Z"
                      id="Path"
                      fillOpacity="0.2"
                      fill="#1A237E"
                      fillRule="nonzero"
                      mask="url(#mask-13)"
                    />
                  </g>
                  <g id="Clipped">
                    <mask id="mask-15" fill="white">
                      <use xlinkHref="#path-14" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M33.78125,17.7272727 C31.3467969,17.7272727 29.375,15.7440341 29.375,13.2954545 L29.375,13.6647727 C29.375,16.1133523 31.3467969,18.0965909 33.78125,18.0965909 L47,18.0965909 L47,17.7272727 L33.78125,17.7272727 Z"
                      id="Path"
                      fillOpacity="0.1"
                      fill="#1A237E"
                      fillRule="nonzero"
                      mask="url(#mask-15)"
                    />
                  </g>
                </g>
                <path
                  d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                  id="Path"
                  fill="url(#radialGradient-16)"
                  fillRule="nonzero"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  zapier: () => (
    <svg
      width="105"
      height="28"
      viewBox="0 0 244 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.1877 45.2253L57.1534 45.1166L78.809 25.2914V15.7391H44.0663V25.2914H64.8181L64.8524 25.3829L43.4084 45.2253V54.7775H79.1579V45.2253H57.1877Z"
        fill="#201515"
      />
      <path
        d="M100.487 14.8297C96.4797 14.8297 93.2136 15.434 90.6892 16.6429C88.3376 17.6963 86.3568 19.4321 85.0036 21.6249C83.7091 23.8321 82.8962 26.2883 82.6184 28.832L93.1602 30.3135C93.5415 28.0674 94.3042 26.4754 95.4482 25.5373C96.7486 24.5562 98.3511 24.0605 99.9783 24.136C102.118 24.136 103.67 24.7079 104.634 25.8519C105.59 26.9959 106.076 28.5803 106.076 30.6681V31.7091H95.9401C90.7807 31.7091 87.0742 32.8531 84.8206 35.1411C82.5669 37.429 81.442 40.4492 81.4458 44.2014C81.4458 48.0452 82.5707 50.9052 84.8206 52.7813C87.0704 54.6574 89.8999 55.5897 93.3089 55.5783C97.5379 55.5783 100.791 54.1235 103.067 51.214C104.412 49.426 105.372 47.3793 105.887 45.2024H106.27L107.723 54.7546H117.275V30.5651C117.275 25.5659 115.958 21.6936 113.323 18.948C110.688 16.2024 106.409 14.8297 100.487 14.8297ZM103.828 44.6475C102.312 45.9116 100.327 46.5408 97.8562 46.5408C95.8199 46.5408 94.4052 46.1843 93.6121 45.4712C93.2256 45.1338 92.9182 44.7155 92.7116 44.246C92.505 43.7764 92.4043 43.2671 92.4166 42.7543C92.3941 42.2706 92.4702 41.7874 92.6403 41.3341C92.8104 40.8808 93.071 40.4668 93.4062 40.1174C93.7687 39.7774 94.1964 39.5145 94.6633 39.3444C95.1303 39.1743 95.6269 39.1006 96.1231 39.1278H106.093V39.7856C106.113 40.7154 105.919 41.6374 105.527 42.4804C105.134 43.3234 104.553 44.0649 103.828 44.6475Z"
        fill="#201515"
      />
      <path
        d="M175.035 15.7391H163.75V54.7833H175.035V15.7391Z"
        fill="#201515"
      />
      <path
        d="M241.666 15.7391C238.478 15.7391 235.965 16.864 234.127 19.1139C232.808 20.7307 231.805 23.1197 231.119 26.2809H230.787L229.311 15.7391H219.673V54.7775H230.959V34.7578C230.959 32.2335 231.55 30.2982 232.732 28.9521C233.914 27.606 236.095 26.933 239.275 26.933H243.559V15.7391H241.666Z"
        fill="#201515"
      />
      <path
        d="M208.473 17.0147C205.839 15.4474 202.515 14.6657 198.504 14.6695C192.189 14.6695 187.247 16.4675 183.678 20.0634C180.108 23.6593 178.324 28.6166 178.324 34.9352C178.233 38.7553 179.067 42.5407 180.755 45.9689C182.3 49.0238 184.706 51.5592 187.676 53.2618C190.665 54.9892 194.221 55.8548 198.344 55.8586C201.909 55.8586 204.887 55.3095 207.278 54.2113C209.526 53.225 211.483 51.6791 212.964 49.7211C214.373 47.7991 215.42 45.6359 216.052 43.3377L206.329 40.615C205.919 42.1094 205.131 43.4728 204.041 44.5732C202.942 45.6714 201.102 46.2206 198.521 46.2206C195.451 46.2206 193.163 45.3416 191.657 43.5837C190.564 42.3139 189.878 40.5006 189.575 38.1498H216.201C216.31 37.0515 216.367 36.1306 216.367 35.387V32.9561C216.431 29.6903 215.757 26.4522 214.394 23.4839C213.118 20.7799 211.054 18.5248 208.473 17.0147ZM198.178 23.9758C202.754 23.9758 205.348 26.2275 205.962 30.731H189.775C190.032 29.2284 190.655 27.8121 191.588 26.607C193.072 24.8491 195.268 23.972 198.178 23.9758Z"
        fill="#201515"
      />
      <path
        d="M169.515 0.00366253C168.666 -0.0252113 167.82 0.116874 167.027 0.421484C166.234 0.726094 165.511 1.187 164.899 1.77682C164.297 2.3723 163.824 3.08658 163.512 3.87431C163.2 4.66204 163.055 5.50601 163.086 6.35275C163.056 7.20497 163.201 8.05433 163.514 8.84781C163.826 9.64129 164.299 10.3619 164.902 10.9646C165.505 11.5673 166.226 12.0392 167.02 12.3509C167.814 12.6626 168.663 12.8074 169.515 12.7762C170.362 12.8082 171.206 12.6635 171.994 12.3514C172.782 12.0392 173.496 11.5664 174.091 10.963C174.682 10.3534 175.142 9.63077 175.446 8.83849C175.75 8.04621 175.89 7.20067 175.859 6.35275C175.898 5.50985 175.761 4.66806 175.456 3.88115C175.151 3.09424 174.686 2.37951 174.09 1.78258C173.493 1.18565 172.779 0.719644 171.992 0.414327C171.206 0.109011 170.364 -0.0288946 169.521 0.00938803L169.515 0.00366253Z"
        fill="#201515"
      />
      <path
        d="M146.201 14.6695C142.357 14.6695 139.268 15.8764 136.935 18.2902C135.207 20.0786 133.939 22.7479 133.131 26.2981H132.771L131.295 15.7563H121.657V66H132.942V45.3054H133.354C133.698 46.6852 134.181 48.0267 134.795 49.3093C135.75 51.3986 137.316 53.1496 139.286 54.3314C141.328 55.446 143.629 56.0005 145.955 55.9387C150.68 55.9387 154.277 54.0988 156.748 50.419C159.219 46.7392 160.455 41.6046 160.455 35.0153C160.455 28.6509 159.259 23.6689 156.869 20.0691C154.478 16.4694 150.922 14.6695 146.201 14.6695ZM147.345 42.9602C146.029 44.8668 143.97 45.8201 141.167 45.8201C140.012 45.8735 138.86 45.6507 137.808 45.1703C136.755 44.6898 135.832 43.9656 135.116 43.0574C133.655 41.2233 132.927 38.7122 132.931 35.5243V34.7807C132.931 31.5432 133.659 29.0646 135.116 27.3448C136.572 25.625 138.59 24.7747 141.167 24.7937C144.02 24.7937 146.092 25.6994 147.385 27.5107C148.678 29.322 149.324 31.8483 149.324 35.0896C149.332 38.4414 148.676 41.065 147.356 42.9602H147.345Z"
        fill="#201515"
      />
      <path d="M39.0441 45.2253H0V54.789H39.0441V45.2253Z" fill="#FF4F00" />
    </svg>
  ),
  messenger: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <radialGradient
        id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
        cx="11.087"
        cy="7.022"
        r="47.612"
        gradientTransform="matrix(1 0 0 -1 0 50)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1292ff"></stop>
        <stop offset=".079" stopColor="#2982ff"></stop>
        <stop offset=".23" stopColor="#4e69ff"></stop>
        <stop offset=".351" stopColor="#6559ff"></stop>
        <stop offset=".428" stopColor="#6d53ff"></stop>
        <stop offset=".754" stopColor="#df47aa"></stop>
        <stop offset=".946" stopColor="#ff6257"></stop>
      </radialGradient>
      <path
        fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
        d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
      />
      <path
        d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
        opacity=".05"
      />
      <path
        d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
        opacity=".07"
      />
      <path
        fill="#ffffff"
        d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
      />
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

``

## src\app\sitemap.ts

``ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://desnine.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
} 
``

## src\app\why\page.tsx

``tsx
import { FooterSection } from "@/components/sections/footer-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { GrowthSection } from "@/components/sections/growth-section";
import { ProcessSection } from "@/components/sections/process-section";
import ProgressOnboardingSection from "@/components/sections/progressonboarding";



export default function TestimonialPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      {/* <ProcessSection /> */}
      <ProgressOnboardingSection />

      <FooterSection />
    </main>
  );
}

``

## src\components\Globe.tsx

``tsx
"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Globe state refs
  const phiRef = useRef(0);
  const widthRef = useRef(0);

  // Pointer drag refs
  const pointerInteracting = useRef<number | null>(null);

  // Spring refs (replacing motion/react)
  const targetR = useRef(0);   // where we want rotation offset to go
  const currentR = useRef(0);  // current rotation offset
  const velocityR = useRef(0); // spring velocity

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      // accumulate target rotation (smooth spring will chase it)
      targetR.current += delta / MOVEMENT_DAMPING;
      pointerInteracting.current = clientX; // important: update start point
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      widthRef.current = canvas.offsetWidth || 0;
    };

    window.addEventListener("resize", onResize);
    onResize();

    // Spring config (tweakable)
    const stiffness = 0.08; // higher = snappier
    const damping = 0.85;   // closer to 1 = more damping (less bounce)

    const globe = createGlobe(canvas, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        // auto-rotate when not dragging
        if (pointerInteracting.current === null) {
          phiRef.current += 0.005;
        }

        // --- spring step ---
        const displacement = targetR.current - currentR.current;
        velocityR.current = velocityR.current * damping + displacement * stiffness;
        currentR.current += velocityR.current;
        // -------------------

        state.phi = phiRef.current + currentR.current;
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    // fade in
    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        onPointerDown={(e) => {
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onPointerCancel={() => updatePointerInteraction(null)}
        onPointerMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => {
          if (e.touches[0]) updateMovement(e.touches[0].clientX);
        }}
      />
    </div>
  );
}

``

## src\components\GearboxLoader.tsx

``tsx
"use client";

type GearboxLoaderProps = {
  width?: number;
  height?: number;
  red?: string;        // Desnine red
  gearColor?: string;  // main gear tone
  bg?: string;         // box background
  speed?: number;      // base seconds (3 = original)
  className?: string;
};

export default function GearboxLoader({
  width = 200,
  height = 150,
  red = "#7A0000",
  gearColor = "#3a0a0a",
  bg = "#111",
  speed = 3,
  className = "",
}: GearboxLoaderProps) {
  return (
    <>
      <style jsx>{`
        @keyframes clockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes counter-clockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        .gearbox {
          background: ${bg};
          height: ${height}px;
          width: ${width}px;
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.10);
        }

        .overlay {
          border-radius: 10px;
          position: absolute;
          inset: 0;
          z-index: 10;
          box-shadow: inset 0 0 22px rgba(0,0,0,0.9);
          background: transparent;
          pointer-events: none;
        }

        .gear {
          position: absolute;
          height: 60px;
          width: 60px;
          border-radius: 30px;
          box-shadow:
            0 -1px 0 0 rgba(255,255,255,0.10),
            0 1px 0 0 rgba(0,0,0,0.9);
        }

        .gear.large {
          height: 120px;
          width: 120px;
          border-radius: 60px;
        }

        .gear.large:after {
          height: 96px;
          width: 96px;
          border-radius: 48px;
          margin-left: -48px;
          margin-top: -48px;
        }

        .gear.one { top: 12px; left: 10px; }
        .gear.two { top: 61px; left: 60px; }
        .gear.three { top: 110px; left: 10px; }
        .gear.four { top: 13px; left: 128px; }

        .gear:after {
          content: "";
          position: absolute;
          height: 36px;
          width: 36px;
          border-radius: 36px;
          background: ${bg};
          top: 50%;
          left: 50%;
          margin-left: -18px;
          margin-top: -18px;
          z-index: 3;
          box-shadow:
            0 0 10px rgba(122,0,0,0.25),
            inset 0 0 10px rgba(0,0,0,0.25),
            inset 0 2px 0 0 rgba(0,0,0,0.7),
            inset 0 -1px 0 0 rgba(255,255,255,0.08);
        }

        .gear-inner {
          position: relative;
          height: 100%;
          width: 100%;

          /* ðŸ”´ Gear body */
          background: radial-gradient(
            circle at 30% 30%,
            rgba(122,0,0,0.35),
            ${gearColor} 55%,
            rgba(0,0,0,0.35) 100%
          );

          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.10);
        }

        .large .gear-inner {
          border-radius: 60px;
        }

        .gear.one .gear-inner {
          animation: counter-clockwise ${speed}s infinite linear;
        }

        .gear.two .gear-inner {
          animation: clockwise ${speed}s infinite linear;
        }

        .gear.three .gear-inner {
          animation: counter-clockwise ${speed}s infinite linear;
        }

        .gear.four .gear-inner {
          animation: counter-clockwise ${speed * 2}s infinite linear;
        }

        .gear-inner .bar {
          /* ðŸ”´ Gear teeth bars */
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.06),
            ${red},
            rgba(255,255,255,0.06)
          );
          height: 16px;
          width: 76px;
          position: absolute;
          left: 50%;
          margin-left: -38px;
          top: 50%;
          margin-top: -8px;
          border-radius: 2px;
          border-left: 1px solid rgba(255,255,255,0.12);
          border-right: 1px solid rgba(255,255,255,0.12);
          opacity: 0.9;
        }

        .large .gear-inner .bar {
          margin-left: -68px;
          width: 136px;
        }

        .gear-inner .bar:nth-child(2) { transform: rotate(60deg); }
        .gear-inner .bar:nth-child(3) { transform: rotate(120deg); }
        .gear-inner .bar:nth-child(4) { transform: rotate(90deg); }
        .gear-inner .bar:nth-child(5) { transform: rotate(30deg); }
        .gear-inner .bar:nth-child(6) { transform: rotate(150deg); }
      `}</style>

      <div className={`gearbox ${className}`} aria-label="Loading">
        <div className="overlay" />

        <div className="gear one">
          <div className="gear-inner">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>

        <div className="gear two">
          <div className="gear-inner">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>

        <div className="gear three">
          <div className="gear-inner">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>

        <div className="gear four large">
          <div className="gear-inner">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
      </div>
    </>
  );
}

``

## src\components\fourth-bento-animation.tsx

``tsx
"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface BoxConfig {
  title: string;
  className: string;
}

const boxConfigs: BoxConfig[] = [
  {
    title: "Keyword Research",
    className: "bg-secondary text-white",
  },
  {
    title: "On-Page SEO",
    className: "bg-secondary/40 text-white",
  },
  {
    title: "Backlink Building",
    className:
      "bg-secondary/20 border border-secondary border-dashed text-secondary",
  },
];

interface FourthBentoAnimationProps {
  startAnimationDelay?: number;
  once?: boolean;
}

export function FourthBentoAnimation({
  once = false,
  startAnimationDelay = 0,
}: FourthBentoAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once });
  const [translateXValues, setTranslateXValues] = useState<number[]>([]);

  const mouseX = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
    }
  }, [mouseX]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const adjustedX = e.clientX - rect.left + 100;
      mouseX.set(adjustedX);
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
    }
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const containerWidth =
          containerRef.current.getBoundingClientRect().width;
        const itemWidth = 250;
        const numberOfItems = 3;
        const totalItemsWidth = itemWidth * numberOfItems;
        const availableSpace = containerWidth - totalItemsWidth;
        const gap = availableSpace / (numberOfItems - 1);

        const newTranslateXValues = Array.from(
          { length: numberOfItems },
          (_, index) => {
            return ((itemWidth + gap) * index) / 2;
          },
        );
        setTranslateXValues(newTranslateXValues);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div
      className="w-full h-full flex flex-col relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 flex -z-10 [mask:linear-gradient(180deg,transparent,black_40%,black_40%,transparent)] ">
        <div className=" w-1/2 h-full flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-primary first:bg-transparent"
            ></div>
          ))}
        </div>
        <div className="w-1/2 h-full border-x border-border/70 border-dashed flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-primary first:bg-transparent"
            ></div>
          ))}
        </div>
        <div className=" w-1/2 h-full flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-primary first:bg-transparent"
            ></div>
          ))}
        </div>
        <div className="w-1/2 h-full border-x border-border/70 border-dashed flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-primary first:bg-transparent "
            ></div>
          ))}
        </div>
        <div className=" w-1/2 h-full flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-primary first:bg-transparent"
            ></div>
          ))}
        </div>
        <div className="w-1/2 h-full border-x border-border/70 border-dashed flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-primary first:bg-transparent"
            ></div>
          ))}
        </div>
        <div className=" w-1/2 h-full flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-primary first:bg-transparent"
            ></div>
          ))}
        </div>
        <div className="w-1/2 h-full border-x border-border/70 border-dashed flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-primary first:bg-transparent"
            ></div>
          ))}
        </div>
      </div>

      <div
        className="w-full absolute grid gap-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/3"
        ref={containerRef}
      >
        <AnimatePresence>
          {translateXValues.map((translateX, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x:
                  index % 2 === 0
                    ? -50
                    : containerRef.current?.getBoundingClientRect().width || 0,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: translateX,
                    }
                  : {
                      opacity: 0,
                      x:
                        index % 2 === 0
                          ? -50
                          : containerRef.current?.getBoundingClientRect()
                              .width || 0,
                    }
              }
              exit={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
                duration: 0.3,
                delay: startAnimationDelay + index * 0.2,
              }}
              className={`flex items-center h-8 justify-center gap-2 rounded-lg w-[250px] p-2 shadow-[0px_9px_5px_0px_#00000005,0px_4px_4px_0px_#00000009,0px_1px_2px_0px_#00000010] ${boxConfigs[index].className}`}
            >
              <p className="font-medium text-sm">{boxConfigs[index].title}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

``

## src\components\PROCESS.tsx

``tsx
// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const DESNINE_RED = "#B42B25";

// const PROCESS = [
//   {
//     title: "DISCOVERY + DIRECTION",
//     desc: "We learn your goals, your audience, and what success looks like.",
//   },
//   {
//     title: "DESIGN SYSTEM",
//     desc: "We set the look and rules: layout, type, spacing, and consistency.",
//   },
//   {
//     title: "BUILD + IMPLEMENT",
//     desc: "We build it responsive, fast, and polished across devices.",
//   },
//   {
//     title: "REVISIONS + QA",
//     desc: "You review, we refine, then we test everything before launch.",
//   },
//   {
//     title: "LAUNCH + SUPPORT",
//     desc: "We go live, hand over files, and stay available if you need updates.",
//   },
// ];

// function ProcessRow({
//   i,
//   title,
//   desc,
// }: {
//   i: number;
//   title: string;
//   desc: string;
// }) {
//   const ref = useRef<HTMLDivElement | null>(null);

//   // Progress of this row as it enters/leaves the viewport
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 85%", "end 55%"],
//   });

//   // Slide RIGHT -> LEFT while scrolling down
//   const x = useTransform(scrollYProgress, [0, 1], [45, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ x, opacity }}
//       className="group rounded-2xl border border-border bg-transparent p-6 md:p-7 will-change-transform"
//     >
//       <div className="flex items-start justify-between gap-6">
//         <div className="flex-1">
//           <div className="flex items-center gap-3">
//             <span
//               className="text-xs font-semibold tracking-[0.22em]"
//               style={{ color: DESNINE_RED }}
//             >
//               {String(i + 1).padStart(2, "0")}
//             </span>

//             <h3 className="text-lg md:text-xl font-semibold tracking-tight text-primary">
//               {title}
//             </h3>
//           </div>

//           <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
//             {desc}
//           </p>
//         </div>

//         <span
//           className="mt-2 h-2.5 w-2.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
//           style={{ backgroundColor: DESNINE_RED }}
//           aria-hidden="true"
//         />
//       </div>
//     </motion.div>
//   );
// }

// export function ProcessSection() {
//   return (
//     <section id="process" className="w-full bg-transparent">
//       <div className="mx-auto w-full max-w-6xl px-10 py-16 lg:py-24">
//         {/* Header */}
//         <div className="pb-10">
//           <div className="max-w-3xl">
//             <p className="text-sm font-medium text-muted-foreground">
//               Process
//               <span
//                 className="ml-2 inline-block h-1.5 w-1.5 rounded-full"
//                 style={{ backgroundColor: DESNINE_RED }}
//               />
//             </p>

//             <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-primary leading-[1.05]">
//               Clear steps.
//               <br />
//               Clean delivery<span style={{ color: DESNINE_RED }}>.</span>
//             </h2>

//             <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
//               A simple flow that keeps everything moving, no confusion, no delays.
//             </p>
//           </div>

//           <div className="mt-10 h-px w-full bg-border/60" />
//         </div>

//         {/* Rows */}
//         <div className="space-y-4">
//           {PROCESS.map((item, i) => (
//             <ProcessRow key={item.title} i={i} title={item.title} desc={item.desc} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DESNINE_RED = "#7A0000";

const PROCESS = [
  { title: "DISCOVERY + DIRECTION", desc: "We learn your goals, your audience, and what success looks like." },
  { title: "DESIGN SYSTEM", desc: "We set the look and rules: layout, type, spacing, and consistency." },
  { title: "BUILD + IMPLEMENT", desc: "We build it responsive, fast, and polished across devices." },
  { title: "REVISIONS + QA", desc: "You review, we refine, then we test everything before launch." },
  { title: "LAUNCH + SUPPORT", desc: "We go live, hand over files, and stay available if you need updates." },
];

function ProcessRow({
  i,
  title,
  desc,
}: {
  i: number;
  title: string;
  desc: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="group rounded-2xl border border-border bg-transparent p-6 md:p-7"
    >
      <div className="flex items-start justify-between gap-10">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-semibold tracking-[0.22em]"
              style={{ color: DESNINE_RED }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-primary">
              {title}
            </h3>
          </div>

          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
            {desc}
          </p>
        </div>

        <span
          className="mt-2 h-2.5 w-2.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: DESNINE_RED }}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="w-full bg-transparent overflow-x-hidden"
    >
      {/* â¬…ï¸âž¡ï¸ LEFT / RIGHT PADDING LIVES HERE */}
      <div className="
        mx-auto w-full max-w-10xl
        px-12 sm:px-12 md:px-12 lg:px-12
        py-12 lg:py-12
      ">
        {/* Header */}
        <div className="pb-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              Process
              <span
                className="ml-2 inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: DESNINE_RED }}
              />
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-primary leading-[1.05]">
              Clear steps.
              <br />
              Clean delivery<span style={{ color: DESNINE_RED }}>.</span>
            </h2>

            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              A simple flow that keeps everything moving, no confusion, no delays.
            </p>
          </div>

          <div className="mt-10 h-px w-full bg-border/60" />
        </div>

        {/* Rows */}
        <div className="space-y-4">
          {PROCESS.map((item, i) => (
            <ProcessRow
              key={item.title}
              i={i}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

``

## src\components\first-bento-animation.tsx

``tsx
/* eslint-disable @next/next/no-img-element */
"use client";

import { Icons } from "@/components/icons";
import {
  Reasoning,
  ReasoningContent,
  ReasoningResponse,
} from "@/components/ui/reasoning";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function ReasoningBasic() {
  const reasoningText = `Based on your calendar patterns and preferences, I recommend scheduling the team meeting for Tuesday at 2pm. This time slot has historically had the highest attendance rate, and it avoids conflicts with other recurring meetings.`;

  return (
    <Reasoning>
      <ReasoningContent className="">
        <ReasoningResponse text={reasoningText} />
      </ReasoningContent>
    </Reasoning>
  );
}

export function FirstBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isInView) {
      timeoutId = setTimeout(() => {
        setShouldAnimate(true);
      }, 1000);
    } else {
      setShouldAnimate(false);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full h-full p-4 flex flex-col items-center justify-center gap-5"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <motion.div
        className="max-w-md mx-auto w-full flex flex-col gap-2"
        animate={{
          y: shouldAnimate ? -75 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="flex items-end justify-end gap-3">
          <motion.div
            className="max-w-[280px] bg-secondary text-white p-4 rounded-2xl ml-auto shadow-[0_0_10px_rgba(0,0,0,0.05)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <p className="text-sm">
              Hey, I need help scheduling a team meeting that works well for
              everyone. Any suggestions for finding an optimal time slot?
            </p>
          </motion.div>
          <div className="flex items-center bg-background rounded-full w-fit border border-border flex-shrink-0">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="User Avatar"
              className="size-8 rounded-full flex-shrink-0"
            />
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="flex items-center bg-background rounded-full size-10 flex-shrink-0 justify-center shadow-[0_0_10px_rgba(0,0,0,0.05)] border border-border">
            <Icons.logo className="size-4" />
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {!shouldAnimate ? (
                <motion.div
                  key="dots"
                  className="absolute left-0 top-0 bg-background p-4 rounded-2xl border border-border"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex gap-1">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="w-2 h-2 bg-primary/50 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="response"
                  layout
                  className="absolute left-0 top-0 md:min-w-[300px] min-w-[220px] p-4 bg-accent border border-border rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <ReasoningBasic />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

``

## src\components\ninth-bento-animtaion.tsx

``tsx
import { Ripple } from "@/components/magicui/ripple";

export function NinthBentoAnimation() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        Visuals
      </p>
      <Ripple />
    </div>
  );
}

``

## src\components\file-tree.tsx

``tsx
"use client";

import { Tree, File, Folder, CollapseButton, type TreeViewElement } from "@/components/magicui/file-tree";

const elements: TreeViewElement[] = [
  {
    id: "1",
    name: "project",
    children: [
      {
        id: "2",
        name: "src",
        children: [
          {
            id: "3",
        name: "components",
        children: [
              { id: "4", name: "button.tsx" },
              { id: "5", name: "header.tsx" },
            ],
          },
          { id: "6", name: "styles.css" },
        ],
      },
      { id: "7", name: "package.json" },
    ],
  },
];

export function FileTreeDemo() {
  return (
    <div className="z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border border-border bg-background">
      <div className="flex flex-col gap-y-2 border-b border-border p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="p-4">
        <Tree elements={elements} initialExpandedItems={["1", "2", "3"]}>
          <Folder element="project" value="1">
            <Folder element="src" value="2">
              <Folder element="components" value="3">
                <File value="4">button.tsx</File>
                <File value="5">header.tsx</File>
              </Folder>
              <File value="6">styles.css</File>
            </Folder>
            <File value="7">package.json</File>
          </Folder>
        </Tree>
      </div>
    </div>
  );
}

``

## src\components\fifth-bento-animation.tsx

``tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fontStyles = [
  {
    fontClass: "font-sans",
    fontName: "Inter (Sans Serif)",
    colorClass: "text-blue-600",
  },
  {
    fontClass: "font-serif",
    fontName: "Georgia (Serif)",
    colorClass: "text-red-600",
  },
  {
    fontClass: "font-mono",
    fontName: "Courier New (Monospace)",
    colorClass: "text-green-600",
  },
  {
    fontClass: "font-serif italic",
    fontName: "Serif Italic",
    colorClass: "text-purple-600",
  },
];

export function FifthBentoAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % fontStyles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const { fontClass, fontName, colorClass } = fontStyles[index];

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <AnimatePresence mode="wait">
        <motion.span
          key={fontClass}
          className={`text-7xl font-bold ${fontClass} ${colorClass}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Aa
        </motion.span>
      </AnimatePresence>
      <motion.div
        key={fontName}
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {fontName}
      </motion.div>
    </div>
  );
}

``

## src\components\nav-menu.tsx

``tsx
"use client";

import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
}

const navs: NavItem[] = siteConfig.nav.links;

export function NavMenu() {
  const pathname = usePathname();
  const ref = useRef<HTMLUListElement>(null);
  const [bubble, setBubble] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const activeLink = ref.current?.querySelector(
      `a[href="${pathname}"]`
    )?.parentElement;

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setBubble({ left: offsetLeft, width: offsetWidth });
      setReady(true);
    }
  }, [pathname]);

  return (
    <div className="w-full hidden md:block">
      <ul
        ref={ref}
        className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center"
      >
        {navs.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li
              key={item.name}
              className={`z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-200 ${
                isActive ? "text-primary" : "text-primary/60 hover:text-primary"
              }`}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}

        {ready && (
          <motion.li
            className="absolute my-1.5 rounded-full bg-accent/60 border border-border h-8"
            animate={{ left: bubble.left, width: bubble.width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </ul>
    </div>
  );
}

``

## src\components\FAQ.tsx

``tsx
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const DESNINE_RED = "#B42B25";

const FAQS = [
  {
    q: "What does Desnine Studio specialize in?",
    a: "Desnine Studio focuses on clean, modern design for websites and brands. We help businesses look professional, clear, and trustworthy online.",
  },
  {
    q: "Can I start with a small project?",
    a: "Yes. Many clients start small and grow over time. Weâ€™re happy to work together step by step.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects take between 1â€“4 weeks, depending on whatâ€™s needed. We agree on timelines before starting.",
  },
  {
    q: "Do you work with existing brands and websites?",
    a: "Yes. We can improve or update what you already have without starting from scratch.",
  },
  {
    q: "How do we work together?",
    a: "We start by understanding your goal, then move step by step with clear communication and regular updates.",
  },
  {
    q: "Is Desnine Studio a good fit for my business?",
    a: "If you want clear design, honest communication, and a smooth process, weâ€™ll work well together.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={sectionRef} className="w-full py-12">
      <div className="mx-auto max-w-4xl px-10 md:px-8 lg:px-0 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-muted-foreground">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">
            Questions? Answered<span style={{ color: DESNINE_RED }}>.</span>
          </h2>
        </motion.div>

        {/* List */}
        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;

            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [-12 + i * 4, 12 - i * 4]
            );

            const opacity = useTransform(
              scrollYProgress,
              [0, 0.15 + i * 0.05, 1],
              [0, 1, 1]
            );

            return (
              <motion.div
                key={item.q}
                style={{ y, opacity }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="rounded-xl border border-border overflow-hidden bg-background"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-primary">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-xl font-bold"
                    style={{ color: DESNINE_RED }}
                  >
                    {isOpen ? "â€“" : "+"}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: "easeOut" },
                        opacity: { duration: 0.2, delay: 0.05 },
                      }}
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

``

## src\components\eighth-bento-animation.tsx

``tsx
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function EighthBentoAnimation() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <VelocityScroll>Advertisment</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

``

## src\components\discovery-animation.tsx

``tsx
"use client";

import { Icons } from "@/components/icons";
import {
  Reasoning,
  ReasoningContent,
  ReasoningResponse,
} from "@/components/ui/reasoning";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function DiscoveryReasoning() {
  const reasoningText = `Based on your requirements, I can see you need a modern brand identity that reflects your innovative approach. You want to stand out in the competitive market. Let's create a strategy that aligns with your vision.`;

  return (
    <Reasoning>
      <ReasoningContent className="">
        <ReasoningResponse text={reasoningText} />
      </ReasoningContent>
    </Reasoning>
  );
}

export function DiscoveryAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isInView) {
      timeoutId = setTimeout(() => {
        setShouldAnimate(true);
      }, 1000);
    } else {
      setShouldAnimate(false);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full h-full p-4 flex flex-col items-center justify-center gap-5"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <motion.div
        className="max-w-md mx-auto w-full flex flex-col gap-2"
        animate={{
          y: shouldAnimate ? -75 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="flex items-end justify-end gap-3">
          <motion.div
            className="max-w-[280px] bg-secondary text-white p-4 rounded-2xl ml-auto shadow-[0_0_10px_rgba(0,0,0,0.05)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <p className="text-sm">
              We're launching a new tech startup and need a complete brand identity. Can you help us understand what we need?
            </p>
          </motion.div>
          <div className="flex items-center bg-background rounded-full w-fit border border-border flex-shrink-0">
            <img
              src="https://randomuser.me/api/portraits/men/67.jpg"
              alt="Client Avatar"
              className="size-8 rounded-full flex-shrink-0"
            />
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="flex items-center bg-background rounded-full size-10 flex-shrink-0 justify-center shadow-[0_0_10px_rgba(0,0,0,0.05)] border border-border">
            <Icons.logo className="size-4" />
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {!shouldAnimate ? (
                <motion.div
                  key="dots"
                  className="absolute left-0 top-0 bg-background p-4 rounded-2xl border border-border"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex gap-1">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="w-2 h-2 bg-primary/50 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="response"
                  layout
                  className="absolute left-0 top-0 md:min-w-[300px] min-w-[220px] p-4 bg-accent border border-border rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <DiscoveryReasoning />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 
``

## src\components\DesnineBackground.tsx

``tsx
// "use client";

// import React from "react";
// import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

// export default function DesnineBackground() {
//   return (
//     <div className="fixed inset-0 -z-10">
//       <ShaderGradientCanvas
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//         pixelDensity={1}
//         pointerEvents="none"
//       >
//         <ShaderGradient
//           /* Animation */
//           animate="on"
//           uSpeed={0.25}
//           uStrength={0.35}
//           uDensity={0.9}
//           uFrequency={5.2}
//           uAmplitude={3}

//           /* Shape */
//           type="sphere"
//           shader="defaults"
//           wireframe={false}

//           /* Position & rotation */
//           positionX={-0.15}
//           positionY={0}
//           positionZ={0}
//           rotationX={0}
//           rotationY={140}
//           rotationZ={60}

//           /* Desnine color palette */
//           color1="#7A0000"   // Desnine deep red
//           color2="#B42B25"   // warm accent red
//           color3="#F2F2F2"   // soft neutral light

//           /* Lighting & camera */
//           reflection={0.35}
//           lightType="env"
//           brightness={0.75}
//           envPreset="city"
//           cameraZoom={14.5}
//           cAzimuthAngle={260}
//           cPolarAngle={180}
//           cDistance={0.6}

//           /* Texture */
//           grain="on"

//           /* UX */
//           toggleAxis={false}
//           zoomOut={false}
//           enableTransition={false}
//         />
//       </ShaderGradientCanvas>
//     </div>
//   );
// }


"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";

type Desnine3DRotatingLogoProps = {
  logoSrc?: string;
  size?: number; // px
  speedSeconds?: number; // rotation duration
  className?: string;
};

export default function Desnine3DRotatingLogo({
  logoSrc = "/d.png",
  size = 220,
  speedSeconds = 12,
  className = "",
}: Desnine3DRotatingLogoProps) {
  return (
    <div
      className={`relative grid place-items-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="Desnine rotating logo"
    >
      {/* optional soft glow behind logo (NOT a box) */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-50"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(180,43,37,0.45), transparent 60%)",
        }}
      />

      {/* 3D stage */}
      <div className="stage">
        <div className="spinner" style={{ ["--dur" as any]: `${speedSeconds}s` }}>
          <img src={logoSrc} alt="Desnine" className="logo" />
          {/* faint â€œthicknessâ€ ghost to sell depth */}
          <img src={logoSrc} alt="" aria-hidden="true" className="logo back" />
        </div>
      </div>

      <style jsx>{`
        .stage {
          width: 100%;
          height: 100%;
          perspective: 1200px;
          transform-style: preserve-3d;
          display: grid;
          place-items: center;
        }

        .spinner {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: spin var(--dur) linear infinite;
          display: grid;
          place-items: center;
        }

        .logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform: translateZ(24px) rotateZ(-6deg);
          filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.55));
          backface-visibility: hidden;
          user-select: none;
          pointer-events: none;
        }

        /* â€œBackâ€ copy gives a subtle 3D thickness feel */
        .logo.back {
          position: absolute;
          inset: 0;
          transform: rotateY(180deg) translateZ(20px) rotateZ(-6deg);
          opacity: 0.15;
          filter: blur(0.4px) drop-shadow(0 10px 18px rgba(0, 0, 0, 0.35));
        }

        @keyframes spin {
          0% {
            transform: rotateY(0deg) rotateX(10deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(10deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .spinner {
            animation: none;
            transform: rotateY(18deg) rotateX(10deg);
          }
        }
      `}</style>
    </div>
  );
}


``

## src\components\Desnine3DRotatingBG.tsx

``tsx
"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";

type Desnine3DRotatingBGProps = {
  /** Put your logo path here (use the image you uploaded) */
  logoSrc?: string;
  /** Portrait height (section). Use "h-screen" for full screen */
  className?: string;
  /** Rotation speed in seconds */
  speedSeconds?: number;
};

type SpinnerStyle = React.CSSProperties & {
  "--dur": string;
};

export default function Desnine3DRotatingBG({
  logoSrc = "/images/desnine-mark.png",
  className = "h-screen",
  speedSeconds = 14,
}: Desnine3DRotatingBGProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Base gradient (background) */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-90 bg-[radial-gradient(1100px_circle_at_20%_20%,rgba(180,43,37,0.55),transparent_55%),radial-gradient(900px_circle_at_85%_30%,rgba(122,0,0,0.55),transparent_60%),radial-gradient(900px_circle_at_40%_85%,rgba(180,43,37,0.35),transparent_60%),linear-gradient(180deg,#070707,rgba(0,0,0,0.92))]" />

      {/* Soft vignette */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(80%_70%_at_50%_45%,black_55%,transparent_92%)] bg-black/60" />

      {/* 3D Stage */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="stage">
          {/* Rotating "tube" / card that sells the 3D rotation */}
          <div className="spinner" style={{ "--dur": `${speedSeconds}s` } as SpinnerStyle}>
            {/* Gradient face */}
            <div className="face faceFront" />
            {/* Back face */}
            <div className="face faceBack" />
            {/* Side glow */}
            <div className="edgeGlow" />

            {/* Logo (floats in front) */}
            <div className="logoWrap">
              <img src={logoSrc} alt="Desnine" className="logoImg" />
            </div>
          </div>

          {/* Floor reflection / haze */}
          <div className="floor" />
        </div>
      </div>

      <style jsx>{`
        .stage {
          width: min(520px, 86vw);
          aspect-ratio: 9 / 16; /* vertical */
          position: relative;
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        .spinner {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          animation: spin var(--dur) linear infinite;
        }

        .face {
          position: absolute;
          inset: 0;
          border-radius: 26px;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
          overflow: hidden;
        }

        .faceFront {
          transform: translateZ(34px);
          background:
            radial-gradient(900px circle at 20% 15%, rgba(180, 43, 37, 0.85), transparent 55%),
            radial-gradient(700px circle at 80% 30%, rgba(122, 0, 0, 0.9), transparent 55%),
            radial-gradient(700px circle at 35% 85%, rgba(180, 43, 37, 0.55), transparent 60%),
            linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.85));
        }

        .faceFront::after {
          content: "";
          position: absolute;
          inset: -2px;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.06),
            rgba(255, 255, 255, 0.0) 35%,
            rgba(255, 255, 255, 0.05) 70%,
            rgba(255, 255, 255, 0.0)
          );
          transform: translateZ(2px);
          pointer-events: none;
          mix-blend-mode: screen;
          opacity: 0.7;
        }

        .faceBack {
          transform: rotateY(180deg) translateZ(34px);
          background:
            radial-gradient(900px circle at 70% 25%, rgba(180, 43, 37, 0.65), transparent 55%),
            radial-gradient(800px circle at 30% 70%, rgba(122, 0, 0, 0.75), transparent 60%),
            linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.92));
          filter: saturate(1.05) contrast(1.05);
        }

        .edgeGlow {
          position: absolute;
          inset: 8px;
          border-radius: 22px;
          transform: translateZ(20px);
          pointer-events: none;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.06) inset,
            0 0 70px rgba(180, 43, 37, 0.25),
            0 0 120px rgba(122, 0, 0, 0.22);
          opacity: 0.9;
        }

        .logoWrap {
          position: absolute;
          left: 50%;
          top: 40%;
          transform: translate(-50%, -50%) translateZ(70px);
          width: min(220px, 46%);
          aspect-ratio: 1 / 1;
          display: grid;
          place-items: center;
          filter: drop-shadow(0 16px 28px rgba(0,0,0,0.55));
          pointer-events: none;
        }

        .logoImg {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform: rotateZ(-6deg);
        }

        .floor {
          position: absolute;
          left: 50%;
          bottom: -10%;
          transform: translateX(-50%) rotateX(72deg);
          width: 120%;
          height: 55%;
          border-radius: 40px;
          background:
            radial-gradient(closest-side, rgba(180, 43, 37, 0.26), transparent 70%),
            radial-gradient(closest-side, rgba(122, 0, 0, 0.22), transparent 75%),
            linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.9));
          filter: blur(2px);
          opacity: 0.9;
        }

        @keyframes spin {
          0% {
            transform: rotateY(0deg) rotateX(8deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(8deg);
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .spinner {
            animation: none;
            transform: rotateY(18deg) rotateX(8deg);
          }
        }
      `}</style>
    </div>
  );
}

``

## src\components\contactfrom-crm.tsx

``tsx
"use client";

import React from 'react'

export const ContactFromCRM = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements.
          </p>
        </div>

        {/* Web3Forms iframe without any styling */}
        <iframe 
          src="https://app.hellobonsai.com/f/7d6004c36674ab6?embed=true" 
          frameBorder="0" 
          width="100%" 
          height="1200" 
          style={{
            border: "none", 
            height: "1200px",
            borderRadius: "0",
            backgroundColor: "transparent",
            overflow: "hidden"
          }}
          className="web3forms-iframe"
          scrolling="no"
        />
      </div>

      <style jsx>{`
        .web3forms-iframe {
          /* No additional styling */
        }
        
        /* Disable scrolling within the iframe */
        .web3forms-iframe {
          overflow: hidden !important;
        }
      `}</style>
    </section>
  );
};
``

## src\components\ClientFeedback.tsx

``tsx
// "use client";

// /* eslint-disable @next/next/no-img-element */
// import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
// import { motion } from "framer-motion";
// import { siteConfig } from "@/lib/config";

// const AUTO_DELAY = 4000;
// const DESNINE_RED = "#7A0000";

// /** ---- In-View (run once) ---- */
// function useInViewOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
//   const ref = useRef<T | null>(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const obs = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry?.isIntersecting) {
//           setInView(true);
//           obs.disconnect(); // run once
//         }
//       },
//       { threshold: 0.35, ...options }
//     );

//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [options]);

//   return { ref, inView };
// }

// function parseStatValue(raw: string) {
//   const s = String(raw).trim();

//   const numMatch = s.match(/-?\d+(\.\d+)?/);
//   const target = numMatch ? Number(numMatch[0]) : 0;

//   const startIdx = numMatch ? numMatch.index ?? 0 : 0;
//   const endIdx = numMatch ? startIdx + numMatch[0].length : 0;

//   const prefix = numMatch ? s.slice(0, startIdx) : "";
//   const suffix = numMatch ? s.slice(endIdx) : s;

//   const decimals = numMatch?.[0]?.includes(".")
//     ? numMatch[0].split(".")[1]?.length ?? 0
//     : 0;

//   return { target, prefix, suffix, decimals };
// }

// function CountUpText({
//   value,
//   duration = 1100,
//   className = "",
//   style,
// }: {
//   value: string;
//   duration?: number;
//   className?: string;
//   style?: CSSProperties;
// }) {
//   const { ref, inView } = useInViewOnce<HTMLDivElement>();
//   const { target, prefix, suffix, decimals } = useMemo(
//     () => parseStatValue(value),
//     [value]
//   );
//   const [display, setDisplay] = useState(() => 0);

//   useEffect(() => {
//     if (!inView) return;

//     let raf = 0;
//     const start = performance.now();
//     const from = 0;
//     const to = target;

//     const tick = (now: number) => {
//       const t = Math.min(1, (now - start) / duration);
//       // easeOutCubic
//       const eased = 1 - Math.pow(1 - t, 3);
//       const next = from + (to - from) * eased;

//       setDisplay(next);

//       if (t < 1) raf = requestAnimationFrame(tick);
//     };

//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [inView, target, duration]);

//   const formatted = useMemo(() => {
//     const n = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();
//     return `${prefix}${n}${suffix}`;
//   }, [display, decimals, prefix, suffix]);

//   return (
//     <div ref={ref} className={className} style={style}>
//       {inView
//         ? formatted
//         : `${prefix}${decimals > 0 ? (0).toFixed(decimals) : "0"}${suffix}`}
//     </div>
//   );
// }

// /** ---- Main Component ---- */
// export function ClientFeedback() {
//   const { clientFeedback } = siteConfig;

//   const reviews = useMemo(() => clientFeedback.reviews ?? [], [clientFeedback.reviews]);
//   const stats = useMemo(() => clientFeedback.stats ?? [], [clientFeedback.stats]);

//   const [active, setActive] = useState(0);
//   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const total = reviews.length;
//   const current = total ? reviews[active] : null;

//   const clearTimer = () => {
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }
//   };

//   const startTimer = () => {
//     if (total <= 1) return;
//     clearTimer();
//     timerRef.current = setInterval(() => {
//       setActive((i) => (i + 1) % total);
//     }, AUTO_DELAY);
//   };

//   useEffect(() => {
//     startTimer();
//     return clearTimer;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [total]);

//   return (
//     <section id="client-feedback" className="w-full bg-background py-10">
//       {/* Bento-like outer padding (kept same) */}
//       <div className="w-full px-10 md:px-10">
//         <div className="mx-auto w-full max-w-6xl space-y-10">
//           {/* Header (added same reveal animation style) */}
//           <motion.div
//             className="text-center"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.4 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
//               {clientFeedback.title ?? "What our clients say"}
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Review Card (added in-view + hover lift) */}
//             <motion.div
//               className="rounded-2xl p-6 sm:p-7 md:p-10 flex flex-col min-h-[260px] sm:min-h-[300px] md:min-h-[340px] relative overflow-hidden border border-zinc-300 dark:border-zinc-700"
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.45, ease: "easeOut" }}
//               viewport={{ once: true, amount: 0.2 }}
//               whileHover={{ y: -4 }}
//             >
//               {/* Quote */}
//               <div className="flex gap-3">
//                 <span
//                   className="text-3xl leading-none font-bold shrink-0"
//                   style={{ color: DESNINE_RED }}
//                 >
//                   â€œ
//                 </span>

//                 <p className="text-base sm:text-lg md:text-xl text-primary leading-relaxed tracking-tight font-medium">
//                   {current?.quote}
//                 </p>
//               </div>

//               {/* Bottom pinned */}
//               <div className="mt-auto pt-8">
//                 <div className="flex items-center justify-between gap-4">
//                   {/* Author */}
//                   <div className="flex items-center gap-4 min-w-0">
//                     <div
//                       className="size-10 rounded-full overflow-hidden shrink-0 grid place-items-center"
//                       style={{ backgroundColor: DESNINE_RED }}
//                     >
//                       {current?.author?.image ? (
//                         <img
//                           src={current.author.image}
//                           alt={current.author.name}
//                           className="size-full object-cover rounded-full"
//                         />
//                       ) : (
//                         <div className="size-full rounded-full bg-white/10" />
//                       )}
//                     </div>

//                     <div className="min-w-0">
//                       <p className="text-sm font-semibold text-primary truncate">
//                         {current?.author?.name}
//                       </p>
//                       <p className="text-xs text-muted-foreground truncate">
//                         {current?.author?.role}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Arrows (pinned) */}
//                   <div className="flex gap-3 shrink-0">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setActive((i) => (i - 1 + total) % total);
//                         startTimer();
//                       }}
//                       aria-label="Previous review"
//                       className="size-10 rounded-full transition-colors"
//                       style={{
//                         border: `1px solid ${DESNINE_RED}55`,
//                         color: DESNINE_RED,
//                       }}
//                       onMouseEnter={(e) =>
//                         (e.currentTarget.style.backgroundColor = `${DESNINE_RED}10`)
//                       }
//                       onMouseLeave={(e) =>
//                         (e.currentTarget.style.backgroundColor = "transparent")
//                       }
//                     >
//                       â†
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => {
//                         setActive((i) => (i + 1) % total);
//                         startTimer();
//                       }}
//                       aria-label="Next review"
//                       className="size-10 rounded-full transition-colors"
//                       style={{
//                         border: `1px solid ${DESNINE_RED}55`,
//                         color: DESNINE_RED,
//                       }}
//                       onMouseEnter={(e) =>
//                         (e.currentTarget.style.backgroundColor = `${DESNINE_RED}10`)
//                       }
//                       onMouseLeave={(e) =>
//                         (e.currentTarget.style.backgroundColor = "transparent")
//                       }
//                     >
//                       â†’
//                     </button>
//                   </div>
//                 </div>

//                 {/* Dots */}
//                 {total > 1 && (
//                   <div className="mt-6 flex gap-2">
//                     {reviews.map((_, i) => (
//                       <button
//                         key={i}
//                         type="button"
//                         onClick={() => {
//                           setActive(i);
//                           startTimer();
//                         }}
//                         aria-label={`Go to review ${i + 1}`}
//                         className="h-1.5 rounded-full transition-all"
//                         style={{
//                           width: i === active ? 32 : 12,
//                           backgroundColor: i === active ? DESNINE_RED : `${DESNINE_RED}30`,
//                         }}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </motion.div>

//             {/* Stats (added same staggered reveal + hover lift on each card) */}
//             <div className="grid grid-cols-2 gap-5">
//               {stats.map((stat, i) => (
//                 <motion.div
//                   key={stat.label}
//                   className="rounded-2xl p-6 md:p-7 flex flex-col justify-between min-h-[150px] md:min-h-[160px] border border-zinc-300 dark:border-zinc-700"
//                   initial={{ opacity: 0, y: 25 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.45,
//                     ease: "easeOut",
//                     delay: i * 0.1,
//                   }}
//                   viewport={{ once: true, amount: 0.2 }}
//                   whileHover={{ y: -4 }}
//                 >
//                   <CountUpText
//                     value={stat.value}
//                     duration={4000}
//                     className="stat-outline text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none"
//                     style={{
//                       WebkitTextStroke: "1.2px #7A0000",
//                       color: "transparent",
//                     }}
//                   />

//                   <div className="mt-4">
//                     <p className="text-sm font-semibold text-primary">{stat.label}</p>
//                     <p className="mt-2 text-sm text-muted-foreground">{stat.note}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const AUTO_DELAY = 4000;
const DESNINE_RED = "#B42B25";

/** ---- In-View (run once) ---- */
function useInViewOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function parseStatValue(raw: string) {
  const s = String(raw).trim();
  const numMatch = s.match(/-?\d+(\.\d+)?/);
  const target = numMatch ? Number(numMatch[0]) : 0;

  const startIdx = numMatch ? numMatch.index ?? 0 : 0;
  const endIdx = numMatch ? startIdx + numMatch[0].length : 0;

  const prefix = numMatch ? s.slice(0, startIdx) : "";
  const suffix = numMatch ? s.slice(endIdx) : s;

  const decimals = numMatch?.[0]?.includes(".")
    ? numMatch[0].split(".")[1]?.length ?? 0
    : 0;

  return { target, prefix, suffix, decimals };
}

function CountUpText({
  value,
  duration = 1100,
  className = "",
  style,
}: {
  value: string;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const { target, prefix, suffix, decimals } = useMemo(() => parseStatValue(value), [value]);
  const [display, setDisplay] = useState(() => 0);

  useEffect(() => {
    if (!inView) return;

    let raf = 0;
    const start = performance.now();
    const from = 0;
    const to = target;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = from + (to - from) * eased;

      setDisplay(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  const formatted = useMemo(() => {
    const n = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();
    return `${prefix}${n}${suffix}`;
  }, [display, decimals, prefix, suffix]);

  return (
    <div ref={ref} className={className} style={style}>
      {inView ? formatted : `${prefix}${decimals > 0 ? (0).toFixed(decimals) : "0"}${suffix}`}
    </div>
  );
}

/** ---- Main Component ---- */
export function ClientFeedback() {
  const { clientFeedback } = siteConfig;

  const stats = useMemo(() => clientFeedback.stats ?? [], [clientFeedback.stats]);

  return (
    <section id="client-feedback" className="w-full bg-background py-10">
      <div className="w-full px-10 md:px-10">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          {/* Header kept as-is */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
              {clientFeedback.title ?? "What our clients say"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT CARD: quote mark + Stories content (no reviews/arrows/images) */}
            <motion.div
              className="rounded-2xl p-6 sm:p-7 md:p-10 flex flex-col min-h-[260px] sm:min-h-[300px] md:min-h-[340px] relative overflow-hidden border border-zinc-300 dark:border-zinc-700"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex gap-2 items-start">
                {/* Quote mark (kept) */}
                <div className="h-10 w-6 flex items-start justify-center">
                  <span
                    className="text-2xl font-bold leading-none block"
                    style={{ color: DESNINE_RED }}
                  >
                    â€œ
                  </span>
                </div>

                {/* Content inside the quote area */}
                <div className="flex flex-col gap-5">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed tracking-tight text-balance">
                    Desnine Studio is a creative agency specializing in visual storytelling and
                    innovative campaigns. We offer web and graphic design, branding, content support,
                    social media strategy, email marketing, and targeted ads, tailored to elevate your
                    brand.
                  </p>
                </div>
              </div>

              {/* Spacer to keep the card height consistent */}
              <div className="mt-auto pt-10" />
            </motion.div>

            {/* RIGHT: Stats (FILLED numbers now) */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl p-6 md:p-7 flex flex-col justify-between min-h-[150px] md:min-h-[160px] border border-zinc-300 dark:border-zinc-700"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -4 }}
                >
                  <CountUpText
                    value={stat.value}
                    duration={4000}
                    className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none"
                    style={{
                      color: DESNINE_RED,
                      textShadow: "0 10px 28px rgba(180,43,37,0.18)",
                    }}
                  />

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-primary">{stat.label}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{stat.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

``

## src\components\chart-radar.tsx

``tsx
"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radar chart"

const chartData = [
  { metric: "Milestones", value: 85 },
  { metric: "Timeline", value: 90 },
  { metric: "Creative", value: 78 },
  { metric: "Strategy", value: 92 },
  { metric: "Audience", value: 88 },
  { metric: "Research", value: 82 },
]

const chartConfig = {
  value: {
    label: "Strategy Score",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartRadarDefault() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg p-8">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full h-full min-h-[350px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="metric" />
            <PolarGrid />
            <Radar
              dataKey="value"
              fill="#dc2626"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </div>
    </div>
  )
}

``

## src\components\BlogSection.tsx

``tsx
"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";

const AUTO_DELAY = 4500;
const DESNINE_RED = "#7A0000";

export function BlogSection() {
  const { blogSection } = siteConfig;
  const posts = useMemo(() => blogSection?.posts ?? [], [blogSection?.posts]);

  // responsive: 1 mobile, 2 desktop
  const [perPage, setPerPage] = useState(2);
  const [page, setPage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = posts.length;
  const pageCount = Math.max(1, Math.ceil(total / perPage));

  /* ---------- autoplay ---------- */
  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const startTimer = () => {
    if (pageCount <= 1) return;
    clearTimer();
    timerRef.current = setInterval(
      () => setPage((p) => (p + 1) % pageCount),
      AUTO_DELAY
    );
  };

  /* ---------- responsive perPage ---------- */
  useEffect(() => {
    const update = () => {
      setPerPage(window.innerWidth >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setPage((p) => (p >= pageCount ? 0 : p));
  }, [pageCount]);

  useEffect(() => {
    startTimer();
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  const goPrev = () => {
    setPage((p) => (p - 1 + pageCount) % pageCount);
    startTimer();
  };

  const goNext = () => {
    setPage((p) => (p + 1) % pageCount);
    startTimer();
  };

  /* ---------- visible posts ---------- */
  const visible = useMemo(() => {
    if (!total) return [];
    const start = page * perPage;
    return Array.from({ length: perPage }, (_, i) => posts[(start + i) % total]);
  }, [posts, page, perPage, total]);

  return (
    <section id="blog" className="w-full bg-background py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10 space-y-10">

        {/* ---------- Header ---------- */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {blogSection?.title ?? "Design insights that convert"}
            <span style={{ color: DESNINE_RED }}>.</span>
          </h2>

          <p className="text-muted-foreground">
            {blogSection?.description ??
              "A simple breakdown of our process â€” clarity, systems, execution."}
          </p>
        </div>

        {/* ---------- Slider ---------- */}
        <div className="relative">

          {/* Minimal arrows */}
          {pageCount > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous"
                className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2
                           text-3xl font-light opacity-40 hover:opacity-100 transition"
                style={{ color: DESNINE_RED }}
              >
                â€¹
              </button>

              <button
                onClick={goNext}
                aria-label="Next"
                className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2
                           text-3xl font-light opacity-40 hover:opacity-100 transition"
                style={{ color: DESNINE_RED }}
              >
                â€º
              </button>
            </>
          )}

          {/* Cards */}
          <div className="bg-card rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visible.map((post, i) => (
                <article
                  key={i}
                  className="rounded-2xl overflow-hidden bg-background"
                  style={{ boxShadow: `0 0 0 1px ${DESNINE_RED}10` }}
                >
                  {/* Image */}
                  <div className="relative h-[190px] md:h-[230px] bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: DESNINE_RED }}
                    >
                      {post.tag}
                    </p>

                    <h3 className="text-lg font-semibold leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span className="opacity-40">â€¢</span>
                      <span>{post.readTime}</span>
                    </div>

                    <a
                      href={post.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition"
                    >
                      Read
                      <span style={{ color: DESNINE_RED }}>â†’</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Dots ---------- */}
        {pageCount > 1 && (
          <div className="flex justify-center gap-2 pt-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === page ? 36 : 14,
                  background: i === page ? DESNINE_RED : `${DESNINE_RED}30`,
                }}
              />
            ))}
          </div>
        )}

        {/* ---------- END CTA BUTTON ---------- */}
        <div className="flex justify-center">
          <a
            href={blogSection?.cta ?? "/services"}
            className="
              inline-flex items-center gap-2
              rounded-full bg-[#7A0000]
              px-8 py-3
              text-sm font-semibold text-white
              shadow-md
              transition-all
              hover:-translate-y-0.5 hover:shadow-lg
            "
          >
            View All
            <span></span>
          </a>
        </div>
      </div>
    </section>
  );
}

``

## src\components\AutoTranslate.tsx

``tsx
"use client";

import GoogleTranslate, { LANGUAGES } from "next-google-translate-widget";
import "next-google-translate-widget/styles";

const langs = LANGUAGES.filter((l) =>
  ["en", "fr"].includes(l.value)
);

export default function AutoTranslate() {
  return (
    <div className="fixed right-6 top-6 z-50">
      <GoogleTranslate pageLanguage="en" languages={langs} />
    </div>
  );
}
``

## src\components\animated-noti.tsx

``tsx
"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Website Launched",
    description: "Successfully deployed to production",
    time: "2m ago",
    icon: "ðŸš€",
    color: "#00C9A7",
  },
  {
    name: "Support Ticket",
    description: "Client feedback received",
    time: "5m ago",
    icon: "ðŸŽ«",
    color: "#FFB800",
  },
  {
    name: "Analytics Active",
    description: "Tracking performance metrics",
    time: "10m ago",
    icon: "ðŸ“Š",
    color: "#FF3D71",
  },
  {
    name: "Backup Complete",
    description: "System backup successful",
    time: "15m ago",
    icon: "ðŸ’¾",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[300px] cursor-pointer overflow-hidden rounded-xl p-3",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-card [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-card/50 dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div
          className="flex size-8 items-center justify-center rounded-xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-sm">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-sm font-medium text-foreground">
            <span className="text-xs sm:text-sm">{name}</span>
            <span className="mx-1">Â·</span>
            <span className="text-xs text-muted-foreground">{time}</span>
          </figcaption>
          <p className="text-xs font-normal text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[300px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

``

## src\components\ADVANTAGES.tsx

``tsx
"use client";

const DESNINE_RED = "#B42B25";

const ADVANTAGES = [
  {
    title: "Results That Matter",
    desc: "We focus on real outcomes, not just visuals. Every design decision supports your business goals.",
  },
  {
    title: "Cutting-Edge Design",
    desc: "Modern, bold, and clean design systems that stand out without feeling forced.",
  },
  {
    title: "Strategy-Driven Approach",
    desc: "Every project starts with clarity. We design with purpose, not guesswork.",
  },
  {
    title: "Innovation at the Core",
    desc: "We blend creativity with modern tools to keep your brand ahead of the curve.",
  },
];

export function DesnineAdvantageSection() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-10">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-primary">
            WHAT MAKES <br />
            US UNIQUE{" "}
            <span
              className="italic font-medium"
              style={{ color: DESNINE_RED }}
            >
              advantage
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
            We design with intentionâ€”combining strategy, creativity, and modern
            execution to build brands that feel confident and perform better.
          </p>
        </div>

        {/* List */}
        <div className="divide-y divide-border">
          {ADVANTAGES.map((item, i) => (
            <div
              key={item.title}
              className="grid gap-4 py-10 md:grid-cols-[40px_1fr]"
            >
              {/* Icon / marker */}
              <div
                className="h-10 w-10 rounded-full border flex items-center justify-center"
                style={{ borderColor: `${DESNINE_RED}55` }}
              >
                <span
                  className="block h-2 w-2 rounded-full"
                  style={{ backgroundColor: DESNINE_RED }}
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm md:text-base text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

``

## src\components\IsometricBoxesLoader.tsx

``tsx
"use client";

type IsometricBoxesLoaderProps = {
  duration?: string;     // e.g. "3s"
  red?: string;          // Desnine red
  redLight?: string;     // highlight red
  scale?: number;        // overall size
  maskBg?: string;       // background used in :before/:after
  className?: string;
};

export default function IsometricBoxesLoader({
  duration = "3s",
  red = "#7A0000",
  redLight = "#9b0000",
  scale = 0.6,
  maskBg = "#0f0f0f", // change to "#e8e8e8" for light mode
  className = "",
}: IsometricBoxesLoaderProps) {
  return (
    <>
      <style jsx>{`
        .loader {
          --duration: ${duration};
          --primary: ${red};
          --primary-light: ${redLight};
          --primary-rgba: rgba(122, 0, 0, 0);

          width: 200px;
          height: 320px;
          position: relative;
          transform-style: preserve-3d;

          transform: scale(${scale});
          transform-origin: center;
        }

        .loader:before,
        .loader:after {
          --r: 20.5deg;
          content: "";
          width: 320px;
          height: 140px;
          position: absolute;
          right: 32%;
          bottom: -11px;
          background: ${maskBg};
          transform: translateZ(200px) rotate(var(--r));
          animation: mask var(--duration) linear forwards infinite;
        }

        .loader:after {
          --r: -20.5deg;
          right: auto;
          left: 32%;
        }

        .ground {
          position: absolute;
          left: -50px;
          bottom: -120px;
          transform-style: preserve-3d;
          transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
        }

        .ground div {
          transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px)
            translateZ(100px) scale(0);
          width: 200px;
          height: 200px;
          background: linear-gradient(
            45deg,
            var(--primary) 0%,
            var(--primary) 50%,
            var(--primary-light) 50%,
            var(--primary-light) 100%
          );
          transform-style: preserve-3d;
          animation: ground var(--duration) linear forwards infinite;
        }

        .ground div:before,
        .ground div:after {
          --rx: 90deg;
          --ry: 0deg;
          --x: 44px;
          --y: 162px;
          --z: -50px;
          content: "";
          width: 156px;
          height: 300px;
          opacity: 0;
          background: linear-gradient(var(--primary), var(--primary-rgba));
          position: absolute;
          transform: rotateX(var(--rx)) rotateY(var(--ry))
            translate(var(--x), var(--y)) translateZ(var(--z));
          animation: ground-shine var(--duration) linear forwards infinite;
        }

        .ground div:after {
          --rx: 90deg;
          --ry: 90deg;
          --x: 0;
          --y: 177px;
          --z: 150px;
        }

        .box {
          --x: 0;
          --y: 0;
          position: absolute;
          animation: var(--duration) linear forwards infinite;
          transform: translate(var(--x), var(--y));
        }

        .box div {
          background-color: var(--primary);
          width: 48px;
          height: 48px;
          position: relative;
          transform-style: preserve-3d;
          animation: var(--duration) ease forwards infinite;
          transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
        }

        .box div:before,
        .box div:after {
          --rx: 90deg;
          --ry: 0deg;
          --z: 24px;
          --y: -24px;
          --x: 0;
          content: "";
          position: absolute;
          background-color: inherit;
          width: inherit;
          height: inherit;
          transform: rotateX(var(--rx)) rotateY(var(--ry))
            translate(var(--x), var(--y)) translateZ(var(--z));
          filter: brightness(var(--b, 1.2));
        }

        .box div:after {
          --rx: 0deg;
          --ry: 90deg;
          --x: 24px;
          --y: 0;
          --b: 1.4;
        }

        .box0 { --x: -220px; --y: -120px; left: 58px; top: 108px; }
        .box1 { --x: -260px; --y: 120px;  left: 25px; top: 120px; }
        .box2 { --x: 120px;  --y: -190px; left: 58px; top: 64px; }
        .box3 { --x: 280px;  --y: -40px;  left: 91px; top: 120px; }
        .box4 { --x: 60px;   --y: 200px;  left: 58px; top: 132px; }
        .box5 { --x: -220px; --y: -120px; left: 25px; top: 76px; }
        .box6 { --x: -260px; --y: 120px;  left: 91px; top: 76px; }
        .box7 { --x: -240px; --y: 200px;  left: 58px; top: 87px; }

        .box0 { animation-name: box-move0; }
        .box0 div { animation-name: box-scale0; }
        .box1 { animation-name: box-move1; }
        .box1 div { animation-name: box-scale1; }
        .box2 { animation-name: box-move2; }
        .box2 div { animation-name: box-scale2; }
        .box3 { animation-name: box-move3; }
        .box3 div { animation-name: box-scale3; }
        .box4 { animation-name: box-move4; }
        .box4 div { animation-name: box-scale4; }
        .box5 { animation-name: box-move5; }
        .box5 div { animation-name: box-scale5; }
        .box6 { animation-name: box-move6; }
        .box6 div { animation-name: box-scale6; }
        .box7 { animation-name: box-move7; }
        .box7 div { animation-name: box-scale7; }

        @keyframes box-move0 { 12%{transform:translate(var(--x),var(--y))} 25%,52%{transform:translate(0,0)} 80%{transform:translate(0,-32px)} 90%,100%{transform:translate(0,188px)} }
        @keyframes box-scale0 { 6%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0)} 14%,100%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1)} }

        @keyframes box-move1 { 16%{transform:translate(var(--x),var(--y))} 29%,52%{transform:translate(0,0)} 80%{transform:translate(0,-32px)} 90%,100%{transform:translate(0,188px)} }
        @keyframes box-scale1 { 10%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0)} 18%,100%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1)} }

        @keyframes box-move2 { 20%{transform:translate(var(--x),var(--y))} 33%,52%{transform:translate(0,0)} 80%{transform:translate(0,-32px)} 90%,100%{transform:translate(0,188px)} }
        @keyframes box-scale2 { 14%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0)} 22%,100%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1)} }

        @keyframes box-move3 { 24%{transform:translate(var(--x),var(--y))} 37%,52%{transform:translate(0,0)} 80%{transform:translate(0,-32px)} 90%,100%{transform:translate(0,188px)} }
        @keyframes box-scale3 { 18%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0)} 26%,100%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1)} }

        @keyframes box-move4 { 28%{transform:translate(var(--x),var(--y))} 41%,52%{transform:translate(0,0)} 80%{transform:translate(0,-32px)} 90%,100%{transform:translate(0,188px)} }
        @keyframes box-scale4 { 22%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0)} 30%,100%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1)} }

        @keyframes box-move5 { 32%{transform:translate(var(--x),var(--y))} 45%,52%{transform:translate(0,0)} 80%{transform:translate(0,-32px)} 90%,100%{transform:translate(0,188px)} }
        @keyframes box-scale5 { 26%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0)} 34%,100%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1)} }

        @keyframes box-move6 { 36%{transform:translate(var(--x),var(--y))} 49%,52%{transform:translate(0,0)} 80%{transform:translate(0,-32px)} 90%,100%{transform:translate(0,188px)} }
        @keyframes box-scale6 { 30%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0)} 38%,100%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1)} }

        @keyframes box-move7 { 40%{transform:translate(var(--x),var(--y))} 53%,52%{transform:translate(0,0)} 80%{transform:translate(0,-32px)} 90%,100%{transform:translate(0,188px)} }
        @keyframes box-scale7 { 34%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0)} 42%,100%{transform:rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1)} }

        @keyframes ground {
          0%,65% {
            transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px)
              translateZ(100px) scale(0);
          }
          75%,90% {
            transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px)
              translateZ(100px) scale(1);
          }
          100% {
            transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px)
              translateZ(100px) scale(0);
          }
        }

        @keyframes ground-shine {
          0%,70% { opacity: 0; }
          75%,87% { opacity: 0.2; }
          100% { opacity: 0; }
        }

        @keyframes mask {
          0%,65% { opacity: 0; }
          66%,100% { opacity: 1; }
        }
      `}</style>

      <div className={`loader ${className}`} aria-label="Loading">
        <div className="box box0"><div /></div>
        <div className="box box1"><div /></div>
        <div className="box box2"><div /></div>
        <div className="box box3"><div /></div>
        <div className="box box4"><div /></div>
        <div className="box box5"><div /></div>
        <div className="box box6"><div /></div>
        <div className="box box7"><div /></div>
        <div className="ground"><div /></div>
      </div>
    </>
  );
}

``

## src\components\iphone-zoom.tsx

``tsx
import Iphone15Pro from "@/components/magicui/iphone-15-pro";

export function Iphone15ProDemo() {
  return (
    <div className="relative">
      <Iphone15Pro
        className="size-full"
        src="https://via.placeholder.com/430x880"
      />
    </div>
  );
}

``

## src\components\icons.tsx

``tsx
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Icons = {
  logo: ({ className }: { className?: string }) => (
    <Image
      src="/Desnine-logo.png"
      alt="Desnine Logo"
      width={120}
      height={40}
      className={cn("h-auto", className)}
    />
  ),
  soc2: ({ className }: { className?: string }) => (
    <svg
      width="46"
      height="45"
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
    >
      <g filter="url(#filter0_ddd_1_4900)">
        <rect
          x="3"
          y="0.863281"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_1_4900)"
        />
        <g filter="url(#filter1_d_1_4900)">
          <rect
            x="6.15784"
            y="4.021"
            width="33.6842"
            height="33.6842"
            rx="16.8421"
            fill="url(#paint1_linear_1_4900)"
          />
          <path
            d="M15.0475 29.6233C13.7506 29.6233 12.9548 28.8938 12.8738 27.8033L13.8464 27.7443C13.9348 28.4222 14.3401 28.798 15.0622 28.798C15.6812 28.798 16.0348 28.5696 16.0348 28.1201C16.0348 27.7148 15.8285 27.4717 14.7601 27.2212C13.4633 26.9264 12.977 26.558 12.977 25.7033C12.977 24.7896 13.6917 24.1559 14.8633 24.1559C16.1159 24.1559 16.8012 24.8854 16.9191 25.8948L15.9538 25.9391C15.8875 25.3717 15.5117 24.9812 14.8485 24.9812C14.2959 24.9812 13.957 25.2612 13.957 25.6664C13.957 26.0938 14.2001 26.2559 15.1359 26.4696C16.5433 26.7717 17.0148 27.2875 17.0148 28.0685C17.0148 29.0264 16.2338 29.6233 15.0475 29.6233ZM19.9915 29.6233C18.4367 29.6233 17.5009 28.5843 17.5009 26.897C17.5009 25.2096 18.4367 24.1559 19.9915 24.1559C21.5536 24.1559 22.4894 25.2096 22.4894 26.897C22.4894 28.5843 21.5536 29.6233 19.9915 29.6233ZM19.9915 28.7906C20.942 28.7906 21.502 28.0906 21.502 26.897C21.502 25.7033 20.942 24.9885 19.9915 24.9885C19.0557 24.9885 18.4883 25.7033 18.4883 26.897C18.4883 28.0906 19.0557 28.7906 19.9915 28.7906ZM25.324 29.6233C23.8945 29.6233 22.8997 28.6064 22.8997 26.897C22.8997 25.2169 23.865 24.1559 25.3313 24.1559C26.665 24.1559 27.3797 24.8559 27.6082 26.0422L26.6061 26.0938C26.4734 25.4085 26.0534 24.9885 25.3313 24.9885C24.4397 24.9885 23.8871 25.7327 23.8871 26.897C23.8871 28.0759 24.4545 28.7906 25.324 28.7906C26.105 28.7906 26.5176 28.3412 26.6355 27.5896L27.6376 27.6412C27.4313 28.8717 26.6429 29.6233 25.324 29.6233ZM29.6489 29.5054C29.6489 28.238 30.1205 27.5085 31.5573 26.7569C32.2721 26.3812 32.53 26.1748 32.53 25.7327C32.53 25.298 32.2426 24.9885 31.6826 24.9885C31.0858 24.9885 30.7321 25.3348 30.651 25.9685L29.6637 25.9096C29.7668 24.8191 30.4889 24.1559 31.6826 24.1559C32.8395 24.1559 33.5173 24.7896 33.5173 25.718C33.5173 26.5212 33.1416 26.897 32.1173 27.4422C31.2479 27.9064 30.8279 28.3485 30.7984 28.6727H33.5173V29.5054H29.6489Z"
            fill="#101828"
          />
          <path
            d="M13.0537 17.8882L14.9621 12.6566H15.6253L17.5263 17.8882H16.9811L16.4211 16.3187H14.159L13.599 17.8882H13.0537ZM14.3285 15.8324H16.2516L15.2937 13.1061L14.3285 15.8324ZM18.026 17.8882V12.6566H18.5271V17.8882H18.026ZM21.5495 18.0061C20.1642 18.0061 19.2506 16.9745 19.2506 15.2798C19.2506 13.585 20.1642 12.5387 21.5495 12.5387C22.7727 12.5387 23.4506 13.2387 23.6642 14.3292L23.1337 14.3661C22.9863 13.5482 22.4632 13.0324 21.5495 13.0324C20.4811 13.0324 19.7737 13.8798 19.7737 15.2798C19.7737 16.6798 20.4811 17.5124 21.5495 17.5124C22.5074 17.5124 23.0453 16.9598 23.1779 16.0608L23.7085 16.0977C23.5242 17.2471 22.7727 18.0061 21.5495 18.0061ZM24.5062 17.8882V12.6566H26.3409C27.4904 12.6566 28.1683 13.2461 28.1683 14.2187C28.1683 15.1913 27.4904 15.7808 26.3409 15.7808H25.0072V17.8882H24.5062ZM25.0072 15.2945H26.3409C27.1957 15.2945 27.6378 14.9187 27.6378 14.2187C27.6378 13.5113 27.1957 13.1429 26.3409 13.1429H25.0072V15.2945ZM27.9425 17.8882L29.851 12.6566H30.5141L32.4152 17.8882H31.8699L31.3099 16.3187H29.0478L28.4878 17.8882H27.9425ZM29.2173 15.8324H31.1404L30.1825 13.1061L29.2173 15.8324Z"
            fill="#6A7282"
          />
          <line
            x1="10.4938"
            y1="21.2488"
            x2="34.988"
            y2="21.2488"
            stroke="#E5E7EB"
            strokeWidth="0.263158"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_ddd_1_4900"
          x="0.857143"
          y="0.148996"
          width="44.2857"
          height="44.2857"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1_4900"
          />
          <feOffset dy="0.714286" />
          <feGaussianBlur stdDeviation="0.357143" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4900"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_1_4900"
          />
          <feOffset dy="1.42857" />
          <feGaussianBlur stdDeviation="1.42857" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4900"
            result="effect2_dropShadow_1_4900"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="dilate"
            in="SourceAlpha"
            result="effect3_dropShadow_1_4900"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4900"
            result="effect3_dropShadow_1_4900"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_1_4900"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1_4900"
          x="5.44355"
          y="3.30671"
          width="35.1128"
          height="35.1127"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_4900"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4900"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_4900"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_4900"
          x1="9.88803"
          y1="6.55415"
          x2="36.0447"
          y2="35.5773"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9FAFB" />
          <stop offset="1" stopColor="#E5E7EB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_4900"
          x1="11.9583"
          y1="8.8133"
          x2="33.9849"
          y2="33.2538"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5E7EB" />
          <stop offset="1" stopColor="#F9FAFB" />
        </linearGradient>
      </defs>
    </svg>
  ),
  soc2Dark: ({ className }: { className?: string }) => (
    <svg
      width="46"
      height="45"
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
    >
      <g filter="url(#filter0_ddd_1_2018)">
        <rect
          x="3"
          y="0.863281"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_1_2018)"
        />
        <g filter="url(#filter1_d_1_2018)">
          <rect
            x="6.1579"
            y="4.021"
            width="33.6842"
            height="33.6842"
            rx="16.8421"
            fill="url(#paint1_linear_1_2018)"
          />
          <path
            d="M15.0441 29.6233C14.6118 29.6233 14.2385 29.5496 13.9241 29.4022C13.6097 29.2499 13.3617 29.0362 13.1799 28.7612C12.9982 28.4861 12.8925 28.1668 12.8631 27.8033L13.8357 27.7443C13.8701 27.9752 13.9364 28.1692 14.0346 28.3264C14.1329 28.4787 14.2655 28.5966 14.4325 28.6801C14.6045 28.7587 14.8132 28.798 15.0589 28.798C15.3683 28.798 15.6066 28.7415 15.7736 28.6285C15.9455 28.5106 16.0315 28.3412 16.0315 28.1201C16.0315 27.9777 15.9971 27.8573 15.9283 27.7591C15.8596 27.6559 15.7343 27.5626 15.5525 27.4791C15.3708 27.3906 15.1055 27.3047 14.7567 27.2212C14.3097 27.118 13.9585 27.005 13.7031 26.8822C13.4476 26.7545 13.261 26.5973 13.1431 26.4106C13.0301 26.224 12.9736 25.9882 12.9736 25.7033C12.9736 25.3987 13.0473 25.131 13.1946 24.9001C13.3469 24.6643 13.5655 24.4826 13.8504 24.3548C14.1353 24.2222 14.4718 24.1559 14.8599 24.1559C15.2627 24.1559 15.6115 24.2296 15.9062 24.3769C16.201 24.5243 16.4318 24.7282 16.5989 24.9885C16.7659 25.2489 16.869 25.551 16.9083 25.8948L15.9431 25.9391C15.9234 25.7475 15.8669 25.5805 15.7736 25.438C15.6803 25.2906 15.555 25.1777 15.3978 25.0991C15.2455 25.0205 15.0613 24.9812 14.8452 24.9812C14.5701 24.9812 14.3515 25.045 14.1894 25.1727C14.0273 25.2955 13.9462 25.4601 13.9462 25.6664C13.9462 25.8089 13.9806 25.9268 14.0494 26.0201C14.1182 26.1134 14.2336 26.1945 14.3957 26.2633C14.5627 26.3271 14.8059 26.3959 15.1252 26.4696C15.5869 26.5678 15.9553 26.6931 16.2304 26.8454C16.5055 26.9927 16.702 27.1671 16.8199 27.3685C16.9427 27.565 17.0041 27.7984 17.0041 28.0685C17.0041 28.3829 16.9231 28.658 16.761 28.8938C16.5989 29.1247 16.368 29.304 16.0683 29.4317C15.7736 29.5594 15.4322 29.6233 15.0441 29.6233ZM19.9881 29.6233C19.4723 29.6233 19.0277 29.5152 18.6544 29.2991C18.2811 29.078 17.9937 28.7636 17.7923 28.3559C17.5909 27.9433 17.4902 27.4569 17.4902 26.897C17.4902 26.3369 17.5909 25.8506 17.7923 25.438C17.9937 25.0254 18.2811 24.7085 18.6544 24.4875C19.0277 24.2664 19.4723 24.1559 19.9881 24.1559C20.5039 24.1559 20.9484 24.2664 21.3218 24.4875C21.7 24.7085 21.9874 25.0254 22.1839 25.438C22.3853 25.8506 22.486 26.3369 22.486 26.897C22.486 27.4569 22.3853 27.9433 22.1839 28.3559C21.9874 28.7636 21.7 29.078 21.3218 29.2991C20.9484 29.5152 20.5039 29.6233 19.9881 29.6233ZM19.9881 28.7906C20.3025 28.7906 20.5727 28.717 20.7986 28.5696C21.0246 28.4173 21.1965 28.1987 21.3144 27.9138C21.4323 27.6289 21.4913 27.2899 21.4913 26.897C21.4913 26.4991 21.4323 26.1577 21.3144 25.8727C21.1965 25.5878 21.0246 25.3692 20.7986 25.2169C20.5727 25.0647 20.3025 24.9885 19.9881 24.9885C19.6737 24.9885 19.4035 25.0647 19.1776 25.2169C18.9565 25.3692 18.7846 25.5878 18.6618 25.8727C18.5439 26.1577 18.4849 26.4991 18.4849 26.897C18.4849 27.2899 18.5439 27.6289 18.6618 27.9138C18.7846 28.1987 18.9565 28.4173 19.1776 28.5696C19.4035 28.717 19.6737 28.7906 19.9881 28.7906ZM25.3276 29.6233C24.8511 29.6233 24.4311 29.5152 24.0676 29.2991C23.7041 29.078 23.4192 28.7612 23.2129 28.3485C23.0066 27.9359 22.9034 27.452 22.9034 26.897C22.9034 26.3468 23.0041 25.8654 23.2055 25.4527C23.4069 25.0352 23.6894 24.7159 24.0529 24.4948C24.4213 24.2689 24.8511 24.1559 25.3423 24.1559C25.9908 24.1559 26.5016 24.318 26.875 24.6422C27.2532 24.9664 27.4988 25.4331 27.6118 26.0422L26.6097 26.0938C26.5459 25.745 26.4059 25.4748 26.1897 25.2833C25.9785 25.0868 25.696 24.9885 25.3423 24.9885C25.0476 24.9885 24.7897 25.0671 24.5687 25.2243C24.3525 25.3766 24.1855 25.5977 24.0676 25.8875C23.9546 26.1724 23.8981 26.5089 23.8981 26.897C23.8981 27.285 23.9571 27.6215 24.075 27.9064C24.1929 28.1913 24.3599 28.4099 24.576 28.5622C24.7922 28.7145 25.0452 28.7906 25.335 28.7906C25.7132 28.7906 26.0104 28.6875 26.2266 28.4812C26.4427 28.2699 26.5802 27.9727 26.6392 27.5896L27.6413 27.6412C27.5381 28.2699 27.2876 28.7587 26.8897 29.1075C26.4967 29.4513 25.976 29.6233 25.3276 29.6233ZM29.6598 29.5054C29.6598 29.078 29.7187 28.7071 29.8366 28.3927C29.9594 28.0734 30.1584 27.7836 30.4335 27.5233C30.7086 27.2629 31.0868 27.0075 31.5682 26.7569C31.8236 26.6194 32.0177 26.504 32.1503 26.4106C32.2879 26.3124 32.3861 26.2117 32.445 26.1085C32.5089 26.0054 32.5408 25.8801 32.5408 25.7327C32.5408 25.5068 32.4671 25.3275 32.3198 25.1948C32.1724 25.0573 31.9636 24.9885 31.6935 24.9885C31.3987 24.9885 31.1629 25.072 30.9861 25.2391C30.8093 25.4061 30.7012 25.6492 30.6619 25.9685L29.6745 25.9096C29.7236 25.3594 29.9226 24.9296 30.2714 24.6201C30.625 24.3106 31.0991 24.1559 31.6935 24.1559C32.0717 24.1559 32.3984 24.2222 32.6735 24.3548C32.9535 24.4826 33.1647 24.6643 33.3071 24.9001C33.4545 25.1359 33.5282 25.4085 33.5282 25.718C33.5282 25.9882 33.4815 26.2166 33.3882 26.4033C33.2998 26.5899 33.1573 26.7619 32.9608 26.9191C32.7693 27.0762 32.4917 27.2506 32.1282 27.4422C31.7057 27.6682 31.384 27.8892 31.1629 28.1054C30.9419 28.3166 30.824 28.5057 30.8093 28.6727H33.5282V29.5054H29.6598Z"
            fill="#F4F4F5"
          />
          <path
            d="M14.883 12.6566H15.5462L17.4546 17.8882H16.9094L16.3494 16.3187H14.0873L13.5273 17.8882H12.982L14.883 12.6566ZM16.1799 15.8324L15.2146 13.1061L14.2567 15.8324H16.1799ZM18.0764 12.6566H18.5775V17.8882H18.0764V12.6566ZM21.6147 18.0061C21.1578 18.0061 20.755 17.898 20.4062 17.6819C20.0624 17.4608 19.7947 17.144 19.6031 16.7313C19.4115 16.3187 19.3157 15.8349 19.3157 15.2798C19.3157 14.7247 19.4115 14.2408 19.6031 13.8282C19.7947 13.4106 20.0624 13.0913 20.4062 12.8703C20.755 12.6492 21.1578 12.5387 21.6147 12.5387C22.2091 12.5387 22.6831 12.6959 23.0368 13.0103C23.3905 13.3247 23.6238 13.7643 23.7368 14.3292L23.2062 14.3661C23.1277 13.9485 22.9533 13.6219 22.6831 13.3861C22.4178 13.1503 22.0617 13.0324 21.6147 13.0324C21.261 13.0324 20.9491 13.1233 20.6789 13.305C20.4136 13.4819 20.2073 13.7398 20.0599 14.0787C19.9175 14.4177 19.8462 14.818 19.8462 15.2798C19.8462 15.7415 19.9175 16.1419 20.0599 16.4808C20.2073 16.8149 20.4136 17.0703 20.6789 17.2471C20.9491 17.424 21.261 17.5124 21.6147 17.5124C22.0862 17.5124 22.4596 17.3871 22.7347 17.1366C23.0098 16.8812 23.1817 16.5226 23.2505 16.0608L23.781 16.0977C23.6877 16.6871 23.4519 17.1538 23.0736 17.4977C22.7003 17.8366 22.214 18.0061 21.6147 18.0061ZM24.571 12.6566H26.4058C26.784 12.6566 27.1082 12.7205 27.3784 12.8482C27.6535 12.971 27.8647 13.1503 28.0121 13.3861C28.1594 13.617 28.2331 13.8945 28.2331 14.2187C28.2331 14.538 28.1594 14.8156 28.0121 15.0513C27.8647 15.2871 27.6535 15.4689 27.3784 15.5966C27.1082 15.7194 26.784 15.7808 26.4058 15.7808H25.0721V17.8882H24.571V12.6566ZM26.4058 15.2945C26.8331 15.2945 27.1549 15.2036 27.371 15.0219C27.5921 14.8401 27.7026 14.5724 27.7026 14.2187C27.7026 13.865 27.5921 13.5973 27.371 13.4156C27.1549 13.2338 26.8331 13.1429 26.4058 13.1429H25.0721V15.2945H26.4058ZM29.923 12.6566H30.5861L32.4945 17.8882H31.9493L31.3893 16.3187H29.1272L28.5672 17.8882H28.0219L29.923 12.6566ZM31.2198 15.8324L30.2545 13.1061L29.2967 15.8324H31.2198Z"
            fill="#D4D4D8"
          />
          <line
            x1="10.4938"
            y1="21.2488"
            x2="34.9881"
            y2="21.2488"
            stroke="#E4E4E7"
            strokeWidth="0.263158"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_ddd_1_2018"
          x="0.857143"
          y="0.148996"
          width="44.2857"
          height="44.2857"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1_2018"
          />
          <feOffset dy="0.714286" />
          <feGaussianBlur stdDeviation="0.357143" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_2018"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_1_2018"
          />
          <feOffset dy="1.42857" />
          <feGaussianBlur stdDeviation="1.42857" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_2018"
            result="effect2_dropShadow_1_2018"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="dilate"
            in="SourceAlpha"
            result="effect3_dropShadow_1_2018"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_2018"
            result="effect3_dropShadow_1_2018"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_1_2018"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1_2018"
          x="5.44361"
          y="3.30671"
          width="35.1128"
          height="35.1127"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_2018"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_2018"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_2018"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_2018"
          x1="9.88803"
          y1="6.55415"
          x2="36.0447"
          y2="35.5773"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#27272A" />
          <stop offset="1" stopColor="#52525C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_2018"
          x1="11.9583"
          y1="8.8133"
          x2="33.985"
          y2="33.2538"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52525C" />
          <stop offset="1" stopColor="#27272A" />
        </linearGradient>
      </defs>
    </svg>
  ),
  hipaa: ({ className }: { className?: string }) => (
    <svg
      width="46"
      height="45"
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_ddd_1_4905)">
        <rect
          x="3"
          y="0.863281"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_1_4905)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.0736 7.30078H18.5513C17.4523 7.40753 16.5515 7.91698 15.6382 8.43349L15.6382 8.4335C15.3095 8.61938 14.9792 8.80617 14.6375 8.97544C13.1797 9.69771 11.6905 10.3538 10.1701 10.9436C9.31299 11.2764 8.4347 11.5409 7.5352 11.7372C7.4488 11.7559 7.36935 11.7893 7.29688 11.8372V11.8727C7.5102 11.9479 7.76245 11.9888 8.05363 11.9953C8.84267 12.0125 9.51349 12.0095 10.0661 11.9865C10.1506 11.9828 10.2321 11.9633 10.3106 11.928C12.4837 10.9519 14.6612 9.98527 16.8432 9.02797C16.8476 9.02613 16.852 9.02536 16.8565 9.02567C16.8777 9.02843 16.879 9.03427 16.8603 9.04318C14.6862 10.108 12.5139 11.176 10.3434 12.2473C10.2138 12.3114 9.41474 12.7999 9.89472 12.9132C10.6648 13.0953 11.6052 13.0639 12.3886 12.9939C12.4952 12.9843 12.6 12.9582 12.7029 12.9155C14.1157 12.3278 15.0315 11.9343 15.4503 11.7349C15.5082 11.7069 15.5663 11.6793 15.6245 11.6519C16.9222 11.0378 16.9367 11.0651 15.6682 11.734C14.7886 12.1972 13.894 12.6323 12.9844 13.039C12.7769 13.1321 11.6328 13.7584 12.3364 13.9538C12.4725 13.9916 12.6016 14.0121 12.7238 14.0155C13.3976 14.0333 14.0708 13.9567 14.7434 13.7856C14.8605 13.7558 14.9747 13.7083 15.0861 13.6432C15.7916 13.2327 16.4885 12.8092 17.1769 12.3727C17.1826 12.3694 17.2268 12.3621 17.1921 12.3879C16.5905 12.8389 15.9774 13.2745 15.3529 13.6948C15.2118 13.7897 15.1129 13.8702 15.0562 13.9363C14.891 14.1289 14.5539 14.61 15.0282 14.733C15.5751 14.8745 16.5412 14.457 17.0397 14.2275C17.4891 14.0207 17.9114 13.6074 18.2623 13.264L18.2623 13.264L18.2623 13.264L18.2817 13.245C18.3135 13.2141 18.3187 13.2542 18.3011 13.2736C18.0812 13.5218 17.8525 13.7621 17.6151 13.9943C17.442 14.1642 17.3197 14.3066 17.2481 14.4215C16.2811 15.9736 18.2741 15.2192 18.7317 14.9459C19.0251 14.7708 19.3157 14.3372 19.4771 14.0773C19.4847 14.065 19.4923 14.055 19.4999 14.0473C19.5306 14.016 19.5374 14.0203 19.5203 14.0602C19.395 14.3536 19.2423 14.6318 19.0622 14.8948C18.8756 15.1671 18.9696 15.539 19.3333 15.6045C19.9746 15.7197 20.5823 15.1432 20.8306 14.6275C20.8349 14.6186 20.8427 14.6117 20.8525 14.6082C20.917 14.5857 20.7513 14.9203 20.694 15.036L20.694 15.036L20.694 15.036C20.6842 15.0557 20.6777 15.069 20.6759 15.0731C20.6145 15.2129 20.5891 15.3212 20.5999 15.398C20.6298 15.6155 20.8211 15.675 21.0262 15.6307C21.5992 15.5072 22.0821 15.0501 22.375 14.569C22.3793 14.5618 22.3816 14.5535 22.3816 14.545C22.3658 13.4218 22.3524 12.6862 22.3413 12.3381C22.3296 11.975 22.3313 11.6482 22.3465 11.3579C22.0265 11.3502 21.7496 11.3301 21.5157 11.2976C21.0295 11.2303 20.8074 10.6556 20.7551 10.2381C20.7421 10.1328 20.7309 10.0254 20.7197 9.91727C20.6412 9.1606 20.5585 8.36393 19.7843 7.94825C18.9876 7.52014 17.6982 7.77544 16.9177 8.14733C16.6867 8.25724 16.4617 8.36722 16.2377 8.47668C15.6119 8.78252 14.9945 9.08425 14.2795 9.36898C14.2774 9.3698 14.2738 9.37189 14.2694 9.37443C14.2515 9.3848 14.2205 9.40273 14.2216 9.37313C14.2217 9.36881 14.2231 9.3646 14.2257 9.36094C14.2282 9.35728 14.2317 9.35432 14.2358 9.35239C15.1708 8.93273 16.0943 8.49064 17.0065 8.02613C17.1644 7.94594 17.3811 7.86514 17.6564 7.78373C18.1853 7.62751 18.7113 7.58097 19.2407 7.65332C20.2115 7.7865 20.6664 8.52659 20.7936 9.39571C20.8053 9.47557 20.8144 9.57357 20.8245 9.68219C20.8751 10.2286 20.9506 11.044 21.5138 11.1708C21.7195 11.2172 21.9931 11.24 22.3346 11.239L22.319 10.9648C22.3183 10.9535 22.3134 10.9428 22.3051 10.9348C22.2969 10.9268 22.2859 10.9221 22.2743 10.9215C22.0977 10.9123 21.9254 10.8988 21.7573 10.881C21.118 10.8134 21.057 9.96774 21.0224 9.48751L21.0186 9.43534C20.9317 8.26069 20.3701 7.38696 19.0736 7.30078ZM23.952 11.3634C23.8584 11.3678 23.7589 11.3724 23.653 11.38C23.6381 12.3764 23.6176 13.3716 23.5913 14.3658C23.5897 14.4355 23.6046 14.4991 23.6359 14.5565C23.8796 14.9977 24.2298 15.3257 24.6866 15.5404C24.9543 15.6667 25.3977 15.7916 25.411 15.3441C25.4132 15.2722 25.3913 15.19 25.345 15.0976C25.309 15.0257 25.2745 14.953 25.2415 14.8796C25.12 14.6105 25.1422 14.5988 25.308 14.8446C25.32 14.8627 25.3322 14.8808 25.3446 14.8989C25.5682 15.2289 26.004 15.6077 26.4317 15.6307C26.8196 15.6515 27.0755 15.5183 27.0323 15.0999C27.0253 15.0332 26.9961 14.9624 26.9445 14.8874C26.7672 14.6318 26.6174 14.3613 26.4949 14.0759L26.4943 14.0738L26.4941 14.0718L26.4944 14.0696L26.495 14.0679C26.4956 14.0667 26.4965 14.0657 26.4975 14.0649C26.4986 14.0641 26.4998 14.0636 26.5011 14.0635L26.5672 14.1485L26.5673 14.1486L26.5674 14.1488L26.5674 14.1488L26.5677 14.1492C26.6999 14.3195 26.9863 14.6884 27.0266 14.7353C27.3186 15.0754 27.8997 15.2694 28.3327 15.357C28.7319 15.4376 29.1806 15.3736 28.9683 14.8455C28.8421 14.5317 28.6996 14.2814 28.4347 14.0395C28.3382 13.951 28.2445 13.8599 28.1537 13.7662C27.6951 13.2931 27.7171 13.2711 28.2197 13.7003C28.3102 13.7774 28.4013 13.8539 28.4931 13.9298C28.9793 14.3317 30.2502 14.833 30.8636 14.7685C31.6346 14.6883 31.016 13.9418 30.7302 13.751C30.1035 13.3332 29.4873 12.9014 28.8815 12.4556C28.8549 12.436 28.8321 12.4183 28.8131 12.4026C28.6852 12.2979 28.6914 12.2899 28.8316 12.3787C29.5276 12.8189 30.2219 13.2412 30.9144 13.6455C31.0305 13.7134 31.1484 13.7628 31.268 13.7939C31.9693 13.9759 32.7478 14.0644 33.4742 14.0114C33.7054 13.9943 34.1014 13.8662 33.7975 13.5685C33.6041 13.379 33.3827 13.2274 33.1333 13.1137C31.7854 12.4989 30.4668 11.8295 29.1777 11.1054C29.1562 11.0931 29.1556 11.0919 29.1758 11.1017C30.5406 11.7493 31.9234 12.3584 33.3242 12.9289C33.4299 12.9719 33.5377 12.9983 33.6475 13.0082C34.366 13.0708 35.0843 13.0631 35.8024 12.9851C35.9493 12.9691 36.092 12.936 36.2306 12.8856C36.3123 12.8561 36.3254 12.8069 36.27 12.7381C36.1149 12.5449 35.9246 12.3923 35.6989 12.2805C33.5565 11.2166 31.4098 10.1608 29.2589 9.11322C29.2543 9.11085 29.2508 9.10674 29.2489 9.1017C29.2432 9.08358 29.2551 9.08097 29.2845 9.09387C31.4317 10.0321 33.5736 10.9814 35.7103 11.9418C35.7891 11.9771 35.8711 11.9968 35.9562 12.0008C36.7203 12.0376 37.4841 12.0329 38.2478 11.9865C38.3953 11.9776 38.5416 11.9545 38.6865 11.9174C38.6968 11.9146 38.7059 11.9086 38.7122 11.9003C38.7186 11.8921 38.7219 11.882 38.7216 11.8717C38.7193 11.7834 38.1676 11.6695 37.9373 11.622C37.889 11.612 37.8548 11.605 37.8429 11.6017C36.9206 11.3479 35.9675 11.0175 34.9835 10.6105C33.3147 9.92014 31.7233 9.21553 30.2369 8.37728L30.1894 8.3505C29.2617 7.82668 28.4334 7.35904 27.32 7.31599C26.1103 7.26898 25.3579 7.74594 25.0849 8.91783C25.0582 9.03241 25.0418 9.19421 25.0233 9.37641C24.962 9.98194 24.8778 10.8128 24.3172 10.8851C24.1165 10.9106 23.9148 10.9249 23.7119 10.928C23.6995 10.9281 23.6877 10.933 23.679 10.9415C23.6703 10.95 23.6654 10.9616 23.6654 10.9736L23.6639 11.239C23.9436 11.2635 24.5864 11.2575 24.7991 11.004C24.9732 10.7963 25.0822 10.5565 25.1262 10.2847C25.1525 10.1221 25.1712 9.96165 25.1897 9.8035L25.1897 9.80346L25.1897 9.80343L25.1898 9.80339L25.1898 9.80335C25.2475 9.31007 25.3026 8.83918 25.5743 8.39709C25.8844 7.89295 26.4303 7.68143 27.0394 7.63903C27.8626 7.58143 28.5885 7.82244 29.3168 8.19341C30.1191 8.60232 30.9333 8.98772 31.7594 9.34963C31.7987 9.36683 31.7968 9.37636 31.7537 9.3782C31.7442 9.37881 31.7347 9.37728 31.7252 9.37359C31.0228 9.10275 30.3289 8.7621 29.6401 8.42402L29.6401 8.42401C29.4476 8.32952 29.2555 8.23523 29.0638 8.14272C28.4684 7.85577 27.8161 7.72428 27.1068 7.74825C25.5838 7.79986 25.3327 8.98235 25.2781 10.204C25.2737 10.3063 25.243 10.4341 25.186 10.5874C24.9148 11.3186 24.5549 11.3354 23.952 11.3634ZM23.9444 8.72196C23.9444 9.22639 23.5231 9.63532 23.0035 9.63532C22.4838 9.63532 22.0625 9.22639 22.0625 8.72196C22.0625 8.21752 22.4838 7.80859 23.0035 7.80859C23.5231 7.80859 23.9444 8.21752 23.9444 8.72196ZM23.4354 19.2164C23.9105 19.0149 24.3602 18.7703 24.7846 18.4828C24.8251 18.4553 24.8743 18.4248 24.9283 18.3913L24.9284 18.3913C25.222 18.2092 25.6559 17.9402 25.5713 17.6136C25.5245 17.4321 25.4047 17.3439 25.2119 17.3491C24.7837 17.3602 24.2111 16.9814 23.9239 16.7012C23.8521 16.6308 23.8443 16.5689 23.9007 16.5155C23.9051 16.5112 23.9087 16.5062 23.9112 16.5006C23.9136 16.495 23.9149 16.4889 23.9149 16.4829C23.915 16.4768 23.9138 16.4707 23.9114 16.4651C23.909 16.4595 23.9055 16.4544 23.9011 16.45C23.8622 16.4116 23.8575 16.3616 23.8869 16.2998C24.017 16.0255 24.2377 15.8758 24.5492 15.851C25.1037 15.8072 25.9763 15.9758 26.1329 16.5869C26.1354 16.5965 26.1411 16.6052 26.1491 16.6118C26.5773 16.9473 26.9367 17.5408 26.8095 18.0874C26.5745 19.0961 25.2513 19.6298 24.364 19.9284C24.3582 19.9304 24.352 19.9313 24.3458 19.931C24.3396 19.9307 24.3335 19.9292 24.3279 19.9265L22.5918 19.121C22.5839 19.1173 22.5772 19.1114 22.5725 19.1042C22.5679 19.097 22.5653 19.0886 22.5652 19.08L22.4123 9.7846C22.4122 9.77796 22.4106 9.77142 22.4077 9.76543C22.4047 9.75945 22.4004 9.75416 22.395 9.74995C22.3897 9.74574 22.3835 9.7427 22.3768 9.74104C22.3701 9.73938 22.3631 9.73915 22.3563 9.74036C22.1819 9.77078 22.0944 9.69121 22.0938 9.50165C22.0938 9.46325 22.1096 9.42731 22.1412 9.39382C22.1455 9.3892 22.1508 9.38549 22.1566 9.38293C22.1625 9.38036 22.1688 9.379 22.1753 9.37891C22.1817 9.37882 22.1882 9.38002 22.1941 9.38243C22.2001 9.38483 22.2055 9.3884 22.2101 9.3929C22.3506 9.53238 22.4834 9.62193 22.6084 9.66156C23.0654 9.80595 23.4566 9.71671 23.782 9.39382C23.7906 9.38522 23.8023 9.38025 23.8147 9.37999C23.827 9.37973 23.839 9.3842 23.848 9.39244C23.8923 9.43238 23.9086 9.48829 23.8969 9.56018C23.8709 9.71901 23.7862 9.77769 23.6429 9.73622C23.6359 9.73416 23.6285 9.73372 23.6213 9.73491C23.6141 9.7361 23.6073 9.7389 23.6014 9.74309C23.5954 9.74728 23.5906 9.75274 23.5872 9.75906C23.5837 9.76538 23.5818 9.77239 23.5816 9.77953C23.5332 11.8247 23.484 13.8507 23.434 15.8574C23.4068 16.9628 23.3851 18.0682 23.3689 19.1735C23.3688 19.1812 23.3707 19.1889 23.3744 19.1957C23.3781 19.2025 23.3835 19.2083 23.3901 19.2126C23.3967 19.2168 23.4044 19.2194 23.4123 19.2201C23.4202 19.2207 23.4281 19.2195 23.4354 19.2164ZM24.835 16.2264C24.8351 16.2149 24.8306 16.2036 24.8218 16.1929C24.8131 16.1823 24.8002 16.1726 24.784 16.1644C24.7677 16.1562 24.7484 16.1497 24.7271 16.1451C24.7058 16.1406 24.683 16.1382 24.6599 16.1381C24.6133 16.1377 24.5686 16.1466 24.5355 16.1627C24.5025 16.1788 24.4838 16.2009 24.4837 16.224C24.4836 16.2354 24.488 16.2468 24.4968 16.2574C24.5055 16.268 24.5184 16.2777 24.5347 16.2859C24.5509 16.2941 24.5702 16.3006 24.5915 16.3052C24.6128 16.3097 24.6356 16.3121 24.6587 16.3123C24.7053 16.3126 24.75 16.3037 24.7831 16.2876C24.8161 16.2715 24.8348 16.2495 24.835 16.2264ZM22.5395 27.688C22.7974 27.91 23.0477 28.1255 23.2629 28.3449C23.4832 28.5698 23.616 28.7142 23.6613 28.7781C24.089 29.3808 23.9048 29.8444 23.4595 30.3583C22.7303 31.1997 21.8197 32.4689 22.5352 33.6071C22.5412 33.6166 22.5477 33.6232 22.5546 33.6269C22.5822 33.6423 22.5917 33.6352 22.5831 33.6057C22.5701 33.5611 22.5561 33.516 22.542 33.4706L22.5419 33.4705C22.478 33.2647 22.4119 33.0515 22.4212 32.8458C22.4667 31.8631 23.2106 31.1761 23.8923 30.5466L23.8977 30.5417C24.3421 30.1311 24.7114 29.4154 24.4147 28.8343C24.2678 28.5464 24.0542 28.2661 23.7738 27.9933C23.6245 27.8483 23.4709 27.704 23.3163 27.5588L23.3158 27.5583L23.3156 27.5581C22.8037 27.0774 22.2819 26.5872 21.8762 26.0324C21.4185 25.4066 21.8681 24.8541 22.3733 24.4758C22.8926 24.0867 23.4595 23.7381 24.0261 23.3896C24.3085 23.216 24.5908 23.0423 24.8671 22.8638C25.4539 22.4845 26.0217 21.8458 25.65 21.1149C25.5538 20.9254 25.4164 20.7662 25.2379 20.6375C24.5536 20.1439 23.7116 19.77 22.9035 19.411L22.9035 19.411L22.9035 19.411C22.721 19.3299 22.5402 19.2496 22.3633 19.1689C21.7793 18.902 21.3535 18.6384 20.8303 18.2924L20.8066 18.2767C20.6006 18.141 20.3765 17.9934 20.3285 17.7583C20.2899 17.5678 20.3812 17.4277 20.6024 17.338C20.6123 17.3341 20.6231 17.3334 20.6333 17.3361C20.9841 17.4292 21.8952 16.9131 22.0371 16.5887C22.0414 16.579 22.0422 16.5682 22.0392 16.558C22.0363 16.5479 22.0299 16.539 22.021 16.5329L22.0001 16.5186C21.9942 16.5146 21.9893 16.5092 21.9858 16.5031C21.9823 16.4969 21.9804 16.49 21.9801 16.483C21.9797 16.476 21.9811 16.469 21.984 16.4625C21.9869 16.4561 21.9913 16.4504 21.9968 16.4458L22.0248 16.4228C22.0318 16.417 22.037 16.4094 22.0396 16.4009C22.0422 16.3924 22.0422 16.3833 22.0395 16.3748C21.7775 15.5076 20.282 15.8191 19.877 16.3426C19.8384 16.3924 19.82 16.4381 19.802 16.483C19.7768 16.5457 19.7523 16.6067 19.6743 16.6744C19.3616 16.9457 19.1643 17.2791 19.0823 17.6748C18.9133 18.4924 19.8647 19.2108 20.5056 19.5251C20.6183 19.5801 20.9115 19.6953 21.3853 19.8707C22.0094 20.1014 22.6347 20.3295 23.2611 20.555C23.7097 20.7163 25.3281 21.4896 24.4038 22.1163C24.0499 22.356 23.2622 22.9088 22.0405 23.7748C21.6914 24.0222 21.384 24.3295 21.1185 24.697C20.7273 25.2389 20.8094 25.7191 21.1707 26.2716C21.5263 26.8156 22.0467 27.2636 22.5395 27.688ZM21.4001 16.1957C21.4087 16.2063 21.413 16.2176 21.4128 16.2289H21.4128C21.4126 16.2403 21.4079 16.2514 21.3989 16.2617C21.39 16.272 21.3769 16.2813 21.3606 16.289C21.3442 16.2967 21.3248 16.3028 21.3035 16.3067C21.2823 16.3107 21.2595 16.3126 21.2366 16.3122C21.1902 16.3114 21.146 16.3015 21.1135 16.2848C21.0811 16.2681 21.0631 16.2459 21.0635 16.223C21.0637 16.2117 21.0684 16.2006 21.0773 16.1903C21.0863 16.18 21.0993 16.1707 21.1157 16.163C21.1321 16.1552 21.1514 16.1492 21.1727 16.1453C21.194 16.1413 21.2168 16.1394 21.2397 16.1398C21.2626 16.1402 21.2853 16.1428 21.3064 16.1475C21.3276 16.1522 21.3467 16.1589 21.3628 16.1672C21.3788 16.1754 21.3915 16.1851 21.4001 16.1957ZM21.7927 23.3472L21.7925 23.3472C21.1373 22.9721 20.2923 22.4884 20.1631 21.7698C20.0231 20.9905 20.9151 20.3854 21.566 20.1057C21.5773 20.1007 21.5901 20.1002 21.6016 20.1043L23.2984 20.7135C23.3077 20.7169 23.3156 20.723 23.3212 20.7309C23.3267 20.7389 23.3295 20.7483 23.3292 20.7578L23.2813 22.6997C23.2811 22.7069 23.2793 22.7139 23.2758 22.7202C23.2723 22.7265 23.2674 22.732 23.2613 22.7361L22.1371 23.5149C22.1295 23.5203 22.1205 23.5233 22.1111 23.5236C22.1017 23.5239 22.0924 23.5216 22.0844 23.5168C21.9942 23.4626 21.8958 23.4063 21.7927 23.3472ZM21.4544 22.0735C21.8146 22.3398 22.181 22.5982 22.5535 22.8486C22.6044 22.8827 22.6293 22.8698 22.628 22.8099L22.5919 20.6407C22.5918 20.6333 22.5897 20.626 22.5861 20.6195C22.5824 20.6129 22.5771 20.6073 22.5707 20.6032C22.5644 20.599 22.5571 20.5964 22.5494 20.5956C22.5418 20.5947 22.5341 20.5957 22.5269 20.5983C22.1238 20.7509 20.664 21.49 21.4544 22.0735ZM23.4793 27.5085C23.2219 27.2836 22.8996 26.9619 22.7045 26.7573C22.6963 26.7491 22.6917 26.7382 22.6916 26.7269L22.6556 24.4527C22.6554 24.445 22.6573 24.4373 22.6609 24.4305C22.6646 24.4236 22.6699 24.4178 22.6765 24.4135L23.748 23.7191C23.7562 23.7138 23.7659 23.7111 23.7757 23.7113C23.7856 23.7116 23.7951 23.7148 23.803 23.7205C24.4834 24.2168 25.4096 25.1016 24.8992 26.0099C24.5751 26.5868 24.1219 27.0871 23.5396 27.5108C23.5307 27.5173 23.5199 27.5206 23.5089 27.5202C23.4979 27.5198 23.4874 27.5156 23.4793 27.5085ZM23.5903 24.5269C23.5033 24.4529 23.4126 24.383 23.3183 24.3172C23.2696 24.2831 23.2444 24.2953 23.2428 24.3536L23.1859 26.89C23.1843 26.9527 23.206 26.9616 23.2509 26.9168C23.4218 26.746 23.5881 26.5712 23.7499 26.3923C23.9322 26.1905 24.0642 26.0071 24.1458 25.8421C24.4121 25.3034 23.9773 24.8546 23.5903 24.5269ZM22.4608 30.9952C22.5107 31.0416 22.5602 31.0877 22.609 31.1338C22.6139 31.1384 22.6197 31.142 22.6262 31.1442C22.6326 31.1464 22.6394 31.1473 22.6462 31.1467C22.6531 31.1462 22.6597 31.1442 22.6656 31.1409C22.6715 31.1376 22.6767 31.1332 22.6807 31.1278L23.0899 30.5812C23.0958 30.5734 23.0989 30.5642 23.0989 30.555L23.1459 28.4448C23.1461 28.4383 23.1449 28.4319 23.1423 28.4259C23.1398 28.42 23.136 28.4146 23.1312 28.4103L22.4286 27.7665C22.4197 27.7583 22.4079 27.7537 22.3955 27.7539C22.3832 27.7541 22.3714 27.7589 22.3626 27.7674L22.3463 27.7833C21.9152 28.2035 21.2952 28.8078 21.3931 29.4485C21.4915 30.0925 21.9887 30.5555 22.4608 30.9952ZM22.1684 28.8803C22.3045 28.6963 22.4615 28.5192 22.6394 28.349C22.6922 28.2986 22.7191 28.3094 22.7201 28.3812L22.7552 30.6407C22.7562 30.7141 22.7334 30.7218 22.6868 30.6637C22.589 30.5411 22.4841 30.4115 22.3721 30.2748C22.1433 29.9964 21.932 29.6541 22.0151 29.2918C22.0603 29.0946 22.1114 28.9574 22.1684 28.8803ZM23.0125 34.0863C23.0309 33.3287 23.0502 32.5756 23.0704 31.8269C23.0733 31.7243 23.1026 31.7166 23.1583 31.8038C23.4086 32.1952 23.4276 32.5966 23.2152 33.008C23.2121 33.0141 23.2105 33.0201 23.2105 33.0259C23.2105 33.0309 23.2108 33.0355 23.2114 33.0398C23.2122 33.043 23.2137 33.0459 23.216 33.0484C23.2182 33.0509 23.221 33.0527 23.2242 33.0538C23.2274 33.0549 23.2308 33.0552 23.2341 33.0547C23.2375 33.0542 23.2406 33.0529 23.2433 33.0508C23.5414 32.813 23.5599 32.2232 23.4555 31.8988C23.408 31.751 23.342 31.6098 23.2575 31.4752C23.2536 31.4691 23.2484 31.464 23.2422 31.4601C23.2359 31.4563 23.2289 31.4539 23.2216 31.4532C23.2143 31.4524 23.2069 31.4533 23.2 31.4558C23.1932 31.4582 23.187 31.4622 23.182 31.4674C23.044 31.6112 22.9269 31.7702 22.8307 31.9444C22.7981 32.0034 22.7823 32.0691 22.7832 32.1416C22.7937 32.7539 22.803 33.3662 22.8112 33.9785C22.8125 34.0694 22.8185 34.1424 22.8293 34.1974C22.8407 34.2554 22.8557 34.3124 22.8744 34.3683C22.9006 34.4454 22.925 34.4448 22.9475 34.3665C22.9586 34.3266 22.9706 34.2869 22.9836 34.2476C23.0019 34.1926 23.0116 34.1388 23.0125 34.0863Z"
          fill="url(#paint1_linear_1_4905)"
        />
        <path
          d="M10.4578 29.8555V26.8126H11.1092V28.0512H12.2621V26.8126H12.9135V29.8555H12.2621V28.5998H11.1092V29.8555H10.4578ZM13.4879 29.8555V26.8126H14.1393V29.8555H13.4879ZM14.7142 29.8555V26.8126H15.9313C16.6599 26.8126 17.1013 27.1898 17.1013 27.8069C17.1013 28.424 16.6599 28.8055 15.9313 28.8055H15.3656V29.8555H14.7142ZM15.3656 28.2569H15.8928C16.2356 28.2569 16.4328 28.1026 16.4328 27.8069C16.4328 27.5112 16.2356 27.3612 15.8928 27.3612H15.3656V28.2569ZM17.0022 29.8555L18.0993 26.8126H18.8708L19.9679 29.8555H19.2908L19.0679 29.2083H17.8979L17.675 29.8555H17.0022ZM18.0822 28.6726H18.8879L18.485 27.4983L18.0822 28.6726ZM20.1328 29.8555L21.2299 26.8126H22.0013L23.0985 29.8555H22.4213L22.1985 29.2083H21.0285L20.8056 29.8555H20.1328ZM21.2128 28.6726H22.0185L21.6156 27.4983L21.2128 28.6726ZM11.7478 33.924C10.9163 33.924 10.3206 33.3326 10.3206 32.3383C10.3206 31.3698 10.8821 30.744 11.7606 30.744C12.5578 30.744 12.9863 31.1512 13.1149 31.8755L12.4378 31.9012C12.3692 31.5198 12.1378 31.2926 11.7606 31.2926C11.2763 31.2926 10.9935 31.704 10.9935 32.3383C10.9935 32.9812 11.2892 33.3755 11.7563 33.3755C12.1635 33.3755 12.3863 33.1312 12.4463 32.7198L13.1278 32.7455C13.0035 33.4869 12.5406 33.924 11.7478 33.924ZM14.9508 33.924C14.0251 33.924 13.4679 33.3198 13.4679 32.3383C13.4679 31.3569 14.0251 30.744 14.9508 30.744C15.8765 30.744 16.4337 31.3569 16.4337 32.3383C16.4337 33.3198 15.8765 33.924 14.9508 33.924ZM14.9508 33.3755C15.4565 33.3755 15.7608 32.9983 15.7608 32.3383C15.7608 31.6783 15.4565 31.2926 14.9508 31.2926C14.4408 31.2926 14.1408 31.6783 14.1408 32.3383C14.1408 32.9983 14.4408 33.3755 14.9508 33.3755ZM16.8654 33.8555V30.8126H17.7354L18.5111 33.0283L19.2826 30.8126H20.1526V33.8555H19.5011V31.884L18.7854 33.8469H18.2283L17.5168 31.884V33.8555H16.8654ZM20.7284 33.8555V30.8126H21.9456C22.6741 30.8126 23.1156 31.1898 23.1156 31.8069C23.1156 32.424 22.6741 32.8055 21.9456 32.8055H21.3798V33.8555H20.7284ZM21.3798 32.2569H21.907C22.2498 32.2569 22.447 32.1026 22.447 31.8069C22.447 31.5112 22.2498 31.3612 21.907 31.3612H21.3798V32.2569ZM23.6079 33.8555V30.8126H24.2593V33.3069H25.6607V33.8555H23.6079ZM25.9935 33.8555V30.8126H26.6449V33.8555H25.9935ZM27.0008 33.8555L28.0979 30.8126H28.8694L29.9665 33.8555H29.2894L29.0665 33.2083H27.8965L27.6736 33.8555H27.0008ZM28.0808 32.6726H28.8865L28.4836 31.4983L28.0808 32.6726ZM30.2541 33.8555V30.8126H30.9741L32.1827 32.9126V30.8126H32.8341V33.8555H32.1055L30.9055 31.8283V33.8555H30.2541ZM33.9856 33.8555V31.3612H33.077V30.8126H35.5541V31.3612H34.6413V33.8555H33.9856Z"
          fill="#101828"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddd_1_4905"
          x="0.857143"
          y="0.148996"
          width="44.2857"
          height="44.2857"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1_4905"
          />
          <feOffset dy="0.714286" />
          <feGaussianBlur stdDeviation="0.357143" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4905"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_1_4905"
          />
          <feOffset dy="1.42857" />
          <feGaussianBlur stdDeviation="1.42857" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4905"
            result="effect2_dropShadow_1_4905"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="dilate"
            in="SourceAlpha"
            result="effect3_dropShadow_1_4905"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4905"
            result="effect3_dropShadow_1_4905"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_1_4905"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_4905"
          x1="9.88803"
          y1="6.55415"
          x2="36.0447"
          y2="35.5773"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5E7EB" />
          <stop offset="1" stopColor="#F9FAFB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_4905"
          x1="30.5498"
          y1="10.0698"
          x2="20.9753"
          y2="31.2119"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.473541" stopColor="#364153" stopOpacity="0.7" />
          <stop offset="0.811446" stopColor="#364153" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  hipaaDark: ({ className }: { className?: string }) => (
    <svg
      width="46"
      height="45"
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_ddd_1_2028)">
        <rect
          x="3"
          y="0.863281"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_1_2028)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.0736 7.30078H18.5513C17.4523 7.40753 16.5515 7.91698 15.6382 8.43349L15.6382 8.4335C15.3095 8.61938 14.9792 8.80617 14.6375 8.97544C13.1797 9.69771 11.6905 10.3538 10.1701 10.9436C9.31299 11.2764 8.4347 11.5409 7.5352 11.7372C7.4488 11.7559 7.36935 11.7893 7.29688 11.8372V11.8727C7.5102 11.9479 7.76245 11.9888 8.05363 11.9953C8.84267 12.0125 9.51349 12.0095 10.0661 11.9865C10.1506 11.9828 10.2321 11.9633 10.3106 11.928C12.4837 10.9519 14.6612 9.98527 16.8432 9.02797C16.8476 9.02613 16.852 9.02536 16.8565 9.02567C16.8777 9.02843 16.879 9.03427 16.8603 9.04318C14.6862 10.108 12.5139 11.176 10.3434 12.2473C10.2138 12.3114 9.41474 12.7999 9.89472 12.9132C10.6648 13.0953 11.6052 13.0639 12.3886 12.9939C12.4952 12.9843 12.6 12.9582 12.7029 12.9155C14.1157 12.3278 15.0315 11.9343 15.4503 11.7349C15.5082 11.7069 15.5663 11.6793 15.6245 11.6519C16.9222 11.0378 16.9367 11.0651 15.6682 11.734C14.7886 12.1972 13.894 12.6323 12.9844 13.039C12.7769 13.1321 11.6328 13.7584 12.3364 13.9538C12.4725 13.9916 12.6016 14.0121 12.7238 14.0155C13.3976 14.0333 14.0708 13.9567 14.7434 13.7856C14.8605 13.7558 14.9747 13.7083 15.0861 13.6432C15.7916 13.2327 16.4885 12.8092 17.1769 12.3727C17.1826 12.3694 17.2268 12.3621 17.1921 12.3879C16.5905 12.8389 15.9774 13.2745 15.3529 13.6948C15.2118 13.7897 15.1129 13.8702 15.0562 13.9363C14.891 14.1289 14.5539 14.61 15.0282 14.733C15.5751 14.8745 16.5412 14.457 17.0397 14.2275C17.4891 14.0207 17.9114 13.6074 18.2623 13.264L18.2623 13.264L18.2623 13.264L18.2817 13.245C18.3135 13.2141 18.3187 13.2542 18.3011 13.2736C18.0812 13.5218 17.8525 13.7621 17.6151 13.9943C17.442 14.1642 17.3197 14.3066 17.2481 14.4215C16.2811 15.9736 18.2741 15.2192 18.7317 14.9459C19.0251 14.7708 19.3157 14.3372 19.4771 14.0773C19.4847 14.065 19.4923 14.055 19.4999 14.0473C19.5306 14.016 19.5374 14.0203 19.5203 14.0602C19.395 14.3536 19.2423 14.6318 19.0622 14.8948C18.8756 15.1671 18.9696 15.539 19.3333 15.6045C19.9746 15.7197 20.5823 15.1432 20.8306 14.6275C20.8349 14.6186 20.8427 14.6117 20.8525 14.6082C20.917 14.5857 20.7513 14.9203 20.694 15.036L20.694 15.036L20.694 15.036C20.6842 15.0557 20.6777 15.069 20.6759 15.0731C20.6145 15.2129 20.5891 15.3212 20.5999 15.398C20.6298 15.6155 20.8211 15.675 21.0262 15.6307C21.5992 15.5072 22.0821 15.0501 22.375 14.569C22.3793 14.5618 22.3816 14.5535 22.3816 14.545C22.3658 13.4218 22.3524 12.6862 22.3413 12.3381C22.3296 11.975 22.3313 11.6482 22.3465 11.3579C22.0265 11.3502 21.7496 11.3301 21.5157 11.2976C21.0295 11.2303 20.8074 10.6556 20.7551 10.2381C20.7421 10.1328 20.7309 10.0254 20.7197 9.91727C20.6412 9.1606 20.5585 8.36393 19.7843 7.94825C18.9876 7.52014 17.6982 7.77544 16.9177 8.14733C16.6867 8.25724 16.4617 8.36722 16.2377 8.47668C15.6119 8.78252 14.9945 9.08425 14.2795 9.36898C14.2774 9.3698 14.2738 9.37189 14.2694 9.37443C14.2515 9.3848 14.2205 9.40273 14.2216 9.37313C14.2217 9.36881 14.2231 9.3646 14.2257 9.36094C14.2282 9.35728 14.2317 9.35432 14.2358 9.35239C15.1708 8.93273 16.0943 8.49064 17.0065 8.02613C17.1644 7.94594 17.3811 7.86514 17.6564 7.78373C18.1853 7.62751 18.7113 7.58097 19.2407 7.65332C20.2115 7.7865 20.6664 8.52659 20.7936 9.39571C20.8053 9.47557 20.8144 9.57357 20.8245 9.68219C20.8751 10.2286 20.9506 11.044 21.5138 11.1708C21.7195 11.2172 21.9931 11.24 22.3346 11.239L22.319 10.9648C22.3183 10.9535 22.3134 10.9428 22.3051 10.9348C22.2969 10.9268 22.2859 10.9221 22.2743 10.9215C22.0977 10.9123 21.9254 10.8988 21.7573 10.881C21.118 10.8134 21.057 9.96774 21.0224 9.48751L21.0186 9.43534C20.9317 8.26069 20.3701 7.38696 19.0736 7.30078ZM23.952 11.3634C23.8584 11.3678 23.7589 11.3724 23.653 11.38C23.6381 12.3764 23.6176 13.3716 23.5913 14.3658C23.5897 14.4355 23.6046 14.4991 23.6359 14.5565C23.8796 14.9977 24.2298 15.3257 24.6866 15.5404C24.9543 15.6667 25.3977 15.7916 25.411 15.3441C25.4132 15.2722 25.3913 15.19 25.345 15.0976C25.309 15.0257 25.2745 14.953 25.2415 14.8796C25.12 14.6105 25.1422 14.5988 25.308 14.8446C25.32 14.8627 25.3322 14.8808 25.3446 14.8989C25.5682 15.2289 26.004 15.6077 26.4317 15.6307C26.8196 15.6515 27.0755 15.5183 27.0323 15.0999C27.0253 15.0332 26.9961 14.9624 26.9445 14.8874C26.7672 14.6318 26.6174 14.3613 26.4949 14.0759L26.4943 14.0738L26.4941 14.0718L26.4944 14.0696L26.495 14.0679C26.4956 14.0667 26.4965 14.0657 26.4975 14.0649C26.4986 14.0641 26.4998 14.0636 26.5011 14.0635L26.5672 14.1485L26.5673 14.1486L26.5674 14.1488L26.5674 14.1488L26.5677 14.1492C26.6999 14.3195 26.9863 14.6884 27.0266 14.7353C27.3186 15.0754 27.8997 15.2694 28.3327 15.357C28.7319 15.4376 29.1806 15.3736 28.9683 14.8455C28.8421 14.5317 28.6996 14.2814 28.4347 14.0395C28.3382 13.951 28.2445 13.8599 28.1537 13.7662C27.6951 13.2931 27.7171 13.2711 28.2197 13.7003C28.3102 13.7774 28.4013 13.8539 28.4931 13.9298C28.9793 14.3317 30.2502 14.833 30.8636 14.7685C31.6346 14.6883 31.016 13.9418 30.7302 13.751C30.1035 13.3332 29.4873 12.9014 28.8815 12.4556C28.8549 12.436 28.8321 12.4183 28.8131 12.4026C28.6852 12.2979 28.6914 12.2899 28.8316 12.3787C29.5276 12.8189 30.2219 13.2412 30.9144 13.6455C31.0305 13.7134 31.1484 13.7628 31.268 13.7939C31.9693 13.9759 32.7478 14.0644 33.4742 14.0114C33.7054 13.9943 34.1014 13.8662 33.7975 13.5685C33.6041 13.379 33.3827 13.2274 33.1333 13.1137C31.7854 12.4989 30.4668 11.8295 29.1777 11.1054C29.1562 11.0931 29.1556 11.0919 29.1758 11.1017C30.5406 11.7493 31.9234 12.3584 33.3242 12.9289C33.4299 12.9719 33.5377 12.9983 33.6475 13.0082C34.366 13.0708 35.0843 13.0631 35.8024 12.9851C35.9493 12.9691 36.092 12.936 36.2306 12.8856C36.3123 12.8561 36.3254 12.8069 36.27 12.7381C36.1149 12.5449 35.9246 12.3923 35.6989 12.2805C33.5565 11.2166 31.4098 10.1608 29.2589 9.11322C29.2543 9.11085 29.2508 9.10674 29.2489 9.1017C29.2432 9.08358 29.2551 9.08097 29.2845 9.09387C31.4317 10.0321 33.5736 10.9814 35.7103 11.9418C35.7891 11.9771 35.8711 11.9968 35.9562 12.0008C36.7203 12.0376 37.4841 12.0329 38.2478 11.9865C38.3953 11.9776 38.5416 11.9545 38.6865 11.9174C38.6968 11.9146 38.7059 11.9086 38.7122 11.9003C38.7186 11.8921 38.7219 11.882 38.7216 11.8717C38.7193 11.7834 38.1676 11.6695 37.9373 11.622C37.889 11.612 37.8548 11.605 37.8429 11.6017C36.9206 11.3479 35.9675 11.0175 34.9835 10.6105C33.3147 9.92014 31.7233 9.21553 30.2369 8.37728L30.1894 8.3505C29.2617 7.82668 28.4334 7.35904 27.32 7.31599C26.1103 7.26898 25.3579 7.74594 25.0849 8.91783C25.0582 9.03241 25.0418 9.19421 25.0233 9.37641C24.962 9.98194 24.8778 10.8128 24.3172 10.8851C24.1165 10.9106 23.9148 10.9249 23.7119 10.928C23.6995 10.9281 23.6877 10.933 23.679 10.9415C23.6703 10.95 23.6654 10.9616 23.6654 10.9736L23.6639 11.239C23.9436 11.2635 24.5864 11.2575 24.7991 11.004C24.9732 10.7963 25.0822 10.5565 25.1262 10.2847C25.1525 10.1221 25.1712 9.96165 25.1897 9.8035L25.1897 9.80346L25.1897 9.80343L25.1898 9.80339L25.1898 9.80335C25.2475 9.31007 25.3026 8.83918 25.5743 8.39709C25.8844 7.89295 26.4303 7.68143 27.0394 7.63903C27.8626 7.58143 28.5885 7.82244 29.3168 8.19341C30.1191 8.60232 30.9333 8.98772 31.7594 9.34963C31.7987 9.36683 31.7968 9.37636 31.7537 9.3782C31.7442 9.37881 31.7347 9.37728 31.7252 9.37359C31.0228 9.10275 30.3289 8.7621 29.6401 8.42402L29.6401 8.42401C29.4476 8.32952 29.2555 8.23523 29.0638 8.14272C28.4684 7.85577 27.8161 7.72428 27.1068 7.74825C25.5838 7.79986 25.3327 8.98235 25.2781 10.204C25.2737 10.3063 25.243 10.4341 25.186 10.5874C24.9148 11.3186 24.5549 11.3354 23.952 11.3634ZM23.9444 8.72196C23.9444 9.22639 23.5231 9.63532 23.0035 9.63532C22.4838 9.63532 22.0625 9.22639 22.0625 8.72196C22.0625 8.21752 22.4838 7.80859 23.0035 7.80859C23.5231 7.80859 23.9444 8.21752 23.9444 8.72196ZM23.4354 19.2164C23.9105 19.0149 24.3602 18.7703 24.7846 18.4828C24.8251 18.4553 24.8743 18.4248 24.9283 18.3913L24.9284 18.3913C25.222 18.2092 25.6559 17.9402 25.5713 17.6136C25.5245 17.4321 25.4047 17.3439 25.2119 17.3491C24.7837 17.3602 24.2111 16.9814 23.9239 16.7012C23.8521 16.6308 23.8443 16.5689 23.9007 16.5155C23.9051 16.5112 23.9087 16.5062 23.9112 16.5006C23.9136 16.495 23.9149 16.4889 23.9149 16.4829C23.915 16.4768 23.9138 16.4707 23.9114 16.4651C23.909 16.4595 23.9055 16.4544 23.9011 16.45C23.8622 16.4116 23.8575 16.3616 23.8869 16.2998C24.017 16.0255 24.2377 15.8758 24.5492 15.851C25.1037 15.8072 25.9763 15.9758 26.1329 16.5869C26.1354 16.5965 26.1411 16.6052 26.1491 16.6118C26.5773 16.9473 26.9367 17.5408 26.8095 18.0874C26.5745 19.0961 25.2513 19.6298 24.364 19.9284C24.3582 19.9304 24.352 19.9313 24.3458 19.931C24.3396 19.9307 24.3335 19.9292 24.3279 19.9265L22.5918 19.121C22.5839 19.1173 22.5772 19.1114 22.5725 19.1042C22.5679 19.097 22.5653 19.0886 22.5652 19.08L22.4123 9.7846C22.4122 9.77796 22.4106 9.77142 22.4077 9.76543C22.4047 9.75945 22.4004 9.75416 22.395 9.74995C22.3897 9.74574 22.3835 9.7427 22.3768 9.74104C22.3701 9.73938 22.3631 9.73915 22.3563 9.74036C22.1819 9.77078 22.0944 9.69121 22.0938 9.50165C22.0938 9.46325 22.1096 9.42731 22.1412 9.39382C22.1455 9.3892 22.1508 9.38549 22.1566 9.38293C22.1625 9.38036 22.1688 9.379 22.1753 9.37891C22.1817 9.37882 22.1882 9.38002 22.1941 9.38243C22.2001 9.38483 22.2055 9.3884 22.2101 9.3929C22.3506 9.53238 22.4834 9.62193 22.6084 9.66156C23.0654 9.80595 23.4566 9.71671 23.782 9.39382C23.7906 9.38522 23.8023 9.38025 23.8147 9.37999C23.827 9.37973 23.839 9.3842 23.848 9.39244C23.8923 9.43238 23.9086 9.48829 23.8969 9.56018C23.8709 9.71901 23.7862 9.77769 23.6429 9.73622C23.6359 9.73416 23.6285 9.73372 23.6213 9.73491C23.6141 9.7361 23.6073 9.7389 23.6014 9.74309C23.5954 9.74728 23.5906 9.75274 23.5872 9.75906C23.5837 9.76538 23.5818 9.77239 23.5816 9.77953C23.5332 11.8247 23.484 13.8507 23.434 15.8574C23.4068 16.9628 23.3851 18.0682 23.3689 19.1735C23.3688 19.1812 23.3707 19.1889 23.3744 19.1957C23.3781 19.2025 23.3835 19.2083 23.3901 19.2126C23.3967 19.2168 23.4044 19.2194 23.4123 19.2201C23.4202 19.2207 23.4281 19.2195 23.4354 19.2164ZM24.835 16.2264C24.8351 16.2149 24.8306 16.2036 24.8218 16.1929C24.8131 16.1823 24.8002 16.1726 24.784 16.1644C24.7677 16.1562 24.7484 16.1497 24.7271 16.1451C24.7058 16.1406 24.683 16.1382 24.6599 16.1381C24.6133 16.1377 24.5686 16.1466 24.5355 16.1627C24.5025 16.1788 24.4838 16.2009 24.4837 16.224C24.4836 16.2354 24.488 16.2468 24.4968 16.2574C24.5055 16.268 24.5184 16.2777 24.5347 16.2859C24.5509 16.2941 24.5702 16.3006 24.5915 16.3052C24.6128 16.3097 24.6356 16.3121 24.6587 16.3123C24.7053 16.3126 24.75 16.3037 24.7831 16.2876C24.8161 16.2715 24.8348 16.2495 24.835 16.2264ZM22.5395 27.688C22.7974 27.91 23.0477 28.1255 23.2629 28.3449C23.4832 28.5698 23.616 28.7142 23.6613 28.7781C24.089 29.3808 23.9048 29.8444 23.4595 30.3583C22.7303 31.1997 21.8197 32.4689 22.5352 33.6071C22.5412 33.6166 22.5477 33.6232 22.5546 33.6269C22.5822 33.6423 22.5917 33.6352 22.5831 33.6057C22.5701 33.5611 22.5561 33.516 22.542 33.4706L22.5419 33.4705C22.478 33.2647 22.4119 33.0515 22.4212 32.8458C22.4667 31.8631 23.2106 31.1761 23.8923 30.5466L23.8977 30.5417C24.3421 30.1311 24.7114 29.4154 24.4147 28.8343C24.2678 28.5464 24.0542 28.2661 23.7738 27.9933C23.6245 27.8483 23.4709 27.704 23.3163 27.5588L23.3158 27.5583L23.3156 27.5581C22.8037 27.0774 22.2819 26.5872 21.8762 26.0324C21.4185 25.4066 21.8681 24.8541 22.3733 24.4758C22.8926 24.0867 23.4595 23.7381 24.0261 23.3896C24.3085 23.216 24.5908 23.0423 24.8671 22.8638C25.4539 22.4845 26.0217 21.8458 25.65 21.1149C25.5538 20.9254 25.4164 20.7662 25.2379 20.6375C24.5536 20.1439 23.7116 19.77 22.9035 19.411L22.9035 19.411L22.9035 19.411C22.721 19.3299 22.5402 19.2496 22.3633 19.1689C21.7793 18.902 21.3535 18.6384 20.8303 18.2924L20.8066 18.2767C20.6006 18.141 20.3765 17.9934 20.3285 17.7583C20.2899 17.5678 20.3812 17.4277 20.6024 17.338C20.6123 17.3341 20.6231 17.3334 20.6333 17.3361C20.9841 17.4292 21.8952 16.9131 22.0371 16.5887C22.0414 16.579 22.0422 16.5682 22.0392 16.558C22.0363 16.5479 22.0299 16.539 22.021 16.5329L22.0001 16.5186C21.9942 16.5146 21.9893 16.5092 21.9858 16.5031C21.9823 16.4969 21.9804 16.49 21.9801 16.483C21.9797 16.476 21.9811 16.469 21.984 16.4625C21.9869 16.4561 21.9913 16.4504 21.9968 16.4458L22.0248 16.4228C22.0318 16.417 22.037 16.4094 22.0396 16.4009C22.0422 16.3924 22.0422 16.3833 22.0395 16.3748C21.7775 15.5076 20.282 15.8191 19.877 16.3426C19.8384 16.3924 19.82 16.4381 19.802 16.483C19.7768 16.5457 19.7523 16.6067 19.6743 16.6744C19.3616 16.9457 19.1643 17.2791 19.0823 17.6748C18.9133 18.4924 19.8647 19.2108 20.5056 19.5251C20.6183 19.5801 20.9115 19.6953 21.3853 19.8707C22.0094 20.1014 22.6347 20.3295 23.2611 20.555C23.7097 20.7163 25.3281 21.4896 24.4038 22.1163C24.0499 22.356 23.2622 22.9088 22.0405 23.7748C21.6914 24.0222 21.384 24.3295 21.1185 24.697C20.7273 25.2389 20.8094 25.7191 21.1707 26.2716C21.5263 26.8156 22.0467 27.2636 22.5395 27.688ZM21.4001 16.1957C21.4087 16.2063 21.413 16.2176 21.4128 16.2289H21.4128C21.4126 16.2403 21.4079 16.2514 21.3989 16.2617C21.39 16.272 21.3769 16.2813 21.3606 16.289C21.3442 16.2967 21.3248 16.3028 21.3035 16.3067C21.2823 16.3107 21.2595 16.3126 21.2366 16.3122C21.1902 16.3114 21.146 16.3015 21.1135 16.2848C21.0811 16.2681 21.0631 16.2459 21.0635 16.223C21.0637 16.2117 21.0684 16.2006 21.0773 16.1903C21.0863 16.18 21.0993 16.1707 21.1157 16.163C21.1321 16.1552 21.1514 16.1492 21.1727 16.1453C21.194 16.1413 21.2168 16.1394 21.2397 16.1398C21.2626 16.1402 21.2853 16.1428 21.3064 16.1475C21.3276 16.1522 21.3467 16.1589 21.3628 16.1672C21.3788 16.1754 21.3915 16.1851 21.4001 16.1957ZM21.7927 23.3472L21.7925 23.3472C21.1373 22.9721 20.2923 22.4884 20.1631 21.7698C20.0231 20.9905 20.9151 20.3854 21.566 20.1057C21.5773 20.1007 21.5901 20.1002 21.6016 20.1043L23.2984 20.7135C23.3077 20.7169 23.3156 20.723 23.3212 20.7309C23.3267 20.7389 23.3295 20.7483 23.3292 20.7578L23.2813 22.6997C23.2811 22.7069 23.2793 22.7139 23.2758 22.7202C23.2723 22.7265 23.2674 22.732 23.2613 22.7361L22.1371 23.5149C22.1295 23.5203 22.1205 23.5233 22.1111 23.5236C22.1017 23.5239 22.0924 23.5216 22.0844 23.5168C21.9942 23.4626 21.8958 23.4063 21.7927 23.3472ZM21.4544 22.0735C21.8146 22.3398 22.181 22.5982 22.5535 22.8486C22.6044 22.8827 22.6293 22.8698 22.628 22.8099L22.5919 20.6407C22.5918 20.6333 22.5897 20.626 22.5861 20.6195C22.5824 20.6129 22.5771 20.6073 22.5707 20.6032C22.5644 20.599 22.5571 20.5964 22.5494 20.5956C22.5418 20.5947 22.5341 20.5957 22.5269 20.5983C22.1238 20.7509 20.664 21.49 21.4544 22.0735ZM23.4793 27.5085C23.2219 27.2836 22.8996 26.9619 22.7045 26.7573C22.6963 26.7491 22.6917 26.7382 22.6916 26.7269L22.6556 24.4527C22.6554 24.445 22.6573 24.4373 22.6609 24.4305C22.6646 24.4236 22.6699 24.4178 22.6765 24.4135L23.748 23.7191C23.7562 23.7138 23.7659 23.7111 23.7757 23.7113C23.7856 23.7116 23.7951 23.7148 23.803 23.7205C24.4834 24.2168 25.4096 25.1016 24.8992 26.0099C24.5751 26.5868 24.1219 27.0871 23.5396 27.5108C23.5307 27.5173 23.5199 27.5206 23.5089 27.5202C23.4979 27.5198 23.4874 27.5156 23.4793 27.5085ZM23.5903 24.5269C23.5033 24.4529 23.4126 24.383 23.3183 24.3172C23.2696 24.2831 23.2444 24.2953 23.2428 24.3536L23.1859 26.89C23.1843 26.9527 23.206 26.9616 23.2509 26.9168C23.4218 26.746 23.5881 26.5712 23.7499 26.3923C23.9322 26.1905 24.0642 26.0071 24.1458 25.8421C24.4121 25.3034 23.9773 24.8546 23.5903 24.5269ZM22.4608 30.9952C22.5107 31.0416 22.5602 31.0877 22.609 31.1338C22.6139 31.1384 22.6197 31.142 22.6262 31.1442C22.6326 31.1464 22.6394 31.1473 22.6462 31.1467C22.6531 31.1462 22.6597 31.1442 22.6656 31.1409C22.6715 31.1376 22.6767 31.1332 22.6807 31.1278L23.0899 30.5812C23.0958 30.5734 23.0989 30.5642 23.0989 30.555L23.1459 28.4448C23.1461 28.4383 23.1449 28.4319 23.1423 28.4259C23.1398 28.42 23.136 28.4146 23.1312 28.4103L22.4286 27.7665C22.4197 27.7583 22.4079 27.7537 22.3955 27.7539C22.3832 27.7541 22.3714 27.7589 22.3626 27.7674L22.3463 27.7833C21.9152 28.2035 21.2952 28.8078 21.3931 29.4485C21.4915 30.0925 21.9887 30.5555 22.4608 30.9952ZM22.1684 28.8803C22.3045 28.6963 22.4615 28.5192 22.6394 28.349C22.6922 28.2986 22.7191 28.3094 22.7201 28.3812L22.7552 30.6407C22.7562 30.7141 22.7334 30.7218 22.6868 30.6637C22.589 30.5411 22.4841 30.4115 22.3721 30.2748C22.1433 29.9964 21.932 29.6541 22.0151 29.2918C22.0603 29.0946 22.1114 28.9574 22.1684 28.8803ZM23.0125 34.0863C23.0309 33.3287 23.0502 32.5756 23.0704 31.8269C23.0733 31.7243 23.1026 31.7166 23.1583 31.8038C23.4086 32.1952 23.4276 32.5966 23.2152 33.008C23.2121 33.0141 23.2105 33.0201 23.2105 33.0259C23.2105 33.0309 23.2108 33.0355 23.2114 33.0398C23.2122 33.043 23.2137 33.0459 23.216 33.0484C23.2182 33.0509 23.221 33.0527 23.2242 33.0538C23.2274 33.0549 23.2308 33.0552 23.2341 33.0547C23.2375 33.0542 23.2406 33.0529 23.2433 33.0508C23.5414 32.813 23.5599 32.2232 23.4555 31.8988C23.408 31.751 23.342 31.6098 23.2575 31.4752C23.2536 31.4691 23.2484 31.464 23.2422 31.4601C23.2359 31.4563 23.2289 31.4539 23.2216 31.4532C23.2143 31.4524 23.2069 31.4533 23.2 31.4558C23.1932 31.4582 23.187 31.4622 23.182 31.4674C23.044 31.6112 22.9269 31.7702 22.8307 31.9444C22.7981 32.0034 22.7823 32.0691 22.7832 32.1416C22.7937 32.7539 22.803 33.3662 22.8112 33.9785C22.8125 34.0694 22.8185 34.1424 22.8293 34.1974C22.8407 34.2554 22.8557 34.3124 22.8744 34.3683C22.9006 34.4454 22.925 34.4448 22.9475 34.3665C22.9586 34.3266 22.9706 34.2869 22.9836 34.2476C23.0019 34.1926 23.0116 34.1388 23.0125 34.0863Z"
          fill="url(#paint1_linear_1_2028)"
        />
        <path
          d="M10.4578 26.8126H11.1092V28.2569L10.8221 28.0512H12.5535L12.2621 28.2569V26.8126H12.9135V29.8555H12.2621V28.394L12.5535 28.5998H10.8221L11.1092 28.394V29.8555H10.4578V26.8126ZM13.4544 26.8126H14.1058V29.8555H13.4544V26.8126ZM14.643 26.8126H15.8602C16.1002 26.8126 16.3087 26.8526 16.4859 26.9326C16.663 27.0126 16.7973 27.1283 16.8887 27.2798C16.983 27.4283 17.0302 27.604 17.0302 27.8069C17.0302 28.0098 16.983 28.1869 16.8887 28.3383C16.7973 28.4869 16.663 28.6026 16.4859 28.6855C16.3087 28.7655 16.1002 28.8055 15.8602 28.8055H15.2945V29.8555H14.643V26.8126ZM15.8216 28.2569C15.9959 28.2569 16.1287 28.2183 16.2202 28.1412C16.3145 28.064 16.3616 27.9526 16.3616 27.8069C16.3616 27.6612 16.3145 27.5512 16.2202 27.4769C16.1287 27.3998 15.9959 27.3612 15.8216 27.3612H15.2945V28.2569H15.8216ZM18.0497 26.8126H18.8211L19.9183 29.8555H19.2411L19.0183 29.2083H17.8483L17.6254 29.8555H16.9526L18.0497 26.8126ZM18.8383 28.6726L18.4354 27.4983L18.0326 28.6726H18.8383ZM21.2263 26.8126H21.9978L23.0949 29.8555H22.4178L22.1949 29.2083H21.0249L20.802 29.8555H20.1292L21.2263 26.8126ZM22.0149 28.6726L21.612 27.4983L21.2092 28.6726H22.0149ZM11.7435 33.924C11.4663 33.924 11.2192 33.8612 11.0021 33.7355C10.7849 33.6098 10.6163 33.4269 10.4963 33.1869C10.3763 32.9469 10.3163 32.664 10.3163 32.3383C10.3163 32.0183 10.3749 31.7383 10.4921 31.4983C10.6092 31.2555 10.7763 31.0698 10.9935 30.9412C11.2106 30.8098 11.4635 30.744 11.7521 30.744C12.1435 30.744 12.4506 30.8398 12.6735 31.0312C12.8963 31.2226 13.0421 31.504 13.1106 31.8755L12.4335 31.9012C12.3963 31.7069 12.3192 31.5569 12.2021 31.4512C12.0878 31.3455 11.9378 31.2926 11.7521 31.2926C11.5921 31.2926 11.4549 31.3355 11.3406 31.4212C11.2263 31.5069 11.1378 31.6283 11.0749 31.7855C11.0149 31.9426 10.9849 32.1269 10.9849 32.3383C10.9849 32.5526 11.0149 32.7383 11.0749 32.8955C11.1378 33.0498 11.2263 33.1683 11.3406 33.2512C11.4578 33.334 11.5935 33.3755 11.7478 33.3755C11.9506 33.3755 12.1092 33.3198 12.2235 33.2083C12.3378 33.094 12.4106 32.9312 12.4421 32.7198L13.1235 32.7455C13.0606 33.1226 12.9121 33.414 12.6778 33.6198C12.4435 33.8226 12.1321 33.924 11.7435 33.924ZM14.9297 33.924C14.6268 33.924 14.3625 33.8598 14.1368 33.7312C13.914 33.6026 13.744 33.4198 13.6268 33.1826C13.5097 32.9426 13.4511 32.6612 13.4511 32.3383C13.4511 32.0155 13.5097 31.734 13.6268 31.494C13.744 31.254 13.914 31.0698 14.1368 30.9412C14.3625 30.8098 14.6268 30.744 14.9297 30.744C15.2354 30.744 15.4997 30.8098 15.7225 30.9412C15.9454 31.0698 16.1154 31.254 16.2325 31.494C16.3525 31.734 16.4125 32.0155 16.4125 32.3383C16.4125 32.6612 16.3525 32.9426 16.2325 33.1826C16.1154 33.4198 15.9454 33.6026 15.7225 33.7312C15.4997 33.8598 15.2354 33.924 14.9297 33.924ZM14.9297 33.3755C15.0982 33.3755 15.2425 33.3355 15.3625 33.2555C15.4854 33.1726 15.5797 33.054 15.6454 32.8998C15.7111 32.7426 15.744 32.5555 15.744 32.3383C15.744 32.1212 15.7111 31.934 15.6454 31.7769C15.5797 31.6198 15.4854 31.4998 15.3625 31.4169C15.2425 31.334 15.0982 31.2926 14.9297 31.2926C14.7611 31.2926 14.6154 31.334 14.4925 31.4169C14.3725 31.4998 14.2797 31.6198 14.214 31.7769C14.1511 31.934 14.1197 32.1212 14.1197 32.3383C14.1197 32.5555 14.1511 32.7426 14.214 32.8998C14.2797 33.054 14.3725 33.1726 14.4925 33.2555C14.6154 33.3355 14.7611 33.3755 14.9297 33.3755ZM16.811 30.8126H17.681L18.4567 33.0283L19.2281 30.8126H20.0981V33.8555H19.4467V31.884L18.731 33.8469H18.1739L17.4624 31.884V33.8555H16.811V30.8126ZM20.6363 30.8126H21.8535C22.0935 30.8126 22.3021 30.8526 22.4792 30.9326C22.6563 31.0126 22.7906 31.1283 22.8821 31.2798C22.9763 31.4283 23.0235 31.604 23.0235 31.8069C23.0235 32.0098 22.9763 32.1869 22.8821 32.3383C22.7906 32.4869 22.6563 32.6026 22.4792 32.6855C22.3021 32.7655 22.0935 32.8055 21.8535 32.8055H21.2878V33.8555H20.6363V30.8126ZM21.8149 32.2569C21.9892 32.2569 22.1221 32.2183 22.2135 32.1412C22.3078 32.064 22.3549 31.9526 22.3549 31.8069C22.3549 31.6612 22.3078 31.5512 22.2135 31.4769C22.1221 31.3998 21.9892 31.3612 21.8149 31.3612H21.2878V32.2569H21.8149ZM23.5158 30.8126H24.1672V33.6798L23.8072 33.3069H25.5687V33.8555H23.5158V30.8126ZM26.0395 30.8126H26.6909V33.8555H26.0395V30.8126ZM28.2115 30.8126H28.983L30.0801 33.8555H29.403L29.1801 33.2083H28.0101L27.7873 33.8555H27.1144L28.2115 30.8126ZM29.0001 32.6726L28.5973 31.4983L28.1944 32.6726H29.0001ZM30.501 30.8126H31.221L32.4296 32.9126V30.8126H33.081V33.8555H32.3524L31.1524 31.8283V33.8555H30.501V30.8126ZM34.4267 31.3612H33.5139V30.8126H35.991V31.3612H35.0824V33.8555H34.4267V31.3612Z"
          fill="#E4E4E7"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddd_1_2028"
          x="0.857143"
          y="0.148996"
          width="44.2857"
          height="44.2857"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1_2028"
          />
          <feOffset dy="0.714286" />
          <feGaussianBlur stdDeviation="0.357143" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_2028"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_1_2028"
          />
          <feOffset dy="1.42857" />
          <feGaussianBlur stdDeviation="1.42857" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_2028"
            result="effect2_dropShadow_1_2028"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="dilate"
            in="SourceAlpha"
            result="effect3_dropShadow_1_2028"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_2028"
            result="effect3_dropShadow_1_2028"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_1_2028"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_2028"
          x1="9.88803"
          y1="6.55415"
          x2="36.0447"
          y2="35.5773"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#27272A" />
          <stop offset="1" stopColor="#52525C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_2028"
          x1="30.5498"
          y1="10.0698"
          x2="20.9753"
          y2="31.2119"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.473541" stopColor="#FAFAFA" stopOpacity="0.7" />
          <stop offset="0.811446" stopColor="#FAFAFA" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  gdpr: ({ className }: { className?: string }) => (
    <svg
      width="46"
      height="45"
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
    >
      <g filter="url(#filter0_ddd_1_4914)">
        <rect
          x="3"
          y="0.863281"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_1_4914)"
        />
        <path
          d="M30.6146 31.3062L31.2991 33.4127L33.5139 33.4127L31.7221 34.7145L32.4065 36.821L30.6146 35.5191L28.8228 36.821L29.5072 34.7145L27.7153 33.4127L29.9302 33.4127L30.6146 31.3062Z"
          fill="url(#paint1_linear_1_4914)"
        />
        <path
          d="M23.6857 35.4549L23.0013 33.3485L22.3168 35.4549H20.102L21.8938 36.7568L21.2094 38.8633L23.0013 37.5614L24.7932 38.8633L24.1087 36.7568L25.9006 35.4549H23.6857Z"
          fill="url(#paint2_linear_1_4914)"
        />
        <path
          d="M23.6857 4.96976L23.0013 2.86328L22.3168 4.96975L20.102 4.96975L21.8938 6.27163L21.2094 8.3781L23.0013 7.07623L24.7932 8.3781L24.1087 6.27163L25.9006 4.96975L23.6857 4.96976Z"
          fill="url(#paint3_linear_1_4914)"
        />
        <path
          d="M30.6226 4.90555L31.307 7.01202L33.5219 7.01202L31.73 8.3139L32.4144 10.4204L30.6226 9.1185L28.8307 10.4204L29.5151 8.3139L27.7233 7.01202L29.9381 7.01202L30.6226 4.90555Z"
          fill="url(#paint4_linear_1_4914)"
        />
        <path
          d="M16.0644 33.4127L15.38 31.3062L14.6955 33.4127H12.4807L14.2725 34.7145L13.5881 36.821L15.38 35.5191L17.1719 36.821L16.4874 34.7145L18.2793 33.4127L16.0644 33.4127Z"
          fill="url(#paint5_linear_1_4914)"
        />
        <path
          d="M36.1956 10.4846L36.8801 12.5911L39.095 12.5911L37.3031 13.8929L37.9875 15.9994L36.1956 14.6975L34.4038 15.9994L35.0882 13.8929L33.2963 12.5911L35.5112 12.5911L36.1956 10.4846Z"
          fill="url(#paint6_linear_1_4914)"
        />
        <path
          d="M10.4755 27.8336L9.79104 25.7272L9.1066 27.8336H6.89172L8.6836 29.1355L7.99916 31.242L9.79104 29.9401L11.5829 31.242L10.8985 29.1355L12.6903 27.8336L10.4755 27.8336Z"
          fill="url(#paint7_linear_1_4914)"
        />
        <path
          d="M38.2439 18.1059L38.9283 20.2123L41.1432 20.2123L39.3513 21.5142L40.0357 23.6207L38.2439 22.3188L36.452 23.6207L37.1364 21.5142L35.3446 20.2123H37.5594L38.2439 18.1059Z"
          fill="url(#paint8_linear_1_4914)"
        />
        <path
          d="M8.44313 20.2123L7.75869 18.1059L7.07425 20.2123H4.85938L6.65125 21.5142L5.96682 23.6207L7.75869 22.3188L9.55056 23.6207L8.86613 21.5142L10.658 20.2123H8.44313Z"
          fill="url(#paint9_linear_1_4914)"
        />
        <path
          d="M36.1956 25.7272L36.8801 27.8336H39.095L37.3031 29.1355L37.9875 31.242L36.1956 29.9401L34.4038 31.242L35.0882 29.1355L33.2963 27.8336L35.5112 27.8336L36.1956 25.7272Z"
          fill="url(#paint10_linear_1_4914)"
        />
        <path
          d="M10.4755 12.591L9.79103 10.4846L9.1066 12.591H6.89172L8.6836 13.8929L7.99916 15.9994L9.79103 14.6975L11.5829 15.9994L10.8985 13.8929L12.6903 12.591H10.4755Z"
          fill="url(#paint11_linear_1_4914)"
        />
        <path
          d="M16.0565 7.01202L15.372 4.90555L14.6876 7.01202H12.4727L14.2646 8.3139L13.5802 10.4204L15.372 9.1185L17.1639 10.4204L16.4795 8.3139L18.2714 7.01203L16.0565 7.01202Z"
          fill="url(#paint12_linear_1_4914)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2383 20.8682C15.2383 22.1882 15.9883 23.0882 17.2243 23.0882C17.8363 23.0882 18.3403 22.8302 18.5623 22.4162L18.5983 22.9922H19.2223V20.7542H17.3023V21.4802H18.1843C18.1363 21.9362 17.8243 22.2362 17.3263 22.2362C16.6243 22.2362 16.3123 21.6782 16.3123 20.8682C16.3123 20.0642 16.6483 19.4882 17.3083 19.4882C17.8063 19.4882 18.0523 19.7582 18.1303 20.2082L19.2103 20.1602C19.0123 19.2122 18.4303 18.6362 17.2963 18.6362C16.0003 18.6362 15.2383 19.5842 15.2383 20.8682ZM19.7261 18.7322V22.9922H21.2801C22.6601 22.9922 23.4341 22.2302 23.4341 20.8682C23.4341 19.5002 22.6481 18.7322 21.2441 18.7322H19.7261ZM21.2441 22.1402H20.7701V19.5842H21.2441C22.0121 19.5842 22.3601 19.9922 22.3601 20.8622C22.3601 21.7322 22.0121 22.1402 21.2441 22.1402ZM23.8059 22.6543V22.9922H24.8499V21.5822H25.5699C26.6139 21.5822 27.2499 21.0362 27.2499 20.1542C27.2499 19.2722 26.6139 18.7322 25.5699 18.7322H23.8059V22.1211H23.6798V22.6543H23.8059ZM25.4979 20.7242H24.8499V19.5842H25.4979C25.9239 19.5842 26.1819 19.7822 26.1819 20.1542C26.1819 20.5322 25.9179 20.7242 25.4979 20.7242ZM29.531 18.7322H27.581V22.9922H28.625V21.4862H29.423C29.831 21.4862 29.969 21.6362 29.993 21.9542L30.059 22.9922H31.127L31.025 21.7802C30.989 21.3542 30.767 21.1082 30.329 21.0482C30.797 20.9042 31.091 20.5202 31.091 19.9982C31.091 19.2302 30.479 18.7322 29.531 18.7322ZM29.369 20.6342H28.625V19.5842H29.357C29.789 19.5842 30.023 19.7642 30.023 20.1062C30.023 20.4422 29.789 20.6342 29.369 20.6342Z"
          fill="#101828"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddd_1_4914"
          x="0.857143"
          y="0.148996"
          width="44.2857"
          height="44.2857"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1_4914"
          />
          <feOffset dy="0.714286" />
          <feGaussianBlur stdDeviation="0.357143" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4914"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_1_4914"
          />
          <feOffset dy="1.42857" />
          <feGaussianBlur stdDeviation="1.42857" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4914"
            result="effect2_dropShadow_1_4914"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="dilate"
            in="SourceAlpha"
            result="effect3_dropShadow_1_4914"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4914"
            result="effect3_dropShadow_1_4914"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_1_4914"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_4914"
          x1="9.88803"
          y1="6.55415"
          x2="36.0447"
          y2="35.5773"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5E7EB" />
          <stop offset="1" stopColor="#F9FAFB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_4914"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#364153" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#364153" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_4914"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#364153" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#364153" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1_4914"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#364153" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#364153" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1_4914"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#364153" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#364153" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1_4914"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#364153" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#364153" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_1_4914"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#364153" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#364153" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_1_4914"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#364153" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#364153" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_1_4914"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#364153" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#364153" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_1_4914"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#364153" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#364153" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_1_4914"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#364153" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#364153" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_1_4914"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#364153" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#364153" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_1_4914"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#364153" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#364153" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  ),
  gdprDark: ({ className }: { className?: string }) => (
    <svg
      width="46"
      height="45"
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
    >
      <g filter="url(#filter0_ddd_1_2046)">
        <rect
          x="3"
          y="0.863281"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_1_2046)"
        />
        <path
          d="M30.6146 31.3062L31.2991 33.4127L33.5139 33.4127L31.7221 34.7145L32.4065 36.821L30.6146 35.5191L28.8228 36.821L29.5072 34.7145L27.7153 33.4127L29.9302 33.4127L30.6146 31.3062Z"
          fill="url(#paint1_linear_1_2046)"
        />
        <path
          d="M23.6857 35.4549L23.0013 33.3485L22.3168 35.4549H20.102L21.8938 36.7568L21.2094 38.8633L23.0013 37.5614L24.7932 38.8633L24.1087 36.7568L25.9006 35.4549H23.6857Z"
          fill="url(#paint2_linear_1_2046)"
        />
        <path
          d="M23.6857 4.96976L23.0013 2.86328L22.3168 4.96975L20.102 4.96975L21.8938 6.27163L21.2094 8.3781L23.0013 7.07623L24.7932 8.3781L24.1087 6.27163L25.9006 4.96975L23.6857 4.96976Z"
          fill="url(#paint3_linear_1_2046)"
        />
        <path
          d="M30.6226 4.90555L31.307 7.01202L33.5219 7.01202L31.73 8.3139L32.4144 10.4204L30.6226 9.1185L28.8307 10.4204L29.5151 8.3139L27.7233 7.01202L29.9381 7.01202L30.6226 4.90555Z"
          fill="url(#paint4_linear_1_2046)"
        />
        <path
          d="M16.0644 33.4127L15.38 31.3062L14.6955 33.4127H12.4807L14.2725 34.7145L13.5881 36.821L15.38 35.5191L17.1719 36.821L16.4874 34.7145L18.2793 33.4127L16.0644 33.4127Z"
          fill="url(#paint5_linear_1_2046)"
        />
        <path
          d="M36.1956 10.4846L36.8801 12.5911L39.095 12.5911L37.3031 13.8929L37.9875 15.9994L36.1956 14.6975L34.4038 15.9994L35.0882 13.8929L33.2963 12.5911L35.5112 12.5911L36.1956 10.4846Z"
          fill="url(#paint6_linear_1_2046)"
        />
        <path
          d="M10.4755 27.8336L9.79104 25.7272L9.1066 27.8336H6.89172L8.6836 29.1355L7.99916 31.242L9.79104 29.9401L11.5829 31.242L10.8985 29.1355L12.6903 27.8336L10.4755 27.8336Z"
          fill="url(#paint7_linear_1_2046)"
        />
        <path
          d="M38.2439 18.1059L38.9283 20.2123L41.1432 20.2123L39.3513 21.5142L40.0357 23.6207L38.2439 22.3188L36.452 23.6207L37.1364 21.5142L35.3446 20.2123H37.5594L38.2439 18.1059Z"
          fill="url(#paint8_linear_1_2046)"
        />
        <path
          d="M8.44313 20.2123L7.75869 18.1059L7.07425 20.2123H4.85938L6.65125 21.5142L5.96682 23.6207L7.75869 22.3188L9.55056 23.6207L8.86613 21.5142L10.658 20.2123H8.44313Z"
          fill="url(#paint9_linear_1_2046)"
        />
        <path
          d="M36.1956 25.7272L36.8801 27.8336H39.095L37.3031 29.1355L37.9875 31.242L36.1956 29.9401L34.4038 31.242L35.0882 29.1355L33.2963 27.8336L35.5112 27.8336L36.1956 25.7272Z"
          fill="url(#paint10_linear_1_2046)"
        />
        <path
          d="M10.4755 12.591L9.79103 10.4846L9.1066 12.591H6.89172L8.6836 13.8929L7.99916 15.9994L9.79103 14.6975L11.5829 15.9994L10.8985 13.8929L12.6903 12.591H10.4755Z"
          fill="url(#paint11_linear_1_2046)"
        />
        <path
          d="M16.0565 7.01202L15.372 4.90555L14.6876 7.01202H12.4727L14.2646 8.3139L13.5802 10.4204L15.372 9.1185L17.1639 10.4204L16.4795 8.3139L18.2714 7.01203L16.0565 7.01202Z"
          fill="url(#paint12_linear_1_2046)"
        />
        <path
          d="M17.2242 23.0882C16.8122 23.0882 16.4582 22.9942 16.1622 22.8062C15.8662 22.6182 15.6382 22.3582 15.4782 22.0262C15.3182 21.6942 15.2382 21.3082 15.2382 20.8682C15.2382 20.4402 15.3202 20.0582 15.4842 19.7222C15.6482 19.3862 15.8822 19.1222 16.1862 18.9302C16.4942 18.7342 16.8642 18.6362 17.2962 18.6362C17.6762 18.6362 17.9942 18.6982 18.2502 18.8222C18.5102 18.9422 18.7182 19.1162 18.8742 19.3442C19.0342 19.5722 19.1462 19.8442 19.2102 20.1602L18.1302 20.2082C18.0902 19.9802 18.0062 19.8042 17.8782 19.6802C17.7502 19.5522 17.5602 19.4882 17.3082 19.4882C17.0882 19.4882 16.9042 19.5482 16.7562 19.6682C16.6082 19.7882 16.4962 19.9522 16.4202 20.1602C16.3482 20.3642 16.3122 20.6002 16.3122 20.8682C16.3122 21.1362 16.3482 21.3742 16.4202 21.5822C16.4922 21.7862 16.6022 21.9462 16.7502 22.0622C16.9022 22.1782 17.0942 22.2362 17.3262 22.2362C17.4942 22.2362 17.6382 22.2042 17.7582 22.1402C17.8822 22.0762 17.9802 21.9882 18.0522 21.8762C18.1242 21.7602 18.1682 21.6282 18.1842 21.4802H17.3022V20.7542H19.2222V22.9922H18.5982L18.5442 22.1042L18.6642 22.1402C18.6242 22.3282 18.5362 22.4942 18.4002 22.6382C18.2682 22.7782 18.1002 22.8882 17.8962 22.9682C17.6962 23.0482 17.4722 23.0882 17.2242 23.0882ZM19.726 22.9922V18.7322H21.244C21.948 18.7322 22.488 18.9182 22.864 19.2902C23.244 19.6582 23.434 20.1842 23.434 20.8682C23.434 21.5482 23.248 22.0722 22.876 22.4402C22.504 22.8082 21.972 22.9922 21.28 22.9922H19.726ZM20.77 22.1402H21.244C21.628 22.1402 21.91 22.0362 22.09 21.8282C22.27 21.6202 22.36 21.2982 22.36 20.8622C22.36 20.4262 22.27 20.1042 22.09 19.8962C21.91 19.6882 21.628 19.5842 21.244 19.5842H20.77V22.1402ZM23.8058 22.9922V18.7322H25.5698C26.0938 18.7322 26.5038 18.8602 26.7998 19.1162C27.0998 19.3682 27.2498 19.7142 27.2498 20.1542C27.2498 20.4462 27.1818 20.7002 27.0458 20.9162C26.9138 21.1282 26.7218 21.2922 26.4698 21.4082C26.2178 21.5242 25.9178 21.5822 25.5698 21.5822H24.8498V22.9922H23.8058ZM24.8498 20.7242H25.4978C25.7098 20.7242 25.8758 20.6762 25.9958 20.5802C26.1198 20.4842 26.1818 20.3422 26.1818 20.1542C26.1818 19.9702 26.1218 19.8302 26.0018 19.7342C25.8818 19.6342 25.7138 19.5842 25.4978 19.5842H24.8498V20.7242ZM27.5809 22.9922V18.7322H29.5309C29.8469 18.7322 30.1209 18.7842 30.3529 18.8882C30.5889 18.9922 30.7709 19.1402 30.8989 19.3322C31.0269 19.5202 31.0909 19.7422 31.0909 19.9982C31.0909 20.1982 31.0509 20.3742 30.9709 20.5262C30.8909 20.6782 30.7789 20.8042 30.6349 20.9042C30.4949 21.0002 30.3269 21.0642 30.1309 21.0962L30.1129 21.0362C30.4049 21.0362 30.6249 21.0982 30.7729 21.2222C30.9249 21.3462 31.0089 21.5322 31.0249 21.7802L31.1269 22.9922H30.0589L29.9929 21.9542C29.9809 21.7942 29.9329 21.6762 29.8489 21.6002C29.7689 21.5242 29.6269 21.4862 29.4229 21.4862H28.6249V22.9922H27.5809ZM28.6249 20.6342H29.3689C29.5809 20.6342 29.7429 20.5882 29.8549 20.4962C29.9669 20.4042 30.0229 20.2742 30.0229 20.1062C30.0229 19.9342 29.9649 19.8042 29.8489 19.7162C29.7369 19.6282 29.5729 19.5842 29.3569 19.5842H28.6249V20.6342Z"
          fill="#D4D4D8"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddd_1_2046"
          x="0.857143"
          y="0.148996"
          width="44.2857"
          height="44.2857"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1_2046"
          />
          <feOffset dy="0.714286" />
          <feGaussianBlur stdDeviation="0.357143" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_2046"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_1_2046"
          />
          <feOffset dy="1.42857" />
          <feGaussianBlur stdDeviation="1.42857" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_2046"
            result="effect2_dropShadow_1_2046"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="dilate"
            in="SourceAlpha"
            result="effect3_dropShadow_1_2046"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_2046"
            result="effect3_dropShadow_1_2046"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_1_2046"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_2046"
          x1="9.88803"
          y1="6.55415"
          x2="36.0447"
          y2="35.5773"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#27272A" />
          <stop offset="1" stopColor="#52525C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_2046"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#FAFAFA" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_2046"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#FAFAFA" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1_2046"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#FAFAFA" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1_2046"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#FAFAFA" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1_2046"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#FAFAFA" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_1_2046"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#FAFAFA" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_1_2046"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#FAFAFA" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_1_2046"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#FAFAFA" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_1_2046"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#FAFAFA" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_1_2046"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#FAFAFA" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_1_2046"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#FAFAFA" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_1_2046"
          x1="15.8864"
          y1="51.1315"
          x2="29.5116"
          y2="5.36433"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.188554" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="0.526459" stopColor="#FAFAFA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  ),
  vercel: () => (
    <svg
      width="52"
      height="60"
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dddd_1_4108)">
        <path
          d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z"
          fill="black"
        />
        <g clipPath="url(#clip0_1_4108)">
          <path d="M26 8L39.5 31.3829H12.5L26 8Z" fill="white" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dddd_1_4108"
          x="0"
          y="0"
          width="52"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4108"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4108"
            result="effect2_dropShadow_1_4108"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4108"
            result="effect3_dropShadow_1_4108"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_1_4108"
            result="effect4_dropShadow_1_4108"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_1_4108"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_1_4108">
          <rect
            width="27"
            height="23.4141"
            fill="white"
            transform="translate(12.5 8)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  replit: () => (
    <svg
      width="52"
      height="60"
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dddd_1_4111)">
        <path
          d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z"
          fill="white"
        />
        <g clipPath="url(#clip0_1_4111)">
          <path
            d="M15.5 8.875C15.5 7.83947 16.3395 7 17.375 7H26.125C27.1605 7 28 7.83947 28 8.875V17H17.375C16.3395 17 15.5 16.1605 15.5 15.125V8.875Z"
            fill="#F26207"
          />
          <path
            d="M28 17H38.625C39.6605 17 40.5 17.8395 40.5 18.875V25.125C40.5 26.1605 39.6605 27 38.625 27H28V17Z"
            fill="#F26207"
          />
          <path
            d="M15.5 28.875C15.5 27.8395 16.3395 27 17.375 27H28V35.125C28 36.1605 27.1605 37 26.125 37H17.375C16.3395 37 15.5 36.1605 15.5 35.125V28.875Z"
            fill="#F26207"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dddd_1_4111"
          x="0"
          y="0"
          width="52"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4111"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4111"
            result="effect2_dropShadow_1_4111"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4111"
            result="effect3_dropShadow_1_4111"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_1_4111"
            result="effect4_dropShadow_1_4111"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_1_4111"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_1_4111">
          <rect
            width="25"
            height="30"
            fill="white"
            transform="translate(15.5 7)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  posthog: () => (
    <svg
      width="52"
      height="60"
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dddd_1_4116)">
        <path
          d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z"
          fill="#EEEFE8"
        />
        <path
          d="M18.2508 23.0069C18.1951 23.118 18.1096 23.2115 18.0038 23.2768C17.898 23.3421 17.7762 23.3767 17.6518 23.3767C17.5275 23.3767 17.4057 23.3421 17.2999 23.2768C17.1941 23.2115 17.1086 23.118 17.0529 23.0069L16.462 21.8257C16.4155 21.7327 16.3913 21.6302 16.3913 21.5262C16.3913 21.4223 16.4155 21.3197 16.462 21.2267L17.0529 20.0456C17.1086 19.9344 17.1941 19.841 17.2999 19.7757C17.4057 19.7104 17.5275 19.6758 17.6518 19.6758C17.7762 19.6758 17.898 19.7104 18.0038 19.7757C18.1096 19.841 18.1951 19.9344 18.2508 20.0456L18.8417 21.2267C18.8882 21.3197 18.9124 21.4223 18.9124 21.5262C18.9124 21.6302 18.8882 21.7327 18.8417 21.8257L18.2508 23.0069ZM18.2508 29.7047C18.1951 29.8158 18.1096 29.9093 18.0038 29.9746C17.898 30.0399 17.7762 30.0745 17.6518 30.0745C17.5275 30.0745 17.4057 30.0399 17.2999 29.9746C17.1941 29.9093 17.1086 29.8158 17.0529 29.7047L16.4613 28.5235C16.4148 28.4305 16.3906 28.328 16.3906 28.224C16.3906 28.1201 16.4148 28.0176 16.4613 27.9246L17.0522 26.7434C17.1079 26.6322 17.1934 26.5388 17.2992 26.4735C17.405 26.4082 17.5269 26.3736 17.6512 26.3736C17.7755 26.3736 17.8974 26.4082 18.0031 26.4735C18.1089 26.5388 18.1944 26.6322 18.2501 26.7434L18.8411 27.9246C18.8875 28.0176 18.9117 28.1201 18.9117 28.224C18.9117 28.328 18.8875 28.4305 18.8411 28.5235L18.2508 29.7047Z"
          fill="#1D4AFF"
        />
        <path
          d="M10.9531 27.1607C10.9531 26.5644 11.6747 26.2649 12.0968 26.687L15.1673 29.7575C15.5894 30.1796 15.2906 30.9019 14.6936 30.9019H11.6231C11.4454 30.9019 11.275 30.8313 11.1494 30.7056C11.0237 30.58 10.9531 30.4096 10.9531 30.2319V27.1607ZM10.9531 23.926C10.9531 24.0141 10.9704 24.1013 11.004 24.1827C11.0377 24.2641 11.0871 24.3381 11.1494 24.4004L17.4546 30.7049C17.5168 30.7672 17.5906 30.8167 17.6719 30.8505C17.7532 30.8843 17.8403 30.9018 17.9283 30.9019H21.3921C21.9884 30.9019 22.2879 30.1803 21.8658 29.7582L12.0975 19.9899C11.6747 19.5671 10.9531 19.8659 10.9531 20.4622V23.926ZM10.9531 17.2282C10.9532 17.4059 11.0238 17.5762 11.1494 17.7019L24.1518 30.7062C24.2774 30.8319 24.4478 30.9025 24.6255 30.9025H28.0893C28.6856 30.9025 28.985 30.1803 28.563 29.7582L12.0968 13.2914C11.6747 12.8693 10.9531 13.1681 10.9531 13.765V17.2282ZM17.6509 17.2282C17.651 17.4059 17.7216 17.5762 17.8472 17.7019L29.9029 29.7582C30.325 30.1803 31.0466 29.8808 31.0466 29.2839V25.8207C31.0465 25.643 30.9759 25.4727 30.8503 25.347L18.7946 13.2914C18.3725 12.8693 17.6509 13.1681 17.6509 13.765V17.2282ZM25.4924 13.2914C25.0703 12.8693 24.3488 13.1681 24.3488 13.765V17.2289C24.349 17.4063 24.4196 17.5764 24.5451 17.7019L29.9029 23.0604C30.325 23.4825 31.0466 23.183 31.0466 22.586V19.1229C31.0465 18.9452 30.9759 18.7748 30.8503 18.6492L25.4924 13.2914Z"
          fill="#F9BD2B"
        />
        <path
          d="M39.4424 27.2418L33.1358 20.9359C32.7138 20.5138 31.9922 20.8126 31.9922 21.4096V30.2312C31.9922 30.4089 32.0628 30.5793 32.1884 30.705C32.3141 30.8306 32.4845 30.9012 32.6622 30.9012H42.4305C42.6082 30.9012 42.7786 30.8306 42.9043 30.705C43.0299 30.5793 43.1005 30.4089 43.1005 30.2312V29.4273C43.1005 29.0574 42.7997 28.762 42.4325 28.7144C41.3008 28.567 40.2495 28.0488 39.4424 27.2418ZM35.2074 28.7579C34.9231 28.7579 34.6505 28.645 34.4494 28.444C34.2484 28.2429 34.1355 27.9703 34.1355 27.686C34.1355 27.4017 34.2484 27.129 34.4494 26.928C34.6505 26.7269 34.9231 26.614 35.2074 26.614C35.4917 26.614 35.7644 26.7269 35.9654 26.928C36.1665 27.129 36.2794 27.4017 36.2794 27.686C36.2794 27.9703 36.1665 28.2429 35.9654 28.444C35.7644 28.645 35.4917 28.7579 35.2074 28.7579Z"
          fill="black"
        />
        <path
          d="M10.9531 30.2319C10.9531 30.4096 11.0237 30.58 11.1494 30.7056C11.275 30.8313 11.4454 30.9019 11.6231 30.9019H14.6936C15.2906 30.9019 15.5894 30.1796 15.1673 29.7575L12.0968 26.687C11.6747 26.2649 10.9531 26.5637 10.9531 27.1607V30.2319ZM17.6509 18.8455L12.0968 13.2914C11.6747 12.8693 10.9531 13.1681 10.9531 13.765V17.2289C10.9533 17.4063 11.0239 17.5764 11.1494 17.7019L17.6509 24.204V18.8455ZM12.0968 19.9892C11.6747 19.5671 10.9531 19.8659 10.9531 20.4629V23.9267C10.9533 24.1041 11.0239 24.2742 11.1494 24.3997L17.6509 30.9019V25.5433L12.0968 19.9892Z"
          fill="#1D4AFF"
        />
        <path
          d="M24.3463 19.1229C24.3462 18.9452 24.2756 18.7748 24.15 18.6492L18.7921 13.2914C18.37 12.8693 17.6484 13.1681 17.6484 13.765V17.2289C17.6487 17.4063 17.7193 17.5764 17.8447 17.7019L24.3463 24.204V19.1222V19.1229ZM17.6484 30.9012H21.389C21.9859 30.9012 22.2847 30.1796 21.8626 29.7575L17.6484 25.5433V30.9019V30.9012ZM17.6484 18.8455V23.926C17.6484 24.0141 17.6657 24.1013 17.6994 24.1827C17.733 24.2641 17.7824 24.3381 17.8447 24.4004L24.3463 30.9019V25.8207C24.3462 25.643 24.2756 25.4727 24.15 25.347L17.6484 18.8455Z"
          fill="#F54E00"
        />
      </g>
      <defs>
        <filter
          id="filter0_dddd_1_4116"
          x="0"
          y="0"
          width="52"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4116"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4116"
            result="effect2_dropShadow_1_4116"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4116"
            result="effect3_dropShadow_1_4116"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_1_4116"
            result="effect4_dropShadow_1_4116"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_1_4116"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  workos: () => (
    <svg
      width="52"
      height="60"
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dddd_1_4101)">
        <path
          d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z"
          fill="#6363F1"
        />
        <g clipPath="url(#clip0_1_4101)">
          <path
            d="M12 22.0011C12 22.557 12.1516 23.0624 12.4043 23.5173L17.3069 32.0083C17.8123 32.8675 18.5704 33.5751 19.5307 33.8783C21.3502 34.4848 23.3213 33.7267 24.2816 32.1094L25.444 30.0372L20.7942 21.9505L25.7473 13.409L26.9097 11.3873C27.2635 10.7808 27.7184 10.2754 28.2744 9.87109H20.6931C19.3791 9.87109 18.1155 10.5787 17.4585 11.7411L12.4043 20.4848C12.1516 20.9397 12 21.4451 12 22.0011Z"
            fill="white"
          />
          <path
            d="M40.0009 22.0019C40.0009 21.446 39.8493 20.9405 39.5966 20.4857L34.6435 11.8936C33.6832 10.2257 31.7121 9.51816 29.8926 10.1247C28.9323 10.4279 28.1742 11.1355 27.6688 11.9947L26.5063 13.9153L31.2067 22.0019L26.2536 30.5434L25.0912 32.6156C24.7374 33.2221 24.2825 33.7275 23.7266 34.1319H31.3583C32.6724 34.1319 33.9359 33.4243 34.593 32.2618L39.6471 23.5182C39.8493 23.0633 40.0009 22.5579 40.0009 22.0019Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dddd_1_4101"
          x="0"
          y="0"
          width="52"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4101"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4101"
            result="effect2_dropShadow_1_4101"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4101"
            result="effect3_dropShadow_1_4101"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_1_4101"
            result="effect4_dropShadow_1_4101"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_1_4101"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_1_4101">
          <rect
            width="28"
            height="28"
            fill="white"
            transform="translate(12 8)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  runwayml: () => (
    <svg
      width="52"
      height="60"
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dddd_1_4106)">
        <path
          d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z"
          fill="#101828"
        />
        <path
          d="M37.678 13.2664C38.3954 15.4976 38.2063 17.5358 36.7194 19.377C36.0513 20.2045 35.105 20.7428 33.2308 21.2226C33.6954 21.6556 34.1217 22.0294 34.521 22.4302C35.2929 23.2052 36.0595 23.986 36.8108 24.781C38.5668 26.639 38.5001 29.3228 37.3076 31.4453C35.7329 34.2479 31.7191 35.1571 29.2989 33.0723C28.1452 32.0786 27.0621 31.0026 25.9522 29.9584C25.7293 29.7485 25.529 29.5145 25.2864 29.2579C25.0948 29.8493 24.9711 30.4074 24.7399 30.9169C23.4524 33.7547 19.82 34.9039 16.8601 33.4455C14.8504 32.4552 13.9101 30.7587 13.8784 28.6156C13.8134 24.2092 13.8339 19.8011 13.8679 15.3939C13.8907 12.4321 16.3064 9.88977 19.2617 9.83918C23.7709 9.762 28.2832 9.77292 32.793 9.83779C35.1105 9.87113 36.753 11.063 37.678 13.2664ZM21.0218 13.8121C20.2809 13.2306 19.4728 13.0218 18.6063 13.4803C17.7302 13.9439 17.3212 14.6789 17.3266 15.7004C17.3488 19.9172 17.3308 24.134 17.3447 28.3508C17.346 28.7318 17.3968 29.1459 17.5522 29.4864C17.9764 30.415 19.1143 30.8701 20.1817 30.6052C21.2025 30.3518 21.8008 29.5747 21.8013 28.4783C21.804 24.1995 21.7934 19.9206 21.8116 15.6418C21.8147 14.9289 21.594 14.3552 21.0218 13.8121ZM25.8643 21.1924C25.6845 21.2009 25.5046 21.2095 25.2832 21.22C25.2832 22.2251 25.2729 23.1939 25.2932 24.1622C25.2967 24.3236 25.3961 24.5182 25.513 24.6367C27.31 26.4581 29.1012 28.2862 30.9369 30.0681C31.2679 30.3895 31.7728 30.6269 32.2308 30.7023C33.164 30.8562 34.1069 30.2305 34.5663 29.2999C34.9496 28.5235 34.7691 27.5689 34.0724 26.8589C32.4945 25.2511 30.8899 23.6692 29.3299 22.0444C28.7194 21.4085 28.0705 21.0385 27.1623 21.1823C26.7788 21.243 26.3776 21.1924 25.8643 21.1924ZM29.4434 13.2325C27.9264 13.2325 26.4094 13.2325 25.0086 13.2325C25.1354 14.7766 25.2569 16.2585 25.3812 17.7726C27.7177 17.7726 30.0693 17.7785 32.4208 17.7705C33.8172 17.7656 34.7019 16.8615 34.6935 15.4759C34.6855 14.157 33.7615 13.2426 32.4172 13.2339C31.4674 13.2276 30.5175 13.2325 29.4434 13.2325Z"
          fill="#FEFEFE"
        />
      </g>
      <defs>
        <filter
          id="filter0_dddd_1_4106"
          x="0"
          y="0"
          width="52"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4106"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4106"
            result="effect2_dropShadow_1_4106"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4106"
            result="effect3_dropShadow_1_4106"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_1_4106"
            result="effect4_dropShadow_1_4106"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_1_4106"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
  gemini: () => (
    <svg
      width="52"
      height="60"
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dddd_1_4143)">
        <path
          d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z"
          fill="white"
        />
        <g clipPath="url(#clip0_1_4143)">
          <path
            d="M26 34C25.5426 30.9809 24.131 28.1874 21.9718 26.0282C19.8126 23.869 17.0191 22.4574 14 22C17.0191 21.5426 19.8126 20.131 21.9718 17.9718C24.131 15.8126 25.5426 13.0191 26 10C26.4575 13.0191 27.8692 15.8125 30.0283 17.9717C32.1875 20.1308 34.9809 21.5425 38 22C34.9809 22.4575 32.1875 23.8692 30.0283 26.0283C27.8692 28.1875 26.4575 30.9809 26 34Z"
            fill="url(#paint0_linear_1_4143)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dddd_1_4143"
          x="0"
          y="0"
          width="52"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4143"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4143"
            result="effect2_dropShadow_1_4143"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4143"
            result="effect3_dropShadow_1_4143"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_1_4143"
            result="effect4_dropShadow_1_4143"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_1_4143"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_4143"
          x1="13.9999"
          y1="2410"
          x2="1663.52"
          y2="739.48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1C7DFF" />
          <stop offset="0.52021" stopColor="#1C69FF" />
          <stop offset="1" stopColor="#F0DCD6" />
        </linearGradient>
        <clipPath id="clip0_1_4143">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(14 10)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  boat: () => (
    <svg
      width="52"
      height="60"
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dddd_1_4139)">
        <path
          d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z"
          fill="#0086FF"
        />
        <path
          d="M34.4067 25.7667C33.678 26.7432 32.145 28.3644 31.2924 28.3644H27.3297V25.7646H30.486C30.9375 25.7646 31.368 25.5819 31.6788 25.2606C33.3 23.5806 34.2366 21.5814 34.2366 19.4373C34.2366 15.7791 31.5024 12.5451 27.3276 10.5963V8.84908C27.3276 8.09728 26.7186 7.48828 25.9668 7.48828C25.215 7.48828 24.606 8.09728 24.606 8.84908V9.57358C23.4363 9.23128 22.1973 8.97088 20.9037 8.82178C23.0457 11.1486 24.354 14.2608 24.354 17.6733C24.354 20.733 23.3082 23.5428 21.5505 25.7688H24.606V28.3728H20.133C19.5282 28.3728 19.0368 27.8835 19.0368 27.2766V26.1384C19.0368 25.9389 18.8751 25.7751 18.6735 25.7751H12.7767C12.6612 25.7751 12.5625 25.8696 12.5625 25.9851C12.5583 30.6429 16.2438 34.1394 20.6517 34.1394H33.0942C36.0762 34.1394 37.4097 30.3174 39.1569 27.8856C39.8352 26.9448 41.4627 26.1888 41.9562 25.9788C42.0465 25.941 42.099 25.857 42.099 25.7583V24.2463C42.099 24.093 41.9478 23.9775 41.7987 24.0195C41.7987 24.0195 34.6062 25.6722 34.5222 25.6953C34.4382 25.7205 34.4067 25.7688 34.4067 25.7688V25.7667Z"
          fill="white"
        />
        <path
          d="M22.0494 17.6649C22.0494 15.3192 21.2451 13.1604 19.9011 11.4531L13.1328 23.1648H20.4135C21.4488 21.5856 22.0515 19.6956 22.0515 17.667L22.0494 17.6649Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dddd_1_4139"
          x="0"
          y="0"
          width="52"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4139"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4139"
            result="effect2_dropShadow_1_4139"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4139"
            result="effect3_dropShadow_1_4139"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_1_4139"
            result="effect4_dropShadow_1_4139"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_1_4139"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
  supabase: () => (
    <svg
      width="52"
      height="60"
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dddd_1_4134)">
        <path
          d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z"
          fill="#121212"
        />
        <g clipPath="url(#clip0_1_4134)">
          <path
            d="M28.5219 36.7564C27.7374 37.7443 26.1469 37.2031 26.128 35.9417L25.8516 17.4922H38.257C40.5039 17.4922 41.7571 20.0874 40.3599 21.8472L28.5219 36.7564Z"
            fill="url(#paint0_linear_1_4134)"
          />
          <path
            d="M28.5219 36.7564C27.7374 37.7443 26.1469 37.2031 26.128 35.9417L25.8516 17.4922H38.257C40.5039 17.4922 41.7571 20.0874 40.3599 21.8472L28.5219 36.7564Z"
            fill="url(#paint1_linear_1_4134)"
            fillOpacity="0.2"
          />
          <path
            d="M23.48 7.06882C24.2645 6.08082 25.8551 6.62217 25.874 7.88359L25.9951 26.333H13.745C11.4979 26.333 10.2447 23.7378 11.642 21.978L23.48 7.06882Z"
            fill="#3ECF8E"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dddd_1_4134"
          x="0"
          y="0"
          width="52"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4134"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4134"
            result="effect2_dropShadow_1_4134"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4134"
            result="effect3_dropShadow_1_4134"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_1_4134"
            result="effect4_dropShadow_1_4134"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_1_4134"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_4134"
          x1="25.8516"
          y1="21.5829"
          x2="36.8771"
          y2="26.207"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_4134"
          x1="20.9634"
          y1="14.8902"
          x2="25.9916"
          y2="24.3555"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_1_4134">
          <rect
            width="29.9027"
            height="31"
            fill="white"
            transform="translate(11.0469 6.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  figma: () => (
    <svg
      width="52"
      height="60"
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dddd_1_4123)">
        <path
          d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z"
          fill="white"
        />
        <g clipPath="url(#clip0_1_4123)">
          <mask
            id="mask0_1_4123"
            maskUnits="userSpaceOnUse"
            x="15"
            y="7"
            width="21"
            height="30"
          >
            <path d="M35.875 7H15.875V37H35.875V7Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1_4123)">
            <path
              d="M20.875 37.0001C23.635 37.0001 25.875 34.7601 25.875 32.0001V27.0001H20.875C18.115 27.0001 15.875 29.2401 15.875 32.0001C15.875 34.7601 18.115 37.0001 20.875 37.0001Z"
              fill="#0ACF83"
            />
            <path
              d="M15.875 21.9999C15.875 19.2399 18.115 16.9999 20.875 16.9999H25.875V26.9999H20.875C18.115 26.9999 15.875 24.7599 15.875 21.9999Z"
              fill="#A259FF"
            />
            <path
              d="M15.875 12C15.875 9.24 18.115 7 20.875 7H25.875V17H20.875C18.115 17 15.875 14.76 15.875 12Z"
              fill="#F24E1E"
            />
            <path
              d="M25.875 7H30.875C33.635 7 35.875 9.24 35.875 12C35.875 14.76 33.635 17 30.875 17H25.875V7Z"
              fill="#FF7262"
            />
            <path
              d="M35.875 21.9999C35.875 24.7599 33.635 26.9999 30.875 26.9999C28.115 26.9999 25.875 24.7599 25.875 21.9999C25.875 19.2399 28.115 16.9999 30.875 16.9999C33.635 16.9999 35.875 19.2399 35.875 21.9999Z"
              fill="#1ABCFE"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dddd_1_4123"
          x="0"
          y="0"
          width="52"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4123"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4123"
            result="effect2_dropShadow_1_4123"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4123"
            result="effect3_dropShadow_1_4123"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_1_4123"
            result="effect4_dropShadow_1_4123"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_1_4123"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_1_4123">
          <rect
            width="20.25"
            height="30"
            fill="white"
            transform="translate(15.875 7)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
};

``

## src\components\loader.tsx

``tsx
"use client";

export default function RedBlockLoader({
  size = 70,
  red = "#7A0000",
}) {
  const blocks = Array.from({ length: 6 });

  return (
    <>
      <style jsx>{`
        .loader {
          width: ${size}px;
          height: ${size}px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
        }

        .loader span {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(122, 0, 0, 0.9),
            rgba(122, 0, 0, 0.6)
          );
          box-shadow:
            0 4px 10px rgba(122, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          border-radius: 3px;
          animation: blink 0.6s alternate infinite ease-in-out;
        }

        .loader span:nth-child(1) { animation-delay: 0ms; }
        .loader span:nth-child(2) { animation-delay: 200ms; }
        .loader span:nth-child(3) { animation-delay: 300ms; }
        .loader span:nth-child(4) { animation-delay: 400ms; }
        .loader span:nth-child(5) { animation-delay: 500ms; }
        .loader span:nth-child(6) { animation-delay: 600ms; }

        @keyframes blink {
          0% {
            opacity: 0.35;
            transform: scale(0.55) rotate(4deg);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div className="loader" aria-label="Loading">
        {blocks.map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </>
  );
}

``

## src\components\LockPageTo2D.tsx

``tsx
// âœ… Create this file: /src/components/LockPageTo2D.tsx
"use client";

import { useEffect } from "react";

export default function LockPageTo2D() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      html, body {
        perspective: none !important;
        transform-style: flat !important;
      }

      * {
        transform-style: flat !important;
        backface-visibility: hidden !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}

``

## src\components\safari.tsx

``tsx
import { Safari } from "@/components/magicui/safari";

export function SafariDemo() {
  return (
    <div className="relative">
      <Safari
        url="desnine.com"
        className="size-full"
        imageSrc="/Safari-img.png"
      />
    </div>
  );
}

``

## src\components\RocketLoader.tsx

``tsx
"use client";

type RocketLoaderProps = {
  scale?: number;
  red?: string;
  lightRed?: string;
  smoke?: string;
  className?: string;
};

export default function RocketLoader({
  scale = 1,
  red = "#7A0000",
  lightRed = "#b33a3a",
  smoke = "#9a9a9a", // âœ… mid-gray for light + dark mode
  className = "",
}: RocketLoaderProps) {
  return (
    <>
      <style jsx>{`
        .rocket {
          position: relative;
          width: 80px;
          transform: scale(${scale});
          margin: auto;
        }

        .rocket-body {
          width: 80px;
          animation: bounce 0.5s infinite;
          position: relative;
        }

        .rocket-body .body {
          background-color: #e6e6e6;
          height: 180px;
          border-top-right-radius: 100%;
          border-top-left-radius: 100%;
          border-bottom-left-radius: 50%;
          border-bottom-right-radius: 50%;
          border-top: 5px solid #f5f5f5;
        }

        .rocket-body::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 13px;
          background-color: #3a3a3a;
          bottom: -13px;
          border-bottom-right-radius: 60%;
          border-bottom-left-radius: 60%;
        }

        .window {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: ${red};
          left: 50%;
          transform: translateX(-50%);
          top: 40px;
          border: 5px solid #b4b2b2;
        }

        .fin {
          position: absolute;
          z-index: -1;
          height: 55px;
          width: 50px;
          background-color: ${lightRed};
        }

        .fin-left {
          left: -30px;
          top: calc(100% - 55px);
          border-top-left-radius: 80%;
          border-bottom-left-radius: 20%;
        }

        .fin-right {
          right: -30px;
          top: calc(100% - 55px);
          border-top-right-radius: 80%;
          border-bottom-right-radius: 20%;
        }

        .exhaust-flame {
          position: absolute;
          top: 90%;
          width: 28px;
          height: 150px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(
            to bottom,
            transparent 10%,
            ${red} 100%
          );
          animation: exhaust 0.2s infinite;
          filter: blur(1px);
        }

        /* ðŸ”¥ Smoke (contrast-safe) */
        .exhaust-fumes li {
          list-style: none;
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            ${smoke} 0%,
            rgba(154, 154, 154, 0.55) 45%,
            rgba(154, 154, 154, 0.25) 70%,
            transparent 100%
          );
          border: 1px solid rgba(0, 0, 0, 0.15);
          opacity: 0.9;
          filter: blur(1px);
        }

        .exhaust-fumes li:nth-child(1) {
          width: 200px;
          height: 200px;
          bottom: -300px;
          animation: fumes 5s infinite;
        }

        .exhaust-fumes li:nth-child(2) {
          width: 150px;
          height: 150px;
          left: -120px;
          top: 260px;
          animation: fumes 3.2s infinite;
        }

        .exhaust-fumes li:nth-child(3) {
          width: 120px;
          height: 120px;
          left: -40px;
          top: 330px;
          animation: fumes 3s 1s infinite;
        }

        .exhaust-fumes li:nth-child(4) {
          width: 100px;
          height: 100px;
          left: -170px;
          top: 380px;
          animation: fumes 4s 2s infinite;
        }

        .exhaust-fumes li:nth-child(5) {
          width: 130px;
          height: 130px;
          left: -120px;
          top: 350px;
          animation: fumes 5s infinite;
        }

        .star li::before,
        .star li::after {
          background-color: ${smoke};
        }

        @keyframes bounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }

        @keyframes exhaust {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }

        @keyframes fumes {
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>

      <div className={`rocket ${className}`} aria-label="Loading">
        <div className="rocket-body">
          <div className="body" />
          <div className="fin fin-left" />
          <div className="fin fin-right" />
          <div className="window" />
        </div>

        <div className="exhaust-flame" />

        <ul className="exhaust-fumes">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>
    </>
  );
}

``

## src\components\RippleLogoLoader.tsx

``tsx
"use client";

export default function RippleLogoLoader({
  size = 180,
  duration = "2.2s",
  red = "#7A0000",
  logoSrc = "/d.png", // put your logo in /public
  alt = "Desnine Studio",
}) {
  return (
    <>
      <style jsx>{`
        .loader {
          --size: ${size}px;
          --duration: ${duration};
          --red: ${red};

          height: var(--size);
          aspect-ratio: 1;
          position: relative;
        }

        /* Red-tinted glass background */
        .box {
          position: absolute;
          border-radius: 50%;

          background: radial-gradient(
              120% 120% at 50% 25%,
              rgba(255, 255, 255, 0.18) 0%,
              rgba(255, 255, 255, 0.06) 35%,
              rgba(255, 255, 255, 0.02) 65%,
              rgba(255, 255, 255, 0) 100%
            ),
            linear-gradient(
              180deg,
              rgba(122, 0, 0, 0.22) 0%,
              rgba(122, 0, 0, 0.10) 55%,
              rgba(0, 0, 0, 0.10) 100%
            );

          /* red â€œedgeâ€ */
          border: 1px solid rgba(122, 0, 0, 0.35);
          border-top: 1px solid rgba(255, 255, 255, 0.18);

          box-shadow:
            0 12px 18px -10px rgba(0, 0, 0, 0.45),
            0 0 22px rgba(122, 0, 0, 0.18);

          backdrop-filter: blur(8px);
          animation: ripple var(--duration) infinite ease-in-out;
        }

        .box:nth-child(1) { inset: 40%; z-index: 99; }
        .box:nth-child(2) { inset: 30%; z-index: 98; animation-delay: 0.18s; opacity: 0.95; }
        .box:nth-child(3) { inset: 20%; z-index: 97; animation-delay: 0.36s; opacity: 0.85; }
        .box:nth-child(4) { inset: 10%; z-index: 96; animation-delay: 0.54s; opacity: 0.75; }
        .box:nth-child(5) { inset: 0%;  z-index: 95; animation-delay: 0.72s; opacity: 0.65; }

        .logo {
          position: absolute;
          inset: 0;
          display: grid;
          place-content: center;
          padding: 30%;
          z-index: 120;
          pointer-events: none;
        }

        /* Logo image */
        .logoImg {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.35));
          animation: logoPulse var(--duration) infinite ease-in-out;
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            box-shadow:
              0 12px 18px -10px rgba(0, 0, 0, 0.45),
              0 0 18px rgba(122, 0, 0, 0.14);
          }
          50% {
            transform: scale(1.28);
            box-shadow:
              0 28px 24px -16px rgba(0, 0, 0, 0.50),
              0 0 34px rgba(122, 0, 0, 0.24);
          }
          100% {
            transform: scale(1);
            box-shadow:
              0 12px 18px -10px rgba(0, 0, 0, 0.45),
              0 0 18px rgba(122, 0, 0, 0.14);
          }
        }

        @keyframes logoPulse {
          0% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.04); opacity: 1; }
          100% { transform: scale(1); opacity: 0.9; }
        }
      `}</style>

      <div className="loader" aria-label="Loading">
        <div className="box">
          <div className="logo">
            <img className="logoImg" src={logoSrc} alt={alt} />
          </div>
        </div>

        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </>
  );
}

``

## src\components\RadarLoader.tsx

``tsx
"use client";

type RadarLoaderProps = {
  size?: number;
  red?: string;
  lightRed?: string;
  duration?: string;
  className?: string;
};

export default function RadarLoader({
  size = 150,
  red = "#7A0000",
  lightRed = "rgba(122, 0, 0, 0.35)",
  duration = "2s",
  className = "",
}: RadarLoaderProps) {
  const inner = Math.floor(size * 0.23);
  const inset = Math.floor(size * 0.15);

  return (
    <>
      <style jsx>{`
        /* MAIN RADAR */
        .loader {
          position: relative;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;

          /* ðŸ”´ Radar outer border */
          border: 2px solid ${red};

          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          /* subtle depth */
          box-shadow:
            0 0 0 1px rgba(122, 0, 0, 0.25),
            inset 0 0 30px rgba(122, 0, 0, 0.15);
        }

        /* Outer dashed ring */
        .loader::before {
          content: "";
          position: absolute;
          inset: ${inset}px;
          border: 1.5px dashed ${red};
          border-radius: 50%;
          opacity: 0.9;
        }

        /* Inner dashed ring */
        .loader::after {
          content: "";
          position: absolute;
          width: ${inner}px;
          height: ${inner}px;
          border-radius: 50%;
          border: 1.5px dashed ${red};
          opacity: 0.85;
        }

        /* Rotating radar arm */
        .loader span {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 100%;
          transform-origin: top left;
          animation: radar-spin ${duration} linear infinite;

          /* ðŸ”´ Red dotted sweep line */
          border-top: 2px dashed ${red};
        }

        /* Radar sweep cone */
        .loader span::before {
          content: "";
          position: absolute;
          inset: 0;
          transform-origin: top left;
          transform: rotate(-55deg);

          /* ðŸŒ¸ Light red radar sweep */
          background: radial-gradient(
            circle at top left,
            ${lightRed} 0%,
            rgba(122, 0, 0, 0.18) 45%,
            rgba(122, 0, 0, 0.08) 60%,
            transparent 75%
          );

          filter: blur(20px);
        }

        @keyframes radar-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className={`loader ${className}`} aria-label="Radar loading">
        <span />
      </div>
    </>
  );
}

``

## src\components\ScrollAnimatedText.tsx

``tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimatedText() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track progress across this tall section only
  const { scrollYProgress } = useScroll();

  // Symmetric, constant-speed travel across the screen center
  const x = useTransform(scrollYProgress, [0, 1], ["50vw", "-50vw"], {
    ease: (t) => t,
  });

  const text = "Are you ready to stand out?";

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[200vh]           /* gives you 'scroll room' for the animation */
        snap-start          /* locks viewport to this section at its start */
        overflow-x-hidden
      "
    >
      {/* Sticky viewport: keeps text perfectly centered while the user scrolls */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div
          style={{ transform: `translateX(${x})` }}
          className="
            whitespace-nowrap
            text-center
            text-6xl md:text-9xl
            font-extrabold tracking-tight
            transform-gpu will-change-transform
          "
          aria-label={text}
        >
          {text}
        </div>
      </div>
    </section>
  );
}

``

## src\components\scroll-text-animation.tsx

``tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollTextAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const text = "Scroll me to reveal text";
  const letters = text.split("");

  return (
    <div ref={ref} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-1 md:gap-2">
            {letters.map((letter, index) => {
              const letterProgress = useTransform(
                scrollYProgress,
                [index * 0.02, (index + 1) * 0.02],
                [0, 1]
              );
              
              const x = useTransform(
                letterProgress,
                [0, 1],
                [-100, 0]
              );
              
              const opacity = useTransform(
                letterProgress,
                [0, 1],
                [0, 1]
              );

              return (
                <motion.span
                  key={index}
                  style={{ x, opacity }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 
``

## src\components\second-bento-animation.tsx

``tsx
import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function SecondBentoAnimation() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

``

## src\components\section-header.tsx

``tsx
interface SectionHeaderProps {
  children: React.ReactNode;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="border-b w-full h-full p-10 md:p-14">
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
        {children}
      </div>
    </div>
  );
}

``

## src\app\robots.ts

``ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://desnine.com/sitemap.xml',
  }
} 
``

## src\app\work\mavo\page.tsx

``tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import RelatedProjectsSection from "@/components/sections/related-projects-section";

interface BannerProps {
  src: string;
  alt?: string;
  aspect?: string;   // tailwind aspect utility, e.g. "aspect-[16/9]"
  rounded?: boolean;
}

function Banner({
  src,
  alt = "Project Banner",
  aspect = "aspect-[16/9]",
  rounded = true,
}: BannerProps) {
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden ${
        rounded ? "rounded-lg" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`object-cover ${rounded ? "rounded-lg" : ""}`}
      />
    </div>
  );
}

function TopOnlyBackButton() {
  const router = useRouter();
  return (
    <div
      className="
        absolute
        left-6 md:left-10        /* slightly more indentation */
        top-[calc(env(safe-area-inset-top,0px)+12px)]
        md:top-[calc(env(safe-area-inset-top,0px)+16px)]
        z-20
      "
    >
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-white font-medium hover:opacity-75 transition"
        aria-label="Go back"
      >
        <ChevronLeft className="h-4 w-4" />
        Go back
      </button>
    </div>
  );
}

export default function ServicePage() {
  const title = "Mavo";

  // Hide global header/nav while on this page
  useEffect(() => {
    const selectors = ["header", 'nav[role="navigation"]', "#site-header", ".site-header"];
    const hiddenEls: HTMLElement[] = [];

    selectors.forEach((sel) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        if (el.dataset._hiddenByPage === "1") return;
        el.dataset._hiddenByPage = "1";
        el.dataset._prevDisplay = el.style.display;
        el.style.display = "none";
        hiddenEls.push(el);
      });
    });

    return () => {
      hiddenEls.forEach((el) => {
        el.style.display = el.dataset._prevDisplay ?? "";
        delete el.dataset._hiddenByPage;
        delete el.dataset._prevDisplay;
      });
    };
  }, []);

  // Parallax scroll for hero
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="relative flex flex-col min-h-screen w-full">
      {/* Hero Banner */}
      <section ref={ref} className="relative w-full h-[70vh] overflow-hidden">
        <TopOnlyBackButton />
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/Mavo/5620db213698209.6757693cba376.jpg"
            alt="Banner Image"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-6 left-8 md:left-12 text-white">
          {/* extra indentation on heading */}
          <h1
            className="text-3xl md:text-5xl font-bold drop-shadow-lg animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {title}
          </h1>
        </div>
      </section>

      {/* Project Summary */}
      <section className="w-full bg-transparent text-foreground py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-5">
            <h2 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
              The Project Summary :
            </h2>
            <p className="text-base leading-relaxed text-justify">
              Mavo is a financial management app built to simplify money control for individuals and businesses. The identity features a bold M logo symbolizing stability and growth, supported by a vibrant color palette, clean typography, and visuals inspired by financial data flows. The brand system spans digital product UI, stationery, and marketing assets, creating a cohesive and approachable look.
            </p>
            
          </div>

          <div className="flex flex-col gap-10">
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
                What We Did :
              </h3>
              <p className="text-base leading-relaxed">Logo &amp; Branding</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
                Category
              </h3>
              <p className="text-base leading-relaxed">
                Markiting Collateral
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banners */}
      <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Mavo/756a3d213698209.6757693cc2a9f.jpg" alt="Project image 93" />
        <Banner src="/Mavo/4aabf8213698209.6757693cbf3ed.gif" alt="Project image 93" />
        <Banner src="/Mavo/85afca213698209.6757693cb5a29.gif" alt="Project image 93" />
        <Banner src="/Mavo/938be5213698209.674af38148c1d.gif" alt="Project image 93" />
        <Banner src="/Mavo/d456be213698209.6757693cc7e7b.jpg" alt="Project image 93" />
        <Banner src="/Mavo/54ce47213698209.6757693cc4e93.gif" alt="Project image 93" />
        <Banner src="/Mavo/276228213698209.6757693cbc7fc.jpg" alt="Project image 93" />
        <Banner src="/Mavo/cecc02213698209.6757693cc5bc2.gif" alt="Project image 93" />
        <Banner src="/Mavo/a40ce8213698209.6757693cbe7a6.jpg" alt="Project image 93" />
        <Banner src="/Mavo/b632c4213698209.6757693ccbd76.jpg" alt="Project image 93" />
        <Banner src="/Mavo/dfb98e213698209.6757693cc11af.jpg" alt="Project image 93" />
        <Banner src="/Mavo/9a1f44213698209.6757693cc9bae.jpg" alt="Project image 93" />
        <Banner src="/Mavo/f2bf91213698209.6757693cb5294.jpg" alt="Project image 93" />
        <Banner src="/Mavo/e67670213698209.6757693cb871f.gif" alt="Project image 93" />
   </section>

    

      <RelatedProjectsSection />
      <ContactUsSection />
      <FooterSection />

      {/* CSS-only animation */}
      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes fade-up {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-up {
            animation: fade-up 0.8s ease-out both;
            will-change: transform, opacity;
          }
        }
      `}</style>
    </main>
  );
}

``

## src\app\article\page.tsx

``tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import LazySection from "@/components/sections/article/LazySection";
import BannerHeading from "@/components/sections/article/BannerHeading";
import ServicesMarquee from "@/components/sections/article/ServicesMarquee";
import FeaturedHero from "@/components/sections/article/FeaturedHero";
import ArticleSearch from "@/components/sections/article/ArticleSearch";
import ArticlesGrid from "@/components/sections/article/ArticlesGrid";
import { ARTICLES } from "@/lib/articlesData";
import { useDebounced } from "@/lib/useDebounced";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function ArticlesPage() {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(6);
  const debounced = useDebounced(query, 300);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Keyboard shortcut: "/" focus search, Esc clears
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const active = document.activeElement as HTMLElement | null;
      const typing = active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA");
      if (e.key === "/" && !typing) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "Escape" && document.activeElement === inputRef.current) {
        setQuery("");
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const featured = useMemo(() => ARTICLES.find((a) => a.featured) ?? ARTICLES[0], []);
  const rest = useMemo(() => ARTICLES.filter((a) => a.id !== featured.id), [featured.id]);

  const filtered = useMemo(() => {
    let arr = [...rest];
    if (debounced) {
      const q = String(debounced).toLowerCase();
      arr = arr.filter(
        (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
      );
    }
    arr.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    return arr;
  }, [debounced, rest]);

  const visible = filtered.slice(0, limit);
  const canLoadMore = limit < filtered.length;

  return (
    <main className="w-full text-foreground bg-background">
      <BannerHeading />
      <LazySection minHeight={56}>
        <ServicesMarquee />
      </LazySection>
      <FeaturedHero article={featured} />
      <LazySection minHeight={72}>
        <ArticleSearch query={query} setQuery={setQuery} inputRef={inputRef} />
      </LazySection>
      <LazySection minHeight={640} rootMargin="400px">
        <ArticlesGrid
          items={visible}
          onLoadMore={() => setLimit((n) => n + 4)}
          canLoadMore={canLoadMore}
        />
      </LazySection>
      <ContactUsSection />
      <FooterSection />
    </main>
  );
}

``

## src\app\work\coresecure\page.tsx

``tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import RelatedProjectsSection from "@/components/sections/related-projects-section";

interface BannerProps {
  src: string;
  alt?: string;
  aspect?: string;   // tailwind aspect utility, e.g. "aspect-[16/9]"
  rounded?: boolean;
}

function Banner({
  src,
  alt = "Project Banner",
  aspect = "aspect-[16/9]",
  rounded = true,
}: BannerProps) {
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden ${
        rounded ? "rounded-lg" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`object-cover ${rounded ? "rounded-lg" : ""}`}
      />
    </div>
  );
}

function TopOnlyBackButton() {
  const router = useRouter();
  return (
    <div
      className="
        absolute
        left-6 md:left-10        /* slightly more indentation */
        top-[calc(env(safe-area-inset-top,0px)+12px)]
        md:top-[calc(env(safe-area-inset-top,0px)+16px)]
        z-20
      "
    >
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-white font-medium hover:opacity-75 transition"
        aria-label="Go back"
      >
        <ChevronLeft className="h-4 w-4" />
        Go back
      </button>
    </div>
  );
}

export default function ServicePage() {
  const title = "Core Secure";

  // Hide global header/nav while on this page
  useEffect(() => {
    const selectors = ["header", 'nav[role="navigation"]', "#site-header", ".site-header"];
    const hiddenEls: HTMLElement[] = [];

    selectors.forEach((sel) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        if (el.dataset._hiddenByPage === "1") return;
        el.dataset._hiddenByPage = "1";
        el.dataset._prevDisplay = el.style.display;
        el.style.display = "none";
        hiddenEls.push(el);
      });
    });

    return () => {
      hiddenEls.forEach((el) => {
        el.style.display = el.dataset._prevDisplay ?? "";
        delete el.dataset._hiddenByPage;
        delete el.dataset._prevDisplay;
      });
    };
  }, []);

  // Parallax scroll for hero
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="relative flex flex-col min-h-screen w-full">
      {/* Hero Banner */}
      <section ref={ref} className="relative w-full h-[70vh] overflow-hidden">
        <TopOnlyBackButton />
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/Coresecure/c84778211607369.67576a9fb7366.png"
            alt="Banner Image"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-6 left-8 md:left-12 text-white">
          {/* extra indentation on heading */}
          <h1
            className="text-3xl md:text-5xl font-bold drop-shadow-lg animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {title}
          </h1>
        </div>
      </section>

      {/* Project Summary */}
      <section className="w-full bg-transparent text-foreground py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-5">
            <h2 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
              The Project Summary :
            </h2>
            <p className="text-base leading-relaxed text-justify">
              Core Secure is dedicated to leading the integration of Web3 infrastructure into corporate operations, with a vision built on collaboration, security, transparency, and simplicity. Its visual identity embraces a youthful, tech-savvy, and minimal design inspired by the structured nature of blockchain. The geometric symbol reflects reliability and innovation, while Aeonikâ€™s geometric typeface conveys forward thinking stability. A bold blue palette reinforces trust and professionalism, positioning Core Secure as a distinctive and trustworthy presence in the Web3 landscape.
            </p>
            
          </div>

          <div className="flex flex-col gap-10">
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
                What We Did :
              </h3>
              <p className="text-base leading-relaxed">Logo &amp; Branding</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
                Category
              </h3>
              <p className="text-base leading-relaxed">
                Technology &amp; Security, Innovation, Reliability, Collaboration, Transparency, Professionalism &amp; Trust
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banners */}
      <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Coresecure/ad453c211607369.67576a9fa24a4.png" alt="Project image 93" />
        <Banner src="/Coresecure/4556bc211607369.67576a9fb35ae.png" alt="Project image 57" />
        <Banner src="/Coresecure/42afdf211607369.67576a9fa3ce7.png" alt="Project image 93" />
        <Banner src="/Coresecure/a29ed1211607369.67576a9fa62e3.png" alt="Project image 57" />
        <Banner src="/Coresecure/79a73e211607369.67576a9fafa9e.png" alt="Project image 93" />
        <Banner src="/Coresecure/8d991a211607369.67576a9fa7808.png" alt="Project image 57" />
        <Banner src="/Coresecure/e23456211607369.67576a9faacc2.png" alt="Project image 93" />
        <Banner src="/Coresecure/b02f6c211607369.67576a9fac281.png" alt="Project image 93" />
        <Banner src="/Coresecure/75b080211607369.67576a9fb4811.png" alt="Project image 57" />
        <Banner src="/Coresecure/38b83b211607369.67576a9fb5b4b.png" alt="Project image 93" />
        <Banner src="/Coresecure/3ab509211607369.67576a9fb2b32.png" alt="Project image 57" />
        <Banner src="/Coresecure/c4d7f6211607369.67576a9fa9fcc.png" alt="Project image 93" />
        <Banner src="/Coresecure/5490f0211607369.67576a9fa4e3d.png" alt="Project image 57" />
        <Banner src="/Coresecure/e66d2b211607369.67576a9fad53c.png" alt="Project image 93" />
        <Banner src="/Coresecure/8b2a65211607369.67576a9fa8a0d.png" alt="Project image 57" />
        <Banner src="/Coresecure/14b766211607369.67576a9fb1e95.png" alt="Project image 93" />
        <Banner src="/Coresecure/9e0f2d211607369.67576a9fb0c06.png" alt="Project image 57" />
        <Banner src="/Coresecure/80f7c2211607369.67576a9fb672a.png" alt="Project image 93" />
      </section>

      

      <RelatedProjectsSection />
      <ContactUsSection />
      <FooterSection />

      {/* CSS-only animation */}
      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes fade-up {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-up {
            animation: fade-up 0.8s ease-out both;
            will-change: transform, opacity;
          }
        }
      `}</style>
    </main>
  );
}

``

## src\components\magicui\animated-beam.tsx

``tsx
"use client";

import { motion } from "framer-motion";
import { RefObject, useEffect, useId, useState } from "react";

import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>; // Container ref
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // For all entries, recalculate the path
      for (let entry of entries) {
        updatePath();
      }
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className,
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

``

## src\components\sections\contact-us-section.tsx

``tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactUsSection() {
  return (
    <section
      id="contact-us-section"
      className="group w-full py-20 px-6 md:px-12 bg-background border-t border-border transition-transform duration-300 hover:scale-[1.02] hover:bg-muted/30"
    >
      <div className="max-w-3xl mx-auto text-center px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary group-hover:text-primary/90 transition-colors">
          Design it Once. Design it Right.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto group-hover:text-foreground transition-colors">
          Letâ€™s collaborate to bring your vision to life.  
          Ready to start your project?
        </p>

        <div className="mt-8">
          <Link href="/contact">
            <Button className="px-8 py-3 text-base font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary">
              Letâ€™s Talk
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

``

## src\app\work\greenly\page.tsx

``tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import RelatedProjectsSection from "@/components/sections/related-projects-section";

interface BannerProps {
  src: string;
  alt?: string;
  aspect?: string;   // tailwind aspect utility, e.g. "aspect-[16/9]"
  rounded?: boolean;
}

function Banner({
  src,
  alt = "Project Banner",
  aspect = "aspect-[16/9]",
  rounded = true,
}: BannerProps) {
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden ${
        rounded ? "rounded-lg" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`object-cover ${rounded ? "rounded-lg" : ""}`}
      />
    </div>
  );
}

function TopOnlyBackButton() {
  const router = useRouter();
  return (
    <div
      className="
        absolute
        left-6 md:left-10        /* slightly more indentation */
        top-[calc(env(safe-area-inset-top,0px)+12px)]
        md:top-[calc(env(safe-area-inset-top,0px)+16px)]
        z-20
      "
    >
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-white font-medium hover:opacity-75 transition"
        aria-label="Go back"
      >
        <ChevronLeft className="h-4 w-4" />
        Go back
      </button>
    </div>
  );
}

export default function ServicePage() {
  const title = "Greenly";

  // Hide global header/nav while on this page
  useEffect(() => {
    const selectors = ["header", 'nav[role="navigation"]', "#site-header", ".site-header"];
    const hiddenEls: HTMLElement[] = [];

    selectors.forEach((sel) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        if (el.dataset._hiddenByPage === "1") return;
        el.dataset._hiddenByPage = "1";
        el.dataset._prevDisplay = el.style.display;
        el.style.display = "none";
        hiddenEls.push(el);
      });
    });

    return () => {
      hiddenEls.forEach((el) => {
        el.style.display = el.dataset._prevDisplay ?? "";
        delete el.dataset._hiddenByPage;
        delete el.dataset._prevDisplay;
      });
    };
  }, []);

  // Parallax scroll for hero
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="relative flex flex-col min-h-screen w-full">
      {/* Hero Banner */}
      <section ref={ref} className="relative w-full h-[70vh] overflow-hidden">
        <TopOnlyBackButton />
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/Greenly/5fc68c214303945.67576a30c7901.png"
            alt="Banner Image"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-6 left-8 md:left-12 text-white">
          {/* extra indentation on heading */}
          <h1
            className="text-3xl md:text-5xl font-bold drop-shadow-lg animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {title}
          </h1>
        </div>
      </section>

      {/* Project Summary */}
      <section className="w-full bg-transparent text-foreground py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-5">
            <h2 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
              The Project Summary :
            </h2>
            <p className="text-base leading-relaxed text-justify">
              Greenly positions itself as an ecological alliance dedicated to advancing green innovation and safeguarding natural resources. The mission is rooted in creating a sustainable future for the planet by driving environmental protection and collective responsibility. Greenly acts as a catalyst for change, inspiring communities and individuals to contribute toward a greener tomorrow and reinforcing its role as a partner in ecological progress.
            </p>
            
          </div>

          <div className="flex flex-col gap-10">
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
                What We Did :
              </h3>
              <p className="text-base leading-relaxed">Logo &amp; Branding</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
                Category
              </h3>
              <p className="text-base leading-relaxed">
                Technology &amp; Security, Innovation, Reliability, Collaboration, Transparency, Professionalism &amp; Trust
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banners */}
      <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Greenly/30f05f214303945.67576a30c2fc1.png" alt="Project image 93" />
        <Banner src="/Greenly/aefd64214303945.67576a30c5d08.png" alt="Project image 93" />
        <Banner src="/Greenly/48e058214303945.67576a30c8ae4.png" alt="Project image 93" />
      </section>

      <section className="w-full px-6 md:px-12 mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Banner
            src="/Greenly/a1a4a9214303945.675610954d200.gif"
            alt="Project image 93"
            aspect="aspect-square"
            />
            <Banner
            src="/Greenly/fa977d214303945.675610954c9e4.gif"
            alt="Project image 57"
            aspect="aspect-square"
            />
        </div>
      </section>

        <section className="w-full px-6 md:px-12 mt-8 mb-8">
        <div className="grid grid-cols-4 gap-6 items-stretch">
            {/* First Banner - horizontal rectangle */}
            <div className="col-span-1 flex">
            <Banner
                src="/Greenly/ca74e0214303945.67561094b1529.png"
                alt="Project image 93"
            />
            </div>

            {/* Second Banner - square but matches the same height */}
            <div className="col-span-3 flex">
            <Banner
                src="/Greenly/e8b5f8214303945.67561094b1bb0.gif"
                alt="Project image 57"
            />
            </div>
        </div>
        </section>

        <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Greenly/391c39214303945.67576a30c937b.png" alt="Project image 93" />
        </section>

      <section className="w-full px-6 md:px-12 mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Banner
            src="/Greenly/5f6d06214303945.675610960976c.gif"
            alt="Project image 93"
            aspect="aspect-square"
            />
            <Banner
            src="/Greenly/5d5225214303945.6756109608da3.png"
            alt="Project image 57"
            aspect="aspect-square"
            />
        </div>
      </section>

        <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Greenly/06f873214303945.67576a30c213b.png" alt="Project image 93" />
        </section>
      <section className="w-full px-6 md:px-12 mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Banner
            src="/Greenly/def5aa214303945.67561097a8729.gif"
            alt="Project image 93"
            aspect="aspect-square"
            />
            <Banner
            src="/Greenly/116b0d214303945.67561097a8eb1.gif"
            alt="Project image 57"
            aspect="aspect-square"
            />
        </div>
      </section>

        <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Greenly/8db5b7214303945.67576a30c81d2.png" alt="Project image 93" />
        <Banner src="/Greenly/6fca27214303945.67576a30c441b.gif" alt="Project image 93" />
        <Banner src="/Greenly/3294d4214303945.67576a30c3b28.png" alt="Project image 93" />
        <Banner src="/Greenly/f0ccd2214303945.67576a30c6ae6.gif" alt="Project image 93" />
        </section>      

      <RelatedProjectsSection />
      <ContactUsSection />
      <FooterSection />

      {/* CSS-only animation */}
      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes fade-up {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-up {
            animation: fade-up 0.8s ease-out both;
            will-change: transform, opacity;
          }
        }
      `}</style>
    </main>
  );
}

``

## src\app\services\page.tsx

``tsx
import { BentoSection } from "@/components/sections/bento-section";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { Metadata } from "next";

// Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Digital Marketing Services - SEO, Web Design, AI Automation & Branding | Desnine",
  description: "Comprehensive digital marketing services including SEO optimization, website design & development, AI automation, branding & identity design, print & packaging design. Transform your business with proven results.",
  keywords: [
    "digital marketing services",
    "SEO optimization services",
    "website design services",
    "web development services",
    "AI automation services",
    "branding services",
    "logo design services",
    "print design services",
    "packaging design services",
    "digital design services",
    "advertising design services",
    "content creation services",
    "social media management services",
    "smart analytics services",
    "ecommerce website design",
    "lead generation services",
    "conversion optimization",
    "business growth marketing",
  ],
  openGraph: {
    title: "Digital Marketing Services - SEO, Web Design, AI Automation & Branding",
    description: "Transform your business with our comprehensive digital marketing services. Expert SEO, web design, AI automation, branding & more. Get proven results and grow your business.",
  },
};

export default function ServicePage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <ServiceHeroSection />
      <BentoSection />
      <ContactUsSection />
      
      <FooterSection />

    </main>
  );
}

``

## src\components\sections\BenefitsSection.tsx

``tsx
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const BENEFITS = [
//   {
//     id: "01",
//     title: "Convert Focused",
//     description:
//       "Speed means nothing without conversions. Our integrated design, development, and copy work together to drive revenue, not just win design awards.",
//     icon: "/Benefits/signal-status%20(2).png",
//   },
//   {
//     id: "02",
//     title: "Quick Launch",
//     description:
//       "Scale up for major launches or down for maintenance. Whether it's a quick landing page or complete rebrand, we adapt to your business needs.",
//     icon: "/Benefits/click.png",
//   },
//   {
//     id: "03",
//     title: "Real-Time Collaboration",
//     description:
//       "Daily check-ins and rapid iterations keep projects moving. You're always in the loop with feedback cycles that eliminate delays.",
//     icon: "/Benefits/clock%20(1).png",
//   },
//   {
//     id: "04",
//     title: "Creative Solution",
//     description:
//       "While others just do design, we handle copy too. Your entire funnel works together with cohesive messaging that actually converts.",
//     icon: "/Benefits/lightbulb.png",
//   },
// ];

// export function BenefitsSection() {
//   return (
//     <section id="benefits" className="w-full border-t border-border bg-background">
//       {/* SAME SIDE PADDINGS AS ClientFeedback */}
//       <div className="w-full px-10 md:px-10">
//         <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 py-16 lg:py-24">
//           {/* Header */}
//           <motion.div
//             className="flex flex-col items-center gap-4 text-center"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.4 }}
//           >
//             <p className="inline-flex h-8 items-center gap-2 rounded-full border border-border bg-transparent px-4 text-[11px] sm:text-xs font-medium text-foreground">
//               <span className="text-sm">â˜°</span>
//               <span>BENEFITS</span>
//             </p>

//             <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-primary">
//               Because Your Success Matters
//             </h2>
//           </motion.div>

//           {/* Benefits Grid */}
//           <div className="grid gap-4 pt-6 grid-cols-2 md:grid-cols-4">
//             {BENEFITS.map((item, i) => (
//               <motion.article
//                 key={item.id}
//                 className="flex h-full flex-col rounded-3xl border border-border bg-transparent p-4 sm:p-6 text-sm"
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.45,
//                   ease: "easeOut",
//                   delay: i * 0.1,
//                 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 whileHover={{ y: -4 }}
//               >
//                 {/* ID */}
//                 <div className="mb-3 text-[10px] sm:text-[11px] font-medium tracking-[0.25em] text-destructive">
//                   / {item.id}
//                 </div>

//                 {/* Icon */}
//                 <div className="mb-4 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl border border-border">
//                   <Image
//                     src={item.icon}
//                     alt={item.title}
//                     width={18}
//                     height={18}
//                     className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px] object-contain"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h4 className="mb-2 text-sm sm:text-base font-semibold text-foreground">
//                   {item.title}
//                 </h4>

//                 {/* Description */}
//                 <p className="text-[11px] sm:text-[13px] leading-relaxed text-muted-foreground">
//                   {item.description}
//                 </p>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

const BENEFITS = [
  {
    title: "Convert Focused",
    description:
      "Speed means nothing without conversions. Our integrated design, development, and copy work together to drive revenue, not just win design awards.",
    icon: "/Benefits/signal-status%20(2).png",
  },
  {
    title: "Quick Launch",
    description:
      "Scale up for major launches or down for maintenance. Whether it's a quick landing page or complete rebrand, we adapt to your business needs.",
    icon: "/Benefits/click.png",
  },
  {
    title: "Real Time Collaboration",
    description:
      "Daily checkins and rapid iterations keep projects moving. You're always in the loop with feedback cycles that eliminate delays.",
    icon: "/Benefits/clock%20(1).png",
  },
  {
    title: "Complete Creative Solution",
    description:
      "While others just do design, we handle copy too. Your entire funnel works together with cohesive messaging that actually converts.",
    icon: "/Benefits/lightbulb.png",
  },
];

export function BenefitsSection() {
  const { b2 } = siteConfig;

  return (
    <section
      id="benefits"
      className="relative w-full overflow-hidden border-t border-border bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-[600px] md:h-[800px] w-full rounded-b-xl
          [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)]"
        />
      </div>

      {/* Same side padding as ClientFeedback */}
      <div className="relative z-10 w-full px-10 md:px-10">
        <div className="mx-auto w-full max-w-6xl py-16 lg:py-24">
          {/* Hero text */}
          <motion.div
            className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-primary text-balance">
              {b2.title}
            </h1>

            <p className="text-base md:text-lg text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              {b2.description}
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {BENEFITS.map((item, i) => (
              <motion.article
                key={item.title}
                className="flex h-full flex-col rounded-3xl border border-border bg-transparent p-4 sm:p-6 text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl border border-border">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px] object-contain"
                  />
                </div>

                {/* Title */}
                <h4 className="mb-2 text-sm sm:text-base font-semibold text-foreground">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-[11px] sm:text-[13px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

``

## src\components\sections\work-bento-section.tsx

``tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

interface WorkBentoSectionProps {
  count?: number; // Optional: if passed, show only that many items
}

export function WorkBentoSection({ count }: WorkBentoSectionProps) {
  const { title, description, items } = siteConfig.workbentoSection;
  const displayItems = count ? items.slice(0, count) : items;

  return (
    <section
      id="bento"
      aria-label={title}
      className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
    >
      <div className="border-x mx-5 md:mx-10 relative">
        {/* Background decorations */}
        <div className="pointer-events-none absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
        <div className="pointer-events-none absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] cursor-pointer max-h-[400px]"
            >
              {/* Media / Content */}
              <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
                {item.content}
              </div>

              {/* Text */}
              <div className="flex-1 flex-col gap-2 p-6 pr-20">
                <h3 className="text-lg tracking-tighter font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>

              {/* Circular button (opens in new tab) */}
              <Link
                href={item.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.title}`}
                className="
                  absolute bottom-6 right-6
                  inline-flex items-center justify-center
                  size-10 rounded-full
                  bg-neutral-900 text-white
                  shadow-md transition-transform duration-300
                  hover:scale-110 hover:shadow-lg
                  focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-400/50
                  group
                "
              >
                {/* SVG Arrow that rotates on hover (consistent across devices) */}
                <ArrowUpRight
                  aria-hidden="true"
                  className="
                    w-5 h-5
                    transition-transform duration-300
                    group-hover:rotate-45
                  "
                />

                {/* subtle halo effect on hover */}
                <span
                  aria-hidden="true"
                  className="
                    absolute inset-0 rounded-full pointer-events-none
                    transition-[box-shadow] duration-300
                    group-hover:shadow-[0_0_0_6px_rgba(38,38,38,0.2)]
                  "
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

``

## src\components\sections\TestimonialsSection.tsx

``tsx
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatarText?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alex Najor",
    role: "CEO of Stapel",
    quote:
      "One the best I have worked with! Attention to the clients needs throughout the whole process. Communication was super fast at all times. Highly recommend using him for your logo needs to build a brand.",
    avatarText: "AN",
  },
  {
    name: "Sophie M.",
    role: "Founder",
    quote:
      "The design feels premium and intentional. Everything is consistent now â€” we finally look like a real brand.",
    avatarText: "SM",
  },
  {
    name: "Daniel R.",
    role: "E-commerce Owner",
    quote:
      "Fast delivery and super clean work. The new site instantly raised trust and conversions.",
    avatarText: "DR",
  },
  {
    name: "Hira A.",
    role: "Marketing Lead",
    quote:
      "Great communication, sharp eye for detail, and a smooth process from start to finish.",
    avatarText: "HA",
  },
];

function getPair<T>(arr: T[], start: number) {
  const a = arr[start % arr.length];
  const b = arr[(start + 1) % arr.length];
  return [a, b];
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const pair = useMemo(() => getPair(testimonials, index), [index]);

  const next = () => setIndex((i) => (i + 2) % testimonials.length);
  const prev = () => setIndex((i) => (i - 2 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center text-4xl md:text-6xl font-light tracking-tight text-white"
        >
          Clients Who Trusted
          <span className="block text-white/55">Us</span>
        </motion.h2>

        {/* Cards (always 2) */}
        <div className="mt-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid w-full max-w-5xl grid-cols-2 gap-6"
            >
              {pair.map((t, i) => (
                <motion.article
                  key={t.name + i}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  className="
                    rounded-[28px]
                    border border-white/10
                    bg-white/[0.04]
                    p-7 md:p-9
                    shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]
                    backdrop-blur
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-400/90 text-black flex items-center justify-center font-semibold">
                      {t.avatarText ??
                        t.name
                          .split(" ")
                          .map((s) => s[0])
                          .slice(0, 2)
                          .join("")}
                    </div>

                    <div className="leading-tight">
                      <p className="text-base font-medium text-white/90">
                        {t.name}
                      </p>
                      <p className="text-sm text-white/45">{t.role}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-[15px] leading-relaxed text-white/55">
                    {t.quote}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonials"
            className="
              h-12 w-12 rounded-xl
              bg-white/[0.06] hover:bg-white/[0.10]
              text-white/80
              border border-white/10
              transition
            "
          >
            â†
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="
              h-12 w-12 rounded-xl
              bg-white text-black
              border border-white/10
              transition
            "
          >
            â†’
          </button>
        </div>
      </div>
    </section>
  );
}

``

## src\components\sections\testimonials.tsx

``tsx
"use client";

import * as React from "react";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string; // put in /public (recommended) OR remote
  rating: number; // 0-5
};

const BLUE = "#19A7FF";

const DATA: Testimonial[] = [
  {
    name: "Jane Doe",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus elementum magna ut duis pulvinar tincidunt vivamus adipiscing quam. Eget dui quis etiam sed eget sed est.",
    avatar: "/avatar-1.jpg",
    rating: 4,
  },
  {
    name: "Jane Doe",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus elementum magna ut duis pulvinar tincidunt vivamus adipiscing quam. Eget dui quis etiam sed eget sed est.",
    avatar: "/avatar-2.jpg",
    rating: 4,
  },
  {
    name: "Jane Doe",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus elementum magna ut duis pulvinar tincidunt vivamus adipiscing quam. Eget dui quis etiam sed eget sed est.",
    avatar: "/avatar-3.jpg",
    rating: 4,
  },
  {
    name: "Jane Doe",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus elementum magna ut duis pulvinar tincidunt vivamus adipiscing quam. Eget dui quis etiam sed eget sed est.",
    avatar: "/avatar-4.jpg",
    rating: 4,
  },
];

function wrap(i: number, len: number) {
  return ((i % len) + len) % len;
}

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"}
        stroke={BLUE}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stars({ n, faded }: { n: number; faded: boolean }) {
  const on = faded ? "rgba(25,167,255,0.30)" : BLUE;
  const off = faded ? "rgba(25,167,255,0.12)" : "rgba(25,167,255,0.22)";
  return (
    <div className="stars" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < n ? on : off }}>
          â˜…
        </span>
      ))}
    </div>
  );
}

function Card({
  t,
  active,
}: {
  t: Testimonial;
  active: boolean;
}) {
  return (
    <div className={`t-card ${active ? "is-active" : "is-faded"}`}>
      <div className={`quote ${active ? "q-active" : ""}`}>â€œ</div>

      <div className="avatarWrap">
        <div className="avatarRing" />
        <div className="avatar">
          <Image src={t.avatar} alt={t.name} fill className="avatarImg" sizes="72px" />
        </div>
      </div>

      <p className="t-text">{t.text}</p>

      <Stars n={t.rating} faded={!active} />

      <div className="t-name">{t.name}</div>
      <div className="t-role">{t.role}</div>
    </div>
  );
}

export default function TestimonialsExactLikeImage() {
  const [idx, setIdx] = React.useState(1);
  const len = DATA.length;

  const left = wrap(idx - 1, len);
  const right = wrap(idx + 1, len);

  const prev = () => setIdx((v) => wrap(v - 1, len));
  const next = () => setIdx((v) => wrap(v + 1, len));

  return (
    <>
      <section className="wrap">
        <div className="inner">
          <h2 className="title">Testimonials</h2>

          <div className="stage">
            {/* arrows */}
            <button className="nav navLeft" onClick={prev} aria-label="Previous">
              <ArrowIcon dir="left" />
            </button>
            <button className="nav navRight" onClick={next} aria-label="Next">
              <ArrowIcon dir="right" />
            </button>

            {/* 3 cards desktop */}
            <div className="grid3">
              <Card t={DATA[left]} active={false} />
              <Card t={DATA[idx]} active />
              <Card t={DATA[right]} active={false} />
            </div>

            {/* 1 card mobile */}
            <div className="grid1">
              <Card t={DATA[idx]} active />
            </div>

            {/* dots */}
            <div className="dots" role="tablist" aria-label="Testimonials pagination">
              {DATA.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === idx ? "dotOn" : ""}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === idx}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXACT LOOK CSS (single-file) */}
      <style jsx>{`
        .wrap {
          width: 100%;
          background: #ffffff;
          padding: 42px 16px;
        }
        .inner {
          max-width: 1220px;
          margin: 0 auto;
          background: #f5f7fb;
          border-radius: 3px;
          padding: 34px 18px 46px;
        }
        .title {
          text-align: center;
          font-size: 34px;
          line-height: 1.1;
          margin: 0;
          font-weight: 800;
          color: #111827;
        }

        .stage {
          position: relative;
          margin-top: 26px;
          padding: 20px 10px 0;
        }

        .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border-radius: 999px;
          border: 1px solid rgba(25, 167, 255, 0.25);
          background: #ffffff;
          display: grid;
          place-items: center;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
          cursor: pointer;
          z-index: 3;
        }
        .navLeft {
          left: 10px;
        }
        .navRight {
          right: 10px;
        }

        .grid3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 34px;
          align-items: stretch;
          justify-content: center;
          max-width: 1080px;
          margin: 0 auto;
          padding: 16px 60px 0; /* makes arrows sit outside cards like screenshot */
        }

        .grid1 {
          display: none;
          max-width: 460px;
          margin: 0 auto;
          padding-top: 16px;
        }

        .t-card {
          position: relative;
          background: #ffffff;
          border-radius: 2px;
          box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);
          padding: 44px 28px 28px;
          text-align: center;
          min-height: 420px;
        }
        .is-faded {
          opacity: 0.22;
        }
        .is-active {
          opacity: 1;
        }

        .quote {
          position: absolute;
          left: 22px;
          top: 18px;
          font-size: 86px;
          line-height: 1;
          font-weight: 900;
          color: rgba(17, 24, 39, 0.28);
          user-select: none;
        }
        .q-active {
          color: ${BLUE};
        }

        .avatarWrap {
          position: relative;
          width: 76px;
          height: 76px;
          margin: 10px auto 0;
        }
        .avatarRing {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.06);
        }
        .avatar {
          position: absolute;
          inset: 9px;
          border-radius: 999px;
          overflow: hidden;
        }
        .avatarImg {
          object-fit: cover;
        }

        .t-text {
          margin: 18px auto 0;
          max-width: 320px;
          font-size: 13px;
          line-height: 1.7;
          color: rgba(17, 24, 39, 0.9);
        }
        .is-faded .t-text {
          color: rgba(17, 24, 39, 0.38);
        }

        .stars {
          margin-top: 18px;
          display: flex;
          justify-content: center;
          gap: 4px;
          font-size: 14px;
        }

        .t-name {
          margin-top: 10px;
          font-weight: 800;
          color: #111827;
          font-size: 16px;
        }
        .is-faded .t-name {
          color: rgba(17, 24, 39, 0.35);
        }
        .t-role {
          margin-top: 6px;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: rgba(17, 24, 39, 0.8);
        }
        .is-faded .t-role {
          color: rgba(17, 24, 39, 0.28);
        }

        .dots {
          margin-top: 26px;
          display: flex;
          justify-content: center;
          gap: 7px;
        }
        .dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          border: 0;
          background: rgba(17, 24, 39, 0.25);
          cursor: pointer;
        }
        .dotOn {
          background: ${BLUE};
        }

        @media (max-width: 900px) {
          .grid3 {
            gap: 18px;
            padding: 16px 44px 0;
          }
          .t-card {
            padding: 42px 22px 24px;
          }
        }

        @media (max-width: 768px) {
          .grid3 {
            display: none;
          }
          .grid1 {
            display: block;
          }
          .navLeft {
            left: 6px;
          }
          .navRight {
            right: 6px;
          }
        }

        @media (max-width: 520px) {
          .inner {
            padding: 26px 12px 34px;
          }
          .title {
            font-size: 30px;
          }
          .nav {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}

``

## src\components\sections\testimonial-section.tsx

``tsx
import { SectionHeader } from "@/components/section-header";
import { SocialProofTestimonials } from "@/components/testimonial-scroll";
import { siteConfig } from "@/lib/config";
import Link from "next/link";


export function TestimonialSection() {
  const { testimonials } = siteConfig;

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center w-full"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          Digital Marketing Done Right
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          When quality matters, businesses trust us for their complete online growth strategy.
        </p>
      </SectionHeader>
      <SocialProofTestimonials testimonials={testimonials} />
    </section>
  );
}

``

## src\components\sections\StatsSection.tsx

``tsx
"use client";

import { motion } from "framer-motion";

type Stat = {
  number: string;
  value: number; // numeric for bar height
  label: string;
};

const stats: Stat[] = [
  { number: "01", value: 94, label: "Poor design ruins first impressions" },
  { number: "02", value: 60, label: "Users avoid unprofessional brands" },
  { number: "03", value: 23, label: "Revenue lost to inconsistency" },
  { number: "04", value: 50, label: "Seconds before users lose trust" },
];

const MAX_BAR_HEIGHT = 260; // px
const RED = "rgb(180, 43, 37)"; // DESNINE red

export function StatsBarSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs tracking-[0.25em] font-semibold text-black/60">
            STATS
          </p>
          <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
            Branding in Numbers
          </h2>
        </div>

        {/* Chart */}
        <div className="mt-14 rounded-3xl border border-black/10 p-10">
          <div className="relative h-[300px] flex items-end gap-6">
            {/* baseline */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10" />

            {stats.map((stat, i) => {
              const height = (stat.value / 100) * MAX_BAR_HEIGHT;

              return (
                <div key={stat.number} className="flex-1 flex flex-col items-center">
                  {/* BAR */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height }}
                    exit={{ height: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut",
                      delay: i * 0.12,
                    }}
                    className="w-full rounded-2xl"
                    style={{ backgroundColor: RED }}
                  />

                  {/* Value */}
                  <p className="mt-4 text-lg font-semibold">
                    {stat.value}%
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Descriptions */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.number} className="text-sm text-black/70">
              <span className="block text-xs font-semibold text-black/50">
                {stat.number}
              </span>
              {stat.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

``

## src\components\sections\service-hero-section.tsx

``tsx
import { HeroVideoSection } from "@/components/sections/hero-video-section";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function ServiceHeroSection() {
  const { servicehero } = siteConfig;

  return (
    <section id={"servicehero"} className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"></div>
        </div>
        <div className="relative z-10 pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            {servicehero.badgeIcon}
            {servicehero.badge}
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-primary">
              {servicehero.title}
            </h1>
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              {servicehero.description}
            </p>
          </div>
        </div>
      </div>
      <HeroVideoSection />
    </section>
  );
}

``

## src\components\sections\related-projects-section.tsx

``tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

type WorkItem = {
  id?: number | string;
  title: string;
  description?: string;
  href: string;             // can be absolute or relative
  content?: React.ReactNode; // your image/animation node (from Work Bento)
};

type Props = {
  /** Optional cap on how many to consider */
  count?: number;
  /** Section heading (set "" to hide) */
  title?: string;
  /** Extra classes on the outer <section> */
  className?: string;
  /** Optional override for items (defaults to siteConfig.workbentoSection.items) */
  itemsOverride?: WorkItem[];
};

export default function RelatedProjectsSection({
  count,
  title = "Related Projects",
  className,
  itemsOverride,
}: Props) {
  const pathname = usePathname();

  // --- helpers ---
  const normalize = (href: string) => {
    try {
      const u = href?.startsWith("http")
        ? new URL(href)
        : new URL(href || "/", "https://example.com");
      let p = u.pathname || "/";
      if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
      return p;
    } catch {
      return href || "/";
    }
  };

  const currentPath = useMemo(() => normalize(pathname || "/"), [pathname]);

  // --- source: Work Bento items ---
  const raw: WorkItem[] =
    itemsOverride ?? (siteConfig?.workbentoSection?.items ?? []);

  // map â†’ cards & exclude current
  const cards = useMemo(() => {
    const mapped = raw
      .filter(Boolean)
      .filter((it) => it?.href)
      .filter((it) => normalize(it.href) !== currentPath)
      .map((it) => ({
        title: it.title,
        href: normalize(it.href),
        node: it.content, // <img /> or Animation component
      }));

    return typeof count === "number" ? mapped.slice(0, count) : mapped;
  }, [raw, count, currentPath]);

  const isCarousel = cards.length > 2;

  // --- responsive perView: 1 on mobile, 2 on md+ ---
  const [perView, setPerView] = useState(2);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setPerView(mq.matches ? 1 : 2);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // --- pages for carousel ---
  const pages = useMemo(() => {
    if (!isCarousel) return [];
    const out: typeof cards[] = [];
    for (let i = 0; i < cards.length; i += perView) {
      out.push(cards.slice(i, i + perView));
    }
    return out;
  }, [cards, perView, isCarousel]);

  const [page, setPage] = useState(0);
  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(pages.length - 1, 0)));
  }, [pages.length]);

  const prev = useCallback(() => {
    setPage((p) => (pages.length ? (p - 1 + pages.length) % pages.length : 0));
  }, [pages.length]);
  const next = useCallback(() => {
    setPage((p) => (pages.length ? (p + 1) % pages.length : 0));
  }, [pages.length]);

  const btnBase =
    "p-2 rounded-full bg-black/60 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/70";

  return (
    <section className={`relative w-full py-10 ${className ?? ""}`}>
      {/* keep inside your border container */}
      <div className="border-x mx-5 md:mx-10 px-5 md:px-10">
        {title ? (
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            {title}
          </h2>
        ) : null}

        {/* â‰¤ 2 items â†’ simple list (one per row) */}
        {!isCarousel ? (
          <div className="space-y-6">
            {cards.map((c, i) => (
              <ProjectCard key={i} title={c.title} href={c.href}>
                {c.node}
              </ProjectCard>
            ))}
            {cards.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No related projects yet.
              </p>
            )}
          </div>
        ) : (
          // > 2 items â†’ carousel
          <div className="relative">
            {/* viewport */}
            <div className="overflow-hidden">
              {/* track */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {pages.map((group, gi) => (
                  <div key={gi} className="min-w-full shrink-0">
                    <div
                      className={`grid gap-4 ${
                        perView === 1 ? "grid-cols-1" : "grid-cols-2"
                      }`}
                    >
                      {group.map((c, i) => (
                        <ProjectCard
                          key={`${gi}-${i}`}
                          title={c.title}
                          href={c.href}
                        >
                          {c.node}
                        </ProjectCard>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* arrows */}
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 ${btnBase}`}
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={next}
              className={`absolute right-0 top-1/2 -translate-y-1/2 ${btnBase}`}
            >
              <ChevronRight className="text-white" />
            </button>

            {/* dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setPage(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === page ? "bg-white" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  href,
  children, // the Work Bento `content` node (img/animation)
}: {
  title: string;
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.02] transition will-change-transform"
    >
      {/* Media area: constrain height, let your node fill */}
      <div className="relative w-full h-64">
        <div className="absolute inset-0">
          {/* Wrap the provided node so it fills nicely.
              Your <img> and animation components already have styles; we just ensure the container is full-size. */}
          <div className="w-full h-full">{children}</div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
      </div>
    </Link>
  );
}

``

## src\components\sections\quote-section.tsx

``tsx
/* eslint-disable @next/next/no-img-element */
import { siteConfig } from "@/lib/config";

export function QuoteSection() {
  const { quoteSection } = siteConfig;

  return (
    <section
      id="quote"
      className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20"
    >
      <blockquote className="max-w-3xl text-left px-4">
        <p className="text-xl md:text-2xl text-primary leading-relaxed tracking-tighter font-medium mb-6">
          {quoteSection.quote}
        </p>

        <div className="flex gap-4">
          <div className="size-10 rounded-full bg-primary border border-border">
            <img
              src={quoteSection.author.image}
              alt={quoteSection.author.name}
              className="size-full rounded-full object-contain"
            />
          </div>
          <div className="text-left">
            <cite className="text-lg font-medium text-primary not-italic">
              {quoteSection.author.name}
            </cite>
            <p className="text-sm text-primary">{quoteSection.author.role}</p>
          </div>
        </div>
      </blockquote>
    </section>
  );
}

``

## src\components\sections\progressonboarding.tsx

``tsx
"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-neutral-50 py-16 sm:py-20 lg:py-24">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-20 h-64 w-64 rounded-full bg-red-500/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-72 w-72 rounded-full bg-rose-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff0d,_transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Top: intro + hero */}
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.15fr)] items-start">
          {/* Left column â€“ heading & CTAs */}
          <div className="space-y-7 sm:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
              Why us
            </div>

            <div className="space-y-4">
              <p className="text-xs sm:text-sm font-medium text-neutral-400">
                Creative direction for modern brands
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-balance">
                Why choose{" "}
                <span className="inline-flex items-center gap-2">
                  Desnine Studio
                  <Sparkles className="h-5 w-5 text-red-400" />
                </span>
                ?
              </h1>
              <p className="max-w-xl text-sm sm:text-base text-neutral-300">
                We blend brand strategy, design craft, and automation so every
                touchpoint is clearer, faster, and more effective.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-medium text-neutral-50 transition hover:bg-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Letâ€™s talk
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/work"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/70 px-5 py-2.5 text-sm font-medium text-neutral-100 transition hover:border-red-500/60 hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                See our work
              </Link>

              <p className="text-xs text-neutral-500 sm:pl-1">
                Clear scopes, honest timelines, no fluff.
              </p>
            </div>
          </div>

          {/* Right column â€“ â€œWhat we stand forâ€ card grid */}
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-4 sm:p-6 lg:p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
              <div className="space-y-1">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                  What we stand for
                </p>
                <p className="text-xs sm:text-sm text-neutral-300">
                  The principles that shape our decisions, timelines, and the
                  work you ship.
                </p>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-950/90 px-3 py-1 text-[11px] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Outcomes over aesthetics
              </div>
            </div>

            <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 sm:p-4.5 transition-transform duration-200 hover:-translate-y-0.5 hover:border-red-500/60"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.12),_transparent_60%)]" />
                  <div className="relative space-y-1.5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                      {item.tag}
                    </p>
                    <h3 className="text-sm sm:text-base font-semibold text-neutral-50">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle: side-by-side comparison */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-7">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="space-y-1">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                What makes us different
              </p>
              <p className="text-xs sm:text-sm text-neutral-300">
                We remove the noise and build systems that grow with you.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-neutral-400">
              <CheckCircle2 className="h-3.5 w-3.5 text-red-400" />
              <span>Lean, transparent workflow</span>
            </div>
          </div>

          <div className="grid gap-4 md:gap-5 md:grid-cols-2">
            {/* Most agencies */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5 space-y-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Most agencies
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
                <li>â€¢ Rituals over results</li>
                <li>â€¢ Rigid retainers &amp; add-ons</li>
                <li>â€¢ Bloated processes</li>
                <li>â€¢ Surface-level design</li>
                <li>â€¢ Opaque pricing</li>
              </ul>
            </div>

            {/* The Desnine way */}
            <div className="relative rounded-2xl border border-red-500/50 bg-gradient-to-br from-red-500/15 via-neutral-900 to-neutral-950 p-4 sm:p-5">
              <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.3),_transparent_60%)]" />
              <div className="relative space-y-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-red-300">
                  The Desnine way
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-50">
                  <li>â€¢ Outcomes &gt; output</li>
                  <li>â€¢ Flexible, tailored scopes</li>
                  <li>â€¢ Lean, transparent workflow</li>
                  <li>â€¢ Brand systems that scale</li>
                  <li>â€¢ Clear budgets &amp; timelines</li>
                </ul>
                <p className="pt-1 text-[11px] text-red-200/80">
                  Built for founders who want momentum, not meetings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How we work â€“ 4-step flow */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] items-start">
          <div className="space-y-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              How we work
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-50 text-balance">
              A lean four-step flow that keeps momentum high and surprises low.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              From first call to post-launch support, we keep you in the loop
              and focused on what matters: shipping work that moves the
              business.
            </p>
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group relative flex gap-3 sm:gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-3.5 sm:p-4.5"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.16),_transparent_65%)]" />
                <div className="relative">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-neutral-700 bg-neutral-950 text-[11px] sm:text-xs font-medium text-neutral-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="relative space-y-1.5">
                  <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                    {step.label}
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-50">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership + CTA */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] items-center">
          <div className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Built on partnership
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-50">
              We treat your brand like itâ€™s ours.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300">
              We ask better questions, make braver choices, and stay after
              launch to keep compounding results. Post-launch support, responsive
              communication, and a streamlined workflow are baked into how we
              work â€” not sold as add-ons.
            </p>

            <div className="flex flex-wrap gap-2 pt-1.5">
              {[
                "Post-launch support",
                "Responsive comms",
                "Streamlined workflow",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-[11px] sm:text-xs text-neutral-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-5 sm:p-7 space-y-5">
            <div className="space-y-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                Letâ€™s shape your story
              </p>
              <p className="text-sm sm:text-base text-neutral-200">
                Whether you need a brand foundation, a conversion-ready website,
                or packaging that sells, weâ€™ll guide you from idea to impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-medium text-neutral-50 transition hover:bg-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-5 py-2.5 text-sm font-medium text-neutral-100 transition hover:border-red-500/70 hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Explore services
              </Link>
            </div>

            <p className="text-[11px] text-neutral-500">
              One focused studio, no bloated team. Just senior direction and a
              clear line to the people doing the work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const principles = [
  {
    tag: "Principle 01",
    title: "Clarity over clutter",
    description: "Simple, strategic design that moves people and markets.",
  },
  {
    tag: "Principle 02",
    title: "Partnership mindset",
    description: "We listen first, create second. Guided, not sold to.",
  },
  {
    tag: "Principle 03",
    title: "Innovation with purpose",
    description: "Creativity + AI + automation aimed at real outcomes.",
  },
  {
    tag: "Principle 04",
    title: "Reliability first",
    description: "Clear timelines, tight scope, proactive communication.",
  },
  {
    tag: "Principle 05",
    title: "Data-led decisions",
    description: "We measure what matters and iterate to lift ROI.",
  },
  {
    tag: "Principle 06",
    title: "Transparent pricing",
    description: "No surprises. Crystal-clear scopes and milestones.",
  },
];

const steps = [
  {
    label: "Step 01",
    title: "Discovery",
    description:
      "Map goals, audience, and success metrics so weâ€™re aligned on a clear brief before any pixels move.",
  },
  {
    label: "Step 02",
    title: "Strategy",
    description:
      "Positioning, messaging, and creative direction with sharp focus â€” the blueprint for every asset.",
  },
  {
    label: "Step 03",
    title: "Design & Build",
    description:
      "Identity, website, packaging, and automations crafted to convert and stay consistent at scale.",
  },
  {
    label: "Step 04",
    title: "Launch & Support",
    description:
      "QA, handover, and post-launch optimization so momentum doesnâ€™t die the day the project goes live.",
  },
];

``

## src\components\sections\process-section.tsx

``tsx
// "use client";

// import { SectionHeader } from "@/components/section-header";
// import { TerminalDemo } from "@/components/terminal";
// import { FileTreeDemo } from "@/components/file-tree";
// import { DiscoveryAnimation } from "@/components/discovery-animation";
// import { ChartRadarDefault } from "@/components/chart-radar";
// import { SafariDemo } from "@/components/safari";
// import { AnimatedListDemo } from "@/components/animated-noti";
// import { Iphone15ProDemo } from "@/components/iphone-zoom";
// import { FourthBentoAnimation } from "@/components/fourth-bento-animation";

// const processSteps = [
//   {
//     id: 1,
//     title: "Discovery",
//     description: "We start with a deep dive into your vision, goals, and brand identity.",
//     animation: <DiscoveryAnimation />,
//   },
//   {
//     id: 2,
//     title: "Strategy & Planning",
//     description: "We map out the project with clear milestones, timelines and creative direction.",
//     animation: <ChartRadarDefault />,
//   },
//   {
//     id: 3,
//     title: "Creative Proposal.",
//     description: "Our design team creates intuitive and visually appealing interfaces that enhance user experience. We focus on modern design principles while ensuring your brand identity shines through.",
//     animation: <SafariDemo />,
//   },
//   {
//     id: 4,
//     title: "Design & Development",
//     description: "From visual identity to website or content, we build assets with precision.",
//     animation: <TerminalDemo />,
//   },
//   {
//     id: 5,
//     title: "Delivery",
//     description: "Final files are delivered, optimized, and ready to elavate your brand across all platforms.",
//     animation: <FileTreeDemo />,
//   },
//   {
//     id: 6,
//     title: "Launch & Support",
//     description: "We stay by your side to ensure a smooth rollout and answer final questions.",
//     animation: <AnimatedListDemo />,
//   },
// ];

// export function ProcessSection() {
//   return (
//     <section
//       id="process"
//       className="flex flex-col items-center justify-center w-full relative bg-background"
//     >
//       <div className="border-x relative">
//         {/* Background decorations */}
//         <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
//         <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

//         {/* Section header */}
//         <div className="w-full h-full p-10 md:p-14">
//           <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
//             <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
//               Process
//             </h2>
//             <p className="text-muted-foreground text-center text-balance font-medium">
//               We design with purpose, we build brands.
//             </p>
//           </div>
//         </div>

//         {/* Process Steps */}
//         <div className="space-y-16 md:space-y-24 px-10 md:px-14">
//           {processSteps.map((step, index) => (
//             <div
//               key={step.id}
//               className="flex flex-col items-center gap-8"
//             >
//               {/* Header - Title and Number Above (Left Aligned) */}
//               <div className="w-full flex items-center justify-start gap-3 mb-6">
//                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white text-lg font-semibold">
//                   {step.id}
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
//                   {step.title}
//                 </h3>
//               </div>

//               {/* Animation and Description - Side by Side */}
//               <div className="w-full flex flex-col md:flex-row gap-8 items-center">
//                 {/* Animation Box */}
//                 <div className="w-full md:w-[400px] h-[300px] relative overflow-hidden">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     {step.animation}
//                   </div>
//                 </div>

//                 {/* Content - Text */}
//                 <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-center h-full text-center md:text-left">
//                   <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";


import { TerminalDemo } from "@/components/terminal";
import { FileTreeDemo } from "@/components/file-tree";
import { DiscoveryAnimation } from "@/components/discovery-animation";
import { ChartRadarDefault } from "@/components/chart-radar";
import { SafariDemo } from "@/components/safari";
import { AnimatedListDemo } from "@/components/animated-noti";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "We start with a deep dive into your vision, goals, and brand identity.",
    animation: <DiscoveryAnimation />,
  },
  {
    id: 2,
    title: "Strategy & Planning",
    description: "We map out the project with clear milestones, timelines and creative direction.",
    animation: <ChartRadarDefault />,
  },
  {
    id: 3,
    title: "Creative Proposal.",
    description:
      "Our design team creates intuitive and visually appealing interfaces that enhance user experience. We focus on modern design principles while ensuring your brand identity shines through.",
    animation: <SafariDemo />,
  },
  {
    id: 4,
    title: "Design & Development",
    description: "From visual identity to website or content, we build assets with precision.",
    animation: <TerminalDemo />,
  },
  {
    id: 5,
    title: "Delivery",
    description:
      "Final files are delivered, optimized, and ready to elavate your brand across all platforms.",
    animation: <FileTreeDemo />,
  },
  {
    id: 6,
    title: "Launch & Support",
    description: "We stay by your side to ensure a smooth rollout and answer final questions.",
    animation: <AnimatedListDemo />,
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative w-full bg-background overflow-x-hidden"
    >
      {/* Max width container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Frame (LOCKED to 2D, cannot â€œfloatâ€/3D-shift) */}
        <div
          className="
            relative border-x overflow-hidden isolate
            [perspective:none] [transform-style:flat]
            [backface-visibility:hidden]
          "
        >
          {/* HARD LOCK: prevent any 3D transforms inside this section */}
          <style jsx global>{`
            #process,
            #process * {
              transform-style: flat !important;
              perspective: none !important;
              transform: none;
            }
          `}</style>

          {/* Side decorations (contained, no negative offsets) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />

          {/* Section header */}
          <div className="w-full p-10 md:p-14">
            <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
                Process
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium">
                We design with purpose, we build brands.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-16 md:space-y-24 px-6 md:px-14 pb-20">
            {processSteps.map((step) => (
              <div key={step.id} className="flex flex-col items-center gap-8">
                {/* Header */}
                <div className="w-full flex items-center justify-start gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white text-lg font-semibold">
                    {step.id}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>

                {/* Animation + Description */}
                <div className="w-full flex flex-col md:flex-row gap-8 items-center">
                  {/* Animation Box (clipped + locked) */}
                  <div className="w-full md:w-[400px] h-[300px] relative overflow-hidden rounded-xl [perspective:none] [transform-style:flat]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {step.animation}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-center h-full text-center md:text-left">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

``

## src\components\magicui\typing-animation.tsx

``tsx
"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(elementRef as React.RefObject<Element>, {
    amount: 0.3,
    once: true,
  });

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    if (!isInView) return;

    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay, startOnView, isInView]);

  useEffect(() => {
    if (!started) return;

    const graphemes = Array.from(children);
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < graphemes.length) {
        setDisplayedText(graphemes.slice(0, i + 1).join(""));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className,
      )}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
}

``

## src\components\magicui\text-reveal.tsx

``tsx
"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation"; // âœ… add this
import { InteractiveHoverButton } from "./interactive-hover-button";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  showButton?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;   // optional override
  buttonClassName?: string;
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  showButton = true,
  buttonLabel = "Request a Free Quote",
  onButtonClick,
  buttonClassName = "text-xs md:text-sm",
  ...rest
}) => {
  const router = useRouter(); // âœ… router for navigation
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  // Button appears toward the end of the reveal
  const btnOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const btnY = useTransform(scrollYProgress, [0.55, 0.75], [16, 0]);
  const btnPointer = useTransform(scrollYProgress, [0.55, 0.75], ["none", "auto"]);

  // âœ… default behavior: go to /contact unless a custom onClick is provided
  const handleClick = () => {
    if (onButtonClick) return onButtonClick();
    router.push("/contact");
  };

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)} {...rest}>
      <div className="sticky top-0 h-screen flex items-center justify-center px-4">
        {/* Animated headline */}
        <span
          className="
            flex flex-wrap items-center justify-center text-center
            text-[14vw] md:text-[11vw] lg:text-[9vw] xl:text-[8vw]
            leading-[0.9] tracking-tighter font-extrabold
            text-black/20 dark:text-white/20
          "
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>

        {/* CTA Button (centred under the text, inside the same sticky section) */}
        {showButton && (
          <motion.div
            style={{ opacity: btnOpacity, y: btnY, pointerEvents: btnPointer }}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 bottom-16 md:bottom-20",
              buttonClassName
            )}
          >
            <InteractiveHoverButton onClick={handleClick}>
              {buttonLabel}
            </InteractiveHoverButton>
          </motion.div>
        )}
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-2">
      {/* faint shadow layer */}
      <span className="absolute opacity-30 select-none" aria-hidden>
        {children}
      </span>
      <motion.span
        style={{ opacity, willChange: "opacity" }}
        className="text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};

``

## src\components\magicui\terminal.tsx

``tsx
"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn("grid text-sm font-normal tracking-tight", className)}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:");
  }

  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export const Terminal = ({ children, className }: TerminalProps) => {
  return (
    <div
      className={cn(
        "z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border border-border bg-background",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-border p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">{children}</code>
      </pre>
    </div>
  );
};

``

## src\components\magicui\scroll-based-velocity.tsx

``tsx
"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface VelocityScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultVelocity?: number;
  className?: string;
  numRows?: number;
}

interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  baseVelocity: number;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({
  children,
  baseVelocity = 100,
  ...props
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
        setRepetitions(newRepetitions);
      }
    };

    calculateRepetitions();

    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [children]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  const directionFactor = React.useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden whitespace-nowrap"
      {...props}
    >
      <motion.div className="inline-block" style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} ref={i === 0 ? textRef : null}>
            {children}{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function VelocityScroll({
  defaultVelocity = 5,
  numRows = 2,
  children,
  className,
  ...props
}: VelocityScrollProps) {
  return (
    <div
      className={cn(
        "relative w-full text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]",
        className,
      )}
      {...props}
    >
      {Array.from({ length: numRows }).map((_, i) => (
        <ParallaxText
          key={i}
          baseVelocity={defaultVelocity * (i % 2 === 0 ? 1 : -1)}
        >
          {children}
        </ParallaxText>
      ))}
    </div>
  );
}

``

## src\components\magicui\safari.tsx

``tsx
import { SVGProps } from "react";

type SafariMode = "default" | "simple";

export interface SafariProps extends SVGProps<SVGSVGElement> {
  url?: string;
  imageSrc?: string;
  videoSrc?: string;
  width?: number;
  height?: number;
  mode?: SafariMode;
}

export function Safari({
  imageSrc,
  videoSrc,
  url,
  width = 1203,
  height = 753,
  mode = "default",
  ...props
}: SafariProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#path0)">
        <path
          d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z"
          className="fill-white dark:fill-[#262626]"
        />
        <circle
          cx="27"
          cy="25"
          r="6"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <circle
          cx="47"
          cy="25"
          r="6"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <circle
          cx="67"
          cy="25"
          r="6"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <g className="mix-blend-luminosity">
          <path
            d="M566.269 32.0852H572.426C573.277 32.0852 573.696 31.6663 573.696 30.7395V25.9851C573.696 25.1472 573.353 24.7219 572.642 24.6521V23.0842C572.642 20.6721 571.036 19.5105 569.348 19.5105C567.659 19.5105 566.053 20.6721 566.053 23.0842V24.6711C565.393 24.7727 565 25.1917 565 25.9851V30.7395C565 31.6663 565.418 32.0852 566.269 32.0852ZM567.272 22.97C567.272 21.491 568.211 20.6785 569.348 20.6785C570.478 20.6785 571.423 21.491 571.423 22.97V24.6394L567.272 24.6458V22.97Z"
            fill="#A3A3A3"
          />
        </g>
        <g className="mix-blend-luminosity">
          <text
            x="580"
            y="30"
            fill="#A3A3A3"
            fontSize="12"
            fontFamily="Arial, sans-serif"
          >
            {url}
          </text>
        </g>
        {mode === "default" ? (
          <>
            <g className="mix-blend-luminosity">
              <path
                d="M265.5 33.8984C265.641 33.8984 265.852 33.8516 266.047 33.7422C270.547 31.2969 272.109 30.1641 272.109 27.3203V21.4219C272.109 20.4844 271.742 20.1484 270.961 19.8125C270.094 19.4453 267.18 18.4297 266.328 18.1406C266.07 18.0547 265.766 18 265.5 18C265.234 18 264.93 18.0703 264.672 18.1406C263.82 18.3828 260.906 19.4531 260.039 19.8125C259.258 20.1406 258.891 20.4844 258.891 21.4219V27.3203C258.891 30.1641 260.461 31.2812 264.945 33.7422C265.148 33.8516 265.359 33.8984 265.5 33.8984ZM265.922 19.5781C266.945 19.9766 269.172 20.7656 270.344 21.1875C270.562 21.2656 270.617 21.3828 270.617 21.6641V27.0234C270.617 29.3125 269.469 29.9375 265.945 32.0625C265.727 32.1875 265.617 32.2344 265.508 32.2344V19.4844C265.617 19.4844 265.734 19.5156 265.922 19.5781Z"
                fill="#A3A3A3"
              />
            </g>
            <g className="mix-blend-luminosity">
              <path
                d="M936.273 24.9766C936.5 24.9766 936.68 24.9062 936.82 24.7578L940.023 21.5312C940.195 21.3594 940.273 21.1719 940.273 20.9531C940.273 20.7422 940.188 20.5391 940.023 20.3828L936.82 17.125C936.68 16.9688 936.5 16.8906 936.273 16.8906C935.852 16.8906 935.516 17.2422 935.516 17.6719C935.516 17.8828 935.594 18.0547 935.727 18.2031L937.594 20.0312C937.227 19.9766 936.852 19.9453 936.477 19.9453C932.609 19.9453 929.516 23.0391 929.516 26.9141C929.516 30.7891 932.633 33.9062 936.5 33.9062C940.375 33.9062 943.484 30.7891 943.484 26.9141C943.484 26.4453 943.156 26.1094 942.688 26.1094C942.234 26.1094 941.93 26.4453 941.93 26.9141C941.93 29.9297 939.516 32.3516 936.5 32.3516C933.492 32.3516 931.07 29.9297 931.07 26.9141C931.07 23.875 933.469 21.4688 936.477 21.4688C936.984 21.4688 937.453 21.5078 937.867 21.5781L935.734 23.6875C935.594 23.8281 935.516 24 935.516 24.2109C935.516 24.6406 935.852 24.9766 936.273 24.9766Z"
                fill="#A3A3A3"
              />
            </g>
            <g className="mix-blend-luminosity">
              <path
                d="M1134 33.0156C1134.49 33.0156 1134.89 32.6094 1134.89 32.1484V27.2578H1139.66C1140.13 27.2578 1140.54 26.8594 1140.54 26.3672C1140.54 25.8828 1140.13 25.4766 1139.66 25.4766H1134.89V20.5859C1134.89 20.1172 1134.49 19.7188 1134 19.7188C1133.52 19.7188 1133.11 20.1172 1133.11 20.5859V25.4766H1128.34C1127.88 25.4766 1127.46 25.8828 1127.46 26.3672C1127.46 26.8594 1127.88 27.2578 1128.34 27.2578H1133.11V32.1484C1133.11 32.6094 1133.52 33.0156 1134 33.0156Z"
                fill="#A3A3A3"
              />
            </g>
            <g className="mix-blend-luminosity">
              <path
                d="M1161.8 31.0703H1163.23V32.375C1163.23 34.0547 1164.12 34.9219 1165.81 34.9219H1174.2C1175.89 34.9219 1176.77 34.0547 1176.77 32.3828V24.0469C1176.77 22.375 1175.89 21.5 1174.2 21.5H1172.77V20.2578C1172.77 18.5859 1171.88 17.7109 1170.19 17.7109H1161.8C1160.1 17.7109 1159.23 18.5781 1159.23 20.2578V28.5234C1159.23 30.1953 1160.1 31.0703 1161.8 31.0703ZM1161.9 29.5078C1161.18 29.5078 1160.78 29.1328 1160.78 28.3828V20.3984C1160.78 19.6406 1161.18 19.2656 1161.9 19.2656H1170.09C1170.8 19.2656 1171.2 19.6406 1171.2 20.3984V21.5H1165.81C1164.12 21.5 1163.23 22.375 1163.23 24.0469V29.5078H1161.9ZM1165.91 33.3672C1165.19 33.3672 1164.8 32.9922 1164.8 32.2422V24.1875C1164.8 23.4297 1165.19 23.0625 1165.91 23.0625H1174.1C1174.81 23.0625 1175.21 23.4297 1175.21 24.1875V32.2422C1175.21 32.9922 1174.81 33.3672 1174.1 33.3672H1165.91Z"
                fill="#A3A3A3"
              />
            </g>
            <g className="mix-blend-luminosity">
              <path
                d="M1099.51 28.4141C1099.91 28.4141 1100.24 28.0859 1100.24 27.6953V19.8359L1100.18 18.6797L1100.66 19.25L1101.75 20.4141C1101.88 20.5547 1102.06 20.625 1102.24 20.625C1102.6 20.625 1102.9 20.3672 1102.9 20C1102.9 19.8047 1102.82 19.6641 1102.69 19.5312L1100.06 17.0078C1099.88 16.8203 1099.7 16.7578 1099.51 16.7578C1099.32 16.7578 1099.14 16.8203 1098.95 17.0078L1096.33 19.5312C1096.2 19.6641 1096.12 19.8047 1096.12 20C1096.12 20.3672 1096.41 20.625 1096.77 20.625C1096.95 20.625 1097.14 20.5547 1097.27 20.4141L1098.35 19.25L1098.84 18.6719L1098.78 19.8359V27.6953C1098.78 28.0859 1099.11 28.4141 1099.51 28.4141ZM1095 34.6562H1104C1105.7 34.6562 1106.57 33.7812 1106.57 32.1094V24.4297C1106.57 22.7578 1105.7 21.8828 1104 21.8828H1101.89V23.4375H1103.9C1104.61 23.4375 1105.02 23.8125 1105.02 24.5625V31.9688C1105.02 32.7188 1104.61 33.0938 1103.9 33.0938H1095.1C1094.38 33.0938 1093.98 32.7188 1093.98 31.9688V24.5625C1093.98 23.8125 1094.38 23.4375 1095.1 23.4375H1097.13V21.8828H1095C1093.31 21.8828 1092.43 22.75 1092.43 24.4297V32.1094C1092.43 33.7812 1093.31 34.6562 1095 34.6562Z"
                fill="#A3A3A3"
              />
            </g>
            <g className="mix-blend-luminosity">
              <path
                d="M99.5703 33.6016H112.938C114.633 33.6016 115.516 32.7266 115.516 31.0547V21.5469C115.516 19.875 114.633 19 112.938 19H99.5703C97.8828 19 97 19.8672 97 21.5469V31.0547C97 32.7266 97.8828 33.6016 99.5703 33.6016ZM99.6719 32.0469C98.9531 32.0469 98.5547 31.6719 98.5547 30.9141V21.6875C98.5547 20.9297 98.9531 20.5547 99.6719 20.5547H103.234V32.0469H99.6719ZM112.836 20.5547C113.555 20.5547 113.953 20.9297 113.953 21.6875V30.9141C113.953 31.6719 113.555 32.0469 112.836 32.0469H104.711V20.5547H112.836ZM101.703 23.4141C101.984 23.4141 102.219 23.1719 102.219 22.9062C102.219 22.6406 101.984 22.4062 101.703 22.4062H100.102C99.8203 22.4062 99.5859 22.6406 99.5859 22.9062C99.5859 23.1719 99.8203 23.4141 100.102 23.4141H101.703ZM101.703 25.5156C101.984 25.5156 102.219 25.2812 102.219 25.0078C102.219 24.7422 101.984 24.5078 101.703 24.5078H100.102C99.8203 24.5078 99.5859 24.7422 99.5859 25.0078C99.5859 25.2812 99.8203 25.5156 100.102 25.5156H101.703ZM101.703 27.6094C101.984 27.6094 102.219 27.3828 102.219 27.1094C102.219 26.8438 101.984 26.6172 101.703 26.6172H100.102C99.8203 26.6172 99.5859 26.8438 99.5859 27.1094C99.5859 27.3828 99.8203 27.6094 100.102 27.6094H101.703Z"
                fill="#A3A3A3"
              />
            </g>
            <g className="mix-blend-luminosity">
              <path
                d="M143.914 32.5938C144.094 32.7656 144.312 32.8594 144.562 32.8594C145.086 32.8594 145.492 32.4531 145.492 31.9375C145.492 31.6797 145.391 31.4453 145.211 31.2656L139.742 25.9219L145.211 20.5938C145.391 20.4141 145.492 20.1719 145.492 19.9219C145.492 19.4062 145.086 19 144.562 19C144.312 19 144.094 19.0938 143.922 19.2656L137.844 25.2031C137.625 25.4062 137.516 25.6562 137.516 25.9297C137.516 26.2031 137.625 26.4375 137.836 26.6484L143.914 32.5938Z"
                fill="#A3A3A3"
              />
            </g>
            <g className="mix-blend-luminosity">
              <path
                d="M168.422 32.8594C168.68 32.8594 168.891 32.7656 169.07 32.5938L175.148 26.6562C175.359 26.4375 175.469 26.2109 175.469 25.9297C175.469 25.6562 175.367 25.4141 175.148 25.2109L169.07 19.2656C168.891 19.0938 168.68 19 168.422 19C167.898 19 167.492 19.4062 167.492 19.9219C167.492 20.1719 167.602 20.4141 167.773 20.5938L173.25 25.9375L167.773 31.2656C167.594 31.4531 167.492 31.6797 167.492 31.9375C167.492 32.4531 167.898 32.8594 168.422 32.8594Z"
                fill="#A3A3A3"
              />
            </g>
          </>
        ) : null}
        {imageSrc && (
          <image
            href={imageSrc}
            width="1200"
            height="700"
            x="1"
            y="52"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#roundedBottom)"
          />
        )}
        {videoSrc && (
          <foreignObject
            x="1"
            y="52"
            width="1200"
            height="700"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#roundedBottom)"
          >
            <video
              className="size-full overflow-hidden object-cover"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
          </foreignObject>
        )}
      </g>
      <defs>
        <clipPath id="path0">
          <rect width={width} height={height} fill="white" />
        </clipPath>
        <clipPath id="roundedBottom">
          <path
            d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

``

## src\components\magicui\ripple.tsx

``tsx
import React, { ComponentPropsWithoutRef, CSSProperties } from "react";

import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = "solid";

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full border bg-foreground/25 shadow-xl`}
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                borderColor: `var(--foreground)`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

``

## src\components\magicui\morphing-text.tsx

``tsx
"use client";

import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const morphTime = 1.5;
const cooldownTime = 0.5;

const useMorphingText = (texts: string[]) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(new Date());

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2) return;

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(
        8 / invertedFraction - 8,
        100,
      )}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      current1.textContent = texts[textIndexRef.current % texts.length];
      current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
    },
    [texts],
  );

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
      textIndexRef.current++;
    }
  }, [setStyles]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (current1 && current2) {
      current2.style.filter = "none";
      current2.style.opacity = "100%";
      current1.style.filter = "none";
      current1.style.opacity = "0%";
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };

    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [doMorph, doCooldown]);

  return { text1Ref, text2Ref };
};

interface MorphingTextProps {
  className?: string;
  texts: string[];
}

const Texts: React.FC<Pick<MorphingTextProps, "texts">> = ({ texts }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts);
  return (
    <>
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text1Ref}
      />
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text2Ref}
      />
    </>
  );
};

const SvgFilters: React.FC = () => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
);

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
}) => (
  <div
    className={cn(
      "relative mx-auto h-16 w-full max-w-screen-md text-center font-sans text-[40pt] font-bold leading-none [filter:url(#threshold)_blur(0.6px)] md:h-24 lg:text-[6rem]",
      className,
    )}
  >
    <Texts texts={texts} />
    <SvgFilters />
  </div>
);

``

## src\components\magicui\meteors.tsx

``tsx
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        "s",
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          style={{ ...style }}
          className={cn(
            "pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
            className,
          )}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

``

## src\components\magicui\iphone-15-pro.tsx

``tsx
import { SVGProps } from "react";

export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
  videoSrc?: string;
}

export default function Iphone15Pro({
  width = 433,
  height = 882,
  src,
  videoSrc,
  ...props
}: Iphone15ProProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
        className="fill-white dark:fill-[#262626]"
      />
      <path
        opacity="0.5"
        d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
        className="fill-[#E5E5E5] stroke-[#E5E5E5] stroke-[0.5] dark:fill-[#404040] dark:stroke-[#404040]"
      />

      {src && (
        <image
          href={src}
          x="21.25"
          y="19.25"
          width="389.5"
          height="843.5"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedCorners)"
        />
      )}
      {videoSrc && (
        <foreignObject x="21.25" y="19.25" width="389.5" height="843.5">
          <video
            className="size-full overflow-hidden rounded-[55.75px] object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </foreignObject>
      )}
      <path
        d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
        className="fill-[#F5F5F5] dark:fill-[#262626]"
      />
      <path
        d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
        className="fill-[#F5F5F5] dark:fill-[#262626]"
      />
      <path
        d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <defs>
        <clipPath id="roundedCorners">
          <rect
            x="21.25"
            y="19.25"
            width="389.5"
            height="843.5"
            rx="55.75"
            ry="55.75"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

``

## src\components\magicui\interactive-hover-button.tsx

``tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

``

## src\components\magicui\icon-cloud.tsx

``tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

interface Icon {
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  id: number;
}

interface IconCloudProps {
  icons?: React.ReactNode[];
  images?: string[];
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function IconCloud({ icons, images }: IconCloudProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [iconPositions, setIconPositions] = useState<Icon[]>([]);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState<{
    x: number;
    y: number;
    startX: number;
    startY: number;
    distance: number;
    startTime: number;
    duration: number;
  } | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const rotationRef = useRef(rotation);
  const iconCanvasesRef = useRef<HTMLCanvasElement[]>([]);
  const imagesLoadedRef = useRef<boolean[]>([]);

  // Create icon canvases once when icons/images change
  useEffect(() => {
    if (!icons && !images) return;

    const items = icons || images || [];
    imagesLoadedRef.current = new Array(items.length).fill(false);

    const newIconCanvases = items.map((item, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = 40;
      offscreen.height = 40;
      const offCtx = offscreen.getContext("2d");

      if (offCtx) {
        if (images) {
          // Handle image URLs directly
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = items[index] as string;
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);

            // Create circular clipping path
            offCtx.beginPath();
            offCtx.arc(20, 20, 20, 0, Math.PI * 2);
            offCtx.closePath();
            offCtx.clip();

            // Draw the image
            offCtx.drawImage(img, 0, 0, 40, 40);

            imagesLoadedRef.current[index] = true;
          };
        } else {
          // Handle SVG icons
          offCtx.scale(0.4, 0.4);
          const svgString = renderToString(item as React.ReactElement);
          const img = new Image();
          img.src = "data:image/svg+xml;base64," + btoa(svgString);
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
            offCtx.drawImage(img, 0, 0);
            imagesLoadedRef.current[index] = true;
          };
        }
      }
      return offscreen;
    });

    iconCanvasesRef.current = newIconCanvases;
  }, [icons, images]);

  // Generate initial icon positions on a sphere
  useEffect(() => {
    const items = icons || images || [];
    const newIcons: Icon[] = [];
    const numIcons = items.length || 20;

    // Fibonacci sphere parameters
    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;

      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      newIcons.push({
        x: x * 100,
        y: y * 100,
        z: z * 100,
        scale: 1,
        opacity: 1,
        id: i,
      });
    }
    setIconPositions(newIcons);
  }, [icons, images]);

  // Handle mouse events
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || !canvasRef.current) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    iconPositions.forEach((icon) => {
      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);
      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);

      const rotatedX = icon.x * cosY - icon.z * sinY;
      const rotatedZ = icon.x * sinY + icon.z * cosY;
      const rotatedY = icon.y * cosX + rotatedZ * sinX;

      const screenX = canvasRef.current!.width / 2 + rotatedX;
      const screenY = canvasRef.current!.height / 2 + rotatedY;

      const scale = (rotatedZ + 200) / 300;
      const radius = 20 * scale;
      const dx = x - screenX;
      const dy = y - screenY;

      if (dx * dx + dy * dy < radius * radius) {
        const targetX = -Math.atan2(
          icon.y,
          Math.sqrt(icon.x * icon.x + icon.z * icon.z),
        );
        const targetY = Math.atan2(icon.x, icon.z);

        const currentX = rotationRef.current.x;
        const currentY = rotationRef.current.y;
        const distance = Math.sqrt(
          Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2),
        );

        const duration = Math.min(2000, Math.max(800, distance * 1000));

        setTargetRotation({
          x: targetX,
          y: targetY,
          startX: currentX,
          startY: currentY,
          distance,
          startTime: performance.now(),
          duration,
        });
        return;
      }
    });

    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    }

    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;

      rotationRef.current = {
        x: rotationRef.current.x + deltaY * 0.002,
        y: rotationRef.current.y + deltaX * 0.002,
      };

      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Animation and rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      const dx = mousePos.x - centerX;
      const dy = mousePos.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = 0.003 + (distance / maxDistance) * 0.01;

      if (targetRotation) {
        const elapsed = performance.now() - targetRotation.startTime;
        const progress = Math.min(1, elapsed / targetRotation.duration);
        const easedProgress = easeOutCubic(progress);

        rotationRef.current = {
          x:
            targetRotation.startX +
            (targetRotation.x - targetRotation.startX) * easedProgress,
          y:
            targetRotation.startY +
            (targetRotation.y - targetRotation.startY) * easedProgress,
        };

        if (progress >= 1) {
          setTargetRotation(null);
        }
      } else if (!isDragging) {
        rotationRef.current = {
          x: rotationRef.current.x + (dy / canvas.height) * speed,
          y: rotationRef.current.y + (dx / canvas.width) * speed,
        };
      }

      iconPositions.forEach((icon, index) => {
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        const rotatedX = icon.x * cosY - icon.z * sinY;
        const rotatedZ = icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX + rotatedZ * sinX;

        const scale = (rotatedZ + 200) / 300;
        const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));

        ctx.save();
        ctx.translate(
          canvas.width / 2 + rotatedX,
          canvas.height / 2 + rotatedY,
        );
        ctx.scale(scale, scale);
        ctx.globalAlpha = opacity;

        if (icons || images) {
          // Only try to render icons/images if they exist
          if (
            iconCanvasesRef.current[index] &&
            imagesLoadedRef.current[index]
          ) {
            ctx.drawImage(iconCanvasesRef.current[index], -20, -20, 40, 40);
          }
        } else {
          // Show numbered circles if no icons/images are provided
          ctx.beginPath();
          ctx.arc(0, 0, 20, 0, Math.PI * 2);
          ctx.fillStyle = "#4444ff";
          ctx.fill();
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = "16px Arial";
          ctx.fillText(`${icon.id + 1}`, 0, 0);
        }

        ctx.restore();
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [icons, images, iconPositions, isDragging, mousePos, targetRotation]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="rounded-lg"
      aria-label="Interactive 3D Icon Cloud"
      role="img"
    />
  );
}

``

## src\components\magicui\hyper-text.tsx

``tsx
"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CharacterSet = string[] | readonly string[];

interface HyperTextProps extends MotionProps {
  /** The text content to be animated */
  children: string;
  /** Optional className for styling */
  className?: string;
  /** Duration of the animation in milliseconds */
  duration?: number;
  /** Delay before animation starts in milliseconds */
  delay?: number;
  /** Component to render as - defaults to div */
  as?: React.ElementType;
  /** Whether to start animation when element comes into view */
  startOnView?: boolean;
  /** Whether to trigger animation on hover */
  animateOnHover?: boolean;
  /** Custom character set for scramble effect. Defaults to uppercase alphabet */
  characterSet?: CharacterSet;
}

const DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
) as readonly string[];

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export function HyperText({
  children,
  className,
  duration = 800,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET,
  ...props
}: HyperTextProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayText, setDisplayText] = useState<string[]>(() =>
    children.split(""),
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const iterationCount = useRef(0);
  const elementRef = useRef<HTMLElement>(null);

  const handleAnimationTrigger = () => {
    if (animateOnHover && !isAnimating) {
      iterationCount.current = 0;
      setIsAnimating(true);
    }
  };

  // Handle animation start based on view or delay
  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setIsAnimating(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsAnimating(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  // Handle scramble animation
  useEffect(() => {
    if (!isAnimating) return;

    const maxIterations = children.length;
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      iterationCount.current = progress * maxIterations;

      setDisplayText((currentText) =>
        currentText.map((letter, index) =>
          letter === " "
            ? letter
            : index <= iterationCount.current
              ? children[index]
              : characterSet[getRandomInt(characterSet.length)],
        ),
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [children, duration, isAnimating, characterSet]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("overflow-hidden py-2 text-4xl font-bold", className)}
      onMouseEnter={handleAnimationTrigger}
      {...props}
    >
      <AnimatePresence>
        {displayText.map((letter, index) => (
          <motion.span
            key={index}
            className={cn("font-mono", letter === " " ? "w-3" : "")}
          >
            {letter.toUpperCase()}
          </motion.span>
        ))}
      </AnimatePresence>
    </MotionComponent>
  );
}

``

## src\components\magicui\Highlighter.tsx

``tsx
"use client";

import { useEffect, useRef, useState } from "react";
import type React from "react";
import { annotate } from "rough-notation";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean; // if true: show only when in view
}

function useElementInView<T extends Element>(
  ref: React.RefObject<T | null>,
  opts?: { once?: boolean; rootMargin?: string }
) {
  const { once = true, rootMargin = "-10%" } = opts ?? {};
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (inView && once) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, once, rootMargin]);

  return inView;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const annotationRef = useRef<ReturnType<typeof annotate> | null>(null);

  const inView = useElementInView(elementRef, { once: true, rootMargin: "-10%" });
  const shouldShow = !isView || inView;

  useEffect(() => {
    if (!shouldShow) return;

    const el = elementRef.current;
    if (!el) return;

    if (annotationRef.current) {
      try {
        annotationRef.current.remove();
      } catch {}
      annotationRef.current = null;
    }

    const annotation = annotate(el, {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    });

    annotationRef.current = annotation;
    annotation.show();

    const ro = new ResizeObserver(() => {
      if (!annotationRef.current) return;
      annotationRef.current.hide();
      annotationRef.current.show();
    });

    ro.observe(el);

    return () => {
      ro.disconnect();
      if (annotationRef.current) {
        try {
          annotationRef.current.remove();
        } catch {}
        annotationRef.current = null;
      }
    };
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}

``

## src\components\magicui\globe.tsx

``tsx
"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

``

## src\components\magicui\file-tree.tsx

``tsx
"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react";
import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type TreeViewElement = {
  id: string;
  name: string;
  isSelectable?: boolean;
  children?: TreeViewElement[];
};

type TreeContextProps = {
  selectedId: string | undefined;
  expandedItems: string[] | undefined;
  indicator: boolean;
  handleExpand: (id: string) => void;
  selectItem: (id: string) => void;
  setExpandedItems?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  direction: "rtl" | "ltr";
};

const TreeContext = createContext<TreeContextProps | null>(null);

const useTree = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error("useTree must be used within a TreeProvider");
  }
  return context;
};

interface TreeViewComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

type Direction = "rtl" | "ltr" | undefined;

type TreeViewProps = {
  initialSelectedId?: string;
  indicator?: boolean;
  elements?: TreeViewElement[];
  initialExpandedItems?: string[];
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
} & TreeViewComponentProps;

const Tree = forwardRef<HTMLDivElement, TreeViewProps>(
  (
    {
      className,
      elements,
      initialSelectedId,
      initialExpandedItems,
      children,
      indicator = true,
      openIcon,
      closeIcon,
      dir,
      ...props
    },
    ref,
  ) => {
    const [selectedId, setSelectedId] = useState<string | undefined>(
      initialSelectedId,
    );
    const [expandedItems, setExpandedItems] = useState<string[] | undefined>(
      initialExpandedItems,
    );

    const selectItem = useCallback((id: string) => {
      setSelectedId(id);
    }, []);

    const handleExpand = useCallback((id: string) => {
      setExpandedItems((prev) => {
        if (prev?.includes(id)) {
          return prev.filter((item) => item !== id);
        }
        return [...(prev ?? []), id];
      });
    }, []);

    const expandSpecificTargetedElements = useCallback(
      (elements?: TreeViewElement[], selectId?: string) => {
        if (!elements || !selectId) return;
        const findParent = (
          currentElement: TreeViewElement,
          currentPath: string[] = [],
        ) => {
          const isSelectable = currentElement.isSelectable ?? true;
          const newPath = [...currentPath, currentElement.id];
          if (currentElement.id === selectId) {
            if (isSelectable) {
              setExpandedItems((prev) => [...(prev ?? []), ...newPath]);
            } else {
              if (newPath.includes(currentElement.id)) {
                newPath.pop();
                setExpandedItems((prev) => [...(prev ?? []), ...newPath]);
              }
            }
            return;
          }
          if (
            isSelectable &&
            currentElement.children &&
            currentElement.children.length > 0
          ) {
            currentElement.children.forEach((child) => {
              findParent(child, newPath);
            });
          }
        };
        elements.forEach((element) => {
          findParent(element);
        });
      },
      [],
    );

    useEffect(() => {
      if (initialSelectedId) {
        expandSpecificTargetedElements(elements, initialSelectedId);
      }
    }, [initialSelectedId, elements]);

    const direction = dir === "rtl" ? "rtl" : "ltr";

    return (
      <TreeContext.Provider
        value={{
          selectedId,
          expandedItems,
          handleExpand,
          selectItem,
          setExpandedItems,
          indicator,
          openIcon,
          closeIcon,
          direction,
        }}
      >
        <div className={cn("size-full", className)}>
          <div
            ref={ref}
            className="relative h-full px-2"
            dir={dir as Direction}
          >
            <AccordionPrimitive.Root
              {...props}
              type="multiple"
              defaultValue={expandedItems}
              value={expandedItems}
              className="flex flex-col gap-1"
              onValueChange={(value) =>
                setExpandedItems((prev) => [...(prev ?? []), value[0]])
              }
              dir={dir as Direction}
            >
              {children}
            </AccordionPrimitive.Root>
          </div>
        </div>
      </TreeContext.Provider>
    );
  },
);

Tree.displayName = "Tree";

const TreeIndicator = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { direction } = useTree();

  return (
    <div
      dir={direction}
      ref={ref}
      className={cn(
        "absolute left-1.5 h-full w-px rounded-md bg-muted py-3 duration-300 ease-in-out hover:bg-slate-300 rtl:right-1.5",
        className,
      )}
      {...props}
    />
  );
});

TreeIndicator.displayName = "TreeIndicator";

interface FolderComponentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

type FolderProps = {
  expandedItems?: string[];
  element: string;
  isSelectable?: boolean;
  isSelect?: boolean;
} & FolderComponentProps;

const Folder = forwardRef<
  HTMLDivElement,
  FolderProps & React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      className,
      element,
      value,
      isSelectable = true,
      isSelect,
      children,
      ...props
    },
    ref,
  ) => {
    const {
      direction,
      handleExpand,
      expandedItems,
      indicator,
      setExpandedItems,
      openIcon,
      closeIcon,
    } = useTree();

    return (
      <AccordionPrimitive.Item
        {...props}
        value={value}
        className="relative h-full overflow-hidden"
      >
        <AccordionPrimitive.Trigger
          className={cn(
            `flex items-center gap-1 rounded-md text-sm`,
            className,
            {
              "bg-muted rounded-md": isSelect && isSelectable,
              "cursor-pointer": isSelectable,
              "cursor-not-allowed opacity-50": !isSelectable,
            },
          )}
          disabled={!isSelectable}
          onClick={() => handleExpand(value)}
        >
          {expandedItems?.includes(value)
            ? (openIcon ?? <FolderOpenIcon className="size-4" />)
            : (closeIcon ?? <FolderIcon className="size-4" />)}
          <span>{element}</span>
        </AccordionPrimitive.Trigger>
        <AccordionPrimitive.Content className="relative h-full overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          {element && indicator && <TreeIndicator aria-hidden="true" />}
          <AccordionPrimitive.Root
            dir={direction}
            type="multiple"
            className="ml-5 flex flex-col gap-1 py-1 rtl:mr-5 "
            defaultValue={expandedItems}
            value={expandedItems}
            onValueChange={(value) => {
              setExpandedItems?.((prev) => [...(prev ?? []), value[0]]);
            }}
          >
            {children}
          </AccordionPrimitive.Root>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    );
  },
);

Folder.displayName = "Folder";

const File = forwardRef<
  HTMLButtonElement,
  {
    value: string;
    handleSelect?: (id: string) => void;
    isSelectable?: boolean;
    isSelect?: boolean;
    fileIcon?: React.ReactNode;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    {
      value,
      className,
      handleSelect,
      isSelectable = true,
      isSelect,
      fileIcon,
      children,
      ...props
    },
    ref,
  ) => {
    const { direction, selectedId, selectItem } = useTree();
    const isSelected = isSelect ?? selectedId === value;
    return (
      <button
        ref={ref}
        type="button"
        disabled={!isSelectable}
        className={cn(
          "flex w-fit items-center gap-1 rounded-md pr-1 text-sm duration-200 ease-in-out rtl:pl-1 rtl:pr-0",
          {
            "bg-muted": isSelected && isSelectable,
          },
          isSelectable ? "cursor-pointer" : "cursor-not-allowed opacity-50",
          direction === "rtl" ? "rtl" : "ltr",
          className,
        )}
        onClick={() => selectItem(value)}
        {...props}
      >
        {fileIcon ?? <FileIcon className="size-4" />}
        {children}
      </button>
    );
  },
);

File.displayName = "File";

const CollapseButton = forwardRef<
  HTMLButtonElement,
  {
    elements: TreeViewElement[];
    expandAll?: boolean;
  } & React.HTMLAttributes<HTMLButtonElement>
>(({ className, elements, expandAll = false, children, ...props }, ref) => {
  const { expandedItems, setExpandedItems } = useTree();

  const expendAllTree = useCallback((elements: TreeViewElement[]) => {
    const expandTree = (element: TreeViewElement) => {
      const isSelectable = element.isSelectable ?? true;
      if (isSelectable && element.children && element.children.length > 0) {
        setExpandedItems?.((prev) => [...(prev ?? []), element.id]);
        element.children.forEach(expandTree);
      }
    };

    elements.forEach(expandTree);
  }, []);

  const closeAll = useCallback(() => {
    setExpandedItems?.([]);
  }, []);

  useEffect(() => {
    console.log(expandAll);
    if (expandAll) {
      expendAllTree(elements);
    }
  }, [expandAll]);

  return (
    <Button
      variant={"ghost"}
      className="absolute bottom-1 right-2 h-8 w-fit p-1"
      onClick={
        expandedItems && expandedItems.length > 0
          ? closeAll
          : () => expendAllTree(elements)
      }
      ref={ref}
      {...props}
    >
      {children}
      <span className="sr-only">Toggle</span>
    </Button>
  );
});

CollapseButton.displayName = "CollapseButton";

export { CollapseButton, File, Folder, Tree, type TreeViewElement };

``

## src\components\magicui\AnimatedGridPatternProps.tsx

``tsx
"use client"

import {
  ComponentPropsWithoutRef,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export interface AnimatedGridPatternProps extends ComponentPropsWithoutRef<"svg"> {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: number
  numSquares?: number
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId()
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [squares, setSquares] = useState(() => generateSquares(numSquares))

  function getPos() {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ]
  }

  // Adjust the generateSquares function to return objects with an id, x, and y
  function generateSquares(count: number) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }))
  }

  // Function to update a single square's position
  const updateSquarePosition = (id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(),
            }
          : sq
      )
    )
  }

  // Update squares to animate in
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares))
    }
  }, [dimensions, numSquares, generateSquares])

  // Resize observer to update container dimensions
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      }
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current)
      }
    }
  }, [containerRef])

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [x, y], id }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            key={`${x}-${y}-${index}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  )
}

``

## src\components\magicui\animated-list.tsx

``tsx
"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring" as const, stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children],
    );

    useEffect(() => {
      if (index < childrenArray.length - 1) {
        const timeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }, [index, delay, childrenArray.length]);

    const itemsToShow = useMemo(() => {
      const result = childrenArray.slice(0, index + 1).reverse();
      return result;
    }, [index, childrenArray]);

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";

``

## src\components\sections\growth-section.tsx

``tsx
"use client";

import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";

export function GrowthSection() {
  const { title, description, items } = siteConfig.growthSection;

  return (
    <section
      id="growth"
      className="flex flex-col items-center justify-center w-full relative"
    >
      <div className="border-x relative">
        {/* Decorative borders */}
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-secondary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-secondary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

        {/* Section Header */}
        <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            {title}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            {description}
          </p>
        </SectionHeader>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x md:divide-y-0">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-end gap-2 p-6 min-h-[500px]"
            >
              {item.content}
              <h3 className="text-lg tracking-tighter font-semibold">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

``

## src\components\sections\footer-section.tsx

``tsx
// "use client";

// import { useState } from "react";
// import { Icons } from "@/components/icons";
// import { FlickeringGrid } from "@/components/ui/flickering-grid";
// import { useMediaQuery } from "@/hooks/use-media-query";
// import { siteConfig } from "@/lib/site";
// import { ChevronRightIcon } from "@radix-ui/react-icons";
// import Link from "next/link";

// export function FooterSection() {
//   const tablet = useMediaQuery("(max-width: 1024px)");

//   return (
//     <footer id="footer" className="w-full pb-0">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between p-10">
//         {/* LEFT COLUMN */}
//         <div className="flex flex-col items-start justify-start gap-y-4 max-w-xs mx-0">
//           <Link href="/" className="flex items-center gap-2">
//             <Icons.logo className="size-8" />
//             <p className="text-xl font-semibold text-primary">Desnine Studio</p>
//           </Link>

//           <p className="text-sm tracking-tight text-muted-foreground font-medium">
//             {siteConfig.description}
//           </p>

//           {/* Newsletter directly under description */}
//           <NewsletterMini />
//         </div>

//         {/* RIGHT: NAV + SOCIALS */}
//         <div className="pt-5 md:w-1/2">
//           <div className="flex flex-row items-start justify-between md:flex-row md:items-start md:justify-between gap-y-5 lg:pl-10">
//             {/* Navigation */}
//             <ul className="flex flex-col gap-y-2">
//               <li className="mb-2 text-sm font-semibold text-primary">Navigation</li>

//               <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
//                 <Link href="/services">Services</Link>
//                 <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
//                   <ChevronRightIcon className="h-4 w-4" />
//                 </span>
//               </li>

//               <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
//                 <Link href="/work">Our Work</Link>
//                 <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
//                   <ChevronRightIcon className="h-4 w-4" />
//                 </span>
//               </li>

//               <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
//                 <Link href="/testimonial">Why Us?</Link>
//                 <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
//                   <ChevronRightIcon className="h-4 w-4" />
//                 </span>
//               </li>

//               <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
//                 <Link href="/contact">Contact Us</Link>
//                 <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
//                   <ChevronRightIcon className="h-4 w-4" />
//                 </span>
//               </li>

//               <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
//                 <Link href="/privacy-policy">Privacy Policy</Link>
//                 <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
//                   <ChevronRightIcon className="h-4 w-4" />
//                 </span>
//               </li>

//             </ul>

//             {/* Socials */}
//             <ul className="flex flex-col gap-y-2">
//               <li className="mb-2 text-sm font-semibold text-primary">Follow Us</li>

//               <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
//                 <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
//                   Linkedin
//                 </Link>
//                 <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
//                   <ChevronRightIcon className="h-4 w-4" />
//                 </span>
//               </li>

//               <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
//                 <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">
//                   Instagram
//                 </Link>
//                 <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
//                   <ChevronRightIcon className="h-4 w-4" />
//                 </span>
//               </li>

//               <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
//                 <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
//                   Twitter
//                 </Link>
//                 <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
//                   <ChevronRightIcon className="h-4 w-4" />
//                 </span>
//               </li>

//               <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
//                 <Link href={siteConfig.links.behance} target="_blank" rel="noopener noreferrer">
//                   Behance
//                 </Link>
//                 <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
//                   <ChevronRightIcon className="h-4 w-4" />
//                 </span>
//               </li>

//               <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
//                 <Link href={siteConfig.links.pinterest} target="_blank" rel="noopener noreferrer">
//                   Pinterest
//                 </Link>
//                 <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
//                   <ChevronRightIcon className="h-4 w-4" />
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Flickering grid (unchanged) */}
//       <div className="w-full h-48 md:h-64 relative mt-24 z-0">
//         <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
//         <div className="absolute inset-0 mx-6">
//           <FlickeringGrid
//             text={tablet ? "Desnine" : "Desnine All In One Agency"}
//             fontSize={tablet ? 70 : 90}
//             className="h-full w-full"
//             squareSize={2}
//             gridGap={tablet ? 2 : 3}
//             color="#6B7280"
//             maxOpacity={0.3}
//             flickerChance={0.1}
//           />
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* ---------------- Email Section ---------------- */

// function NewsletterMini() {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState<string | null>(null);
//   const [err, setErr] = useState<string | null>(null);

//   async function onSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setLoading(true);
//     setMsg(null);
//     setErr(null);

//     try {
//       const res = await fetch("/api/newsletter", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.ok) throw new Error(data.error || "Failed to subscribe");

//       setMsg("âœ… Thanks! Youâ€™re on the list.");
//       setEmail("");
//     } catch (error: any) {
//       setErr("âŒ " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <form onSubmit={onSubmit} className="w-full flex items-center gap-2">
//       <label htmlFor="newsletter-email" className="sr-only">
//         Email address
//       </label>
//       <input
//         id="newsletter-email"
//         type="email"
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Get the latest from Desnine Studio."
//         className="w-full max-w-xs bg-transparent border-b border-border text-sm px-0 py-2 placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
//       />
//       <button
//         type="submit"
//         disabled={loading}
//         aria-label="Submit email"
//         className="p-2 border border-border rounded transition 
//                   hover:bg-white hover:text-black hover:border-white 
//                   disabled:opacity-50"
//       >
//         <ChevronRightIcon className="h-4 w-4" />
//       </button>

//     </form>
//   );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/icons";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useMediaQuery } from "@/hooks/use-media-query";
import { siteConfig } from "@/lib/site";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

/* ---------------- Small plane animation ---------------- */
function PlaneTakeoff({ trigger }: { trigger: boolean }) {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          key="plane"
          initial={{ opacity: 0, x: -30, y: 30, rotate: -20 }}
          animate={{ opacity: 1, x: 260, y: -180, rotate: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1 bottom-1 z-20"
          aria-hidden
        >
          {/* simple paper-plane svg to avoid extra deps */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 2L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M22 2L15 22l-4-8-8-4L22 2Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- Footer ---------------- */
export function FooterSection() {
  const tablet = useMediaQuery("(max-width: 1024px)");
  const [plane, setPlane] = useState(false);

  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-10">
        {/* LEFT COLUMN */}
        <div className="relative flex flex-col items-start justify-start gap-y-4 max-w-xs mx-0">
          {/* plane lives in this column */}
          <PlaneTakeoff trigger={plane} />

          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="size-8" />
            <p className="text-xl font-semibold text-primary">Desnine Studio</p>
          </Link>

          <p className="text-sm tracking-tight text-muted-foreground font-medium">
            {siteConfig.description}
          </p>

          {/* Newsletter directly under description */}
          <NewsletterMini
            onSuccess={() => {
              setPlane(true);
              setTimeout(() => setPlane(false), 1400);
            }}
          />
        </div>

        {/* RIGHT: NAV + SOCIALS */}
        <div className="pt-5 md:w-1/2">
          <div className="flex flex-row items-start justify-between md:flex-row md:items-start md:justify-between gap-y-5 lg:pl-10">
            {/* Navigation */}
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-primary">Navigation</li>

              <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
                <Link href="/services">Services</Link>
                <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                  <ChevronRightIcon className="h-4 w-4" />
                </span>
              </li>

              <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
                <Link href="/work">Our Work</Link>
                <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                  <ChevronRightIcon className="h-4 w-4" />
                </span>
              </li>

              <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
                <Link href="/testimonial">Why Us?</Link>
                <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                  <ChevronRightIcon className="h-4 w-4" />
                </span>
              </li>

              <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
                <Link href="/contact">Contact Us</Link>
                <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                  <ChevronRightIcon className="h-4 w-4" />
                </span>
              </li>

              <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
                <Link href="/privacy-policy">Privacy Policy</Link>
                <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                  <ChevronRightIcon className="h-4 w-4" />
                </span>
              </li>
            </ul>

            {/* Socials */}
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-primary">Follow Us</li>

              <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
                <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  Linkedin
                </Link>
                <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                  <ChevronRightIcon className="h-4 w-4" />
                </span>
              </li>

              <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
                <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
                <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                  <ChevronRightIcon className="h-4 w-4" />
                </span>
              </li>

              <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
                <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter
                </Link>
                <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                  <ChevronRightIcon className="h-4 w-4" />
                </span>
              </li>

              <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
                <Link href={siteConfig.links.behance} target="_blank" rel="noopener noreferrer">
                  Behance
                </Link>
                <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                  <ChevronRightIcon className="h-4 w-4" />
                </span>
              </li>

              <li className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
                <Link href={siteConfig.links.pinterest} target="_blank" rel="noopener noreferrer">
                  Pinterest
                </Link>
                <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                  <ChevronRightIcon className="h-4 w-4" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Flickering grid (unchanged) */}
      <div className="w-full h-48 md:h-64 relative mt-24 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text={tablet ? "Desnine" : "Desnine All In One Agency"}
            fontSize={tablet ? 70 : 90}
            className="h-full w-full"
            squareSize={2}
            gridGap={tablet ? 2 : 3}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Email Section ---------------- */

function NewsletterMini({ onSuccess }: { onSuccess?: () => void }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    setErr(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to subscribe");

      setMsg("âœ… Thanks! Youâ€™re on the list.");
      setEmail("");
      onSuccess?.(); // trigger plane
    } catch (error: any) {
      setErr("âŒ " + (error?.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="w-full flex items-center gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Get the latest from Desnine Studio."
          className="w-full max-w-xs bg-transparent border-b border-border text-sm px-0 py-2 placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
        />
        <button
          type="submit"
          disabled={loading}
          aria-label="Submit email"
          className="p-2 border border-border rounded transition hover:bg-white hover:text-black hover:border-white disabled:opacity-50"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </form>

      {/* inline feedback */}
      <div className="mt-2 h-5 text-[12px] leading-5" aria-live="polite">
        {msg && <span className="text-green-600">{msg}</span>}
        {err && <span className="text-red-500">{err}</span>}
      </div>
    </div>
  );
}

``

## src\components\sections\feature-section.tsx

``tsx
import { SectionHeader } from "@/components/section-header";
import { Feature as FeatureComponent } from "@/components/ui/feature-slideshow";
import { siteConfig } from "@/lib/config";

export function FeatureSection() {
  const { title, description, items } = siteConfig.featureSection;

  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center gap-5 w-full relative"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          {title}
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          {description}
        </p>
      </SectionHeader>
      <div className="w-full h-full lg:h-[450px] flex items-center justify-center">
        <FeatureComponent
          collapseDelay={5000}
          linePosition="bottom"
          featureItems={items}
          lineColor="bg-secondary"
        />
      </div>
    </section>
  );
}

``

## src\components\sections\faq-section-2.tsx

``tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";

export function FAQSection() {
  const { faqSection } = siteConfig;

  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-center gap-10 pb-10 w-full relative"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          {faqSection.title}
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          {faqSection.description}
        </p>
      </SectionHeader>

      <div className="max-w-3xl w-full mx-auto px-10">
        <Accordion
          type="single"
          collapsible
          className="w-full border-b-0 grid gap-2"
        >
          {faqSection.faQitems.map((faq, index) => (
            <AccordionItem
              key={index}
              value={index.toString()}
              className="border-0 grid gap-2"
            >
              <AccordionTrigger className="border bg-accent border-border rounded-lg px-4 py-3.5 cursor-pointer no-underline hover:no-underline data-[state=open]:ring data-[state=open]:ring-primary/20">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-3 border text-primary rounded-lg bg-accent">
                <p className="text-primary font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

``

## src\components\sections\DesnineTrustBadge.tsx

``tsx
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const DESNINE_RED = "#B42B25";

// export function DesnineTrustBadge() {
//   return (
//     <div className="flex items-center gap-35">
      
//       {/* Left: Desnine logo (vertical spin) */}
//       <motion.div
//         className="flex items-center"
//         style={{ perspective: 800 }}
//         animate={{ rotateY: 360 }}
//         transition={{
//           duration: 4,
//           ease: "linear",
//           repeat: Infinity,
//         }}
//       >
//         <Image
//           src="/Desnine-logo.png"
//           alt="Desnine"
//           width={28}
//           height={28}
//           className="h-7 w-7 object-contain"
//         />
//       </motion.div>

//       {/* Right: animated stars + label */}
//       <div className="flex flex-col items-end gap-1">
//         <div className="flex gap-1">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <motion.svg
//               key={i}
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill={DESNINE_RED}
//               aria-hidden="true"
//               initial={{ opacity: 0.6, scale: 1 }}
//               animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
//               transition={{
//                 duration: 1.6,
//                 ease: "easeInOut",
//                 repeat: Infinity,
//                 delay: i * 0.15, // staggered stars
//               }}
//             >
//               <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//             </motion.svg>
//           ))}
//         </div>

//         <p className="text-xs text-muted-foreground">
//           Loved by Big Brands
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const DESNINE_RED = "#B42B25";

export function DesnineTrustBadge() {
  const router = useRouter();

  const goContact = () => {
    // App Router navigation
    router.push("/contact");

    // Fallback in case something blocks the router (overlay/form/etc.)
    setTimeout(() => {
      if (window.location.pathname !== "/contact") {
        window.location.href = "/contact";
      }
    }, 120);
  };

  return (
    <div className="relative z-10 flex items-center gap-25">
      {/* CTA BUTTON */}
      <motion.button
        type="button"
        onClick={goContact}
        className="relative z-50 inline-flex items-center rounded-full border px-4 py-2 text-xs font-medium select-none cursor-pointer pointer-events-auto"
        style={{
          color: DESNINE_RED,
          borderColor: DESNINE_RED,
        }}
        animate={{
          borderColor: [
            "rgba(180,43,37,0.4)",
            "rgba(180,43,37,1)",
            "rgba(180,43,37,0.4)",
          ],
          boxShadow: [
            "0 0 0px rgba(180,43,37,0)",
            "0 0 10px rgba(180,43,37,0.6)",
            "0 0 0px rgba(180,43,37,0)",
          ],
        }}
        // transition={{
        //   duration: 1.2,
        //   repeat: Infinity,
        //   ease: "easeInOut",
        // }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 18px rgba(180,43,37,0.9)",
        }}
        whileTap={{ scale: 0.96 }}
      >
        Get Your Free Quote
      </motion.button>

      {/* Stars + Label */}
      <div className="flex flex-col items-end gap-1">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.svg
              key={i}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill={DESNINE_RED}
              aria-hidden="true"
              className="pointer-events-none"
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
                repeat: Infinity,
                delay: i * 0.15,
              }}
            >
              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </motion.svg>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">Loved by Big Brands</p>
      </div>
    </div>
  );
}

``

## src\components\sections\cta-section.tsx

``tsx
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { Icons } from "@/components/icons";

export function CTASection() {
  const { ctaSection } = siteConfig;

  return (
    <section
      id="cta"
      className="flex flex-col items-center justify-center w-full px-5 md:px-10"
    >
      <div className="w-full">
        <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl bg-secondary relative z-20">
          <Image
            src={ctaSection.backgroundImage}
            alt="Agent CTA Background"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
            fill
            priority
          />
          <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
              {ctaSection.title}
            </h1>
            <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
              <Link
                href={ctaSection.button.href}
                className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md"
              >
                {ctaSection.button.text}
              </Link>
              <span className="text-white text-sm">{ctaSection.subtext}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Company Information Section */}
      <div className="w-full px-3 md:px-6 py-16">
        <div className="max-w-4xl mx-auto text-left">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 mb-8">
            <Icons.logo className="size-12 md:size-14" />
            <h2 className="text-lg md:text-xl font-semibold text-primary">
              Desnine
            </h2>
          </div>
          
          {/* Company Description */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
          Desnine is a multidisciplinary studio helping brands stand out through strong creative direction, clean aesthetics, and emotionally resonant visuals. 
          Based in Canada, we work globally.
          </p>
        </div>
      </div>
    </section>
  );
}

``

## src\components\sections\CostOfBadBranding.tsx

``tsx
type Step = {
  number: string;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "94%",
    desc: "Of first impressions are ruined by  poor design decisions.",
  },
  {
    number: "02",
    title: "60%",
    desc: "Of prospects will avoid your business  due to unprofessional branding.",
  },
  {
    number: "03",
    title: "23%",
    desc: "Of your potential revenue is lost  to inconsistent branding. ",
  },
  {
    number: "04",
    title: "5.0s",
    desc: "Of prospects will avoid your business  due to unprofessional branding.",
  },
  {
    number: "05",
    title: "Short Attention Span",
    desc: "You have seconds to impress â€” bad branding loses that moment.",
  },
  {
    number: "06",
    title: "Long-Term Damage",
    desc: "Fixing weak branding later costs more than doing it right from the start.",
  },
];

export function BadBrandingSection() {
  return (
    <section className="w-full bg-background px-10 md:px-10 lg:px-16 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex items-center gap-2 text-sm font-medium text-foreground/70">
          <span>Impact</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#7A0000]" />
        </div>

        <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground">
          The cost of
          <br />
          bad branding
          <span className="text-[#7A0000]">.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-foreground/60">
          Every touchpoint shapes perception. Weak branding silently costs trust,
          attention, and revenue.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {steps.slice(0, 4).map((step) => (
            <BadBrandingCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BadBrandingCard({ step }: { step: Step }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-transparent p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_12px_40px_rgba(0,0,0,0.35)]">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#7A0000]/10 blur-3xl" />
      </div>

      <div className="relative">
        {/* Big stat-style title */}
        <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-[#7A0000]">
          {step.title}
        </h3>

        {/* Supporting line */}
        <p className="mt-4 text-sm md:text-base text-foreground/60 leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

``

## src\components\sections\ContactSection.tsx

``tsx
"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen} >
      <AlertDialogTrigger asChild>
        <Button size="lg" className="h-12 px-8 text-base">
          <Send className="w-5 h-5 mr-2" />
          Send us a message
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">Get in touch</AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            Fill out the form below and we'll get back to you within 24 hours.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Message sent!</h3>
            <p className="text-muted-foreground">Thanks for reaching out. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project..."
                rows={4}
                required
              />
            </div>

            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <input
                type="checkbox"
                id="privacy"
                required
                className="mt-1"
              />
              <label htmlFor="privacy" className="leading-relaxed">
                I agree to the Privacy Policy and consent to being contacted about my inquiry.
              </label>
            </div>
          </form>
        )}

        {!submitted && (
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="min-w-[120px]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send message
                </>
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}

``

## src\components\sections\hero3-section.tsx

``tsx
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function Hero3Section() {
  const { hero3 } = siteConfig;

  return (
    <section
      id="hero3"
      className="relative w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-[600px] md:h-[800px] w-full rounded-b-xl 
          [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)]"
        ></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center px-6 py-15 max-w-3xl mx-auto gap-10">
        
        {/* Badge
        {hero2.badge && (
          <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            {hero3.badgeIcon}
            {hero3.badge}
          </p>
          
        )} */}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-center text-primary text-balance">
          {hero3.title}
        </h1>
         <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              {hero3.description}
            </p>
          </div>

       
      </div>
    </section>
  );
}

``

## src\components\sections\hero2-section.tsx

``tsx
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function Hero2Section() {
  const { hero2 } = siteConfig;

  return (
    <section
      id="hero2"
      className="relative w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-[600px] md:h-[800px] w-full rounded-b-xl 
          [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)]"
        ></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center px-6 py-15 max-w-3xl mx-auto gap-10">
        
        {/* Badge
        {hero2.badge && (
          <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            {hero2.badgeIcon}
            {hero2.badge}
          </p>
          
        )} */}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-center text-primary text-balance">
          {hero2.title}
        </h1>
         <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              {hero2.description}
            </p>
          </div>

       
      </div>
    </section>
  );
}

``

## src\components\sections\hero-video-section.tsx

``tsx
/*
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export function HeroVideoSection() {
  return (
    <div className="relative px-6 mt-10">
      <div className="relative size-full shadow-xl rounded-2xl overflow-hidden">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          // âœ… just pass the normal YouTube URL
          videoSrc="https://www.youtube.com/watch?v=i3PqLmo61RY"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/watch?v=i3PqLmo61RY"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
}
*/

// /src/components/sections/hero-video-section.tsx
import { useMemo } from "react";

function toLoopingYouTubeEmbed(url: string) {
  try {
    const u = new URL(url);
    let id = "";
    if (u.hostname.includes("youtu.be")) id = u.pathname.replace("/", "");
    else if (u.searchParams.get("v")) id = u.searchParams.get("v") || "";
    else if (u.pathname.includes("/embed/")) id = u.pathname.split("/").pop() || "";
    if (!id) return url;
    const embed = new URL(`https://www.youtube.com/embed/${id}`);
    embed.searchParams.set("autoplay", "1");
    embed.searchParams.set("mute", "1");
    embed.searchParams.set("playsinline", "1");
    embed.searchParams.set("loop", "1");
    embed.searchParams.set("playlist", id);
    embed.searchParams.set("controls", "0");
    embed.searchParams.set("modestbranding", "1");
    embed.searchParams.set("rel", "0");
    return embed.toString();
  } catch {
    return url;
  }
}

export function HeroVideoSection() {
  const embedSrc = useMemo(
    () => toLoopingYouTubeEmbed("https://www.youtube.com/watch?v=i3PqLmo61RY"),
    []
  );

  return (
    <div className="relative px-6 mt-10">
      <div className="relative size-full shadow-xl rounded-2xl overflow-hidden">
        <div className="relative isolate z-[1] aspect-video w-full overflow-hidden rounded-2xl border-2 border-white">
          <iframe
            title="Hero video"
            src={embedSrc}
            className="size-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  );
}

``

## src\components\sections\hero-section.tsx

``tsx


import { siteConfig } from "@/lib/config";
import { HeroVideoSection } from "./hero-video-section";
import { DesnineTrustBadge } from "./DesnineTrustBadge";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    
    <section id={"hero"} className="w-full relative">
      
      <div className="relative flex flex-col items-center w-full px-6">

        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"></div>
        </div>
        <div className="relative z-10 pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            {hero.badgeIcon}
            {hero.badge}
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            

            
            {/* <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-primary">
              {hero.title}
            </h1> */}
            

            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              {hero.description}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <DesnineTrustBadge />
        </div>
      </div>
      

      <HeroVideoSection />


    </section>
  );
}



``

## src\components\sections\howWeWork.tsx

``tsx
// "use client";

// import { siteConfig } from "@/lib/config";
// import Link from "next/link";


// interface HowWeWorkBentoSectionProps {
//   count?: number;
// }

// export function HowWeWorkBentoSection({ count }: HowWeWorkBentoSectionProps) {
//   const { howWeWork } = siteConfig;

//   const items = howWeWork.items ?? [];
//   const displayItems = count ? items.slice(0, count) : items;

//   return (
//     <section
//       id="howWeWork"
//       className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
//     >
//       <div className="border-x mx-5 md:mx-10 relative w-full">
//         {/* Side decorations (kept) */}
//         <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
//         <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />

//         {/* Header (no horizontal separator line) */}
//         <div className="pt-20 md:pt-24 pb-10 md:pb-12 px-5 md:px-10 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
//             {howWeWork.title}
//           </h2>
//           <p className="mt-3 text-muted-foreground max-w-2xl mx-auto font-medium">
//             {howWeWork.description}
//           </p>
//         </div>

//         {/* Items grid (bento style) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
//           {displayItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative
//                          before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-['']
//                          after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']
//                          group max-h-[400px]"
//             >
//               <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
//                 <div className="w-full h-full p-8 md:p-10 flex flex-col">
//                   <div className="text-sm font-semibold tracking-tight text-muted-foreground">
//                     STEP {item.id}
//                     <span className="ml-0.5 text-[#7A0000]">.</span>
//                   </div>

//                   <h3 className="mt-10 text-2xl md:text-3xl font-bold tracking-tight">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">
//                     {item.description}
//                   </p>

//                   <div className="flex-1" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom spacing */}
//         <div className="pb-16 md:pb-20" />
//       </div>
//     </section>
//   );
// }


"use client";

import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { SectionHeader } from "../section-header";


interface HowWeWorkBentoSectionProps {
  count?: number;
}

export function HowWeWorkBentoSection({ count }: HowWeWorkBentoSectionProps) {
  const { howWeWork } = siteConfig;

  const items = howWeWork.items ?? [];
  const displayItems = count ? items.slice(0, count) : items;

  return (
    <section
      id="bento"
      className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
    >
      <div className="border-x mx-5 md:mx-10 relative">
        {/* Background decorations */}
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>


        {/* Section header
        <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
            {howWeWork.title}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            {howWeWork.description}
          </p>
        </SectionHeader> */}


        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group cursor-pointer max-h-[400px]"
            >
              <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
                {item.content}
              </div>
              <div className="flex-1 flex-col gap-2 p-6">
                <h3 className="text-lg tracking-tighter font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

``

## src\components\sections\home-work-section.tsx

``tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

type WorkItem = {
  id?: number | string;
  title: string;
  description?: string;
  href: string;
  content?: React.ReactNode;
};

type Props = {
  count?: number;
  title?: string; // set "" to hide
  className?: string;
  itemsOverride?: WorkItem[];
};

export default function HomeProjectsSection({
  count,
  title = "Our Recent Work",
  className,
  itemsOverride,
}: Props) {
  const pathname = usePathname();

  const normalizePath = useCallback((href: string) => {
    try {
      const url = href?.startsWith("http")
        ? new URL(href)
        : new URL(href || "/", "https://example.com");

      let p = url.pathname || "/";
      if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
      return p;
    } catch {
      return href || "/";
    }
  }, []);

  const currentPath = useMemo(
    () => normalizePath(pathname || "/"),
    [pathname, normalizePath]
  );

  const rawItems: WorkItem[] =
    itemsOverride ?? (siteConfig?.workbentoSection?.items ?? []);

  const cards = useMemo(() => {
    const mapped = (rawItems ?? [])
      .filter(Boolean)
      .filter((it) => !!it?.href)
      .filter((it) => normalizePath(it.href) !== currentPath)
      .map((it) => ({
        title: it.title,
        href: normalizePath(it.href),
        node: it.content,
      }));

    return typeof count === "number" ? mapped.slice(0, count) : mapped;
  }, [rawItems, count, currentPath, normalizePath]);

  const isCarousel = cards.length > 2;

  // 1 on mobile, 2 on md+
  const [perView, setPerView] = useState(2);
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setPerView(mq.matches ? 1 : 2);

    update();

    // Safari fallback for older versions
    const anyMq = mq as any;
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } else if (typeof anyMq.addListener === "function") {
      anyMq.addListener(update);
      return () => anyMq.removeListener(update);
    }
  }, []);

  const pages = useMemo(() => {
    if (!isCarousel) return [];
    const out: Array<typeof cards> = [];
    for (let i = 0; i < cards.length; i += perView) {
      out.push(cards.slice(i, i + perView));
    }
    return out;
  }, [cards, perView, isCarousel]);

  const [page, setPage] = useState(0);

  // keep page valid when perView/pages change
  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(pages.length - 1, 0)));
  }, [pages.length]);

  const prev = useCallback(() => {
    setPage((p) => (pages.length ? (p - 1 + pages.length) % pages.length : 0));
  }, [pages.length]);

  const next = useCallback(() => {
    setPage((p) => (pages.length ? (p + 1) % pages.length : 0));
  }, [pages.length]);

  const btnBase =
    "p-2 rounded-full bg-black/60 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/70";

  return (
    <section className={`relative w-full py-10 ${className ?? ""}`}>
      {/* keep inside your border container */}
      <div className="border-x mx-5 md:mx-10 px-5 md:px-10">
        {title ? (
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            {title}
          </h2>
        ) : null}

        {/* â‰¤ 2 items â†’ simple list (one per row) */}
        {!isCarousel ? (
          <div className="space-y-6">
            {cards.map((c, i) => (
              <ProjectCard key={`${c.href}-${i}`} title={c.title} href={c.href}>
                {c.node}
              </ProjectCard>
            ))}

            {cards.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No recent projects yet.
              </p>
            ) : null}
          </div>
        ) : (
          // > 2 items â†’ carousel
          <div className="relative">
            {/* viewport */}
            <div className="overflow-hidden">
              {/* track */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {pages.map((group, gi) => (
                  <div key={gi} className="min-w-full shrink-0">
                    <div
                      className={`grid gap-4 ${
                        perView === 1 ? "grid-cols-1" : "grid-cols-2"
                      }`}
                    >
                      {group.map((c, i) => (
                        <ProjectCard
                          key={`${gi}-${c.href}-${i}`}
                          title={c.title}
                          href={c.href}
                        >
                          {c.node}
                        </ProjectCard>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* arrows */}
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 ${btnBase}`}
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              type="button"
              aria-label="Next"
              onClick={next}
              className={`absolute right-0 top-1/2 -translate-y-1/2 ${btnBase}`}
            >
              <ChevronRight className="text-white" />
            </button>

            {/* dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setPage(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === page ? "bg-white" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.02] transition will-change-transform"
    >
      {/* Media area */}
      <div className="relative w-full h-64">
        <div className="absolute inset-0">
          <div className="w-full h-full">{children}</div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
      </div>
    </Link>
  );
}

``

## src\components\sections\navbar.tsx

``tsx
// "use client";

// import { Icons } from "@/components/icons";
// import { NavMenu } from "@/components/nav-menu";
// import { ThemeToggle } from "@/components/theme-toggle";
// import { siteConfig } from "@/lib/config";
// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { AnimatePresence, motion, useScroll } from "framer-motion";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const INITIAL_WIDTH = "70rem";
// const MAX_WIDTH = "800px";

// // Animation variants
// const overlayVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
//   exit: { opacity: 0 },
// };

// const drawerVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     rotate: 0,
//     transition: {
//       type: "spring",
//       damping: 15,
//       stiffness: 200,
//       staggerChildren: 0.03,
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: 100,
//     transition: { duration: 0.1 },
//   },
// };

// const drawerMenuContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// const drawerMenuVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// export function Navbar() {
//   const { scrollY } = useScroll();
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("hero");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = siteConfig.nav.links.map((item) =>
//         item.href.substring(1),
//       );

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 150 && rect.bottom >= 150) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const unsubscribe = scrollY.on("change", (latest) => {
//       setHasScrolled(latest > 10);
//     });
//     return unsubscribe;
//   }, [scrollY]);

//   const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
//   const handleOverlayClick = () => setIsDrawerOpen(false);

//   return (
//     <header
//       className={cn(
//         "sticky z-50 mx-4 flex justify-center transition-all duration-300 md:mx-0",
//         hasScrolled ? "top-6" : "top-4 mx-0",
//       )}
//     >
//       <motion.div
//         initial={{ width: INITIAL_WIDTH }}
//         animate={{ width: hasScrolled ? MAX_WIDTH : INITIAL_WIDTH }}
//         transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
//       >
//         <div
//           className={cn(
//             "mx-auto max-w-7xl rounded-2xl transition-all duration-300  xl:px-0",
//             hasScrolled
//               ? "px-2 border border-border backdrop-blur-lg bg-background/75"
//               : "shadow-none px-7",
//           )}
//         >
//           <div className="flex h-[56px] items-center justify-between p-4">
//             <Link href="/" className="flex items-center gap-3">
//               <Icons.logo className="size-7 md:size-10" />
//               <p className="text-lg font-semibold text-primary">Desnine</p>
//             </Link>

//             <NavMenu />

//             <div className="flex flex-row items-center gap-1 md:gap-3 shrink-0">
//               <div className="flex items-center space-x-6">
//                 <Link
//                   className="bg-secondary h-8 hidden md:flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-fit px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12]"
//                   href="/contact"
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//               <ThemeToggle />
//               <button
//                 className="md:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center"
//                 onClick={toggleDrawer}
//               >
//                 {isDrawerOpen ? (
//                   <X className="size-5" />
//                 ) : (
//                   <Menu className="size-5" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {isDrawerOpen && (
//           <>
//             <motion.div
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm"
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               variants={overlayVariants}
//               transition={{ duration: 0.2 }}
//               onClick={handleOverlayClick}
//             />

//             <motion.div
//               className="fixed inset-x-0 w-[95%] mx-auto bottom-3 bg-background border border-border p-4 rounded-xl shadow-lg"
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               variants={drawerVariants as any}
//             >
//               {/* Mobile menu content */}
//               <div className="flex flex-col gap-4">
//                 <div className="flex items-center justify-between">
//                   <Link href="/" className="flex items-center gap-3">
//                     <Icons.logo className="size-7 md:size-10" />
//                     <p className="text-lg font-semibold text-primary">
//                       Desnine
//                     </p>
//                   </Link>
//                   <button
//                     onClick={toggleDrawer}
//                     className="border border-border rounded-md p-1 cursor-pointer"
//                   >
//                     <X className="size-5" />
//                   </button>
//                 </div>

//                 <motion.ul
//                   className="flex flex-col text-sm mb-2 border border-border rounded-md"
//                   variants={drawerMenuContainerVariants}
//                 >
//                   <AnimatePresence>
//                     {siteConfig.nav.links.map((item) => (
//                       <motion.li
//                         key={item.id}
//                         className="p-2.5 border-b border-border last:border-b-0"
//                         variants={drawerMenuVariants}
//                       >
//                         <Link
//                           href={item.href}
//                           onClick={() => setIsDrawerOpen(false)}
//                           className={`underline-offset-4 hover:text-primary/80 transition-colors ${
//                             activeSection === item.href.substring(1)
//                               ? "text-primary font-medium"
//                               : "text-primary/60"
//                           }`}
//                         >
//                           {item.name}
//                         </Link>
//                       </motion.li>
//                     ))}
//                   </AnimatePresence>
//                 </motion.ul>

//                 {/* Contact Us Button for Mobile */}
//                 <motion.div
//                   className="w-full"
//                   variants={drawerMenuVariants}
//                 >
//                   <Link
//                     href="/contact"
//                     onClick={() => setIsDrawerOpen(false)}
//                     className="w-full bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-secondary/20 hover:border-secondary/40 flex items-center justify-center"
//                   >
//                     Contact Us
//                   </Link>
//                 </motion.div>


//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }






"use client";

import { Icons } from "@/components/icons";
import { NavMenu } from "@/components/nav-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Menu, X, Languages } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const INITIAL_WIDTH = "70rem";
const MAX_WIDTH = "800px";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.1 },
  },
};

const drawerMenuContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function GoogleTranslateLoader() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="fixed -left-[9999px] top-0 h-0 w-0 overflow-hidden opacity-0"
    />
  );
}

function setGoogleTranslateLanguage(lang: "en" | "fr") {
  const value = lang === "en" ? "/en/en" : "/en/fr";

  document.cookie = `googtrans=${value}; path=/; max-age=31536000`;

  const select = document.querySelector(
    ".goog-te-combo",
  ) as HTMLSelectElement | null;

  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event("change"));
  }

  setTimeout(() => {
    window.location.reload();
  }, 250);
}

function LanguageButton({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={cn(mobile ? "w-full" : "hidden md:flex items-center")}>
      <div
        className={cn(
          "bg-secondary text-primary-foreground dark:text-secondary-foreground border border-white/[0.12] shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] flex items-center justify-center overflow-hidden",
          mobile
            ? "w-full px-6 py-3 rounded-md text-sm font-semibold hover:bg-secondary/90 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-secondary/20 hover:border-secondary/40"
            : "h-8 px-4 rounded-full text-sm font-normal tracking-wide",
        )}
      >
        <div className="flex items-center gap-2">
          <Languages className="size-4" />

          <button
            type="button"
            onClick={() => setGoogleTranslateLanguage("en")}
            className="transition-opacity hover:opacity-70"
          >
            EN
          </button>

          <span className="opacity-40">/</span>

          <button
            type="button"
            onClick={() => setGoogleTranslateLanguage("fr")}
            className="transition-opacity hover:opacity-70"
          >
            FR
          </button>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const { scrollY } = useScroll();

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.nav.links.map((item) =>
        item.href.substring(1),
      );

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 10);
    });

    return unsubscribe;
  }, [scrollY]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const handleOverlayClick = () => setIsDrawerOpen(false);

  return (
    <>
      <GoogleTranslateLoader />

      <header
        className={cn(
          "sticky z-50 mx-4 flex justify-center transition-all duration-300 md:mx-0",
          hasScrolled ? "top-6" : "top-4 mx-0",
        )}
      >
        <motion.div
          initial={{ width: INITIAL_WIDTH }}
          animate={{ width: hasScrolled ? MAX_WIDTH : INITIAL_WIDTH }}
          transition={{
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div
            className={cn(
              "mx-auto max-w-7xl rounded-2xl transition-all duration-300 xl:px-0",
              hasScrolled
                ? "px-2 border border-border backdrop-blur-lg bg-background/75"
                : "shadow-none px-7",
            )}
          >
            <div className="flex h-[56px] items-center justify-between p-4">
              <Link href="/" className="flex items-center gap-3">
                <Icons.logo className="size-7 md:size-10" />
                <p className="text-lg font-semibold text-primary">Desnine</p>
              </Link>

              <NavMenu />

              <div className="flex flex-row items-center gap-2 md:gap-3 shrink-0">
                <LanguageButton />

                <div className="flex items-center space-x-6">
                  <Link
                    className="bg-secondary h-8 hidden md:flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-fit px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12]"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </div>

                <ThemeToggle />

                <button
                  className="md:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center"
                  onClick={toggleDrawer}
                >
                  {isDrawerOpen ? (
                    <X className="size-5" />
                  ) : (
                    <Menu className="size-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isDrawerOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={overlayVariants}
                transition={{ duration: 0.2 }}
                onClick={handleOverlayClick}
              />

              <motion.div
                className="fixed inset-x-0 w-[95%] mx-auto bottom-3 bg-background border border-border p-4 rounded-xl shadow-lg"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={drawerVariants as any}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                      <Icons.logo className="size-7 md:size-10" />
                      <p className="text-lg font-semibold text-primary">
                        Desnine
                      </p>
                    </Link>

                    <button
                      onClick={toggleDrawer}
                      className="border border-border rounded-md p-1 cursor-pointer"
                    >
                      <X className="size-5" />
                    </button>
                  </div>

                  <motion.ul
                    className="flex flex-col text-sm mb-2 border border-border rounded-md"
                    variants={drawerMenuContainerVariants}
                  >
                    <AnimatePresence>
                      {siteConfig.nav.links.map((item) => (
                        <motion.li
                          key={item.id}
                          className="p-2.5 border-b border-border last:border-b-0"
                          variants={drawerMenuVariants}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsDrawerOpen(false)}
                            className={`underline-offset-4 hover:text-primary/80 transition-colors ${
                              activeSection === item.href.substring(1)
                                ? "text-primary font-medium"
                                : "text-primary/60"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </motion.ul>

                  <motion.div className="w-full" variants={drawerMenuVariants}>
                    <LanguageButton mobile />
                  </motion.div>

                  <motion.div className="w-full" variants={drawerMenuVariants}>
                    <Link
                      href="/contact"
                      onClick={() => setIsDrawerOpen(false)}
                      className="w-full bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-secondary/20 hover:border-secondary/40 flex items-center justify-center"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
``

## src\components\sections\pricing-section.tsx

``tsx
"use client";

import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface TabsProps {
  activeTab: "yearly" | "monthly";
  setActiveTab: (tab: "yearly" | "monthly") => void;
  className?: string;
}

function PricingTabs({ activeTab, setActiveTab, className }: TabsProps) {
  return (
    <div
      className={cn(
        "relative flex w-fit items-center rounded-full border p-0.5 backdrop-blur-sm cursor-pointer h-9 flex-row bg-muted",
        className,
      )}
    >
      {["monthly", "yearly"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab as "yearly" | "monthly")}
          className={cn(
            "relative z-[1] px-2 h-8 flex items-center justify-center cursor-pointer",
            {
              "z-0": activeTab === tab,
            },
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 rounded-full bg-white dark:bg-[#3F3F46]  shadow-md border border-border"
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 25,
                velocity: 2,
              }}
            />
          )}
          <span
            className={cn(
              "relative block text-sm font-medium duration-200 shrink-0",
              activeTab === tab ? "text-primary" : "text-muted-foreground",
            )}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {tab === "yearly" && (
              <span className="ml-2 text-xs font-semibold text-secondary bg-secondary/15 py-0.5 w-[calc(100%+1rem)] px-1 rounded-full">
                -20%
              </span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  // Update price animation
  const PriceDisplay = ({
    tier,
  }: {
    tier: (typeof siteConfig.pricing.pricingItems)[0];
  }) => {
    const price = billingCycle === "yearly" ? tier.yearlyPrice : tier.price;

    return (
      <motion.span
        key={price}
        className="text-4xl font-semibold"
        initial={{
          opacity: 0,
          x: billingCycle === "yearly" ? -10 : 10,
          filter: "blur(5px)",
        }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        {price}
      </motion.span>
    );
  };

  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center gap-10 pb-10 w-full relative"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          {siteConfig.pricing.title}
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          {siteConfig.pricing.description}
        </p>
      </SectionHeader>
      <div className="relative w-full h-full">
        <div className="absolute -top-14 left-1/2 -translate-x-1/2">
          <PricingTabs
            activeTab={billingCycle}
            setActiveTab={setBillingCycle}
            className="mx-auto"
          />
        </div>

        <div className="grid min-[650px]:grid-cols-2 min-[900px]:grid-cols-3 gap-4 w-full max-w-6xl mx-auto px-6">
          {siteConfig.pricing.pricingItems.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "rounded-xl grid grid-rows-[180px_auto_1fr] relative h-fit min-[650px]:h-full min-[900px]:h-fit",
                tier.isPopular
                  ? "md:shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),0px_34px_20px_-8px_rgba(0,0,0,0.05),0px_15px_15px_-6px_rgba(0,0,0,0.09),0px_4px_8px_-2px_rgba(0,0,0,0.10),0px_0px_0px_1px_rgba(0,0,0,0.08)] bg-accent"
                  : "bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border",
              )}
            >
              <div className="flex flex-col gap-4 p-4">
                <p className="text-sm">
                  {tier.name}
                  {tier.isPopular && (
                    <span className="bg-gradient-to-b from-secondary/50 from-[1.92%] to-secondary to-[100%] text-white h-6 inline-flex w-fit items-center justify-center px-2 rounded-full text-sm ml-2 shadow-[0px_6px_6px_-3px_rgba(0,0,0,0.08),0px_3px_3px_-1.5px_rgba(0,0,0,0.08),0px_1px_1px_-0.5px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(255,255,255,0.12)_inset,0px_1px_0px_0px_rgba(255,255,255,0.12)_inset]">
                      Popular
                    </span>
                  )}
                </p>
                <div className="flex items-baseline mt-2">
                  <PriceDisplay tier={tier} />
                  <span className="ml-2">
                    /{billingCycle === "yearly" ? "year" : "month"}
                  </span>
                </div>
                <p className="text-sm mt-2">{tier.description}</p>
              </div>

              <div className="flex flex-col gap-2 p-4">
                <button
                  className={`h-10 w-full flex items-center justify-center text-sm font-normal tracking-wide rounded-full px-4 cursor-pointer transition-all ease-out active:scale-95 ${
                    tier.isPopular
                      ? `${tier.buttonColor} shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)]`
                      : `${tier.buttonColor} shadow-[0px_1px_2px_0px_rgba(255,255,255,0.16)_inset,0px_3px_3px_-1.5px_rgba(16,24,40,0.24),0px_1px_1px_-0.5px_rgba(16,24,40,0.20)]`
                  }`}
                >
                  {tier.buttonText}
                </button>
              </div>
              <hr className="border-border dark:border-white/20" />
              <div className="p-4">
                {tier.name !== "Basic" && (
                  <p className="text-sm mb-4">
                    Everything in {tier.name === "Pro" ? "Basic" : "Pro"} +
                  </p>
                )}
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div
                        className={cn(
                          "size-5 rounded-full border border-primary/20 flex items-center justify-center",
                          tier.isPopular &&
                            "bg-muted-foreground/40 border-border",
                        )}
                      >
                        <div className="size-3 flex items-center justify-center">
                          <svg
                            width="8"
                            height="7"
                            viewBox="0 0 8 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block dark:hidden"
                          >
                            <path
                              d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                              stroke="#101828"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <svg
                            width="8"
                            height="7"
                            viewBox="0 0 8 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden dark:block"
                          >
                            <path
                              d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                              stroke="#FAFAFA"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

``

## src\app\article\minimalist-design\page.tsx

``tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "@/lib/articlesData";
import { Clock, ChevronLeft } from "lucide-react";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";

const SLUG = "minimalist-design";
function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
}
export const metadata = (() => {
  const article = ARTICLES.find((a) => a.slug === SLUG);
  if (!article) return {};
  const url = `https://yourdomain.com/article/${article.slug}`;
  return {
    title: `${article.title} â€” Desnine`,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, url, type: "article", images: [{ url: article.cover }] },
    alternates: { canonical: url },
  };
})();

export default function Page() {
  const article = ARTICLES.find((a) => a.slug === SLUG);
  if (!article) notFound();
  const related = ARTICLES.filter((a) => a.slug !== SLUG).slice(0, 3);

  return (
    <main className="w-full text-foreground bg-background">
      <header className="relative w-full overflow-hidden">
        <div className="relative h-[240px] md:h-[320px]">
          <Image src={article.cover} alt={article.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-background/70 dark:bg-black/60" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 md:px-12 pb-8">
              <Link href="/article" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ChevronLeft className="size-4" /> Back to Articles
              </Link>
              <h1 className="mt-2 text-3xl md:text-5xl font-bold">{article.title}</h1>
              <div className="mt-3 flex items-center gap-4 text-muted-foreground">
                <span>{formatDate(article.date)}</span>
                <span className="inline-flex items-center gap-1"><Clock className="size-4" /> {article.readMins} min read</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="px-6 md:px-12 py-10">
        <article className="prose dark:prose-invert max-w-3xl mx-auto">
          <p className="lead">Minimalism that converts is a system, not an aesthetic.</p>
          <h2>Whitespace as structure</h2>
          <p>Use whitespace to create rhythm and guide attention to primary actions.</p>
          <h2>Hierarchy that sells</h2>
          <p>Design the visual path: headline â†’ proof â†’ CTA â€” everything else supports.</p>
        </article>
      </section>

      {related.length > 0 && (
        <section className="px-6 md:px-12 py-10">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Related reads</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((a) => (
                <Link key={a.slug} href={a.href} className="group rounded-lg overflow-hidden border border-border hover:shadow-lg transition bg-card">
                  <div className="relative h-40">
                    <Image src={a.cover} alt={a.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium leading-snug group-hover:underline">{a.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactUsSection />
      <FooterSection />
    </main>
  );
}

``

## src\components\sections\company-showcase.tsx

``tsx
import { siteConfig } from "@/lib/config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CompanyShowcase() {
  const { companyShowcase } = siteConfig;
  return (
    <section
      id="company"
      className="flex flex-col items-center justify-center gap-10 py-10 pt-20 w-full relative px-6"
    >
      <p className="text-muted-foreground font-medium">
        Trusted by fast-growing startups
      </p>
      <div className="grid w-full max-w-7xl grid-cols-2 md:grid-cols-4 overflow-hidden border-y border-border items-center justify-center z-20">
        {companyShowcase.companyLogos.map((logo) => (
          <Link
            href="#"
            className="group w-full h-28 flex items-center justify-center relative p-4 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
            key={logo.id}
          >
            <div className="transition-all duration-200 [cubic-bezier(0.165, 0.84, 0.44, 1)] translate-y-0 group-hover:-translate-y-4 duration-300 flex items-center justify-center w-full h-full">
              {logo.logo}
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-4 transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]">
              <span className="flex items-center gap-2 text-sm font-medium">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

``

## src\components\sections\bento-section.tsx

``tsx
"use client";

import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

interface BentoSectionProps {
  count?: number; // Optional: if passed, show only that many items
}

export function BentoSection({ count }: BentoSectionProps) {
  // const { title, description, items } = siteConfig.bentoSection;
  const { items } = siteConfig.bentoSection;
  const displayItems = count ? items.slice(0, count) : items;

  return (
    <section
      id="bento"
      className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
    >
      <div className="border-x mx-5 md:mx-10 relative">
        {/* Background decorations */}
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

        {/* Section header */}
        {/* <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
            {title}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            {description}
          </p>
        </SectionHeader> */}

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group cursor-pointer max-h-[400px]"
            >
              <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
                {item.content}
              </div>
              <div className="flex-1 flex-col gap-2 p-6">
                <h3 className="text-lg tracking-tighter font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button if count is set */}
        {count && (
          <div className="w-full flex justify-center mt-10 pb-10">
            <Link
              href="/services"
              className="group bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-secondary/20 hover:border-secondary/40"
            >
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                See all services â†’
              </span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}

``

## src\components\sections\contact\accordion-item.tsx

``tsx
type AccordionItemProps = {
  index: number;
  openIndex: number | null;
  setOpenIndex: (n: number | null) => void;
  question: string;
  answer: string;
};

export function AccordionItem({
  index,
  openIndex,
  setOpenIndex,
  question,
  answer,
}: AccordionItemProps) {
  const open = openIndex === index;

  return (
    <div className="p-5">
      <button
        type="button"
        onClick={() => setOpenIndex(open ? null : index)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-medium">{question}</span>
        <span
          className={`ml-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
}

``

## src\components\sections\contact\contact-form-section.tsx

``tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactFormSection() {
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      fullName: String(fd.get("fullName") || ""),
      companyName: String(fd.get("companyName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      serviceNeeded: String(fd.get("serviceNeeded") || ""),
      budget: String(fd.get("budget") || ""), // <-- STILL INCLUDED
      timeline: String(fd.get("timeline") || ""),
      projectDetails: String(fd.get("projectDetails") || ""),
    };

    if (!payload.fullName || !payload.email || !payload.serviceNeeded || !payload.projectDetails) {
      setResult("Please fill all required fields.");
      return;
    }

    try {
      setSending(true);
      setResult("Sending...");

      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setResult(data?.message ?? "Something went wrong. Please try again.");
        return;
      }

      setResult("Form submitted successfully!");
      form.reset();
    } catch {
      setResult("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact-form" className="w-full px-6 pb-4">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-border bg-card/50 p-6">
          <div className="mb-5 text-center">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
              Tell us about your project
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the details below, weâ€™ll get back within 24â€“48 hours.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" name="fullName" type="text" required placeholder="Enter your full name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" name="companyName" type="text" placeholder="Enter your company name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" required placeholder="your@email.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceNeeded">Service Needed *</Label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  required
                  className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex h-9 w-full rounded-md border bg-background px-3 py-1 text-base shadow-xs md:text-sm"
                >
                  <option value="">Select a service</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Website Design & Development">Website Design & Development</option>
                  <option value="AI Automation & Bots">AI Automation & Bots</option>
                  <option value="Smart Analytics">Smart Analytics</option>
                  <option value="Branding & Identity">Branding & Identity</option>
                  <option value="Print & Packaging Design">Print & Packaging Design</option>
                  <option value="Digital Design">Digital Design</option>
                  <option value="Advertising Design">Advertising Design</option>
                  <option value="Content Creation & Visual Support">Content Creation & Visual Support</option>
                  <option value="Industry-Specific Design">Industry-Specific Design</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* ðŸ”¥ Hidden Budget Field (still works, still submits) */}
            <div className="hidden" aria-hidden="true">
              <Label htmlFor="budget">Estimated Budget (optional)</Label>
              <select
                id="budget"
                name="budget"
                className="border-input flex h-9 w-full rounded-md border bg-background px-3 py-1 text-base shadow-xs md:text-sm"
              >
                <option value="">Select a range</option>
                <option value="$3kâ€“$5k">$3kâ€“$5k</option>
                <option value="$5kâ€“$10k">$5kâ€“$10k</option>
                <option value="$10k+">$10k+</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Ideal Timeline (optional)</Label>
              <select
                id="timeline"
                name="timeline"
                className="border-input flex h-9 w-full rounded-md border bg-background px-3 py-1 text-base shadow-xs md:text-sm"
              >
                <option value="">Select a window</option>
                <option value="ASAP">ASAP</option>
                <option value="2â€“4 weeks">2â€“4 weeks</option>
                <option value="4â€“8 weeks">4â€“8 weeks</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectDetails">Tell Us About Your Project *</Label>
              <Textarea
                id="projectDetails"
                name="projectDetails"
                rows={6}
                required
                placeholder="Describe your goals, requirements, timeline..."
                className="min-h-[120px]"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={sending}
                className="w-full rounded-full hover:bg-white hover:text-primary border border-white/10"
              >
                {sending ? "Sending..." : "Send Message"}
              </Button>

              {result && <p className="mt-4 text-center text-sm">{result}</p>}

              <p className="mt-2 text-xs text-center text-muted-foreground leading-relaxed">
                By submitting this form, you consent to Desnine storing your information to respond to your inquiry.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

``

## src\components\sections\contact\hero-section.tsx

``tsx
import { ShieldCheck, Users, Clock } from "lucide-react";

export function ContactHeroSection() {
  return (
    <section className="relative w-full">
      <div className="px-6">
        <div className="mx-auto max-w-4xl pt-10 md:pt-14 pb-16 text-center">
          <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-accent/40 px-3 py-1 text-xs font-medium">
            <span className="inline-block size-1.5 rounded-full bg-primary" />
            Get in touch
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tighter text-primary">
            Letâ€™s Build Something Remarkable
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed tracking-tight text-balance">
            Have a bold idea or need ongoing creative support? Desnine is a creative studio
            crafting brands, websites, and visual systems that connect and convert.
          </p>

          {/* <div className="mt-8 grid grid-cols-3 gap-6 text-center max-sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <p className="mt-2 text-xs md:text-sm font-medium">Trusted Quality</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-primary" />
              <p className="mt-2 text-xs md:text-sm font-medium">Client-Focused</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-primary" />
              <p className="mt-2 text-xs md:text-sm font-medium">On-Time Delivery</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

``

## src\components\sections\contact\faq-section.tsx

``tsx
"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/sections/contact/accordion-item";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What services do you offer?", a: "Our Studio offers branding & identity, web design & development, design systems, packaging, and ongoing creative support. We also partner on content and production." },
    { q: "How does Desnine process work?", a: "We start with a discovery phase to understand your business and audience, followed by research, concept development, design refinement, and final asset delivery." },
    { q: "What is the typical project timeline?", a: "Timelines vary by project scope, but a full branding engagement typically takes 4â€“6 weeks from kickoff to final deliverables." },
    { q: "How does the Monthly Retainer work?", a: "We align on the scope of your project ahead of kickoff and prepare a transparent timeline and design plan based on your needs. It doesn't matter whether it's branding, website design, UI/UX, or marketing materials, it's all included." },
    { q: "Do you offer logo design only?", a: "Yes, we can create a standalone logo, but we recommend a comprehensive visual identity system for consistent application across touchpoints." },
    { q: "What if I'm not happy with the work?", a: "At Desnine Studio, we keep refining until it feels right. Design is subjective, and sometimes your vision evolves, thatâ€™s normal. We collaborate closely, make thoughtful revisions, and bridge any taste gaps to ensure the final result matches your expectations perfectly." },
    { q: "Is there a limit to how much I can ask for?", a: "Not really, youâ€™re free to ask for anything you need. Weâ€™ll always be transparent about whatâ€™s included in your plan and what falls outside the original scope. For custom projects, any additional requests can be handled through a change order or by adding a retainer option to keep everything smooth and organized." },
  ];

  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-primary text-center">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="mx-auto mt-6 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card/40">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            index={i}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            question={f.q}
            answer={f.a}
          />
        ))}
      </div>
    </section>
  );
}

``

## src\components\sections\article\ServicesMarquee.tsx

``tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/articlesData";

export default function ServicesMarquee() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/30">
      {/* edge fades (theme background token) */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[hsl(var(--background))] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[hsl(var(--background))] to-transparent pointer-events-none" />
      <div className="py-3">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={reduceMotion ? undefined : { repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex items-center gap-8 pr-8">
              {SERVICES.map((s) => (
                <li key={`${s}-${dup}`} className="text-xs md:text-sm uppercase tracking-wide">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-red-500/40 bg-red-500/10 text-red-600 dark:text-red-400">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

``

## src\app\api\newsletter\route.ts

``ts
import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// Initialize Notion client
const notionClient = process.env._TOKEN
  ? new Client({ auth: process.env._TOKEN })
  : null;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!notionClient || !process.env._NEWSLETTER_DB_ID) {
      return NextResponse.json(
        { ok: false, error: "Server configuration missing." },
        { status: 500 }
      );
    }

    // Create newsletter row in Newsletter DB
    await notionClient.pages.create({
      parent: { database_id: process.env._NEWSLETTER_DB_ID },
      properties: {
        number: {
          title: [{ text: { content: email } }],
        },
        Email: {
          email: email,
        },
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Newsletter  error:", err);

    const message =
      err?.body?.message ||
      err?.message ||
      "Newsletter submission failed.";

    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}

``

## src\components\sections\article\LazySection.tsx

``tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function LazySection({
  children,
  minHeight = 0,
  rootMargin = "200px",
}: {
  children: React.ReactNode;
  minHeight?: number | string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [show, rootMargin]);

  return <div ref={ref} style={show ? undefined : { minHeight }}>{show ? children : null}</div>;
}

``

## src\components\sections\article\FeaturedHero.tsx

``tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import type { Article } from "@/lib/articlesData";
import { formatDate } from "@/lib/format";

export default function FeaturedHero({ article }: { article: Article }) {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
      <Image src={article.cover} alt={article.title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-white/70 dark:bg-black/60 flex flex-col justify-end p-6 md:p-12">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-900 dark:text-white text-2xl md:text-4xl font-bold max-w-3xl line-clamp-2"
        >
          {article.title}
        </motion.h2>
        <p className="mt-2 text-gray-800 dark:text-gray-200 max-w-2xl line-clamp-3">{article.excerpt}</p>
        <div className="mt-3 flex items-center gap-4 text-gray-700 dark:text-gray-300 text-sm">
          <span className="inline-flex items-center gap-1"><Clock className="size-4" /> {article.readMins} min</span>
          <span>{formatDate(article.date)}</span>
        </div>
        <Button asChild className="mt-5 bg-red-600 hover:bg-red-700 ring-red-500 w-fit">
          <Link href={article.href}>Read Article</Link>
        </Button>
      </div>
    </section>
  );
}

``

## src\components\sections\article\BannerHeading.tsx

``tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BannerHeading() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative isolate w-full overflow-hidden">
      {/* Decorative layers (theme-aware) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 bg-gradient-to-t from-red-600/70 via-red-600/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background/40 dark:to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 py-12 md:py-16 text-center">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground"
        >
          Articles
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-2 text-4xl md:text-6xl font-extrabold leading-[1.1] text-foreground"
        >
          <span className="relative inline-block">
            Articles &amp; Resources
            {/* animated underline under the H1 */}
            <motion.span
              aria-hidden
              className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-red-500/80"
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={reduceMotion ? false : { scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              style={{ originX: 0 }}
            />
          </span>
        </motion.h1>

        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Deep-dives and practical playbooks on branding, web, and AI.
        </p>
      </div>
    </section>
  );
}

``

## src\components\sections\article\ArticlesGrid.tsx

``tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import type { Article } from "@/lib/articlesData";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/format";


export default function ArticlesGrid({
    items,
    onLoadMore,
    canLoadMore,
}: {
    items: Article[];
    onLoadMore: () => void;
    canLoadMore: boolean;
}) {
    return (
        <section id="articles" className="px-6 md:px-12 py-8 md:py-12">
            <div className="grid grid-cols-2 gap-6">
            {items.map((a) => (
                <Card key={a.id} className="overflow-hidden hover:shadow-lg transition flex flex-col bg-card text-card-foreground border border-border h-[420px]">
                    <div className="relative w-full h-[180px] overflow-hidden">
                        <Image src={a.cover} alt={a.title} fill sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" className="object-cover" />
                    </div>
                        <CardContent className="p-5 flex-1 flex flex-col">
                    <p className="text-xs text-muted-foreground">{formatDate(a.date)} â€¢ {a.readMins} min</p>
                        <Link href={a.href} className="block mt-1 text-lg font-semibold leading-snug hover:underline line-clamp-2 text-foreground" title={a.title}>
                    {a.title}
                        </Link>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{a.excerpt}</p>
                    <div className="mt-auto" />
                        <Link href={a.href} className="mt-3 inline-flex items-center gap-1 text-red-600 dark:text-red-400 hover:underline">
                    Read <ChevronRight className="size-4" />
                        </Link>
                        </CardContent>
                </Card>
            ))}
        </div>


        {canLoadMore && (
            <div className="mt-8 flex justify-center">
                <Button onClick={onLoadMore} className="bg-red-600 hover:bg-red-700 ring-red-500">
            Load more
                </Button>
            </div>
        )}


        {!items.length && (
            <p className="text-sm text-muted-foreground text-center">No results. Try another term.</p>
        )}
    </section>
);
}
``

## src\components\sections\article\ArticleSearch.tsx

``tsx
"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { RefObject } from "react";

type ArticleSearchProps = {
  query: string;
  setQuery: (v: string) => void;
  // Allow null because useRef<HTMLInputElement | null>(null)
  inputRef: RefObject<HTMLInputElement | null>;
};

export default function ArticleSearch({
  query,
  setQuery,
  inputRef,
}: ArticleSearchProps) {
  return (
    <section className="px-6 md:px-12 py-6 border-b border-border">
      <div className="relative w-full md:max-w-lg mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          id="article-search"
          placeholder="Search (press / to focus)"
          aria-label="Search articles"
          className="pl-9 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-red-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </section>
  );
}

``

## src\components\sections\privacy\privacy-article-section.tsx

``tsx
export function PrivacyArticleSection() {
  return (
    <div className="px-6 md:px-12 pb-20">
      <div className="max-w-4xl mx-auto">
        <article className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-lg p-6 md:p-10 prose prose-invert max-w-none">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            By using the Service, you agree to this Privacy Policy. If you do not agree, please
            discontinue use. This policy applies to all visitors, clients, and users of Desnine
            Studio.
          </p>

          <hr className="my-8 border-white/10" />

          {/* 1. Information We Collect */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="text-muted-foreground mb-4">
            We collect various types of information in connection with the Service, including:
          </p>

          <h3 className="mt-6 text-lg font-semibold mb-3">A. Personal Information</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>
              <span className="font-medium">Contact Information:</span> name, email address, telephone
              number, postal address.
            </li>
            <li>
              <span className="font-medium">Account Information:</span> username, password, and
              registration details (if you create an account).
            </li>
            <li>
              <span className="font-medium">Demographic Information:</span> age, gender, and preferences
              (if provided).
            </li>
            <li>
              <span className="font-medium">Payment Information:</span> payment card details or other
              financial information (processed securely by third parties when you purchase services).
            </li>
            <li>
              <span className="font-medium">Communications:</span> records of your communications with
              us (e.g., support inquiries, forms).
            </li>
            <li>
              <span className="font-medium">Recruitment Information:</span> information provided when
              submitting a job application (which may include sensitive data you choose to share, such
              as ethnic origin).
            </li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold mb-3">B. Non-Personal / Technical Information</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>
              <span className="font-medium">Usage Data:</span> IP address, browser type, operating
              system, referring URLs, pages viewed, timestamps.
            </li>
            <li>
              <span className="font-medium">Device Information:</span> hardware model, OS version,
              unique device identifiers, mobile network information, mobile device ID.
            </li>
            <li>
              <span className="font-medium">Cookies &amp; Similar Technologies:</span> used to track
              activity and store preferences (see â€œCookiesâ€ below).
            </li>
          </ul>

          {/* 2. How We Use Your Information */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>Provide, maintain, and improve our Service and online experience.</li>
            <li>Process transactions and send related information (e.g., confirmations, invoices).</li>
            <li>Send technical notices, updates, security alerts, and support messages.</li>
            <li>Respond to inquiries about Desnine Studio and provide customer support.</li>
            <li>Provide information you request (e.g., newsletters, bulletins).</li>
            <li>Monitor and analyze trends, usage, and activities to improve the Service.</li>
            <li>Personalize the Service and provide relevant content or features.</li>
            <li>Detect, investigate, and prevent fraud or illegal activities.</li>
            <li>Process and consider job applications and keep you updated throughout the process.</li>
            <li>Combine data with information from third parties to better understand your needs.</li>
            <li>Fulfill any other purpose disclosed at the time of collection.</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold mb-3">Legal Bases for Processing</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>
              <span className="font-medium">Consent:</span> for example, sending newsletters youâ€™ve
              requested. You can withdraw consent at any time.
            </li>
            <li>
              <span className="font-medium">Legitimate Interests:</span> to deliver and improve the site
              experience for users and to assess recruitment applications.
            </li>
            <li>
              <span className="font-medium">Contract / Legal Obligations:</span> where processing is
              required to provide services you request or to comply with applicable law.
            </li>
          </ul>

          {/* 3. How We Share */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            3. How We Share Your Information
          </h2>
          <p className="text-muted-foreground mb-4">
            We do <span className="font-medium">not sell</span> your personal information. We do not pass
            your information to third parties for their own marketing. We may share limited data:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>
              <span className="font-medium">Vendors &amp; Service Providers:</span> trusted processors
              that operate our infrastructure (e.g., hosting, payments, analytics, email) under
              contract and per our instructions.
            </li>
            <li>
              <span className="font-medium">Legal Compliance &amp; Protection:</span> to comply with
              laws, requests from authorities, or to protect the rights, property, and safety of
              Desnine Studio, our users, or others.
            </li>
            <li>
              <span className="font-medium">Business Transfers:</span> in connection with mergers,
              acquisitions, or sale of assets.
            </li>
            <li>
              <span className="font-medium">With Your Consent:</span> when you give explicit permission.
            </li>
            <li>
              <span className="font-medium">Aggregated / De-identified Data:</span> that does not
              identify you.
            </li>
          </ul>

          {/* 4. Marketing */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            4. Marketing
          </h2>
          <p className="text-muted-foreground mb-6">
            We will only provide marketing information that you have specifically requested via the
            website. You may opt out at any time by using the unsubscribe link in our emails or by
            contacting us.
          </p>

          {/* 5. International Transfers */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            5. Where We Process / International Transfers
          </h2>
          <p className="text-muted-foreground mb-6">
            We may transfer and process your information in countries outside your place of residence,
            including Canada, the United States, and other jurisdictions. Where required, we implement
            appropriate safeguards (e.g., standard contractual clauses) to protect your data.
          </p>

          {/* 6. Retention */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            6. Data Retention
          </h2>
          <p className="text-muted-foreground mb-6">
            We retain your information for <span className="font-medium">24 months</span> unless a longer
            period is required or permitted by law (e.g., tax, accounting, legal claims). When no longer
            needed, we securely delete or anonymize the data.
          </p>

          {/* 7. Cookies */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            7. Cookies
          </h2>
          <h3 className="mt-2 text-lg font-semibold mb-3">What Are Cookies?</h3>
          <p className="text-muted-foreground mb-4">
            Cookies are small text files placed on your device when you visit a website. We may also use
            similar technologies. We can recognise these cookies on subsequent visits to remember you and
            improve your experience.
          </p>
          <h3 className="mt-4 text-lg font-semibold mb-3">Cookie Scope &amp; Types</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>
              <span className="font-medium">First-party vs Third-party:</span> set by our site or by a
              different domain providing features on our site.
            </li>
            <li>
              <span className="font-medium">Persistent vs Session:</span> persistent cookies last for a
              defined period; session cookies are deleted when you close your browser.
            </li>
          </ul>
          <h3 className="mt-4 text-lg font-semibold mb-3">What We Use Cookies For</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>
              <span className="font-medium">Strictly Necessary:</span> core site functions (e.g., secure
              areas, basic operations).
            </li>
            <li>
              <span className="font-medium">Statistics / Performance:</span> aggregated analytics on pages
              visited and errors encountered to improve our website.
            </li>
            <li>
              <span className="font-medium">Preferences / Functionality:</span> remember choices (e.g.,
              language, layout) and enhance features.
            </li>
          </ul>
          <p className="text-muted-foreground mb-6">
            You can manage or disable cookies in your browser settings. Note that some features may not
            function properly without required cookies. Learn more at{" "}
            <a className="underline" href="https://www.allaboutcookies.org/">
              www.allaboutcookies.org
            </a>.
          </p>

          {/* 8. Third-Party Websites */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            8. Third-Party Websites
          </h2>
          <p className="text-muted-foreground mb-6">
            Our website may link to third-party sites that we do not operate or endorse. Their privacy
            practices are governed by their own policies. This Privacy Policy does not apply to those
            sites, and we are not responsible for them.
          </p>

          {/* 9. Data Security */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            9. Data Security
          </h2>
          <p className="text-muted-foreground mb-6">
            We take appropriate technical and organizational measures to help keep your personal
            information secure, accurate, and up to date, and only for as long as necessary for the
            purposes described in this policy. However, no method of transmission or storage is 100%
            secure.
          </p>

          {/* 10. Children */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            10. Childrenâ€™s Privacy
          </h2>
          <p className="text-muted-foreground mb-6">
            This website is not intended for children under 13. We do not knowingly collect personal
            information from children. If a child has provided us information, please contact us so we
            can delete it. If you are under 13 and wish to use features requiring personal data, please
            ask a parent or guardian to do so on your behalf.
          </p>

          {/* 11. Your Rights */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            11. Your Rights
          </h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>Request a copy of the personal information we hold about you and details of processing.</li>
            <li>Request correction of inaccuracies in your personal information.</li>
            <li>
              Request portability of your personal information in a structured, commonly-used, machine-readable format (and for us to transmit it to a third party where technically feasible).
            </li>
            <li>Request deletion of your personal information or restriction of our use of it.</li>
            <li>
              Lodge a complaint with a supervisory authority (e.g., your local data protection
              authority; in the UK, the Information Commissionerâ€™s Office).
            </li>
          </ul>

          {/* 12. Changes */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            12. Changes to This Privacy Policy
          </h2>
          <p className="text-muted-foreground mb-6">
            We review this Privacy Policy regularly to keep it up to date and compliant with applicable
            laws. We reserve the right to revise it at any time. The updated policy will be posted on
            this page with the â€œLast updatedâ€ date adjusted. Please review periodically.
          </p>

          {/* 13. Contact */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            13. Contact Us
          </h2>
          <p className="text-muted-foreground mb-6">
            If you wish to exercise any of your rights in relation to your personal information or
            if you have any queries about how we use your personal information, please let us know
            by contacting us at the following address:{" "}
            <a className="underline" href="mailto:info@desnine.com">
              info@desnine.com
            </a>
            .
          </p>
        </article>
      </div>
    </div>
  );
}

``

## src\app\api\clients\route.ts

``ts
import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      companyName,
      email,
      phone,
      serviceNeeded,
      timeline,
      projectDetails,
    } = body;

    // TEST DATABASE CONNECTION
    await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID!,
    });

    // CREATE PAGE
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },

      properties: {
        "Full Name": {
          title: [
            {
              text: {
                content: fullName,
              },
            },
          ],
        },

        "Company Name": {
          rich_text: [
            {
              text: {
                content: companyName || "",
              },
            },
          ],
        },

        Email: {
          email: email,
        },

        Phone: {
          phone_number: phone || "",
        },

        "Service Needed": {
          select: {
            name: serviceNeeded,
          },
        },

        "Ideal Timeline": timeline
          ? {
              select: {
                name: timeline,
              },
            }
          : {
              select: null,
            },

        "Project Discription": {
          rich_text: [
            {
              text: {
                content: projectDetails,
              },
            },
          ],
        },
      },
    });

    return NextResponse.json({
      ok: true,
      message: "Form submitted successfully!",
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        ok: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
``

## src\components\sections\privacy\privacy-header-section.tsx

``tsx
"use client";

import { useMemo } from "react";

export function PrivacyHeaderSection() {
  const lastUpdated = useMemo(
    () =>
      new Date().toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    []
  );

  return (
    <header className="relative px-6 md:px-12">
      <div className="max-w-4xl mx-auto py-12 md:py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-lg p-8 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Privacy Policy
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-6">
            This website is operated by <span className="font-medium">Desnine Studio</span> (â€œweâ€, â€œusâ€, â€œourâ€). We collects, uses, and
            protects your information when you use our website, products, or services (the â€œServiceâ€). We respect the privacy of users of our website and recognise that when you choose to
            provide us with information about yourself, you trust us to act in a responsible manner with that information.
          </p>

          <div className="mt-2 mb-6 flex flex-nowrap gap-2 overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 text-xs md:text-sm px-3 py-1 rounded-full border border-white/10 bg-white/5">
              GDPR-Friendly
            </span>
            <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 text-xs md:text-sm px-3 py-1 rounded-full border border-white/10 bg-white/5">
              CCPA-Aware
            </span>
            <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 text-xs md:text-sm px-3 py-1 rounded-full border border-white/10 bg-white/5">
              Cookie Controls
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>
    </header>
  );
}

``

## src\app\article\future-of-branding-ai\page.tsx

``tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "@/lib/articlesData";
import { Clock, ChevronLeft } from "lucide-react";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";

const SLUG = "future-of-branding-ai";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
}

export const metadata = (() => {
  const article = ARTICLES.find((a) => a.slug === SLUG);
  if (!article) return {};
  const url = `https://yourdomain.com/article/${article.slug}`;
  return {
    title: `${article.title} â€” Desnine`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      images: [{ url: article.cover }],
    },
    alternates: { canonical: url },
  };
})();

export default function Page() {
  const article = ARTICLES.find((a) => a.slug === SLUG);
  if (!article) notFound();

  const related = ARTICLES.filter((a) => a.slug !== SLUG).slice(0, 3);

  return (
    <main className="w-full text-foreground bg-background">
      {/* Header */}
      <header className="relative w-full overflow-hidden">
        <div className="relative h-[240px] md:h-[320px]">
          <Image src={article.cover} alt={article.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-background/70 dark:bg-black/60" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 md:px-12 pb-8">
              <Link href="/article" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ChevronLeft className="size-4" /> Back to Articles
              </Link>
              <h1 className="mt-2 text-3xl md:text-5xl font-bold text-foreground max-w-4xl">
                {article.title}
              </h1>
              <div className="mt-3 flex items-center gap-4 text-muted-foreground">
                <span>{formatDate(article.date)}</span>
                <span className="inline-flex items-center gap-1"><Clock className="size-4" /> {article.readMins} min read</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="px-6 md:px-12 py-10">
        <article className="prose dark:prose-invert max-w-3xl mx-auto prose-headings:scroll-mt-24">
          <p className="lead">
            AI wonâ€™t replace creative direction â€” it will amplify it. Hereâ€™s a practical workflow we use.
          </p>

          <h2>1) Ideation with constraints</h2>
          <p>
            Start with brand pillars and guardrails. Use AI for breadth, then narrow with human judgment.
          </p>

          <h2>2) Systems over vibes</h2>
          <ul>
            <li>Define a typographic rhythm and spacing scale.</li>
            <li>Lock a color system and semantic tokens.</li>
            <li>Document patterns in a living guideline.</li>
          </ul>

          <h2>3) Review loops</h2>
          <p>
            Keep feedback short, structured, and testable. Prototype quickly, test assumptions, iterate.
          </p>
        </article>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 md:px-12 py-10">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Related reads</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={a.href}
                  className="group rounded-lg overflow-hidden border border-border hover:shadow-lg transition bg-card"
                >
                  <div className="relative h-40">
                    <Image src={a.cover} alt={a.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium leading-snug group-hover:underline">{a.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer sections */}
      <ContactUsSection />
      <FooterSection />
    </main>
  );
}

``

