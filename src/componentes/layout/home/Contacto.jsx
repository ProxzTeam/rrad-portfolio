import './Contacto.css'
import { getHomeTexts } from './data/homeTexts';
import { WhatsAppIcon, RightArrowIcon } from './icons/SVGIcons';

// Seccion de contacto simplificada con CTA directo a WhatsApp.
const Contacto = ({ language = 'en' }) => {
    const t = getHomeTexts(language).contacto;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${t.number}&text=${encodeURIComponent(t.message)}`;

    return (
        <section className="contacto" id="contacto">
            <div className="contacto-contenido">
                <div className="encabezado contacto-encabezado">
                    <h3 className="titulo">{t.title}</h3>
                    <p className="subtitulo">{t.subtitle}</p>
                </div>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="boton contacto-whatsapp">
                    <div className="icono" aria-hidden="true">
                        <WhatsAppIcon width={28} height={28} />
                    </div>
                    <span>{t.cta}</span>
                    <div className="icono" aria-hidden="true">
                        <RightArrowIcon width={26} height={26} />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Contacto;
