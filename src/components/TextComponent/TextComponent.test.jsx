import { screen } from '@testing-library/react';
import { TextComponent } from './';
import { renderTheme } from '../../styles/render-theme';

describe('<TextComponent>', () => {
  it('should render a test', () => {
    renderTheme(<TextComponent>children</TextComponent>);
    expect(screen.getByText('children')).toBeInTheDocument();
  });
});
