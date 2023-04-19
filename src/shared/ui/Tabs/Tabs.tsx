import { classNames } from 'shared/lib/classNames/classNames';

import { useCallback } from 'react';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
    value: string;
    content: string
}

interface ITabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onChangeTab: (tab: TabItem) => void;
}

export const Tabs = (props: ITabsProps) => {
    const {
        onChangeTab, tabs, value, className,
    } = props;

    const handleChange = useCallback(
        (tab: TabItem) => () => {
            onChangeTab(tab);
        },
        [onChangeTab],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={tab.value}
                    onClick={handleChange(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
