import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileData', () => {
    test('should return error value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileLoading(state as StateSchema)).toEqual(true);
    });
});
