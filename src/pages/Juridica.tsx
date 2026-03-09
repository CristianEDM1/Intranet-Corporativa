import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Juridica.css";

export default function Juridica() {

const [activeTab,setActiveTab] = useState("contratos");

return(

<motion.div
className="juridica-container"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.4}}
>

{/* HERO */}

<section className="legal-hero">

<div>

<h1>Área Jurídica Corporativa</h1>

<p>
Gestión integral de contratos, cumplimiento normativo
y documentación legal de la organización.
</p>

</div>

<button className="btn-primary">
Nuevo registro legal
</button>

</section>


{/* BUSCADOR */}

<div className="juridica-search">

<input
type="text"
placeholder="Buscar contratos, normativas, documentos o procesos legales..."
/>

</div>


{/* ACCIONES RAPIDAS */}

<section className="legal-actions">

<motion.div whileHover={{y:-6}} className="legal-action-card">

<h3>Registrar contrato</h3>
<p>Crear y registrar nuevos acuerdos legales.</p>

</motion.div>

<motion.div whileHover={{y:-6}} className="legal-action-card">

<h3>Subir documento</h3>
<p>Agregar políticas, normativas o archivos legales.</p>

</motion.div>

<motion.div whileHover={{y:-6}} className="legal-action-card">

<h3>Revisar procesos</h3>
<p>Supervisar litigios y procesos regulatorios.</p>

</motion.div>

</section>


{/* NAVEGACION */}

<div className="juridica-tabs">

<button
className={activeTab==="contratos"?"active":""}
onClick={()=>setActiveTab("contratos")}
>
Contratos
</button>

<button
className={activeTab==="documentos"?"active":""}
onClick={()=>setActiveTab("documentos")}
>
Documentación
</button>

<button
className={activeTab==="procesos"?"active":""}
onClick={()=>setActiveTab("procesos")}
>
Procesos
</button>

<button
className={activeTab==="normativa"?"active":""}
onClick={()=>setActiveTab("normativa")}
>
Normativa
</button>

</div>


{/* LAYOUT */}

<section className="juridica-layout">


{/* CONTENIDO PRINCIPAL */}

<main className="juridica-main">

{activeTab==="contratos" && (

<>

<h2>Contratos corporativos</h2>

<p className="section-description">
Gestión y seguimiento de acuerdos comerciales y contratos activos dentro de la organización.
</p>

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

<motion.tr whileHover={{background:"#f9fafb"}}>
<td>Proveedor Logística</td>
<td>Retail</td>
<td><span className="estado activo">Activo</span></td>
<td>12/10/2026</td>
</motion.tr>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td>Servicio Ecommerce</td>
<td>Ecommerce</td>
<td><span className="estado revision">En revisión</span></td>
<td>05/09/2026</td>
</motion.tr>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td>Acuerdo Comercial</td>
<td>Corporativo</td>
<td><span className="estado alerta">Por vencer</span></td>
<td>01/07/2026</td>
</motion.tr>

</tbody>

</table>

</>

)}

{activeTab==="documentos" && (

<div className="legal-section">

<h2>Centro documental</h2>

<p>
Repositorio de contratos, políticas internas y documentos jurídicos.
</p>

</div>

)}

{activeTab==="procesos" && (

<div className="legal-section">

<h2>Procesos legales</h2>

<p>
Seguimiento de litigios y procesos regulatorios de la organización.
</p>

</div>

)}

{activeTab==="normativa" && (

<div className="legal-section">

<h2>Normativa corporativa</h2>

<p>
Gestión de regulaciones internas y cumplimiento legal corporativo.
</p>

</div>

)}

{/* CUMPLIMIENTO */}

<section className="legal-info">

<h2>Cumplimiento corporativo</h2>

<p>
Supervisión de regulaciones internas, auditorías legales y políticas corporativas.
</p>

<div className="compliance-grid">

<div>
<h4>Políticas activas</h4>
<p>12 políticas vigentes</p>
</div>

<div>
<h4>Auditorías</h4>
<p>3 auditorías en curso</p>
</div>

<div>
<h4>Riesgos detectados</h4>
<p>2 casos en revisión</p>
</div>

</div>

</section>

</main>


{/* SIDEBAR */}

<aside className="juridica-sidebar">

<div className="legal-card">

<h3>Actividad reciente</h3>

<ul className="timeline">

<li><span></span>Contrato aprobado por dirección</li>
<li><span></span>Nueva política de datos registrada</li>
<li><span></span>Actualización normativa interna</li>

</ul>

</div>


<div className="legal-card">

<h3>Alertas legales</h3>

<ul>

<li>Contrato proveedor textil vence en 15 días</li>
<li>Revisión legal ecommerce pendiente</li>
<li>Nueva normativa de datos por implementar</li>

</ul>

</div>

</aside>

</section>

</motion.div>

)
}
