import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Props {
    icon?: IconDefinition;
    label?: string;
    type?: 'block' | 'inline-block' | 'inline';
}
export default function AppLogo({ icon, label, type }: Props) {
    if (type === 'block') {
        return (
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="ring-offset-2 ring-4 ring-theme-400 rounded-full w-20 h-20 grid place-content-center bg-theme-800">
                    <FontAwesomeIcon size="2x" icon={icon} className="text-white" />
                </div>

                <label className="text-slate-900">{label}</label>
            </div>
        );
    }

    if (type === 'inline-block') {
        return (
            <div className="flex justify-start items-center gap-2">
                {icon && (
                    <div className="grid place-content-center rounded-lg bg-theme-800 p-4 w-8 h-8 ">
                        <FontAwesomeIcon icon={icon} className="text-lg text-white" />
                    </div>
                )}
                <h1 className="text-4xl">
                    <div className="font-theme text-theme-800">{label}</div>
                </h1>
            </div>
        );
    }

    return null;
}
