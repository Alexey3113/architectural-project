import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import 'app/styles/index.scss';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

const text = 'Hey bro';

export const Primary = Template.bind({});
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
    children: text,
};

export const Red = Template.bind({});
Red.args = {
    theme: AppLinkTheme.RED,
    children: text,
};
export const Secondary = Template.bind({});
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
    children: text,
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY,
    children: text,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    theme: AppLinkTheme.RED,
    children: text,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    theme: AppLinkTheme.SECONDARY,
    children: text,
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
