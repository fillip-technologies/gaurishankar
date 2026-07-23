"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { HERO_CONTENT } from "./hero.constants";

export function HeroContent() {
  return (
    <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1440px] items-center justify-center px-6 pb-28 pt-44 text-center sm:px-8 lg:pt-48">
      <div className="max-w-4xl">
        <motion.p
          className="font-[var(--font-noto-devanagari),var(--font-geist-sans)] text-sm font-semibold tracking-[0.2em] text-[var(--color-alert-icon)] sm:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          {HERO_CONTENT.sanskritTag}
        </motion.p>
        <motion.h1
          className="mt-5 font-[var(--font-cormorant),var(--font-noto-devanagari),serif] text-5xl font-semibold leading-[1.02] text-[var(--color-white)] drop-shadow-[0_10px_28px_color-mix(in_srgb,var(--color-primary-text)_38%,transparent)] sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
        >
          <span className="block">{HERO_CONTENT.headingLineOne}</span>
          <span className="block">{HERO_CONTENT.headingLineTwo}</span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[color-mix(in_srgb,var(--color-white)_86%,var(--color-soft-cream))] sm:text-lg"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.24, ease: "easeOut" }}
        >
          {HERO_CONTENT.subtitle}
        </motion.p>
        <motion.div
          className="mt-9 flex justify-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: "easeOut" }}
        >
          <Link
            href={HERO_CONTENT.ctaHref}
            className="inline-flex h-12 items-center rounded-full border border-[color-mix(in_srgb,var(--color-accent-gold)_54%,transparent)] bg-[color-mix(in_srgb,var(--color-warm-ivory)_92%,transparent)] px-7 text-sm font-semibold text-[var(--color-temple-maroon)] shadow-[0_18px_42px_color-mix(in_srgb,var(--color-primary-text)_24%,transparent)] transition hover:bg-[var(--color-white)] hover:text-[var(--color-warm-saffron)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-gold)]"
          >
            {HERO_CONTENT.ctaLabel}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

