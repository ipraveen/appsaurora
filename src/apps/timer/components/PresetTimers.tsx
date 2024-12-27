import React, { useEffect, useState } from 'react';
import TimeRadialFrame from 'components/TimeRadialFrame';
import { presets } from 'apps/timer/config';

interface Props {
    onClick: (value: string, label: string) => void;
}

function PresetTimers({ onClick }: Props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full mx-auto place-content-center">
            {presets.map(({ value, label }) => {
                const [labelValue, labelTime] = label.split(' ');
                return (
                    <div key={value} className="grid place-content-center">
                        <TimeRadialFrame
                            value={value}
                            label={label}
                            radius={30}
                            bgColor="white"
                            onClick={onClick}
                        >
                            <b className="text-orange-400 text-xl">{labelValue}</b>
                            <span className="text-xs text-slate-400 lowercase">{labelTime}</span>
                        </TimeRadialFrame>
                    </div>
                );
            })}
        </div>
    );
}

export default PresetTimers;
