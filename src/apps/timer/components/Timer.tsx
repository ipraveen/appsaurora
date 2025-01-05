import React, { useEffect, useRef, useState } from 'react';

import { RadialMeter } from '@/components/radial-meter';
import { Label } from '@/components/core';
import './timer.css';
import { formatTime, toSeconds } from '@/utils/time';
import { TIMER_STATE } from '@/apps/timer/config';
import clsx from 'clsx';
import { TimeFormat } from '@/components/TimeInput';

interface Props {
    className?: string;
    duration: number;
    timeLeft: number;
    timerState: TIMER_STATE;
    timeValue: TimeFormat;
    size?: number;
}

export default function Timer({ className, duration, timeLeft, timerState, timeValue, size = 450 }) {
    const { hrs, min, sec } = timeValue;
    const pct = 100 - Math.floor(((duration - timeLeft) / duration) * 100);
    const cName = clsx(className, 'flex flex-col items-center');

    return (
        <div className={cName}>
            {timerState === TIMER_STATE.NOT_STARTED && (
                <RadialMeter value={100} size={size} barColor="#a5f3fc">
                    <Label type="title">{formatTime(toSeconds(hrs, min, sec))}</Label>
                </RadialMeter>
            )}

            {(timerState === TIMER_STATE.STARTED || timerState === TIMER_STATE.PAUSED) && (
                <RadialMeter value={pct} size={size} barColor="#06b6d4">
                    <Label type="title">{formatTime(timeLeft)}</Label>
                </RadialMeter>
            )}

            {timerState === TIMER_STATE.FINISHED && (
                <RadialMeter value={100} size={size} barColor="#06b6d4">
                    <Label className="animate-timer-end" type="title">
                        {formatTime(timeLeft)}
                    </Label>
                </RadialMeter>
            )}
        </div>
    );
}
