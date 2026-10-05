import { getAnalytics, isSupported, logEvent, type Analytics } from 'firebase/analytics';
import { app } from './firebase';

let analytics: Analytics | null = null;
let initializing: Promise<Analytics | null> | null = null;

export function initAnalytics(): Promise<Analytics | null> {
    if (!import.meta.env.VITE_FIREBASE_MEASUREMENT_ID) return Promise.resolve(null);

    initializing ??= isSupported()
        .then((supported) => (supported ? getAnalytics(app) : null))
        .then((instance) => (analytics = instance))
        .catch(() => null);

    return initializing;
}

export function trackPageView(path: string, title: string) {
    if (!analytics) return;
    logEvent(analytics, 'page_view', {
        page_path: path,
        page_title: title,
        page_location: window.location.href
    });
}
