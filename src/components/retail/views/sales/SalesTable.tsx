import { motion } from "framer-motion";
import { sales } from "../../data/retailSalesData";

type Props={
search:string
city:string
}

export default function SalesTable({search,city}:Props){

const filtered=sales
.filter(s=>s.product.toLowerCase().includes(search.toLowerCase()))
.filter(s=>city==="all" || s.city===city)

return(

<table className="sales-table">

<thead>

<tr>
<th>Producto</th>
<th>Tienda</th>
<th>Ciudad</th>
<th>Ventas</th>
<th>Total</th>
</tr>

</thead>

<tbody>

{filtered.map((s,i)=>(

<motion.tr
key={i}
whileHover={{background:"#f9fafb"}}
>

<td>{s.product}</td>
<td>{s.store}</td>
<td>{s.city}</td>
<td>{s.units}</td>
<td>${s.total}</td>

</motion.tr>

))}

</tbody>

</table>

)

}