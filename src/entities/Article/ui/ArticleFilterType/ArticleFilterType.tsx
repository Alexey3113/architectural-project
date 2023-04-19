import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types/order';
import { ArticleSortField } from 'pages/ArticlesPage';
import { useMemo } from 'react';
import cls from './ArticleFilterType.module.scss';

interface IArticleFilterTypeProps {
    className?: string;
    order: SortOrder
    sort: ArticleSortField
    onChangeOrder: (order: SortOrder) => void;
    onChangeSort: (sort: ArticleSortField) => void;
}

export const ArticleFilterType = (props: IArticleFilterTypeProps) => {
    const {
        onChangeOrder, onChangeSort, order, sort, className,
    } = props;
    const { t } = useTranslation();

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => (
        [
            {
                content: 'названию',
                value: ArticleSortField.TITLE,
            },
            {
                content: 'просмотрам',
                value: ArticleSortField.VIEWS,
            },
            {
                content: 'дате созданию',
                value: ArticleSortField.CREATED,
            },
        ]
    ), []);

    const sortOrderOptions = useMemo<SelectOption<SortOrder>[]>(() => ([
        {
            content: 'возрастанию',
            value: 'asc',
        },
        {
            content: 'убыванию',
            value: 'desc',
        },
    ]), []);

    return (
        <div className={classNames(cls.ArticleFilterType, {}, [className])}>
            <Select
                label={t('Сортировка ПО')}
                options={sortOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('по')}
                options={sortOrderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
};
