import {
ResponsiveContainer,
AreaChart,
Area,
XAxis,
Tooltip
} from "recharts"

const data = [
{ month:"Ene", employees:210 },
{ month:"Feb", employees:218 },
{ month:"Mar", employees:225 },
{ month:"Abr", employees:232 },
{ month:"May", employees:240 },
{ month:"Jun", employees:248 }
]

export default function HROverview(){

return(

<div className="hr-overview">

<div className="hr-metrics">

<div className="metric">
<h3>248</h3>
<span>Colaboradores</span>
</div>

<div className="metric">
<h3>17</h3>
<span>Departamentos</span>
</div>

<div className="metric">
<h3>94%</h3>
<span>Satisfacción</span>
</div>

</div>


<div className="hr-chart">

<h3>Crecimiento de colaboradores</h3>

<ResponsiveContainer width="100%" height={260}>

<AreaChart data={data}>

<XAxis dataKey="month"/>

<Tooltip/>

<Area
type="monotone"
dataKey="employees"
strokeWidth={2}
fillOpacity={0.1}
/>

</AreaChart>

</ResponsiveContainer>

</div>

</div>

)

}