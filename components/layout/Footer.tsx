import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import { themeCssVariables } from "@/src/constants/theme";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Darshan", href: "/darshan" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const sevaLinks = [
  { label: "Puja Booking", href: "/puja-booking" },
  { label: "Donation", href: "/donation" },
  { label: "Prasad", href: "/prasad" },
  { label: "Volunteer", href: "/volunteer" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-temple-maroon)] text-[var(--color-white)]"
      style={themeCssVariables}
    >
      <div
        className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,var(--color-alert-icon)_1px,transparent_1.4px)] [background-size:28px_28px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--color-accent-gold)_24%,transparent)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.75fr_0.75fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <span className="relative grid size-16 place-items-center overflow-hidden rounded-full border border-[color-mix(in_srgb,var(--color-accent-gold)_55%,transparent)] bg-[var(--color-soft-cream)]">
                <Image
                  src="/images/logo/temple-logo.png"
                  alt="Shri GauriShankar Baikunthnath Dham Temple logo"
                  fill
                  sizes="64px"
                  className="object-contain p-1.5"
                />
              </span>
              <span>
                <span className="block font-[var(--font-noto-devanagari),sans-serif] text-2xl font-semibold leading-tight text-[var(--color-alert-icon)]">
                  श्री गौरीशंकर बैकुंठनाथ धाम
                </span>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.18em] text-[color-mix(in_srgb,var(--color-white)_72%,transparent)]">
                  Shri GauriShankar Baikunthnath Dham
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-[color-mix(in_srgb,var(--color-white)_78%,transparent)]">
              A sacred home of devotion, daily darshan, aarti and spiritual
              heritage for every devotee seeking peace in the presence of
              Mahadev.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 border-y border-[color-mix(in_srgb,var(--color-accent-gold)_36%,transparent)] py-3 text-sm text-[var(--color-alert-icon)]">
              <Sparkles aria-hidden="true" size={18} />
              <span className="font-[var(--font-noto-devanagari),sans-serif]">
                सर्वं शिवमयं जगत्
              </span>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-[var(--font-cormorant),serif] text-xl font-semibold text-[var(--color-alert-icon)]">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[color-mix(in_srgb,var(--color-white)_76%,transparent)] transition hover:text-[var(--color-alert-icon)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Temple services">
            <h2 className="font-[var(--font-cormorant),serif] text-xl font-semibold text-[var(--color-alert-icon)]">
              Seva
            </h2>
            <ul className="mt-5 space-y-3">
              {sevaLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[color-mix(in_srgb,var(--color-white)_76%,transparent)] transition hover:text-[var(--color-alert-icon)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-[var(--font-cormorant),serif] text-xl font-semibold text-[var(--color-alert-icon)]">
              Temple Info
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-[color-mix(in_srgb,var(--color-white)_78%,transparent)]">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 shrink-0 text-[var(--color-alert-icon)]"
                  aria-hidden="true"
                  size={18}
                />
                <span>Shri GauriShankar Baikunthnath Dham Temple</span>
              </li>
              <li className="flex gap-3">
                <Clock
                  className="mt-0.5 shrink-0 text-[var(--color-alert-icon)]"
                  aria-hidden="true"
                  size={18}
                />
                <span>Open daily: 5:00 AM - 9:00 PM</span>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="mt-0.5 shrink-0 text-[var(--color-alert-icon)]"
                  aria-hidden="true"
                  size={18}
                />
                <span>Temple office support</span>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 shrink-0 text-[var(--color-alert-icon)]"
                  aria-hidden="true"
                  size={18}
                />
                <span>info@gaurishankardham.org</span>
              </li>
            </ul>

            <Link
              href="/donation"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-warm-saffron)] px-5 py-3 text-sm font-bold text-[var(--color-white)] shadow-[0_12px_28px_color-mix(in_srgb,var(--color-warm-saffron)_30%,transparent)] transition hover:bg-[var(--color-donate-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-alert-icon)]"
            >
              <HeartHandshake aria-hidden="true" size={18} />
              Donate Online
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[color-mix(in_srgb,var(--color-accent-gold)_28%,transparent)] pt-6 text-xs text-[color-mix(in_srgb,var(--color-white)_64%,transparent)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Shri GauriShankar Baikunthnath Dham Temple.</p>
          <Link
            href="https://filliptechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-[color-mix(in_srgb,var(--color-white)_72%,transparent)] transition hover:text-[var(--color-alert-icon)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-alert-icon)]"
            aria-label="Designed and developed by Fillip Technologies"
          >
            <span>Designed and Developed by</span>
            <Image
              src="/images/Fillip-logo-white.webp"
              alt="Fillip Technologies"
              width={86}
              height={24}
              className="h-5 w-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
