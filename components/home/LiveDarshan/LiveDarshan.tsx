"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { themeCssVariables } from "@/src/constants/theme";

import { LiveTabs } from "./LiveTabs";
import { LiveVideo } from "./LiveVideo";
import { LIVE_DARSHAN_CONTENT } from "./live-darshan.constants";

export function LiveDarshan() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative overflow-hidden bg-[var(--color-warm-ivory)] py-14 sm:py-16 lg:py-20"
      style={themeCssVariables}
      aria-labelledby="live-darshan-title"
    >
      <div
        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_center,var(--color-accent-gold)_1px,transparent_1.4px)] [background-size:28px_28px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--color-accent-gold)_18%,transparent)] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-warm-saffron)]">
            {LIVE_DARSHAN_CONTENT.label}
          </p>
          <h2
            id="live-darshan-title"
            className="mt-4 font-[var(--font-cormorant),serif] text-3xl font-semibold leading-[1.08] text-[var(--color-temple-name)] sm:text-4xl lg:text-5xl"
          >
            <span className="block">{LIVE_DARSHAN_CONTENT.headingPrefix}</span>
            <span>{LIVE_DARSHAN_CONTENT.headingSuffix} </span>
            <span className="text-[var(--color-accent-gold)]">
              {LIVE_DARSHAN_CONTENT.headingHighlight}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
            {LIVE_DARSHAN_CONTENT.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-6xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
        >
          <LiveVideo activeIndex={activeIndex} />
          <LiveTabs activeIndex={activeIndex} onChange={setActiveIndex} />
        </motion.div>
      </div>
    </section>
  );
}
