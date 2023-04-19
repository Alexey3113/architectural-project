import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesPageFilters } from './ArticlesPageFilters';
import 'app/styles/index.scss';

export default {
    title: 'shared/ArticlesPageFilters',
    component: ArticlesPageFilters,
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Default = Template.bind({});
Default.args = {

};