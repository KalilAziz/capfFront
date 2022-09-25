import * as Styled from './styles';
import { Outlet } from 'react-router-dom';
import { LoginContext } from '../../../context/LoginProvider/context';
import { useContext } from 'react';
export const App = () => {
  const { signed } = useContext(LoginContext);
  return (
    <Styled.Container>{signed ? <Outlet /> : <Outlet />}</Styled.Container>
  );
};
