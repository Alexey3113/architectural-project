import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

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

describe('getProfileData', () => {
    test('should return error value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
});
