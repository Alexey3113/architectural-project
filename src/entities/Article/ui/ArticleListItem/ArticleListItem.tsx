import { classNames } from 'shared/lib/classNames/classNames';

import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HTMLAttributeAnchorTarget } from 'react';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article.types';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface IArticleListItemProps {
 className?: string;
 article: Article,
 view: ArticleView
 target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = (props: IArticleListItemProps) => {
    const {
        className, article, view = ArticleView.LIST, target,
    } = props;
    const { t } = useTranslation();

    const views = (
        <div className={cls.infoWrapper}>
            <Text className={cls.views} text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </div>
    );

    if (view === ArticleView.TILE) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} alt={article.user.username} />
                        <Text className={cls.username} text={article.user.username} />
                        <Text className={cls.date} text={article.createdAt} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text text={article.type.join(', ')} />
                    <img className={cls.imageArticle} src={article.img} alt={article.title} />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <AppLink target={target} to={RoutePath.articles_detail + article.id}>
                            <Button
                                theme={ButtonTheme.OUTLINED}
                            >
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.articles_detail + article.id}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <img className={cls.image} src={article.img} alt={article.title} />
                    <Text className={cls.date} text={article.createdAt} />
                </div>
                {views}
                <Text className={cls.title} text={article.title} />
            </Card>
        </AppLink>
    );
};
