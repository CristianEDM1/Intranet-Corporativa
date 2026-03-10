import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Training = {
id:number
title:string
summary:string
duration:string
level:string
mode:string
description:string
topics:string[]
}

const programs:Training[] = [

{
id:1,
title:"Programa de liderazgo",
summary:"Desarrollo de habilidades de liderazgo para mandos medios.",
duration:"6 semanas",
level:"Intermedio",
mode:"Híbrido",
description:"Programa orientado al fortalecimiento de habilidades de liderazgo estratégico, gestión de equipos y toma de decisiones.",
topics:[
"Liderazgo estratégico",
"Gestión de equipos",
"Comunicación organizacional",
"Toma de decisiones"
]
},

{
id:2,
title:"Comunicación efectiva",
summary:"Mejora la comunicación interpersonal en equipos.",
duration:"4 semanas",
level:"Básico",
mode:"Virtual",
description:"Curso diseñado para fortalecer la comunicación efectiva, manejo de conversaciones difíciles y presentaciones profesionales.",
topics:[
"Comunicación interpersonal",
"Escucha activa",
"Presentaciones profesionales",
"Resolución de conflictos"
]
},

{
id:3,
title:"Gestión del tiempo",
summary:"Optimización del rendimiento laboral.",
duration:"3 semanas",
level:"Básico",
mode:"Virtual",
description:"Programa para mejorar la organización personal, priorización de tareas y productividad.",
topics:[
"Priorización de tareas",
"Gestión de agenda",
"Productividad personal",
"Eliminación de distractores"
]
}

]

export default function HRTraining(){

const [active,setActive] = useState<number | null>(null)

return(

<div className="hr-training">

<h2>Programas de capacitación</h2>

<p className="training-intro">
Programas diseñados para fortalecer habilidades profesionales, liderazgo y desarrollo personal de los colaboradores.
</p>

<div className="training-list">

{programs.map(program=>{

const isOpen = active === program.id

return(

<motion.div
layout
key={program.id}
className={`training-item ${isOpen ? "active" : ""}`}
whileHover={{x:4}}
transition={{duration:.2}}
>

<div
className="training-header"
onClick={()=>setActive(isOpen ? null : program.id)}
>

<div className="training-main">

<h3>{program.title}</h3>

<p>{program.summary}</p>

</div>

<div className="training-meta">

<span>{program.duration}</span>

<button className="training-expand">
{isOpen ? "Cerrar" : "Ver programa"}
</button>

</div>

</div>

<AnimatePresence>

{isOpen && (

<motion.div
initial={{opacity:0,height:0}}
animate={{opacity:1,height:"auto"}}
exit={{opacity:0,height:0}}
transition={{duration:.3}}
className="training-details"
>

<div className="training-info">

<div>

<span>Duración</span>
<strong>{program.duration}</strong>

</div>

<div>

<span>Modalidad</span>
<strong>{program.mode}</strong>

</div>

<div>

<span>Nivel</span>
<strong>{program.level}</strong>

</div>

</div>

<p className="training-description">
{program.description}
</p>

<div className="training-topics">

<h4>Contenido del programa</h4>

<ul>

{program.topics.map((t,i)=>(
<li key={i}>{t}</li>
))}

</ul>

</div>

<div className="training-actions">

<button className="btn-enroll">
Inscribirme
</button>

</div>

</motion.div>

)}

</AnimatePresence>

</motion.div>

)

})}

</div>

</div>

)

}