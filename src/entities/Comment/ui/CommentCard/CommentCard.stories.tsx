import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentCard } from './CommentCard';
import { Comment } from '../../model/types/comment';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const comment: Comment = {
  id: '1',
  text: 'some comment 1',
  user: {
    id: '1',
    username: 'admin',
    avatar:
      'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZyYWxiZXJ0X2VpbnN0ZWluX3BvcnRyYWl0XzExNDQ5NjUtaW1hZ2Uta3oyZHpncGQuanBn.jpg',
  },
};

export const Light = Template.bind({});
Light.args = {
  comment,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
  comment,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
