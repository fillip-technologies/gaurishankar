"use client";

import { motion } from "framer-motion";

import { ABOUT_TEMPLE_CONTENT } from "./about.constants";
import { HeritageHighlights } from "./HeritageHighlights";

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-warm-saffron)]">
          {ABOUT_TEMPLE_CONTENT.label}
        </p>
        <span className="h-px w-16 bg-[var(--color-accent-gold)]" aria-hidden="true" />
      </div>

      <h2 className="mt-6 font-[var(--font-cormorant),serif] text-5xl font-semibold leading-[1.05] text-[var(--color-temple-name)] sm:text-6xl lg:text-7xl">
        <span className="block">{ABOUT_TEMPLE_CONTENT.headingPrefix}</span>
        <span className="text-[var(--color-accent-gold)]">
          {ABOUT_TEMPLE_CONTENT.headingHighlight}
        </span>
      </h2>

      <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
        {ABOUT_TEMPLE_CONTENT.description}
      </p>

      <blockquote className="mt-7 border-l-2 border-[var(--color-bilva-green)] pl-5 font-[var(--font-noto-devanagari),var(--font-geist-sans)] text-xl italic leading-9 text-[var(--color-bilva-green)]">
        “{ABOUT_TEMPLE_CONTENT.quote}”
      </blockquote>

      <HeritageHighlights />
    </motion.div>
  );
}

