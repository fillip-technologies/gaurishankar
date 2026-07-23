"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { UPCOMING_EVENTS_CONTENT } from "./upcoming-events.constants";
import { upcomingEvents } from "./upcoming-events.data";
import { EventCard } from "./EventCard";

type EventsSectionProps = {
  activeIndex: number;
  direction: number;
  onChange: (index: number) => void;
  onMove: (direction: 1 | -1) => void;
};

export function EventsSection({
  activeIndex,
  direction,
  onChange,
  onMove,
}: EventsSectionProps) {
  const visibleEvents = [0, 1, 2].map((offset) => {
    const eventIndex = (activeIndex + offset) % upcomingEvents.length;

    return {
      event: upcomingEvents[eventIndex],
      eventIndex,
    };
  });

  return (
    <div>
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <h2 className="font-[var(--font-cormorant),serif] text-4xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-5xl">
          {UPCOMING_EVENTS_CONTENT.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
          {UPCOMING_EVENTS_CONTENT.subtitle}
        </p>
      </motion.div>

      <div className="mt-10">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {upcomingEvents.map((event, index) => (
              <button
                type="button"
                key={event.title}
                onClick={() => onChange(index)}
                className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-gold)] ${
                  index === activeIndex
                    ? "w-8 bg-[var(--color-accent-gold)]"
                    : "w-2 bg-[color-mix(in_srgb,var(--color-secondary-text)_26%,transparent)]"
                }`}
                aria-label={`Show ${event.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onMove(-1)}
              className="grid size-10 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-temple-maroon)] transition hover:border-[var(--color-accent-gold)] hover:text-[var(--color-hover-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
              aria-label="Previous event"
            >
              <ChevronLeft aria-hidden="true" size={18} />
            </button>
            <button
              type="button"
              onClick={() => onMove(1)}
              className="grid size-10 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-temple-maroon)] transition hover:border-[var(--color-accent-gold)] hover:text-[var(--color-hover-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
              aria-label="Next event"
            >
              <ChevronRight aria-hidden="true" size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" aria-label="Upcoming events carousel">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              className="flex items-stretch"
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -54 || info.velocity.x < -420) {
                  onMove(1);
                }

                if (info.offset.x > 54 || info.velocity.x > 420) {
                  onMove(-1);
                }
              }}
            >
              {visibleEvents.map(({ event, eventIndex }, cardIndex) => (
                <div
                  className={`shrink-0 px-3 ${
                    cardIndex === 0
                      ? "w-full sm:w-1/2 xl:w-1/3"
                      : cardIndex === 1
                        ? "hidden sm:block sm:w-1/2 xl:w-1/3"
                        : "hidden xl:block xl:w-1/3"
                  }`}
                  key={`${event.title}-${eventIndex}`}
                >
                  <EventCard event={event} isActive={eventIndex === activeIndex} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
