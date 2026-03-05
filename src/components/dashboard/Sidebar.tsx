import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Laptop,
  Scale,
  Store,
  ShoppingCart,
  Folder,
  FileText,
  Menu
} from "lucide-react";

import "./Sidebar.css";

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      <div className="sidebar-top">

        {!collapsed && <h2 className="logo">IntranetCorp</h2>}

        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu size={20} />
        </button>

      </div>

      <nav className="menu">

        <NavLink to="/app" end>
          <LayoutDashboard size={18} />
          {!collapsed && <span>Panel General</span>}
        </NavLink>

        <NavLink to="/app/capital-humano">
          <Users size={18} />
          {!collapsed && <span>Capital Humano</span>}
        </NavLink>

        <NavLink to="/app/ti">
          <Laptop size={18} />
          {!collapsed && <span>TI</span>}
        </NavLink>

        <NavLink to="/app/juridica">
          <Scale size={18} />
          {!collapsed && <span>Jurídica</span>}
        </NavLink>

        <NavLink to="/app/retail">
          <Store size={18} />
          {!collapsed && <span>Retail</span>}
        </NavLink>

        <NavLink to="/app/ecommerce">
          <ShoppingCart size={18} />
          {!collapsed && <span>Ecommerce</span>}
        </NavLink>

        <NavLink to="/app/administrativos">
          <Folder size={18} />
          {!collapsed && <span>Administrativos</span>}
        </NavLink>

        <NavLink to="/app/documentos">
          <FileText size={18} />
          {!collapsed && <span>Documentos</span>}
        </NavLink>

      </nav>

    </aside>
  );
};

export default Sidebar;