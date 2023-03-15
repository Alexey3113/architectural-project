import { lazy } from 'react';

export const ArticleDetailPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // eslint-disable-next-line no-promise-executor-return
        setTimeout(() => resolve(import('./ArticleDetailPage')), 1500);
    }),
);
