import { GridContext } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridContext>', () => {
  it('should render grid content', () => {
    const { container } = renderTheme(<GridContext {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid content', () => {
    const { container } = renderTheme(
      <GridContext {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
