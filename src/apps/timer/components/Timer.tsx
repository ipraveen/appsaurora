import React, { useEffect, useRef, useState } from 'react';

import { useTimer } from 'apps/timer/hooks/useTimer';

import { RadialMeter } from 'components/radial-meter';
import { Button } from 'components/core';
import './timer.css';
import { formatTime } from 'utils/time';

interface Props {
    duration: number;
    resetTimer: () => void;
}

export default function Timer({ duration, resetTimer }) {
    const [isPaused, setPaused] = useState(false);
    const { start, pause, resume, timeLeft, onEnd, reset } = useTimer();

    useEffect(() => {
        performance.mark('start');
        start(duration * 1000);
    }, []);

    onEnd(() => {
        performance.mark('end');
        console.log('This is it! time: ', performance.measure('time', 'start', 'end').duration);
    });

    const handleResume = () => {
        setPaused(false);
        resume();
    };

    const handlePause = () => {
        pause();
        setPaused(true);
    };

    const handleCancel = () => {
        reset();
        resetTimer();
    };

    const pct = 100 - Math.floor(((duration - timeLeft) / duration) * 100);

    console.log({timeLeft})

    return (
        <div className="flex flex-col items-center">
            <RadialMeter value={pct} size={350} barColor='#fb923c' trackColor='#f3b98926' >
                <h1>{formatTime(timeLeft)}</h1>
            </RadialMeter>
            {/* <div className="controls">
                <Button onClick={handleCancel}>Cancel</Button>
                {!isPaused && <Button onClick={handlePause}>Pause</Button>}
                {isPaused && <Button onClick={handleResume}>Resume</Button>}
            </div> */}
        </div>
    );
}
