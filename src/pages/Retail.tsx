import { motion } from "framer-motion";
import { FaStore, FaBoxOpen, FaChartLine } from "react-icons/fa";
import "../styles/Retail.css";

export default function Retail(){

return(

<motion.div
className="retail-container"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
>

<section className="retail-hero">

<div>
<h1>Operaciones Retail</h1>
<p>Gestión de tiendas, inventario y actividad comercial.</p>
</div>

<button className="btn-primary">
Nuevo registro
</button>

</section>


<section className="retail-actions">

<motion.div whileHover={{y:-5}} className="retail-card">
<FaStore size={26}/>
<h3>Tiendas</h3>
<p>Gestión de sucursales.</p>
</motion.div>

<motion.div whileHover={{y:-5}} className="retail-card">
<FaBoxOpen size={26}/>
<h3>Inventario</h3>
<p>Control de stock.</p>
</motion.div>

<motion.div whileHover={{y:-5}} className="retail-card">
<FaChartLine size={26}/>
<h3>Ventas</h3>
<p>Reporte comercial.</p>
</motion.div>

</section>


<section className="retail-layout">

<main>

<h2>Inventario reciente</h2>

<table className="tabla-retail">

<thead>
<tr>
<th>Producto</th>
<th>Stock</th>
<th>Tienda</th>
</tr>
</thead>

<tbody>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td>Camisa Premium</td>
<td>45</td>
<td>Bogotá</td>
</motion.tr>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td>Zapato Urbano</td>
<td>12</td>
<td>Medellín</td>
</motion.tr>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td>Chaqueta Invierno</td>
<td>30</td>
<td>Cali</td>
</motion.tr>

</tbody>

</table>

</main>


<aside>

<div className="sidebar-card">

<h3>Alertas stock</h3>

<ul>
<li>Producto agotado tienda Cali</li>
<li>Reposición pendiente Bogotá</li>
</ul>

</div>

</aside>

</section>

</motion.div>

)

}