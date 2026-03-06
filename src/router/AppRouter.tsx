import { Routes, Route } from "react-router-dom";

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

export default AppRouter;