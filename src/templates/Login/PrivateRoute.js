import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoginContext } from '../../context/LoginProvider/context';

// Caso o usuário esteja desligado e tente acessar a página de dashboard, sempre será deslogado.

export const PrivateRoute = () => {
  const { signed } = useContext(LoginContext);
  return signed ? <Outlet /> : <Navigate to="/" />;
};
