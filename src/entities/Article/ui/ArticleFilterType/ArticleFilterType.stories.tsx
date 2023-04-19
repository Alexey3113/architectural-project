import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleFilterType } from './ArticleFilterType';
import 'app/styles/index.scss';

export default {
    title: 'shared/ArticleFilterType',
    component: ArticleFilterType,
} as ComponentMeta<typeof ArticleFilterType>;

const Template: ComponentStory<typeof ArticleFilterType> = (args) => <ArticleFilterType {...args} />;

export const Default = Template.bind({});
Default.args = {

};