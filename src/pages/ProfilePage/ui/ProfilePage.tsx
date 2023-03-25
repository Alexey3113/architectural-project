import { classNames } from 'shared/lib/classNames/classNames';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency/model/types/currency';
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
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from 'shared/ui/Text/Text';
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
    const { id } = useParams<{ id: string }>();

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

    useInitialEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData(id || ''));
        }
    });

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
