import { GridContext } from '.';
import mock from './mock';

export default {
  title: 'GridContext',
  component: GridContext,
  args: mock,
};

export const template = (args) => {
  return (
    <div>
      <GridContext {...args} />
    </div>
  );
};
