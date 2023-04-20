import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserCanEditArticle } from 'pages/ArticleDetailPage/models/selectors/article';
import { useCallback } from 'react';
import { getArticleDetailsData } from 'entities/Article';
import cls from './ArticleDetailPageHeader.module.scss';

interface IArticleDetailPageHeaderProps {
 className?: string;
}

export const ArticleDetailPageHeader = ({ className }: IArticleDetailPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getUserCanEditArticle);

    const handleGoBack = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const handleGoToEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailPageHeader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINED} onClick={handleGoBack}>
                {t('Назад к статьям')}
            </Button>
            {canEdit && (
                <Button className={cls.edit} theme={ButtonTheme.OUTLINED} onClick={handleGoToEditArticle}>
                    {t('Редактировать')}
                </Button>
            ) }
        </div>
    );
};
