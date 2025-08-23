import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Finchley — Case Study | Desnine",
  description: "Placeholder page for Finchley.",
  openGraph: {
    title: "Finchley — Case Study | Desnine",
    description: "Placeholder page for Finchley.",
    type: "website",
    url: "/work/finchley",
  },
};

// Banner component using Next/Image instead of background-image
function Banner({
  title,
  src,
  half = false,
}: {
  title?: string;
  src: string;
  half?: boolean;
}) {
  return (
    <div
      className={[
        "relative w-full overflow-hidden rounded-2xl border border-white/10",
        half ? "aspect-[8/9] md:aspect-[8/9]" : "aspect-[16/9] md:aspect-[16/9]",
      ].join(" ")}
    >
      <Image
        src={src}
        alt={title || "Finchley banner"}
        fill
        className="object-cover"
        priority={title ? true : false}
      />
      {title ? (
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl text-foreground">{title}</h1>
        </div>
      ) : null}
    </div>
  );
}

export default function FinchleyCasePage() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8 py-10 md:py-12">
        {/* Top banner with heading bottom-left */}
        <Banner title="Finchley" src="/Finchley/Frame 92.png" />

        {/* Three-section row */}
        <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2 text-justify">
            <h2 className="text-sm font-bold tracking-wider uppercase">THE PROJECT SUMMARY :</h2>
            <p className="mt-4 text-base font-normal leading-relaxed">
              Finchley is a placeholder case study. Replace this copy with your real summary. Keep
              two short paragraphs that outline the problem, the approach, and the outcome with a
              calm, confident tone.
            </p>
            <p className="mt-4 text-base font-normal leading-relaxed">
              Use this area to highlight user insights, brand goals, and the value delivered. Aim
              for ~80–120 words total so it stays balanced with the right column.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold tracking-wider uppercase">WHAT WE DID :</h3>
              <p className="mt-3 text-base font-normal">Logo & Branding</p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wider uppercase">CATEGORY</h3>
              <p className="mt-3 text-base font-normal">HEALTH & WELLNESS, ECOMMERCE, BEAUTY & CARE</p>
            </div>
          </div>
        </section>

        {/* Two more full-width banners */}
        <section className="mt-12 space-y-6">
          <Banner src="/Finchley/Frame 93.png" />
          <Banner src="/Finchley/Frame 94.png" />
        </section>

        {/* Two half-size banners */}
        <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Banner half src="/Finchley/Frame 95.png" />
          <Banner half src="/Finchley/Frame 96.png" />
        </section>
      </div>
    </main>
  );
}
