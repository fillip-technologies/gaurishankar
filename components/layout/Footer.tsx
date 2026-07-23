import { themeCssVariables } from "@/src/constants/theme";

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--color-border)] bg-[var(--color-warm-ivory)] px-6 py-6 text-center text-sm text-[var(--color-secondary-text)]"
      style={themeCssVariables}
    >
      <p>© Shri GauriShankar Baikunthnath Dham Temple</p>
    </footer>
  );
}

