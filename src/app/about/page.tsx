import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Studio — Creative Direction in Quebec",
  description:
    "Meet Desnine Studio, a multi-disciplinary, independent design studio serving Vaudreuil-Dorion, Greater Montreal, Quebec, and clients worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Desnine Studio — Creative Direction in Quebec",
    description:
      "A multi-disciplinary, independent design studio creating brands, websites, packaging, and digital systems from Quebec.",
    url: "/about",
    siteName: "Desnine Studio",
  },
};

const principles = [
  ["Clarity has a shape", "Strategy becomes useful when it changes the decisions people can see: the hierarchy, language, rhythm, and details of an experience."],
  ["Systems outlast moments", "We look for a strong central idea and build rules around it, giving the work consistency without making every application identical."],
  ["Collaboration stays direct", "Good work depends on honest discussion, clear ownership, and feedback tied to the goal rather than personal theatre."],
  ["Craft serves the business", "Visual quality matters because it shapes perception and trust. It works best when paired with usefulness, accessibility, and technical care."],
] as const;

export default function AboutPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.desnine.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.desnine.com/about" },
    ],
  };

  return (
    <main className="min-h-screen w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
      <section className="relative overflow-hidden border-b border-border px-7 pb-24 pt-28 md:px-12 md:pb-32 md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_70%_at_50%_0%,rgba(185,28,28,0.14),transparent_70%)]" />
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted-foreground">
            <ol className="flex gap-2"><li><Link href="/">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-foreground">About</li></ol>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">About Desnine Studio</p>
          <h1 className="mt-5 max-w-5xl text-[clamp(2.8rem,7vw,6.8rem)] font-bold leading-[0.9] tracking-[-0.065em]">Creative direction for modern brands.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">Desnine Studio is a multi-disciplinary, independent design studio based in Quebec. We create brand identities, websites, packaging, and digital systems that help ambitious businesses communicate with greater clarity.</p>
        </div>
      </section>

      <section className="px-7 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">The studio</p>
          <div className="space-y-7 text-lg leading-8 text-muted-foreground">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">Independent by structure. Collaborative by practice.</h2>
            <p>We work across disciplines because brands are experienced across disciplines. A positioning decision affects the identity. The identity affects the website. Packaging, campaigns, content, and digital tools all need to feel like parts of the same business.</p>
            <p>Our role is to connect those decisions. We bring strategy and execution close together, keeping the idea intact from the first conversation to the details people eventually see and use.</p>
            <p>Desnine Studio serves businesses in Vaudreuil-Dorion, Hudson, the West Island of Montreal, Greater Montreal, and across Quebec. Our remote process also supports clients throughout Canada and internationally. Location creates local understanding; it does not limit the work.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-accent/25 px-7 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">How we think</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Principles behind the work.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {principles.map(([title, description]) => <article key={title} className="bg-background p-8"><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="px-7 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Capabilities</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">One studio, connected disciplines.</h2></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Branding", "Web Design", "Web Development", "Packaging Design", "Graphic Design", "SEO", "AI Automation"].map((name) => {
              const href = `/services/${name.toLowerCase().replaceAll(" ", "-")}`;
              return <Link key={name} href={href} className="rounded-xl border border-border p-5 font-semibold transition hover:bg-accent">{name} <span aria-hidden="true">↗</span></Link>;
            })}
          </div>
        </div>
      </section>
      <ContactUsSection />
      <FooterSection />
    </main>
  );
}
