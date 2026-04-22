import "./Hero.css";

// Seccion principal de presentacion (mensaje + llamadas a la accion).
const Hero = ({ language = "en" }) => {
    const t = {
        greeting: language === "es" ? "Hola!" : "Hello!",
        role: language === "es"
            ? "Ingeniero en Sistemas Computacionales y desarrollador."
            : "Computer Systems Engineer and developer.",
        description: language === "es"
            ? "En este sitio encontrarás mis proyectos personales enfocados en desarrollo de software, diseño de interfaces y soluciones tecnológicas orientadas a la funcionalidad y la experiencia del usuario."
            : "On this site you will find my personal projects focused on software development, interface design, and technology solutions oriented to functionality and user experience.",
        viewWorks: language === "es" ? "Ver Trabajos" : "View Projects",
        whatsapp: language === "es" ? "Mandame un WhatsApp." : "Send me a WhatsApp message.",
    };

    return (<>
        <section className="hero">
            {/* Contenido textual sobre el video de fondo */}
            <div className="contenido">
                <h3 className="titulo">
                    <span>{t.greeting}</span>{language === "es" ? "Soy Danilo Rivera" : "I am Danilo Rivera"}
                </h3>

                <p className="subtitulo">
                    {t.role} <br />
                    {t.description}
                </p>

                <div className="botones">

                    <a href="#trabajos" className="boton transparente">
                        {t.viewWorks}
                        <div className="icono">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z" />
                                <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925" />
                            </svg>
                        </div>
                    </a>

                    <a href="#contacto" className="boton">
                        {t.whatsapp}
                        <div className="icono">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>

            {/* Video decorativo de fondo para reforzar el impacto visual */}
            <div className="video-container">
                <video src="/assets/video_fondo.mp4" loop autoPlay muted className="video" type="video/mp4"></video>

            </div>
        </section>
    </>)
}

export default Hero;
