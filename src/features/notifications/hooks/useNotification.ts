import { useContext } from 'react';
import { NotificationContext } from '@/features/notifications/context/NotificationContext';

export function useNotification() {
    const { showNotification, hideNotification } = useContext(NotificationContext);
    
    return {
        showNotification,
        hideNotification,
    };
}
