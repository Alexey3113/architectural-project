import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { IUser } from 'entities/User/model/types/user';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string
}

export const loginByUsername = createAsyncThunk<
IUser,
LoginByUsernameProps,
ThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<IUser>('/login', authData);

            if (!response.data) {
                throw new Error('error');
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
