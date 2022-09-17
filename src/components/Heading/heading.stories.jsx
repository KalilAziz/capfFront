import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const light = (args) => <Heading {...args} />;
light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const dark = (args) => <Heading {...args} />;
dark.args = {
  colorDark: false,
};
