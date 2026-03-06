import {
  LayoutDashboard,
  Users,
  Laptop,
  Scale,
  Store,
  ShoppingCart,
  Folder,
  FileText
} from "lucide-react";

import type { MenuItem } from "../types/navigation";

export const menuItems: MenuItem[] = [
  { to: "/app", label: "Panel General", icon: LayoutDashboard, end: true },
  { to: "/app/capital-humano", label: "Capital Humano", icon: Users },
  { to: "/app/ti", label: "TI", icon: Laptop },
  { to: "/app/juridica", label: "Jurídica", icon: Scale },
  { to: "/app/retail", label: "Retail", icon: Store },
  { to: "/app/ecommerce", label: "Ecommerce", icon: ShoppingCart },
  { to: "/app/administrativos", label: "Administrativos", icon: Folder },
  { to: "/app/documentos", label: "Documentos", icon: FileText }
];