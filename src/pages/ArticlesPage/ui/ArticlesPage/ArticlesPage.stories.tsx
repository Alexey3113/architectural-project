import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticlesPage from './ArticlesPage';
import 'app/styles/index.scss';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Default = Template.bind({});
Default.args = {

};
