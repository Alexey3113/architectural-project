import { StateSchema } from 'app/providers/StoreProvider';

// eslint-disable-next-line max-len
export const getArticlesRecommendationsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading
|| false;
export const getArticlesRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error;
