"use client";

import { motion } from "framer-motion";

import { themeCssVariables } from "@/src/constants/theme";

import { RoyalScroll } from "./RoyalScroll";
import { TIMINGS_CONTENT } from "./timings.constants";

export function TimingsSnapshot() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-warm-ivory)] py-16 sm:py-20 lg:py-24"
      style={themeCssVariables}
      aria-labelledby="timings-snapshot-title"
    >
      <div
        className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_center,var(--color-accent-gold)_1px,transparent_1.4px)] [background-size:30px_30px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--color-accent-gold)_16%,transparent)] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-warm-saffron)]">
            {TIMINGS_CONTENT.label}
          </p>
          <h2
            id="timings-snapshot-title"
            className="mt-4 font-[var(--font-cormorant),serif] text-3xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-4xl lg:text-5xl"
          >
            {TIMINGS_CONTENT.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
            {TIMINGS_CONTENT.subtitle}
          </p>
        </motion.div>

        <RoyalScroll />
      </div>
    </section>
  );
}

