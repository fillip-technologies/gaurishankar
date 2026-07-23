"use client";

import { motion } from "framer-motion";

import { themeCssVariables } from "@/src/constants/theme";

import { GALLERY_CONTENT } from "./gallery.constants";
import { galleryImages } from "./gallery.data";
import { GalleryMosaic } from "./GalleryMosaic";

export function Gallery() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-soft-cream)] py-16 sm:py-20 lg:py-24"
      style={themeCssVariables}
      aria-labelledby="gallery-title"
    >
      <div
        className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--color-accent-gold)_14%,transparent)] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-warm-saffron)]">
            {GALLERY_CONTENT.label}
          </p>
          <h2
            id="gallery-title"
            className="mt-4 font-[var(--font-cormorant),serif] text-4xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-5xl lg:text-6xl"
          >
            {GALLERY_CONTENT.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
            {GALLERY_CONTENT.subtitle}
          </p>
        </motion.div>

        <GalleryMosaic images={galleryImages} />
      </div>
    </section>
  );
}

