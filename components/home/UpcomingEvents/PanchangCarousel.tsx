"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { panchangSlides } from "./upcoming-events.data";

type PanchangCarouselProps = {
  currentIndex: number;
  direction: number;
  onChange: (index: number) => void;
  onMove: (direction: 1 | -1) => void;
};

export function PanchangCarousel({
  currentIndex,
  direction,
  onChange,
  onMove,
}: PanchangCarouselProps) {
  const slide = panchangSlides[currentIndex];

  return (
    <div className="flex h-full w-full flex-col" aria-label="Panchang carousel">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={slide.label}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 28 : -28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -28 : 28 }}
            transition={{ duration: 0.34, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -42 || info.velocity.x < -360) {
                onMove(1);
              }

              if (info.offset.x > 42 || info.velocity.x > 360) {
                onMove(-1);
              }
            }}
          >
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-warm-saffron)]">
                Panchang
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary-text)]">
                {slide.month}
              </p>
              <p className="mt-1 font-[var(--font-cormorant),serif] text-6xl font-semibold leading-none text-[var(--color-temple-maroon)]">
                {slide.dateNumber}
              </p>
              <p className="mt-2 font-[var(--font-cormorant),serif] text-xl font-semibold text-[var(--color-temple-name)]">
                {slide.weekday}
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--color-warm-saffron)]">
                {slide.festivalDate}
              </p>
            </div>

            <dl className="mt-6 grid gap-3 border-y border-[var(--color-border)] py-5">
              {[
                ["Festival", slide.festivalName],
                ["Tithi", slide.tithi],
                ["Sunrise", slide.sunrise],
                ["Sunset", slide.sunset],
                ["Nakshatra", slide.nakshatra],
                ["Yoga", slide.yoga],
              ].map(([label, value]) => (
                <div className="grid grid-cols-[1fr_auto] items-center gap-3" key={label}>
                  <dt className="text-sm font-medium text-[var(--color-secondary-text)]">
                    {label}
                  </dt>
                  <dd className="text-right text-sm font-semibold text-[var(--color-primary-text)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-auto flex items-center justify-center gap-4 pt-6">
        <button
          type="button"
          onClick={() => onMove(-1)}
          className="grid size-9 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-temple-maroon)] transition hover:border-[var(--color-accent-gold)] hover:text-[var(--color-hover-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
          aria-label="Previous Panchang"
        >
          <ChevronLeft aria-hidden="true" size={18} />
        </button>
        <div className="flex items-center gap-2">
          {panchangSlides.map((item, index) => (
            <button
              type="button"
              key={item.label}
              onClick={() => onChange(index)}
              className={`size-2 rounded-full transition ${
                index === currentIndex
                  ? "bg-[var(--color-accent-gold)]"
                  : "bg-[color-mix(in_srgb,var(--color-secondary-text)_30%,transparent)] hover:bg-[var(--color-hover-gold)]"
              }`}
              aria-label={`Show ${item.festivalName} Panchang`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => onMove(1)}
          className="grid size-9 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-temple-maroon)] transition hover:border-[var(--color-accent-gold)] hover:text-[var(--color-hover-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
          aria-label="Next Panchang"
        >
          <ChevronRight aria-hidden="true" size={18} />
        </button>
      </div>
    </div>
  );
}
