import { ShieldCheck, Users, Clock } from "lucide-react";

export function ContactHeroSection() {
  return (
    <section className="relative w-full">
      <div className="px-6">
        <div className="mx-auto max-w-4xl pt-10 md:pt-14 pb-16 text-center">
          <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-accent/40 px-3 py-1 text-xs font-medium">
            <span className="inline-block size-1.5 rounded-full bg-primary" />
            Get in touch
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tighter text-primary">
            Let’s Build Something Remarkable
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed tracking-tight text-balance">
            Have a bold idea or need ongoing creative support? Desnine is a creative studio
            crafting brands, websites, and visual systems that connect and convert.
          </p>

          {/* <div className="mt-8 grid grid-cols-3 gap-6 text-center max-sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <p className="mt-2 text-xs md:text-sm font-medium">Trusted Quality</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-primary" />
              <p className="mt-2 text-xs md:text-sm font-medium">Client-Focused</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-primary" />
              <p className="mt-2 text-xs md:text-sm font-medium">On-Time Delivery</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
