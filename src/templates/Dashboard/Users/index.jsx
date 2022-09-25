import { HeaderDashboard } from '../../../components/Dashboard/HeaderDashboard';
import * as Styled from './styles';
import { SectionBackground } from '../../../components/SectionBackground';

export const DashboardUsuario = () => {
  return (
    <Styled.Container>
      <HeaderDashboard page="usuarios">
        <SectionBackground> Usuáriopoooo </SectionBackground>
      </HeaderDashboard>
    </Styled.Container>
  );
};
