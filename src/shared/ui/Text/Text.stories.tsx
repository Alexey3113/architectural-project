import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Text',
    title: 'Text',
};
export const Error = Template.bind({});
Error.args = {
    text: 'Text',
    title: 'Text',
    theme: TextTheme.ERROR,
};
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Text',
};
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text',
};
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Text',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
