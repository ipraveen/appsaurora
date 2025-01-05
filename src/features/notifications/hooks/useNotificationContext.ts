import { useContext } from 'react';
import { NotificationContext } from '@/features/notifications/context/NotificationContext';

export function useNotificationContext() {
    const { node, show } = useContext(NotificationContext);
    return { node, show };
}
