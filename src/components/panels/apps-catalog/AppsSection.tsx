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
            <h1 className="font-semibold text-md text-theme-800">{label}</h1>
            <div className="flex items-center py-6 gap-10">
                {items.map((item) => {
                    return <AppItem key={item.id} item={item} />;
                })}
            </div>
        </section>
    );
};

export default AppsSection;
