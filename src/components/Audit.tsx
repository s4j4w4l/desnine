"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AUDIT_EMAIL = "info@desnine.com";
const CONFIGURATION_ERROR = "Audit API configuration is missing.";

export default function Audit() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sentByEmail, setSentByEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState("");

  const normalizeWebsite = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return trimmed;
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  };

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setOpen(false);
  };

  const openEmailFallback = () => {
    const cleanWebsite = normalizeWebsite(website);
    const subject = encodeURIComponent(
      `Free website audit request: ${cleanWebsite}`
    );
    const body = encodeURIComponent(
      [
        "Hi Desnine Studio,",
        "",
        "I'd like to request a free website audit.",
        "",
        `Website: ${cleanWebsite}`,
        `Work email: ${email.trim()}`,
        `Focus area: ${focus.trim()}`,
      ].join("\n")
    );

    window.location.href = `mailto:${AUDIT_EMAIL}?subject=${subject}&body=${body}`;
    setSentByEmail(true);
    setSent(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSentByEmail(false);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          website: normalizeWebsite(website),
          email,
          focus,
        }),
      });
      const data = (await res.json()) as {
        message?: string;
        error?: string;
      };

      if (!res.ok) {
        const message =
          data.message ||
          data.error ||
          "Something went wrong. Please try again.";

        if (res.status >= 500 && message === CONFIGURATION_ERROR) {
          openEmailFallback();
          return;
        }

        setError(message);
        return;
      }

      setSent(true);
    } catch (error) {
      console.error(error);
      openEmailFallback();
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/75 px-4 backdrop-blur-md">
      <div className="relative w-full max-w-[460px] overflow-hidden rounded-2xl border border-[#ff1f1f]/15 bg-white shadow-2xl shadow-[#171717]/10">
        <button
          type="button"
          onClick={closePopup}
          className="absolute right-4 top-4 z-20 text-xl text-neutral-400 transition hover:text-[#171717]"
          aria-label="Close audit popup"
        >
          ×
        </button>

        <div className="relative overflow-hidden bg-neutral-50 px-8 py-7">
          <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#ff1f1f]/15 blur-3xl" />
          <div className="absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-[#171717]/5 blur-3xl" />

          <div className="relative mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white p-2 shadow-sm">
              <Image
                src="/DesnineStudio.svg"
                alt="Desnine Studio logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-[#171717]">
                Desnine Studio
              </p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#ff1f1f]">
                Free Website Audit
              </p>
            </div>
          </div>

          <h2 className="relative text-3xl font-medium leading-tight text-[#171717]">
            Get your free
            <br />
            website audit
          </h2>

          <p className="relative mt-3 text-sm leading-6 text-neutral-600">
            We’ll review your website and send clear improvements for design,
            SEO, speed, and conversions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 bg-white px-8 py-7">
          {!sent ? (
            <>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-neutral-600">
                  Website URL
                </label>
                <input
                  required
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="yoursite.com"
                  pattern="^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}([\/?#].*)?$"
                  title="Enter a domain like yoursite.com or a full URL like https://yoursite.com"
                  className="h-11 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 text-sm text-[#171717] outline-none transition placeholder:text-neutral-400 focus:border-[#ff1f1f] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-neutral-600">
                  Work email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-11 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 text-sm text-[#171717] outline-none transition placeholder:text-neutral-400 focus:border-[#ff1f1f] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-neutral-600">
                  What matters most?
                </label>
                <select
                  required
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                  className="h-11 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 text-sm text-[#171717] outline-none transition focus:border-[#ff1f1f] focus:bg-white"
                >
                  <option value="">Select a focus area</option>
                  <option>SEO & search rankings</option>
                  <option>Page speed & performance</option>
                  <option>Design & user experience</option>
                  <option>Conversion & leads</option>
                  <option>Full website audit</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 h-11 w-full rounded-lg bg-[#ff1f1f] text-sm font-medium text-white shadow-lg shadow-[#ff1f1f]/25 transition hover:bg-[#e01818] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Get my free audit"}
              </button>

              {error && (
                <p className="rounded-lg border border-[#ff1f1f]/20 bg-[#ff1f1f]/10 px-4 py-3 text-sm text-[#9f1111]">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap justify-center gap-4 pt-1 text-xs text-neutral-500">
                <span>No spam</span>
                <span>24h report</span>
                <span>100% free</span>
              </div>
            </>
          ) : (
            <div className="animate-in fade-in zoom-in-95 py-6 text-center duration-500">
              <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#ff1f1f]/20" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#ff1f1f]/15 text-2xl text-[#ff1f1f] shadow-[0_12px_35px_rgba(255,31,31,0.16)]">
                  <span className="inline-block animate-bounce">✓</span>
                </span>
              </div>

              <h3 className="text-lg font-medium text-[#171717]">
                Request sent
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {sentByEmail
                  ? "Your email app is ready with the audit request. Send it to finish."
                  : "Check your email. Your free website audit request has been sent."}
              </p>

              <div className="mx-auto mt-5 flex max-w-[180px] items-center justify-center gap-1.5">
                <span className="h-1.5 flex-1 animate-pulse rounded-full bg-[#ff1f1f]" />
                <span className="h-1.5 flex-1 animate-pulse rounded-full bg-[#ff1f1f]/70 [animation-delay:150ms]" />
                <span className="h-1.5 flex-1 animate-pulse rounded-full bg-[#ff1f1f]/40 [animation-delay:300ms]" />
              </div>

              <button
                type="button"
                onClick={closePopup}
                className="mt-5 h-10 rounded-lg border border-neutral-200 px-5 text-sm text-neutral-700 transition hover:bg-neutral-50"
              >
                Close
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
