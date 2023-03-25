import { ArticleList, ArticleView } from 'entities/Article';
import { memo } from 'react';

export const ArticlesPage = () => (
    <div>

        <ArticleList
            articles={[]}
            view={ArticleView.LIST}
            isLoading={false}
        />
    </div>
);

export default memo(ArticlesPage);
