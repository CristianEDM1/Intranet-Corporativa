import { useState } from "react"
import { FaFolder } from "react-icons/fa"
import { motion } from "framer-motion"

export default function DocumentsExplorer(){

const [open,setOpen] = useState(true)

return(

<div className="docs-explorer">

<header onClick={()=>setOpen(!open)}>

<FaFolder/>

<span>Recursos Humanos</span>

</header>

{open && (

<motion.ul
initial={{opacity:0}}
animate={{opacity:1}}
>

<li>Contratos</li>
<li>Políticas</li>
<li>Evaluaciones</li>

</motion.ul>

)}

</div>

)

}