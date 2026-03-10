import { useState } from "react"
import { motion } from "framer-motion"
import { FaStore } from "react-icons/fa"

import { stores } from "../retailData"

export default function RetailStores(){

const [city,setCity]=useState<string | null>(null)
const [search,setSearch]=useState("")

return(

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

)

}