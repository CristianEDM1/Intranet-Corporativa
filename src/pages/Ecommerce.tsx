import { motion } from "framer-motion";
import { FaShoppingCart, FaBox, FaBullhorn } from "react-icons/fa";
import "../styles/Ecommerce.css";

export default function Ecommerce(){

return(

<motion.div
className="ecommerce-container"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
>

<section className="ecommerce-hero">

<div>
<h1>Centro E-Commerce</h1>
<p>Gestión de pedidos, productos y campañas digitales.</p>
</div>

<button className="btn-primary">
Nuevo producto
</button>

</section>


<section className="ecommerce-actions">

<motion.div whileHover={{scale:1.04}} className="ecommerce-card">
<FaShoppingCart size={26}/>
<h3>Pedidos</h3>
<p>Órdenes recientes.</p>
</motion.div>

<motion.div whileHover={{scale:1.04}} className="ecommerce-card">
<FaBox size={26}/>
<h3>Productos</h3>
<p>Gestión catálogo.</p>
</motion.div>

<motion.div whileHover={{scale:1.04}} className="ecommerce-card">
<FaBullhorn size={26}/>
<h3>Campañas</h3>
<p>Marketing digital.</p>
</motion.div>

</section>


<section className="ecommerce-layout">

<main>

<h2>Pedidos recientes</h2>

<table className="tabla-ecommerce">

<thead>
<tr>
<th>Pedido</th>
<th>Cliente</th>
<th>Estado</th>
</tr>
</thead>

<tbody>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td>#10231</td>
<td>Juan Pérez</td>
<td>Enviado</td>
</motion.tr>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td>#10230</td>
<td>Ana López</td>
<td>Procesando</td>
</motion.tr>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td>#10229</td>
<td>Carlos Ruiz</td>
<td>Entregado</td>
</motion.tr>

</tbody>

</table>

</main>


<aside>

<div className="sidebar-card">

<h3>Campañas activas</h3>

<ul>
<li>Promoción verano</li>
<li>Black Friday</li>
<li>Descuento miembros</li>
</ul>

</div>

</aside>

</section>

</motion.div>

)

}