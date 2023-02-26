import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entities/User';
import { IUser } from 'entities/User/model/types/user';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<IUser>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error('error');
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
