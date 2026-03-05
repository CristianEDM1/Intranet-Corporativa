import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section style={hero}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Optimiza tu Gestión Corporativa</h1>
        <p>Una intranet moderna para Capital Humano, TI y más.</p>
      </motion.div>
    </section>
  );
};

export default Hero;

const hero = {
  height: "100vh",
  background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center" as const
};