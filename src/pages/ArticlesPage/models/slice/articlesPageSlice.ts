import {
    createEntityAdapter, createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage/localStorage';
import { ArticlePageSchema } from '../types/articlesPage';
import { fetchArticlesData } from '../services/fetchArticlesData/fetchArticlesData';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articlesAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        entities: {},
        ids: [],
        view: ArticleView.LIST,
        hasMore: true,
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        initPage: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.LIST ? 9 : 4;
            state._inited = true;
        },
        changePage: (state, { payload }: PayloadAction<number>) => {
            state.page = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= (state.limit || 0);
                articlesAdapter.addMany(state, action.payload);
            })
            .addCase(fetchArticlesData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
