import { classNames } from 'helpers/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={toggleLanguage}
            className={classNames('', {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};
