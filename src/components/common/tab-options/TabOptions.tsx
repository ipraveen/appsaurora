import React from 'react';
import './style.css';

export interface TabOptionType {
    label: string;
    value: string;
}

interface Props {
    name: string;
    options: TabOptionType[];
    value?: string;
    onChange?: (value: string) => void;
}

const TabOptions = (props: Props) => {
    if (!Array.isArray(props.options) || props.options.length === 0) return null;

    const { name, value: tabValue, options, onChange = () => {} } = props;

    return (
        <div>
            <div className="toggle">
                {options.map(({ label, value }) => (
                    <>
                        <input
                            type="radio"
                            name={name}
                            value={value}
                            id={`id_${value}`}
                            checked={tabValue === value}
                            onChange={() => onChange(value)}
                        />
                        <label htmlFor={`id_${value}`}>{label}</label>
                    </>
                ))}
            </div>
        </div>
    );
};

export default TabOptions;
