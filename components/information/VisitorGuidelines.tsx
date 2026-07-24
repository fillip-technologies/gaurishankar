import { visitorGuidelines } from "./information.data";

export function VisitorGuidelines() {
  return (
    <section aria-labelledby="visitor-guidelines-title">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-warm-saffron)]">
          Visitor Guidelines
        </p>
        <h2
          id="visitor-guidelines-title"
          className="mt-4 font-[var(--font-cormorant),serif] text-4xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-5xl"
        >
          Before You Visit
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {visitorGuidelines.map((guideline) => {
          const Icon = guideline.icon;

          return (
            <article
              className="border border-[color-mix(in_srgb,var(--color-accent-gold)_38%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-soft-cream)_76%,var(--color-warm-ivory))] p-6 shadow-[0_18px_55px_color-mix(in_srgb,var(--color-temple-maroon)_10%,transparent)]"
              key={guideline.title}
            >
              <span className="grid size-12 place-items-center bg-[var(--color-temple-maroon)] text-[var(--color-warm-ivory)]">
                <Icon aria-hidden="true" size={21} />
              </span>
              <h3 className="mt-5 font-[var(--font-cormorant),serif] text-2xl font-semibold text-[var(--color-temple-name)]">
                {guideline.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--color-secondary-text)]">
                {guideline.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
