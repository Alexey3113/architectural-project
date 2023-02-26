import { UserSchema } from './model/types/user';
import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
    userReducer, UserSchema, userActions, getUserAuthData,
};
