import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import 'app/styles/index.scss';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidationProfileErrors } from 'entities/Profile';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

const data = {
    age: 22,
    avatar:
    'https://chudo-prirody.com/uploads/posts/2021-08/1628904992_30-p-skachat-foto-milikh-kotikov-34.jpg',
    city: 'Москва',
    country: Country.Russia,
    currency: Currency.EUR,
    first: 'Дмитрий',
    lastname: 'Иванов',
    username: 'DmitryIvanov',
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({ profile: { form: data } })];

export const withReadonly = Template.bind({});
withReadonly.args = {};
withReadonly.decorators = [
    StoreDecorator({ profile: { form: data, readonly: true } }),
];
export const withLoading = Template.bind({});
withLoading.args = {};
withLoading.decorators = [
    StoreDecorator({ profile: { form: data, isLoading: true } }),
];
export const withError = Template.bind({});
withError.args = {};
withError.decorators = [
    StoreDecorator({ profile: { form: data, error: 'error' } }),
];
export const withValidationErrors = Template.bind({});
withValidationErrors.args = {};
withValidationErrors.decorators = [
    StoreDecorator({
        profile: {
            form: data,
            validationErrors: [
                ValidationProfileErrors.INCORRECT_AGE,
                ValidationProfileErrors.INCORRECT_USERNAME,
            ],
        },
    }),
];
