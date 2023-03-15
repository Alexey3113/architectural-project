import { UserSchema } from './model/types/user';
import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getAuthInited } from './model/selectors/getAuthInited/getAuthInited';

export {
    userReducer, UserSchema, userActions, getUserAuthData, getAuthInited,
};
