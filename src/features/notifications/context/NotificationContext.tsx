import React, { createContext, ReactNode, useContext, useState } from 'react';

export const NotificationContext = createContext({
    show: false,
    node: null,
    showNotification: (node: ReactNode) => {},
    hideNotification: () => {},
});

export function NotificationContextProvider({ children }) {
    const [node, setNode] = useState(null);
    const [show, setShow] = useState(false);

    function showNotification(_node) {
        setNode(_node);
        setShow(true);
    }

    function hideNotification() {
        setNode(null);
        setShow(false);
    }

    return (
        <NotificationContext.Provider value={{ node, show, showNotification, hideNotification }}>
            {children}
        </NotificationContext.Provider>
    );
}
