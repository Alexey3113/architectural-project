import { classNames } from 'shared/lib/classNames/classNames';

import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article.types';
import cls from './ArticleCodeBlockComponent.module.scss';

interface IArticleCodeBlockComponentProps {
 className?: string;
 block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = ({ className, block }: IArticleCodeBlockComponentProps) => (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>

        <Code text={block.code} />
    </div>
);
