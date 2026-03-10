type Props = {
active:string
setActive:(tab:string)=>void
}

const tabs = [
{ id:"overview", label:"Overview" },
{ id:"directory", label:"Directorio" },
{ id:"benefits", label:"Beneficios" },
{ id:"training", label:"Capacitación" },
{ id:"news", label:"Comunicados" }
]

export default function HRTabs({active,setActive}:Props){

return(

<div className="hr-tabs">

{tabs.map(tab => (

<button
key={tab.id}
className={active === tab.id ? "tab active":"tab"}
onClick={()=>setActive(tab.id)}
>

{tab.label}

</button>

))}

</div>

)

}