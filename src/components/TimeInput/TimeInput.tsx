import React, { FormEvent, ReactEventHandler, useEffect, useState } from 'react';
import TextField from 'components/core/text-field/TextField';

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
                <TextField
                    type="number"
                    value={hrs}
                    className="w-24 border p-4 outline-none"
                    min={0}
                    onChangeValue={(value) => setHrs(value)}
                />
                <label>HRS</label>
            </section>
            <b className="px-4 py-2 text-4xl font-extrabold">:</b>
            <section className="flex flex-col justify-center items-center gap-2">
                <TextField
                    type="number"
                    value={min}
                    className="w-24 border p-4 outline-none"
                    min={0}
                    max={59}
                    placeholder="0-59"
                    onChangeValue={(value) => setMin(value)}
                />
                <label>MINS</label>
            </section>
            <b className="px-4 py-2 text-4xl font-extrabold">:</b>
            <section className="flex flex-col justify-center items-center">
                <TextField
                    value={sec}
                    type="number"
                    className="w-24 border p-4 outline-none"
                    min={0}
                    max={59}
                    placeholder="0-59"
                    onChangeValue={(value) => setSec(value)}
                />
                <label>SEC</label>
            </section>
        </div>
    );
};

export default TimeInput;
