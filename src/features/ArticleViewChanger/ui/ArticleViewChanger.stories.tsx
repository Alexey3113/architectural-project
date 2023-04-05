import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleViewChanger } from './ArticleViewChanger';
import 'app/styles/index.scss';

export default {
    title: 'shared/ArticleViewChanger',
    component: ArticleViewChanger,
} as ComponentMeta<typeof ArticleViewChanger>;

const Template: ComponentStory<typeof ArticleViewChanger> = (args) => <ArticleViewChanger {...args} />;

export const Default = Template.bind({});
Default.args = {

};