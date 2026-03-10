import { motion } from "framer-motion"
import { useState } from "react"

import DocumentsExplorer from "../components/documents/DocumentsExplorer"
import DocumentsTable from "../components/documents/DocumentsTable"
import DocumentsFilters from "../components/documents/DocumentsFilters"

import {
ResponsiveContainer,
PieChart,
Pie,
Cell,
Tooltip
} from "recharts"

import "../styles/Documentos.css"



const distribution = [
{ name:"RRHH", value:42 },
{ name:"Legal", value:25 },
{ name:"TI", value:18 },
{ name:"Finanzas", value:15 }
]

const COLORS = ["#3b82f6","#22c55e","#f59e0b","#ef4444"]



export default function Documentos(){

const [search,setSearch] = useState("")
const [areaFilter,setAreaFilter] = useState("all")

return(

<motion.div
className="docs-layout"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:.4}}
>

{/* HEADER */}

<div className="docs-header">

<div>

<h1>Gestión Documental</h1>

<p>
Gobernanza, control de versiones y colaboración
de documentos corporativos.
</p>

</div>

<div className="docs-stats">

<div>
<span>12,540</span>
<p>Documentos</p>
</div>

<div>
<span>24</span>
<p>Pendientes</p>
</div>

<div>
<span>9,830</span>
<p>Activos</p>
</div>

</div>

</div>



{/* SEARCH + FILTERS */}

<DocumentsFilters
search={search}
setSearch={setSearch}
setAreaFilter={setAreaFilter}
/>



{/* MAIN GRID */}

<div className="docs-grid">


{/* EXPLORER */}

<DocumentsExplorer/>


{/* TABLE */}

<DocumentsTable
search={search}
areaFilter={areaFilter}
/>



{/* ANALYTICS */}

<div className="docs-analytics">

<h3>Distribución documental</h3>

<ResponsiveContainer width="100%" height={260}>

<PieChart>

<Pie
data={distribution}
dataKey="value"
innerRadius={70}
outerRadius={90}
paddingAngle={3}
>

{distribution.map((entry,index)=>(
<Cell key={index} fill={COLORS[index]}/>
))}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>



{/* ACTIVITY */}

<div className="docs-activity">

<h3>Actividad reciente</h3>

<ul>

<li>Manual HR actualizado</li>

<li>Contrato proveedor aprobado</li>

<li>Política IT enviada a revisión</li>

<li>Nuevo documento financiero subido</li>

</ul>

</div>

</div>

</motion.div>

)

}