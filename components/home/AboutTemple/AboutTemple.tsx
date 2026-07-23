import { themeCssVariables } from "@/src/constants/theme";

import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";

export function AboutTemple() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-warm-ivory)] py-16 sm:py-20 lg:py-24"
      style={themeCssVariables}
      aria-labelledby="about-temple-title"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[26vw] min-w-52 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-temple-maroon)_26%,transparent),color-mix(in_srgb,var(--color-warm-saffron)_18%,transparent)_48%,transparent)] opacity-95 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[26vw] min-w-52 bg-[linear-gradient(270deg,color-mix(in_srgb,var(--color-bilva-green)_24%,transparent),color-mix(in_srgb,var(--color-warm-saffron)_16%,transparent)_48%,transparent)] opacity-95 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 top-1/4 h-52 w-[38vw] rounded-full bg-[color-mix(in_srgb,var(--color-temple-maroon)_22%,transparent)] opacity-90 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-52 w-[38vw] rounded-full bg-[color-mix(in_srgb,var(--color-bilva-green)_20%,transparent)] opacity-85 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-16 h-40 w-[32vw] rounded-full bg-[color-mix(in_srgb,var(--color-warm-saffron)_20%,transparent)] opacity-80 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-40 w-[32vw] rounded-full bg-[color-mix(in_srgb,var(--color-temple-maroon)_18%,transparent)] opacity-78 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <AboutImage />
        <div id="about-temple-title">
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
