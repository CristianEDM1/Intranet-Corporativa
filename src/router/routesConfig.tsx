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

import type { LucideIcon } from "lucide-react";
import React from "react";
import Home from "@pages/Home";
import CapitalHumano from "@pages/CapitalHumano";
import TI from "@pages/TI";
import Juridica from "@pages/Juridica";
import Retail from "@pages/Retail";
import Ecommerce from "@pages/Ecommerce";
import Administrativos from "@pages/Administrativos";
import Documentos from "@pages/Documentos";
/*
export interface AppRoute {
  path: string;
  label: string;
  icon: any;
  element: React.ReactNode;
}*/
export interface AppRoute {
  path: string;
  label: string;
  icon: LucideIcon;
   element: React.ReactNode;
}
export const dashboardRoutes: AppRoute[] = [
  {
    path: "",
    label: "Panel General",
    icon: LayoutDashboard,
    element: <Home />
  },
  {
    path: "capital-humano",
    label: "Capital Humano",
    icon: Users,
    element: <CapitalHumano />
  },
  {
    path: "ti",
    label: "TI",
    icon: Laptop,
    element: <TI />
  },
  {
    path: "juridica",
    label: "Jurídica",
    icon: Scale,
    element: <Juridica />
  },
  {
    path: "retail",
    label: "Retail",
    icon: Store,
    element: <Retail />
  },
  {
    path: "ecommerce",
    label: "Ecommerce",
    icon: ShoppingCart,
    element: <Ecommerce />
  },
  {
    path: "administrativos",
    label: "Administrativos",
    icon: Folder,
    element: <Administrativos />
  },
  {
    path: "documentos",
    label: "Documentos",
    icon: FileText,
    element: <Documentos />
  }
];