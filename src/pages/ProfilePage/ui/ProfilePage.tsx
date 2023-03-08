import { classNames } from 'shared/lib/classNames/classNames';

import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    ProfileCard,
    ValidationProfileErrors,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getValidationErrors,
    profileActions,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface IProfilePageProps {
  className?: string;
}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: IProfilePageProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const data = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validationErrors = useSelector(getValidationErrors);

    const translatedValidationsErrors = useMemo(() => ({
        [ValidationProfileErrors.NO_DATA]: t('Заполните данные профиля'),
        [ValidationProfileErrors.INCORRECT_AGE]: t('Некорректно указан возраст'),
        [ValidationProfileErrors.INCORRECT_COUNTRY]: t('Некорректно указана страна'),
        [ValidationProfileErrors.INCORRECT_USERNAME]: t('Некорректно указан username'),
        [ValidationProfileErrors.INCORRECT_USER_DATA]: t('Заполните имя и фамилию верно'),
        [ValidationProfileErrors.SERVER_ERROR]: t('Неизвестная ошибка'),
    }), [t]);

    const handleChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );

    const handleChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );
    const handleChangeAge = useCallback(
        (value?: string) => {
            if (Number.isInteger(Number(value || 0))) {
                dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
            }
        },
        [dispatch],
    );

    const handleChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );
    const handleChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );
    const handleChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );
    const handleChangeCurrency = useCallback(
        (value: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value || '' }));
        },
        [dispatch],
    );
    const handleChangeCountry = useCallback(
        (value: Country) => {
            dispatch(profileActions.updateProfile({ country: value || '' }));
        },
        [dispatch],
    );

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validationErrors?.length && validationErrors.map((error) => (
                    <Text theme={TextTheme.ERROR} text={translatedValidationsErrors[error]} />
                ))}
                <ProfileCard
                    handleChangeFirstName={handleChangeFirstName}
                    handleChangeLastName={handleChangeLastName}
                    isLoading={isLoading}
                    data={data}
                    error={error}
                    readonly={readonly}
                    handleChangeAge={handleChangeAge}
                    handleChangeCity={handleChangeCity}
                    handleChangeAvatar={handleChangeAvatar}
                    handleChangeUsername={handleChangeUsername}
                    handleChangeCurrency={handleChangeCurrency}
                    handleChangeCountry={handleChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
