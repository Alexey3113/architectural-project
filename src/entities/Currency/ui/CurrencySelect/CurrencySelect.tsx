import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface ICurrencySelectProps {
  className?: string;
  value?: string;
  onChange: (val: Currency) => void;
  readonly?: boolean;
}

const options: SelectOption[] = [
    {
        content: Currency.EUR,
        value: Currency.EUR,
    },
    {
        content: Currency.RUB,
        value: Currency.RUB,
    },
    {
        content: Currency.USD,
        value: Currency.USD,
    },
];

export const CurrencySelect = (props: ICurrencySelectProps) => {
    const {
        className, onChange, value, readonly,
    } = props;

    const { t } = useTranslation();

    const handleChange = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    console.log('d', readonly);
    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            onChange={handleChange}
            value={value}
            readonly={readonly}
        />
    );
};
