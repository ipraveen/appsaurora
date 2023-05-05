import React from 'react';
import { AppsSearch, Logo, AppLogo } from 'components/panels';
// import * as styles from './header.module.css';
import Container from '../container/Container';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import tw from 'twin.macro';
import AppBar from '@mui/material/AppBar';
import styled from '@emotion/styled';

interface Props {
    icon?: IconDefinition;
    label?: string;
}

const StyledHeader = styled.header`
    ${tw`shadow shadow-slate-200 sticky top-0 z-30 mb-4 bg-white`}
    /* background: radial-gradient(55.36% 221.46% at 23.59% 28.54%,#037c8f 1.6%,#18616d 100%); */
     /* background-color: #445d6e; */
    /* background: radial-gradient(55.36% 221.46% at 23.59% 28.54%,#445d6e 1.6%,rgb(73, 88, 98) 100%); */

   
`;

export default function Header({ Icon, label }: Props) {
    return (
        <StyledHeader>
            <Container tw="p-2 flex justify-between items-center">
                <Logo />
                {/* <AppsSearch className="hidden md:flex" /> */}
                <AppLogo Icon={Icon} label={label} type="inline-block" />
            </Container>
        </StyledHeader>
    );
}
