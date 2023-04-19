import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema';
import { fetchArticlesRecommendations } from '../services/featchArticlesRecommendations/fetchArticlesRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

export const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendation',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        entities: {},
        ids: [],
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log('act', action.payload);
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsRecommendationsActions } = articleDetailsRecommendationsSlice;
export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
