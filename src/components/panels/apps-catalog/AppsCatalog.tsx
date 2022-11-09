import React from 'react';
import { apps } from './config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

interface Props {}

const AppsCatalog: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col gap-6">
            {apps.map(({ groupId, groupLabel, items }) => {
                return (
                    <div key={groupId}>
                        <h1 className="text-xl font-bold text-gray-500">{groupLabel}</h1>
                        <div className="flex items-center py-6 gap-6">
                            {items.map(({ id, label, icon }) => {
                                return (
                                    <Link to={`/${id}`} state={{ appId: id, icon, label }}>
                                        <div key={id} className="flex flex-col items-center gap-4 w-24">
                                            <div className="grid place-content-center rounded-xl bg-indigo-500  w-16 h-16 ">
                                                <FontAwesomeIcon
                                                    size="2x"
                                                    icon={icon}
                                                    className="text-white"
                                                />
                                            </div>
                                            <label className='text-gray-800'>{label}</label>
                                        </div>
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
