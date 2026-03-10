import { useState } from "react"
import { motion } from "framer-motion"

type Item={
producto:string
stock:number
tienda:string
}

export default function RetailInventory(){

const [data,setData]=useState<Item[]>([
{producto:"Camisa Premium",stock:45,tienda:"Bogotá"},
{producto:"Zapato Urbano",stock:12,tienda:"Medellín"},
{producto:"Chaqueta Invierno",stock:30,tienda:"Cali"}
])

function updateValue(i:number,key:keyof Item,value:string){

const newData=[...data]

newData[i]={...newData[i],[key]:value}

setData(newData)

}

return(

<motion.section
className="retail-table"
initial={{opacity:0}}
animate={{opacity:1}}
>

<h2>Inventario editable</h2>

<table>

<thead>
<tr>
<th>Producto</th>
<th>Stock</th>
<th>Tienda</th>
</tr>
</thead>

<tbody>

{data.map((row,i)=>(

<motion.tr key={i} whileHover={{background:"#f9fafb"}}>

<td>
<input
value={row.producto}
onChange={e=>updateValue(i,"producto",e.target.value)}
/>
</td>

<td>
<input
value={row.stock}
onChange={e=>updateValue(i,"stock",e.target.value)}
/>
</td>

<td>
<input
value={row.tienda}
onChange={e=>updateValue(i,"tienda",e.target.value)}
/>
</td>

</motion.tr>

))}

</tbody>

</table>

</motion.section>

)

}