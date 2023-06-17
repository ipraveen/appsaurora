import React, { FormEvent, ReactEventHandler, useEffect, useState } from 'react';
import TextField from 'components/core/text-field/TextField';
import { formatTime } from './helpers';
import styled from '@emotion/styled';

interface Props {
    className?: string;
    onChange: (value: string) => void;
}


const TimeInput = ({ className, onChange }: Props) => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hrs, setHrs] = useState(0);

    useEffect(() => {
        onChange(formatTime(sec + min * 60 + hrs * 60 * 60, 'full'));
    }, [sec, min, hrs]);

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
            <section className="flex flex-col justify-center">
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
