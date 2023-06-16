import React, { ReactEventHandler } from 'react';
import styled from '@emotion/styled';

interface StyleProps {
    radius?: number;
    dia?: number;
    size: number;
    bgColor: string;
    color: string;
}

const Container = styled.div<StyleProps>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    position: relative;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 7px;
        left: 7px;
        width: ${({ size }) => size - 14}px;
        height: ${({ size }) => size - 14}px;
        background-color: ${({ bgColor }) => bgColor};
        border-radius: 50%;
    }
    svg {
        position: absolute;
        top: 0;
        left: 0;

        z-index: 50;
    }

    .content {
        position: absolute;
        top: 25px;
        left: 25px;
        width: ${({ dia }) => dia}px;
        height: ${({ dia }) => dia}px;
        background-color: ${({ bgColor }) => bgColor};
        z-index: 100;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

interface Props {
    children?: React.ReactNode;
    radius: number;
    color?: string;
    value: string;
    label: string;
    bgColor?: string;
    onClick?: (value: string, label: string) => void;
}
function TimeRadialFrame({ children, value, label, radius, bgColor = 'white', color = '#64748b', onClick }: Props) {
    const dia = radius * 2;
    const size = dia + 50;

    const circumference = 2 * Math.PI * radius;
    const block = circumference / (12 * 3);
    const dashWidth = block / 3;
    const gapWidth = block - dashWidth;

    const blockMin = circumference / 12;
    const gapWidthMin = blockMin - dashWidth;

    const handleClick = () => {
        onClick?.(value, label);
    };

    return (
        <Container dia={dia} size={size} bgColor={bgColor} color={color} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={size} height={size}>
                <circle
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeWidth="10"
                    stroke="#e8e6e6"
                    strokeDashoffset="0"
                    strokeLinecap="butt"
                    strokeDasharray={`${dashWidth},${gapWidth}`}
                    fill="transparent"
                />

                <circle
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    stroke="#999899"
                    strokeWidth="18"
                    strokeDashoffset="0"
                    strokeLinecap="butt"
                    strokeDasharray={`${dashWidth},${gapWidthMin}`}
                    fill="transparent"
                />
            </svg>

            <div className="content">{children}</div>
        </Container>
    );
}

export default TimeRadialFrame;
