import { motion } from "framer-motion"
import { FaFileAlt } from "react-icons/fa"

const documents = [

{
name:"Manual del empleado",
area:"RRHH",
version:"v2.1",
status:"Publicado",
owner:"HR"
},

{
name:"Contrato proveedor",
area:"Legal",
version:"v1.4",
status:"Aprobado",
owner:"Legal"
},

{
name:"Política seguridad IT",
area:"TI",
version:"v3.0",
status:"Revisión",
owner:"IT"
}

]

export default function DocumentsTable({search,areaFilter}:any){

const filtered = documents.filter(d =>

d.name.toLowerCase().includes(search.toLowerCase()) &&
(areaFilter==="all" || d.area===areaFilter)

)

return(

<div className="docs-table">

<table>

<thead>

<tr>

<th>Documento</th>
<th>Área</th>
<th>Versión</th>
<th>Estado</th>
<th>Propietario</th>

</tr>

</thead>

<tbody>

{filtered.map((doc,i)=>(

<motion.tr
key={i}
whileHover={{background:"#f8fafc"}}
>

<td>

<FaFileAlt/>

{doc.name}

</td>

<td>{doc.area}</td>
<td>{doc.version}</td>
<td>{doc.status}</td>
<td>{doc.owner}</td>

</motion.tr>

))}

</tbody>

</table>

</div>

)

}