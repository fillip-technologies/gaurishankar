"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import type { TempleEvent } from "./upcoming-events.types";

type EventCardProps = {
  event: TempleEvent;
  isActive?: boolean;
};

export function EventCard({ event, isActive = false }: EventCardProps) {
  return (
    <motion.article
      className={`group flex h-[520px] flex-col overflow-hidden rounded-2xl border bg-[var(--color-warm-ivory)] shadow-[0_18px_48px_color-mix(in_srgb,var(--color-temple-maroon)_10%,transparent)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_62px_color-mix(in_srgb,var(--color-temple-maroon)_16%,transparent)] sm:h-[540px] xl:h-[560px] ${
        isActive
          ? "border-[var(--color-accent-gold)]"
          : "border-[var(--color-border)]"
      }`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative h-60 shrink-0 overflow-hidden sm:h-64 xl:h-72">
        <Image
          src={event.imageSrc}
          alt={event.title}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-warm-saffron)]">
          {event.date}
        </p>
        <h3 className="mt-2 font-[var(--font-cormorant),serif] text-xl font-semibold text-[var(--color-temple-name)]">
          {event.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[var(--color-secondary-text)]">
          {event.description}
        </p>
        <p className="mt-4 text-sm leading-6 text-[var(--color-secondary-text)]">
          Join devotees for a graceful temple experience with darshan, puja
          preparations, bhajan, prasad, and a calm space for family prayers.
        </p>
        <Link
          href={event.href}
          className="mt-auto inline-flex pt-5 text-sm font-semibold text-[var(--color-temple-maroon)] transition hover:text-[var(--color-hover-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-gold)]"
        >
          Read More
        </Link>
      </div>
    </motion.article>
  );
}
