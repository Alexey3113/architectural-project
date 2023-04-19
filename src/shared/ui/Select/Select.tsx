import { classNames } from 'shared/lib/classNames/classNames';

import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface ISelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: ISelectProps<T>) => {
    const {
        className, label, options, onChange, value, readonly,
    } = props;

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(
        () => options?.map((opt) => (
            <option className={cls.option} value={opt.value} key={opt.value}>
                {opt.content}
            </option>
        )),
        [options],
    );

    console.log('disable', readonly);
    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={handleChange}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
