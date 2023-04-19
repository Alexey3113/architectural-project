import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/AddCommentForm';
import { loginReducer } from 'features/AuthByUsername';
import { articlesPageReducer } from 'pages/ArticlesPage/models/slice/articlesPageSlice';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    profile: profileReducer,
    articlesDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articlesPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?:ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
