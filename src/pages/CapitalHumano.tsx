import { motion } from "framer-motion";
import { FaUsers, FaGift, FaUserPlus, FaGraduationCap } from "react-icons/fa";
import "../styles/CapitalHumano.css";

export default function CapitalHumano(){

return(

<motion.div
className="hr-container"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
>

<section className="hr-hero">

<div>
<h1>Capital Humano</h1>
<p>Gestión del talento, cultura organizacional y bienestar laboral.</p>
</div>

<button className="btn-primary">
Nueva solicitud
</button>

</section>


<div className="hr-search">
<input placeholder="Buscar empleados, departamentos o procesos..." />
</div>


<section className="hr-actions">

<motion.div whileHover={{scale:1.04}} className="hr-card">
<FaUsers size={26}/>
<h3>Directorio</h3>
<p>Consultar empleados.</p>
</motion.div>

<motion.div whileHover={{scale:1.04}} className="hr-card">
<FaUserPlus size={26}/>
<h3>Vacantes</h3>
<p>Postulaciones internas.</p>
</motion.div>

<motion.div whileHover={{scale:1.04}} className="hr-card">
<FaGraduationCap size={26}/>
<h3>Capacitación</h3>
<p>Programas de formación.</p>
</motion.div>

</section>


<section className="hr-layout">

<main>

<h2>Directorio interno</h2>

<div className="employee-grid">

<div className="employee-card">
<h4>Laura Gómez</h4>
<p>Marketing</p>
</div>

<div className="employee-card">
<h4>Andrés Ruiz</h4>
<p>Tecnología</p>
</div>

<div className="employee-card">
<h4>María Torres</h4>
<p>Legal</p>
</div>

</div>

</main>


<aside>

<div className="sidebar-card">

<h3>Beneficios</h3>

<ul>
<li><FaGift/> Seguro médico</li>
<li><FaGift/> Programas bienestar</li>
<li><FaGift/> Bonos desempeño</li>
</ul>

</div>


<div className="sidebar-card">

<h3>Eventos</h3>

<ul>
<li>Cumpleaños del mes</li>
<li>Capacitación liderazgo</li>
<li>Integración empresa</li>
</ul>

</div>

</aside>

</section>

</motion.div>

)

}