"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const businessCards = [
  {
    id: "identity",
    name: "Brand Identity",
    title: "Logo · Type · Colour",
    company: "A connected visual system",
    color: "from-slate-100 to-slate-200",
    textColor: "text-slate-700",
    icon: "★"
  },
  {
    id: "packaging",
    name: "Packaging Design",
    title: "Labels · Packs · Product Lines",
    company: "Built for real applications",
    color: "from-blue-50 to-blue-100",
    textColor: "text-blue-700",
    icon: "●"
  },
  {
    id: "print",
    name: "Print Design",
    title: "Editorial · Signage · Collateral",
    company: "Consistent across touchpoints",
    color: "from-green-50 to-green-100",
    textColor: "text-green-700",
    icon: "◆"
  },
  {
    id: "campaign",
    name: "Campaign Design",
    title: "Concept · Art Direction · Assets",
    company: "A clear creative direction",
    color: "from-rose-50 to-rose-100",
    textColor: "text-rose-700",
    icon: "▲"
  }
];

export function SixthBentoAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % businessCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = businessCards[index];

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      {/* Business Card Container */}
      <div className="relative w-80 h-48 perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className={`absolute inset-0 rounded-lg shadow-lg bg-gradient-to-br ${current.color} ${current.textColor} p-6 overflow-hidden border border-gray-200`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Card Content */}
            <div className="flex flex-col justify-between h-full">
              {/* Top Section */}
              <div className="flex items-start justify-between">
                <div className="text-4xl">{current.icon}</div>
                <div className="w-2 h-2 bg-current opacity-30 rounded-full"></div>
              </div>

              {/* Bottom Section */}
              <div>
                <h2 className="text-xl font-bold mb-1">{current.name}</h2>
                <p className="text-sm opacity-90 mb-1">{current.title}</p>
                <p className="text-xs opacity-75">{current.company}</p>
              </div>
            </div>

            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 rounded-lg" 
                 style={{
                   backgroundImage: `radial-gradient(circle at 20% 20%, currentColor 1px, transparent 1px)`,
                   backgroundSize: '20px 20px',
                   opacity: 0.03
                 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>



    </div>
  );
}
