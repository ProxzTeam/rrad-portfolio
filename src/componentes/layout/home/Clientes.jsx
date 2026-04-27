import "./Clientes.css"
import { getHomeTexts } from "./data/homeTexts";

// Seccion de prueba social: logos de clientes o marcas.
const Clientes = ({ language = "en" }) => {
    const t = getHomeTexts(language).clientes;
    const logos = [
        { src: "/assets/logos/Recharge.svg", alt: "Logo de Recharge" },
        { src: "/assets/logos/Volume.svg", alt: "Logo de Volume" },
        { src: "/assets/logos/Umbrella.svg", alt: "Logo de Umbrella" },
        { src: "/assets/logos/Waveless.svg", alt: "Logo de Waveless" },
        { src: "/assets/logos/Vision.svg", alt: "Logo de Vision" },
    ];

    return (
        <section className="clientes">
            <div className="encabezado">
                <h3 className="titulo">{t.title}</h3>
                <p className="subtitulo">{t.subtitle}</p>
            </div>

            {/* Los logos salen de una sola lista para evitar repetir markup. */}
            <div className="logos">
                {logos.map((logo) => (
                    <img key={logo.src} src={logo.src} alt={logo.alt} className="logo" loading="lazy" />
                ))}
            </div>
        </section>
    );

}

export default Clientes;
