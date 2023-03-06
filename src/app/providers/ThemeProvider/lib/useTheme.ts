import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    useEffect(() => {
        document.body.className = theme ?? Theme.LIGHT;
        // eslint-disable-next-line
    }, []);

    return {
        theme: theme ?? Theme.LIGHT,
        toggleTheme,
    };
};
