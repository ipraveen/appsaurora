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
            <div className="flex flex-col justify-center items-center gap-3 ">
                <div className="ring-offset-1 ring-2 ring-theme-200 rounded-full w-20 h-20 grid place-content-center bg-theme-200">
                    <FontAwesomeIcon size="2x" icon={icon} className="text-theme-500" />
                </div>

                <label className="text-theme-700 font-medium">{label}</label>
            </div>
        );
    }

    if (type === 'inline-block') {
        return (
            <div className="flex justify-start items-center gap-2">
                {icon && <FontAwesomeIcon icon={icon} className="text-lg text-white" />}
                <h1 className="text-4xl">
                    <small className=" text-white tracking-wide font-light">{label}</small>
                </h1>

                {/* <h1 className="text-4xl font-medium">
                    <div className="text-slate-600">
                        <span className="text-slate-600 tracking-wide">apps</span>
                        <b className="text-theme-800 tracking-wide">aurora</b>
                    </div>
                </h1> */}
            </div>
        );
    }

    return null;
}
