

import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "@pages/Landing";
import Login from "@pages/Login";

import DashboardLayout from "@layouts/DashboardLayout";
import { dashboardRoutes } from "@router/routesConfig";

const AppRouter = () => {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />

      <Route path="/app" element={<DashboardLayout />}>

        {/* REDIRECCIÓN AUTOMÁTICA */}
        <Route index element={dashboardRoutes[0].element} />

        {dashboardRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}

      </Route>

    </Routes>
  );
};

export default AppRouter;
/*
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "@router/ProtectedRoute";
import Landing from "@pages/Landing";
import Login from "@pages/Login";

import DashboardLayout from "@layouts/DashboardLayout";
import { dashboardRoutes } from "@router/routesConfig";

const AppRouter = () => {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
<Route path="/app" element={<DashboardLayout />}>

  <Route
  path="/app"
  element={
    <ProtectedRoute
      allowedRoles={[
        "admin",
        "ti",
        "capital_humano",
        "juridica",
        "retail",
        "ecommerce",
      ]}
    >
      <DashboardLayout />
    </ProtectedRoute>
  }
></Route>

        {dashboardRoutes.map((route) => (
          <Route
            key={route.path || "home"}
            path={route.path}
            element={route.element}
          />
        ))}

      </Route>

    </Routes>
  );
};

export default AppRouter;*/