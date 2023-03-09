import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidationProfileErrors, Profile } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

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

describe('Testing validateProfileData', () => {
    it('success', async () => {
        const profile: DeepPartial<Profile> = { ...data };
        const result = validateProfileData(profile);

        expect(result).toEqual([]);
    });
    it('incorrect user data', async () => {
        const profile: DeepPartial<Profile> = { ...data, lastname: '' };
        const result = validateProfileData(profile);

        expect(result).toEqual([ValidationProfileErrors.INCORRECT_USER_DATA]);
    });
    it('incorrect user age', async () => {
        const profile: DeepPartial<Profile> = { ...data, age: undefined };
        const result = validateProfileData(profile);

        expect(result).toEqual([ValidationProfileErrors.INCORRECT_AGE]);
    });
    it('incorrect user country', async () => {
        const profile: DeepPartial<Profile> = { ...data, country: undefined };
        const result = validateProfileData(profile);

        expect(result).toEqual([ValidationProfileErrors.INCORRECT_COUNTRY]);
    });
    it('incorrect data', async () => {
        const profile: DeepPartial<Profile> = {};
        const result = validateProfileData(profile);

        expect(result).toEqual([
            ValidationProfileErrors.INCORRECT_USER_DATA,
            ValidationProfileErrors.INCORRECT_AGE,
            ValidationProfileErrors.INCORRECT_USERNAME,
            ValidationProfileErrors.INCORRECT_COUNTRY,
        ]);
    });
    it('incorrect username', async () => {
        const profile: DeepPartial<Profile> = { ...data, username: '' };
        const result = validateProfileData(profile);

        expect(result).toEqual([ValidationProfileErrors.INCORRECT_USERNAME]);
    });
});
