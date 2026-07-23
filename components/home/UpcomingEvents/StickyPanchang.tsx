"use client";

import { motion } from "framer-motion";

import { PanchangCarousel } from "./PanchangCarousel";

type StickyPanchangProps = {
  currentIndex: number;
  direction: number;
  onChange: (index: number) => void;
  onMove: (direction: 1 | -1) => void;
};

export function StickyPanchang({
  currentIndex,
  direction,
  onChange,
  onMove,
}: StickyPanchangProps) {
  return (
    <motion.aside
      className="lg:sticky lg:top-[120px]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      aria-label="Sticky Panchang card"
    >
      <div className="flex rounded-3xl border border-[color-mix(in_srgb,var(--color-accent-gold)_42%,var(--color-border))] bg-[var(--color-warm-ivory)] p-7 shadow-[0_24px_70px_color-mix(in_srgb,var(--color-temple-maroon)_13%,transparent)] lg:h-[560px]">
        <PanchangCarousel
          currentIndex={currentIndex}
          direction={direction}
          onChange={onChange}
          onMove={onMove}
        />
      </div>
    </motion.aside>
  );
}
