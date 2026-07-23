import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  CalendarCheck,
  Flame,
  Flower2,
  HandHeart,
  Sparkles,
} from "lucide-react";

import { themeCssVariables } from "@/src/constants/theme";

const aartiSchedule = [
  {
    icon: Bell,
    title: "Mangala Aarti",
    time: "06:00 AM",
    description: "Begin the day with sacred bells, mantras and peaceful darshan.",
  },
  {
    icon: Flower2,
    title: "Shringar Aarti",
    time: "08:00 AM",
    description: "Darshan after divine alankaar, flowers and daily puja seva.",
  },
  {
    icon: Flame,
    title: "Sandhya Aarti",
    time: "07:00 PM",
    description: "Evening deep daan, chanting and devotional aarti of Mahadev.",
  },
];

const pujaServices = [
  "Rudrabhishek Puja",
  "Mahamrityunjaya Jaap",
  "Bilva Patra Arpan",
  "Shravan Somvar Puja",
  "Pradosh Vrat Puja",
  "Festival Special Seva",
];

export default function AartiPujaPage() {
  return (
    <section
      className="bg-[var(--color-warm-ivory)] pt-44 text-[var(--color-primary-text)] sm:pt-48 lg:pt-52"
      style={themeCssVariables}
    >
      <div className="relative overflow-hidden">
        <div
          className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--color-accent-gold)_16%,transparent)] blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-6 pb-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pb-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-warm-saffron)]">
              AARTI & PUJA
            </p>
            <h1 className="mt-4 font-[var(--font-cormorant),serif] text-5xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-6xl lg:text-7xl">
              Sacred Rituals
              <span className="block text-[var(--color-accent-gold)]">
                For Every Devotee.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
              Participate in daily aarti, traditional puja and special seva at
              Shri GauriShankar Baikunthnath Dham with devotion and sankalp.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services/puja-booking"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-warm-saffron)] px-6 py-3 text-sm font-bold text-[var(--color-white)] shadow-[0_14px_34px_color-mix(in_srgb,var(--color-warm-saffron)_28%,transparent)] transition hover:bg-[var(--color-donate-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
              >
                <CalendarCheck aria-hidden="true" size={18} />
                Book Puja
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-warm-saffron)] bg-[var(--color-white)] px-6 py-3 text-sm font-bold text-[var(--color-temple-maroon)] transition hover:border-[var(--color-accent-gold)] hover:text-[var(--color-hover-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
              >
                <HandHeart aria-hidden="true" size={18} />
                Ask for Seva
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-soft-cream)] shadow-[0_26px_80px_color-mix(in_srgb,var(--color-temple-maroon)_14%,transparent)] lg:min-h-[520px]">
            <Image
              src="/images/homepage/shankarji.png"
              alt="Sacred Mahadev puja and aarti at Shri GauriShankar Baikunthnath Dham"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,color-mix(in_srgb,var(--color-temple-maroon)_58%,transparent))]"
              aria-hidden="true"
            />
            <div className="absolute bottom-6 left-6 right-6 border-y border-[color-mix(in_srgb,var(--color-accent-gold)_45%,transparent)] py-4 text-[var(--color-white)]">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-alert-icon)]">
                <Sparkles aria-hidden="true" size={16} />
                Daily Seva
              </p>
              <p className="mt-2 font-[var(--font-noto-devanagari),sans-serif] text-2xl font-semibold">
                ॐ नमः शिवाय
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-soft-cream)] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-warm-saffron)]">
              Daily Aarti Schedule
            </p>
            <div className="mt-7 grid gap-5">
              {aartiSchedule.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="grid gap-4 border-b border-[var(--color-border)] pb-5 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                  >
                    <span className="grid size-12 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-accent-gold)_16%,var(--color-warm-ivory))] text-[var(--color-warm-saffron)]">
                      <Icon aria-hidden="true" size={22} />
                    </span>
                    <div>
                      <h2 className="font-[var(--font-cormorant),serif] text-3xl font-semibold text-[var(--color-temple-name)]">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-[var(--color-secondary-text)]">
                        {item.description}
                      </p>
                    </div>
                    <p className="font-[var(--font-cormorant),serif] text-3xl font-semibold text-[var(--color-temple-maroon)]">
                      {item.time}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-warm-ivory)] p-7 shadow-[0_18px_55px_color-mix(in_srgb,var(--color-temple-maroon)_10%,transparent)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-warm-saffron)]">
              Puja Seva
            </p>
            <h2 className="mt-3 font-[var(--font-cormorant),serif] text-4xl font-semibold text-[var(--color-temple-name)]">
              Available Puja Offerings
            </h2>
            <ul className="mt-6 grid gap-3">
              {pujaServices.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3 text-sm font-medium text-[var(--color-primary-text)]"
                >
                  <span className="size-2 rounded-full bg-[var(--color-accent-gold)]" />
                  {service}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

