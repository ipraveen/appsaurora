import React, { FormEvent, ReactEventHandler, useEffect, useState } from 'react';
import { Label, NumberInput } from '@/components/core';

export interface TimeFormat {
    hrs: number;
    min: number;
    sec: number;
}

interface Props {
    className?: string;
    onChange?: (value: TimeFormat) => void;
}

const TimeInput = ({ className, onChange }: Props) => {
    const [hrs, setHrs] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        onChange?.({ hrs, min, sec });
    }, [hrs, min, sec]);

    return (
        <div className={`flex justify-center items-start ${className}`}>
            <section className="flex flex-col justify-center items-center gap-2">
                <Label type="small">HRS</Label>
                <NumberInput value={hrs} className="w-24 text-2xl" min={0} onChange={(value) => setHrs(value)} />
            </section>
            <b className="px-4 py-2 text-4xl font-extrabold self-end">:</b>
            <section className="flex flex-col justify-center items-center gap-2">
                <Label type="small">MIN</Label>
                <NumberInput
                    value={min}
                    className="w-24 text-2xl"
                    onChange={(value) => setMin(value)}
                />
            </section>
            <b className="px-4 py-2 text-4xl font-extrabold self-end">:</b>
            <section className="flex flex-col justify-center items-center">
                <Label type="small">SEC</Label>
                <NumberInput
                    value={sec}
                    className="w-24 text-2xl"
                    onChange={(value) => setSec(value)}
                />
            </section>
        </div>
    );
};

export default TimeInput;
