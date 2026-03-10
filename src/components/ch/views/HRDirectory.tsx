import { useState, useMemo } from "react"
import { motion } from "framer-motion"

type Employee = {
id:number
name:string
department:string
role:string
status:"online" | "offline"
avatar:string
}

const employees:Employee[] = [

{
id:1,
name:"Laura Gómez",
department:"Marketing",
role:"Marketing Manager",
status:"online",
avatar:"https://i.pravatar.cc/150?img=32"
},

{
id:2,
name:"Andrés Ruiz",
department:"Tecnología",
role:"Frontend Developer",
status:"online",
avatar:"https://i.pravatar.cc/150?img=12"
},

{
id:3,
name:"María Torres",
department:"Legal",
role:"Corporate Lawyer",
status:"offline",
avatar:"https://i.pravatar.cc/150?img=45"
},

{
id:4,
name:"Juan Pérez",
department:"Retail",
role:"Store Operations",
status:"online",
avatar:"https://i.pravatar.cc/150?img=22"
},

{
id:5,
name:"Ana Morales",
department:"Ecommerce",
role:"Growth Manager",
status:"offline",
avatar:"https://i.pravatar.cc/150?img=5"
},

{
id:6,
name:"Carlos Méndez",
department:"Tecnología",
role:"Backend Developer",
status:"online",
avatar:"https://i.pravatar.cc/150?img=11"
}

]

const departments = [
"Todos",
"Marketing",
"Tecnología",
"Legal",
"Retail",
"Ecommerce"
]

export default function HRDirectory(){

const [search,setSearch] = useState("")
const [department,setDepartment] = useState("Todos")

const filteredEmployees = useMemo(()=>{

return employees.filter(emp=>{

const matchesSearch =
emp.name.toLowerCase().includes(search.toLowerCase()) ||
emp.role.toLowerCase().includes(search.toLowerCase())

const matchesDept =
department === "Todos" || emp.department === department

return matchesSearch && matchesDept

})

},[search,department])

return(

<div className="hr-directory">

{/* HEADER */}

<div className="directory-controls">

<input
type="text"
placeholder="Buscar empleado o cargo..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<select
value={department}
onChange={(e)=>setDepartment(e.target.value)}
>

{departments.map(dep=>(
<option key={dep}>{dep}</option>
))}

</select>

</div>


{/* GRID */}

<div className="directory-grid">

{filteredEmployees.map(emp=>(

<motion.div
key={emp.id}
className="employee-card"
whileHover={{y:-6}}
transition={{duration:.2}}
>

<div className="employee-avatar">

<img src={emp.avatar} alt={emp.name}/>

<span
className={`status-dot ${emp.status}`}
></span>

</div>

<div className="employee-info">

<h4>{emp.name}</h4>

<span className="employee-role">
{emp.role}
</span>

<span className="department-badge">
{emp.department}
</span>

</div>

</motion.div>

))}

</div>

</div>

)

}