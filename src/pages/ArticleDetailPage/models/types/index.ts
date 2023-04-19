import { ArticleDetailsCommentSchema } from './articleDetailsComment.types';
import { ArticleDetailsRecommendationsSchema } from './articleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
