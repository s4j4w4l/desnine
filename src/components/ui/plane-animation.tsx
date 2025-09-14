"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

export function PlaneAnimation({ trigger }: { trigger: boolean }) {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          key="plane"
          initial={{ opacity: 0, x: -40, y: 40, rotate: -25 }}
          animate={{ opacity: 1, x: 300, y: -220, rotate: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="pointer-events-none absolute left-6 bottom-6"
        >
          <Send className="h-7 w-7 text-blue-500 drop-shadow" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
