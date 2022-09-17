import { HeaderLogin } from '../../components/HeaderLogin';
import { LoginIn } from '../../components/LoginIn';
import { SectionBackground } from '../../components/SectionBackground';
import * as Styled from './styles';

export const System = () => {
  return (
    <Styled.Container>
      <SectionBackground>
        <HeaderLogin />
        <LoginIn />
      </SectionBackground>
    </Styled.Container>
  );
};
