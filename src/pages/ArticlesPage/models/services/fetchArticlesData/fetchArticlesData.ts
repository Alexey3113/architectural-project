import { Article, ArticleType } from 'entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlePageLimit, getArticlePageNum, getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
} from '../../selectors/articlePage';

interface FetchArticleDataProps {
    replace?: boolean;
}

export const fetchArticlesData = createAsyncThunk<
    Article[],
    FetchArticleDataProps,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticlesData',
        async (params, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const state = getState();
            const limit = getArticlePageLimit(state);
            const page = getArticlePageNum(state);
            const order = getArticlesPageOrder(state);
            const sort = getArticlesPageSort(state);
            const search = getArticlesPageSearch(state);
            const type = getArticlesPageType(state);

            try {
                addQueryParams({
                    order,
                    sort,
                    search,
                    type,
                });
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _order: order,
                        _sort: sort,
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }
                console.log('response data', response.data);

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
