export function HeroOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary-text)_45%,transparent),color-mix(in_srgb,var(--color-primary-text)_20%,transparent)_48%,color-mix(in_srgb,var(--color-primary-text)_55%,transparent))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,color-mix(in_srgb,var(--color-accent-gold)_16%,transparent),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,color-mix(in_srgb,var(--color-temple-maroon)_28%,transparent),transparent)]" />
    </div>
  );
}
