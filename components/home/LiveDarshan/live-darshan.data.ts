import { BellRing, Clock, Flame, Radio, Users } from "lucide-react";

import type { LiveDarshanTab, LiveInfoItem, LiveStat } from "./live-darshan.types";

export const liveTabs: LiveDarshanTab[] = [
  {
    id: "sanctum",
    label: "Sanctum",
    title: "Sanctum Darshan",
    imageSrc: "/images/homepage/hero-new-3.png",
    currentAarti: "Darshan",
    status: "Temple darshan view",
    viewers: "Updates",
  },
  {
    id: "morning-aarti",
    label: "Morning Aarti",
    title: "Morning Aarti Darshan",
    imageSrc: "/images/homepage/hero-new-1.png",
    currentAarti: "Mangala Aarti",
    status: "Morning ritual information",
    viewers: "Schedule",
  },
  {
    id: "evening-aarti",
    label: "Evening Aarti",
    title: "Evening Aarti Darshan",
    imageSrc: "/images/homepage/slide-4.jpg",
    currentAarti: "Sandhya Aarti",
    status: "Evening ritual information",
    viewers: "Schedule",
  },
  {
    id: "special-events",
    label: "Special Events",
    title: "Festival Darshan",
    imageSrc: "/images/homepage/mandir-view.png",
    currentAarti: "Festival Seva",
    status: "Festival announcements",
    viewers: "Updates",
  },
];

export const liveInfoItems: LiveInfoItem[] = [
  {
    title: "Live Schedule",
    value: "Daily Darshan",
    subtitle: "Darshan guidance follows temple timings and festival announcements.",
    icon: Radio,
  },
  {
    title: "Today's Aarti",
    value: "Mangala and Sandhya",
    subtitle: "Aarti information is shared for devotees planning their visit.",
    icon: Flame,
  },
  {
    title: "Temple Timings",
    value: "5:00 AM - 9:00 PM",
    subtitle: "Darshan timings may vary on festival days and special occasions.",
    icon: Clock,
  },
];

export const liveStats: LiveStat[] = [
  { label: "Darshan Info", value: "Daily" },
  { label: "Aarti Updates", value: "Temple Notice" },
  { label: "Festival Info", value: "Announced" },
];

export const liveMetaIcons = {
  viewers: Users,
  status: BellRing,
} as const;
