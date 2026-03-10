import { useState } from "react"
import { motion } from "framer-motion"

type News = {
id:number
title:string
summary:string
category:string
date:string
content:string
}

const news:News[] = [

{
id:1,
title:"Nueva política de trabajo híbrido",
summary:"Conoce los lineamientos actualizados para el esquema de trabajo híbrido.",
category:"Cultura",
date:"Hace 2 días",
content:"La compañía implementará un nuevo modelo híbrido que combina trabajo presencial y remoto para fortalecer la colaboración y el bienestar de los colaboradores."
},

{
id:2,
title:"Programa de mentoría 2025",
summary:"Inscripciones abiertas para el nuevo programa de mentoría corporativa.",
category:"Desarrollo",
date:"Hace 1 semana",
content:"El programa busca conectar líderes de la organización con talentos emergentes para acelerar el desarrollo profesional."
},

{
id:3,
title:"Encuesta de clima organizacional",
summary:"Participa y ayúdanos a mejorar el ambiente laboral.",
category:"Cultura",
date:"Hace 3 días",
content:"Tu opinión es clave para mejorar los procesos internos y fortalecer la cultura organizacional."
},

{
id:4,
title:"Actualización beneficios corporativos",
summary:"Se incorporan nuevos beneficios para colaboradores.",
category:"HR",
date:"Hace 2 semanas",
content:"La empresa amplía su programa de beneficios incluyendo nuevas opciones de bienestar y desarrollo."
}

]

const categories = ["Todos","Cultura","Desarrollo","HR"]

export default function HRNews(){

const [category,setCategory] = useState("Todos")
const [active,setActive] = useState<number | null>(null)

const filtered = news.filter(n =>
category === "Todos" || n.category === category
)

const featured = news[0]

return(

<div className="hr-news">

<h2>Comunicados de Capital Humano</h2>

{/* FEATURED */}

<motion.div
className="news-featured"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.4}}
>

<span className="news-tag">Comunicado destacado</span>

<h3>{featured.title}</h3>

<p>{featured.summary}</p>

<div className="news-meta">
<span>{featured.category}</span>
<span>{featured.date}</span>
</div>

</motion.div>


{/* FILTER */}

<div className="news-filter">

{categories.map(c => (

<button
key={c}
className={category === c ? "active" : ""}
onClick={()=>setCategory(c)}
>
{c}
</button>

))}

</div>


{/* TIMELINE */}

<div className="news-timeline">

{filtered.map(item => {

const open = active === item.id

return(

<motion.div
layout
key={item.id}
className="news-item"
>

<div
className="news-row"
onClick={()=>setActive(open ? null : item.id)}
>

<div className="news-indicator"/>

<div className="news-main">

<h4>{item.title}</h4>

<p>{item.summary}</p>

</div>

<div className="news-info">

<span className="news-category">
{item.category}
</span>

<span className="news-date">
{item.date}
</span>

</div>

</div>

{open && (

<motion.div
initial={{opacity:0,height:0}}
animate={{opacity:1,height:"auto"}}
exit={{opacity:0,height:0}}
className="news-details"
>

<p>{item.content}</p>

</motion.div>

)}

</motion.div>

)

})}

</div>

</div>

)

}