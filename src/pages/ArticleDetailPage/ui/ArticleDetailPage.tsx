import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentsList } from 'entities/Comment';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticleDetailPage.module.scss';
import { articleDetailsCommentReducer, getArticleComments } from '../models/slice/articleDetailsComment';
import { getArticleCommentsLoading } from '../models/selectors/comments';
import { fetchArticleComments } from '../models/services/fetchArticleComments/fetchArticleComments';

const reducers: ReducerList = {
    articleDetailsComment: articleDetailsCommentReducer,
};

const ArticleDetailPage = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsLoading);

    useInitialEffect(() => {
        dispatch(fetchArticleComments(id));
    });

    if (!id) {
        return (
            <div className={cls.ArticleDetailPage}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={cls.ArticleDetailPage}>
                <ArticleDetails id={id} />
                <Text title={t('Комментарии')} className={cls.commentTitle} />
                <CommentsList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailPage;