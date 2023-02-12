import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

export const BugButton = () => {
    const { t } = useTranslation();

    const [error, setError] = useState<boolean>(false);

    const throwError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <div>
            <Button onClick={throwError}>
                {t('throw error')}
            </Button>
        </div>
    );
};
