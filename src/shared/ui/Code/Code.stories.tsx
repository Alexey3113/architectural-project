import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';
import 'app/styles/index.scss';

export default {
    title: 'shared/Code',
    component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Default = Template.bind({});
Default.args = {

};
