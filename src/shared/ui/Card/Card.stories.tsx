import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';
import 'app/styles/index.scss';

export default {
    title: 'shared/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {

};
