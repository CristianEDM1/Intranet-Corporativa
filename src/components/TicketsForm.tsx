import { motion } from "framer-motion";
import { useState } from "react";

/* TIPOS DEL TICKET */

type Ticket = {
  title: string;
  user: string;
  priority: string;
  description: string;
  status: string;
};

/* TIPOS DE LAS PROPS */

type TicketFormProps = {
  onClose: () => void;
  onCreate: (ticket: Ticket) => void;
};

export default function TicketForm({ onClose, onCreate }: TicketFormProps) {

const [form,setForm]=useState({
title:"",
user:"",
priority:"Media",
description:""
})

const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
setForm({
...form,
[e.target.name]:e.target.value
})
}

const handleSubmit=(e: React.FormEvent)=>{
e.preventDefault()

const newTicket={
...form,
status:"open"
}

onCreate(newTicket)
onClose()
}

return(

<motion.div
className="ticket-modal"
initial={{opacity:0}}
animate={{opacity:1}}
>

<motion.div
className="ticket-form"
initial={{y:40,opacity:0}}
animate={{y:0,opacity:1}}
>

<h2>Crear Ticket de Soporte</h2>

<form onSubmit={handleSubmit}>

<div className="form-group">
<label>Título</label>
<input
name="title"
value={form.title}
onChange={handleChange}
required
/>
</div>

<div className="form-group">
<label>Usuario / Área</label>
<input
name="user"
value={form.user}
onChange={handleChange}
required
/>
</div>

<div className="form-group">
<label>Prioridad</label>

<select
name="priority"
value={form.priority}
onChange={handleChange}
>

<option>Alta</option>
<option>Media</option>
<option>Baja</option>

</select>

</div>

<div className="form-group">
<label>Descripción</label>

<textarea
name="description"
value={form.description}
onChange={handleChange}
/>

</div>

<div className="form-actions">

<button type="submit" className="btn-primary">
Crear Ticket
</button>

<button
type="button"
className="btn-secondary"
onClick={onClose}
>
Cancelar
</button>

</div>

</form>

</motion.div>

</motion.div>

)

}