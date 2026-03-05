import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section style={cta}>
      <h2>Transforma tu Gestión Empresarial Hoy</h2>
      <p>Accede a una intranet moderna y centralizada.</p>

      <Link to="/login">
        <button style={btn}>Ingresar a la Plataforma</button>
      </Link>
    </section>
  );
};

export default CTA;

const cta = {
  padding: "120px 20px",
  textAlign: "center" as const,
  background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
  color: "white"
};

const btn = {
  marginTop: "30px",
  padding: "14px 26px",
  borderRadius: "10px",
  border: "none",
  background: "white",
  color: "#2563eb",
  fontWeight: 600
};