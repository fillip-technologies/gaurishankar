import { liveStats } from "./live-darshan.data";

export function LiveStats() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {liveStats.map((stat) => (
        <div
          className="rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-warm-ivory)_78%,transparent)] px-5 py-4 text-center backdrop-blur-md"
          key={stat.label}
        >
          <p className="font-[var(--font-cormorant),serif] text-xl font-semibold text-[var(--color-temple-maroon)]">
            {stat.value}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary-text)]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

