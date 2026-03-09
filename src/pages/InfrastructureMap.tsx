import { motion } from "framer-motion";
import {
FaCloud,
FaShieldAlt,
FaServer,
FaDatabase
} from "react-icons/fa";

import "./InfrastructureMap.css";

const nodeAnim = {
initial:{opacity:0,scale:.9},
animate:{opacity:1,scale:1},
transition:{duration:.4}
};

export default function InfrastructureMap(){

return(

<div className="infra-map">

{/* INTERNET */}

<motion.div
className="infra-node cloud"
{...nodeAnim}
>
<FaCloud size={24}/>
<span>Internet</span>
</motion.div>


<div className="line vertical"></div>


{/* FIREWALL */}

<motion.div
className="infra-node firewall"
{...nodeAnim}
>
<FaShieldAlt size={22}/>
<span>Firewall</span>
</motion.div>


<div className="line vertical"></div>


{/* LOAD BALANCER */}

<motion.div
className="infra-node load"
{...nodeAnim}
>
<FaServer size={22}/>
<span>Load Balancer</span>
</motion.div>


<div className="line split"></div>


<div className="infra-row">

<motion.div
className="infra-node server"
whileHover={{scale:1.05}}
>
<FaServer/>
<span>App Server 1</span>
</motion.div>

<motion.div
className="infra-node server"
whileHover={{scale:1.05}}
>
<FaServer/>
<span>App Server 2</span>
</motion.div>

</div>


<div className="line vertical"></div>


<motion.div
className="infra-node database"
whileHover={{scale:1.05}}
>
<FaDatabase/>
<span>Database</span>
</motion.div>

</div>

)

}