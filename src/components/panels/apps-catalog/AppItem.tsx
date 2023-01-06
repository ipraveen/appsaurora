import React from 'react';
import { Link } from 'gatsby';
import { AppLogo } from 'components/panels';

interface Props {
    id: string;
    label: string;
    icon: any;
}

const AppItem: React.FC<Props> = ({ id, label, Icon }) => {
    return (
        <Link className="gap-3 cursor-pointer " key={id} to={`/${id}`} state={{ appId: id, Icon, label }}>
            <AppLogo type="block" Icon={Icon} label={label} />
        </Link>
    );
};

export default AppItem;
