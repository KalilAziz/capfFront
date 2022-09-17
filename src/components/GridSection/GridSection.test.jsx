import { screen } from '@testing-library/react';
import { GridSection } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GridSection>', () => {
  it('should render', () => {
    renderTheme(<GridSection>children</GridSection>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
