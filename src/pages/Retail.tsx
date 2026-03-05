import MetricCard from "../components/dashboard/MetricCard";

const Retail = () => {
  return (
    <div>
      <h1>Retail</h1>
      <p style={{ marginBottom: "30px", color: "#64748b" }}>
        Control de tiendas, inventario y operaciones comerciales.
      </p>

      <div style={grid}>
        <MetricCard title="Tiendas Activas" value="12" />
        <MetricCard title="Ventas del Mes" value="$120,450" />
        <MetricCard title="Productos en Stock Bajo" value="18" />
      </div>

      <section style={section}>
        <h3>Actividad Comercial</h3>
        <ul>
          <li>Nueva tienda inaugurada</li>
          <li>Actualización de inventario</li>
          <li>Promoción activada</li>
        </ul>
      </section>
    </div>
  );
};

export default Retail;

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
  marginBottom: "40px"
};

const section = {
  background: "white",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.05)"
};