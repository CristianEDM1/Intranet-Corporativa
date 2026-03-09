import { motion } from "framer-motion";
import { FaFilePdf, FaFileWord, FaFileAlt, FaStar, FaDownload } from "react-icons/fa";
import "../styles/Documentos.css";

export default function Documentos(){

return(

<motion.div
className="docs-container"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.4}}
>

{/* HERO */}

<section className="docs-hero">

<div>
<h1>Centro de Documentos</h1>
<p>Acceso centralizado a políticas, formatos, manuales y documentación corporativa.</p>
</div>

<button className="btn-primary">
Subir documento
</button>

</section>


{/* BUSCADOR */}

<div className="docs-search">
<input placeholder="Buscar políticas, manuales, formatos o instructivos..." />
</div>


{/* CATEGORÍAS */}

<section className="docs-categories">

<motion.div whileHover={{y:-4}} className="category-card">
<h3>Políticas</h3>
<p>Normativas internas y corporativas.</p>
</motion.div>

<motion.div whileHover={{y:-4}} className="category-card">
<h3>Formatos</h3>
<p>Plantillas y formularios oficiales.</p>
</motion.div>

<motion.div whileHover={{y:-4}} className="category-card">
<h3>Manuales</h3>
<p>Guías operativas y procedimientos.</p>
</motion.div>

<motion.div whileHover={{y:-4}} className="category-card">
<h3>Contratos</h3>
<p>Modelos contractuales y legales.</p>
</motion.div>

</section>


{/* LAYOUT */}

<section className="docs-layout">


{/* DOCUMENTOS */}

<main>

<h2>Documentos recientes</h2>

<table className="tabla-docs">

<thead>
<tr>
<th>Documento</th>
<th>Área</th>
<th>Actualizado</th>
<th></th>
</tr>
</thead>

<tbody>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td><FaFilePdf/> Política de Seguridad</td>
<td>TI</td>
<td>Feb 2026</td>
<td><FaDownload/></td>
</motion.tr>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td><FaFileWord/> Contrato Laboral Base</td>
<td>Capital Humano</td>
<td>Ene 2026</td>
<td><FaDownload/></td>
</motion.tr>

<motion.tr whileHover={{background:"#f9fafb"}}>
<td><FaFileAlt/> Manual Retail Operaciones</td>
<td>Retail</td>
<td>Mar 2026</td>
<td><FaDownload/></td>
</motion.tr>

</tbody>

</table>

</main>


{/* SIDEBAR */}

<aside>

<div className="sidebar-card">

<h3>Destacados</h3>

<ul>
<li><FaStar/> Código de conducta</li>
<li><FaStar/> Política de privacidad</li>
<li><FaStar/> Manual corporativo</li>
</ul>

</div>


<div className="sidebar-card">

<h3>Actividad reciente</h3>

<ul>
<li>Nuevo formato RRHH</li>
<li>Actualización política TI</li>
<li>Manual Retail actualizado</li>
</ul>

</div>

</aside>

</section>

</motion.div>

)

}