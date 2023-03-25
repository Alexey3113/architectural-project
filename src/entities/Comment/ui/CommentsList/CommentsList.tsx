import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentsList.module.scss';
import { Comment } from '../../models/types/comment.types';
import { CommentCard } from '../CommentCard/CommentCard';

interface ICommentsListProps {
 className?: string;
 comments: Comment[]
 isLoading?: boolean;
}

export const CommentsList = ({ className, comments, isLoading }: ICommentsListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentsList, {}, [className])}>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentsList, {}, [className])}>
            {comments.length ? comments.map((comment) => (
                <CommentCard isLoading={isLoading} comment={comment} key={comment.id} />
            ))
                : <Text text={(t('Комментарии отсутствуют'))} />}
        </div>
    );
};
