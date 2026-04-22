import "./Header.css";
import DarkModeSwitch from "../../DarkModeSwitch";
import { Link } from "react-router-dom";

// Encabezado principal con marca, navegacion y selector de tema.
const Header = ({ language = "en", onLanguageChange }) => {
  const t = {
    subtitle: language === "es" ? "Ingeniero en Sistemas Computacionales" : "Computer Systems Engineer",
    works: language === "es" ? "Trabajos" : "Projects",
    about: language === "es" ? "Acerca de" : "About",
    contact: language === "es" ? "Contacto" : "Contact",
    cv: language === "es" ? "Mi CV" : "My CV",
  };

  return (
    <>
      <header className="header">
        {/* Identidad visual (logo + nombre profesional) */}
        <div className="logo">
          <img className="logo-rrad" src="./logo.png"
            alt="Logo de la marca" />
          <div className="logo-texto">
            <h2 className="titulo">Danilo Rivera</h2>
            <p className="subtitulo">{t.subtitle}</p>
          </div>
        </div>
        {/* Navegacion interna por anclas a secciones */}
        <nav className="navbar">
          <a href="#trabajos">{t.works}</a>
          <a href="#acerca-de">{t.about}</a>
          <a href="#contacto">{t.contact}</a>
          <Link to="/cv">{t.cv}</Link>

        </nav>
        <div className="header-controls">
          <div className="language-selector">
            <button
              className={`language-btn ${language === "en" ? "active" : ""}`}
              onClick={() => onLanguageChange?.("en")}
              title="English"
            >
              EN
            </button>
            <button
              className={`language-btn ${language === "es" ? "active" : ""}`}
              onClick={() => onLanguageChange?.("es")}
              title="Español"
            >
              ES
            </button>
          </div>
          <DarkModeSwitch></DarkModeSwitch>
        </div>
      </header>
    </>
  );
};

export default Header;
