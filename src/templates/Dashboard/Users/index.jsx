import * as Styled from './styles';
import { HeaderDashboard } from '../../../components/Dashboard/HeaderDashboard';
import { SectionBackground } from '../../../components/SectionBackground';
import { UsersDashboard } from '../../../components/Dashboard/UsersDashboard';

export const DashboardUsuario = () => {
  return (
    <Styled.Container>
      <HeaderDashboard page="usuarios">
        <SectionBackground>
          <UsersDashboard />
        </SectionBackground>
      </HeaderDashboard>
    </Styled.Container>
  );
};
