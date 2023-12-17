import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string;
    name?: string;
    id: string;
    label?: string | number;
    checked?: boolean;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({ className, id, name, value, onChange, checked = false, label }: Props) {
    return (
        <span>
            <input type="checkbox" id={id}  value={value} onChange={onChange} checked={checked} />
            <label className={clsx(className)} htmlFor={id}> {label}</label>
        </span>
    );
}
