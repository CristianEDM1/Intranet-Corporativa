import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import { dashboardRoutes } from "@router/routesConfig";

import "./Sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      <div className="sidebar-top">
        {!collapsed && <h2 className="logo">IntranetCorp</h2>}

        <button
          className="collapse-btn"
          onClick={() => setCollapsed(prev => !prev)}
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="menu">
        {dashboardRoutes.map(({ path, label, icon: Icon }) => {

          const url = path ? `/app/${path}` : "/app";

          return (
            <NavLink
              key={url}
              to={url}
              end={!path}
              className="menu-item"
            >
              <Icon size={18} />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          );

        })}
      </nav>

    </aside>
  );
};

export default Sidebar;
/*
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import { menuItems } from "../../router/menuItems";

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

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
            >
              <Icon size={18} />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          );

        })}

      </nav>

    </aside>
  );
};

export default Sidebar;*/