import { themeCssVariables } from "@/src/constants/theme";

import { HeroSlider } from "./HeroSlider";

export function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[var(--color-soft-cream)]"
      style={themeCssVariables}
      aria-label="Shri GauriShankar Baikunthnath Dham Temple hero"
    >
      <HeroSlider />
    </section>
  );
}
