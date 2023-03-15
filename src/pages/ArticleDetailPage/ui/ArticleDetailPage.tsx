import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailPage.module.scss';

const ArticleDetailPage = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={cls.ArticleDetailPage}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={cls.ArticleDetailPage}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailPage;
