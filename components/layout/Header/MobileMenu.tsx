"use client";

import { X } from "lucide-react";
import Link from "next/link";

import { mobileNavItems, serviceItems } from "./header.data";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-[color-mix(in_srgb,var(--color-temple-maroon)_42%,transparent)] backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close mobile menu"
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-[min(390px,88vw)] flex-col bg-[var(--color-warm-ivory)] shadow-[-18px_0_54px_color-mix(in_srgb,var(--color-temple-maroon)_18%,transparent)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
          <div>
            <p className="font-[var(--font-cormorant),serif] text-xl font-semibold text-[var(--color-temple-name)]">
              Menu
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-warm-saffron)]">
              Temple Access
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 place-items-center rounded-full bg-[var(--color-white)] text-[var(--color-temple-maroon)] shadow-sm transition hover:text-[var(--color-warm-saffron)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
            aria-label="Close menu"
          >
            <X aria-hidden="true" size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-6">
          <div className="grid gap-1">
            {mobileNavItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                onClick={onClose}
                className="rounded-xl px-3 py-3 text-base font-medium text-[var(--color-primary-text)] transition hover:bg-[var(--color-soft-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 border-t border-[var(--color-border)] pt-5">
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-bilva-green)]">
              Services
            </p>
            <div className="grid gap-1">
              {serviceItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  onClick={onClose}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-[var(--color-secondary-text)] transition hover:bg-[var(--color-soft-cream)] hover:text-[var(--color-warm-saffron)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-3 border-t border-[var(--color-border)] p-5">
          <Link
            href="/live-darshan"
            onClick={onClose}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[var(--color-warm-saffron)] bg-[var(--color-white)] text-sm font-semibold text-[var(--color-temple-maroon)] transition hover:border-[var(--color-hover-gold)] hover:text-[var(--color-warm-saffron)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
          >
            <span className="size-2 rounded-full bg-[var(--color-temple-maroon)] shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-temple-maroon)_14%,transparent)]" />
            Live Darshan
          </Link>
          <Link
            href="/donate"
            onClick={onClose}
            className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--color-warm-saffron)] px-5 text-sm font-semibold text-[var(--color-white)] shadow-[0_14px_32px_color-mix(in_srgb,var(--color-warm-saffron)_28%,transparent)] transition hover:bg-[var(--color-donate-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-temple-maroon)]"
          >
            Donate
          </Link>
        </div>
      </aside>
    </div>
  );
}
