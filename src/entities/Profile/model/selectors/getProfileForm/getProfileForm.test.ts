import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

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

describe('getProfileForm', () => {
    test('should return error value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
});
