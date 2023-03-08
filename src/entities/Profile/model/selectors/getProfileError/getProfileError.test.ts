import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('should return error value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'test',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('test');
    });
});
