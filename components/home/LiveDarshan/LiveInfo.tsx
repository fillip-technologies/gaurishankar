"use client";

import { motion } from "framer-motion";

import { liveInfoItems } from "./live-darshan.data";

export function LiveInfo() {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {liveInfoItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.article
            className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-warm-ivory)] p-6 shadow-[0_18px_48px_color-mix(in_srgb,var(--color-temple-maroon)_9%,transparent)]"
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          >
            <span className="grid size-12 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-accent-gold)_15%,transparent)] text-[var(--color-warm-saffron)]">
              <Icon aria-hidden="true" size={20} />
            </span>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary-text)]">
              {item.title}
            </h3>
            <p className="mt-2 font-[var(--font-cormorant),serif] text-2xl font-semibold text-[var(--color-temple-name)]">
              {item.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-secondary-text)]">
              {item.subtitle}
            </p>
          </motion.article>
        );
      })}
    </div>
  );
}

