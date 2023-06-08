import CalendarHeader from './CalendarHeader';
import React, { MouseEvent, useEffect, useState } from 'react';
import Year from './Year';
import { getCurrentYear, compare } from '@appsaurora/utils';
import { Alert } from 'components/core';
import { AppProps } from 'components/layout/app-layout/AppLayout';
import { usePreferenceStorage } from 'storage/hooks/usePreferenceStorage';

interface Props extends AppProps {}

const Calendar = (props: Props) => {
    const [hideCalendarInfo, setHideCalendarInfo] = usePreferenceStorage('hideCalendarInfo');
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
                data: <CalendarHeader year={year} startDate={startDate} endDate={endDate} />,
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
        <div className="p-2" onClick={onClearClick}>
            {!hideCalendarInfo && (
                <Alert
                    type="info"
                    title="How to use this app?"
                    onClose={() => {
                        setHideCalendarInfo(true);
                        window.localStorage.hideCalendarInfo = true;
                    }}
                >
                    <p className="text-base">
                        Click on dates to select a data range, we will calculate the total number of days, weekdays, and
                        weekends, for you.
                    </p>
                </Alert>
            )}
            <Year className="my-6" year={year} onClick={onClick} startDate={startDate} endDate={endDate} />
            {/** Next Year */}
            <Year className="my-6" year={year + 1} onClick={onClick} startDate={startDate} endDate={endDate} />
        </div>
    );
};

export default Calendar;
