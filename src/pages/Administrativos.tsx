import MetricCard from "../components/dashboard/MetricCard";

const Administrativos = () => {
  return (
    <div>
      <h1>Administrativos</h1>
      <p style={{ marginBottom: "30px", color: "#64748b" }}>
        Control financiero, facturación y gestión interna.
      </p>

      <div style={grid}>
        <MetricCard title="Facturas Emitidas" value="230" />
        <MetricCard title="Pagos Pendientes" value="18" />
        <MetricCard title="Gastos del Mes" value="$32,400" />
      </div>

      <section style={section}>
        <h3>Actividad Financiera</h3>
        <ul>
          <li>Factura generada</li>
          <li>Pago confirmado</li>
          <li>Reporte mensual exportado</li>
        </ul>
      </section>
    </div>
  );
};

export default Administrativos;

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