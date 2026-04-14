import './Modal.css';

// Muestra el detalle de un trabajo seleccionado y permite cerrar el modal.
const Modal = ({ closeModal, trabajo }) => {
    return (
        <>
            {/* Overlay de fondo: al hacer click fuera del contenido, se cierra */}
            <div className="overlay" id="overlay" onClick={closeModal}>
                <div className="modal">
                    {/* Boton de cierre explicito */}
                    <button className="boton-cerrar" id="btn-cerrar" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </button>
                    {/* Grid con miniatura y descripcion del proyecto */}
                    <div className="grid">
                        <div className="thumb">
                            <img src={trabajo.thumb.url} alt={trabajo.thumb.alt} />
                        </div>
                        <div className="info">
                            <div className="head">
                                <h3 className="titulo">{trabajo.info.nombre}</h3>
                                <span className="categoria">{trabajo.info.categoria}</span>
                            </div>
                            <div className="body">
                                <p>{trabajo.info.contenido}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;