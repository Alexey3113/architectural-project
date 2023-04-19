import { Article } from 'entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchArticlesRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
    >(
        'articleDetails/fetchArticlesRecommendations',
        async (params, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _limit: 4,
                    },
                });
                console.log(response);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
