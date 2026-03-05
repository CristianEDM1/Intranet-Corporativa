import MetricCard from "../components/dashboard/MetricCard";

const CapitalHumano = () => {
  return (
    <div>
      <h1>Capital Humano</h1>
      <p style={{ marginBottom: "30px", color: "#64748b" }}>
        Gestión integral del talento, contratos y desempeño.
      </p>

      <div style={grid}>
        <MetricCard title="Empleados Activos" value="128" />
        <MetricCard title="Nuevas Contrataciones" value="6" />
        <MetricCard title="Vacaciones Pendientes" value="14" />
      </div>

      <section style={section}>
        <h3>Actividad Reciente</h3>
        <ul>
          <li>Nuevo empleado registrado</li>
          <li>Contrato actualizado</li>
          <li>Solicitud de vacaciones aprobada</li>
        </ul>
      </section>
    </div>
  );
};

export default CapitalHumano;

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