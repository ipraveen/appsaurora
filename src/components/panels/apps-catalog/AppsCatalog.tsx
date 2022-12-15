import React from 'react';
import { apps } from './config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import AppsSection from './AppsSection';

interface Props {}

const AppsCatalog: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col gap-6 px-6 py-2">
            {apps.map(({ groupLabel, items }) => (
                <AppsSection label={groupLabel} items={items} />
            ))}
        </div>
    );
};

export default AppsCatalog;
