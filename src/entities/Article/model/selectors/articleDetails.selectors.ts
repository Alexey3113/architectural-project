import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSchema) => state.articlesDetails?.data;
export const getArticleDetailsLoading = (state: StateSchema) => state.articlesDetails?.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.articlesDetails?.error;
