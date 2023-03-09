import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
};
Default.decorators = [StoreDecorator({ user: { authData: {} } })];

export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];
export const NoAuth = Template.bind({});
NoAuth.args = {
};

NoAuth.decorators = [StoreDecorator({ user: {} })];
