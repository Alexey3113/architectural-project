import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // eslint-disable-next-line no-promise-executor-return
        setTimeout(() => resolve(import('./ProfilePage')), 1500);
    }),
);
