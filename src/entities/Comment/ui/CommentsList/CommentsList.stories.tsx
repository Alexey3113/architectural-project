import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentsList } from './CommentsList';
import 'app/styles/index.scss';

export default {
    title: 'shared/CommentsList',
    component: CommentsList,
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => <CommentsList {...args} />;

export const Default = Template.bind({});
Default.args = {

};
