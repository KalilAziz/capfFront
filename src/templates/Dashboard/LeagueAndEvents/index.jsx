import { HeaderDashboard } from '../../../components/Dashboard/HeaderDashboard';
import * as Styled from './styles';
import { SectionBackground } from '../../../components/SectionBackground';

export const DashboardLigaeEventos = () => {
  return (
    <Styled.Container>
      <HeaderDashboard page="ligasEEentos">
        <SectionBackground> Liga e eventos </SectionBackground>
      </HeaderDashboard>
    </Styled.Container>
  );
};
