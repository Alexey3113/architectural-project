import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleViewChanger } from 'features/ArticleViewChanger';
import { ArticleFilterType, ArticleType, ArticleView } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortOrder } from 'shared/types/order';
import { fetchArticlesData } from 'pages/ArticlesPage/models/services/fetchArticlesData/fetchArticlesData';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import {
    getArticlePageView, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType,
} from '../../models/selectors/articlePage';
import cls from './ArticlesPageFilters.module.scss';
import { articlesPageActions } from '../../models/slice/articlesPageSlice';
import { ArticleSortField } from '../../models/types/articlesPage';

interface IArticlesPageFiltersProps {
 className?: string;
}

export const ArticlesPageFilters = (props: IArticlesPageFiltersProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const search = useSelector(getArticlesPageSearch);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const view = useSelector(getArticlePageView);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(articlesPageActions.changePage(1));
        dispatch(fetchArticlesData({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const handleChangeViewArticles = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const handleChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const handleChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order));
        fetchData();
    }, [dispatch, fetchData]);

    const handleChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
        fetchData();
    }, [dispatch, fetchData]);

    const handleChangeTab = useCallback((type: TabItem) => {
        dispatch(articlesPageActions.setType(type.value as ArticleType));
        fetchData();
    }, [dispatch, fetchData]);

    const typeTabs = useMemo<TabItem[]>(() => ([
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            content: t('Айти'),
            value: ArticleType.IT,
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ]), [t]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.controls}>
                <ArticleFilterType
                    onChangeOrder={handleChangeOrder}
                    onChangeSort={handleChangeSort}
                    order={order}
                    sort={sort}
                />
                <ArticleViewChanger view={view} onSwitchView={handleChangeViewArticles} />
            </div>
            <div className={cls.search}>
                <Card>
                    <Input
                        placeholder={t('Введите что-то...')}
                        value={search}
                        onChange={handleChangeSearch}
                    />
                </Card>
            </div>
            <Tabs className={cls.tabs} value={type} tabs={typeTabs} onChangeTab={handleChangeTab} />
        </div>
    );
};
