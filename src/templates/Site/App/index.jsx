import * as Styled from './styles.js';
import { Header } from '../../../components/Site/Header';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Styled.Container>
        <Header />
        <Outlet />
      </Styled.Container>
    </>
  );
};
