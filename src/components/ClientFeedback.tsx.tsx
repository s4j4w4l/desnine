/* eslint-disable @next/next/no-img-element */
import { siteConfig } from "@/lib/config";

export function ClientFeedback() {
  const { clientFeedback } = siteConfig;

  return (
    <section
      id="client-feedback"
      className="w-full bg-background py-20"
    >
      {/* Outer padding container (matches Bento spacing) */}
      <div className="flex justify-center w-full px-5 md:px-11">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Quote Box */}
          <div className="rounded-2xl bg-card p-8 md:p-10 flex flex-col justify-between">
            <p className="text-xl md:text-2xl text-primary leading-relaxed tracking-tighter font-medium">
              {clientFeedback.quote}
            </p>

            <div className="flex gap-4 items-center mt-8">
              <div className="size-10 rounded-full bg-primary overflow-hidden">
                <img
                  src={clientFeedback.author.image}
                  alt={clientFeedback.author.name}
                  className="size-full object-cover rounded-full"
                />
              </div>

              <div>
                <cite className="text-lg font-medium text-primary not-italic">
                  {clientFeedback.author.name}
                </cite>
                <p className="text-sm text-muted-foreground">
                  {clientFeedback.author.role}
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {clientFeedback.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-card p-7"
              >
                <div className="text-4xl md:text-5xl font-medium tracking-tighter text-primary">
                  {stat.value}
                </div>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-primary">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
