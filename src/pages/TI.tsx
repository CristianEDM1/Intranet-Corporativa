import { motion } from "framer-motion";
import { FaServer, FaBug, FaTools, FaNetworkWired } from "react-icons/fa";
import "../styles/TI.css";

export default function TI(){

return(

<motion.div
className="ti-container"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.4}}
>

<section className="ti-hero">

<div>
<h1>Centro de Tecnología</h1>
<p>Gestión de infraestructura, soporte técnico y proyectos tecnológicos.</p>
</div>

<button className="btn-primary">
Crear ticket
</button>

</section>


<div className="ti-search">
<input placeholder="Buscar sistemas, servidores o tickets..." />
</div>


<section className="ti-actions">

<motion.div whileHover={{y:-5}} className="ti-card">
<FaBug size={26}/>
<h3>Reportar incidente</h3>
<p>Registrar problemas técnicos o fallas.</p>
</motion.div>

<motion.div whileHover={{y:-5}} className="ti-card">
<FaTools size={26}/>
<h3>Solicitar soporte</h3>
<p>Solicitudes de acceso o asistencia.</p>
</motion.div>

<motion.div whileHover={{y:-5}} className="ti-card">
<FaServer size={26}/>
<h3>Infraestructura</h3>
<p>Gestión de servidores y redes.</p>
</motion.div>

</section>


<section className="ti-layout">

<main>

<h2>Estado de sistemas</h2>

<table className="tabla-ti">

<thead>
<tr>
<th>Sistema</th>
<th>Estado</th>
<th>Última revisión</th>
</tr>
</thead>

<tbody>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td>ERP Corporativo</td>
<td className="ok">Operativo</td>
<td>Hoy</td>
</motion.tr>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td>Base de datos</td>
<td className="warn">Mantenimiento</td>
<td>Hace 2h</td>
</motion.tr>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td>Servidor Web</td>
<td className="ok">Operativo</td>
<td>Hoy</td>
</motion.tr>

</tbody>

</table>

</main>


<aside>

<div className="sidebar-card">

<h3>Infraestructura</h3>

<ul>
<li><FaNetworkWired/> 12 servidores activos</li>
<li><FaServer/> 3 centros de datos</li>
<li><FaTools/> 8 incidencias abiertas</li>
</ul>

</div>


<div className="sidebar-card">

<h3>Actividad TI</h3>

<ul>
<li>Actualización de seguridad</li>
<li>Implementación servidor</li>
<li>Revisión red interna</li>
</ul>

</div>

</aside>

</section>

</motion.div>

)

}