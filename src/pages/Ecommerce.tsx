import MetricCard from "../components/dashboard/MetricCard";

const Ecommerce = () => {
  return (
    <div>
      <h1>Ecommerce</h1>
      <p style={{ marginBottom: "30px", color: "#64748b" }}>
        Gestión de ventas online, pedidos y métricas digitales.
      </p>

      <div style={grid}>
        <MetricCard title="Ventas Online" value="$48,920" />
        <MetricCard title="Pedidos Pendientes" value="21" />
        <MetricCard title="Conversión" value="3.2%" />
      </div>

      <section style={section}>
        <h3>Actividad Digital</h3>
        <ul>
          <li>Nueva campaña lanzada</li>
          <li>Pedido enviado</li>
          <li>Cliente registrado</li>
        </ul>
      </section>
    </div>
  );
};

export default Ecommerce;

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