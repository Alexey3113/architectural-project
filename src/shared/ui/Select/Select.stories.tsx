import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Тест',
    options: [
        { content: 'text', value: 'test' },
        { content: 'text', value: 'test12' },
    ],
};
