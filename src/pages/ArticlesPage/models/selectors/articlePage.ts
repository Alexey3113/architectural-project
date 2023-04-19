import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleType, ArticleView } from 'entities/Article';
import { ArticleSortField } from '../types/articlesPage';

export const getArticlePageError = (state: StateSchema) => state.articlePage?.error;
export const getArticlePageLoading = (state: StateSchema) => state.articlePage?.isLoading || false;
export const getArticlePageView = (state: StateSchema) => state.articlePage?.view || ArticleView.LIST;
export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit || 9;
export const getArticlePageNum = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticlePageHasMore = (state: StateSchema) => state.articlePage?.hasMore;
export const getArticlesPageInitied = (state: StateSchema) => state.articlePage?._inited;
export const getArticlesPageSearch = (state: StateSchema) => state.articlePage?.search ?? '';
export const getArticlesPageSort = (state: StateSchema) => state.articlePage?.sort ?? ArticleSortField.TITLE;
export const getArticlesPageOrder = (state: StateSchema) => state.articlePage?.order ?? 'asc';
export const getArticlesPageType = (state: StateSchema) => state.articlePage?.type ?? ArticleType.ALL;
