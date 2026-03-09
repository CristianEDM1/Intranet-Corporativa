import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Estudio de Moda</div>

        <div className="nav-links">
          <a href="#areas">Áreas</a>
          <a href="#noticias">Noticias</a>
          <Link to="/login" className="btn-login">
            Explorar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;