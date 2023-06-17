import React, { useEffect, useState } from 'react';
import TimeInput from './TimeInput';
import TimeRadialFrame from 'components/TimeRadialFrame';

interface Props {
    onChange: (value: string) => void;
}

function CustomTimers({ onChange }: Props) {
    const [timerTime, setTimerTime] = useState('');

    console.log({ timerTime });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.stopPropagation();
        event.preventDefault();

        onChange(timerTime);
    };
    return (
        <form className="flex gap-8 justify-center " onSubmit={handleSubmit}>
            <TimeInput onChange={setTimerTime} />
            <button type="submit">Start</button>
        </form>
    );
}

export default CustomTimers;
