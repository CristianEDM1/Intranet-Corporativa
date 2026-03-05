import Navbar from "../components/landing/Navbar";
import { motion } from "framer-motion";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <Navbar />

      <main className="landing">

        {/* HERO */}
        <section className="hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Optimiza tu Gestión Corporativa</h1>
            <p>
              Una intranet moderna para Capital Humano, TI, Retail,
              Jurídica y más.
            </p>
            <button className="hero-btn">Explorar Áreas</button>
          </motion.div>
        </section>

        {/* ÁREAS */}
        <section id="areas" className="areas">
          <div className="section-header">
            <h2>Nuestras Áreas</h2>
            <p>Accede rápidamente a los departamentos clave</p>
          </div>

          <div className="areas-grid">
            {[
              "Capital Humano",
              "TI",
              "Retail",
              "Jurídica",
              "Administrativos",
              "Ecommerce",
              "Documentos",
            ].map((area, index) => (
              <motion.div
                key={index}
                className="area-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>{area}</h3>
                <p>
                  Gestión centralizada y herramientas especializadas
                  para el área de {area}.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NOTICIAS */}
        <section id="noticias" className="news">
          <div className="section-header">
            <h2>Noticias y Comunicados</h2>
            <p>Mantente informado sobre actualizaciones internas</p>
          </div>

          <div className="news-grid">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="news-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4>Comunicado Corporativo #{item}</h4>
                <p>
                  Información relevante sobre cambios internos,
                  actualizaciones estratégicas y novedades.
                </p>
                <span>Leer más →</span>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
};

export default Landing;