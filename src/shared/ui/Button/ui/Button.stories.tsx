import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

import 'app/styles/index.scss';

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINED,
};
export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
