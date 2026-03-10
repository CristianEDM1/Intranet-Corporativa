import { motion } from "framer-motion"
import RetailMetrics from "../componentes/RetailMetrics"
import RetailDonut from "../componentes/RetailDonut"

export default function RetailOverview(){

return(

<motion.section
className="retail-overview"
initial={{opacity:0}}
animate={{opacity:1}}
>

<RetailMetrics/>

<RetailDonut/>

</motion.section>

)

}