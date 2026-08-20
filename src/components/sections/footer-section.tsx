"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/icons";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useMediaQuery } from "@/hooks/use-media-query";
import { siteConfig } from "@/lib/site";
import { useLang } from "@/contexts/LanguageContext";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 2L15 22l-4-8-8-4L22 2Z" stroke="currentColor" strokeWidth="2" fill="currentColor" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function FooterSection() {
  const tablet = useMediaQuery("(max-width: 1024px)");
  const [plane, setPlane] = useState(false);
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-10">
        <div className="relative flex flex-col items-start justify-start gap-y-4 max-w-xs mx-0">
          <PlaneTakeoff trigger={plane} />

          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="size-8" />
            <p className="text-xl font-semibold text-primary">Desnine Studio</p>
          </Link>

          <p className="text-sm tracking-tight text-muted-foreground font-medium">
            {f.description}
          </p>

          <NewsletterMini
            placeholder={f.newsletter}
            successMsg={f.successMsg}
            errorMsg={f.errorMsg}
            onSuccess={() => {
              setPlane(true);
              setTimeout(() => setPlane(false), 1400);
            }}
          />
        </div>

        <div className="pt-5 md:w-2/3">
          <div className="flex flex-row items-start justify-between gap-y-5 lg:pl-10">
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-primary">{f.navTitle}</li>

              {([
                { href: "/services", label: f.links.services },
                { href: "/work", label: f.links.ourWork },
                { href: "/about", label: "About" },
                { href: "/why", label: f.links.whyUs },
                { href: "/contact", label: f.links.contact },
                { href: "/privacy-policy", label: f.links.privacy },
              ] as const).map(({ href, label }) => (
                <li key={href} className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
                  <Link href={href}>{label}</Link>
                  <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                    <ChevronRightIcon className="h-4 w-4" />
                  </span>
                </li>
              ))}
            </ul>

            <ul className="hidden flex-col gap-y-2 sm:flex">
              <li className="mb-2 text-sm font-semibold text-primary">Services</li>
              {([
                ["/services/branding", "Branding"],
                ["/services/web-design", "Web Design"],
                ["/services/web-development", "Web Development"],
                ["/services/packaging-design", "Packaging Design"],
                ["/services/graphic-design", "Graphic Design"],
                ["/services/seo", "SEO"],
                ["/services/ai-automation", "AI Automation"],
              ] as const).map(([href, label]) => (
                <li key={href} className="text-[13px]/snug text-muted-foreground">
                  <Link href={href} className="transition hover:text-foreground">{label}</Link>
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-primary">{f.followTitle}</li>

              {([
                { href: siteConfig.links.linkedin, label: "LinkedIn" },
                { href: siteConfig.links.instagram, label: "Instagram" },
                { href: siteConfig.links.twitter, label: "Twitter / X" },
                { href: siteConfig.links.behance, label: "Behance" },
                { href: siteConfig.links.pinterest, label: "Pinterest" },
              ] as const).map(({ href, label }) => (
                <li key={label} className="group inline-flex items-center gap-1 text-[13px]/snug text-muted-foreground">
                  <Link href={href} target="_blank" rel="noopener noreferrer">{label}</Link>
                  <span className="flex size-4 items-center justify-center border border-border rounded translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                    <ChevronRightIcon className="h-4 w-4" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-48 md:h-64 relative mt-24 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text={tablet ? "Desnine Studio" : "Desnine Studio — Independent Design Studio"}
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

function NewsletterMini({
  placeholder,
  successMsg,
  errorMsg,
  onSuccess,
}: {
  placeholder: string;
  successMsg: string;
  errorMsg: string;
  onSuccess?: () => void;
}) {
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

      setMsg(successMsg);
      setEmail("");
      onSuccess?.();
    } catch (error: any) {
      setErr(errorMsg);
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
          placeholder={placeholder}
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

      <div className="mt-2 h-5 text-[12px] leading-5" aria-live="polite">
        {msg && <span className="text-green-600">{msg}</span>}
        {err && <span className="text-red-500">{err}</span>}
      </div>
    </div>
  );
}
