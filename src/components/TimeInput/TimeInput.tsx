import React, { useEffect, useState } from 'react';
import { Label, NumberInput } from '@/components/core';
import clsx from 'clsx';
import { TIMER_STATE } from '@/apps/timer/config';

export interface TimeFormat {
    hrs?: number;
    min?: number;
    sec?: number;
}

interface Props {
    className?: string;
    onChange?: (value: TimeFormat) => void;
    value: TimeFormat;
    disabled?: boolean;
}

const TimeInput = ({ className, onChange, value, disabled }: Props) => {
    const { hrs, min, sec } = value;

    const handleChange = (type, value) => {
        onChange?.({ hrs, min, sec, [type]: value });
    };

    const baseInputSectionClass = clsx('flex flex-col justify-center items-center gap-2');
    const baseInputClass = clsx('w-24 text-2xl');
    return (
        <div className={`flex justify-center items-start ${className}`}>
            <section className={baseInputSectionClass}>
                <Label type="small">HRS</Label>
                <NumberInput
                    value={hrs}
                    className={baseInputClass}
                    min={0}
                    onChange={(value) => handleChange('hrs', value)}
                    disabled={disabled}
                />
            </section>
            <b className="px-4 py-2 text-4xl font-extrabold self-end">:</b>
            <section className={baseInputSectionClass}>
                <Label type="small">MIN</Label>
                <NumberInput
                    value={min}
                    className={baseInputClass}
                    min={0}
                    max={59}
                    placeholder="0-59"
                    onChange={(value) => handleChange('min', value)}
                    disabled={disabled}
                />
            </section>
            <b className="px-4 py-2 text-4xl font-extrabold self-end">:</b>
            <section className={baseInputSectionClass}>
                <Label type="small">SEC</Label>
                <NumberInput
                    value={sec}
                    className={baseInputClass}
                    min={0}
                    max={59}
                    placeholder="0-59"
                    onChange={(value) => handleChange('sec', value)}
                    disabled={disabled}
                />
            </section>
        </div>
    );
};

export default TimeInput;
