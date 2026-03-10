import { motion } from "framer-motion";

export default function HRHero() {

  return (

    <section className="hr-hero hero-full">

      <div className="hero-left">

        <span className="hr-label">
          Área corporativa
        </span>

        <h1>Capital Humano</h1>

        <p>
          Portal interno para la gestión del talento,
          beneficios corporativos y desarrollo profesional
          de nuestros colaboradores.
        </p>

        <div className="hero-actions">

          <button className="btn-primary">
            Crear solicitud
          </button>

          <button className="btn-secondary">
            Ver políticas
          </button>

        </div>

      </div>

      <div className="hero-right">

        <motion.div whileHover={{ y: -4 }} className="hero-stat">
          <h3>248</h3>
          <span>Colaboradores</span>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} className="hero-stat">
          <h3>17</h3>
          <span>Departamentos</span>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} className="hero-stat">
          <h3>94%</h3>
          <span>Satisfacción</span>
        </motion.div>

      </div>

    </section>

  );

}