import { Outlet } from "react-router-dom";
import Sidebar from "@components/dashboard/Sidebar"
import Header from "@components/dashboard/Header"

const DashboardLayout = () => {
  return (
    <div style={layoutStyle}>
      <Sidebar />

      <div style={contentStyle}>
        <Header />

        <main style={mainStyle}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

const layoutStyle: React.CSSProperties = {
  display: "flex"
};

const contentStyle: React.CSSProperties = {
  flex: 1
};

const mainStyle: React.CSSProperties = {
  padding: "40px"
};