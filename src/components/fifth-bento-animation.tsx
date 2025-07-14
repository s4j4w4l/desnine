"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fontStyles = [
  {
    fontClass: "font-sans",
    fontName: "Inter (Sans Serif)",
    colorClass: "text-blue-600",
  },
  {
    fontClass: "font-serif",
    fontName: "Georgia (Serif)",
    colorClass: "text-red-600",
  },
  {
    fontClass: "font-mono",
    fontName: "Courier New (Monospace)",
    colorClass: "text-green-600",
  },
  {
    fontClass: "font-serif italic",
    fontName: "Serif Italic",
    colorClass: "text-purple-600",
  },
];

export function FifthBentoAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % fontStyles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const { fontClass, fontName, colorClass } = fontStyles[index];

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <AnimatePresence mode="wait">
        <motion.span
          key={fontClass}
          className={`text-7xl font-bold ${fontClass} ${colorClass}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Aa
        </motion.span>
      </AnimatePresence>
      <motion.div
        key={fontName}
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {fontName}
      </motion.div>
    </div>
  );
}
