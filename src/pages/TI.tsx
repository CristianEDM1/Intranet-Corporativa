import { motion } from "framer-motion"
import { useState } from "react"

import {
FaServer,
FaBug,
FaTools,
FaCloud,
FaCodeBranch
} from "react-icons/fa"

import {
LineChart,
Line,
ResponsiveContainer,
XAxis,
YAxis,
Tooltip,
PieChart,
Pie,
Cell
} from "recharts"

import TicketForm from "../components/TicketsForm"

import "../styles/TI.css"


const ticketTrend = [
{ name:"Lun", value:4 },
{ name:"Mar", value:7 },
{ name:"Mie", value:3 },
{ name:"Jue", value:8 },
{ name:"Vie", value:5 }
]

const systemStatus = [
{ name:"Online", value:18 },
{ name:"Maintenance", value:3 },
{ name:"Down", value:1 }
]

const COLORS = ["#22c55e","#f59e0b","#ef4444"]


export default function TI(){

const [tab,setTab]=useState("overview")

const [search,setSearch]=useState("")

const [showForm,setShowForm]=useState(false)


/* TICKETS */

const [tickets,setTickets]=useState([
{title:"Error ERP",user:"Ventas",priority:"Alta",status:"open"},
{title:"Servidor web lento",user:"Ecommerce",priority:"Media",status:"progress"},
{title:"VPN no conecta",user:"RRHH",priority:"Alta",status:"open"},
{title:"Actualización CRM",user:"Marketing",priority:"Baja",status:"resolved"}
])


return(

<motion.div
className="ti-container"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.5}}
>

{/* HERO */}

<section className="ti-hero">

<div className="hero-left">

<h1>Centro de Tecnología TI</h1>

<p>
Infraestructura, soporte técnico y operaciones
tecnológicas de la organización.
</p>

<div className="hero-actions">

<motion.button
whileHover={{scale:1.05}}
className="btn-primary"
onClick={()=>setShowForm(true)}
>
Crear ticket
</motion.button>

<motion.button
whileHover={{scale:1.05}}
className="btn-secondary"
>
Documentación
</motion.button>

</div>

</div>


{/* DONUT STATUS */}

<div className="hero-donut">

<ResponsiveContainer width={220} height={220}>

<PieChart>

<Pie
data={systemStatus}
innerRadius={70}
outerRadius={90}
dataKey="value"
paddingAngle={4}
>

{systemStatus.map((entry,index)=>(
<Cell key={index} fill={COLORS[index]} />
))}

</Pie>

</PieChart>

</ResponsiveContainer>

<div className="donut-label">
<h3>22</h3>
<span>Sistemas</span>
</div>

</div>

</section>


{/* KPI */}

<section className="ti-kpis">

<motion.div whileHover={{y:-6}} className="kpi">
<h3>24</h3>
<span>Servidores activos</span>
<div className="kpi-bar green"></div>
</motion.div>

<motion.div whileHover={{y:-6}} className="kpi">
<h3>99.9%</h3>
<span>Uptime global</span>
<div className="kpi-bar blue"></div>
</motion.div>

<motion.div whileHover={{y:-6}} className="kpi">
<h3>8</h3>
<span>Incidencias abiertas</span>
<div className="kpi-bar orange"></div>
</motion.div>

<motion.div whileHover={{y:-6}} className="kpi">
<h3>15</h3>
<span>Tickets resueltos hoy</span>
<div className="kpi-bar purple"></div>
</motion.div>

</section>


{/* SEARCH */}

<div className="ti-search">

<input
placeholder="Buscar tickets o sistemas..."
onChange={(e)=>setSearch(e.target.value)}
/>

</div>


{/* TABS */}

<div className="ti-tabs">

<button
onClick={()=>setTab("overview")}
className={tab==="overview"?"active":""}
>
Overview
</button>

<button
onClick={()=>setTab("tickets")}
className={tab==="tickets"?"active":""}
>
Service Desk
</button>

<button
onClick={()=>setTab("infra")}
className={tab==="infra"?"active":""}
>
Infraestructura
</button>

<button
onClick={()=>setTab("tools")}
className={tab==="tools"?"active":""}
>
Herramientas
</button>

</div>


{/* OVERVIEW */}

{tab==="overview" && (

<section className="overview-grid">

<div className="chart-card">

<h3>Actividad semanal de tickets</h3>

<ResponsiveContainer width="100%" height={260}>

<LineChart data={ticketTrend}>

<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>

<Line
type="monotone"
dataKey="value"
stroke="#3b82f6"
strokeWidth={3}
dot={{r:4}}
/>

</LineChart>

</ResponsiveContainer>

</div>


<div className="activity-feed">

<h3>Actividad reciente</h3>

<ul>

<li>Servidor API reiniciado</li>
<li>Acceso Git concedido</li>
<li>Actualización de seguridad aplicada</li>
<li>Nuevo nodo agregado al cluster</li>

</ul>

</div>

</section>

)}


{/* SERVICE DESK */}

{tab==="tickets" && (

<section className="service-desk">

<h2>Tickets de soporte</h2>

<table className="ticket-table">

<thead>
<tr>
<th>Ticket</th>
<th>Usuario</th>
<th>Prioridad</th>
<th>Estado</th>
</tr>
</thead>

<tbody>

{tickets
.filter(t=>t.title.toLowerCase().includes(search.toLowerCase()))
.map((t,i)=>(

<motion.tr
key={i}
whileHover={{background:"#f8fafc"}}
>

<td>{t.title}</td>
<td>{t.user}</td>
<td>{t.priority}</td>

<td>
<span className={`status ${t.status}`}>
{t.status}
</span>
</td>

</motion.tr>

))}

</tbody>

</table>

</section>

)}


{/* INFRA */}

{tab==="infra" && (

<section className="infra-grid">

<div className="infra-block">

<h4><FaServer/> Servidores</h4>

<ul>
<li><span className="dot online"></span> API Principal</li>
<li><span className="dot online"></span> Database</li>
<li><span className="dot maintenance"></span> ERP</li>
</ul>

</div>

<div className="infra-block">

<h4><FaCloud/> Cloud</h4>

<ul>
<li><span className="dot online"></span> Storage</li>
<li><span className="dot online"></span> CDN</li>
<li><span className="dot online"></span> Monitoring</li>
</ul>

</div>

</section>

)}


{/* TOOLS */}

{tab==="tools" && (

<section className="tools-grid">

<div className="tool">
<FaCodeBranch/>
<h4>Repositorio Git</h4>
</div>

<div className="tool">
<FaTools/>
<h4>CI/CD Pipeline</h4>
</div>

<div className="tool">
<FaBug/>
<h4>Monitoreo</h4>
</div>

</section>

)}


{/* FORMULARIO */}

{showForm && (

<TicketForm

onClose={()=>setShowForm(false)}

onCreate={(ticket)=>{

setTickets(prev=>[
...prev,
ticket
])

}}

 />

)}

</motion.div>

)
}