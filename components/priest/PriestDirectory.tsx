import { Mail, Phone, ScrollText, Sparkles } from "lucide-react";
import Image from "next/image";

import { themeCssVariables } from "@/src/constants/theme";

import { priestProfiles } from "./priest.data";

export function PriestDirectory() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-warm-ivory)] pt-48 pb-16 text-[var(--color-primary-text)] sm:pt-52 sm:pb-20 lg:pt-60 lg:pb-24"
      style={themeCssVariables}
      aria-labelledby="priest-directory-title"
    >
      <div
        className="absolute inset-0 opacity-[0.13] [background-image:radial-gradient(circle_at_center,var(--color-accent-gold)_1px,transparent_1.4px)] [background-size:30px_30px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            id="priest-directory-title"
            className="font-[var(--font-cormorant),serif] text-4xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-5xl"
          >
            Our Priests
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
            Meet the priests serving Shri GauriShankar Baikunthnath Dham with
            daily puja, aarti, sankalp, seva, and devotee guidance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {priestProfiles.map((priest) => (
            <article
              className="border border-[color-mix(in_srgb,var(--color-accent-gold)_38%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-soft-cream)_78%,var(--color-warm-ivory))] p-6 shadow-[0_18px_55px_color-mix(in_srgb,var(--color-temple-maroon)_10%,transparent)]"
              key={priest.id}
            >
              <div className="flex items-start gap-5">
                <div className="relative h-36 w-28 shrink-0 overflow-hidden border border-[var(--color-mantra-border)] bg-[var(--color-warm-ivory)] shadow-[0_12px_32px_color-mix(in_srgb,var(--color-temple-maroon)_10%,transparent)]">
                  <Image
                    src={priest.photoSrc}
                    alt={priest.photoAlt}
                    fill
                    sizes="112px"
                    className="object-contain p-2"
                  />
                </div>
                <div className="min-w-0">
                  <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-warm-saffron)]">
                    <Sparkles aria-hidden="true" size={15} />
                    {priest.designation}
                  </p>
                  <h2 className="mt-3 font-[var(--font-cormorant),serif] text-2xl font-semibold leading-tight text-[var(--color-temple-name)]">
                    {priest.fullName}
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-[var(--color-secondary-text)]">
                {priest.introduction}
              </p>

              <div className="mt-6 grid gap-3 border-y border-[var(--color-border)] py-5 text-sm">
                <p className="flex items-start gap-3 text-[var(--color-primary-text)]">
                  <ScrollText
                    aria-hidden="true"
                    size={18}
                    className="mt-0.5 shrink-0 text-[var(--color-warm-saffron)]"
                  />
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-secondary-text)]">
                      Role
                    </span>
                    {priest.role}
                  </span>
                </p>
                <p className="flex items-center gap-3 text-[var(--color-primary-text)]">
                  <Phone
                    aria-hidden="true"
                    size={18}
                    className="shrink-0 text-[var(--color-warm-saffron)]"
                  />
                  <a
                    href={`tel:${priest.contactNumber.replace(/\s/g, "")}`}
                    className="transition hover:text-[var(--color-warm-saffron)]"
                  >
                    {priest.contactNumber}
                  </a>
                </p>
                <p className="flex items-center gap-3 text-[var(--color-primary-text)]">
                  <Mail
                    aria-hidden="true"
                    size={18}
                    className="shrink-0 text-[var(--color-warm-saffron)]"
                  />
                  <a
                    href={`mailto:${priest.email}`}
                    className="break-all transition hover:text-[var(--color-warm-saffron)]"
                  >
                    {priest.email}
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
