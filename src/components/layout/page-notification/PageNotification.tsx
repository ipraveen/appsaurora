import React, { useReducer } from 'react';
import tw from 'twin.macro';
import { Container } from 'components/layout';

interface Props {
    state: any;
}

const NotificationContainer = tw.div`bg-white p-2 border-y border-slate-100 fixed top-16 z-40 w-full`;

const PageNotification: React.FC<Props> = (props) => {
    const { state } = props;
    if (!state?.children) return null;

    return (
        <NotificationContainer>
            <Container>{state.children}</Container>
        </NotificationContainer>
    );
};

export default PageNotification;
