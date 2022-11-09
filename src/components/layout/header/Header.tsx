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
        <header className="border-b-2 colors-theme bg-white shadow">
            <Container className="p-6 flex justify-between items-center">
                <Logo />
                <AppsSearch className="hidden md:flex" />
                <AppLogo icon={icon} label={label} />
            </Container>
        </header>
    );
}
