import { classNames } from 'shared/lib/classNames/classNames';

import {
    MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { scrollSavingActions } from 'widgets/ScrollSaving';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { getScrollSavingScrollByPath } from 'widgets/ScrollSaving/model/selectors/scrollSavingSelectors';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface IPageProps {
 className?: string;
 children: ReactNode;
 onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: IPageProps) => {
    const endRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollSavingScrollByPath(state, pathname));

    const handleScroll = useThrottle((e: UIEvent<HTMLElement>) => {
        dispatch(scrollSavingActions.setScroll({ path: pathname, scroll: e.currentTarget.scrollTop }));
    }, 500);

    useInfiniteScroll({ triggerRef: endRef, wrapperRef, callback: onScrollEnd });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={handleScroll}
        >
            {children}
            <div ref={endRef} />
        </section>
    );
};
