"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DESNINE_RED = "#7A0000";

export function DesnineTrustBadge() {
  return (
    <div className="flex items-center justify-between gap-65 w-full max-w-md">

      
      {/* Left: Desnine logo (vertical spin) */}
      <motion.div
        className="flex items-center"
        style={{ perspective: 800 }}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Image
          src="/Desnine-logo.png" // ← replace if needed
          alt="Desnine"
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
      </motion.div>

      {/* Right: stars + label */}
      <div className="flex flex-col items-end gap-1">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill={DESNINE_RED}
              aria-hidden="true"
            >
              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Loved by Big Brands
        </p>
      </div>

    </div>
  );
}
