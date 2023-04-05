import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageInitied,
} from '../../selectors/articlePage';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesData } from '../fetchArticlesData/fetchArticlesData';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (_, thunkApi) => {
            const {
                getState, dispatch,
            } = thunkApi;
            const inited = getArticlesPageInitied(getState());

            if (!inited) {
                dispatch(articlesPageActions.initPage());
                dispatch(fetchArticlesData({ page: 1 }));
            }
        },
    );
