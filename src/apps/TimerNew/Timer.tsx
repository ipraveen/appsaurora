import { Paper, TabOptions } from 'components/core';
import React, { useEffect, useState } from 'react';
import Countdown from './Countdown';
import PresetTimers from './PresetTimers';
import CustomTimers from './CustomTimers';
import useCountdown from './useCountdown';

function Timer() {
    const [timerInputOption, setTimerInputOption] = useState('preset');
    const { timeCounter, countdownState, startCountdown, totalTime, resetCountdown } = useCountdown();

    const handleTimerStart = (timer: string, label: string = '') => {
        startCountdown(timer);
    };

    return (
        <Paper className="p-10 flex flex-col gap-10">
            <Countdown
                countdownState={countdownState}
                timeCounter={timeCounter}
                totalTime={totalTime}
                onStop={() => resetCountdown()}
            />

            {countdownState !== 'STARTED' && (
                <>
                    <TabOptions
                        className="w-60 mx-auto"
                        name="timerTabs"
                        onChange={(value) => setTimerInputOption(value)}
                        value={timerInputOption}
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
                    />
                    {timerInputOption === 'preset' && <PresetTimers handleTimerStart={handleTimerStart} />}
                    {timerInputOption === 'custom' && <CustomTimers onChange={handleTimerStart} />}
                </>
            )}
        </Paper>
    );
}

export default Timer;
