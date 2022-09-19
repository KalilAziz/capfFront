import P from 'prop-types';
import * as Styled from './styles';
import { useContext } from 'react';

//Provider
import { LoginContext } from '../../context/LoginProvider/context';

// eslint-disable-next-line
export const Button = ({ children, link }) => {
  const { signOut } = useContext(LoginContext);
  return (
    <Styled.Container to={link} onClick={() => signOut()}>
      {children}
    </Styled.Container>
  );
};
Button.propTypes = {
  children: P.node,
  link: P.string.isRequired,
};
