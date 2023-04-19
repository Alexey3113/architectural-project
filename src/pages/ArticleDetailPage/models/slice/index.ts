import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentReducer } from './articleDetailsComment';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentReducer,
    recommendations: articleDetailsRecommendationsReducer,
});
