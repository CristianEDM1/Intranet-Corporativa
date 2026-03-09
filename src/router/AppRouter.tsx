
import ProtectedRoute from "@router/ProtectedRoute";
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

        {/* REDIRECCIÓN AUTOMÁTICA */ } 
        <Route index element={dashboardRoutes[0].element} />

      {dashboardRoutes.map((route) => (
  <Route
    key={route.path}
    path={route.path}
    element={
      <ProtectedRoute allowedRoles={route.roles}>
        {route.element}
      </ProtectedRoute>
    }
  />
))}

      </Route>

    </Routes>
  );
};

export default AppRouter; 
