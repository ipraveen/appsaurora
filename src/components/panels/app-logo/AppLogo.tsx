import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function AppLogo() {
    return (
        <div className="flex justify-start items-center gap-2">
            <FontAwesomeIcon size="2x" icon={faCalendar} />
            <h1 className="text-2xl font-medium">
                <div className="font-theme">Calender </div>
            </h1>
        </div>
    );
}
