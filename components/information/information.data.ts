import { Clock, HeartHandshake, Info, Shirt, Sparkles, Utensils } from "lucide-react";

import type { FaqItem, VisitorGuideline } from "./information.types";

export const visitorGuidelines: VisitorGuideline[] = [
  {
    title: "Maintain Temple Peace",
    description: "Keep phones silent and speak softly inside the darshan and aarti areas.",
    icon: Sparkles,
  },
  {
    title: "Dress Respectfully",
    description: "Wear modest clothing suitable for temple darshan and spiritual gatherings.",
    icon: Shirt,
  },
  {
    title: "Follow Darshan Timings",
    description: "Temple timings may change during festivals, special puja, and crowd days.",
    icon: Clock,
  },
  {
    title: "Prasad and Meal Seva",
    description: "Follow volunteer guidance during prasad distribution and meal seva.",
    icon: Utensils,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What are the temple darshan timings?",
    answer: "The regular darshan window is shown on the Temple Timings section. Timings may vary on festivals and special puja days.",
  },
  {
    question: "Can I request puja or sankalp seva?",
    answer: "Yes, devotees can contact the temple team for puja, sankalp, and seva guidance.",
  },
  {
    question: "Is photography allowed inside the temple?",
    answer: "Please follow temple guidance on photography, especially near the sanctum and during rituals.",
  },
  {
    question: "How can I help with meal seva?",
    answer: "You can use the meal volunteer help form on this page to share your interest and availability.",
  },
];

export const informationHighlights = [
  {
    label: "Visitor Help",
    value: "Guidelines",
    icon: Info,
  },
  {
    label: "Seva Support",
    value: "Meal Volunteers",
    icon: HeartHandshake,
  },
];
