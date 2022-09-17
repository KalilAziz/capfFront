import { useContext } from 'react';
import { LoginContext } from '../../context/LoginProvider/context';
import * as Styled from './styles';

export const Dashboard = () => {
  // eslint-disable-next-line
  const { state, dispatch, signInGoogle, signed, user, signOut } =
    useContext(LoginContext);
  return (
    <Styled.Container>
      <button onClick={() => signOut()}>Sair</button>
    </Styled.Container>
  );
};
