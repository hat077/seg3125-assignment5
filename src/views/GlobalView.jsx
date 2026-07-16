import { useState } from 'react';
import { footballData } from '../data/footballData';
import BarChartScorers from '../components/BarChartScorers';
import ScatterPlotAnalytics from '../components/ScatterPlotAnalytics';

function GlobalView({ lang }) {
    const t = footballData.translations[lang];
    const leagues = footballData.leagues;

    const [selectedLeague, setSelectedLeague] = useState('premierleague');
    const currentLeagueData = leagues[selectedLeague]?.players || [];

    // Position translation helper function
    const translatePosition = (pos) => {
        if (lang === 'en') return pos;
        
        const positionMap = {
            'ST': 'BU',   // Striker -> Buteur
            'RW': 'AD',   // Right Winger -> Ailier Droit
            'LW': 'AG',   // Left Winger -> Ailier Gauche
            'AM': 'MO',   // Attacking Midfielder -> Milieu Offensif
            'CM': 'MC',   // Central Midfielder -> Milieu Central
            'DM': 'MDC'  // Defensive Midfielder -> Milieu Défensif
        };

        return positionMap[pos.toUpperCase()] || pos;
    };

    return (
        <div className="container-fluid px-4 px-md-5">
            {/* Header layout block */}
            <div className="mb-4 p-4 bg-white rounded shadow-sm border-start border-4 border-info">
                <h1 className="fw-bold text-dark h3">{t.title}</h1>
                <p className="text-muted mb-0">{t.subtitle}</p>
            </div>

            {/* League Selection Filter Bar */}
            <div className="mb-4 p-3 bg-white rounded shadow-sm">
                <label className="form-label fw-bold text-secondary small text-uppercase">
                    <i className="bi bi-trophy me-1"></i> {t.selectLeague}
                </label>
                <select 
                    className="form-select border-2" 
                    value={selectedLeague} 
                    onChange={(e) => setSelectedLeague(e.target.value)}
                >
                    {Object.entries(leagues).map(([key, value]) => (
                        <option key={key} value={key}>
                            {lang === 'en' ? value.name_en : value.name_fr}
                        </option>
                    ))}
                </select>
            </div>

            {/* Full-Width Stacked Charts Row */}
            <div className="row g-4 mb-4">
                <div className="col-12">
                    <BarChartScorers lang={lang} data={currentLeagueData} />
                </div>
                <div className="col-12">
                    <ScatterPlotAnalytics lang={lang} data={currentLeagueData} />
                </div>
            </div>

            {/* Table Matrix Grid Data */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped mb-0 align-middle">
                            <thead className="table-dark text-uppercase small">
                                <tr>
                                    <th className="px-4 py-3">#</th>
                                    <th className="py-3">{t.player}</th>
                                    <th className="py-3">{t.club}</th>
                                    <th className="py-3 text-center">{t.position}</th>
                                    <th className="py-3 text-center">{t.matches}</th>
                                    <th className="py-3 text-center">{t.metricGoals}</th>
                                    <th className="py-3 text-center">{t.metricAssists}</th>
                                    <th className="pe-4 py-3 text-end">{t.rating}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentLeagueData.map((player, idx) => (
                                    <tr key={idx}>
                                        <td className="px-4 fw-bold text-muted">{idx + 1}</td>
                                        <td className="fw-bold text-dark">{player.name}</td>
                                        <td><span className="badge bg-light text-dark border">{player.club}</span></td>
                                        {/* Translated Position Column */}
                                        <td className="text-center">
                                            <span className="text-secondary small fw-semibold">
                                                {translatePosition(player.pos)}
                                            </span>
                                        </td>
                                        <td className="text-center font-monospace">{player.matches}</td>
                                        <td className="text-center fw-bold text-danger">{player.goals}</td>
                                        <td className="text-center fw-bold text-info">{player.assists}</td>
                                        <td className="pe-4 text-end fw-bold text-success">{player.rating}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GlobalView;