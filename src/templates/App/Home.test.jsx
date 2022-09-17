import { renderTheme } from '../../styles/render-theme';
import { Home } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('shoud render home', () => {
    renderTheme(<Home />);
  });
});

/*
  //pegando elemento filho e depois o elemento pai com a função parentElement
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello Word',
  }).parentElement;

  //testando cor do background
  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBg,
  });

  //Outra forma de testar o backgroung
  //expect(headingContainer).toHaveStyleRule('background', 'red');

  expect(headingContainer).toHaveStyleRule();

  expect(headingContainer).toMatchSnapshot();

});
*/
