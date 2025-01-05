import React, { ReactElement, useState, InputHTMLAttributes, ChangeEventHandler } from 'react';
import './style.css';
import clsx from 'clsx';

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

function BaseInput({ type, value, onChange, className, min, max, placeholder, disabled }: BaseInputProps) {
    const [valid, setValidity] = useState(true);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const field = event.currentTarget;

    //     setValidity(field.reportValidity());
    //     onChange?.(event);
    // };
    const cName = clsx('aurora-ui text-field border py-2 px-4 focus:outline-blue-200 ', className);

    return (
        <input
            value={value}
            className={cName}
            type={type}
            onChange={onChange}
            min={min}
            max={max}
            disabled={disabled}
            placeholder={placeholder}
        />
    );
}

export default BaseInput;
