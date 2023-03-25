import { classNames } from 'shared/lib/classNames/classNames';

import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    ArticleView,
} from '../../model/types/article.types';
import cls from './ArticleListItem.module.scss';

interface IArticleListItemProps {
 className?: string;
 view: ArticleView
}

export const ArticleListItemSkeleton = (props: IArticleListItemProps) => {
    const { className, view = ArticleView.LIST } = props;

    if (view === ArticleView.TILE) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <div className={cls.date}>
                            <Skeleton width={90} height={16} />
                        </div>
                    </div>
                    <Skeleton className={cls.title} width={340} height={24} />
                    <Skeleton className={cls.title} width={180} height={16} />
                    <Skeleton className={cls.title} width="100%" height={200} />
                    <Skeleton className={cls.title} width={300} height={24} />
                    <Skeleton className={cls.title} width="100%" height={60} />
                    <div className={cls.footer}>
                        <Skeleton width={150} height={24} />
                        <Skeleton width={110} height={16} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.image} width={200} height={200} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={110} height={16} />
                    <Skeleton width={50} height={16} />
                </div>
                <Skeleton className={cls.title} width={180} height={16} />
            </Card>
        </div>
    );
};
