import { motion } from "framer-motion"

export default function RetailSales(){

return(

<motion.section
className="retail-section"
initial={{opacity:0}}
animate={{opacity:1}}
>

<h2>Actividad comercial</h2>

<ul className="activity">

<li>Nueva venta registrada</li>
<li>Actualización inventario</li>
<li>Producto añadido</li>

</ul>

</motion.section>

)

}