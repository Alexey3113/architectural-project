import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  onClose: () => void;
  isOpen: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onClose, className } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
