import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

const data = {
    age: 22,
    avatar: 'https://chudo-prirody.com/uploads/posts/2021-08/1628904992_30-p-skachat-foto-milikh-kotikov-34.jpg',
    city: 'Москва',
    country: Country.Russia,
    currency: Currency.EUR,
    first: 'Дмитрий',
    lastname: 'Иванов',
    username: 'DmitryIvanov',
};

export const Default = Template.bind({});
Default.args = {
    data,
};
export const withError = Template.bind({});
withError.args = {
    error: 'Ошибка!',
};
export const withLoading = Template.bind({});
withLoading.args = {
    isLoading: true,
};
