import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({ children, link }) => {
  return <Styled.Container href={link}>{children}</Styled.Container>;
};
Button.propTypes = {
  children: P.node,
  link: P.string.isRequired,
};
