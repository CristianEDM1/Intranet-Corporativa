import { useState } from "react";
import { motion } from "framer-motion";

import SalesMetrics from "../sales/SalesMetrics";
import SalesFilters from "../sales/SalesFilters";
import SalesForecast from "./SalesForecast";
import SalesChart from "../sales/SalesChart";
import SalesTable from "../sales/SalesTable";
import StoreAccordion from "../sales/StoreAccordion";

import StoreRanking from "./StoreRanking";
import TopProducts from "./TopProducts";
import StorePerformance from "./StorePerformance";

export default function RetailSales(){

const [search,setSearch]=useState("")
const [city,setCity]=useState("all")

return(

<motion.section
className="retail-sales"
initial={{opacity:0}}
animate={{opacity:1}}
>

<SalesMetrics/>

<div className="sales-grid">

<SalesChart/>

<StoreRanking/>

</div>

<div className="sales-grid">

<TopProducts/>

<StorePerformance/>

</div>

<SalesForecast/>

<SalesFilters
search={search}
setSearch={setSearch}
city={city}
setCity={setCity}
/>

<SalesTable
search={search}
city={city}
/>

</motion.section>

)

}