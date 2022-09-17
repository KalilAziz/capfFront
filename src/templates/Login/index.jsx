import { HeaderLogin } from '../../components/HeaderLogin';
import { SectionBackground } from '../../components/SectionBackground';
import * as Styled from './styles';

export const Login = () => {
  return (
    <Styled.Container>
      <SectionBackground>
        <HeaderLogin />
      </SectionBackground>
    </Styled.Container>
  );
};
