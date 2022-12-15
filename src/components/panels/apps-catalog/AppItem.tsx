import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

interface Props {
    id: string;
    label: string;
    icon: any;
}

const AppItem: React.FC<Props> = ({ id, label, icon }) => {
    return (
        <Link
            className="flex flex-col justify-center items-center gap-3 cursor-pointer w-36 h-32 bg-white shadow-md rounded-md"
            key={id}
            to={`/${id}`}
            state={{ appId: id, icon, label }}
            style={{
                background: '#4b9dea',
            }}
        >
            <FontAwesomeIcon size="3x" icon={icon} className="text-white" />
            <label className="text-white">{label}</label>
        </Link>
    );
};

export default AppItem;
