import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});
Default.args = {
};
Default.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthLight = Template.bind({});
AuthLight.args = {
};

AuthLight.decorators = [StoreDecorator({ user: { authData: {} } })];
export const AuthDark = Template.bind({});
AuthDark.args = {
};

AuthDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];
