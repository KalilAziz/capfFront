import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    // Teste dos valores padrões: Cor, FontSize e textTransform
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xxlarge,
      'text-transform': 'none',
    });
  });

  // Teste do background white caso o colorDark seja falso
  it('should render with white Color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  // Teste do background dark caso o colorDark seja true
  it('should render with dark Color', () => {
    renderTheme(<Heading colorDark={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
    });
  });

  it('should render with heading sizes', () => {
    renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.small,
    });
  });

  // Teste do fontSize caso a atributo size seja xsmall
  it('should render with heading sizes', () => {
    renderTheme(<Heading size="xsmall">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xsmall,
    });
  });

  // Teste do fontSize caso a atributo size seja small
  it('should render with heading sizes', () => {
    renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.small,
    });
  });

  // Teste do fontSize caso a atributo size seja medium
  it('should render with heading sizes', () => {
    renderTheme(<Heading size="medium">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  // Teste do fontSize caso a atributo size seja large
  it('should render with heading sizes', () => {
    renderTheme(<Heading size="large">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });
  });

  // Teste do fontSize caso a atributo size seja xlarge
  it('should render with heading sizes', () => {
    renderTheme(<Heading size="xlarge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });
  });

  // Teste do fontSize caso a atributo size seja xxlarge
  it('should render with heading sizes', () => {
    renderTheme(<Heading size="xxlarge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xxlarge,
    });
  });

  // Teste do fontSize caso a atributo size seja xhuge e a tela seja diminuida para menos de 768px(tag media)
  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="xhuge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  // Teste do fontSize caso esteja no mobile
  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.huge,
    });
  });

  // Teste do fontSize caso a atributo size seja xhuge
  it('should render with heading sizes', () => {
    renderTheme(<Heading size="xhuge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  // Teste do Uppercase
  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  // Teste do h1
  it('should render corracti hadding element', () => {
    const { container } = renderTheme(<Heading as="h1">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    const h1 = container.querySelector('h1');

    expect(h1.tagName.toLowerCase()).toBe('h1');
  });

  // Teste do h2
  it('should render corracti hadding element', () => {
    const { container } = renderTheme(<Heading as="h2">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    const h2 = container.querySelector('h2');

    expect(h2.tagName.toLowerCase()).toBe('h2');
  });

  // Teste do h3
  it('should render corracti hadding element', () => {
    const { container } = renderTheme(<Heading as="h3">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    const h3 = container.querySelector('h3');

    expect(h3.tagName.toLowerCase()).toBe('h3');
  });

  // Teste do h4
  it('should render corracti hadding element', () => {
    const { container } = renderTheme(<Heading as="h4">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    const h4 = container.querySelector('h4');

    expect(h4.tagName.toLowerCase()).toBe('h4');
  });

  // Teste do h5
  it('should render corracti hadding element', () => {
    const { container } = renderTheme(<Heading as="h5">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    const h5 = container.querySelector('h5');

    expect(h5.tagName.toLowerCase()).toBe('h5');
  });

  // Teste do h6
  it('should render corracti hadding element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
