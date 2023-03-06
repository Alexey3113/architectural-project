import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
    FC, MouseEvent, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 150;

export const Modal: FC<ModalProps> = (props) => {
    const {
        children, className, isOpen, onClose, lazy,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    const handleCloseModal = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const handleClickContent = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        clearTimeout(timerRef.current);
    }, []);

    if (lazy && !isMounted) {
        return null;
    }

    return createPortal(
        (
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleCloseModal}>
                    <div className={cls.content} onClick={handleClickContent}>
                        {children}
                    </div>
                </div>
            </div>
        ), document.body,
    );
};
