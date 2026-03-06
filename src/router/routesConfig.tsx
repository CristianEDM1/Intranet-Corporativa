import {
  LayoutDashboard,
  Users,
  Laptop,
  Scale,
  Store,
  ShoppingCart,
  FileText
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import type { UserRole } from "@/types/auth";

import Home from "@pages/Home";
import CapitalHumano from "@pages/CapitalHumano";
import TI from "@pages/TI";
import Juridica from "@pages/Juridica";
import Retail from "@pages/Retail";
import Ecommerce from "@pages/Ecommerce";
import Documentos from "@pages/Documentos";

export interface AppRoute {
  path: string;
  label: string;
  icon: LucideIcon;
  element: React.ReactNode;
  roles: UserRole[];
}

export const dashboardRoutes: AppRoute[] = [
  {
    path: "",
    label: "Panel General",
    icon: LayoutDashboard,
    element: <Home />,
    roles: ["admin", "ti", "capital_humano", "juridica", "retail", "ecommerce"]
  },
  {
    path: "capital-humano",
    label: "Capital Humano",
    icon: Users,
    element: <CapitalHumano />,
    roles: ["admin", "capital_humano"]
  },
  {
    path: "ti",
    label: "TI",
    icon: Laptop,
    element: <TI />,
    roles: ["admin", "ti"]
  },
  {
    path: "juridica",
    label: "Jurídica",
    icon: Scale,
    element: <Juridica />,
    roles: ["admin", "juridica"]
  },
  {
    path: "retail",
    label: "Retail",
    icon: Store,
    element: <Retail />,
    roles: ["admin", "retail"]
  },
  {
    path: "ecommerce",
    label: "Ecommerce",
    icon: ShoppingCart,
    element: <Ecommerce />,
    roles: ["admin", "ecommerce"]
  },
  {
    path: "documentos",
    label: "Documentos",
    icon: FileText,
    element: <Documentos />,
    roles: ["admin", "ti", "capital_humano", "juridica"]
  }
];