import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={sidebar}>
      <h3>IntranetCorp</h3>

      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/app">Panel General</Link>
        <Link to="/app/capital-humano">Capital Humano</Link>
        <Link to="/app/ti">TI</Link>
        <Link to="/app/juridica">Jurídica</Link>
        <Link to="/app/retail">Retail</Link>
        <Link to="/app/ecommerce">Ecommerce</Link>
        <Link to="/app/administrativos">Administrativos</Link>
        <Link to="/app/documentos">Documentos</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

const sidebar = {
  width: "240px",
  background: "#1e293b",
  color: "white",
  padding: "30px",
  minHeight: "100vh"
};