import React from 'react';
import { Link } from 'gatsby';
import AppLogo from 'components/app-logo/AppLogo';

interface Props {
    item: {
        id: string;
        label: string;
        Icon: any;
        color: string;
    };
}

const AppItem: React.FC<Props> = ({ item }) => {
    const { id, label, Icon, color } = item;
    return (
        <Link className="gap-3 cursor-pointer " key={id} to={`/${id}`} state={{ appId: id, Icon, label }}>
            <AppLogo type="block" color={color} Icon={Icon} label={label} />
        </Link>
    );
};

export default AppItem;
