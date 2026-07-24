"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import { themeCssVariables } from "@/src/constants/theme";

import { EventsCarousel } from "./EventsCarousel";
import { StickyPanchang } from "./StickyPanchang";
import { UPCOMING_EVENTS_CONTENT } from "./upcoming-events.constants";
import { upcomingEvents } from "./upcoming-events.data";

export function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const moveToIndex = useCallback((index: number) => {
    setDirection(index >= currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const moveByDirection = useCallback((nextDirection: 1 | -1) => {
    setDirection(nextDirection);
    setCurrentIndex((current) => {
      const nextIndex = current + nextDirection;

      if (nextIndex < 0) {
        return upcomingEvents.length - 1;
      }

      if (nextIndex >= upcomingEvents.length) {
        return 0;
      }

      return nextIndex;
    });
  }, []);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      moveByDirection(1);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, moveByDirection]);

  return (
    <section
      className="bg-[var(--color-soft-cream)] py-20 sm:py-24 lg:py-[120px]"
      style={themeCssVariables}
      aria-labelledby="upcoming-events-title"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,7fr)_minmax(320px,3fr)] lg:gap-10">
        <div>
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h2
              id="upcoming-events-title"
              className="font-[var(--font-cormorant),serif] text-3xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-4xl"
            >
              {UPCOMING_EVENTS_CONTENT.title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
              {UPCOMING_EVENTS_CONTENT.subtitle}
            </p>
          </motion.div>

          <EventsCarousel
            currentIndex={currentIndex}
            direction={direction}
            onChange={moveToIndex}
            onMove={moveByDirection}
            onPauseChange={setIsPaused}
          />
        </div>
        <StickyPanchang
          currentIndex={currentIndex}
          direction={direction}
          onChange={moveToIndex}
          onMove={moveByDirection}
        />
      </div>
    </section>
  );
}
