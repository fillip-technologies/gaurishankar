import { BellRing, Clock, Flame, Radio, Users } from "lucide-react";

import type { LiveDarshanTab, LiveInfoItem, LiveStat } from "./live-darshan.types";

export const liveTabs: LiveDarshanTab[] = [
  {
    id: "sanctum",
    label: "Sanctum",
    title: "Sanctum Darshan",
    imageSrc: "/images/homepage/hero-new-3.png",
    currentAarti: "Shringar Darshan",
    status: "Streaming from main sanctum",
    viewers: "2.4k",
  },
  {
    id: "morning-aarti",
    label: "Morning Aarti",
    title: "Morning Aarti Darshan",
    imageSrc: "/images/homepage/hero-new-1.png",
    currentAarti: "Mangala Aarti",
    status: "Morning rituals archive",
    viewers: "1.8k",
  },
  {
    id: "evening-aarti",
    label: "Evening Aarti",
    title: "Evening Aarti Darshan",
    imageSrc: "/images/homepage/slide-4.jpg",
    currentAarti: "Sandhya Aarti",
    status: "Live during evening aarti",
    viewers: "3.1k",
  },
  {
    id: "special-events",
    label: "Special Events",
    title: "Festival Darshan",
    imageSrc: "/images/homepage/mandir-view.png",
    currentAarti: "Festival Seva",
    status: "Special broadcast schedule",
    viewers: "4.6k",
  },
];

export const liveInfoItems: LiveInfoItem[] = [
  {
    title: "Live Schedule",
    value: "Daily Darshan",
    subtitle: "Sanctum broadcast begins with morning rituals and continues through temple hours.",
    icon: Radio,
  },
  {
    title: "Today's Aarti",
    value: "Mangala and Sandhya",
    subtitle: "Join the temple aarti moments with mantras, deep daan, and devotional chants.",
    icon: Flame,
  },
  {
    title: "Temple Timings",
    value: "5:00 AM - 9:00 PM",
    subtitle: "Live coverage follows the public darshan window and festival announcements.",
    icon: Clock,
  },
];

export const liveStats: LiveStat[] = [
  { label: "Online Devotees", value: "2.4k" },
  { label: "Aarti Reminder", value: "6:30 PM" },
  { label: "Next Broadcast", value: "Live Now" },
];

export const liveMetaIcons = {
  viewers: Users,
  status: BellRing,
} as const;

