import { motion } from "framer-motion";
import { useState } from "react";

import {
FaServer,
FaBug,
FaTools,
FaNetworkWired,
FaChevronDown,
FaTicketAlt
} from "react-icons/fa";

import {
LineChart,
Line,
ResponsiveContainer,
XAxis,
YAxis,
Tooltip
} from "recharts";

import "../styles/TI.css";

const data = [
{ name: "Lun", tickets: 4 },
{ name: "Mar", tickets: 7 },
{ name: "Mie", tickets: 3 },
{ name: "Jue", tickets: 8 },
{ name: "Vie", tickets: 5 },
];

export default function TI(){

const [infraOpen,setInfraOpen]=useState(true);
const [ticketsOpen,setTicketsOpen]=useState(true);

return(

<motion.div
className="ti-container"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.5}}
>

{/* HERO */}

<section className="ti-hero">

<div>

<h1>Centro de Tecnología</h1>

<p>
Infraestructura, soporte técnico y gestión de servicios tecnológicos
de la organización.
</p>

<div className="ti-hero-actions">

<button className="btn-primary">
Crear ticket
</button>

<button className="btn-secondary">
Ver documentación
</button>

</div>

</div>

<div className="hero-indicators">

<div>
<h3>24</h3>
<span>Sistemas activos</span>
</div>

<div>
<h3>8</h3>
<span>Tickets abiertos</span>
</div>

<div>
<h3>99.9%</h3>
<span>Uptime</span>
</div>

</div>

</section>


{/* SEARCH */}

<div className="ti-search">

<input placeholder="Buscar sistemas, servidores o tickets..." />

</div>


{/* QUICK ACTIONS */}

<section className="ti-actions">

<motion.div whileHover={{y:-6}} className="ti-action">

<FaBug size={22}/>

<div>
<h3>Reportar incidente</h3>
<p>Registrar fallas o errores técnicos</p>
</div>

</motion.div>


<motion.div whileHover={{y:-6}} className="ti-action">

<FaTools size={22}/>

<div>
<h3>Solicitar soporte</h3>
<p>Accesos, permisos o asistencia</p>
</div>

</motion.div>


<motion.div whileHover={{y:-6}} className="ti-action">

<FaServer size={22}/>

<div>
<h3>Infraestructura</h3>
<p>Estado de servidores y servicios</p>
</div>

</motion.div>

</section>


{/* INFRASTRUCTURE SECTION */}

<section className="ti-section">

<header onClick={()=>setInfraOpen(!infraOpen)}>

<h2>
<FaNetworkWired/>
 Infraestructura
</h2>

<FaChevronDown
className={infraOpen ? "rotate" : ""}
/>

</header>

{infraOpen && (

<motion.div
initial={{opacity:0,height:0}}
animate={{opacity:1,height:"auto"}}
className="infra-grid"
>

<div className="infra-card">
<h4>Servidores</h4>
<p>12 activos</p>
</div>

<div className="infra-card">
<h4>Centros de datos</h4>
<p>3 ubicaciones</p>
</div>

<div className="infra-card">
<h4>Red corporativa</h4>
<p>Estable</p>
</div>

</motion.div>

)}

</section>


{/* TICKETS */}

<section className="ti-section">

<header onClick={()=>setTicketsOpen(!ticketsOpen)}>

<h2>
<FaTicketAlt/>
 Actividad de Tickets
</h2>

<FaChevronDown
className={ticketsOpen ? "rotate" : ""}
/>

</header>

{ticketsOpen && (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="tickets-layout"
>

<div className="chart-area">

<h4>Tendencia semanal</h4>

<ResponsiveContainer width="100%" height={220}>

<LineChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="tickets"
stroke="#2563eb"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>


<div className="ticket-list">

<div className="ticket">

<span className="status open"></span>

<div>
<h4>Error ERP</h4>
<p>Usuario no puede acceder</p>
</div>

</div>


<div className="ticket">

<span className="status progress"></span>

<div>
<h4>Servidor web lento</h4>
<p>Investigación en curso</p>
</div>

</div>


<div className="ticket">

<span className="status resolved"></span>

<div>
<h4>Actualización sistema</h4>
<p>Completado correctamente</p>
</div>

</div>

</div>

</motion.div>

)}

</section>

</motion.div>

)

}