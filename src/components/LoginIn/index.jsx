import P from 'prop-types';
import * as Styled from './styles';

export const LoginIn = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};
LoginIn.propTypes = {
  children: P.node,
};
