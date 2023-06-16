import React from 'react';
import styled from '@emotion/styled';

interface StyleProps {
    radius: number;
    circumference: number;
    pct: number;
    size: number;
}

const Container = styled.div<StyleProps>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    position: relative;
    display: grid;
    place-content: center;

    .outer {
        position: relative;
        width: ${({ size }) => size}px;
        height: ${({ size }) => size}px;
        border-radius: 50%;
        display: grid;
        place-content: center;
        box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
    }

    .inner {
        width: ${({ size }) => size - 20}px;
        height: ${({ size }) => size - 20}px;
        border-radius: 50%;
        display: grid;
        place-content: center;
        box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
            0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    }

    svg {
        position: absolute;
        top: -1px;
        left: 0;
    }
    circle {
        stroke-width: 20px;
        stroke: cornflowerblue;
        stroke-dashoffset: ${({ pct }) => pct};
        transition: stroke-dashoffset 0.5s linear;
    }
`;

interface Props {
    children?: React.ReactNode;
    value?: number;
    radius: number;
}
function RadialMeter({ children, radius, value = 0 }: Props) {
    const circumference = 2 * Math.PI * radius;
    const dia = radius * 2;
    const size = (radius + 10) * 2;

    const pct = ((100 - value) / 100) * circumference;

    return (
        <Container size={size} radius={radius} circumference={circumference} pct={pct}>
            <div className="outer">
                <div className="inner">
                    <div>{children}</div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={size} height={size}>
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#e91e63" />
                        <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                </defs>
                {/* <circle cx={radius} cy={radius} r={radius - 10} strokeLinecap="round" /> */}

                <circle
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    transform={`rotate(-90,${size / 2},${size / 2})`}
                ></circle>
            </svg>
        </Container>
    );
}

export default RadialMeter;
