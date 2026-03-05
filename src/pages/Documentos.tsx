import MetricCard from "../components/dashboard/MetricCard";

const Documentos = () => {
  return (
    <div>
      <h1>Documentos</h1>
      <p style={{ marginBottom: "30px", color: "#64748b" }}>
        Repositorio centralizado de documentos corporativos.
      </p>

      <div style={grid}>
        <MetricCard title="Documentos Activos" value="540" />
        <MetricCard title="Pendientes de Revisión" value="12" />
        <MetricCard title="Versiones Actualizadas" value="28" />
      </div>

      <section style={section}>
        <h3>Actividad Documental</h3>
        <ul>
          <li>Nuevo manual cargado</li>
          <li>Política actualizada</li>
          <li>Documento archivado</li>
        </ul>
      </section>
    </div>
  );
};

export default Documentos;

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