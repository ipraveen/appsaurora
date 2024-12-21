import React from 'react';
import './style.css';

interface Props {
    value: number;
    className?: string;
    size?: number;
    children?: React.ReactNode;
    barSize?: number;
    trackColor?: string;
    barColor?: string;
}

export default function RadialProgressBar({
    value = 75,
    className,
    children,
    size = 100,
    barSize = 12,
    trackColor = '#e0e0e0',
    barColor = '#60e6a8',
}: Props) {
    const radius = (size - 2 * barSize) / 2; // Total width = Diameter + BarSize
    const circumference = 2 * Math.PI * radius;
    const progress = ((100 - value) / 100) * circumference;

    const strokeWidth = `${barSize}px`;
    const strokeDasharray = circumference + 'px';
    const strokeDashoffset = progress + 'px';
    const width = `${size}px`;
    const loc = size / 2;

    const cName = ['radial-progress-bar', className].join(' ');

    return (
        <div
            style={{
                width: `${size}px`,
            }}
            className={cName}
        >
            <div className="content">{children ? children : <h1>{value}</h1>}</div>

            <svg width={width} height={width} viewBox={`0 0 ${size} ${size}`}>
                <circle
                    r={radius}
                    cx={loc}
                    cy={loc}
                    fill="transparent"
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                ></circle>
                <circle
                    r={radius}
                    cx={loc}
                    cy={loc}
                    fill="transparent"
                    stroke={barColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                ></circle>
            </svg>
        </div>
    );
}
