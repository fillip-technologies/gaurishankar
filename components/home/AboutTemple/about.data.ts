import {
  Flame,
  HandHeart,
  Landmark,
  Leaf,
  MapPin,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";

import type { AboutInfoItem, HeritageHighlight } from "./about.types";

export const floatingInfoItems: AboutInfoItem[] = [
  {
    label: "Established",
    value: "A place of daily devotion",
    icon: Landmark,
  },
  {
    label: "Location",
    value: "Shri GauriShankar Baikunthnath Dham",
    icon: MapPin,
  },
  {
    label: "Spiritual Importance",
    value: "Dedicated to Shiva and Maa Gauri",
    icon: Sparkles,
  },
];

export const heritageHighlights: HeritageHighlight[] = [
  {
    title: "Temple Heritage",
    subtitle: "A devotional atmosphere shaped by faith, worship, and seva.",
    icon: Landmark,
  },
  {
    title: "Akhand Jyoti",
    subtitle: "A sacred flame honored with faith and devotion.",
    icon: Flame,
  },
  {
    title: "Daily Aarti",
    subtitle: "Morning and evening rituals offered with mantra and devotion.",
    icon: HandHeart,
  },
  {
    title: "Sacred Bilva Tree",
    subtitle: "Bilva leaves hold deep importance in Shiva worship.",
    icon: Leaf,
  },
  {
    title: "Spiritual Traditions",
    subtitle: "Rudrabhishek, bhajan, vrat, sankalp, and festival observances.",
    icon: Sprout,
  },
  {
    title: "Devotee Community",
    subtitle: "A gathering place for families, devotees, and seva volunteers.",
    icon: Users,
  },
];
