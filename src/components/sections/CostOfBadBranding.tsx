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
    desc: "You have seconds to impress — bad branding loses that moment.",
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
