import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return password value', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: 'test',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('test');
    });
});
