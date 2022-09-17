import { GridTwuColumn } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridTwuColumn>', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwuColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
