import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoginContext } from '../../context/LoginProvider/context';

export const PrivateRoute = () => {
  const { signed } = useContext(LoginContext);
  return signed ? <Outlet /> : <Navigate to="/" />;
};
