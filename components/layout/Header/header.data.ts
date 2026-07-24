import {
  BadgeIndianRupee,
  CalendarCheck,
  Gift,
  HandHeart,
  Home,
  ShieldCheck,
} from "lucide-react";

import type { AlertItem, HeaderLink, ServiceItem } from "./header.types";

export const alertItems: AlertItem[] = [
  { eyebrow: "TEMPLE UPDATES", label: "Panchang updates", href: "/panchang" },
  { label: "Temple Open: 5:00 AM - 9:00 PM", href: "/darshan" },
  { label: "Festival announcements", href: "/festivals" },
  { label: "Puja and seva information", href: "/services/puja-booking" },
  { label: "Support temple seva", href: "/donate" },
];

export const navItems: HeaderLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Darshan", href: "/darshan" },
  { label: "Aarti & Puja", href: "/aarti-puja" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const mobileNavItems: HeaderLink[] = navItems;

export const serviceItems: ServiceItem[] = [
  {
    label: "Donation",
    href: "/donate",
    description: "Support temple seva, daily rituals, and community service.",
    icon: HandHeart,
  },
  {
    label: "Puja Booking",
    href: "/services/puja-booking",
    description: "Share puja and sankalp requests with the temple team.",
    icon: CalendarCheck,
  },
  {
    label: "Prasad",
    href: "/services/prasad",
    description: "Find prasad information for devotees and families.",
    icon: Gift,
  },
  {
    label: "VIP Pass",
    href: "/services/vip-pass",
    description: "Check darshan guidance for busy and auspicious days.",
    icon: ShieldCheck,
  },
  {
    label: "Dharamshala",
    href: "/services/dharamshala",
    description: "View pilgrim stay guidance when it is available.",
    icon: Home,
  },
  {
    label: "Volunteer",
    href: "/services/volunteer",
    description: "Offer your time for seva, festivals, and guest support.",
    icon: BadgeIndianRupee,
  },
];

export const mantraText =
  "ॐ नमः शिवाय ❈ श्री शिव शिवाय नमस्तुभ्यम् ❈ हर हर महादेव ❈ ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ❈ नमामीशमीशान निर्वाणरूपम् ❈ ॐ नमः शिवाय • ॐ नमः शिवाय • ॐ नमः शिवाय";
