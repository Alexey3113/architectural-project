import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsLoading = (state: StateSchema) => state?.articleDetailsComment?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state?.articleDetailsComment?.error;
