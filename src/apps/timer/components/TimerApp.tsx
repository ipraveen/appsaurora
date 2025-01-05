import React, { useState } from 'react';

import { ButtonIcon, Button, Label, Paper } from '@/components/core';
import './timer.css';
import { TimeInput, TimeFormat } from '@/components/TimeInput';
import { toSeconds } from '@/utils/time';
import Timer from './Timer';
// import PresetTimers from './PresetTimers';
import { Container } from '@/layout';
import { TIMER_STATE } from '@/apps/timer/config';
import { useTimer } from '@/apps/timer/hooks/useTimer';

export default function TimerApp() {
    const [duration, setDuration] = useState(0);
    const [timeValue, setTimeValue] = useState<TimeFormat>({});
    const [timerState, setTimerState] = useState<TIMER_STATE>(TIMER_STATE.NOT_STARTED);
    const { start, pause, resume, timeLeft, onEnd, reset } = useTimer();

    const handleTimeChange = ({ hrs, min, sec }: TimeFormat) => {
        setDuration(toSeconds(hrs, min, sec));
        setTimeValue({ hrs, min, sec });
    };

    const handleStartTimer = () => {
        performance.mark('start');
        setTimerState(TIMER_STATE.STARTED);
        start(duration * 1000);
    };

    // const handlePresetClick = (value) => {
    //     const [hrs, min, sec] = value.split(':');

    //     setDuration(toSeconds(+hrs, +min, +sec));
    //     setTimerState(TIMER_STATE.STARTED);
    // };

    const handleClearOrCancel = () => {
        reset();
        setTimerState(TIMER_STATE.NOT_STARTED);
        setTimeValue({});
        setDuration(0);
    };

    onEnd(() => {
        performance.mark('end');
        console.log('This is it! time: ', performance.measure('time', 'start', 'end').duration);
        setTimerState(TIMER_STATE.FINISHED);
    });

    const handleResume = () => {
        resume();
        setTimerState(TIMER_STATE.STARTED);
    };

    const handlePause = () => {
        pause();
        setTimerState(TIMER_STATE.PAUSED);
    };

    return (
        <Container className="timer-app">
            <Paper className="content w-full p-10 flex justify-start  gap-10">
                <div className="flex flex-col justify-start pt-16 bg-slate-50 p-12 rounded-xl flex-none w-108 justify-self-start">
                    <div className="flex flex-col justify-center gap-8">
                        <TimeInput
                            value={timeValue}
                            onChange={handleTimeChange}
                            disabled={timerState === TIMER_STATE.STARTED}
                        />
                        <section className="flex gap-4 justify-start">
                            {(timerState === TIMER_STATE.NOT_STARTED || timerState === TIMER_STATE.FINISHED) && (
                                <>
                                    <ButtonIcon onClick={handleStartTimer}>Start</ButtonIcon>
                                </>
                            )}
                            {(timerState === TIMER_STATE.STARTED || timerState === TIMER_STATE.PAUSED) && (
                                <>
                                    {timerState !== TIMER_STATE.PAUSED && (
                                        <ButtonIcon onClick={handlePause}>Pause</ButtonIcon>
                                    )}
                                    {timerState === TIMER_STATE.PAUSED && (
                                        <ButtonIcon onClick={handleResume}>Resume</ButtonIcon>
                                    )}
                                </>
                            )}

                            <Button variant="outlined" onClick={handleClearOrCancel}>
                                {timerState === TIMER_STATE.NOT_STARTED ? 'Clear' : 'Cancel'}
                            </Button>
                        </section>
                    </div>
                </div>
                <div className="grid place-content-center flex-initial w-full mb-12">
                    <Timer
                        className="mt-10"
                        timerState={timerState}
                        duration={duration}
                        timeValue={timeValue}
                        timeLeft={timeLeft}
                    />
                </div>
            </Paper>

            {/* <h1 className="font-semibold text-md text-theme-800 dark:text-theme-300 mt-8 mb-0">Presets</h1>
            <Paper className="content w-full p-2 flex mt-2">
                <PresetTimers onClick={handlePresetClick} />
            </Paper> */}
        </Container>
    );
}
