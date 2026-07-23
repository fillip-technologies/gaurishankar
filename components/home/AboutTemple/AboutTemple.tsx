import { themeCssVariables } from "@/src/constants/theme";

import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";

export function AboutTemple() {
  return (
    <section
      className="bg-[var(--color-warm-ivory)] py-16 sm:py-20 lg:py-24"
      style={themeCssVariables}
      aria-labelledby="about-temple-title"
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <AboutImage />
        <div id="about-temple-title">
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
