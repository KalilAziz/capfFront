import { Menu } from '.';
import linksMock from '../NavLinks/mock';
export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: 'https://capf.com.br/svg/capf-logo.svg',
    },
  },
};

export const template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
