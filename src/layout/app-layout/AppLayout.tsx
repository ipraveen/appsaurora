import React, { useReducer } from 'react';
import { Header, Footer } from 'layout/index';
import { getApp } from 'apps/apps-catalog/config';

interface Props {
    children: React.ReactNode;
    appName?: string;
    state?: {
        appId: string;
        label: string;
    };
}

export interface AppProps {
    params?: Record<string, string>;
    app?: {
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
    node: any;
    position?: 'top' | 'bottom';
}

function notificationReducer(state: NotificationStateProps, action: NotificationActionProps): NotificationStateProps {
    switch (action.type) {
        case 'UPDATE_CHILDREN': {
            return {
                ...state,
                ...action,
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

export default function AppLayout({ children, state, appName = '' }: Props) {
    const initialState: NotificationStateProps = {};
    const [notificationState, notificationDispatch] = useReducer(notificationReducer, initialState);

    const appProps = {
        notification: {
            dispatch: notificationDispatch,
        },
    };
    const props = { app: appProps };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
        }
        return child;
    });

    const app = getApp(appName);

    return (
        <>
            {/* <PageNotification state={notificationState} /> */}
            <div data-testid={appName} >
                <Header Icon={app?.Icon} label={app?.label} />
                {childrenWithProps}
                <Footer />
            </div>
        </>
    );
}
