import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import cls from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface IProfileCardProps {
 className?: string;
}

export const ProfileCard = ({ className }: IProfileCardProps) => {
    const { t } = useTranslation();
    const data = useSelector(getProfileData);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button theme={ButtonTheme.OUTLINED}>{t('Сохранить')}</Button>
            </div>

            <div className={cls.data}>
                <Input value={data?.first} placeholder={t('Ваше имя')} className={cls.input} />
                <Input value={data?.lastname} placeholder={t('Ваше фамалия')} className={cls.input} />
            </div>
        </div>
    );
};
