import { classNames } from 'shared/lib/classNames/classNames';

import { HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
 className?: string;
 children: ReactNode
}

export const Card = (props: ICardProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
};
