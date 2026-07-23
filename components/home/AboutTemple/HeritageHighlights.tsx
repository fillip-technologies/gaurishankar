"use client";

import { motion } from "framer-motion";

import { heritageHighlights } from "./about.data";

export function HeritageHighlights() {
  return (
    <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
      {heritageHighlights.map((highlight, index) => {
        const Icon = highlight.icon;

        return (
          <motion.div
            className="grid grid-cols-[auto_1fr] gap-4"
            key={highlight.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
          >
            <span className="mt-1 grid size-11 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-accent-gold)_14%,transparent)] text-[var(--color-warm-saffron)]">
              <Icon aria-hidden="true" size={19} />
            </span>
            <span>
              <h3 className="font-[var(--font-cormorant),serif] text-xl font-semibold text-[var(--color-temple-name)]">
                {highlight.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[var(--color-secondary-text)]">
                {highlight.subtitle}
              </p>
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

