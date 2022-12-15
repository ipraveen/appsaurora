import React from 'react';
import { apps } from './config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import AppItem from './AppItem';

interface Item {
    id: string;
    label: string;
    icon: any;
}

interface Props {
    label: string;
    items: Item[];
}

const AppsSection: React.FC<Props> = ({ label, items }) => {
    return (
        <section>
            <h2 className='font-semibold'>{label}</h2>
            <div className="flex items-center py-6 gap-10">
                {items.map(({ id, label, icon }) => {
                    return <AppItem key={id} id={id} label={label} icon={icon} />;
                })}
            </div>
        </section>
    );
};

export default AppsSection;
