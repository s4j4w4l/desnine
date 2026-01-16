"use client";

import { motion } from "framer-motion";

type Stat = {
  number: string;
  value: number; // numeric for bar height
  label: string;
};

const stats: Stat[] = [
  { number: "01", value: 94, label: "Poor design ruins first impressions" },
  { number: "02", value: 60, label: "Users avoid unprofessional brands" },
  { number: "03", value: 23, label: "Revenue lost to inconsistency" },
  { number: "04", value: 50, label: "Seconds before users lose trust" },
];

const MAX_BAR_HEIGHT = 260; // px
const RED = "rgb(180, 43, 37)"; // DESNINE red

export function StatsBarSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs tracking-[0.25em] font-semibold text-black/60">
            STATS
          </p>
          <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
            Branding in Numbers
          </h2>
        </div>

        {/* Chart */}
        <div className="mt-14 rounded-3xl border border-black/10 p-10">
          <div className="relative h-[300px] flex items-end gap-6">
            {/* baseline */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10" />

            {stats.map((stat, i) => {
              const height = (stat.value / 100) * MAX_BAR_HEIGHT;

              return (
                <div key={stat.number} className="flex-1 flex flex-col items-center">
                  {/* BAR */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height }}
                    exit={{ height: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut",
                      delay: i * 0.12,
                    }}
                    className="w-full rounded-2xl"
                    style={{ backgroundColor: RED }}
                  />

                  {/* Value */}
                  <p className="mt-4 text-lg font-semibold">
                    {stat.value}%
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Descriptions */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.number} className="text-sm text-black/70">
              <span className="block text-xs font-semibold text-black/50">
                {stat.number}
              </span>
              {stat.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
