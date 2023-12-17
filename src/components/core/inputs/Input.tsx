import clsx from 'clsx';
import React from 'react';

type BaseProps = {
    placeholder?: string;
    className?: string;
    required?: boolean;
    valid?: boolean;
    onValidityChange?: (value: boolean) => void;
};

export type NumberProps = BaseProps & {
    type: 'number';
    value: number | null;
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
};

type TextProps = BaseProps & {
    type: 'text';
    value: string | undefined;
    onChange?: (value: string) => void;
};

export type InputProps = NumberProps | TextProps;

export default function Input({ type, value, placeholder, className, onChange, valid }: InputProps) {
    return (
        <input
            className={clsx(
                'shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                className,
                {
                    'border-red-600': !valid,
                    'border-slate-300': valid,
                }
            )}
            placeholder={placeholder}
            type={type}
            value={value == null ? '' : value}
            onChange={(e) => {
                if (!onChange) return;

                if (type === 'number') {
                    const value = e.target.value;
                    onChange(+value);
                } else if (type === 'text') {
                    const value = e.target.value;
                    onChange(value);
                }
            }}
        />
    );
}
