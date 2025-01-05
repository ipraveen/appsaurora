import { useEffect, useState } from 'react';

const useTodayDate = () => {
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        setDate(new Date());
    }, []);

    return [date];
};

export default useTodayDate;
