import { Article, ArticleType, ArticleView } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from 'shared/types/order';

export enum ArticleSortField {
  CREATED = 'createdAt',
  VIEWS = 'views',
  TITLE = 'title',
}

export interface ArticlePageSchema extends EntityState<Article> {
  error?: string;
  isLoading: boolean;

  view: ArticleView;
  limit?: number;
  page?: number;
  hasMore?: boolean;
  _inited: boolean;
  sort: ArticleSortField;
  order: SortOrder;
  search: string
  type: ArticleType
}
