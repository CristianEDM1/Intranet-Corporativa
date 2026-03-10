import { useState } from "react";
import { motion } from "framer-motion";

import RetailHero from "../components/retail/componentes/RetailHero";
import RetailSubmenu from "../components/retail/componentes/RetailSubmenu";

import RetailOverview from "../components/retail/views/RetailOverview";
import RetailInventory from "../components/retail/views/RetailInventory";
import RetailStores from "../components/retail/views/RetailStores";
import RetailSales from "../components/retail/views/RetailSales";

import "../styles/Retail.css";

export default function Retail(){

const [tab,setTab]=useState("overview")

return(

<motion.div
className="retail-page"
initial={{opacity:0,y:15}}
animate={{opacity:1,y:0}}
transition={{duration:.5}}
>

<RetailHero/>

<RetailSubmenu tab={tab} setTab={setTab}/>

{tab==="overview" && <RetailOverview/>}

{tab==="inventario" && <RetailInventory/>}

{tab==="tiendas" && <RetailStores/>}

{tab==="ventas" && <RetailSales/>}

</motion.div>

)

}
