export const isBrowser = () => typeof window !== 'undefined';

export function getNavigation() {
    if (isBrowser()) {
        return window.navigation;
    }
}
