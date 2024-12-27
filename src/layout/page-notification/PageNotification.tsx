import React, { useReducer } from 'react';
import { Container } from 'layout/index';;
import clsx from 'clsx';

interface Props {
    state: any;
}

interface StyleProps {
    show: boolean;
}


const PageNotification: React.FC<Props> = (props) => {
    const { state } = props;
    const position = state.position || 'bottom';

    const className = clsx(
        'bg-slate-200 dark:bg-slate-600 p-2 rounded-tr-xl rounded-tl-xl fixed z-50 w-full h-20 transition duration-700 ',
        {
            'bottom-0': position === 'bottom',
            'top-0': position === 'top',
            'translate-y-full': Boolean(state?.node) === false,
            'translate-y-0': Boolean(state?.node) === true,
        }
    );

    return (
        <div className={className}>
            <Container>{state.node}</Container>
        </div>
    );
};

export default PageNotification;
