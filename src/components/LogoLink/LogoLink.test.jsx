import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink>', () => {
  it('should render test logo', () => {
    renderTheme(<LogoLink link="#target" text="olá mundo" />);
    const heading = screen.getByRole('heading', { name: 'olá mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
    //screen.debug(heading);
  });

  it('should render test logo', () => {
    renderTheme(
      <LogoLink link="#target" text="olá mundo" srcImg="image.jpeg" />,
    );
    const heading = screen.getByRole('heading', { name: 'olá mundo' });
    expect(heading.firstChild.firstChild).toHaveAttribute('src', 'image.jpeg');
    //screen.debug(heading);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="olá mundo" srcImg="image.jpeg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
