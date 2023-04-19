import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlePageHasMore, getArticlePageLoading, getArticlePageNum,
} from '../../selectors/articlePage';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesData } from '../fetchArticlesData/fetchArticlesData';

export const fetchNextArticleData = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchNextArticleData',
        async (_, thunkApi) => {
            const {
                getState, dispatch,
            } = thunkApi;
            const page = getArticlePageNum(getState());
            const isLoading = getArticlePageLoading(getState());
            const hasMore = getArticlePageHasMore(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesPageActions.changePage(page + 1));
                dispatch(fetchArticlesData({}));
            }
        },
    );
