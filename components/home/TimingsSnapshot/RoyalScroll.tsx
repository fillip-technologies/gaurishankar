"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";

import { ScrollControls } from "./ScrollControls";
import { TimingSlide } from "./TimingSlide";
import { templeTimings } from "./timings.data";

const getCurrentMinutes = () => {
  const now = new Date();

  return now.getHours() * 60 + now.getMinutes();
};

const getCurrentTimingIndex = () => {
  const minutes = getCurrentMinutes();
  const index = templeTimings.findIndex(
    (timing) => minutes >= timing.startMinutes && minutes <= timing.endMinutes,
  );

  return index >= 0 ? index : 0;
};

export function RoyalScroll() {
  const initialTimingIndex = useMemo(() => getCurrentTimingIndex(), []);
  const [activeIndex, setActiveIndex] = useState(initialTimingIndex);
  const [currentTimingIndex] = useState(initialTimingIndex);
  const [direction, setDirection] = useState(1);

  const moveToIndex = useCallback((index: number) => {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  const moveByDirection = useCallback((nextDirection: 1 | -1) => {
    setDirection(nextDirection);
    setActiveIndex((current) => {
      const nextIndex = current + nextDirection;

      if (nextIndex < 0) {
        return templeTimings.length - 1;
      }

      if (nextIndex >= templeTimings.length) {
        return 0;
      }

      return nextIndex;
    });
  }, []);

  const activeTiming = useMemo(() => templeTimings[activeIndex], [activeIndex]);

  return (
    <motion.div
      className="relative mx-auto mt-12 max-w-6xl px-5 sm:px-10"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0.9 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <motion.div
          className="pointer-events-none absolute -left-4 top-1/2 z-20 hidden h-[78%] w-14 -translate-y-1/2 transform-gpu rounded-[999px] border border-[color-mix(in_srgb,var(--color-temple-maroon)_24%,var(--color-accent-gold))] bg-[linear-gradient(90deg,var(--color-warm-saffron),var(--color-accent-gold)_38%,var(--color-temple-maroon)_96%)] shadow-[18px_0_34px_color-mix(in_srgb,var(--color-temple-maroon)_20%,transparent),inset_-10px_0_18px_color-mix(in_srgb,var(--color-temple-maroon)_24%,transparent)] will-change-transform sm:block"
          initial={{ x: 420, rotate: -8, opacity: 0.95 }}
          whileInView={{ x: 0, rotate: -2 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute -right-4 top-1/2 z-20 hidden h-[78%] w-14 -translate-y-1/2 transform-gpu rounded-[999px] border border-[color-mix(in_srgb,var(--color-temple-maroon)_24%,var(--color-accent-gold))] bg-[linear-gradient(90deg,var(--color-temple-maroon),var(--color-accent-gold)_58%,var(--color-warm-saffron))] shadow-[-18px_0_34px_color-mix(in_srgb,var(--color-temple-maroon)_20%,transparent),inset_10px_0_18px_color-mix(in_srgb,var(--color-temple-maroon)_22%,transparent)] will-change-transform sm:block"
          initial={{ x: -420, rotate: 8, opacity: 0.95 }}
          whileInView={{ x: 0, rotate: 2 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        />

        <motion.div
          className="relative origin-center overflow-hidden border-y border-[color-mix(in_srgb,var(--color-temple-maroon)_26%,var(--color-accent-gold))] bg-[radial-gradient(circle_at_22%_24%,color-mix(in_srgb,var(--color-temple-maroon)_13%,transparent)_0_2px,transparent_3px),radial-gradient(circle_at_78%_38%,color-mix(in_srgb,var(--color-warm-saffron)_15%,transparent)_0_2px,transparent_4px),radial-gradient(circle_at_50%_95%,color-mix(in_srgb,var(--color-accent-gold)_28%,transparent),transparent_40%),linear-gradient(100deg,color-mix(in_srgb,var(--color-warm-saffron)_18%,var(--color-soft-cream)),var(--color-warm-ivory)_32%,color-mix(in_srgb,var(--color-accent-gold)_14%,var(--color-soft-cream))_70%,color-mix(in_srgb,var(--color-warm-saffron)_22%,var(--color-soft-cream)))] shadow-[0_32px_85px_color-mix(in_srgb,var(--color-temple-maroon)_18%,transparent)] will-change-transform"
          initial={{ scaleX: 0.16, opacity: 0.72 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transformOrigin: "center",
            borderRadius: "44% 42% 40% 43% / 12% 14% 17% 16%",
            clipPath:
              "polygon(2% 7%,6% 2%,11% 5%,16% 2%,22% 5%,29% 2%,36% 5%,44% 2%,52% 5%,60% 2%,68% 5%,76% 2%,84% 5%,91% 2%,96% 6%,98% 14%,97% 48%,99% 86%,94% 96%,87% 93%,80% 97%,72% 94%,64% 97%,56% 94%,48% 97%,40% 94%,32% 97%,24% 94%,16% 97%,9% 94%,3% 97%,1% 86%,3% 51%,1% 16%)",
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              moveByDirection(-1);
            }

            if (event.key === "ArrowRight") {
              moveByDirection(1);
            }
          }}
          tabIndex={0}
          role="region"
          aria-label="Swipeable royal parchment scroll temple timings"
        >
          <div
            className="pointer-events-none absolute inset-x-7 top-6 h-px bg-[linear-gradient(90deg,transparent,var(--color-accent-gold),transparent)] opacity-70"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-7 bottom-6 h-px bg-[linear-gradient(90deg,transparent,var(--color-accent-gold),transparent)] opacity-70"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(90deg,transparent_0_48%,color-mix(in_srgb,var(--color-temple-maroon)_12%,transparent)_50%,transparent_52%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 shadow-[inset_34px_0_50px_color-mix(in_srgb,var(--color-temple-maroon)_14%,transparent),inset_-34px_0_50px_color-mix(in_srgb,var(--color-temple-maroon)_14%,transparent),inset_0_0_58px_color-mix(in_srgb,var(--color-accent-gold)_18%,transparent)]"
            aria-hidden="true"
          />

          <motion.div
            className="relative overflow-hidden px-5 py-7 sm:px-14 sm:py-10 lg:px-20"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.48, duration: 0.45, ease: "easeOut" }}
          >
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={activeTiming.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 52 : -52 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -52 : 52 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -48 || info.velocity.x < -380) {
                    moveByDirection(1);
                  }

                  if (info.offset.x > 48 || info.velocity.x > 380) {
                    moveByDirection(-1);
                  }
                }}
              >
                <TimingSlide
                  timing={activeTiming}
                  activeIndex={activeIndex}
                  currentTimingIndex={currentTimingIndex}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.62, duration: 0.35, ease: "easeOut" }}
          >
            <ScrollControls
              activeIndex={activeIndex}
              onChange={moveToIndex}
              onMove={moveByDirection}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
