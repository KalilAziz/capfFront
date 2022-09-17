import { NavLinks } from '.';
import links from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links,
  },
};

export const template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
