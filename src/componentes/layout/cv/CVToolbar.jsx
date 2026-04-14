import { Link } from "react-router-dom";
import DarkModeSwitch from "../../DarkModeSwitch";

// Barra superior del CV: mantiene acciones separadas del contenido exportable.
const CVToolbar = ({ isDarkMode, isGenerating, onToggleDarkMode, onDownloadPDF }) => {
    return (
        <div className="toolbar">
            <a
                className="toolbar-brand"
                href="https://rrad.dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="brand-dot">RR</div>
                <span className="brand-text">
                    rrad.dev <span>↗</span>
                </span>
            </a>

            <div className="toolbar-actions">
                <DarkModeSwitch
                    className="cv-dark-mode"
                    name="cv-dark-mode"
                    id="cv-dark-mode"
                    checked={isDarkMode}
                    onChange={onToggleDarkMode}
                    useBodyClass={false}
                />

                <Link className="btn btn-outline" to="/">
                    Volver
                </Link>

                <button
                    className={`btn btn-primary ${isGenerating ? "btn-loading" : ""}`}
                    id="downloadBtn"
                    onClick={onDownloadPDF}
                    type="button"
                    disabled={isGenerating}
                >
                    {isGenerating ? "Generando..." : "Download PDF"}
                </button>
            </div>
        </div>
    );
};

export default CVToolbar;