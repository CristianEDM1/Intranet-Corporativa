import React, { useState } from "react";
import "../styles/Ecommerce.css";
import {
  ShoppingCart,
  Package,
  Store,
  DollarSign,
  Truck,
  Clock
} from "lucide-react";

const Ecommerce = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "orders", label: "Pedidos" },
    { id: "inventory", label: "Inventario" },
    { id: "stores", label: "Tiendas" },
    { id: "sales", label: "Ventas" }
  ];

  return (
    <div className="ecommerce-container">

      <div className="page-header">
        <div>
          <h1>E-Commerce Operations</h1>
          <p>Gestión interna de pedidos, inventario y operaciones digitales.</p>
        </div>

        <button className="primary-btn">+ Nuevo registro</button>
      </div>


      <div className="ecommerce-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>


      {activeTab === "overview" && (
        <div className="overview-section">

          <div className="kpi-grid">

            <div className="kpi-card">
              <ShoppingCart size={20}/>
              <div>
                <p>Pedidos hoy</p>
                <h3>124</h3>
              </div>
            </div>

            <div className="kpi-card">
              <Package size={20}/>
              <div>
                <p>Inventario total</p>
                <h3>2,410</h3>
              </div>
            </div>

            <div className="kpi-card">
              <Store size={20}/>
              <div>
                <p>Tiendas activas</p>
                <h3>18</h3>
              </div>
            </div>

            <div className="kpi-card">
              <DollarSign size={20}/>
              <div>
                <p>Ventas hoy</p>
                <h3>$4,230</h3>
              </div>
            </div>

          </div>


          <div className="charts-grid">

            <div className="chart-card">
              <h4>Ventas semanales</h4>
              <div className="fake-chart"></div>
            </div>

            <div className="chart-card">
              <h4>Pedidos por canal</h4>
              <div className="fake-chart"></div>
            </div>

          </div>

        </div>
      )}



      {activeTab === "orders" && (
        <div className="orders-section">

          <div className="filters">

            <input placeholder="Buscar pedido..." />

            <select>
              <option>Estado</option>
              <option>Procesando</option>
              <option>Enviado</option>
              <option>Entregado</option>
            </select>

            <select>
              <option>Canal</option>
              <option>Web</option>
              <option>App</option>
              <option>Marketplace</option>
            </select>

          </div>


          <table className="orders-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Producto</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>#EC1021</td>
                <td>Ana López</td>
                <td>Chaqueta Denim</td>
                <td className="status processing">Procesando</td>
                <td>Hoy</td>
                <td>$89</td>
              </tr>

              <tr>
                <td>#EC1020</td>
                <td>Carlos Ruiz</td>
                <td>Vestido Midi</td>
                <td className="status shipped">Enviado</td>
                <td>Hoy</td>
                <td>$120</td>
              </tr>

              <tr>
                <td>#EC1019</td>
                <td>Sofía Ramos</td>
                <td>Bolso cuero</td>
                <td className="status delivered">Entregado</td>
                <td>Ayer</td>
                <td>$210</td>
              </tr>

            </tbody>

          </table>

        </div>
      )}



      {activeTab === "inventory" && (
        <div className="inventory-section">

          <table className="inventory-table">

            <thead>
              <tr>
                <th>Producto</th>
                <th>SKU</th>
                <th>Stock</th>
                <th>Ubicación</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Chaqueta Denim</td>
                <td>DNM-441</td>
                <td>230</td>
                <td>CDMX</td>
                <td className="stock good">Disponible</td>
              </tr>

              <tr>
                <td>Vestido Midi</td>
                <td>DRS-998</td>
                <td>45</td>
                <td>Monterrey</td>
                <td className="stock low">Stock bajo</td>
              </tr>

            </tbody>

          </table>

        </div>
      )}



      {activeTab === "stores" && (
        <div className="stores-section">

          <div className="store-card">
            <h4>Tienda Centro</h4>
            <p>CDMX</p>
            <span>Activa</span>
          </div>

          <div className="store-card">
            <h4>Tienda Norte</h4>
            <p>Monterrey</p>
            <span>Activa</span>
          </div>

          <div className="store-card">
            <h4>Tienda Sur</h4>
            <p>Guadalajara</p>
            <span>Activa</span>
          </div>

        </div>
      )}



      {activeTab === "sales" && (
        <div className="sales-section">

          <div className="charts-grid">

            <div className="chart-card">
              <h4>Ingresos mensuales</h4>
              <div className="fake-chart"></div>
            </div>

            <div className="chart-card">
              <h4>Top productos</h4>
              <div className="fake-chart"></div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Ecommerce;