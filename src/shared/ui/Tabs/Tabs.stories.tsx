import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from './Tabs';
import 'app/styles/index.scss';
import { action} from '@storybook/addon-actions'

export default {
    title: 'shared/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const tabs = [
    {
        value: "tab_val_1",
        content: "Таб 1"
    },
    {
        value: "tab_val_2",
        content: "Таб 2"
    },
    {
        value: "tab_val_3",
        content: "Таб 3"
    },
]

export const Default = Template.bind({});
Default.args = {
    onChangeTab: action('onChangeTab'),
    tabs: tabs,
    value: 'tab_val_1'
};