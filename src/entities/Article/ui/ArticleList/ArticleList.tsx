import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article.types';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface IArticleListProps {
 className?: string;
 articles: Article[],
 view: ArticleView,
 isLoading: boolean;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.LIST ? 9 : 3)
    // eslint-disable-next-line react/no-array-index-key
    .fill(0).map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);

export const ArticleList = (props: IArticleListProps) => {
    const {
        className, articles, view, isLoading,
    } = props;

    const renderElements = (article: Article) => (
        <ArticleListItem article={article} view={view} key={article.id} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>

            {articles.length > 0
                ? articles.map(renderElements)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
