import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Input from './Input';
import type { NumberProps } from './Input';
import * as styles from './style.module.css';

export default function NumberInput({
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
    placeholder,
    className,
    value,
    onChange,
    onValidityChange,
    valid = true,
}: Omit<NumberProps, 'type'>) {
    if (typeof value == 'string') {
        return null;
    }

    const handleChange = (value: number) => {
        const inRange = value == null ? true : value <= max && value >= min;
        onValidityChange?.(inRange);
        onChange?.(value);
    };

    console.log('NumberInput => ', { value, valid });

    return (
        <Input
            className={clsx( className, styles.noStep)}
            placeholder={placeholder}
            type="number"
            valid={valid}
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
        />
    );
}
