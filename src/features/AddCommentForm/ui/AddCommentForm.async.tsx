import { FC, lazy } from 'react';
import { IAddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<IAddCommentFormProps>>(
    () => new Promise((resolve) => {
        // @ts-ignore
        // eslint-disable-next-line no-promise-executor-return
        setTimeout(() => resolve(import('./AddCommentForm')), 1500);
    }),
);
