import { useState } from "react"
import { motion } from "framer-motion"
import {
PieChart,
Pie,
Cell,
Tooltip,
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis
} from "recharts"

import "../styles/Juridica.css"

export default function Juridica(){

const [activeTab,setActiveTab] = useState("contratos")
const [filter,setFilter] = useState("")

const contratos = [
{nombre:"Proveedor Logística",area:"Retail",estado:"activo",venc:"12/10/2026"},
{nombre:"Servicio Ecommerce",area:"Ecommerce",estado:"revision",venc:"05/09/2026"},
{nombre:"Acuerdo Comercial",area:"Corporativo",estado:"alerta",venc:"01/07/2026"}
]

const riskData = [
{ name:"Bajo", value:6 },
{ name:"Medio", value:3 },
{ name:"Alto", value:1 }
]

const contractData = [
{ area:"Retail", contratos:8 },
{ area:"Ecommerce", contratos:5 },
{ area:"Corporativo", contratos:3 },
{ area:"TI", contratos:2 }
]

return(

<motion.div
className="juridica-container"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.4}}
>

{/* HERO */}

<section className="legal-hero">

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:.1}}
>

<h1>Centro Jurídico Corporativo</h1>

<p>
Gestión integral de cumplimiento, contratos y normativas
corporativas dentro de la organización.
</p>

</motion.div>

<motion.button
className="btn-primary"
whileHover={{scale:1.05}}
whileTap={{scale:.95}}
>
Nuevo registro
</motion.button>

</section>


{/* KPIs */}

<section className="legal-kpis">

<motion.div className="kpi" whileHover={{y:-6}}>
<span>18</span>
<p>Contratos activos</p>
</motion.div>

<motion.div className="kpi" whileHover={{y:-6}}>
<span>4</span>
<p>Procesos legales</p>
</motion.div>

<motion.div className="kpi" whileHover={{y:-6}}>
<span>2</span>
<p>Riesgos detectados</p>
</motion.div>

<motion.div className="kpi" whileHover={{y:-6}}>
<span>3</span>
<p>Auditorías</p>
</motion.div>

</section>


{/* BUSCADOR */}

<div className="juridica-search">

<input
placeholder="Buscar contratos o documentos..."
onChange={(e)=>setFilter(e.target.value)}
/>

</div>


{/* TABS */}

<div className="juridica-tabs">

<button
className={activeTab==="contratos"?"active":""}
onClick={()=>setActiveTab("contratos")}
>
Contratos
</button>

<button
className={activeTab==="normativa"?"active":""}
onClick={()=>setActiveTab("normativa")}
>
Normativa
</button>

<button
className={activeTab==="analisis"?"active":""}
onClick={()=>setActiveTab("analisis")}
>
Análisis
</button>

</div>


<section className="juridica-layout">


{/* MAIN */}

<main className="juridica-main">


{/* CONTRATOS */}

{activeTab==="contratos" && (

<>

<h2>Contratos corporativos</h2>

<table className="tabla-legal">

<thead>

<tr>
<th>Contrato</th>
<th>Área</th>
<th>Estado</th>
<th>Vencimiento</th>
</tr>

</thead>

<tbody>

{contratos
.filter(c=>c.nombre.toLowerCase().includes(filter.toLowerCase()))
.map((c,i)=>(

<motion.tr key={i} whileHover={{background:"#f9fafb"}}>

<td>{c.nombre}</td>

<td>{c.area}</td>

<td>
<span className={`estado ${c.estado}`}>
{c.estado}
</span>
</td>

<td>{c.venc}</td>

</motion.tr>

))}

</tbody>

</table>

</>

)}


{/* NORMATIVA */}

{activeTab==="normativa" && (

<div className="normativa-wrapper">

<div className="normativa-filters">

<select>
<option>Todas las categorías</option>
<option>Protección de datos</option>
<option>Laboral</option>
<option>Contratación</option>
<option>Financiera</option>
</select>

<select>
<option>Estado</option>
<option>Vigente</option>
<option>En revisión</option>
</select>

</div>


<div className="normativa-grid">

{[
{
titulo:"Política de Protección de Datos",
categoria:"Protección de datos",
estado:"vigente",
fecha:"Actualizado Feb 2026"
},

{
titulo:"Reglamento interno laboral",
categoria:"Laboral",
estado:"vigente",
fecha:"Actualizado Ene 2026"
},

{
titulo:"Normativa contratación proveedores",
categoria:"Contratación",
estado:"revision",
fecha:"Revisión en curso"
},

{
titulo:"Política financiera corporativa",
categoria:"Financiera",
estado:"vigente",
fecha:"Actualizado Dic 2025"
}

].map((doc,i)=>(

<motion.div
key={i}
className="normativa-card"
whileHover={{y:-6}}
initial={{opacity:0,y:15}}
animate={{opacity:1,y:0}}
transition={{delay:i*.05}}
>

<div className="normativa-icon">
📄
</div>

<div className="normativa-content">

<h4>{doc.titulo}</h4>

<p>{doc.categoria}</p>

<span className={`estado ${doc.estado}`}>
{doc.estado}
</span>

</div>


<div className="normativa-actions">

<button className="doc-btn">
Ver
</button>

<button className="doc-btn download">
Descargar
</button>

</div>

<div className="normativa-footer">

<span>{doc.fecha}</span>

</div>

</motion.div>

))}

</div>

</div>

)}


{/* ANALISIS */}

{activeTab==="analisis" && (

<div className="legal-charts">

<div className="chart-box">

<h3>Riesgo legal</h3>

<ResponsiveContainer width="100%" height={220}>

<PieChart>

<Pie data={riskData} dataKey="value">

<Cell fill="#22c55e"/>
<Cell fill="#f59e0b"/>
<Cell fill="#ef4444"/>

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>


<div className="chart-box">

<h3>Contratos por área</h3>

<ResponsiveContainer width="100%" height={220}>

<BarChart data={contractData}>

<XAxis dataKey="area"/>
<YAxis/>
<Tooltip/>

<Bar dataKey="contratos" fill="#3b82f6"/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

)}

</main>


{/* SIDEBAR */}

<aside className="juridica-sidebar">

<div className="legal-card">

<h3>Actividad reciente</h3>

<ul className="timeline">

<li><span></span>Contrato aprobado</li>
<li><span></span>Nueva política registrada</li>
<li><span></span>Auditoría iniciada</li>

</ul>

</div>

<div className="legal-card">

<h3>Alertas legales</h3>

<ul>

<li>Contrato proveedor vence en 15 días</li>
<li>Revisión ecommerce pendiente</li>
<li>Actualización normativa de datos</li>

</ul>

</div>

</aside>

</section>

</motion.div>

)

}