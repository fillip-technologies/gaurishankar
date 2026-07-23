"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { HERO_AUTOPLAY_INTERVAL_MS } from "./hero.constants";
import { heroSlides } from "./hero.data";

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const didSwipeRef = useRef(false);

  const showSlide = useCallback((direction: 1 | -1) => {
    setActiveIndex((current) => {
      const nextIndex = current + direction;

      if (nextIndex < 0) {
        return heroSlides.length - 1;
      }

      if (nextIndex >= heroSlides.length) {
        return 0;
      }

      return nextIndex;
    });
  }, []);

  useEffect(() => {
    if (lightboxIndex !== null) {
      return;
    }

    const intervalId = window.setInterval(() => {
      showSlide(1);
    }, HERO_AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [lightboxIndex, showSlide]);

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  return (
    <motion.div
      className="absolute inset-0 cursor-grab overflow-hidden active:cursor-grabbing"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.08}
      onDragEnd={(_, info) => {
        didSwipeRef.current = Math.abs(info.offset.x) > 8;

        if (info.offset.x < -60 || info.velocity.x < -450) {
          showSlide(1);
        }

        if (info.offset.x > 60 || info.velocity.x > 450) {
          showSlide(-1);
        }

        window.setTimeout(() => {
          didSwipeRef.current = false;
        }, 0);
      }}
      onClick={() => {
        if (!didSwipeRef.current) {
          setLightboxIndex(activeIndex);
        }
      }}
      aria-roledescription="swipeable image carousel"
    >
      <AnimatePresence initial={false}>
        {heroSlides.map((slide, index) =>
          index === activeIndex ? (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.25, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1.08 }}
                transition={{
                  duration: HERO_AUTOPLAY_INTERVAL_MS / 1000 + 1.2,
                  ease: "linear",
                }}
              >
                <Image
                  src={slide.imageSrc}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                  sizes="100vw"
                  className="pointer-events-none object-cover select-none"
                />
              </motion.div>
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>

      <div
        className="absolute bottom-20 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 md:bottom-24"
        aria-label="Hero slide indicators"
        onClick={(event) => event.stopPropagation()}
      >
        {heroSlides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-gold)] ${
              index === activeIndex
                ? "w-8 bg-[var(--color-accent-gold)]"
                : "w-2.5 bg-[color-mix(in_srgb,var(--color-white)_60%,transparent)] hover:bg-[var(--color-white)]"
            }`}
            aria-label={`Show hero image ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-[color-mix(in_srgb,var(--color-primary-text)_86%,transparent)] p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex(null);
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Full size temple image"
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-[var(--color-warm-ivory)] text-[var(--color-temple-maroon)] shadow-lg transition hover:bg-[var(--color-white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxIndex(null);
              }}
              aria-label="Close full size image"
            >
              <X aria-hidden="true" size={22} />
            </button>
            <motion.div
              className="relative h-full max-h-[92vh] w-full max-w-[96vw]"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={heroSlides[lightboxIndex].imageSrc}
                alt={heroSlides[lightboxIndex].alt}
                fill
                sizes="96vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
