import { duration } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

const DURATION_TICK = 500;

async function timeDuration() {
    const start = Date.now();
    await new Promise((resolve) => setTimeout(resolve, DURATION_TICK));
    return Date.now() - start;
}

const toSeconds = (milliseconds) => Math.floor(milliseconds / 1000);

export function useTimer() {
    // const [duration, setDuration] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0);

    const timeElapsedRef = useRef(0);
    const pauseRef = useRef(false);
    const endCallbackRef = useRef(() => {});

    const startTimer = async (timerDuration) => {
        while (timeElapsedRef.current <= timerDuration) {
            const loopDuration = await timeDuration();
            if (pauseRef.current === true) {
                continue;
            }

            timeElapsedRef.current += loopDuration;

            // console.log({ timerDuration, timeElapsed: timeElapsedRef.current, loopDuration });

            if (timeElapsedRef.current >= timerDuration) {
                setTimeLeft(0);
                setTimeElapsed(toSeconds(timerDuration));
                endCallbackRef.current();
                return;
            }

            console.log()

            setTimeLeft(toSeconds(timerDuration - timeElapsedRef.current));
            setTimeElapsed(toSeconds(timeElapsedRef.current));
        }
        reset();
        endCallbackRef.current();
    };

    const reset = () => {
        timeElapsedRef.current = 0;
        pauseRef.current = false;
    };

    const start = (duration) => {
        reset();
        startTimer(duration);
    };

    const pause = () => {
        pauseRef.current = true;
    };

    const resume = () => {
        pauseRef.current = false;
    };

    const onEnd = (callback) => (endCallbackRef.current = callback);

    return { start, pause, resume, reset, timeLeft, timeElapsed, onEnd };
}
