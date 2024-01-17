import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const MainText = Template.bind({});
MainText.args = {
  title: 'Text title',
  text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, sapiente.',
};

export const ErrorText = Template.bind({});
ErrorText.args = {
  title: 'Text title',
  text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, sapiente.',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Only title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, sapiente.',
};

export const MainTextDark = Template.bind({});
MainTextDark.args = {
  title: 'Text title',
  text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, sapiente.',
};
MainTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Only title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, sapiente.',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const MainTextSizeL = Template.bind({});
MainTextSizeL.args = {
  title: 'Text title',
  text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, sapiente.',
  size: TextSize.L,
};
