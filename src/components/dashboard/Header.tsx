import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <input placeholder="Buscar..." style={inputStyle} />
      <div>Usuario</div>
    </header>
  );
};

export default Header;

const headerStyle: React.CSSProperties = {
  height: "70px",
  background: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 40px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
};

const inputStyle: React.CSSProperties = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ddd"
};