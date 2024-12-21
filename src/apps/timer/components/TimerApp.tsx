import React, { useEffect, useRef, useState } from 'react';

import { useTimer } from 'apps/timer/hooks/useTimer';

import { RadialMeter } from 'components/radial-meter';
import { Button } from 'components/core';
import './timer.css';
import { TimeInput, TimeFormat } from 'components/TimeInput';
import { toSeconds } from 'utils/time';
import Timer from './Timer';

enum TIMER_STATE {
    NOT_STARTED,
    STARTED,
    PAUSED,
    FINISHED,
}

export default function TimerApp() {
    const [duration, setDuration] = useState(0);
    const [timerState, setTimerState] = useState<TIMER_STATE>(TIMER_STATE.NOT_STARTED);

    const handleTimeChange = ({ hrs, min, sec }: TimeFormat) => {
        console.log({ hrs, min, sec });
        setDuration(toSeconds(hrs, min, sec));
    };

    const handleStartTimer = () => {
        setTimerState(TIMER_STATE.STARTED);
    };
    const handleResetTimer = () => {
        setDuration(0);
        setTimerState(TIMER_STATE.NOT_STARTED);
    };
    console.log({ timerState });
    return (
        <div className="timer-app">
            {timerState === TIMER_STATE.NOT_STARTED && (
                <div className="main timer-not-started">
                    <TimeInput onChange={handleTimeChange} />
                    <Button onClick={handleStartTimer}>Start</Button>
                </div>
            )}
            {timerState === TIMER_STATE.STARTED && (
                <div className="main timer-started">
                    <Timer duration={duration} resetTimer={handleResetTimer} />
                </div>
            )}
        </div>
    );
}
