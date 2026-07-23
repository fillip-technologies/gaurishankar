import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { navItems } from "./header.data";
import { MegaMenu } from "./MegaMenu";

type NavbarProps = {
  isScrolled: boolean;
};

export function Navbar({ isScrolled }: NavbarProps) {
  return (
    <nav
      className={`hidden border-t border-[color-mix(in_srgb,var(--color-accent-gold)_30%,transparent)] bg-[var(--color-temple-maroon)] transition-all duration-300 lg:block ${
        isScrolled ? "h-12" : "h-14"
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6">
        <ul className="flex h-full items-center gap-1">
          {navItems.map((item) => {
            const isServices = item.label === "Services";

            return (
              <li className="group relative flex h-full items-center" key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex h-9 items-center gap-1 rounded-full px-4 text-sm font-medium text-[var(--color-white)] transition hover:bg-[color-mix(in_srgb,var(--color-white)_10%,transparent)] hover:text-[var(--color-accent-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
                  aria-haspopup={isServices ? "menu" : undefined}
                >
                  {item.label}
                  {isServices ? <ChevronDown aria-hidden="true" size={15} /> : null}
                </Link>
                {isServices ? <MegaMenu isScrolled={isScrolled} /> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
