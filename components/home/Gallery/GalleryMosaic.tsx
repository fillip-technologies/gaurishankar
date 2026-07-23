"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { GalleryImage } from "./gallery.types";

type GalleryMosaicProps = {
  images: GalleryImage[];
};

export function GalleryMosaic({ images }: GalleryMosaicProps) {
  return (
    <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-4">
      {images.map((item, index) => (
        <motion.figure
          key={item.id}
          className={`group relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-soft-cream)] shadow-[0_18px_55px_color-mix(in_srgb,var(--color-temple-maroon)_10%,transparent)] ${
            item.featured
              ? "sm:col-span-2 lg:row-span-2"
              : index === 2
                ? "lg:col-span-2"
                : ""
          }`}
          style={{
            borderRadius: item.featured ? "30px" : "24px",
          }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes={
              item.featured
                ? "(min-width: 1024px) 50vw, 100vw"
                : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_36%,color-mix(in_srgb,var(--color-temple-maroon)_62%,transparent))]"
            aria-hidden="true"
          />
          <figcaption className="absolute inset-x-0 bottom-0 p-5 text-[var(--color-white)]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-alert-icon)]">
              {item.category}
            </p>
            <h3 className="mt-2 font-[var(--font-cormorant),serif] text-3xl font-semibold leading-tight">
              {item.title}
            </h3>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

