import React, { useEffect, useState } from 'react';
import FlipCard from './FlipCard';
import { TabOptions } from 'components/common';
import TimerInput from './TimerInput';

interface Props {}

const getTimeArray = (time: number): [string, string] => {
    const timeStr = String(time);
    if (timeStr.length === 2) {
        return [timeStr[0], timeStr[1]];
    } else {
        return ['0', timeStr[0]];
    }
};

const Countdown: React.FC<Props> = (props) => {
    const date = new Date();

    const [hour, setHour] = useState<[string, string]>(getTimeArray(date.getHours()));
    const [min, setMin] = useState<[string, string]>(getTimeArray(date.getMinutes()));
    const [sec, setSec] = useState<[string, string]>(getTimeArray(date.getSeconds()));

    const [time, setTime] = useState([0, 0, 0]);
    const [start, setStart] = useState(false);
    const [startTime, setStartTime] = useState<Date | null>();
    const [endTime, setEndTime] = useState<Date | null>();

    const [timeInteval, setTimeInterval] = useState<any>();

    const onChange = (hour: number, min: number, sec: number) => {
        setTime([hour, min, sec]);
    };

    const onButtonClick = () => {
        console.log('Bttn Clicked');
        const sTime = new Date();
        const eTime = new Date(sTime);

        const [hour, min, sec] = time;

        let timeAddition = 0;

        const oneSec = 1000;

        if (sec > 0) {
            timeAddition += sec * oneSec;
        }

        if (min > 0) {
            timeAddition += min * 60 * oneSec;
        }

        if (hour > 0) {
            timeAddition += hour * 60 * 60 * oneSec;
        }

        eTime.setTime(sTime.getTime() + timeAddition);

        setStartTime(sTime);
        setEndTime(eTime);
        setStart(!start);

        console.log({ sTime, eTime, start });
    };
    let interval: any;

    const startTimeInterval = () => {
        return setInterval(() => {
            if (endTime && startTime) {
                const now = new Date();

                if (now < endTime) {
                    window.requestAnimationFrame(() => {
                        let time = endTime.getTime() - now.getTime();
                        time = time / 1000;
                        const sec = time % 60;
                        const min = time % (60 * 60);

                        console.log({ time, min, sec });

                        // setHour(getTimeArray(hourDiff));
                        setMin(getTimeArray(now.getMinutes() - startTime.getMinutes()));
                        setSec(getTimeArray(now.getSeconds() - startTime.getSeconds()));
                    });
                }
            }
        }, 1000);
    };

    useEffect(() => {
        console.log({ start });

        if (start === true) {
            setTimeInterval(startTimeInterval());
        } else {
            clearInterval(timeInteval);
        }
    }, [start]);

    const [tabValue, setTabValue] = useState('radial');

    const onTabChange = (value) => {
        console.log(value);
        setTabValue(value);
    };

    return (
        <div className="container">
            <TabOptions
                name="timerTabs"
                onChange={onTabChange}
                value={tabValue}
                options={[
                    {
                        value: 'radial',
                        label: 'Radial',
                    },
                    {
                        value: 'flipCards',
                        label: 'Flip Cards',
                    },
                ]}
            />

            <div className="flex flex-col justify-center gap-6">
                <TimerInput />
                <div className="flex justify-center gap-6">
                    <FlipCard value={hour.join('')} />
                    <FlipCard value={min.join('')} />
                    <FlipCard value={sec.join('')} />
                </div>
            </div>
        </div>
    );
};

export default Countdown;
