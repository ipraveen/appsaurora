import React from 'react';
import Logo from 'components/logo/Logo';
import AppLogo from 'components/app-logo/AppLogo';
import Container from '../container/Container';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Props {
    Icon?: IconDefinition;
    label?: string;
}

export default function Header({ Icon, label }: Props) {
    return (
        <header className="shadow shadow-slate-200 sticky top-0 z-30 mb-4 bg-white">
            <Container className="p-2 flex justify-between items-center">
                <Logo />
                <AppLogo Icon={Icon} label={label} type="inline-block" />
            </Container>
        </header>
    );
}
