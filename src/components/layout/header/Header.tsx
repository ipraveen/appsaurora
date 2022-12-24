import React from 'react';
import { AppsSearch, Logo, AppLogo } from 'components/panels';
// import * as styles from './header.module.css';
import Container from '../container/Container';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Props {
    icon?: IconDefinition;
    label?: string;
}
export default function Header({ icon, label }: Props) {
    return (
        <header className="colors-theme bg-white  shadow shadow-slate-200 ">
            <Container className="p-2 flex justify-between items-center">
                <Logo />
                {/* <AppsSearch className="hidden md:flex" /> */}
                <AppLogo icon={icon} label={label} type="inline-block"/>
            </Container>
        </header>
    );
}
