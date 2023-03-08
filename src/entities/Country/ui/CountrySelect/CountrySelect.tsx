import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { Country } from 'entities/Country/model/types/country';

interface ICountrySelectProps {
  className?: string;
  value?: string;
  onChange: (val: Country) => void;
  readonly?: boolean;
}

const options: SelectOption[] = [
    {
        content: Country.Armenia,
        value: Country.Armenia,
    },
    {
        content: Country.Belarus,
        value: Country.Belarus,
    },
    {
        content: Country.Kazakhstan,
        value: Country.Kazakhstan,
    },
    {
        content: Country.Russia,
        value: Country.Russia,
    },
    {
        content: Country.Ukraine,
        value: Country.Ukraine,
    },
];

export const CountrySelect = (props: ICountrySelectProps) => {
    const {
        className, onChange, value, readonly,
    } = props;

    const { t } = useTranslation();

    const handleChange = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            onChange={handleChange}
            value={value}
            readonly={readonly}
        />
    );
};
