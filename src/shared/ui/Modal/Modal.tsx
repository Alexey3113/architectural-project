import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, MouseEvent, ReactNode, useEffect, useRef, useState,
} from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 150;

export const Modal: FC<ModalProps> = (props) => {
    const {
        children, className, isOpen, onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    const handleCloseModal = () => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    };

    const handleClickContent = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    useEffect(() => () => {
        clearTimeout(timerRef.current);
    }, []);

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={handleCloseModal}>
                <div className={cls.content} onClick={handleClickContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};
