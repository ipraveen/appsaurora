import React from 'react';

interface Props {}
// const HEADER = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const HEADER = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const WeekHeader: React.FC<Props> = (props) => {
    return (
        <>
            {HEADER.map((h) => (
                <div key={h} className="grid place-content-center text-theme-600">{h}</div>
            ))}
        </>
    );
};

export default WeekHeader;
