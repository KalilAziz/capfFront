import { Button } from '.';
import { BsBoxArrowRight } from 'react-icons/ai';

export default {
  title: 'Button',
  component: Button,
  args: {},
};

export const template = (args) => {
  return (
    <div>
      <Button {...args} />
      <BsBoxArrowRight />
    </div>
  );
};
