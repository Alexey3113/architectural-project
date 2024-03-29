import { ArticleList } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { useSearchParams } from 'react-router-dom';
import {
    getArticlePageError,
    getArticlePageLoading,
    getArticlePageView,
} from '../../models/selectors/articlePage';
import { fetchNextArticleData } from '../../models/services/fetchNextArticleData/fetchNextArticleData';
import { articlesPageReducer, getArticles } from '../../models/slice/articlesPageSlice';

import { initArticlesPage } from '../../models/services/initArticlesPage/initArticlesPage';
import cls from './ArticlesPage.module.scss';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

const reducers: ReducerList = {
    articlePage: articlesPageReducer,
};

export const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const error = useSelector(getArticlePageError);
    const isLoading = useSelector(getArticlePageLoading);
    const view = useSelector(getArticlePageView);
    const articles = useSelector(getArticles.selectAll);

    const [searchParams] = useSearchParams();

    const handleLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticleData());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text title={t('Ничего не найдено')} />;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={handleLoadNextPart} className={cls.articlePage}>
                <ArticlesPageFilters />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
