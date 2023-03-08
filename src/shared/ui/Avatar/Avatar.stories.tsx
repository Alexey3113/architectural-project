import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    alt: 'test',
    src: 'https://chudo-prirody.com/uploads/posts/2021-08/1628909188_6-p-khitrii-kot-foto-6.jpg',
    size: 100,
};
export const Small = Template.bind({});
Small.args = {
    alt: 'test',
    src: 'https://chudo-prirody.com/uploads/posts/2021-08/1628909188_6-p-khitrii-kot-foto-6.jpg',
    size: 32,
};
