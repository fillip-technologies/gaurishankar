"use client";

import { motion } from "framer-motion";

import { CalendarCarousel } from "./CalendarCarousel";

type StickyCalendarProps = {
  activeIndex: number;
};

export function StickyCalendar({ activeIndex }: StickyCalendarProps) {
  return (
    <motion.aside
      className="lg:sticky lg:top-[120px]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      aria-label="Sticky Hindu calendar"
    >
      <div className="min-h-[610px] rounded-3xl border border-[color-mix(in_srgb,var(--color-accent-gold)_42%,var(--color-border))] bg-[var(--color-warm-ivory)] p-7 shadow-[0_24px_70px_color-mix(in_srgb,var(--color-temple-maroon)_13%,transparent)]">
        <CalendarCarousel activeIndex={activeIndex} />
      </div>
    </motion.aside>
  );
}
