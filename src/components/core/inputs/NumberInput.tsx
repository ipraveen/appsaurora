import React, { useState } from 'react';
import clsx from 'clsx';
import BaseInput, { BaseInputProps } from './BaseInput';

type AuroraUiHTMLInputElementProps = Omit<BaseInputProps, 'onChange' | 'value' | 'type'>;

export interface NumberInputProps extends AuroraUiHTMLInputElementProps {
    value: number | undefined ;
    onChange?: (value: number) => void;
}

export function NumberInput(props: NumberInputProps) {
    const { onChange, value, ...otherProps } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const field = event.currentTarget;
        const { value, type } = field;

        onChange?.(Number(value));
    };

    return <BaseInput type="number" value={value ?? ''} onChange={handleChange} {...otherProps} />;
}
