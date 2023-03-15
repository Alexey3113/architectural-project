import { classNames } from 'shared/lib/classNames/classNames';

import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article.types';

interface IArticleImageBlockComponentProps {
 className?: string;
 block: ArticleImageBlock
}

export const ArticleImageBlockComponent = ({ className, block }: IArticleImageBlockComponentProps) => (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <img src={block.src} alt={block.title} className={cls.image} />
        <Text align={TextAlign.CENTER} text={block.title} />
    </div>
);
