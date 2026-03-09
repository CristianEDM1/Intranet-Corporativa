import { useState } from "react";
import { motion } from "framer-motion";
import {
FaStore,
FaBoxOpen,
FaChartLine,
FaChartPie,
FaPlus
} from "react-icons/fa";

import "../styles/Retail.css";

export default function Retail(){

const [tab,setTab]=useState("overview")

const [city,setCity]=useState<string | null>(null)

const [search,setSearch]=useState("")

const stores=[

{ciudad:"Bogotá",tienda:"Centro Andino",marca:"UrbanWear",zona:"Norte",direccion:"Cra 11 #82",gerente:"Laura Gómez",estado:"Activa"},

{ciudad:"Bogotá",tienda:"Gran Estación",marca:"UrbanWear",zona:"Occidente",direccion:"Av Calle 26",gerente:"Daniel Ruiz",estado:"Activa"},

{ciudad:"Medellín",tienda:"El Tesoro",marca:"UrbanWear",zona:"Poblado",direccion:"Cl 3 Sur",gerente:"Carolina Mejía",estado:"Activa"},

{ciudad:"Medellín",tienda:"Santafé",marca:"UrbanWear",zona:"Poblado",direccion:"Cra 43A",gerente:"Luis Restrepo",estado:"Activa"},

{ciudad:"Cali",tienda:"Chipichape",marca:"UrbanWear",zona:"Norte",direccion:"Av 6N",gerente:"Juan Pérez",estado:"Activa"},

{ciudad:"Cali",tienda:"Jardín Plaza",marca:"UrbanWear",zona:"Sur",direccion:"Cl 16",gerente:"María López",estado:"Activa"}

]

const [data,setData]=useState([
{producto:"Camisa Premium",stock:45,tienda:"Bogotá"},
{producto:"Zapato Urbano",stock:12,tienda:"Medellín"},
{producto:"Chaqueta Invierno",stock:30,tienda:"Cali"}
])

function updateValue(i:number,key:string,value:string){

const newData=[...data]

newData[i]={...newData[i],[key]:value}

setData(newData)

}

return(

<motion.div
className="retail-page"
initial={{opacity:0,y:15}}
animate={{opacity:1,y:0}}
transition={{duration:.5}}
>

{/* HERO */}

<section className="retail-hero">

<div>

<h1>Retail Intelligence</h1>

<p>
Gestión comercial, inventario y operaciones de tiendas.
</p>

</div>

<button className="retail-btn">

<FaPlus/>

Nuevo registro

</button>

</section>


{/* SUBMENU */}

<nav className="retail-submenu">

<button
className={tab==="overview"?"active":""}
onClick={()=>setTab("overview")}
>

Overview

</button>

<button
className={tab==="inventario"?"active":""}
onClick={()=>setTab("inventario")}
>

Inventario

</button>

<button
className={tab==="tiendas"?"active":""}
onClick={()=>setTab("tiendas")}
>

Tiendas

</button>

<button
className={tab==="ventas"?"active":""}
onClick={()=>setTab("ventas")}
>

Ventas

</button>

</nav>


{/* OVERVIEW */}

{tab==="overview" && (

<motion.section
className="retail-overview"
initial={{opacity:0}}
animate={{opacity:1}}
>

<div className="retail-metrics">

<div className="metric">
<span>24</span>
<p>Tiendas activas</p>
</div>

<div className="metric">
<span>1240</span>
<p>Ventas del mes</p>
</div>

<div className="metric">
<span>5842</span>
<p>Productos</p>
</div>

</div>

<div className="donut-wrapper">

<motion.div
className="donut"
animate={{rotate:360}}
transition={{repeat:Infinity,duration:12,ease:"linear"}}
/>

<div className="donut-center">
<FaChartPie/>
<p>Ventas</p>
</div>

</div>

</motion.section>

)}


{/* INVENTARIO */}

{tab==="inventario" && (

<motion.section
className="retail-table"
initial={{opacity:0}}
animate={{opacity:1}}
>

<h2>Inventario editable</h2>

<table>

<thead>

<tr>
<th>Producto</th>
<th>Stock</th>
<th>Tienda</th>
</tr>

</thead>

<tbody>

{data.map((row,i)=>(

<motion.tr key={i} whileHover={{background:"#f9fafb"}}>

<td>
<input
value={row.producto}
onChange={e=>updateValue(i,"producto",e.target.value)}
/>
</td>

<td>
<input
value={row.stock}
onChange={e=>updateValue(i,"stock",e.target.value)}
/>
</td>

<td>
<input
value={row.tienda}
onChange={e=>updateValue(i,"tienda",e.target.value)}
/>
</td>

</motion.tr>

))}

</tbody>

</table>

</motion.section>

)}


{/* TIENDAS */}

{tab==="tiendas" && (

<motion.section
className="retail-section"
initial={{opacity:0}}
animate={{opacity:1}}
>

<h2>Red de tiendas</h2>

{/* selector ciudades */}

{!city && (

<div className="stores-grid">

<div onClick={()=>setCity("Bogotá")}>
<FaStore/>
<h3>Bogotá</h3>
</div>

<div onClick={()=>setCity("Medellín")}>
<FaStore/>
<h3>Medellín</h3>
</div>

<div onClick={()=>setCity("Cali")}>
<FaStore/>
<h3>Cali</h3>
</div>

</div>

)}

{/* listado tiendas */}

{city && (

<motion.div
className="stores-list"
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
>

<div className="stores-header">

<h3>Tiendas en {city}</h3>

<input
placeholder="Buscar tienda..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button
className="back-btn"
onClick={()=>{setCity(null);setSearch("")}}
>

Volver

</button>

</div>

<table className="stores-table">

<thead>

<tr>
<th>Tienda</th>
<th>Marca</th>
<th>Zona</th>
<th>Dirección</th>
<th>Gerente</th>
<th>Estado</th>
</tr>

</thead>

<tbody>

{stores
.filter(s=>s.ciudad===city)
.filter(s=>s.tienda.toLowerCase().includes(search.toLowerCase()))
.map((s,i)=>(

<motion.tr key={i} whileHover={{background:"#f9fafb"}}>

<td>{s.tienda}</td>
<td>{s.marca}</td>
<td>{s.zona}</td>
<td>{s.direccion}</td>
<td>{s.gerente}</td>
<td>{s.estado}</td>

</motion.tr>

))}

</tbody>

</table>

</motion.div>

)}

</motion.section>

)}


{/* VENTAS */}

{tab==="ventas" && (

<section className="retail-section">

<h2>Actividad comercial</h2>

<ul className="activity">

<li>Nueva venta registrada</li>
<li>Actualización inventario</li>
<li>Producto añadido</li>

</ul>

</section>

)}

</motion.div>

)

}
