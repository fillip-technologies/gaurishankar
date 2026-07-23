import { ChevronLeft, ChevronRight } from "lucide-react";

import { templeTimings } from "./timings.data";

type ScrollControlsProps = {
  activeIndex: number;
  onChange: (index: number) => void;
  onMove: (direction: 1 | -1) => void;
};

export function ScrollControls({
  activeIndex,
  onChange,
  onMove,
}: ScrollControlsProps) {
  return (
    <div className="relative z-10 flex items-center justify-center gap-5 px-6 pb-9">
      <button
        type="button"
        onClick={() => onMove(-1)}
        className="grid size-10 place-items-center border-y border-[color-mix(in_srgb,var(--color-temple-maroon)_32%,var(--color-accent-gold))] text-[var(--color-temple-maroon)] transition hover:text-[var(--color-hover-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
        aria-label="Previous temple timing"
      >
        <ChevronLeft aria-hidden="true" size={18} />
      </button>
      <div className="flex items-center gap-2">
        {templeTimings.map((timing, index) => (
          <button
            type="button"
            key={timing.id}
            onClick={() => onChange(index)}
            className={`h-1.5 transition ${
              index === activeIndex
                ? "w-8 bg-[var(--color-temple-maroon)]"
                : "w-3 bg-[color-mix(in_srgb,var(--color-secondary-text)_34%,transparent)] hover:bg-[var(--color-hover-gold)]"
            }`}
            aria-label={`Show ${timing.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => onMove(1)}
        className="grid size-10 place-items-center border-y border-[color-mix(in_srgb,var(--color-temple-maroon)_32%,var(--color-accent-gold))] text-[var(--color-temple-maroon)] transition hover:text-[var(--color-hover-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
        aria-label="Next temple timing"
      >
        <ChevronRight aria-hidden="true" size={18} />
      </button>
    </div>
  );
}
