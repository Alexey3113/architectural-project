import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slices/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        isLoading, password, username, error,
    } = useSelector(getLoginState);

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

    const handleLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
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
    );
});
