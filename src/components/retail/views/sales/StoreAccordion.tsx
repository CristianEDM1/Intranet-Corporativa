import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

export default function StoreAccordion(){

const [open,setOpen]=useState<number | null>(null)

const stores=[
{name:"Centro Andino",sales:"$24,300"},
{name:"Gran Estación",sales:"$18,900"},
{name:"El Tesoro",sales:"$22,100"}
]

return(

<div className="store-accordion">

{stores.map((s,i)=>(

<div key={i}>

<div
className="accordion-header"
onClick={()=>setOpen(open===i?null:i)}
>

<h4>{s.name}</h4>

<span>{s.sales}</span>

</div>

<AnimatePresence>

{open===i && (

<motion.div
className="accordion-content"
initial={{height:0,opacity:0}}
animate={{height:"auto",opacity:1}}
exit={{height:0,opacity:0}}
>

<p>Detalle de ventas por categoría.</p>

</motion.div>

)}

</AnimatePresence>

</div>

))}

</div>

)

}