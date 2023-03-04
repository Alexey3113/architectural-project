import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'feature/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
};
Default.decorators = [StoreDecorator({
    login: { username: 'admin', password: 'asd' },
})];
export const AuthWithError = Template.bind({});
AuthWithError.args = {
};
AuthWithError.decorators = [StoreDecorator({
    login: { error: 'test' },
})];
export const AuthWithLoading = Template.bind({});
AuthWithLoading.args = {
};
AuthWithLoading.decorators = [StoreDecorator({
    login: { isLoading: true },
})];
