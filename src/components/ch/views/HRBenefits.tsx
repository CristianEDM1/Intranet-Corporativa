import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Benefit = {
id:number
title:string
category:string
description:string
details:string
}

const benefits:Benefit[] = [

{
id:1,
title:"Seguro médico corporativo",
category:"Salud",
description:"Cobertura médica premium para colaboradores.",
details:"Incluye atención especializada, hospitalización, medicina preventiva y cobertura familiar."
},

{
id:2,
title:"Programa bienestar integral",
category:"Salud",
description:"Programas de bienestar físico y mental.",
details:"Acceso a gimnasios aliados, asesoría nutricional y sesiones de mindfulness."
},

{
id:3,
title:"Apoyo psicológico",
category:"Salud",
description:"Acompañamiento psicológico confidencial.",
details:"Sesiones virtuales o presenciales con profesionales certificados."
},

{
id:4,
title:"Bono por desempeño",
category:"Compensación",
description:"Incentivo basado en resultados individuales.",
details:"Evaluado trimestralmente según metas y KPIs."
},

{
id:5,
title:"Bono anual corporativo",
category:"Compensación",
description:"Participación en resultados de la empresa.",
details:"Se calcula según desempeño organizacional y objetivos globales."
},

{
id:6,
title:"Días libres adicionales",
category:"Tiempo libre",
description:"Días libres extra por desempeño.",
details:"Beneficio otorgado por resultados destacados o fechas especiales."
},

{
id:7,
title:"Horario flexible",
category:"Tiempo libre",
description:"Flexibilidad de horario laboral.",
details:"Permite ajustar horarios de entrada y salida según necesidades."
},

{
id:8,
title:"Cursos patrocinados",
category:"Desarrollo",
description:"Capacitación profesional patrocinada.",
details:"Cursos técnicos, liderazgo y especialización."
},

{
id:9,
title:"Certificaciones profesionales",
category:"Desarrollo",
description:"Apoyo para certificaciones.",
details:"Cobertura parcial o total de certificaciones relevantes."
},

{
id:10,
title:"Mentoring interno",
category:"Desarrollo",
description:"Mentoría con líderes corporativos.",
details:"Programa interno para desarrollo profesional y liderazgo."
}

]

const categories = ["Todos","Salud","Compensación","Tiempo libre","Desarrollo"]

export default function HRBenefits(){

const [search,setSearch] = useState("")
const [category,setCategory] = useState("Todos")
const [open,setOpen] = useState<number | null>(null)

const filteredBenefits = useMemo(()=>{

return benefits.filter(b=>{

const matchSearch =
b.title.toLowerCase().includes(search.toLowerCase())

const matchCategory =
category === "Todos" || b.category === category

return matchSearch && matchCategory

})

},[search,category])


return(

<div className="hr-benefits">

{/* HEADER */}

<div className="benefits-header">

<div>

<h2>Portal de beneficios</h2>

<p>
Explora los beneficios disponibles para colaboradores y solicita los que necesites.
</p>

</div>

<div className="benefits-controls">

<input
placeholder="Buscar beneficio..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
>

{categories.map(c=>(
<option key={c}>{c}</option>
))}

</select>

</div>

</div>


{/* BENEFITS LIST */}

<div className="benefits-list">

{filteredBenefits.map(b=>{

const isOpen = open === b.id

return(

<motion.div
key={b.id}
className="benefit-row"
layout
>

<div className="benefit-main">

<div>

<h4>{b.title}</h4>

<span className="benefit-category">
{b.category}
</span>

<p>{b.description}</p>

</div>

<div className="benefit-actions">

<button
className="btn-request"
>
Solicitar
</button>

<button
className="btn-expand"
onClick={()=>setOpen(isOpen ? null : b.id)}
>

{isOpen ? "Ocultar" : "Ver detalles"}

</button>

</div>

</div>

<AnimatePresence>

{isOpen && (

<motion.div
initial={{opacity:0,height:0}}
animate={{opacity:1,height:"auto"}}
exit={{opacity:0,height:0}}
transition={{duration:.25}}
className="benefit-details"
>

<p>{b.details}</p>

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