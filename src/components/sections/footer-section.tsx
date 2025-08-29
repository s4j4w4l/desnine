"use client";

import { useState } from "react";
import { Icons } from "@/components/icons";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useMediaQuery } from "@/hooks/use-media-query";
import { siteConfig } from "@/lib/site";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function FooterSection() {
  const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start justify-start gap-y-4 max-w-xs mx-0">
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="size-8" />
            <p className="text-xl font-semibold text-primary">Desnine Studio</p>
          </Link>

          <p className="text-sm tracking-tight text-muted-foreground font-medium">
            {siteConfig.description}
          </p>

          {/* Newsletter directly under description */}
          <NewsletterMini />
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
                <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
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
                <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter
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

function NewsletterMini() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setEmail("");
    } finally {
      setLoading(false);
    }
  }

  return (
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
        className="p-2 border border-border rounded transition 
                  hover:bg-white hover:text-black hover:border-white 
                  disabled:opacity-50"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>

    </form>
  );
}
