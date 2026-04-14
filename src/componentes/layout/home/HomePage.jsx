// Composicion de la pagina principal.
// Este archivo solo agrupa secciones para que la landing quede mas ordenada y facil de leer.
import Header from "./Header";
import Hero from "./Hero";
import Clientes from "./Clientes";
import Trabajos from "./Trabajos";
import AcercaDe from "./AcercaDe";
import Contacto from "./Contacto";
import Footer from "./Footer";

const HomePage = () => {
    return (
        <div className="contenedor">
            <Header />
            <Hero />
            <Clientes />
            <Trabajos />
            <AcercaDe />
            <Contacto />
            <Footer />
        </div>
    );
};

export default HomePage;
