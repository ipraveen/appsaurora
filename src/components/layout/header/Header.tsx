import React, { useState } from 'react';
import Logo from 'components/logo/Logo';
import AppLogo from 'components/app-logo/AppLogo';
import Container from '../container/Container';
import { SettingsDrawer, Icon as IconComponent } from '@appsaurora/ui-components';
import styled from '@emotion/styled';

interface Props {
    Icon?: any;
    label?: string;
}

const StyledHeader = styled.header`
    background: radial-gradient(
        55.36% 221.46% at 23.59% 28.54%,
        var(--clr-theme-light) 1.6%,
        var(--clr-theme-dark) 100%
    );
`;

export default function Header({ Icon, label }: Props) {
    const [settingOpen, setSettingOpen] = useState(false);

    return (
        <StyledHeader className="bg-slate-100 dark:bg-slate-300 shadow shadow-slate-200 dark:shadow-slate-800 sticky top-0 z-30 mb-4">
            <Container className="p-2 flex flex-wrap justify-center md:justify-between items-center">
                <Logo />
                <div className="flex justify-between gap-2 items-center">
                    <AppLogo Icon={Icon} label={label} type="inline-block" />
                    <IconComponent name="setting" className="" onClick={() => setSettingOpen(true)} />
                </div>
            </Container>
            <SettingsDrawer open={settingOpen} onClose={() => setSettingOpen(false)} />
        </StyledHeader>
    );
}
