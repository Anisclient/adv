import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Code from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Light = Template.bind({});
Light.args = {
  text: 'function myFunction() {\n            console.log(this === window)\n          }\n          \n          let functionalExpression = function () {\n            console.log(this === window)\n          }\n          \n          myFunction()\n          functionalExpression()',
};

export const Dark = Template.bind({});
Dark.args = {
  text: 'function myFunction() {\n            console.log(this === window)\n          }\n          \n          let functionalExpression = function () {\n            console.log(this === window)\n          }\n          \n          myFunction()\n          functionalExpression()',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
