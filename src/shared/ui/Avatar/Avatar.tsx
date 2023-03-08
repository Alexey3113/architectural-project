import { classNames } from 'shared/lib/classNames/classNames';

import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface IAvatarProps {
 className?: string;
 src?: string,
 size?: number;
alt?: string;
}

export const Avatar = (props: IAvatarProps) => {
    const {
        className, size, src, alt,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img src={src} className={classNames(cls.Avatar, {}, [className])} style={styles} alt={alt} />
    );
};
