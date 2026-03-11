type Props={
search:string
setSearch:(v:string)=>void
city:string
setCity:(v:string)=>void
}

export default function SalesFilters({
search,setSearch,city,setCity
}:Props){

return(

<div className="sales-filters">

<input
placeholder="Buscar producto o tienda..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<select
value={city}
onChange={(e)=>setCity(e.target.value)}
>

<option value="all">Todas las ciudades</option>
<option value="Bogotá">Bogotá</option>
<option value="Medellín">Medellín</option>
<option value="Cali">Cali</option>

</select>

</div>

)

}