import React, { useState } from 'react';
import clsx from 'clsx';
import BaseInput, { BaseInputProps } from './BaseInput';

type AuroraUiHTMLInputElementProps = Omit<BaseInputProps, 'value' | 'type' | 'onChange'>;

export interface TextInputProps extends AuroraUiHTMLInputElementProps {
    value: string;
    onChange?: (value: string) => void;
}

export function TextInput(props: TextInputProps) {
    const { onChange, ...otherProps } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const field = event.currentTarget;
        const { value, type } = field;

        onChange?.(value);
    };

    return <BaseInput type="number" onChange={handleChange} {...otherProps} />;
}
