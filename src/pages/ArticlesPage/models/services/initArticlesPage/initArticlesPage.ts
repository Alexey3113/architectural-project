import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types/order';
import { ArticleType } from 'entities/Article';
import {
    getArticlesPageInitied,
} from '../../selectors/articlePage';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesData } from '../fetchArticlesData/fetchArticlesData';
import { ArticleSortField } from '../../types/articlesPage';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const {
                getState, dispatch,
            } = thunkApi;
            const inited = getArticlesPageInitied(getState());

            if (!inited) {
                const orderFromUrl = searchParams.get('order') as SortOrder;
                const searchFromUrl = searchParams.get('search');
                const sortFromUrl = searchParams.get('sort') as ArticleSortField;
                const typeFromUrl = searchParams.get('type') as ArticleType;

                if (orderFromUrl) {
                    dispatch(articlesPageActions.setOrder(orderFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(articlesPageActions.setSearch(searchFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(articlesPageActions.setSort(sortFromUrl));
                }
                if (typeFromUrl) {
                    dispatch(articlesPageActions.setType(typeFromUrl));
                }

                dispatch(articlesPageActions.initPage());
                dispatch(fetchArticlesData({}));
            }
        },
    );
