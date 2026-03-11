import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts"

import { ranking } from "../../data/retailSalesData"

export default function StorePerformance(){

return(

<div className="sales-card">

<h3>Performance de tiendas</h3>

<ResponsiveContainer width="100%" height={260}>

<BarChart data={ranking}>

<XAxis dataKey="store"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="revenue" fill="#6366f1"/>

</BarChart>

</ResponsiveContainer>

</div>

)

}