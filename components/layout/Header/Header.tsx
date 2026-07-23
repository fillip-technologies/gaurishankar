"use client";

import { useEffect, useState } from "react";

import { themeCssVariables } from "@/src/constants/theme";

import { HEADER_SCROLL_THRESHOLD } from "./header.constants";
import { MainHeader } from "./MainHeader";
import { MobileMenu } from "./MobileMenu";
import { Navbar } from "./Navbar";
import { TopAlertBar } from "./TopAlertBar";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <div style={themeCssVariables}>
      <header
        className={`fixed inset-x-0 top-0 z-50 text-[var(--color-primary-text)] transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--color-warm-ivory)]/95 shadow-[0_12px_34px_color-mix(in_srgb,var(--color-temple-maroon)_14%,transparent)] ring-1 ring-[var(--color-border)]/80 backdrop-blur-xl"
            : "bg-[var(--color-warm-ivory)]"
        }`}
      >
        <TopAlertBar />
        <MainHeader
          isScrolled={isScrolled}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        />
        <Navbar isScrolled={isScrolled} />
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
}
