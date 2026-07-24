import { themeCssVariables } from "@/src/constants/theme";

import { FaqSection } from "./FaqSection";
import { MealVolunteerForm } from "./MealVolunteerForm";
import { VisitorGuidelines } from "./VisitorGuidelines";

export function InformationPageContent() {
  return (
    <main
      className="relative overflow-hidden bg-[var(--color-warm-ivory)] pt-48 pb-16 text-[var(--color-primary-text)] sm:pt-52 sm:pb-20 lg:pt-60 lg:pb-24"
      style={themeCssVariables}
    >
      <div
        className="absolute inset-0 opacity-[0.13] [background-image:radial-gradient(circle_at_center,var(--color-accent-gold)_1px,transparent_1.4px)] [background-size:30px_30px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1180px] px-6 sm:px-8">
        <VisitorGuidelines />
        <FaqSection />
        <MealVolunteerForm />
      </div>
    </main>
  );
}
