import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentList } from './CommentList';
import { Comment } from '../../model/types/comment';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const comments: Comment[] = [
  {
    id: '1',
    text: 'some comment 1',
    user: {
      id: '1',
      username: 'admin',
      avatar:
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZyYWxiZXJ0X2VpbnN0ZWluX3BvcnRyYWl0XzExNDQ5NjUtaW1hZ2Uta3oyZHpncGQuanBn.jpg',
    },
  },
  {
    id: '2',
    text: 'some comment 2 csdcdc fsdfdaf ',
    user: {
      id: '2',
      username: 'user',
    },
  },
  {
    id: '3',
    text: ' fdsf er a z dfvacdvaf fscsd dssome comment 1',
    user: {
      id: '1',
      username: 'admin',
    },
  },
];

export const Light = Template.bind({});
Light.args = {
  comments,
};

export const Dark = Template.bind({});
Dark.args = {
  comments,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
