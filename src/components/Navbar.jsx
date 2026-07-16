import { Link, useLocation } from 'react-router-dom';
import { footballData } from '../data/footballData';

function Navbar({ lang, toggleLanguage }) {
    const location = useLocation();
    const t = footballData.translations[lang];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container-fluid">
                {/* Unified Brand Name: "GoalMetrics" (Always Untranslated) */}
                <Link to="/" className="navbar-brand d-flex align-items-center fw-bold text-uppercase tracking-wider">
                    <i className="bi bi-trophy-fill me-2 text-warning"></i>
                    Goal<span className="text-warning ms-1">Metrics</span>
                </Link>
                <div className="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
                    <Link
                        to="/"
                        className={`nav-link px-3 ${location.pathname === '/' ? 'active border-bottom border-warning' : ''}`}
                    >
                        <i className="bi bi-globe me-1"></i> {t.globalOverview}
                    </Link>
                    <Link
                        to="/team-analysis"
                        className={`nav-link px-3 ${location.pathname === '/team-analysis' ? 'active border-bottom border-warning' : ''}`}
                    >
                        <i className="bi bi-shield-shaded me-1"></i> {t.teamAnalysis}
                    </Link>
                </div>
                <div className="d-flex align-items-center">
                    <button
                        onClick={toggleLanguage}
                        className="btn btn-outline-warning btn-sm fw-bold d-flex align-items-center gap-2 px-3"
                        aria-label="Toggle Language"
                    >
                        <i className="bi bi-translate"></i>
                        <span>{lang === 'en' ? 'Français (FR)' : 'English (EN)'}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;