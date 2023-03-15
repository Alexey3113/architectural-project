import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import 'app/styles/index.scss';
import { ArticleBlockType } from '../../model/types/article.types';

export default {
    title: 'entities/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    block: {
        id: '5',
        type: ArticleBlockType.IMAGE,
        title: 'Заголовок этого блока',
        src: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    },
};
