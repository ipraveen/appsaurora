import CalenderSelectionInformation from './CalenderSelectionInformation';
import React, { MouseEvent, useEffect, useState } from 'react';
import Year from './Year';
import { getCurrentYear, compare } from '@appsaurora/utils';
import { AppProps } from '@/layout/app-layout/AppLayout';
import CalendarHeader from './CalendarHeader';
import { usePreferenceStorage } from 'storage/hooks/usePreferenceStorage';
import useNavigation from 'hooks/useNavigation';
import { Container } from '@/layout';
import { useNotification } from '@/features/notifications';

interface Props extends AppProps {}

const Calendar = ({ app }: Props) => {
    const [showNextYear, setShowNextYear] =  usePreferenceStorage<boolean>('CALENDAR_INFO-SHOW_NEXT_YEAR', true);
    const [showPreviousYear, setShowPreviousYear] = useState(false);
    const { showNotification, hideNotification } = useNotification();

    const { params, setParams } = useNavigation();
    const { startDate, endDate } = params;

    useEffect(() => {}, []);

    const year = getCurrentYear();
    const onClick = async ({ value }: { value: string }) => {
        // None selected

        let newStartDate = startDate;
        let newEndDate = endDate;

        if (startDate == null && endDate == null) {
            setParams({ startDate: value });
        }

        if (startDate && endDate == null) {
            const sDate = new Date(startDate);
            const eDate = new Date(value);

            if (compare(sDate, eDate) === 0) {
                return;
            }

            if (compare(sDate, eDate) === 1) {
                setParams({ startDate: value, endDate: startDate });

                return;
            }

            setParams({ endDate: value });
        } else if (startDate && endDate) {
            setParams({ startDate: value, endDate: null });
        }
    };

    useEffect(() => {
        if (startDate && endDate) {
            showNotification(<CalenderSelectionInformation year={year} startDate={startDate} endDate={endDate} />);
            return;
        }
        hideNotification();
    }, [startDate, endDate]);

    const onClearClick = (event: MouseEvent<HTMLDivElement>) => {
        const element = event.target as Element;

        if (element.classList.contains('calender-day')) return;
        setParams({ startDate: null, endDate: null });
    };

    return (
        <Container className="p-1">
            <div onClick={onClearClick}>

                {showPreviousYear && (
                    <Year className="my-6" year={year - 1} onClick={onClick} startDate={startDate} endDate={endDate} />
                )}

                <CalendarHeader
                    year={year}
                    showNextYear={showNextYear}
                    showPreviousYear={showPreviousYear}
                    setShowNextYear={setShowNextYear}
                    setShowPreviousYear={setShowPreviousYear}
                />

                <Year
                    className="my-4"
                    hideLabel={true}
                    year={year}
                    onClick={onClick}
                    startDate={startDate}
                    endDate={endDate}
                />
                {showNextYear && (
                    <Year className="my-6" year={year + 1} onClick={onClick} startDate={startDate} endDate={endDate} />
                )}
            </div>
        </Container>
    );
};

export default Calendar;
