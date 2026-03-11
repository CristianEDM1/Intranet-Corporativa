import { topProducts } from "../../data/retailSalesData"

export default function TopProducts(){

return(

<div className="sales-card">

<h3>Top productos</h3>

<ul className="top-products">

{topProducts.map((p,i)=>(

<li key={i}>

<span>{p.name}</span>

<strong>{p.sales}</strong>

</li>

))}

</ul>

</div>

)

}