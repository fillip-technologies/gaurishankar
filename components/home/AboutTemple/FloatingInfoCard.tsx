"use client";

import { motion } from "framer-motion";

import { floatingInfoItems } from "./about.data";

export function FloatingInfoCard() {
  return (
    <motion.div
      className="absolute bottom-5 right-5 w-[min(360px,calc(100%-40px))] rounded-3xl border border-[color-mix(in_srgb,var(--color-white)_58%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-warm-ivory)_70%,transparent)] p-5 shadow-[0_22px_60px_color-mix(in_srgb,var(--color-temple-maroon)_18%,transparent)] backdrop-blur-xl"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      aria-label="Temple information"
    >
      <div className="grid gap-4">
        {floatingInfoItems.map((item) => {
          const Icon = item.icon;

          return (
            <div className="grid grid-cols-[auto_1fr] gap-3" key={item.label}>
              <span className="grid size-10 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-accent-gold)_18%,transparent)] text-[var(--color-warm-saffron)]">
                <Icon aria-hidden="true" size={18} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-text)]">
                  {item.label}
                </span>
                <span className="mt-1 block text-sm font-semibold leading-5 text-[var(--color-primary-text)]">
                  {item.value}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

