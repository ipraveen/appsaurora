import React, { useReducer } from 'react';
import tw from 'twin.macro';
import { Container } from 'components/layout';
import styled from '@emotion/styled';

interface Props {
    state: any;
}

const NotificationContainer = styled.div`
    ${tw`bg-white p-2 border border-slate-100 fixed top-16 z-20 w-full`}
    transition: 0.6s ease-in-out;
    transform: ${props => props.show ? "translateY(0)" : "translateY(-100%)"};

`;

const PageNotification: React.FC<Props> = (props) => {
    const { state } = props;

    return (
        <NotificationContainer show={Boolean(state?.children)}>
            <Container>{state.children}</Container>
        </NotificationContainer>
    );
};

export default PageNotification;
