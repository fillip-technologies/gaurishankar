import Link from "next/link";

import { alertItems } from "./header.data";

export function TopAlertBar() {
  const marqueeItems = [...alertItems, ...alertItems];

  return (
    <div className="h-8 overflow-hidden bg-[var(--color-temple-maroon)] text-[var(--color-white)] sm:h-9">
      <div className="group flex h-full items-center whitespace-nowrap">
        <div className="flex min-w-full items-center gap-8 px-4 [animation:header-marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => (
            <Link
              href={item.href}
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--color-white)_86%,transparent)] transition hover:text-[var(--color-alert-icon)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-alert-icon)]"
              key={`${item.label}-${index}`}
            >
              {item.eyebrow ? (
                <span className="inline-flex items-center gap-1 text-[var(--color-alert-icon)]">
                  <span aria-hidden="true">🔔</span>
                  {item.eyebrow}
                </span>
              ) : null}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes header-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .\\[animation\\:header-marquee_30s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
