import { FaSearch } from "react-icons/fa"

export default function DocumentsFilters({search,setSearch,setAreaFilter}:any){

return(

<div className="docs-filters">

<div className="docs-search">

<FaSearch/>

<input
value={search}
onChange={(e)=>setSearch(e.target.value)}
placeholder="Buscar documentos o contenido..."
/>

</div>


<select onChange={(e)=>setAreaFilter(e.target.value)}>

<option value="all">Todas las áreas</option>
<option value="RRHH">RRHH</option>
<option value="Legal">Legal</option>
<option value="TI">TI</option>

</select>

</div>

)

}