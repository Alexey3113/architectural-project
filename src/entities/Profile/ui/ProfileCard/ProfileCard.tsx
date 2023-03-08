import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface IProfileCardProps {
  className?: string;
  data?: Profile | null;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  handleChangeLastName?: (value?: string) => void;
  handleChangeFirstName?: (value?: string) => void;
  handleChangeAge?: (value?: string) => void;
  handleChangeCity?: (value?: string) => void;
  handleChangeAvatar?: (value?: string) => void;
  handleChangeUsername?: (value?: string) => void;
  handleChangeCountry: (value: Country) => void;
  handleChangeCurrency: (value: Currency) => void;
}

export const ProfileCard = (props: IProfileCardProps) => {
    const {
        isLoading,
        className,
        data,
        error,
        handleChangeFirstName,
        handleChangeLastName,
        handleChangeAge,
        handleChangeAvatar,
        handleChangeCity,
        readonly,
        handleChangeUsername,
        handleChangeCountry,
        handleChangeCurrency,
    } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка')}
                    text={t('Непредвиденная ошибка! Обратитесь в службу поддержки')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}

                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={handleChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваше фамалия')}
                    className={cls.input}
                    onChange={handleChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Возраст')}
                    onChange={handleChangeAge}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    onChange={handleChangeCity}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Аватар')}
                    onChange={handleChangeAvatar}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Пользователь')}
                    onChange={handleChangeUsername}
                    className={cls.input}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    onChange={handleChangeCurrency}
                    value={data?.currency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    onChange={handleChangeCountry}
                    value={data?.country}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
