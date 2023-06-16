import { useCallback, useEffect, useState } from 'react';

const INTERVAL = 500;

const useCountdown = () => {
    const [totalTime, setTotalTime] = useState(0);
    const [timeCounter, setTimeCounter] = useState(0);
    const [countdownState, setCountdownState] = useState('NOT_STARTED');
    const [startTime, setStartTime] = useState<number>();

    const startCountdown = useCallback((timer: string) => {
        const [hour, min, sec] = timer.split(':');
        const timerTotalTime = (Number(hour) * 60 * 60 + Number(min) * 60 + Number(sec)) * 1000;
        setTotalTime(timerTotalTime);
        setStartTime(performance.now());
        setCountdownState('STARTED');
    }, []);

    const resetCountdown = useCallback(() => {
        setTotalTime(0);
        setStartTime(0);
        setCountdownState('NOT_STARTED');
    }, []);

    useEffect(() => {
        if (countdownState === 'NOT_STARTED' || startTime == null) return;

        const interval = setInterval(() => {
            setTimeCounter(performance.now() - startTime);
        }, INTERVAL);

        if (timeCounter > totalTime) {
            clearTimeout(interval);
            setCountdownState('END');
        }

        return () => {
            clearTimeout(interval);
        };
    }, [countdownState, countdownState, startTime, timeCounter]);

    return { timeCounter, countdownState, startTime, totalTime, startCountdown, resetCountdown };
};

export default useCountdown;
