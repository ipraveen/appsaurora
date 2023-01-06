import CalenderHeader from './CalenderHeader';
import React, { MouseEvent, useEffect, useState } from 'react';
import Year from './Year';
import { getCurrentYear, compare } from 'utils/dateUtil';
import { Alert } from 'components/parts';
import { AppProps } from 'components/layout/app-layout/AppLayout';

interface Props extends AppProps {}

const Calender = (props: Props) => {
    const [startDate, setStartDate] = useState<string | null>(null);
    const [endDate, setEndDate] = useState<string | null>(null);
    useEffect(() => {}, []);

    const year = getCurrentYear();
    const onClick = ({ value }: { value: string }) => {
        // None selected

        if (startDate == null && endDate == null) {
            setStartDate(value);
        } else if (startDate && endDate == null) {
            const sDate = new Date(startDate);
            const eDate = new Date(value);

            if (compare(sDate, eDate) === 0) {
                return;
            }

            if (compare(sDate, eDate) === 1) {
                setEndDate(startDate);
                setStartDate(value);
                return;
            }

            setEndDate(value);
        } else if (startDate && endDate) {
            setStartDate(value);
            setEndDate(null);
        }
    };

    useEffect(() => {
        if (startDate && endDate) {
            return props.app.notification.dispatch({
                type: 'UPDATE_CHILDREN',
                data: <CalenderHeader year={year} startDate={startDate} endDate={endDate} />,
            });
        }
        props.app.notification.dispatch({
            type: 'UPDATE_CHILDREN',
            data: null,
        });
    }, [startDate, endDate]);

    const onClearClick = (event: MouseEvent<HTMLDivElement>) => {

        const element = event.target as Element;

        if (element.classList.contains('calender-day')) return;
        setStartDate(null);
        setEndDate(null);
    };

    return (
        <div onClick={onClearClick}>
            <Alert type="info">
                <b>Info: </b>You can click on date to calculate Number of days, weekends, weekdays, etc, between the
                selected days.
            </Alert>
            {/* <h1 className="text-4xl font-medium mt-6">{year}</h1> */}
            <div className="my-12">
                <Year year={year} onClick={onClick} startDate={startDate} endDate={endDate} />
            </div>

            {/** Next Year */}
            <div className="my-12">
                <Year year={year + 1} onClick={onClick} startDate={startDate} endDate={endDate} />
            </div>
        </div>
    );
};

export default Calender;
