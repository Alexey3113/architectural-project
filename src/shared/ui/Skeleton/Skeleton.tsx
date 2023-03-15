import { classNames } from 'shared/lib/classNames/classNames';

import { CSSProperties, useMemo } from 'react';
import cls from './Skeleton.module.scss';

interface ISkeletonProps {
 className?: string;
 height?: string | number;
 width?: string | number;
 border?: string;
}

export const Skeleton = (props: ISkeletonProps) => {
    const {
        height, className, width, border,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width,
        height,
        borderRadius: border,
    }), [width, height, border]);

    return (
        <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />
    );
};
