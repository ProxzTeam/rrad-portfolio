import './Modal.css';
import { useEffect } from 'react';
import { CloseIcon } from './icons/SVGIcons';

// Muestra el detalle de un trabajo seleccionado y permite cerrar el modal.
const Modal = ({ closeModal, trabajo }) => {
    // Cerrar modal con tecla ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [closeModal]);

    return (
        <div className="overlay" id="overlay" onClick={closeModal} role="presentation">
            <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                {/* Boton de cierre explicito */}
                <button 
                    className="boton-cerrar" 
                    id="btn-cerrar" 
                    onClick={closeModal}
                    aria-label="Cerrar modal"
                >
                    <CloseIcon width={16} height={16} />
                </button>
                {/* Grid con miniatura y descripcion del proyecto */}
                <div className="grid">
                    <div className="thumb">
                        <img src={trabajo.thumb.url} alt={trabajo.thumb.alt} />
                    </div>
                    <div className="info">
                        <div className="head">
                            <h3 className="titulo" id="modal-title">{trabajo.info.nombre}</h3>
                            <span className="categoria">{trabajo.info.categoria}</span>
                        </div>
                        <div className="body">
                            <p>{trabajo.info.contenido}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
