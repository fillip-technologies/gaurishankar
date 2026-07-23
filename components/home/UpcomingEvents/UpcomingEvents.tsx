"use client";

import { useCallback, useState } from "react";

import { themeCssVariables } from "@/src/constants/theme";

import { EventsSection } from "./EventsSection";
import { StickyCalendar } from "./StickyCalendar";
import { upcomingEvents } from "./upcoming-events.data";

export function UpcomingEvents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const moveToIndex = useCallback((index: number) => {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  const moveByDirection = useCallback((nextDirection: 1 | -1) => {
    setDirection(nextDirection);
    setActiveIndex((current) => {
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

  return (
    <section
      className="bg-[var(--color-soft-cream)] py-20 sm:py-24 lg:py-[120px]"
      style={themeCssVariables}
      aria-labelledby="upcoming-events-title"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,7fr)_minmax(320px,3fr)] lg:gap-10">
        <div id="upcoming-events-title">
          <EventsSection
            activeIndex={activeIndex}
            direction={direction}
            onChange={moveToIndex}
            onMove={moveByDirection}
          />
        </div>
        <StickyCalendar
          activeIndex={activeIndex}
        />
      </div>
    </section>
  );
}
