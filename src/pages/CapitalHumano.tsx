import { motion } from "framer-motion"
import { useState } from "react"

import HRHero from "../components/ch/componentes/HRHero"
import HRTabs from "../components/ch/componentes/HRTabs"

import HROverview from "../components/ch/views/HROverview"
import HRDirectory from "../components/ch/views/HRDirectory"
import HRBenefits from "../components/ch/views/HRBenefits"
import HRTraining from "../components/ch/views/HRTraining"
import HRNews from "../components/ch/views/HRNews"

import "../styles/CapitalHumano.css"

export default function CapitalHumano(){

const [activeTab,setActiveTab] = useState("overview")

const renderView = () => {

switch(activeTab){

case "directory":
return <HRDirectory/>

case "benefits":
return <HRBenefits/>

case "training":
return <HRTraining/>

case "news":
return <HRNews/>

default:
return <HROverview/>

}

}

return(

<motion.div
className="hr-container"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.4}}
>

<HRHero/>

<HRTabs
active={activeTab}
setActive={setActiveTab}
/>

<div className="hr-view">

{renderView()}

</div>

</motion.div>

)

}