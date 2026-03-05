import MetricCard from "../components/dashboard/MetricCard";

const Juridica = () => {
  return (
    <div>
      <h1>Área Jurídica</h1>
      <p style={{ marginBottom: "30px", color: "#64748b" }}>
        Gestión de contratos, normativas y cumplimiento legal.
      </p>

      <div style={grid}>
        <MetricCard title="Contratos Vigentes" value="32" />
        <MetricCard title="Por Renovar" value="5" />
        <MetricCard title="Casos Activos" value="3" />
      </div>

      <section style={section}>
        <h3>Actividad Legal</h3>
        <ul>
          <li>Contrato aprobado por dirección</li>
          <li>Actualización normativa interna</li>
          <li>Nuevo acuerdo comercial registrado</li>
        </ul>
      </section>
    </div>
  );
};

export default Juridica;

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