import "./Footer.css";
import { socialLinks } from "../../data/cv.jsx";
import { getHomeTexts } from "./data/homeTexts";

// Pie de pagina con enlaces sociales reutilizando la misma fuente que el CV.
const Footer = ({ language = "en" }) => {
    const t = getHomeTexts(language).footer;

    return (
        <footer className="footer">
            <div className="encabezado">
                <h3 className="titulo">{t.title}</h3>
                <p className="subtitulo">{t.subtitle}</p>
            </div>

            <div className="links">
                {/* Se renderiza desde datos compartidos para evitar duplicar iconos y URLs. */}
                {socialLinks.map((link) => {
                    const className = link.label.toLowerCase();

                    return (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`link ${className}`}
                            aria-label={link.label}
                        >
                            {link.label}
                            <div className="icono">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d={link.iconPath} />
                                </svg>
                            </div>
                        </a>
                    );
                })}
            </div>

            <p className="copyright">{t.copyright}</p>
        </footer>
    );
};

export default Footer;
