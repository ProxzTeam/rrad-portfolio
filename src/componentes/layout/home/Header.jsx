import "./Header.css";
import DarkModeSwitch from "../../DarkModeSwitch";
import { Link } from "react-router-dom";
import { getHomeTexts } from "./data/homeTexts";

// Encabezado principal con marca, navegacion y selector de tema.
const Header = ({ language = "en", onLanguageChange }) => {
  const t = getHomeTexts(language).header;

  return (
      <header className="header">
        {/* Identidad visual (logo + nombre profesional) */}
        <div className="logo">
          <img className="logo-rrad" src="/logo.png"
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
          <DarkModeSwitch />
        </div>
      </header>
  );
};

export default Header;
