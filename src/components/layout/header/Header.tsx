import React from 'react';
import { AppsSearch, Logo, AppLogo } from 'components/panels';
// import * as styles from './header.module.css';
import Container from '../container/Container';

export default function Header() {
    return (
        <header className="border-b-2 colors-theme">
            <Container className="p-6 flex justify-between items-center">
                <Logo />
                <AppsSearch className="hidden md:flex" />
                <AppLogo />
            </Container>
        </header>
    );
}
