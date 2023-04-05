import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailPage';
import { ArticlePageSchema } from 'pages/ArticlesPage';
import { ScrollSavingSchema } from 'widgets/ScrollSaving';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollSaving: ScrollSavingSchema;
  login?: LoginSchema;
  profile?: ProfileSchema;
  articlesDetails?: ArticleDetailsSchema;
  articleDetailsComment?: ArticleDetailsCommentSchema;
  addCommentForm?: AddCommentFormSchema;
  articlePage?: ArticlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
