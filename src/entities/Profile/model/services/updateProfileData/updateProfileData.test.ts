import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidationProfileErrors } from '../../types/profile';

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

describe('Testing updateProfileData', () => {
    it('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: data },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(result.payload).toEqual(data);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
    it('error validation', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: { ...data, age: undefined, first: '' } },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(result.payload).toEqual([
            ValidationProfileErrors.INCORRECT_USER_DATA,
            ValidationProfileErrors.INCORRECT_AGE,
        ]);
        expect(thunk.api.put).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
    it('server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: data },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 501 }));
        const result = await thunk.callThunk();

        expect(result.payload).toEqual([
            ValidationProfileErrors.SERVER_ERROR,
        ]);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
