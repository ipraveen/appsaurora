import React, { ChangeEvent, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
    hourLabel?: string;
    minLabel?: string;
    secLabel?: string;
    onChange: (hour: number, min: number, sec: number) => void;
}

const TimeSelector: React.FC<Props> = ({ onChange, hourLabel = 'Hour', minLabel = 'Min', secLabel = 'Sec' }) => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);

    useEffect(() => {
        onChange(hour, min, sec);
    }, [sec, min, hour]);

    const seconds = [];
    for (let index = 0; index < 60; index++) {
        seconds.push(String(index));
    }

    const mins = [];
    for (let index = 0; index < 60; index++) {
        mins.push(String(index));
    }
    return (
        <div className="flex justify-start gap-2">
            <section className="flex flex-col justify-center align-middle text-center">
                <h1>{hourLabel}</h1>
                <TextField
                    className="w-20"
                    type="number"
                    defaultValue="0"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    tabIndex={3}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setHour(+event.target.value);
                    }}
                />
            </section>

            <section>
                <h1 className="flex flex-col justify-center align-middle text-center">{minLabel}</h1>
                <Autocomplete
                    tabIndex={1}
                    options={mins}
                    autoComplete
                    autoSelect
                    autoHighlight
                    disableCloseOnSelect
                    disableClearable
                    onChange={(_, value) => {
                        setMin(+value);
                    }}
                    className="w-20"
                    renderInput={(params) => <TextField {...params} />}
                />
            </section>

            <section>
                <h1 className="flex flex-col justify-center align-middle text-center">{secLabel}</h1>
                <Autocomplete
                    tabIndex={2}
                    className="w-20"
                    defaultValue="0"
                    options={seconds}
                    autoComplete
                    autoSelect
                    autoHighlight
                    disableCloseOnSelect
                    disableClearable
                    onChange={(_, value) => {
                        setSec(+value);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </section>
        </div>
    );
};

export default TimeSelector;
