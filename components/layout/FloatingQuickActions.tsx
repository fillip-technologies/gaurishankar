import { MessageCircle } from "lucide-react";
import Image from "next/image";

import { themeCssVariables } from "@/src/constants/theme";

export function FloatingQuickActions() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[80] px-4"
      style={themeCssVariables}
      aria-label="Quick contact actions"
    >
      <a
        href="https://wa.me/"
        className="pointer-events-auto absolute left-4 bottom-0 grid size-14 place-items-center rounded-full border border-[color-mix(in_srgb,var(--color-bilva-green)_34%,var(--color-border))] bg-[var(--color-warm-ivory)] text-[var(--color-bilva-green)] shadow-[0_16px_40px_color-mix(in_srgb,var(--color-bilva-green)_22%,transparent)] transition hover:-translate-y-1 hover:border-[var(--color-bilva-green)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-gold)]"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle aria-hidden="true" size={27} />
      </a>

      <button
        type="button"
        className="pointer-events-auto absolute right-4 bottom-0 grid size-24 place-items-center rounded-full border border-[color-mix(in_srgb,var(--color-accent-gold)_42%,var(--color-border))] bg-[var(--color-warm-ivory)] shadow-[0_18px_46px_color-mix(in_srgb,var(--color-temple-maroon)_20%,transparent)] transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-gold)]"
        aria-label="Ask Nandi chatbot"
      >
        <span className="absolute inset-0 rounded-full bg-[color-mix(in_srgb,var(--color-accent-gold)_20%,transparent)] [animation:ask-nandi-pulse_2.6s_ease-in-out_infinite]" />
        <svg
          className="absolute inset-0 size-full text-[var(--color-temple-maroon)]"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <defs>
            <path id="ask-nandi-arc" d="M 15 52 A 35 35 0 0 1 85 52" />
          </defs>
          <text
            className="fill-[var(--color-warm-ivory)] stroke-[var(--color-warm-ivory)] text-[12px] font-black uppercase tracking-[0.18em]"
            strokeWidth="4"
          >
            <textPath href="#ask-nandi-arc" startOffset="50%" textAnchor="middle">
              ASK NANDI
            </textPath>
          </text>
          <text className="fill-[var(--color-temple-maroon)] text-[12px] font-black uppercase tracking-[0.18em]">
            <textPath href="#ask-nandi-arc" startOffset="50%" textAnchor="middle">
              ASK NANDI
            </textPath>
          </text>
        </svg>
        <Image
          src="/images/AskNandi.png"
          alt="AskNandi"
          width={72}
          height={72}
          className="relative size-16 rounded-full object-cover"
          priority
        />
      </button>
      <style>{`
        @keyframes ask-nandi-pulse {
          0%, 100% { transform: scale(0.92); opacity: 0.45; }
          50% { transform: scale(1.08); opacity: 0.12; }
        }
      `}</style>
    </div>
  );
}
