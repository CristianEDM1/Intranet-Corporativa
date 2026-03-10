import { motion } from "framer-motion"
import { FaChartPie } from "react-icons/fa"

export default function RetailDonut(){

return(

<div className="donut-wrapper">

<motion.div
className="donut"
animate={{rotate:360}}
transition={{repeat:Infinity,duration:12,ease:"linear"}}
/>

<div className="donut-center">

<FaChartPie/>

<p>Ventas</p>

</div>

</div>

)

}