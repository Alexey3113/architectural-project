import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './AddCommentForm.module.scss';
import { getTextAddCommentForm } from '../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice';

export interface IAddCommentFormProps {
 className?: string;
 onSendComment: (val: string) => void;
}

export const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: IAddCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getTextAddCommentForm);

    const handleChangeCommentValue = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const handleSendComment = useCallback(() => {
        if (text) {
            onSendComment(text);
            dispatch(addCommentFormActions.setText(''));
        }
    }, [dispatch, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите свой комментарий')}
                    value={text}
                    onChange={handleChangeCommentValue}
                />

                <Button onClick={handleSendComment}>
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
