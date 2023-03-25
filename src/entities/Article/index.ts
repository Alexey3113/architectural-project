export { getArticleDetailsData } from './model/selectors/articleDetails.selectors';
export {
    ArticleBlockType, Article, ArticleBlock, ArticleType,
} from './model/types/article.types';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema.types';
export { articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
