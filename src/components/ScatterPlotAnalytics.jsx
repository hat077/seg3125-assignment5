import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ZAxis } from 'recharts';
import { footballData } from '../data/footballData';

// Custom Tooltip component to display player names dynamically
const CustomScatterTooltip = ({ active, payload, lang }) => {
    if (active && payload && payload.length) {
        const playerData = payload[0].payload;
        return (
            <div className="p-2 bg-dark text-white rounded shadow-sm" style={{ fontSize: '0.85rem' }}>
                <p className="fw-bold mb-1 border-bottom border-secondary pb-1">{playerData.name}</p>
                <p className="mb-0 text-white-50">
                    <span className="fw-semibold text-danger">●</span> {lang === 'en' ? 'Goals' : 'Buts'}: {playerData.goals}
                </p>
                <p className="mb-0 text-white-50">
                    <span className="fw-semibold text-info">●</span> {lang === 'en' ? 'Assists' : 'Passes d.'}: {playerData.assists}
                </p>
            </div>
        );
    }
    return null;
};

function ScatterPlotAnalytics({ lang, data }) {
    const t = footballData.translations[lang];

    return (
        <div className="card border-0 shadow-sm p-3 bg-white h-100">
            <h3 className="h6 fw-bold text-secondary text-uppercase mb-3">
                <i className="bi bi-diagram-3 text-info me-2"></i>{t.goalsVsAssists}
            </h3>
            <div style={{ width: '100%', height: 350 }}>
                <ResponsiveContainer>
                    <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis 
                            type="number" 
                            dataKey="assists" 
                            name={t.metricAssists} 
                            label={{ value: t.metricAssists, position: 'insideBottom', offset: -5 }}
                            tickLine={false}
                        />
                        <YAxis 
                            type="number" 
                            dataKey="goals" 
                            name={t.metricGoals} 
                            label={{ value: t.metricGoals, angle: -90, position: 'insideLeft' }}
                            tickLine={false}
                        />
                        <ZAxis dataKey="name" name={t.player} />
                        <Tooltip 
                            content={<CustomScatterTooltip lang={lang} />}
                            cursor={{ strokeDasharray: '3 3' }}
                        />
                        <Scatter 
                            name="Players" 
                            data={data} 
                            fill="#0dcaf0" 
                            shape="circle"
                        />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default ScatterPlotAnalytics;