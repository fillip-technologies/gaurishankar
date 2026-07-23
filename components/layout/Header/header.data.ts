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
  { eyebrow: "LIVE UPDATES", label: "Today's Panchang", href: "/panchang" },
  { label: "Temple Open: 5:00 AM - 9:00 PM", href: "/darshan" },
  { label: "Upcoming Festivals", href: "/festivals" },
  { label: "Online Puja Booking Open", href: "/services/puja-booking" },
  { label: "Donate Online", href: "/donate" },
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

export const mobileNavItems: HeaderLink[] = navItems.filter(
  (item) => item.label !== "Aarti & Puja",
);

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
    description: "Reserve sacred pujas and sankalp offerings with care.",
    icon: CalendarCheck,
  },
  {
    label: "Prasad",
    href: "/services/prasad",
    description: "Request blessed prasad prepared for devotees.",
    icon: Gift,
  },
  {
    label: "VIP Pass",
    href: "/services/vip-pass",
    description: "Plan a smoother darshan during auspicious days.",
    icon: ShieldCheck,
  },
  {
    label: "Dharamshala",
    href: "/services/dharamshala",
    description: "Comfortable pilgrim stay near the temple campus.",
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
  "ॐ नमः शिवाय ❈ श्री शिव शिवाय नमस्तुभ्यम् ❈ श्री गौरीशंकर बैकुंठनाथ विजयतेताराम् ❈ जय महाकाल ❈ हर हर महादेव ❈ ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ❈ उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय माऽमृतात् ❈ नमामीशमीशान निर्वाणरूपम् ❈ ॐ नमः शिवाय • ॐ नमः शिवाय • ॐ नमः शिवाय ❈ ॐ नमः शिवाय ❈ श्री शिव शिवाय नमस्तुभ्यम् ❈ श्री गौरीशंकर बैकुंठनाथ विजयतेताराम् ❈ जय महाकाल ❈ हर हर महादेव ❈ ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ❈ उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय माऽमृतात् ❈ नमामीशमीशान निर्वाणरूपम् ❈ ॐ नमः शिवाय • ॐ नमः शिवाय • ॐ नमः शिवाय";
