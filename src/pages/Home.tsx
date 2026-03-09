import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

import "./Home.css";

const ventasData = [
  { mes: "Ene", ventas: 12000 },
  { mes: "Feb", ventas: 19000 },
  { mes: "Mar", ventas: 15000 },
  { mes: "Abr", ventas: 22000 },
  { mes: "May", ventas: 28000 },
  { mes: "Jun", ventas: 35000 }
];

const ticketsData = [
  { mes: "Ene", tickets: 12 },
  { mes: "Feb", tickets: 19 },
  { mes: "Mar", tickets: 8 },
  { mes: "Abr", tickets: 15 },
  { mes: "May", tickets: 10 },
  { mes: "Jun", tickets: 14 }
];

const empleadosData = [
  { name: "TI", value: 25 },
  { name: "Retail", value: 40 },
  { name: "Administración", value: 30 },
  { name: "Ecommerce", value: 33 }
];

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

const Home = () => {
  return (
    <div className="dashboard">

      <h1>ESTUDIO DE MODA</h1>

      {/* KPI CARDS */}

      <div className="kpi-grid">

        <div className="kpi-card">
          <h3>Empleados Activos</h3>
          <p>128</p>
        </div>

        <div className="kpi-card">
          <h3>Tickets TI</h3>
          <p>14</p>
        </div>

        <div className="kpi-card">
          <h3>Ventas Ecommerce</h3>
          <p>$48,920</p>
        </div>

        <div className="kpi-card">
          <h3>Contratos Vigentes</h3>
          <p>32</p>
        </div>

      </div>

      {/* GRAFICOS */}

      <div className="charts-grid">

        <div className="chart-card">
          <h3>Ventas Ecommerce</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ventasData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="ventas" stroke="#3b82f6" strokeWidth={3}/>
            </LineChart>
          </ResponsiveContainer>

        </div>

        <div className="chart-card">
          <h3>Tickets TI por Mes</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ticketsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tickets" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>

        </div>

        <div className="chart-card">
          <h3>Empleados por Área</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={empleadosData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {empleadosData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default Home;