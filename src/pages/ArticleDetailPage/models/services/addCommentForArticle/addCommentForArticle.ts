import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchArticleComments } from '../fetchArticleComments/fetchArticleComments';

export const addCommentForArticle = createAsyncThunk<
    Comment[],
    string,
    ThunkConfig<string>
    >(
        'articles/addCommentForArticle',
        async (text, thunkApi) => {
            const {
                extra, rejectWithValue, getState, dispatch,
            } = thunkApi;

            const user = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!user || !article || !text) {
                return rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<Comment[]>('/comments', {
                    articleId: article?.id,
                    userId: user?.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchArticleComments(article.id));

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
