import React, { useEffect, useRef, useState } from 'react';

import { useTimer } from '@/apps/timer/hooks/useTimer';

import { RadialMeter } from '@/components/radial-meter';
import { Button, Label } from '@/components/core';
import './timer.css';
import { formatTime } from 'utils/time';
import { TIMER_STATE } from '@/apps/timer/config';
import clsx from 'clsx';

interface Props {
    className?: string;
    duration: number;
    resetTimer: () => void;
    timerState: TIMER_STATE;
}

export default function Timer({ className, duration, resetTimer, timerState }) {
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

    console.log({ timeLeft });

    const cName = clsx(className, 'flex flex-col items-center');

    return (
        <div className={cName}>
            {timerState === TIMER_STATE.NOT_STARTED && (
                <RadialMeter value={100} size={350} barColor="#a5f3fc">
                    <Label type="title">{formatTime(timeLeft)}</Label>
                </RadialMeter>
            )}

            {timerState === TIMER_STATE.STARTED && (
                <RadialMeter value={pct} size={350} barColor="#06b6d4">
                    <Label type="title">{formatTime(timeLeft)}</Label>
                </RadialMeter>
            )}
            {/* <div className="controls">
                <Button onClick={handleCancel}>Cancel</Button>
                {!isPaused && <Button onClick={handlePause}>Pause</Button>}
                {isPaused && <Button onClick={handleResume}>Resume</Button>}
            </div> */}
        </div>
    );
}
