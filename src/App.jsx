import Header from "./componentes/layout/Header";
import Hero from "./componentes/layout/Hero";
import Clientes from "./componentes/layout/Clientes";
import Trabajos from "./componentes/layout/Trabajos";
import AcercaDe from "./componentes/layout/AcercaDe";
import Contacto from "./componentes/layout/Contacto";
import Footer from "./componentes/layout/Footer";

function App() {
  return (
    <>
      {/* Contenedor principal que limita el ancho total del sitio */}
      <div className="contenedor">
        {/* Secciones renderizadas en orden vertical para formar la landing */}
        <Header></Header>
        <Hero></Hero>
        <Clientes></Clientes>
        <Trabajos></Trabajos>
        <AcercaDe></AcercaDe>
        <Contacto></Contacto>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;
