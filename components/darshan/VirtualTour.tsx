import Image from "next/image";

import { themeCssVariables } from "@/src/constants/theme";

import { virtualTourStops } from "./darshan.data";

export function VirtualTour() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-soft-cream)] py-16 text-[var(--color-primary-text)] sm:py-20 lg:py-24"
      style={themeCssVariables}
      aria-labelledby="virtual-tour-title"
    >
      <div
        className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_center,var(--color-accent-gold)_1px,transparent_1.4px)] [background-size:30px_30px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-warm-saffron)]">
            Virtual Tour
          </p>
          <h2
            id="virtual-tour-title"
            className="mt-4 font-[var(--font-cormorant),serif] text-4xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-5xl"
          >
            Walk Through
            <span className="block text-[var(--color-accent-gold)]">
              The Temple.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
            A static preview for a future immersive temple walkthrough, shaped
            around darshan, aarti, and sacred spaces.
          </p>

          <div className="mt-8 grid gap-4">
            {virtualTourStops.map((stop) => {
              const Icon = stop.icon;

              return (
                <article
                  className="grid grid-cols-[auto_1fr] gap-4 border-b border-[var(--color-border)] pb-4"
                  key={stop.title}
                >
                  <span className="grid size-12 place-items-center border border-[color-mix(in_srgb,var(--color-accent-gold)_42%,var(--color-border))] bg-[var(--color-warm-ivory)] text-[var(--color-temple-maroon)]">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <div>
                    <h3 className="font-[var(--font-cormorant),serif] text-2xl font-semibold text-[var(--color-temple-name)]">
                      {stop.title}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-[var(--color-secondary-text)]">
                      {stop.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden border border-[color-mix(in_srgb,var(--color-accent-gold)_46%,var(--color-border))] bg-[var(--color-warm-ivory)] shadow-[0_28px_80px_color-mix(in_srgb,var(--color-temple-maroon)_15%,transparent)] sm:min-h-[560px]">
          <Image
            src="/images/homepage/mandir-view.png"
            alt="Temple view for virtual tour preview"
            fill
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,color-mix(in_srgb,var(--color-temple-maroon)_56%,transparent))]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
