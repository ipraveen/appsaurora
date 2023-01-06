import React, { useReducer } from 'react';
import { Header, Footer, PageNotification } from 'components/layout';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Paper from '@mui/material/Paper';

interface Props {
    children: React.ReactNode;
    state?: {
        appId: string;
        icon: IconDefinition;
        label: string;
    };
}

export interface AppProps {
    app: {
        notification: {
            dispatch: React.Dispatch<NotificationActionProps>;
        };
    };
}

interface NotificationStateProps {
    children?: React.ReactNode;
}

interface NotificationActionProps {
    type: string;
    data: any;
}

function notificationReducer(state: NotificationStateProps, action: NotificationActionProps): NotificationStateProps {
    switch (action.type) {
        case 'UPDATE_CHILDREN': {
            return {
                ...state,
                children: action.data,
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

export default function AppLayout({ children, state }: Props) {
    const initialState: NotificationStateProps = {};
    const [notificationState, notificationDispatch] = useReducer(notificationReducer, initialState);

    const app = {
        notification: {
            dispatch: notificationDispatch,
        },
    };
    const props = { app };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
        }
        return child;
    });

    return (
        <>
            <Header icon={state?.icon} label={state?.label} />
            <PageNotification state={notificationState} />
            <div className="container mx-auto my-4 ">{childrenWithProps}</div>
            <Footer />
        </>
    );
}
