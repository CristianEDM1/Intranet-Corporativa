
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useAuth } from "../../auth/AuthContext";

import { dashboardRoutes } from "@router/routesConfig";

import "./Sidebar.css";

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);

  const { user } = useAuth();

  return (

    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* TOP */}

      <div className="sidebar-top">

        {!collapsed && (
          <h2 className="logo">
           Estudio de Moda
          </h2>
        )}

        <button
          className="collapse-btn"
          onClick={() => setCollapsed(prev => !prev)}
        >
          <Menu size={20} />
        </button>

      </div>


      {/* MENU */}

      <nav className="menu">

        {dashboardRoutes
          .filter(route => user && route.roles.includes(user.role))
          .map(({ path, label, icon: Icon }) => {

            const url = path ? `/app/${path}` : "/app";

            return (

              <NavLink
                key={url}
                to={url}
                end={!path}
                className={({ isActive }) =>
                  `menu-item ${isActive ? "active" : ""}`
                }
              >

                <div className="menu-icon">
                  <Icon size={18} />
                </div>

                {!collapsed && (
                  <span className="menu-label">
                    {label}
                  </span>
                )}

                {!collapsed && <div className="menu-hover" />}

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
import { useAuth } from "../../auth/AuthContext";

import { dashboardRoutes } from "@router/routesConfig";

import "./Sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { user } = useAuth();

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

        {dashboardRoutes
          .filter(route => user && route.roles.includes(user.role))
          .map(({ path, label, icon: Icon }) => {

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

export default Sidebar; */
