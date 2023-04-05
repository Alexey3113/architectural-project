import { Article } from 'entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageLimit } from '../../selectors/articlePage';

export const fetchArticlesData = createAsyncThunk<
    Article[],
    {page: number},
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticlesData',
        async (params, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const limit = getArticlePageLimit(getState());

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: params.page,
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
