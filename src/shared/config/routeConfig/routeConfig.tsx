import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailPage } from 'pages/ArticleDetailPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type RoutePropsWithAuth = RouteProps & {
  onlyAuth?: boolean;
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAIL = 'articles_detail',
  ARTICLES_CREATE = 'article_create',
  ARTICLES_EDIT = 'article_edit',
  // last route
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAIL]: '/articles/', // :id
    [AppRoutes.ARTICLES_CREATE]: '/articles/new',
    [AppRoutes.ARTICLES_EDIT]: '/articles/:id/edit',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, RoutePropsWithAuth> = {
    [AppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
    [AppRoutes.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
    [AppRoutes.PROFILE]: { path: `${RoutePath.profile}:id`, element: <ProfilePage />, onlyAuth: true },
    [AppRoutes.ARTICLES]: { path: RoutePath.articles, element: <ArticlesPage />, onlyAuth: true },
    [AppRoutes.ARTICLES_DETAIL]: {
        path: `${RoutePath.articles_detail}:id`,
        element: <ArticleDetailPage />,
        onlyAuth: true,
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        onlyAuth: true,
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        onlyAuth: true,
    },
    [AppRoutes.NOT_FOUND]: { path: RoutePath.not_found, element: <NotFoundPage /> },
};
