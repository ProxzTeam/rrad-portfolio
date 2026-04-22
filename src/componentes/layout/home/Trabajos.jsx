import './Trabajos.css'
import { useState } from 'react';
import trabajos from './data/trabajos';
import Modal from './Modal';

// Seccion de portafolio con filtro por categoria y modal de detalle.
const Trabajos = ({ language = 'en' }) => {
    const labels = {
        all: language === 'es' ? 'Todos' : 'All',
        webDesign: language === 'es' ? 'Diseño Web' : 'Web Design',
        webDev: language === 'es' ? 'Desarrollo Web' : 'Web Development',
        mobile: language === 'es' ? 'Aplicaciones Moviles' : 'Mobile Apps',
        software: language === 'es' ? 'Desarrollo de Software' : 'Software Development',
        title: language === 'es' ? 'Mis Trabajos' : 'My Projects',
        subtitle: language === 'es'
            ? 'Estos son algunos de los proyectos en los que he trabajado'
            : 'These are some of the projects I have worked on',
    };

    // Configuracion de los filtros. Si agregas otra categoria, solo extiende esta lista.
    const filtros = [
        { id: 'todos', label: labels.all },
        { id: 'diseño-web', label: labels.webDesign },
        { id: 'desarrollo-web', label: labels.webDev },
        { id: 'aplicaciones-moviles', label: labels.mobile },
        { id: 'desarrollo-software', label: labels.software },
    ];

    // Categoria activa del filtro.
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
    // Controla si el modal esta abierto.
    const [estadosModal, setEstadoModal] = useState(false);
    // Guarda el proyecto que se muestra en el modal.
    const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(trabajos[0])

    // La lista visible se calcula a partir de la categoria; asi evitamos duplicar estado.
    const trabajosFiltrados = categoriaSeleccionada === 'todos'
        ? trabajos
        : trabajos.filter((trabajo) => trabajo.categoria === categoriaSeleccionada);

    // Cambia la categoria y recalcula los trabajos a mostrar.
    const handleChange = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };

    // Abre el modal y busca el trabajo correspondiente al id seleccionado.
    const openModal = (e, id) => {
        e.preventDefault();
        setEstadoModal(true);

        // find ya devuelve el primer elemento coincidente, sin necesidad de if/return.
        const trabajo = trabajos.find((trabajo) => trabajo.id === id);

        setTrabajoSeleccionado(trabajo);
    };

    // Cierra el modal de detalle.
    const closeModal = () => {
        setEstadoModal(false);
    };

    // Tarjeta reutilizable para cada proyecto del grid.
    const TrabajoCard = ({ trabajo }) => {
        return (
            <div className="trabajo" key={trabajo.id}>
                <a href="#" className="thumb" onClick={(e) => openModal(e, trabajo.id)}>
                    <img loading="lazy" src={trabajo.thumb.url} alt={trabajo.thumb.alt} />
                </a>

                <div className="info">
                    <div className="textos">
                        <a href="#" className="nombre" onClick={(e) => openModal(e, trabajo.id)}>
                            {trabajo.info.nombre}
                        </a>
                        <p className="categoria">{trabajo.info.categoria}</p>
                    </div>
                    <a href="#" className="btn-ir" onClick={(e) => openModal(e, trabajo.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                        </svg>
                    </a>
                </div>
            </div>
        );
    };

    return (<>

        <section className="trabajos" id="trabajos">
            <div className="encabezado">
                <h3 className="titulo">{labels.title}</h3>
                <p className="subtitulo">{labels.subtitle}</p>
            </div>

            <div className="filtros">
                {/* Los radios salen de una sola lista para que agregar filtros sea mas rapido. */}
                {filtros.map((filtro) => (
                    <label htmlFor={filtro.id} key={filtro.id}>
                        <input
                            type="radio"
                            name="categoria"
                            id={filtro.id}
                            onChange={() => handleChange(filtro.id)}
                            checked={categoriaSeleccionada === filtro.id}
                        />
                        <span className="opcion">{filtro.label}</span>
                    </label>
                ))}
            </div>

            {/* Grid de tarjetas segun el filtro activo. */}
            <div className="grid">
                {trabajosFiltrados.map((trabajo) => (
                    <TrabajoCard key={trabajo.id} trabajo={trabajo} />
                ))}
            </div>
        </section>

        {/* Render condicional del modal cuando hay un trabajo abierto. */}
        {estadosModal && <Modal closeModal={closeModal} trabajo={trabajoSeleccionado} />}

    </>
    );
};

export default Trabajos;
