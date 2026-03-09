import { motion } from "framer-motion";
import {
FaUsers,
FaGift,
FaUserPlus,
FaGraduationCap
} from "react-icons/fa";

import "../styles/CapitalHumano.css";

export default function CapitalHumano(){

return(

<motion.div
className="hr-container"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.5}}
>

{/* HERO */}

<section className="hr-hero hero-full">

<div className="hero-left">

<span className="hr-label">
Área corporativa
</span>

<h1>Capital Humano</h1>

<p>
Portal interno para la gestión del talento,
beneficios corporativos y desarrollo profesional
de nuestros colaboradores.
</p>

<div className="hero-actions">

<button className="btn-primary">
Crear solicitud
</button>

<button className="btn-secondary">
Ver políticas
</button>

</div>

</div>

<div className="hero-right">

<div className="hero-stat">
<h3>248</h3>
<span>Colaboradores</span>
</div>

<div className="hero-stat">
<h3>17</h3>
<span>Departamentos</span>
</div>

<div className="hero-stat">
<h3>94%</h3>
<span>Satisfacción</span>
</div>

</div>

</section>


{/* SEARCH */}

<div className="hr-search">

<input placeholder="Buscar empleados, beneficios, documentos o procesos..." />

</div>


{/* QUICK ACCESS */}

<section className="hr-quick">

<motion.div whileHover={{y:-3}} className="quick-item">

<div className="quick-icon">
<FaUsers size={22}/>
</div>

<div className="quick-content">
<span>Directorio</span>
<p>Buscar colaboradores y departamentos</p>
</div>

<div className="quick-arrow">→</div>

</motion.div>


<motion.div whileHover={{y:-3}} className="quick-item">

<div className="quick-icon">
<FaUserPlus size={22}/>
</div>

<div className="quick-content">
<span>Vacantes</span>
<p>Explorar oportunidades internas</p>
</div>

<div className="quick-arrow">→</div>

</motion.div>


<motion.div whileHover={{y:-3}} className="quick-item">

<div className="quick-icon">
<FaGraduationCap size={22}/>
</div>

<div className="quick-content">
<span>Capacitación</span>
<p>Programas de desarrollo profesional</p>
</div>

<div className="quick-arrow">→</div>

</motion.div>


<motion.div whileHover={{y:-3}} className="quick-item">

<div className="quick-icon">
<FaGift size={22}/>
</div>

<div className="quick-content">
<span>Beneficios</span>
<p>Programas corporativos disponibles</p>
</div>

<div className="quick-arrow">→</div>

</motion.div>

</section>


{/* MAIN GRID */}

<section className="hr-content-grid">


{/* NEWS */}

<div className="hr-news">

<h2>Comunicados de Capital Humano</h2>

<article>

<h4>Nueva política de trabajo híbrido</h4>

<p>
Conoce los lineamientos actualizados para
el esquema de trabajo híbrido.
</p>

<span>Publicado hace 2 días</span>

</article>


<article>

<h4>Programa de mentoría 2025</h4>

<p>
Inscripciones abiertas para el nuevo programa
de mentoría corporativa.
</p>

<span>Publicado hace 1 semana</span>

</article>


<article>

<h4>Encuesta de clima organizacional</h4>

<p>
Participa y ayúdanos a mejorar el ambiente laboral.
</p>

<span>Publicado hace 3 días</span>

</article>

</div>


{/* BENEFITS */}

<div className="hr-benefits">

<h2>Beneficios destacados</h2>

<ul>

<li>
<FaGift/>
Seguro médico corporativo
</li>

<li>
<FaGift/>
Programas de bienestar
</li>

<li>
<FaGift/>
Bonos por desempeño
</li>

<li>
<FaGift/>
Días libres adicionales
</li>

</ul>

</div>

</section>


{/* DIRECTORY */}

<section className="hr-directory">

<h2>Directorio destacado</h2>

<div className="directory-grid">

<motion.div whileHover={{y:-4}} className="employee-card">
<h4>Laura Gómez</h4>
<p>Marketing</p>
</motion.div>

<motion.div whileHover={{y:-4}} className="employee-card">
<h4>Andrés Ruiz</h4>
<p>Tecnología</p>
</motion.div>

<motion.div whileHover={{y:-4}} className="employee-card">
<h4>María Torres</h4>
<p>Legal</p>
</motion.div>

</div>

</section>


{/* EVENTS */}

<section className="hr-events">

<h2>Eventos del mes</h2>

<ul>

<li>
<strong>12 Abril</strong> — Cumpleaños del mes
</li>

<li>
<strong>18 Abril</strong> — Taller liderazgo
</li>

<li>
<strong>24 Abril</strong> — Integración corporativa
</li>

</ul>

</section>

</motion.div>

)

}