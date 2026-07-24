import { BellRing, Clapperboard, Flame, MapPinned, Radio, Sparkles } from "lucide-react";

import type { VirtualTourStop, YouTubeSuggestion } from "./darshan.types";

export const virtualTourStops: VirtualTourStop[] = [
  {
    title: "Temple Entrance",
    description: "Begin the virtual walk from the main gateway and festival decor.",
    icon: MapPinned,
  },
  {
    title: "Sanctum Darshan",
    description: "Move toward the sacred darshan area with a calm devotional view.",
    icon: Sparkles,
  },
  {
    title: "Aarti Sthal",
    description: "Explore the space where devotees gather for aarti and chanting.",
    icon: Flame,
  },
];

export const youtubeSuggestions: YouTubeSuggestion[] = [
  {
    title: "Live Darshan Sessions",
    category: "Live",
    description: "Static placeholder for temple live darshan sessions and broadcasts.",
    icon: Radio,
  },
  {
    title: "Aarti and Bhajan Videos",
    category: "Devotional",
    description: "Suggested devotional videos for aarti, bhajan, and Shiva chants.",
    icon: BellRing,
  },
  {
    title: "Temple Festival Highlights",
    category: "Highlights",
    description: "Festival moments, special shringar, and community celebration videos.",
    icon: Clapperboard,
  },
];
