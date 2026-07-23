"use client";

import { Languages, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { HEADER_BRAND } from "./header.constants";
import { MantraBar } from "./MantraBar";

type MainHeaderProps = {
  isScrolled: boolean;
  onOpenMobileMenu: () => void;
};

export function MainHeader({ isScrolled, onOpenMobileMenu }: MainHeaderProps) {
  return (
    <div
      className={`border-b border-[var(--color-border)] bg-[var(--color-warm-ivory)] transition-all duration-300 ${
        isScrolled ? "py-3 lg:py-4" : "py-4 lg:py-6"
      }`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 lg:grid-cols-[minmax(280px,300px)_minmax(360px,1fr)_minmax(390px,auto)] lg:gap-4 lg:px-8 xl:grid-cols-[minmax(300px,340px)_minmax(0,1fr)_minmax(420px,auto)]">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 self-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-gold)] xl:max-w-[340px]"
          aria-label="Shri GauriShankar Baikunthnath Dham Temple home"
        >
          <span className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-full border border-[color-mix(in_srgb,var(--color-accent-gold)_42%,transparent)] bg-[var(--color-soft-cream)] shadow-[0_12px_26px_color-mix(in_srgb,var(--color-temple-maroon)_12%,transparent)] lg:size-14">
            <Image
              src={HEADER_BRAND.logoSrc}
              alt="Shri GauriShankar Baikunthnath Dham Temple logo"
              fill
              priority
              sizes="56px"
              className="object-cover"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-[var(--font-noto-devanagari),var(--font-geist-sans)] text-lg font-semibold leading-6 text-[var(--color-temple-name)] sm:text-xl">
              {HEADER_BRAND.nameHindi}
            </span>
            <span className="mt-0.5 block truncate text-xs font-medium uppercase tracking-[0.13em] text-[var(--color-english-subtitle)]">
              {HEADER_BRAND.subtitleEnglish}
            </span>
          </span>
        </Link>

        <div className="hidden min-w-0 self-center lg:flex lg:justify-center lg:px-1">
          <MantraBar />
        </div>

        <div className="relative z-10 hidden min-w-0 items-center justify-end gap-4 self-center lg:flex">
          <button
            type="button"
            className="inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[var(--color-border)] bg-[var(--color-white)] px-4 text-sm font-semibold text-[var(--color-primary-text)] transition hover:border-[var(--color-accent-gold)] hover:text-[var(--color-warm-saffron)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
            aria-label="Switch language"
          >
            <Languages aria-hidden="true" size={16} />
            हिंदी / EN
          </button>
          <Link
            href="/live-darshan"
            className="inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[var(--color-warm-saffron)] bg-[var(--color-white)] px-4 text-sm font-semibold text-[var(--color-temple-maroon)] transition hover:border-[var(--color-hover-gold)] hover:text-[var(--color-warm-saffron)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
          >
            <span className="size-2 rounded-full bg-[var(--color-temple-maroon)] shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-temple-maroon)_14%,transparent)]" />
            Live Darshan
          </Link>
          <Link
            href="/donate"
            className="inline-flex h-10 shrink-0 items-center whitespace-nowrap rounded-full bg-[var(--color-warm-saffron)] px-5 text-sm font-semibold text-[var(--color-white)] shadow-[0_14px_30px_color-mix(in_srgb,var(--color-warm-saffron)_26%,transparent)] transition hover:bg-[var(--color-donate-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-temple-maroon)]"
          >
            Donate
          </Link>
        </div>

        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="grid size-11 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-temple-maroon)] shadow-sm transition hover:text-[var(--color-warm-saffron)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)] lg:hidden"
          aria-label="Open menu"
          aria-haspopup="dialog"
        >
          <Menu aria-hidden="true" size={21} />
        </button>
      </div>
      <div className="mx-auto mt-3 w-full max-w-[1440px] px-4 sm:px-6 lg:hidden">
        <MantraBar />
      </div>
    </div>
  );
}
