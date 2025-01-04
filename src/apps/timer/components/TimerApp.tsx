import React, { useState } from 'react';

import { ButtonIcon, Button, Label, Paper } from '@/components/core';
import './timer.css';
import { TimeInput, TimeFormat } from '@/components/TimeInput';
import { toSeconds } from '@/utils/time';
import Timer from './Timer';
import PresetTimers from './PresetTimers';
import { Container } from '@/layout';
import { TIMER_STATE } from '@/apps/timer/config';

export default function TimerApp() {
    const [duration, setDuration] = useState(0);
    const [timeValue, setTimeValue] = useState({});
    const [timerState, setTimerState] = useState<TIMER_STATE>(TIMER_STATE.NOT_STARTED);

    const handleTimeChange = ({ hrs, min, sec }: TimeFormat) => {
        setDuration(toSeconds(hrs, min, sec));
        setTimeValue({ hrs, min, sec });
    };

    const handleStartTimer = () => {
        setTimerState(TIMER_STATE.STARTED);
    };
    const handleResetTimer = () => {
        setDuration(0);
        setTimerState(TIMER_STATE.NOT_STARTED);
    };

    const handlePresetClick = (value) => {
        const [hrs, min, sec] = value.split(':');

        setDuration(toSeconds(+hrs, +min, +sec));
        setTimerState(TIMER_STATE.STARTED);
    };

    const handleClear = () => {}
    return (
        <Container className="timer-app">
            <Paper className="content w-full p-10 flex justify-around  gap-10">
                <div className="flex flex-col justify-start pt-16">
                    <div className="flex flex-col justify-center gap-8">
                        <TimeInput onChange={handleTimeChange} />
                        {/* <section className="flex gap-2">
                            <Button size="sm" type="controls">
                                + 30 sec
                            </Button>{' '}
                            <Button size="sm" type="controls">
                                + 1 min
                            </Button>{' '}
                            <Button size="sm" type="controls">
                                + 5 min
                            </Button>
                            <Button size="sm" type="controls">
                                + 10 min
                            </Button>
                        </section> */}
                        <section className="flex gap-4 justify-start">
                            <ButtonIcon onClick={handleStartTimer}>Start</ButtonIcon>
                            <Button variant="outlined" onClick={handleClear}>
                                Clear
                            </Button>
                        </section>
                    </div>
                </div>
                <div className="flex flex-col justify-end mb-12">
                    {/* <TabOptions
                        className="w-60 mx-auto"
                        name="timerTabs"
                        onChange={(value) => {}}
                        value={'timer'}
                        options={[
                            {
                                value: 'timer',
                                label: 'Timer',
                            },
                            {
                                value: 'countdown',
                                label: 'Countdown',
                            },
                        ]}
                    /> */}
                    <Timer
                        className="mt-10"
                        timerState={timerState}
                        duration={duration}
                        resetTimer={handleResetTimer}
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
