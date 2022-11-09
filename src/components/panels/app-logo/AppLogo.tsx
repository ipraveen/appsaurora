import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Props {
    icon?: IconDefinition;
    label?: string;
}
export default function AppLogo({ icon, label }: Props) {

    return (
        <div className="flex justify-start items-center gap-2">
            {icon && <FontAwesomeIcon size="2x" icon={icon} className="text-sky-800" />}
            <h1 className="text-4xl">
                <div className="font-theme text-sky-800">{label}</div>
            </h1>
        </div>
    );
}
