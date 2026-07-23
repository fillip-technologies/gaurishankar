import type { TempleTiming } from "./timings.types";
import { templeTimings } from "./timings.data";

type TimingSlideProps = {
  timing: TempleTiming;
  activeIndex: number;
  currentTimingIndex: number;
};

export function TimingSlide({
  timing,
  activeIndex,
  currentTimingIndex,
}: TimingSlideProps) {
  return (
    <article className="mx-auto min-h-[430px] max-w-4xl py-4 text-center sm:min-h-[460px]">
      <p className="font-[var(--font-cormorant),serif] text-3xl font-semibold tracking-wide text-[var(--color-temple-maroon)] sm:text-4xl">
        ॐ Today&apos;s Temple Timings
      </p>

      <div
        className="mx-auto mt-4 h-px w-56 bg-[linear-gradient(90deg,transparent,var(--color-warm-saffron),var(--color-accent-gold),var(--color-warm-saffron),transparent)]"
        aria-hidden="true"
      />

      <div className="mt-7 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="text-center lg:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-warm-saffron)]">
            Selected Ritual
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 lg:justify-start">
            <span className="text-5xl" aria-hidden="true">
              {timing.icon}
            </span>
            <div>
              <h3 className="font-[var(--font-cormorant),serif] text-4xl font-semibold leading-none text-[var(--color-temple-name)] sm:text-5xl">
                {timing.title}
              </h3>
              <p className="mt-2 font-[var(--font-cormorant),serif] text-4xl font-semibold text-[var(--color-temple-maroon)]">
                {timing.time}
              </p>
            </div>
          </div>

          {activeIndex === currentTimingIndex ? (
            <p className="mt-5 inline-flex items-center gap-2 border-y border-[color-mix(in_srgb,var(--color-bilva-green)_35%,transparent)] px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-bilva-green)]">
              <span className="size-2 rounded-full bg-[var(--color-bilva-green)]" />
              Live Now
            </p>
          ) : null}

          <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-[var(--color-secondary-text)] lg:mx-0">
            {timing.note}
          </p>
        </div>

        <div className="space-y-1 text-left">
          {templeTimings.map((scheduleTiming, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={scheduleTiming.id}
                className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-[color-mix(in_srgb,var(--color-temple-maroon)_18%,transparent)] py-3 transition ${
                  isActive
                    ? "text-[var(--color-temple-maroon)]"
                    : "text-[var(--color-primary-text)]"
                }`}
              >
                <span
                  className={`text-2xl transition ${
                    isActive ? "scale-110" : "opacity-75"
                  }`}
                  aria-hidden="true"
                >
                  {scheduleTiming.icon}
                </span>
                <span
                  className={`font-[var(--font-cormorant),serif] text-2xl font-semibold ${
                    isActive ? "tracking-wide" : ""
                  }`}
                >
                  {scheduleTiming.title}
                </span>
                <span
                  className={`font-[var(--font-cormorant),serif] text-xl font-semibold ${
                    isActive
                      ? "text-[var(--color-warm-saffron)]"
                      : "text-[var(--color-secondary-text)]"
                  }`}
                >
                  {scheduleTiming.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
