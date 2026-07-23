import { themeCssVariables } from "@/src/constants/theme";

import { HeroOverlay } from "./HeroOverlay";
import { HeroSlider } from "./HeroSlider";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[var(--color-soft-cream)]"
      style={themeCssVariables}
      aria-label="Shri GauriShankar Baikunthnath Dham Temple hero"
    >
      <HeroSlider />
      <HeroOverlay />
      <ScrollIndicator />
    </section>
  );
}
