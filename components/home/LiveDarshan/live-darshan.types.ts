import type { LucideIcon } from "lucide-react";

export type LiveDarshanTab = {
  id: string;
  label: string;
  title: string;
  imageSrc: string;
  currentAarti: string;
  status: string;
  viewers: string;
};

export type LiveInfoItem = {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
};

export type LiveStat = {
  label: string;
  value: string;
};

