import { ALL_SERVICES } from "@/lib/services-data";
import { type LucideIcon } from "lucide-react";

export interface NavSubItem {
  name: string;
  href: string;
  icon?: LucideIcon;
}

export interface NavItem {
  title: string;
  items: NavSubItem[];
}

export const NAV_ITEMS: NavItem[] = ALL_SERVICES.map(category => ({
  title: category.title,
  items: category.services.map(service => ({
    name: service.name,
    href: service.href,
    icon: service.icon || category.icon
  }))
}));
