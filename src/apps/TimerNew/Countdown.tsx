import React, { useEffect, useState } from 'react';
import RadialMeter from 'components/RadialMeter';
import { Button } from 'components/core';
import { formatTime } from './helpers';

interface Props {
    timeCounter: number;
    totalTime: number;
    countdownState: string;
    onStop: () => void;
}

function Countdown({ timeCounter, countdownState, totalTime, onStop }: Props) {
    let radialMeterValue = 0;
    if (countdownState === 'STARTED') {
        radialMeterValue = (timeCounter / totalTime) * 100;
    }

    if (countdownState === 'END') {
        radialMeterValue = 100;
    }

    return (
        <div>
            <div className="flex gap-8 justify-center">
                <RadialMeter radius={150} value={radialMeterValue}>
                    {countdownState === 'NOT_STARTED' && <b>Select Timer</b>}
                    {countdownState === 'STARTED' && (
                        <div className="flex flex-col items-center">
                            <b className="text-orange-400 text-3xl">{formatTime(timeCounter / 1000)}</b>
                        </div>
                    )}

                    {countdownState === 'END' && (
                        <b className="text-sky-600 text-3xl animate-pulse">{formatTime(totalTime / 1000)}</b>
                    )}
                </RadialMeter>
            </div>
            {countdownState === 'STARTED' && (
                <div className="flex justify-center gap-6 items-center p-6 h-24">
                    <Button color="success" onClick={onStop}>
                        STOP
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Countdown;
