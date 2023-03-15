import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

interface ICodeProps {
 className?: string;
 text: string;
}

export const Code = ({ className, text }: ICodeProps) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} className={cls.copyBtn} onClick={handleCopy}>
                <CopyIcon />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
