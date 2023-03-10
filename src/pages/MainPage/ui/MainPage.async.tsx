import { lazy } from 'react';

export const MainPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // eslint-disable-next-line no-promise-executor-return
        setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);
