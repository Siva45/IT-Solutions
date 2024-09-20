import React, { useState, useEffect } from 'react';
const ProgressBar = ({ title, percentage }) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        // Simulate the animation
        const timer = setTimeout(() => {
            setProgress(percentage);
        }, 200);
        return () => clearTimeout(timer);
    }, [percentage]);
    return (
        <div className="progress-container">
            <div className="progress-title">
                {title} <span className="progress-percent">{progress}%</span>
            </div>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};
export default ProgressBar;

