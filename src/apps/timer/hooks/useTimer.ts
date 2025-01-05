import { useRef, useState } from 'react';

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
    const durationRef = useRef(0);
    const pauseRef = useRef(false);
    const endCallbackRef = useRef(() => {});

    const startTimer = async () => {
        while (timeElapsedRef.current <= durationRef.current) {
            const loopDuration = await timeDuration();
            if (pauseRef.current === true) {
                continue;
            }

            timeElapsedRef.current += loopDuration;

            if (timeElapsedRef.current >= durationRef.current) {
                setTimeLeft(0);
                setTimeElapsed(toSeconds(durationRef.current));
                endCallbackRef.current();
                return;
            }

            setTimeLeft(toSeconds(durationRef.current - timeElapsedRef.current));
            setTimeElapsed(toSeconds(timeElapsedRef.current));
        }
        reset();
        endCallbackRef.current();
    };

    const reset = () => {
        durationRef.current = 0;
        timeElapsedRef.current = 0;
        pauseRef.current = false;
    };

    const start = (duration) => {
        reset();
        durationRef.current = duration;
        startTimer();
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
