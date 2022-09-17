import { MenuLink } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const template = (args) => {
  return (
    <div>
      <MenuLink {...args} />
    </div>
  );
};
