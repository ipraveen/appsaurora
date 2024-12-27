import React from 'react';
import styled from '@emotion/styled';

export interface TabOptionType {
    label: string;
    value: string;
}

type TabTypes = 'sm' | 'md' | 'lg';

interface StyleProps {
    size: TabTypes;
}

const Container = styled.div<StyleProps>`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;

    input {
        width: 0;
        height: 0;
        opacity: 0;
    }
    input + label {
        flex: 1 1 0px;
        margin: 0;
        padding: 0.75rem 2rem;
        position: relative;
        display: inline-block;
        border: solid 1px #ddd;
        background-color: #fff;

        font-weight: 600;
        text-align: center;
        box-shadow: 0 0 0 rgba(255, 255, 255, 0);
        transition: border-color 0.15s ease-out, color 0.25s ease-out, background-color 0.15s ease-out,
            box-shadow 0.15s ease-out;

        ${({ size }) =>
            size === 'md' &&
            `
             font-size: 1rem;
             line-height: 100%;
        `}

        ${({ size }) =>
            size === 'lg' &&
            `
             font-size: 1.2rem;
             line-height: 120%;
        `}
    }
    input + label:first-of-type {
        border-radius: 6px 0 0 6px;
        border-right: none;
    }
    input + label:last-of-type {
        border-radius: 0 6px 6px 0;
        border-left: none;
    }
    input:hover + label {
        border-color: #213140;
    }
    input:checked + label {
        background-color: #7eab9a;
        color: #fff;
        box-shadow: 0 0 2px rgba(102, 179, 251, 0.5);
        border-color: #7eab9a;
        z-index: 1;
    }
`;

interface Props {
    className?: string;
    name: string;
    options: TabOptionType[];
    value?: string;
    size?: TabTypes;
    onChange?: (value: string) => void;
}

const TabOptions = ({ className, name, value: tabValue, options, onChange, size = 'md' }: Props) => {
    if (!Array.isArray(options) || options.length === 0) return null;

    return (
        <Container className={className} size={size}>
            {options.map(({ label, value }) => (
                <>
                    <input
                        type="radio"
                        name={name}
                        value={value}
                        id={`id_${value}`}
                        checked={tabValue === value}
                        onChange={() => onChange?.(value)}
                    />
                    <label htmlFor={`id_${value}`}>{label}</label>
                </>
            ))}
        </Container>
    );
};

export default TabOptions;
