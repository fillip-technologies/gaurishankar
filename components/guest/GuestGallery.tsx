"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { themeCssVariables } from "@/src/constants/theme";

import { guestImages } from "./guest.data";
import type { GuestImage } from "./guest.types";

export function GuestGallery() {
  const [selectedGuest, setSelectedGuest] = useState<GuestImage | null>(null);

  return (
    <section
      className="relative overflow-hidden bg-[var(--color-warm-ivory)] pt-36 pb-16 text-[var(--color-primary-text)] sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24"
      style={themeCssVariables}
      aria-labelledby="guest-gallery-title"
    >
      <div
        className="absolute inset-0 opacity-[0.13] [background-image:radial-gradient(circle_at_center,var(--color-accent-gold)_1px,transparent_1.4px)] [background-size:30px_30px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-warm-saffron)]">
            Guest Section
          </p>
          <h1
            id="guest-gallery-title"
            className="mt-4 font-[var(--font-cormorant),serif] text-4xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-5xl"
          >
            Guest Gallery
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
            Devotee and guest moments from temple visits, darshan, aarti, and
            seva.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guestImages.map((guest, index) => (
            <motion.button
              type="button"
              className="group overflow-hidden border border-[var(--color-border)] bg-[var(--color-soft-cream)] text-left shadow-[0_18px_55px_color-mix(in_srgb,var(--color-temple-maroon)_10%,transparent)] transition hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--color-accent-gold)_62%,var(--color-border))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-gold)]"
              key={guest.id}
              onClick={() => setSelectedGuest(guest)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
            >
              <span className="relative block aspect-[4/3] overflow-hidden">
                <Image
                  src={guest.imageSrc}
                  alt={guest.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </span>
              <span className="block p-5">
                <span className="block font-[var(--font-cormorant),serif] text-2xl font-semibold leading-tight text-[var(--color-temple-name)]">
                  {guest.name}
                </span>
                <span className="mt-2 block text-sm leading-7 text-[var(--color-secondary-text)]">
                  {guest.intro}
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedGuest ? (
          <motion.div
            className="fixed inset-0 z-[120] bg-[color-mix(in_srgb,var(--color-primary-text)_88%,transparent)] p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedGuest.name} image preview`}
            onClick={() => setSelectedGuest(null)}
          >
            <button
              type="button"
              className="absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full bg-[var(--color-warm-ivory)] text-[var(--color-temple-maroon)] shadow-lg transition hover:text-[var(--color-warm-saffron)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
              aria-label="Close guest image"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedGuest(null);
              }}
            >
              <X aria-hidden="true" size={22} />
            </button>

            <motion.div
              className="relative mx-auto flex h-full max-w-5xl flex-col overflow-hidden border border-[color-mix(in_srgb,var(--color-accent-gold)_42%,transparent)] bg-[var(--color-warm-ivory)]"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative min-h-0 flex-1 bg-[var(--color-primary-text)]">
                <Image
                  src={selectedGuest.imageSrc}
                  alt={selectedGuest.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="border-t border-[var(--color-border)] px-5 py-4">
                <h2 className="font-[var(--font-cormorant),serif] text-2xl font-semibold text-[var(--color-temple-name)]">
                  {selectedGuest.name}
                </h2>
                <p className="mt-1 text-sm leading-7 text-[var(--color-secondary-text)]">
                  {selectedGuest.intro}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
