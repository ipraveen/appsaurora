import React, { useState } from 'react';
import Logo from 'components/logo/Logo';
import AppLogo from 'components/app-logo/AppLogo';
import { Container } from '@/layout';
import { SettingsDrawer, Icon as IconComponent } from '@appsaurora/ui-components';

interface Props {
    Icon?: any;
    label?: string;
}

export default function Header({ Icon, label }: Props) {
    const [settingOpen, setSettingOpen] = useState(false);

    return (
        <div className="bg-white dark:bg-slate-300 shadow shadow-slate-200 dark:shadow-slate-800 sticky top-0 z-30 mb-4">
            <Container className="p-2 flex flex-wrap justify-between items-center">
                <Logo />
                <div className="flex justify-end gap-2 items-center">
                    <AppLogo Icon={Icon} label={label} type="inline-block" />
                    <IconComponent name="setting" className="" onClick={() => setSettingOpen(true)} />
                </div>
            </Container>
            <SettingsDrawer open={settingOpen} onClose={() => setSettingOpen(false)} />
        </div>
    );
}
