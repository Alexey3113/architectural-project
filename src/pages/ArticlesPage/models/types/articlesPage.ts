import { Article, ArticleView } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlePageSchema extends EntityState<Article> {
  error?: string;
  isLoading: boolean;

  view: ArticleView;
  limit?: number;
  page?: number;
  hasMore?: boolean;

  _inited: boolean;
}
