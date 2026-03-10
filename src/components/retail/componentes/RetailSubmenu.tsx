type Props={
tab:string
setTab:(v:string)=>void
}

export default function RetailSubmenu({tab,setTab}:Props){

return(

<nav className="retail-submenu">

<button
className={tab==="overview"?"active":""}
onClick={()=>setTab("overview")}
>
Overview
</button>

<button
className={tab==="inventario"?"active":""}
onClick={()=>setTab("inventario")}
>
Inventario
</button>

<button
className={tab==="tiendas"?"active":""}
onClick={()=>setTab("tiendas")}
>
Tiendas
</button>

<button
className={tab==="ventas"?"active":""}
onClick={()=>setTab("ventas")}
>
Ventas
</button>

</nav>

)

}