"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { HERO_CONTENT } from "./hero.constants";

export function HeroContent() {
  return (
    <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1440px] items-center justify-center px-6 pb-32 pt-44 text-center sm:px-8 lg:pt-48">
      <div className="max-w-5xl">
        <motion.p
          className="font-[var(--font-noto-devanagari),var(--font-geist-sans)] text-sm font-semibold tracking-[0.24em] text-[var(--color-alert-icon)] sm:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          {HERO_CONTENT.sanskritTag}
        </motion.p>
        <motion.h1
          className="mt-6 font-[var(--font-cormorant),var(--font-noto-devanagari),serif] text-6xl font-semibold leading-[0.96] text-[var(--color-white)] drop-shadow-[0_12px_30px_color-mix(in_srgb,var(--color-primary-text)_44%,transparent)] sm:text-7xl md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
        >
          <span className="block">{HERO_CONTENT.headingLineOne}</span>
          <span className="block">{HERO_CONTENT.headingLineTwo}</span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-7 max-w-[650px] text-base leading-8 text-[color-mix(in_srgb,var(--color-white)_88%,var(--color-soft-cream))] sm:text-lg"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.24, ease: "easeOut" }}
        >
          {HERO_CONTENT.subtitle}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: "easeOut" }}
        >
          <Link
            href={HERO_CONTENT.primaryCtaHref}
            className="inline-flex h-12 items-center rounded-full border border-[color-mix(in_srgb,var(--color-accent-gold)_58%,transparent)] bg-[var(--color-warm-saffron)] px-7 text-sm font-semibold text-[var(--color-white)] shadow-[0_18px_42px_color-mix(in_srgb,var(--color-primary-text)_24%,transparent)] transition hover:bg-[var(--color-donate-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-gold)]"
          >
            {HERO_CONTENT.primaryCtaLabel}
          </Link>
          <Link
            href={HERO_CONTENT.secondaryCtaHref}
            className="inline-flex h-12 items-center rounded-full border border-[color-mix(in_srgb,var(--color-warm-ivory)_62%,transparent)] bg-[color-mix(in_srgb,var(--color-warm-ivory)_18%,transparent)] px-7 text-sm font-semibold text-[var(--color-white)] backdrop-blur-md transition hover:border-[var(--color-accent-gold)] hover:text-[var(--color-alert-icon)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-gold)]"
          >
            {HERO_CONTENT.secondaryCtaLabel}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
