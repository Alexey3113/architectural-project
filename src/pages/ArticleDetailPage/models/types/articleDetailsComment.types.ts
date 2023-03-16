import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticleDetailsCommentSchema extends EntityState<Comment> {
    error?: string;
    isLoading?: boolean;
}
