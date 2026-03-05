import { motion } from "framer-motion";

const News = () => {
  return (
    <section id="noticias" style={section}>
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
        Noticias & Comunicados
      </h2>

      <div style={grid}>
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            style={card}
            whileHover={{ scale: 1.03 }}
          >
            <h3>Nuevo sistema implementado</h3>
            <p>La intranet ahora integra nuevas mejoras corporativas.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default News;

const section = {
  padding: "120px 80px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px"
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
};