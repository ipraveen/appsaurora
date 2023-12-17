import React, { useReducer } from 'react';
import { Header, Footer, PageNotification } from 'components/layout';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { getApp } from 'apps/apps-catalog/config';
import styled from '@emotion/styled';

interface Props {
    children: React.ReactNode;
    appName?: string;
    state?: {
        appId: string;
        icon: IconDefinition;
        label: string;
    };
}

const StyledContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
`;

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
            <PageNotification state={notificationState} />
            <StyledContainer data-testid={appName} className="bg-slate-50 dark:bg-slate-900">
                <Header Icon={app?.Icon} label={app?.label} />

                <div className="container mx-auto my-4">{childrenWithProps}</div>
                <Footer />
            </StyledContainer>
        </>
    );
}
