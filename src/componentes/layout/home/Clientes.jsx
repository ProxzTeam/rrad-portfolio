import "./Clientes.css"

// Seccion de prueba social: logos de clientes o marcas.
const Clientes = ({ language = "en" }) => {

    return (
        <>
            <section className="clientes">
                <div className="encabezado">
                    <h3 className="titulo">{language === "es" ? "Mis Clientes" : "My Clients"}</h3>
                    <p className="subtitulo">{language === "es" ? "Estas marcas han confiado en mis servicios como freelance" : "These brands have trusted my freelance services"}</p>
                </div>

                {/* Logos renderizados de forma estatica */}
                <div className="logos">
                    <img src="./assets/logos/Recharge.svg" alt="Logo de Recharge" className="logo" />
                    <img src="./assets/logos/Volume.svg" alt="Logo de Volumne" className="logo" />
                    <img src="./assets/logos/Umbrella.svg" alt="Logo de Umbrella" className="logo" />
                    <img src="./assets/logos/Waveless.svg" alt="Logo de Waveless" className="logo" />
                    <img src="./assets/logos/Vision.svg" alt="Logo de Vision" className="logo" />


                </div>

            </section>
        </>);

}

export default Clientes;
