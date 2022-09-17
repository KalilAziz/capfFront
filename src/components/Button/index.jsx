import P from 'prop-types';
import * as Styled from './styles';

// eslint-disable-next-line
export const Button = ({ children, link }) => {
  return <Styled.Container to={link}>{children}</Styled.Container>;
};
Button.propTypes = {
  children: P.node,
  link: P.string.isRequired,
};
