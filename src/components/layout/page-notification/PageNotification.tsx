import React, { useReducer } from 'react';
import { Container } from 'components/layout';
import styled from '@emotion/styled';

interface Props {
    state: any;
}

interface StyleProps {
    show: boolean;
}

const NotificationContainer = styled.div<StyleProps>`
    transition: 1s linear;
    transform: ${(props) => (props.show ? 'translateY(0)' : 'translateY(-100%)')};
`;

const PageNotification: React.FC<Props> = (props) => {
    const { state } = props;

    return (
        <NotificationContainer
            className="bg-slate-100 p-2 border border-slate-100 fixed top-0 z-50 w-full"
            show={Boolean(state?.children)}
        >
            <Container>{state.children}</Container>
        </NotificationContainer>
    );
};

export default PageNotification;
