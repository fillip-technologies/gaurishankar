"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { ABOUT_TEMPLE_CONTENT } from "./about.constants";
import { FloatingInfoCard } from "./FloatingInfoCard";

export function AboutImage() {
  return (
    <motion.div
      className="relative min-h-[520px] overflow-hidden rounded-[32px] shadow-[0_28px_80px_color-mix(in_srgb,var(--color-temple-maroon)_16%,transparent)] lg:min-h-[680px]"
      initial={{ opacity: 0, x: -36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Image
        src={ABOUT_TEMPLE_CONTENT.imageSrc}
        alt={ABOUT_TEMPLE_CONTENT.imageAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-1000 hover:scale-[1.035]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,transparent,color-mix(in_srgb,var(--color-temple-maroon)_18%,transparent))]"
        aria-hidden="true"
      />
      <FloatingInfoCard />
    </motion.div>
  );
}

