import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import AddCommentForm from './AddCommentForm';
import 'app/styles/index.scss';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Default = Template.bind({});
Default.args = {
    onSendComment: () => '',
};

Default.decorators = [StoreDecorator({ addCommentForm: { text: 'Тестирование ' } })];
