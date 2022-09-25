import { HeaderDashboard } from '../../../components/Dashboard/HeaderDashboard';
import * as Styled from './styles';
import { SectionBackground } from '../../../components/SectionBackground';

export const DashboardMeusEventos = () => {
  return (
    <Styled.Container>
      <HeaderDashboard page="eventos">
        <SectionBackground>Meus Eventossss</SectionBackground>
      </HeaderDashboard>
    </Styled.Container>
  );
};
