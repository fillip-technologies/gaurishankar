import type { PriestProfile } from "./priest.types";

export const priestProfiles: PriestProfile[] = [
  {
    id: "head-priest",
    fullName: "Pt. Shivnarayan Shastri",
    designation: "Head Priest",
    contactNumber: "+91 98765 43210",
    email: "head.priest@example.com",
    role: "Daily puja, aarti, sankalp, and festival rituals",
    introduction:
      "Guides devotees through daily worship, traditional Shiva rituals, and important temple ceremonies with devotion and discipline.",
    photoSrc: "/images/logo/temple-logo.png",
    photoAlt: "Passport size placeholder photo of Pt. Shivnarayan Shastri",
  },
  {
    id: "ritual-priest",
    fullName: "Pt. Gaurav Mishra",
    designation: "Ritual Priest",
    contactNumber: "+91 98765 43211",
    email: "ritual.priest@example.com",
    role: "Rudrabhishek, jaap, vrat puja, and family sankalp",
    introduction:
      "Assists devotees with puja arrangements, mantra path, and sacred offerings for personal and family prayers.",
    photoSrc: "/images/logo/temple-logo.png",
    photoAlt: "Passport size placeholder photo of Pt. Gaurav Mishra",
  },
  {
    id: "seva-priest",
    fullName: "Pt. Mohan Tiwari",
    designation: "Seva Priest",
    contactNumber: "+91 98765 43212",
    email: "seva.priest@example.com",
    role: "Temple seva, prasad guidance, and devotee support",
    introduction:
      "Supports temple seva activities and helps devotees understand rituals, timings, and offerings during their visit.",
    photoSrc: "/images/logo/temple-logo.png",
    photoAlt: "Passport size placeholder photo of Pt. Mohan Tiwari",
  },
];
