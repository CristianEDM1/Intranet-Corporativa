import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />
        <main style={{ padding: "40px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;