export function HeroOverlay() {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-10">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-temple-maroon)_54%,transparent),color-mix(in_srgb,var(--color-warm-saffron)_24%,transparent)_44%,color-mix(in_srgb,var(--color-accent-gold)_18%,transparent))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,color-mix(in_srgb,var(--color-accent-gold)_22%,transparent),transparent_38%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,color-mix(in_srgb,var(--color-primary-text)_48%,transparent),transparent)]" />
      <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--color-warm-ivory)_12%,transparent)]" />
    </div>
  );
}

