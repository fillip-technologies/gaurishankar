"use client";

import { liveTabs } from "./live-darshan.data";

type LiveTabsProps = {
  activeIndex: number;
  onChange: (index: number) => void;
};

export function LiveTabs({ activeIndex, onChange }: LiveTabsProps) {
  return (
    <div
      className="mt-6 flex gap-2 overflow-x-auto rounded-full border border-[var(--color-border)] bg-[var(--color-soft-cream)] p-2"
      role="tablist"
      aria-label="Live darshan views"
    >
      {liveTabs.map((tab, index) => (
        <button
          type="button"
          role="tab"
          key={tab.id}
          aria-selected={index === activeIndex}
          onClick={() => onChange(index)}
          className={`h-11 shrink-0 rounded-full px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)] ${
            index === activeIndex
              ? "bg-[var(--color-temple-maroon)] text-[var(--color-white)] shadow-[0_12px_28px_color-mix(in_srgb,var(--color-temple-maroon)_22%,transparent)]"
              : "text-[var(--color-secondary-text)] hover:bg-[var(--color-warm-ivory)] hover:text-[var(--color-temple-maroon)]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

