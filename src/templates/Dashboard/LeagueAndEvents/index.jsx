import { HeaderDashboard } from '../../../components/Dashboard/HeaderDashboard';
import * as Styled from './styles';
import { SectionBackground } from '../../../components/SectionBackground';
import { Outlet } from 'react-router-dom';

export const DashboardLigaeEventos = () => {
  return (
    <Styled.Container>
      <HeaderDashboard page="ligasEEentos">
        <SectionBackground>
          <Outlet />
        </SectionBackground>
      </HeaderDashboard>
    </Styled.Container>
  );
};
