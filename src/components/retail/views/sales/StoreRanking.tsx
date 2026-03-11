import { ranking } from "../../data/retailSalesData"
import { motion } from "framer-motion"

export default function StoreRanking(){

return(

<div className="sales-card">

<h3>Ranking de tiendas</h3>

<ul className="ranking">

{ranking.map((s,i)=>(

<motion.li
key={i}
whileHover={{x:4}}
>

<span>{i+1}. {s.store}</span>

<strong>${s.revenue}</strong>

</motion.li>

))}

</ul>

</div>

)

}