import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getProfileForm, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface IProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: IProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const profileData = useSelector(getProfileForm);
    const userData = useSelector(getUserAuthData);

    const canEdit = profileData?.id === userData?.id;

    const handleEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const handleSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const handleCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button onClick={handleEdit} theme={ButtonTheme.OUTLINED}>
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <div>
                            <Button onClick={handleSave} theme={ButtonTheme.OUTLINED} className={cls.save}>
                                {t('Сохранить')}
                            </Button>
                            <Button onClick={handleCancel} theme={ButtonTheme.OUTLINED_RED}>
                                {t('Отменить')}
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
