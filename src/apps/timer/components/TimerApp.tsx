import React, { useState } from 'react';

import { Button, Paper } from '@/components/core';
import './timer.css';
import { TimeInput, TimeFormat } from '@/components/TimeInput';
import { toSeconds } from '@/utils/time';
import Timer from './Timer';
import PresetTimers from './PresetTimers';
import {Container} from '@/layout';

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

    const handlePresetClick = (value) => {
        console.log('value: ', value);
        const [hrs, min, sec] = value.split(':');

        setDuration(toSeconds(+hrs, +min, +sec));
        setTimerState(TIMER_STATE.STARTED);
    };
    console.log({ timerState });
    return (
        <Container className="timer-app">
            <Paper className="content w-full p-10 flex justify-around  gap-10">
                <div>
                    <div className="flex flex-col justify-center gap-8">
                        <TimeInput onChange={handleTimeChange} />
                        <section className="flex gap-2 justify-center">
                            <Button onClick={handleStartTimer}>Start</Button>
                        </section>
                    </div>
                </div>
                <div className='flex flex-col justify-end'>
                    {/* <TabOptions
                        className="w-60 mx-auto"
                        name="timerTabs"
                        onChange={(value) => {}}
                        value={'preset'}
                        options={[
                            {
                                value: 'preset',
                                label: 'Presets',
                            },
                            {
                                value: 'custom',
                                label: 'Custom',
                            },
                        ]}
                    /> */}
                    <Timer duration={duration} resetTimer={handleResetTimer} />
                </div>
            </Paper>

            <h1 className="font-semibold text-md text-theme-800 dark:text-theme-300 mt-8 mb-0">Presets</h1>
            <Paper className="content w-full p-2 flex mt-2">
                <PresetTimers onClick={handlePresetClick} />
            </Paper>
        </Container>
    );
}
