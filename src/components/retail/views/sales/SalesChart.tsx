import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";

const data=[
{day:"Lun",sales:3400},
{day:"Mar",sales:4200},
{day:"Mié",sales:3900},
{day:"Jue",sales:5200},
{day:"Vie",sales:6100},
{day:"Sáb",sales:7000},
{day:"Dom",sales:4300}
]

export default function SalesChart(){

return(

<div className="sales-chart">

<h3>Ventas semanales</h3>

<ResponsiveContainer width="100%" height={260}>

<LineChart data={data}>

<XAxis dataKey="day"/>
<YAxis/>
<Tooltip/>

<Line
type="monotone"
dataKey="sales"
stroke="#6366f1"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}