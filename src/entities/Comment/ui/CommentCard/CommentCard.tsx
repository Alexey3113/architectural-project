import { classNames } from 'shared/lib/classNames/classNames';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';
import { Comment } from '../../models/types/comment.types';

interface ICommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = ({
    className,
    comment,
    isLoading,
}: ICommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width="30px" height="30px" border="50%" className={cls.avatar} />
                    <Skeleton width="160px" height="20px" />
                </div>
                <Skeleton width="100%" height="70px" />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <Link to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                <Avatar src={comment.user.avatar} size={30} className={cls.avatar} />
                <Text text={comment.user.username} />
            </Link>
            <Text text={comment.text} />
        </div>
    );
};
