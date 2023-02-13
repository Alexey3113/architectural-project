import { Story } from '@storybook/api';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (story: () => Story) => (
    <div className={`app ${theme}`}>
        {story()}
    </div>
);
