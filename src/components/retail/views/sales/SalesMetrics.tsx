import { motion } from "framer-motion";

export default function SalesMetrics(){

const metrics=[
{label:"Ventas hoy",value:"$12,420"},
{label:"Ventas del mes",value:"$284,900"},
{label:"Ticket promedio",value:"$82"},
{label:"Conversión",value:"3.8%"}
]

return(

<div className="sales-metrics">

{metrics.map((m,i)=>(

<motion.div
key={i}
className="sales-metric"
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:i*.1}}
whileHover={{scale:1.03}}
>

<span>{m.value}</span>
<p>{m.label}</p>

</motion.div>

))}

</div>

)

}