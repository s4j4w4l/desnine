"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const digitalAssets = [
  {
    id: "newsletter",
    title: "Newsletter",
    description: "Engaging email campaigns",
    icon: "📧",
    color: "from-blue-50 to-blue-100",
    textColor: "text-blue-700",
    symbol: "▢"
  },
  {
    id: "presentation",
    title: "Presentation",
    description: "Clear slide decks",
    icon: "📊",
    color: "from-green-50 to-green-100",
    textColor: "text-green-700",
    symbol: "▣"
  },
  {
    id: "social",
    title: "Social Content",
    description: "Viral-ready posts",
    icon: "📱",
    color: "from-purple-50 to-purple-100",
    textColor: "text-purple-700",
    symbol: "◐"
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "User-focused interfaces",
    icon: "🎨",
    color: "from-rose-50 to-rose-100",
    textColor: "text-rose-700",
    symbol: "○"
  }
];

export function SeventhBentoAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % digitalAssets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = digitalAssets[index];

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      {/* Main Container */}
      <div className="relative w-72 h-44">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className={`absolute inset-0 rounded-xl shadow-lg bg-gradient-to-br ${current.color} ${current.textColor} p-6 border border-gray-200`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Content Layout */}
            <div className="flex flex-col justify-between h-full">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="text-3xl font-light">{current.symbol}</div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-current opacity-40 rounded-full"></div>
                  <div className="w-1 h-1 bg-current opacity-60 rounded-full"></div>
                  <div className="w-1 h-1 bg-current opacity-80 rounded-full"></div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">{current.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{current.description}</p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="text-xs opacity-60 uppercase tracking-wide">Digital Asset</div>
                <div className="w-6 h-0.5 bg-current opacity-30 rounded-full"></div>
              </div>
            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 rounded-xl" 
                 style={{
                   backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
                   backgroundSize: '20px 20px',
                   opacity: 0.02
                 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Service Description */}
      <div className="text-center max-w-md">
        <h4 className="text-lg font-medium text-gray-800 mb-2">Digital Design</h4>
        <p className="text-sm text-gray-600 leading-relaxed">
          Desnine creates digital assets like newsletters, presentations, social content, 
          and UI/UX that engage users. Every design is optimized for clarity and conversion.
        </p>
      </div>
    </div>
  );
}