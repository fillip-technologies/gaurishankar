import Link from "next/link";

import { serviceItems } from "./header.data";

type MegaMenuProps = {
  isScrolled?: boolean;
};

export function MegaMenu({ isScrolled = false }: MegaMenuProps) {
  return (
    <div
      className={`invisible absolute left-1/2 top-full z-50 mt-3 w-[min(720px,calc(100vw-48px))] -translate-x-1/2 translate-y-2 rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-warm-ivory)_96%,transparent)] p-3 opacity-0 shadow-[0_24px_64px_color-mix(in_srgb,var(--color-temple-maroon)_18%,transparent)] backdrop-blur-2xl transition duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
        isScrolled ? "mt-2" : ""
      }`}
      role="menu"
      aria-label="Services menu"
    >
      <div className="grid grid-cols-2 gap-2">
        {serviceItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              href={item.href}
              key={item.label}
              role="menuitem"
              className="group/item flex gap-3 rounded-xl p-4 text-left transition hover:bg-[var(--color-soft-cream)] focus-visible:bg-[var(--color-soft-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-accent-gold)_14%,transparent)] text-[var(--color-warm-saffron)] transition group-hover/item:bg-[color-mix(in_srgb,var(--color-accent-gold)_22%,transparent)]">
                <Icon aria-hidden="true" size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[var(--color-primary-text)]">
                  {item.label}
                </span>
                <span className="mt-1 block text-xs leading-5 text-[var(--color-secondary-text)]">
                  {item.description}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
