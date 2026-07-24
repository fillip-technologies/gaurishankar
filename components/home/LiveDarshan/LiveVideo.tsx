"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Play, Radio, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { liveTabs } from "./live-darshan.data";

type LiveVideoProps = {
  activeIndex: number;
};

export function LiveVideo({ activeIndex }: LiveVideoProps) {
  const [isFullViewOpen, setIsFullViewOpen] = useState(false);
  const activeTab = liveTabs[activeIndex];

  const openFullView = () => setIsFullViewOpen(true);
  const closeFullView = () => setIsFullViewOpen(false);

  return (
    <div className="overflow-hidden rounded-[32px] border border-[color-mix(in_srgb,var(--color-accent-gold)_38%,var(--color-border))] bg-[var(--color-warm-ivory)] p-3 shadow-[0_28px_90px_color-mix(in_srgb,var(--color-temple-maroon)_14%,transparent)]">
      <div
        className="relative aspect-video cursor-zoom-in overflow-hidden rounded-[24px] bg-[var(--color-soft-cream)]"
        onClick={openFullView}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openFullView();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Open ${activeTab.title} in full view`}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            className="absolute inset-0"
            key={activeTab.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Image
              src={activeTab.imageSrc}
              alt={activeTab.title}
              fill
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-cover transition duration-1000 hover:scale-[1.025]"
              priority={activeIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-warm-ivory)_8%,transparent),color-mix(in_srgb,var(--color-temple-maroon)_18%,transparent))]"
          aria-hidden="true"
        />

        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-temple-maroon)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-white)] shadow-lg">
          <span className="size-2 rounded-full bg-[var(--color-alert-icon)]" />
          Live
        </div>

        <button
          type="button"
          className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[color-mix(in_srgb,var(--color-white)_60%,transparent)] bg-[color-mix(in_srgb,var(--color-warm-ivory)_82%,transparent)] text-[var(--color-temple-maroon)] shadow-[0_22px_60px_color-mix(in_srgb,var(--color-primary-text)_24%,transparent)] backdrop-blur-xl transition hover:scale-105 hover:text-[var(--color-warm-saffron)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-gold)]"
          aria-label={`Open ${activeTab.title} in full view`}
          onClick={(event) => {
            event.stopPropagation();
            openFullView();
          }}
        >
          <Play aria-hidden="true" size={30} fill="currentColor" />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3 px-2 pb-1 text-sm font-semibold text-[var(--color-secondary-text)]">
        <Radio aria-hidden="true" size={17} className="text-[var(--color-warm-saffron)]" />
        {activeTab.title}
      </div>

      <AnimatePresence>
        {isFullViewOpen ? (
          <motion.div
            className="fixed inset-0 z-[120] bg-[color-mix(in_srgb,var(--color-primary-text)_88%,transparent)] p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeTab.title} full view`}
            onClick={closeFullView}
          >
            <button
              type="button"
              className="absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full bg-[var(--color-warm-ivory)] text-[var(--color-temple-maroon)] shadow-lg transition hover:text-[var(--color-warm-saffron)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
              aria-label="Close full view"
              onClick={(event) => {
                event.stopPropagation();
                closeFullView();
              }}
            >
              <X aria-hidden="true" size={22} />
            </button>

            <motion.div
              className="relative h-full overflow-hidden rounded-[28px] border border-[color-mix(in_srgb,var(--color-accent-gold)_42%,transparent)] bg-[var(--color-primary-text)]"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeTab.imageSrc}
                alt={activeTab.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
              <div className="absolute bottom-5 left-5 rounded-full bg-[color-mix(in_srgb,var(--color-warm-ivory)_86%,transparent)] px-5 py-2 text-sm font-semibold text-[var(--color-temple-maroon)] backdrop-blur-xl">
                {activeTab.title}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
