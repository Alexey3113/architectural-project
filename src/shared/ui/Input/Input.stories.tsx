import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Test',
    value: 'test 1',
};
