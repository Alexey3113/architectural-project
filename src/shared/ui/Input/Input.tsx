import { classNames } from 'shared/lib/classNames/classNames';

import {
    ChangeEvent, InputHTMLAttributes, memo, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  value?: string | number;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        onChange,
        value,
        className,
        type = 'text',
        placeholder,
        readonly,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !readonly;

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {!!placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={handleChangeValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onSelect={handleSelect}
                    readOnly={readonly}
                    {...otherProps}
                />

                {isCaretVisible && (
                    <span
                        style={{ left: `${caretPosition * 8}px` }}
                        className={cls.caret}
                    />
                )}
            </div>
        </div>
    );
});
