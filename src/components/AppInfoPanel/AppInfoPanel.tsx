import React from 'react';

interface Props {
    children: React.ReactNode;
}
function AppInfoPanel({ children }: Props) {
    return <div>{children}</div>;
}

export default AppInfoPanel;
