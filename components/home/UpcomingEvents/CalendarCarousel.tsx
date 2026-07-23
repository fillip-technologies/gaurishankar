"use client";

import { panchangSlides } from "./upcoming-events.data";

type CalendarCarouselProps = {
  activeIndex: number;
};

const monthIndexByName: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getYear(dateLabel: string) {
  const match = dateLabel.match(/\d{4}/);

  return match ? Number(match[0]) : new Date().getFullYear();
}

function getCalendarDays(month: string, year: number) {
  const monthIndex = monthIndexByName[month] ?? 0;
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells: Array<number | null> = [];

  for (let index = 0; index < firstDay; index += 1) {
    cells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day);
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

export function CalendarCarousel({ activeIndex }: CalendarCarouselProps) {
  const activeSlide = panchangSlides[activeIndex];
  const year = getYear(activeSlide.festivalDate);
  const activeDate = Number(activeSlide.dateNumber);
  const calendarDays = getCalendarDays(activeSlide.month, year);

  return (
    <div aria-label={`${activeSlide.festivalName} Hindu calendar`}>
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-warm-saffron)]">
          Panchang Calendar
        </p>
        <p className="mt-3 font-[var(--font-cormorant),serif] text-4xl font-semibold text-[var(--color-temple-maroon)]">
          {activeSlide.month} {year}
        </p>
        <p className="mt-2 text-sm font-semibold text-[var(--color-secondary-text)]">
          {activeSlide.festivalDate}
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-soft-cream)] p-4">
        <div className="grid grid-cols-7 gap-1 text-center">
          {weekDays.map((day) => (
            <span
              className="pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-secondary-text)]"
              key={day}
            >
              {day}
            </span>
          ))}
          {calendarDays.map((day, index) => {
            const isActiveDay = day === activeDate;

            return (
              <span
                className={`grid aspect-square place-items-center rounded-full text-sm font-semibold ${
                  isActiveDay
                    ? "bg-[var(--color-temple-maroon)] text-[var(--color-white)] shadow-[0_10px_26px_color-mix(in_srgb,var(--color-temple-maroon)_26%,transparent)]"
                    : day
                      ? "text-[var(--color-primary-text)]"
                      : "text-transparent"
                }`}
                key={`${day ?? "blank"}-${index}`}
                aria-current={isActiveDay ? "date" : undefined}
              >
                {day}
              </span>
            );
          })}
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-[var(--color-soft-cream)] px-5 py-4 text-center">
        <p className="text-sm font-semibold text-[var(--color-warm-saffron)]">
          {activeSlide.weekday}
        </p>
        <p className="mt-1 font-[var(--font-cormorant),serif] text-2xl font-semibold text-[var(--color-temple-name)]">
          {activeSlide.festivalName}
        </p>
      </div>

      <dl className="mt-5 grid gap-3 border-t border-[var(--color-border)] pt-5">
        {[
          ["Festival", activeSlide.festivalName],
          ["Tithi", activeSlide.tithi],
          ["Sunrise", activeSlide.sunrise],
          ["Sunset", activeSlide.sunset],
          ["Nakshatra", activeSlide.nakshatra],
          ["Yoga", activeSlide.yoga],
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
    </div>
  );
}
