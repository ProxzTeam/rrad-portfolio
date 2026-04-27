import './AcercaDe.css';
import { getHomeTexts } from './data/homeTexts';
import { WhatsAppIcon } from './icons/SVGIcons';

// Seccion de perfil profesional y propuesta de valor.
const AcercaDe = ({ language = 'en' }) => {
    const t = getHomeTexts(language).acercaDe;

    return (
        <section className="acerca-de" id="acerca-de">
            <div className="grid">
                <div className="col-1">
                    {/* Composicion de fotos personales */}
                    <div className="fotos">
                        {t.photos.map((foto) => (
                            <img key={foto.src} src={foto.src} className="foto" alt={foto.alt} loading="lazy" />
                        ))}
                    </div>
                </div>
                <div className="col-2">
                    {/* Texto descriptivo + CTA para contacto */}
                    <h4 className="pre-titulo">{t.pretitle}</h4>
                    <h3 className="titulo">{t.title}</h3>
                    <p className="resumen">{t.summary}
                        <br />
                        {t.summary2}
                        <br />
                    </p>
                    <a href="#contacto" className="boton">
                        {t.cta}
                        <span className="icono">
                            <WhatsAppIcon width={16} height={16} />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AcercaDe;
