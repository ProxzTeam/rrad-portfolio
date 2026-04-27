import "./Hero.css";
import { getHomeTexts } from "./data/homeTexts";
import { SendIcon, WhatsAppIcon } from "./icons/SVGIcons";

// Seccion principal de presentacion (mensaje + llamadas a la accion).
const Hero = ({ language = "en" }) => {
    const t = getHomeTexts(language).hero;

    return (
        <section className="hero">
            {/* Contenido textual sobre el video de fondo */}
            <div className="contenido">
                <h3 className="titulo">
                    <span>{t.greeting}</span>{t.intro}
                </h3>

                <p className="subtitulo">
                    {t.role} <br />
                    {t.description}
                </p>

                <div className="botones">
                    <a href="#trabajos" className="boton transparente">
                        {t.viewWorks}
                        <div className="icono">
                            <SendIcon width={16} height={16} />
                        </div>
                    </a>

                    <a href="#contacto" className="boton">
                        {t.whatsapp}
                        <div className="icono">
                            <WhatsAppIcon width={16} height={16} />
                        </div>
                    </a>
                </div>
            </div>

            {/* Video decorativo de fondo para reforzar el impacto visual */}
            <div className="video-container">
                <video src="/assets/video_fondo.mp4" loop autoPlay muted className="video" type="video/mp4"></video>
            </div>
        </section>
    );
}

export default Hero;