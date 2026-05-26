"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function EmailPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <div className="relative grid w-full max-w-[900px] overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-2xl md:grid-cols-[0.9fr_1.1fr]">
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-2xl text-neutral-500 transition hover:bg-white"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="relative hidden min-h-[520px] md:block">
          <Image
            src="/Frame 3.jpg"
            alt="Website Launch Checklist"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="p-5 md:p-8">
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
              <p className="text-base font-semibold text-[#171717]">
                Desnine Studio
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#b5121b]/15 bg-neutral-50 p-5 shadow-[0_0_55px_rgba(181,18,27,0.18)] md:p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#b5121b]">
              Freebie
            </p>

            <h1 className="max-w-[420px] text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#171717] md:text-5xl">
              Website Launch Checklist
            </h1>

            <p className="mt-4 max-w-[420px] text-sm leading-relaxed text-neutral-600">
              Know exactly what to expect from your web designer.
              A free checklist so you stay in control of your launch.
            </p>

            {submitted ? (
              <div className="mt-6 flex flex-col items-center justify-center rounded-[20px] border border-[#b5121b]/15 bg-white p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#b5121b]/10 text-3xl text-[#b5121b]">
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
                <div className="grid grid-cols-2 gap-3">
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
                    className="min-h-[48px] rounded-full border border-neutral-300 bg-white px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#b5121b]"
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
                    className="min-h-[48px] rounded-full border border-neutral-300 bg-white px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#b5121b]"
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
                  className="min-h-[48px] w-full rounded-full border border-neutral-300 bg-white px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#b5121b]"
                />

                <button
                  type="submit"
                  className="min-h-[50px] w-full rounded-full bg-[#b5121b] px-7 text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition hover:bg-[#931018]"
                >
                  Get the Checklist
                </button>
              </form>
            )}
          </div>

          <p className="mt-4 text-center text-xs text-neutral-500">
            Instant access. No spam. Built for better websites.
          </p>
        </div>
      </div>
    </div>
  );
}
