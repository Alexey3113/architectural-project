import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
    test('readonly testing', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
        ).toEqual({
            readonly: true,
        } as ProfileSchema);
    });
    test('cancelEdit', () => {
        const data = { first: 'test1', lastname: 'test' };
        const state: DeepPartial<ProfileSchema> = { data, form: { first: 'test', lastname: '12' } };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            data, form: data, readonly: true, validationErrors: undefined,
        } as ProfileSchema);
    });
    test('updateProfile', () => {
        const data = { first: 'test1', lastname: 'test' };
        const state: DeepPartial<ProfileSchema> = { data };
        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfile({ first: 'test', lastname: '12' })),
        ).toEqual({
            data,
            form: { first: 'test', lastname: '12' },
        } as ProfileSchema);
    });
    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { error: 'something', isLoading: false };
        expect(
            profileReducer(state as ProfileSchema, fetchProfileData.pending),
        ).toEqual({
            error: undefined,
            isLoading: true,
        } as ProfileSchema);
    });
});
