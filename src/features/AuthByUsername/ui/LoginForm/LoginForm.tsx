import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducerList = {
    login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const username = useSelector(getLoginUsername);
    const error = useSelector(getLoginError);

    const handleChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const handleChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const handleLoginClick = useCallback(async () => {
        // @ts-ignore
        const result = await dispatch(loginByUsername({ password, username }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && (
                    <Text text={t('Неверный логин или пароль')} theme={TextTheme.ERROR} />
                )}
                <Input
                    className={cls.input}
                    type="text"
                    placeholder={t('Введите username')}
                    autoFocus
                    onChange={handleChangeUsername}
                    value={username}
                />
                <Input
                    className={cls.input}
                    type="text"
                    onChange={handleChangePassword}
                    placeholder={t('Введите password')}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINED}
                    onClick={handleLoginClick}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
