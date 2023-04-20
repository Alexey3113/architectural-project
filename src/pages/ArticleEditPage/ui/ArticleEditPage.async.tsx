import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // eslint-disable-next-line no-promise-executor-return
        setTimeout(() => resolve(import('./ArticleEditPage')), 400);
    }),
);
