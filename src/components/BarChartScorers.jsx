import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { footballData } from '../data/footballData';

// Custom tick renderer to force multi-line name wrapping
const CustomTick = ({ x, y, payload }) => {
    const nameParts = payload.value.split(' ');
    return (
        <g transform={`translate(${x},${y})`}>
            {nameParts.map((part, index) => (
                <text
                    key={index}
                    x={0}
                    y={12 + index * 12}
                    dy={16}
                    textAnchor="middle"
                    fill="#666"
                    style={{ fontSize: '10px', fontWeight: 'bold' }}
                >
                    {part}
                </text>
            ))}
        </g>
    );
};

function BarChartScorers({ lang, data }) {
    const t = footballData.translations[lang];

    return (
        <div className="card border-0 shadow-sm p-3 bg-white h-100">
            <h3 className="h6 fw-bold text-secondary text-uppercase mb-3">
                <i className="bi bi-bar-chart-fill text-danger me-2"></i>{t.topScorersTitle}
            </h3>
            <div style={{ width: '100%', height: 350 }}>
                <ResponsiveContainer>
                    <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 30 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                            dataKey="name"
                            interval={0} // <--- This forces Recharts to show EVERY single player name
                            tick={<CustomTick />}
                            tickLine={false}
                            stroke="#888888"
                        />
                        <YAxis
                            tickLine={false}
                            stroke="#888888"
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#212529', color: '#fff', borderRadius: '6px' }}
                        />
                        <Bar
                            dataKey="goals"
                            name={t.metricGoals}
                            fill="#dc3545"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default BarChartScorers;