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
            {icon && (
                <div className="grid place-content-center rounded-xl bg-indigo-500  w-8 h-8 ">
                    <FontAwesomeIcon icon={icon} className="text-lg text-white" />
                </div>
            )}
            <h1 className="text-4xl">
                <div className="font-theme text-sky-800">{label}</div>
            </h1>
        </div>
    );
}
