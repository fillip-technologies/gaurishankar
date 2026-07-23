"use client";

import { Mouse } from "lucide-react";
import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-white)]/85 sm:flex"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="grid size-10 place-items-center rounded-full border border-[color-mix(in_srgb,var(--color-white)_38%,transparent)] bg-[color-mix(in_srgb,var(--color-warm-ivory)_12%,transparent)] backdrop-blur-md"
      >
        <Mouse size={18} />
      </motion.div>
      <span className="h-8 w-px bg-[linear-gradient(180deg,var(--color-accent-gold),transparent)]" />
    </motion.div>
  );
}

