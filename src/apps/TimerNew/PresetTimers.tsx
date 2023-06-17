import React, { useEffect, useState } from 'react';
import TimeInput from './TimeInput';
import TimeRadialFrame from 'components/TimeRadialFrame';
import { presets } from './config';

interface Props {
    handleTimerStart: (value: string, label: string) => void;
}

function PresetTimers({ handleTimerStart }: Props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full mx-auto place-content-center">
            {presets.map(({ value, label }) => {
                const [labelValue, labelTime] = label.split(' ');
                return (
                    <div className="grid place-content-center">
                        <TimeRadialFrame
                            value={value}
                            label={label}
                            radius={40}
                            bgColor="white"
                            onClick={handleTimerStart}
                        >
                            <b className="text-orange-400 text-3xl">{labelValue}</b>
                            <span className="text-sm text-slate-400 uppercase">{labelTime}</span>
                        </TimeRadialFrame>
                    </div>
                );
            })}
        </div>
    );
}

export default PresetTimers;
