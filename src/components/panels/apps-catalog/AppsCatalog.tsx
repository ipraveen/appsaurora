import React from 'react';
import { apps } from './config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

interface Props {}

const AppsCatalog: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col gap-6 px-6 py-2">
            {apps.map(({ groupId, groupLabel, items }) => {
                return (
                    <div key={groupId}>
                        <h1 className="text-xl font-bold text-slate-500">{groupLabel}</h1>
                        <div className="flex items-center py-6 gap-6">
                            {items.map(({ id, label, icon }) => {
                                return (
                                    <Link
                                        className="cursor-pointer flex flex-col items-center gap-1 w-24 rounded-xl p-2 hover:bg-slate-200 outline-slate-300"
                                        key={id}
                                        to={`/${id}`}
                                        state={{ appId: id, icon, label }}
                                    >
                                        <div className="grid place-content-center rounded-xl bg-slate-500 w-16 h-16 ">
                                            <FontAwesomeIcon size="2x" icon={icon} className="text-white" />
                                        </div>
                                        <label className="text-gray-800">{label}</label>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AppsCatalog;
