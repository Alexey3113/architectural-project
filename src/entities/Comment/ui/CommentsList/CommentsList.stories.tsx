import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentsList } from './CommentsList';
import 'app/styles/index.scss';

export default {
    title: 'entities/CommentsList',
    component: CommentsList,
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => <CommentsList {...args} />;

export const Default = Template.bind({});
Default.args = {
    comments: [
        {
            id: '1',
            text: 'text',
            user: { username: 'tets', id: '1' },
        },
        {
            id: '2',
            text: 'text33',
            user: { username: 'tetrers', id: '2' },
        },
        {
            id: '3',
            text: 'text2',
            user: { username: 'tets', id: '1' },
        },
    ],
};
export const Loading = Template.bind({});
Loading.args = {
    comments: [
        {
            id: '1',
            text: 'text',
            user: { username: 'tets', id: '1' },
        },
        {
            id: '2',
            text: 'text33',
            user: { username: 'tetrers', id: '2' },
        },
        {
            id: '3',
            text: 'text2',
            user: { username: 'tets', id: '1' },
        },
    ],
    isLoading: true,
};
