import type { LucideIcon } from "lucide-react";

export interface MenuItem {
  to: string;
  label: string;
  icon: LucideIcon;
  end?: boolean;
}