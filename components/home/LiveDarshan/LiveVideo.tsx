"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Play, Radio } from "lucide-react";
import Image from "next/image";

import { liveMetaIcons, liveTabs } from "./live-darshan.data";

type LiveVideoProps = {
  activeIndex: number;
};

export function LiveVideo({ activeIndex }: LiveVideoProps) {
  const activeTab = liveTabs[activeIndex];
  const ViewersIcon = liveMetaIcons.viewers;
  const StatusIcon = liveMetaIcons.status;

  return (
    <div className="overflow-hidden rounded-[32px] border border-[color-mix(in_srgb,var(--color-accent-gold)_38%,var(--color-border))] bg-[var(--color-warm-ivory)] p-3 shadow-[0_28px_90px_color-mix(in_srgb,var(--color-temple-maroon)_14%,transparent)]">
      <div className="relative aspect-video overflow-hidden rounded-[24px] bg-[var(--color-soft-cream)]">
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

        <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-[color-mix(in_srgb,var(--color-warm-ivory)_82%,transparent)] px-4 py-2 text-sm font-semibold text-[var(--color-temple-maroon)] backdrop-blur-xl">
          <ViewersIcon aria-hidden="true" size={16} />
          {activeTab.viewers} watching
        </div>

        <button
          type="button"
          className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[color-mix(in_srgb,var(--color-white)_60%,transparent)] bg-[color-mix(in_srgb,var(--color-warm-ivory)_82%,transparent)] text-[var(--color-temple-maroon)] shadow-[0_22px_60px_color-mix(in_srgb,var(--color-primary-text)_24%,transparent)] backdrop-blur-xl transition hover:scale-105 hover:text-[var(--color-warm-saffron)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-gold)]"
          aria-label={`Play ${activeTab.title}`}
        >
          <Play aria-hidden="true" size={30} fill="currentColor" />
        </button>

        <div className="absolute bottom-5 left-5 rounded-2xl bg-[color-mix(in_srgb,var(--color-warm-ivory)_82%,transparent)] px-5 py-3 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-text)]">
            Current Aarti
          </p>
          <p className="mt-1 font-[var(--font-cormorant),serif] text-2xl font-semibold text-[var(--color-temple-name)]">
            {activeTab.currentAarti}
          </p>
        </div>

        <div className="absolute bottom-5 right-5 hidden items-center gap-2 rounded-full bg-[color-mix(in_srgb,var(--color-warm-ivory)_82%,transparent)] px-4 py-3 text-sm font-semibold text-[var(--color-temple-maroon)] backdrop-blur-xl sm:inline-flex">
          <StatusIcon aria-hidden="true" size={16} />
          {activeTab.status}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 px-2 pb-1 text-sm font-semibold text-[var(--color-secondary-text)]">
        <Radio aria-hidden="true" size={17} className="text-[var(--color-warm-saffron)]" />
        {activeTab.title}
      </div>
    </div>
  );
}

