import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import { getService, serviceSlugs } from "@/lib/services";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.desnine.com";

const process = [
  ["01", "Discovery + Direction", "We clarify the business, audience, goals, constraints, and what a successful outcome needs to accomplish."],
  ["02", "Design System", "We establish the structure, creative direction, and repeatable decisions that will guide the work."],
  ["03", "Build + Implement", "We develop the approved direction into complete, practical deliverables for the intended channels."],
  ["04", "Revisions + QA", "You review, we refine, and the work is checked for consistency, accuracy, and real-world use."],
  ["05", "Launch + Support", "We prepare the final handoff, support implementation, and remain available for agreed next steps."],
] as const;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const path = `/services/${service.slug}`;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: `${service.title} | Desnine Studio`,
      description: service.description,
      url: path,
      siteName: "Desnine Studio",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${service.name} by Desnine Studio` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Desnine Studio`,
      description: service.description,
      images: ["/opengraph-image"],
    },
  };
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const pageUrl = `${BASE_URL}/services/${service.slug}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: pageUrl },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: pageUrl,
    provider: {
      "@type": "ProfessionalService",
      name: "Desnine Studio",
      url: BASE_URL,
    },
    areaServed: [
      "Vaudreuil-Dorion",
      "Hudson",
      "West Island of Montreal",
      "Greater Montreal",
      "Quebec",
      "Canada",
    ],
  };

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      <section className="relative overflow-hidden border-b border-border px-7 pb-20 pt-28 md:px-12 md:pb-28 md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_70%_at_50%_0%,rgba(185,28,28,0.14),transparent_70%)]" />
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="transition hover:text-foreground" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="transition hover:text-foreground" href="/services">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">{service.shortName}</li>
            </ol>
          </nav>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{service.eyebrow}</p>
          <h1 className="max-w-5xl text-[clamp(2.7rem,7vw,6.6rem)] font-bold leading-[0.9] tracking-[-0.065em]">
            {service.h1}
          </h1>
          <p className="mt-8 max-w-3xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            {service.lead}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              {service.cta}
            </Link>
            <Link href="/work" className="rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:bg-accent">
              View selected work
            </Link>
          </div>
        </div>
      </section>

      <section className="px-7 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Overview</p></div>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">A clear system for meaningful work.</h2>
            {service.overview.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-muted-foreground md:text-lg">{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-accent/25 px-7 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">What you receive</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Deliverables shaped around the project.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item) => (
              <article key={item.title} className="bg-background p-7 md:p-8">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-7 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Why it works</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Designed to stay useful after launch.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {service.benefits.map((item) => (
              <article key={item.title} className="border-t border-border pt-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border px-7 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Our process</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Clear steps. Clean delivery.</h2>
          <ol className="mt-12 divide-y divide-border border-y border-border">
            {process.map(([number, title, description]) => (
              <li key={number} className="grid gap-3 py-7 md:grid-cols-[5rem_1fr_1.2fr] md:items-start">
                <span className="text-sm font-semibold text-secondary">{number}</span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="leading-7 text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-7 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Related work & expertise</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">See how the thinking connects.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {service.related.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-2xl border border-border p-7 transition hover:bg-accent/50">
                <h3 className="text-2xl font-semibold group-hover:text-secondary">{item.title} <span aria-hidden="true">↗</span></h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-accent/25 px-7 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Questions</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Useful answers before we begin.</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {service.faqs.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold marker:content-none">{item.question}</summary>
                <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-7 py-20 text-center md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl rounded-3xl bg-neutral-950 px-7 py-16 text-white md:px-14 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">Have a project in mind?</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">Let’s make the next step clear.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">Tell us what you are building, changing, or trying to solve. We will help define the right scope.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/90">{service.cta}</Link>
        </div>
      </section>

      <ContactUsSection />
      <FooterSection />
    </main>
  );
}
