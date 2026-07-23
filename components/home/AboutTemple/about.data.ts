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
    value: "A living seat of devotion",
    icon: Landmark,
  },
  {
    label: "Location",
    value: "Shri GauriShankar Baikunthnath Dham",
    icon: MapPin,
  },
  {
    label: "Spiritual Importance",
    value: "Dedicated to Shiva, Maa Gauri, and sacred seva",
    icon: Sparkles,
  },
];

export const heritageHighlights: HeritageHighlight[] = [
  {
    title: "Ancient Heritage",
    subtitle: "A devotional atmosphere shaped by generations of worship.",
    icon: Landmark,
  },
  {
    title: "Akhand Jyoti",
    subtitle: "A sacred flame symbolizing faith, continuity, and blessings.",
    icon: Flame,
  },
  {
    title: "Daily Aarti",
    subtitle: "Morning and evening rituals offered with mantra and devotion.",
    icon: HandHeart,
  },
  {
    title: "Sacred Bilva Tree",
    subtitle: "Bilva leaves remain central to Shiva puja and temple tradition.",
    icon: Leaf,
  },
  {
    title: "Spiritual Traditions",
    subtitle: "Rudrabhishek, bhajan, vrat, sankalp, and festival observances.",
    icon: Sprout,
  },
  {
    title: "Devotee Community",
    subtitle: "A warm gathering place for families, pilgrims, and seva volunteers.",
    icon: Users,
  },
];

