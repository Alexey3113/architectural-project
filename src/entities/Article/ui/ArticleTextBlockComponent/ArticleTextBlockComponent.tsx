import { classNames } from 'shared/lib/classNames/classNames';

import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article.types';
import cls from './ArticleTextBlockComponent.module.scss';

interface IArticleTextBlockComponentProps {
 className?: string;
 block: ArticleTextBlock
}

export const ArticleTextBlockComponent = ({ className, block }: IArticleTextBlockComponentProps) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        <Text title={block.title} className={cls.title} />
        {block.paragraphs.map((p) => (
            <Text text={p} key={p} className={cls.paragraph} />
        ))}
    </div>
);
