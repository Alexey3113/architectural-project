import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleEditPage.module.scss';

interface IArticleEditPageProps {
 className?: string;
}

const ArticleEditPage = ({ className }: IArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {id ? t(`Редактирование канала с ID = ${id}`) : t('Создание канала')}
        </Page>
    );
};

export default ArticleEditPage;
