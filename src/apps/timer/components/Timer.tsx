import React, { useEffect, useRef, useState } from 'react';

import { RadialMeter } from 'components/radial-meter';
import { Button } from 'components/core';

async function timeDuration() {
    performance.mark('start');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    performance.mark('end');

    return performance.measure('time', 'start', 'end').duration;
}

function useTimer() {
    const [inProgress, setInProgress] = useState(false);
    const [duration, setDuration] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);

    const timeLeftRef = useRef(0);
    const pauseRef = useRef(false);
    const endCallbackRef = useRef(() => {});

    useEffect(() => {
        const startTimer = async () => {
            while (timeLeftRef.current >= 1000) {
                // More than a second left
                const loopDuration = await timeDuration();

                if (pauseRef.current === true) {
                    continue;
                }

                timeLeftRef.current -= loopDuration;
                console.log({ loopDuration, timeLeftRef: timeLeftRef.current });

                setTimeLeft(Math.floor(timeLeftRef.current / 1000));
            }
            reset();
            endCallbackRef.current();
        };

        if (inProgress === true) {
            startTimer();
        }
    }, [inProgress]);

    const reset = () => {
        setDuration(0);
        timeLeftRef.current = 0;
        pauseRef.current = false;
        setInProgress(false);
    };

    const start = (duration) => {
        reset();
        setDuration(duration);
        timeLeftRef.current = duration;
        setInProgress(true);
    };

    const pause = () => {
        pauseRef.current = true;
    };

    const resume = () => {
        pauseRef.current = false;
    };

    const onEnd = (callback) => (endCallbackRef.current = callback);

    return { start, pause, resume, inProgress, timeLeft, onEnd };
}

export default function Timer() {
    const { start, pause, resume, timeLeft, onEnd, inProgress } = useTimer();

    const duration = 15;

    const handleStartTimer = () => {
        start(duration * 1000);
    };

    const handlePauseTimer = () => {
        pause();
    };

    const handleResumeTimer = () => {
        resume();
    };

    onEnd(() => {
        console.log('This is it!');
    });

    const pct = 100 - Math.floor(((duration - timeLeft) / duration) * 100);

    return (
        <div>
            Timer
            <RadialMeter value={pct}>
                <h1>{timeLeft}</h1>
            </RadialMeter>
            <Button onClick={handleStartTimer}>Start</Button>
            <Button onClick={handlePauseTimer}>Pause</Button>
            <Button onClick={handleResumeTimer}>Resume</Button>
        </div>
    );
}
