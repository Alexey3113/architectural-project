import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';
import 'app/styles/index.scss';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    comment: {
        id: '1',
        text: 'text',
        user: { username: 'tets', id: '1' },
    },
};
export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'text',
        user: { username: 'tets', id: '1' },
    },
    isLoading: true,
};
