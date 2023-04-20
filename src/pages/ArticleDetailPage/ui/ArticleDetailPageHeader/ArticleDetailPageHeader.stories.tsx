import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleDetailPageHeader } from './ArticleDetailPageHeader';
import 'app/styles/index.scss';

export default {
    title: 'shared/ArticleDetailPageHeader',
    component: ArticleDetailPageHeader,
} as ComponentMeta<typeof ArticleDetailPageHeader>;

const Template: ComponentStory<typeof ArticleDetailPageHeader> = (args) => <ArticleDetailPageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {

};