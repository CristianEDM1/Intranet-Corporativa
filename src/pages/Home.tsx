import MetricCard from "../components/dashboard/MetricCard";

const Home = () => {
  return (
    <div>
      <h1>Dashboard Corporativo</h1>

      <div style={grid}>
        <MetricCard title="Empleados Activos" value="128" />
        <MetricCard title="Tickets TI" value="14" />
        <MetricCard title="Ventas Ecommerce" value="$48,920" />
        <MetricCard title="Contratos Vigentes" value="32" />
      </div>
    </div>
  );
};

export default Home;

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "20px",
  marginTop: "30px"
};