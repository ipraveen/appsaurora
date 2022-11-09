import React from 'react';
import { apps } from './config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

interface Props {}

const AppsCatalog: React.FC<Props> = (props) => {
    return (
        <div>
            {apps.map(({ groupId, groupLabel, items }) => {
                return (
                    <div key={groupId}>
                        <h1 className="text-xl">{groupLabel}</h1>
                        <div className="flex items-center py-6 gap-6">
                            {items.map(({ id, label, icon }) => {
                                return (
                                    <Link to={`/${id}`} state={{ appId: id, icon, label }}>
                                        <div key={id} className="flex flex-col items-center gap-4">
                                            <div className="grid place-content-center rounded-full bg-gray-100  w-16 h-16 ">
                                                <FontAwesomeIcon
                                                    size="2x"
                                                    icon={icon}
                                                    className="text-sky-800 text-gray-700"
                                                />
                                            </div>
                                            <label>{label}</label>
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
