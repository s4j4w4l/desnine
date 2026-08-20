"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const EMAIL_POPUP_ENABLED = false;

export default function EmailPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (!EMAIL_POPUP_ENABLED) return;

    const isDev = process.env.NODE_ENV === "development";
    const seen = localStorage.getItem("desnineWebsiteChecklistPopup");

    if (!seen || isDev) {
      const timer = setTimeout(() => setOpen(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("desnineWebsiteChecklistPopup", "true");
    setOpen(false);
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: formData.firstName,
        firstNameId: "c0JKYjlaQjVy",
        lastName: formData.lastName,
        lastNameId: "eXRLY3RtTi0",
        email: formData.email,
        emailId: "ckZzMTE",
        leadMagnet: "Website Launch Checklist",
      }),
    });

    setSubmitted(true);

    setTimeout(() => {
      closePopup();
    }, 3500);
  };

  if (!EMAIL_POPUP_ENABLED || !open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/45 px-4 py-5 backdrop-blur-md">
      <div className="relative grid max-h-[calc(100vh-40px)] w-full max-w-[900px] overflow-y-auto rounded-[28px] border border-white/35 bg-white/20 shadow-[0_24px_80px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-2xl md:grid-cols-[0.9fr_1.1fr]">
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/45 bg-white/35 text-2xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl transition hover:bg-white/50"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="relative aspect-square md:aspect-auto md:min-h-[520px]">
          <Image
            src="/Frame 3.jpg"
            alt="Website Launch Checklist"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-black/35 to-[#b5121b]/30" />
        </div>

        <div className="bg-white/15 p-4 backdrop-blur-xl sm:p-5 md:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-white/55 shadow-[0_12px_32px_rgba(23,23,23,0.14),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-md ring-1 ring-black/5">
              <Image
                src="/favicon.ico"
                alt="Desnine Studio"
                width={28}
                height={28}
                unoptimized
              />
            </div>

            <div>
              <p className="text-base font-semibold text-white drop-shadow-sm">
                Desnine Studio
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/40 bg-white/45 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.68)] backdrop-blur-2xl sm:p-5 md:p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#b5121b] drop-shadow-sm">
              Freebie
            </p>

            <h2 className="max-w-[420px] text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#171717] sm:text-4xl md:text-5xl">
              Website Launch Checklist
            </h2>

            <p className="mt-4 max-w-[420px] text-sm leading-relaxed text-neutral-600">
              Know exactly what to expect from your web designer.
              A free checklist so you stay in control of your launch.
            </p>

            {submitted ? (
              <div className="mt-6 flex flex-col items-center justify-center rounded-[20px] border border-white/45 bg-white/40 p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/45 bg-[#b5121b]/10 text-3xl text-[#b5121b] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                  ✓
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-[#171717]">
                  Check your email
                </h3>

                <p className="mt-2 max-w-[320px] text-sm leading-relaxed text-neutral-600">
                  Your checklist has been sent successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={submitEmail} className="mt-6 space-y-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName: e.target.value,
                      })
                    }
                    className="min-h-[48px] rounded-full border border-white/55 bg-white/45 px-4 text-sm text-[#171717] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] outline-none backdrop-blur-xl transition placeholder:text-neutral-500 focus:border-[#b5121b]/60 focus:bg-white/65"
                  />

                  <input
                    type="text"
                    required
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        lastName: e.target.value,
                      })
                    }
                    className="min-h-[48px] rounded-full border border-white/55 bg-white/45 px-4 text-sm text-[#171717] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] outline-none backdrop-blur-xl transition placeholder:text-neutral-500 focus:border-[#b5121b]/60 focus:bg-white/65"
                  />
                </div>

                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="min-h-[48px] w-full rounded-full border border-white/55 bg-white/45 px-4 text-sm text-[#171717] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] outline-none backdrop-blur-xl transition placeholder:text-neutral-500 focus:border-[#b5121b]/60 focus:bg-white/65"
                />

                <button
                  type="submit"
                  className="min-h-[50px] w-full rounded-full border border-white/25 bg-[#b5121b]/90 px-7 text-sm font-semibold text-white shadow-[0_14px_38px_rgba(181,18,27,0.32),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl transition hover:bg-[#931018]"
                >
                  Get the Checklist
                </button>
              </form>
            )}
          </div>

          <p className="mt-4 text-center text-xs text-white/75 drop-shadow-sm">
            Instant access. No spam. Built for better websites.
          </p>
        </div>
      </div>
    </div>
  );
}
