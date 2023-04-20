import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentsList } from 'entities/Comment';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { AddCommentForm } from 'features/AddCommentForm';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleDetailPage.module.scss';
import { getArticleComments } from '../../models/slice/articleDetailsComment';
import { getArticleCommentsLoading } from '../../models/selectors/comments';
import { fetchArticleComments } from '../../models/services/fetchArticleComments/fetchArticleComments';
import { addCommentForArticle } from '../../models/services/addCommentForArticle/addCommentForArticle';
import { getArticleRecommendations } from '../../models/slice/articleDetailsRecommendationsSlice';
import { getArticlesRecommendationsLoading } from '../../models/selectors/recommendations';
import { fetchArticlesRecommendations }
    from '../../models/services/featchArticlesRecommendations/fetchArticlesRecommendations';
import { articleDetailsPageReducer } from '../../models/slice';
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailPage = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const articlesIsLoading = useSelector(getArticlesRecommendationsLoading);

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsLoading);

    const handleSendComment = useCallback((value: string) => {
        dispatch(addCommentForArticle(value));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticleComments(id));
        dispatch(fetchArticlesRecommendations());
    });

    if (!id) {
        return (
            <div className={cls.ArticleDetailPage}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <Page>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={cls.ArticleDetailPage}>
                    <ArticleDetailPageHeader />
                    <ArticleDetails id={id} />
                    <Text title={t('Рекомендации')} className={cls.commentTitle} />
                    <ArticleList
                        className={cls.recommendations}
                        view={ArticleView.LIST}
                        isLoading={articlesIsLoading}
                        articles={recommendations}
                        target="_blank"
                    />

                    <Text title={t('Комментарии')} className={cls.commentTitle} />
                    <AddCommentForm onSendComment={handleSendComment} />
                    <CommentsList
                        isLoading={commentsIsLoading}
                        comments={comments}
                    />
                </div>
            </DynamicModuleLoader>
        </Page>
    );
};

export default ArticleDetailPage;
