import { GridTwuColumn } from '.';
import mock from './mock';

export default {
  title: 'GridTwuColumn',
  component: GridTwuColumn,
  args: mock,
};

export const template = (args) => {
  return (
    <div>
      <GridTwuColumn {...args} />
    </div>
  );
};
