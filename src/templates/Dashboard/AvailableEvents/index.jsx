import { HeaderDashboard } from '../../../components/Dashboard/HeaderDashboard';
import * as Styled from './styles';
import { SectionBackground } from '../../../components/SectionBackground';
export const AvailableEvents = () => {
  return (
    <Styled.Container>
      <HeaderDashboard page="eventosDisponiveis">
        <SectionBackground> Eventosss disponíveis</SectionBackground>
      </HeaderDashboard>
    </Styled.Container>
  );
};
