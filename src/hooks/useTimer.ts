import { useEffect, useState } from 'react';

export default function useTimer(time = 0) {
    const [over, setOver] = useState(false);

    useEffect(() => {
        if (time === 0) return;

        let timeout: any = null;

        timeout = setTimeout(() => {
            setOver(true);
        }, time);

        return () => clearTimeout(timeout);
    }, [time]);

    return [over];
}
