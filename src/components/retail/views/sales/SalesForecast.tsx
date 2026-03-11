import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts"

import { forecast } from "../../data/retailSalesData"

export default function SalesForecast(){

return(

<div className="sales-card">

<h3>Forecast de ventas</h3>

<ResponsiveContainer width="100%" height={260}>

<LineChart data={forecast}>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line
dataKey="sales"
stroke="#10b981"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}