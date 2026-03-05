import { motion } from "framer-motion";

const areas = [
  "Capital Humano",
  "TI",
  "Jurídica",
  "Retail",
  "Ecommerce",
  "Administrativos",
  "Documentos"
];

const Areas = () => {
  return (
    <section id="areas" style={section}>
      <h2 style={{ textAlign: "center", marginBottom: "60px" }}>
        Nuestras Áreas Estratégicas
      </h2>

      <div style={grid}>
        {areas.map((area, index) => (
          <motion.div
            key={area}
            style={card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{area}</h3>
            <p>Gestión integral y automatización avanzada.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Areas;

const section = {
  padding: "120px 80px",
  background: "#f8fafc"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px"
};

const card = {
  background: "white",
  padding: "40px",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
};