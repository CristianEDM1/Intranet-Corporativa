import React, { useState } from "react";
import "../styles/Ecommerce.css";
import { motion, AnimatePresence } from "framer-motion";

import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
BarChart,
Bar
} from "recharts";

const salesData = [
{ day:"Mon", sales:400 },
{ day:"Tue", sales:700 },
{ day:"Wed", sales:500 },
{ day:"Thu", sales:900 },
{ day:"Fri", sales:1200 },
{ day:"Sat", sales:800 },
{ day:"Sun", sales:600 }
];

const ordersData = [
{ id:"#EC1021", client:"Ana López", product:"Chaqueta Denim", status:"Procesando", total:89 },
{ id:"#EC1020", client:"Carlos Ruiz", product:"Vestido Midi", status:"Enviado", total:120 },
{ id:"#EC1019", client:"Sofía Ramos", product:"Bolso cuero", status:"Entregado", total:210 },
{ id:"#EC1018", client:"Pedro Díaz", product:"Jeans Slim", status:"Procesando", total:99 },
{ id:"#EC1017", client:"Laura Méndez", product:"Blusa Seda", status:"Enviado", total:75 }
];

export default function Ecommerce(){

const [search,setSearch] = useState("");
const [status,setStatus] = useState("all");
const [sort,setSort] = useState("id");
const [page,setPage] = useState(1);

const rowsPerPage = 3;

const filtered = ordersData
.filter(o => o.client.toLowerCase().includes(search.toLowerCase()))
.filter(o => status==="all" || o.status===status)
.sort((a,b)=>{
if(sort==="total") return b.total-a.total;
return a.id.localeCompare(b.id);
});

const pages = Math.ceil(filtered.length/rowsPerPage);

const paginated = filtered.slice(
(page-1)*rowsPerPage,
page*rowsPerPage
);

return(

<div className="ecommerce-container">

<motion.div
className="header"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
>

<h1>E-Commerce Operations</h1>
<p>Panel avanzado de operaciones digitales.</p>

</motion.div>


{/* FILTROS */}

<div className="filters">

<input
placeholder="Buscar cliente..."
onChange={e=>setSearch(e.target.value)}
/>

<select onChange={e=>setStatus(e.target.value)}>
<option value="all">Todos</option>
<option value="Procesando">Procesando</option>
<option value="Enviado">Enviado</option>
<option value="Entregado">Entregado</option>
</select>

<select onChange={e=>setSort(e.target.value)}>
<option value="id">Orden ID</option>
<option value="total">Mayor venta</option>
</select>

</div>



{/* GRID */}

<div className="ecommerce-grid">

{/* TABLA ERP */}

<motion.section
className="orders"
layout
initial={{opacity:0}}
animate={{opacity:1}}
>

<h3>Gestión de pedidos</h3>

<table>

<thead>
<tr>
<th>ID</th>
<th>Cliente</th>
<th>Producto</th>
<th>Estado</th>
<th>Total</th>
</tr>
</thead>

<tbody>

<AnimatePresence>

{paginated.map(order=>(
<motion.tr
key={order.id}
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
exit={{opacity:0}}
whileHover={{background:"#f5f7ff"}}
>

<td>{order.id}</td>
<td>{order.client}</td>
<td>{order.product}</td>
<td className={`status ${order.status}`}>
{order.status}
</td>
<td>${order.total}</td>

</motion.tr>
))}

</AnimatePresence>

</tbody>

</table>


{/* PAGINACIÓN */}

<div className="pagination">

<button
disabled={page===1}
onClick={()=>setPage(page-1)}
>
Prev
</button>

<span>{page} / {pages}</span>

<button
disabled={page===pages}
onClick={()=>setPage(page+1)}
>
Next
</button>

</div>

</motion.section>



{/* ANALYTICS */}

<motion.section
className="analytics"
initial={{opacity:0}}
animate={{opacity:1}}
>

<h3>Ventas semanales</h3>

<ResponsiveContainer width="100%" height={250}>

<LineChart data={salesData}>

<XAxis dataKey="day"/>
<YAxis/>
<Tooltip/>

<Line
type="monotone"
dataKey="sales"
stroke="#6366f1"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>


<h3 className="chart-title">Ventas por día</h3>

<ResponsiveContainer width="100%" height={200}>

<BarChart data={salesData}>

<XAxis dataKey="day"/>
<YAxis/>
<Tooltip/>

<Bar
dataKey="sales"
fill="#6366f1"
/>

</BarChart>

</ResponsiveContainer>

</motion.section>

</div>



{/* TIMELINE */}

<motion.section
className="timeline"
initial={{opacity:0}}
animate={{opacity:1}}
>

<h3>Flujo logístico</h3>

<div className="timeline-track">

<div className="step active">Pedido</div>
<div className="step active">Preparación</div>
<div className="step">Envío</div>
<div className="step">Entrega</div>

</div>

</motion.section>

</div>

);
}
