import { useState } from 'react';
import { footballData } from '../data/footballData';

function TeamView({ lang }) {
    const t = footballData.translations[lang];
    const leagues = footballData.leagues;

    // 1. Establish state parameters for league and player filtering
    const [selectedLeague, setSelectedLeague] = useState('premierleague');
    const players = leagues[selectedLeague]?.players || [];

    // Default the selectors to the first two players in the array
    const [playerAKey, setPlayerAKey] = useState(players[0]?.name || '');
    const [playerBKey, setPlayerBKey] = useState(players[1]?.name || '');

    // Reset selected players when changing leagues to avoid cross-league comparison bugs
    const handleLeagueChange = (e) => {
        const leagueKey = e.target.value;
        setSelectedLeague(leagueKey);
        const newPlayers = leagues[leagueKey]?.players || [];
        setPlayerAKey(newPlayers[0]?.name || '');
        setPlayerBKey(newPlayers[1]?.name || '');
    };

    const playerA = players.find(p => p.name === playerAKey);
    const playerB = players.find(p => p.name === playerBKey);

    // 2. Position translation helper mapping function
    const translatePosition = (pos) => {
        if (lang === 'en') return pos;
        
        const positionMap = {
            'ST': 'BU', // Striker -> Buteur
            'RW': 'AD', // Right Winger -> Ailier Droit
            'LW': 'AG', // Left Winger -> Ailier Gauche
            'AM': 'MO', // Attacking Midfielder -> Milieu Offensif
            'CM': 'MC', // Central Midfielder -> Milieu Central
            'DM': 'MDC' // Defensive Midfielder -> Milieu Défensif
        };

        return positionMap[pos.toUpperCase()] || pos;
    };

    return (
        <div className="container-fluid px-4 px-md-5">
            {/* Header Jumbotron layout block */}
            <div className="mb-4 p-4 bg-white rounded shadow-sm border-start border-4 border-warning">
                <h1 className="fw-bold text-dark h3">
                    {lang === 'en' ? "Head-to-Head Player Comparison" : "Comparaison Directe des Joueurs"}
                </h1>
                <p className="text-muted mb-0">
                    {lang === 'en' 
                        ? "Select any two elite performers to analyze individual performance metrics." 
                        : "Sélectionnez deux joueurs d'élite pour analyser leurs métriques de performance individuelles."}
                </p>
            </div>

            {/* Interactive Selectors Row */}
            <div className="row g-3 mb-4 p-3 bg-white rounded shadow-sm">
                <div className="col-md-4">
                    <label className="form-label fw-bold text-secondary small text-uppercase">{t.selectLeague}</label>
                    <select className="form-select border-2" value={selectedLeague} onChange={handleLeagueChange}>
                        {Object.entries(leagues).map(([key, value]) => (
                            <option key={key} value={key}>
                                {lang === 'en' ? value.name_en : value.name_fr}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <label className="form-label fw-bold text-danger small text-uppercase">
                        {lang === 'en' ? "Select Player A" : "Sélectionner le Joueur A"}
                    </label>
                    <select className="form-select border-2 border-danger-subtle" value={playerAKey} onChange={(e) => setPlayerAKey(e.target.value)}>
                        {players.map(p => (
                            <option key={p.name} value={p.name} disabled={p.name === playerBKey}>{p.name} ({p.club})</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <label className="form-label fw-bold text-primary small text-uppercase">
                        {lang === 'en' ? "Select Player B" : "Sélectionner le Joueur B"}
                    </label>
                    <select className="form-select border-2 border-primary-subtle" value={playerBKey} onChange={(e) => setPlayerBKey(e.target.value)}>
                        {players.map(p => (
                            <option key={p.name} value={p.name} disabled={p.name === playerAKey}>{p.name} ({p.club})</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Comparison Metrics Cards */}
            {playerA && playerB && (
                <div className="row g-4 mb-4">
                    {/* Player Profile A Presentation Card */}
                    <div className="col-md-6">
                        <div className="card border-0 bg-danger text-white shadow-sm p-4 h-100 position-relative overflow-hidden">
                            <div className="d-flex align-items-center justify-content-between position-relative" style={{ zIndex: 2 }}>
                                <div>
                                    <span className="badge bg-white text-danger fw-bold mb-2">
                                        {playerA.club} — {translatePosition(playerA.pos)}
                                    </span>
                                    <h2 className="fw-bold mb-0">{playerA.name}</h2>
                                    <p className="opacity-75 mb-0 small">{lang === 'en' ? "Player A Profile" : "Profil du Joueur A"}</p>
                                </div>
                                <img 
                                    src={`/images/${selectedLeague}/${playerA.imgKey || 'default'}.png`} 
                                    alt={playerA.name}
                                    className="rounded-circle shadow-sm border border-2 border-white object-fit-cover bg-white"
                                    style={{ width: '90px', height: '90px' }}
                                    onError={(e) => { 
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(playerA.name)}&background=fff&color=dc3545&size=90&bold=true`; 
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Player Profile B Presentation Card */}
                    <div className="col-md-6">
                        <div className="card border-0 bg-primary text-white shadow-sm p-4 h-100 position-relative overflow-hidden">
                            <div className="d-flex align-items-center justify-content-between position-relative" style={{ zIndex: 2 }}>
                                <div>
                                    <span className="badge bg-white text-primary fw-bold mb-2">
                                        {playerB.club} — {translatePosition(playerB.pos)}
                                    </span>
                                    <h2 className="fw-bold mb-0">{playerB.name}</h2>
                                    <p className="opacity-75 mb-0 small">{lang === 'en' ? "Player B Profile" : "Profil du Joueur B"}</p>
                                </div>
                                <img 
                                    src={`/images/${selectedLeague}/${playerB.imgKey || 'default'}.png`} 
                                    alt={playerB.name}
                                    className="rounded-circle shadow-sm border border-2 border-white object-fit-cover bg-white"
                                    style={{ width: '90px', height: '90px' }}
                                    onError={(e) => { 
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(playerB.name)}&background=fff&color=0d6efd&size=90&bold=true`; 
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Numerical Metrics Matrix Breakdown Table */}
                    <div className="col-12">
                        <div className="card border-0 shadow-sm bg-white">
                            <div className="table-responsive">
                                <table className="table table-hover text-center mb-0 align-middle">
                                    <thead className="table-light text-uppercase small font-monospace">
                                        <tr>
                                            <th style={{ width: '35%' }} className="text-danger text-center">{playerA.name}</th>
                                            <th style={{ width: '30%' }} className="text-center">{lang === 'en' ? "Stat Metric" : "Statistique"}</th>
                                            <th style={{ width: '35%' }} className="text-primary text-center">{playerB.name}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fs-5">
                                        <tr>
                                            <td className={`fw-bold ${playerA.goals > playerB.goals ? 'text-success' : ''}`}>{playerA.goals}</td>
                                            <td className="text-secondary small text-uppercase fw-semibold bg-light">{t.metricGoals}</td>
                                            <td className={`fw-bold ${playerB.goals > playerA.goals ? 'text-success' : ''}`}>{playerB.goals}</td>
                                        </tr>
                                        <tr>
                                            <td className={`fw-bold ${playerA.assists > playerB.assists ? 'text-success' : ''}`}>{playerA.assists}</td>
                                            <td className="text-secondary small text-uppercase fw-semibold bg-light">{t.metricAssists}</td>
                                            <td className={`fw-bold ${playerB.assists > playerA.assists ? 'text-success' : ''}`}>{playerB.assists}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-monospace">{playerA.matches}</td>
                                            <td className="text-secondary small text-uppercase fw-semibold bg-light">{t.matches}</td>
                                            <td className="font-monospace">{playerB.matches}</td>
                                        </tr>
                                        <tr>
                                            <td className={`fw-bold ${playerA.rating > playerB.rating ? 'text-success' : ''}`}>{playerA.rating}</td>
                                            <td className="text-secondary small text-uppercase fw-semibold bg-light">{t.rating}</td>
                                            <td className={`fw-bold ${playerB.rating > playerA.rating ? 'text-success' : ''}`}>{playerB.rating}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TeamView;