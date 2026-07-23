import type { LucideIcon } from "lucide-react";

export type HeaderLink = {
  label: string;
  href: string;
};

export type HeaderIcon = LucideIcon;

export type AlertItem = HeaderLink & {
  eyebrow?: string;
};

export type ServiceItem = HeaderLink & {
  description: string;
  icon: HeaderIcon;
};
