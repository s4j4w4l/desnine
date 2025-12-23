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
            We design with intention—combining strategy, creativity, and modern
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
