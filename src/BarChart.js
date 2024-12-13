import React, { useEffect, useState } from 'react';

function BarChart({ data, duration }) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation after initial render
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 100); // small delay allows initial render at 0% width
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="modern-bar-chart">
            {data.map((item, index) => (
                <div className="bar-container" key={index}>
                    <div className="bar-label">
                        {item.target}% - {item.label}
                    </div>
                    <div className="bar-background">
                        <div 
                            className="bar-fill" 
                            style={{ width: animate ? `${item.target}%` : '0%' }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BarChart;
